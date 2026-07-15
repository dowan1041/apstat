/* ============================================
   APP ENGINE
   Router + renderers + localStorage progress.
   Content lives in unit*.js files via registerUnit /
   registerChapters — this file never needs new
   content added to it.
   ============================================ */

/* ---------------- SUPABASE (auth + cloud sync) ----------------
   The anon key below is PUBLIC-safe ONLY because Row Level Security
   is enabled on every table it can reach (see supabase/schema.sql).
   Never place the service_role key here.
   Cloud mode only activates once real credentials are filled in AND
   the page is served over http(s); opening the file directly
   (file://), or leaving the placeholders in place, falls back to
   plain localStorage with no sign-in wall at all.
   ---------------------------------------------------------------- */
const SUPABASE_URL = 'https://botykekbgjkgnucbjufb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvdHlrZWtiZ2prZ251Y2JqdWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNzQ4MzIsImV4cCI6MjA5OTY1MDgzMn0.5wWWUaEAgqZ3Xb3ss-bsv6_eRWxVtCHJ23QeLG-rMyw';
const CLOUD = (location.protocol === 'http:' || location.protocol === 'https:')
  && !!window.supabase && SUPABASE_URL.indexOf('http') === 0 && SUPABASE_ANON_KEY.length > 20;
const sb = CLOUD ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { flowType: 'pkce', detectSessionInUrl: true, persistSession: true, autoRefreshToken: true }
}) : null;

let currentUser = null;
let currentUserRole = null;
let renderedForUser = null;

const STORAGE_KEY = 'apstats-fieldnotes-progress-v1';

function loadProgress(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveProgress(p){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch(e){}
}
let PROGRESS = loadProgress();
function chProg(id){
  if(!PROGRESS[id]) PROGRESS[id] = {};
  const p = PROGRESS[id];
  if(p.vocabKnown === undefined) p.vocabKnown = [];
  if(p.flashKnown === undefined) p.flashKnown = [];
  if(p.quizBest === undefined) p.quizBest = 0;
  if(p.quizDone === undefined) p.quizDone = false;
  if(p.fillBlankBest === undefined) p.fillBlankBest = 0;
  if(p.fillBlankDone === undefined) p.fillBlankDone = false;
  if(p.homeworkAnswers === undefined) p.homeworkAnswers = [];
  if(p.homeworkScore === undefined) p.homeworkScore = 0;
  if(p.homeworkDone === undefined) p.homeworkDone = false;
  if(p.homeworkFlagged === undefined) p.homeworkFlagged = [];
  return p;
}
function persist(){
  saveProgress(PROGRESS);
  if(CLOUD && currentUser){
    sb.from('user_state').upsert(
      { user_id: currentUser.id, key: 'progress', value: PROGRESS, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,key' }
    ).then(({error})=>{ if(error) console.warn('[sync] save failed:', error.message); });
  }
}
async function loadCloudProgress(){
  if(!CLOUD || !currentUser) return;
  try{
    const { data, error } = await sb.from('user_state').select('value').eq('user_id', currentUser.id).eq('key','progress').maybeSingle();
    if(error){ console.warn('[sync] load failed:', error.message); return; }
    if(data && data.value){
      PROGRESS = data.value;
      saveProgress(PROGRESS);
    } else {
      persist(); // first sign-in on this account — seed the cloud with local progress
    }
  } catch(e){ console.warn('[sync] load error:', e); }
}

/* ---------------- AUTH (Google sign-in / invite code) ---------------- */
function showAuthGate(){
  document.documentElement.classList.remove('auth-pending');
  document.getElementById('authGate').hidden = false;
  document.getElementById('codeGate').hidden = true;
  hideUserChip();
}
function showCodeGate(){
  document.documentElement.classList.remove('auth-pending');
  document.getElementById('authGate').hidden = true;
  document.getElementById('codeGate').hidden = false;
  hideUserChip();
}
function hideGates(){
  document.getElementById('authGate').hidden = true;
  document.getElementById('codeGate').hidden = true;
}
function showUserChip(){
  document.getElementById('userChip').hidden = false;
}
function hideUserChip(){
  document.getElementById('userChip').hidden = true;
}

async function checkRegistration(uid){
  try{
    const { data, error } = await sb.from('allowed_users').select('role').eq('user_id', uid).maybeSingle();
    if(error){ console.warn('[auth] registration check failed:', error.message); return { registered:false, role:null }; }
    return data ? { registered:true, role:data.role } : { registered:false, role:null };
  } catch(e){ console.warn('[auth] registration check error:', e); return { registered:false, role:null }; }
}

let hashListenerBound = false;
async function enterApp(){
  document.documentElement.classList.remove('auth-pending');
  hideGates();
  showUserChip();
  await loadCloudProgress();
  if(!hashListenerBound){
    window.addEventListener('hashchange', navigate);
    hashListenerBound = true;
  }
  navigate();
}

async function handleSession(session){
  const user = session && session.user;
  if(user){
    currentUser = user;
    if(renderedForUser === user.id) return; // ignore redundant fires (token refresh, tab focus)
    const { registered, role } = await checkRegistration(user.id);
    if(registered){
      currentUserRole = role;
      renderedForUser = user.id;
      await enterApp();
    } else {
      showCodeGate();
    }
  } else {
    currentUser = null;
    currentUserRole = null;
    renderedForUser = null;
    showAuthGate();
  }
}

function readAuthUrlError(){
  const qs = new URLSearchParams(location.search);
  const hs = new URLSearchParams((location.hash || '').replace(/^#/, ''));
  const desc = qs.get('error_description') || hs.get('error_description') || qs.get('error') || hs.get('error');
  return desc ? desc.replace(/\+/g, ' ') : '';
}

function wireAuth(){
  document.getElementById('googleSignIn').addEventListener('click', async ()=>{
    document.getElementById('authError').textContent = '';
    try{
      await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
    } catch(e){
      document.getElementById('authError').textContent = (e && e.message) || 'Sign-in failed. Please try again.';
    }
  });
  document.getElementById('signOutBtn').addEventListener('click', async ()=>{
    await sb.auth.signOut();
    location.reload();
  });
  const urlErr = readAuthUrlError();
  if(urlErr) document.getElementById('authError').textContent = urlErr;
}

async function submitAccessCode(){
  const inp = document.getElementById('accessCodeInput');
  const err = document.getElementById('codeError');
  const btn = document.getElementById('codeSubmit');
  const code = ((inp && inp.value) || '').trim();
  err.textContent = '';
  if(!code){ err.textContent = 'Enter your access code.'; return; }
  if(!currentUser){ err.textContent = 'Please sign in again.'; return; }
  btn.disabled = true; btn.textContent = 'Checking…';
  try{
    const { data, error } = await sb.rpc('redeem_access_code', { p_code: code });
    if(error){
      err.textContent = 'Something went wrong. Please try again.';
      console.warn('[code]', error.message);
    } else if(data === true){
      const { role } = await checkRegistration(currentUser.id);
      currentUserRole = role;
      renderedForUser = currentUser.id;
      await enterApp();
      return;
    } else {
      err.textContent = "That code isn't right. Please check and try again.";
    }
  } catch(e){
    err.textContent = 'Something went wrong. Please try again.';
    console.warn('[code]', e);
  }
  btn.disabled = false; btn.textContent = 'Register & continue';
}

function wireCodeGate(){
  document.getElementById('codeSubmit').addEventListener('click', submitAccessCode);
  document.getElementById('accessCodeInput').addEventListener('keydown', e=>{ if(e.key === 'Enter') submitAccessCode(); });
  document.getElementById('codeSignOut').addEventListener('click', async ()=>{
    await sb.auth.signOut();
    location.reload();
  });
}

/* ---------------- STUDY REPORT (stats helpers — pure, take progressObj as a param) ---------------- */
const PASS_QUIZ_PCT = 80;

function chapterTotals(ch){
  let vocabTotal = 0, flashTotal = 0;
  ch.sections.forEach(s=>{
    if(s.type === 'vocab') vocabTotal = s.items.length;
    if(s.type === 'flashcards') flashTotal = s.items.length;
  });
  return { vocabTotal, flashTotal };
}

function chapterStats(id, progressObj){
  const ch = CHAPTERS[id];
  const p = (progressObj && progressObj[id]) || {};
  const vocabKnown = p.vocabKnown || [];
  const flashKnown = p.flashKnown || [];
  const { vocabTotal, flashTotal } = chapterTotals(ch);
  const subDone = [
    vocabTotal > 0 && vocabKnown.length >= vocabTotal,
    flashTotal > 0 && flashKnown.length >= flashTotal,
    !!p.fillBlankDone,
    !!p.quizDone
  ];
  const pct = Math.round(subDone.filter(Boolean).length / 4 * 100);
  const started = (p.quizBest || 0) > 0 || !!p.fillBlankDone || vocabKnown.length > 0 || flashKnown.length > 0;
  return { pct, started, mastered: !!p.quizDone, quizBest: p.quizBest || 0, quizDone: !!p.quizDone };
}

function unitPct(unit, progressObj){
  const pcts = unit.chapterIds.filter(cid=>CHAPTERS[cid]).map(cid=>chapterStats(cid, progressObj).pct);
  return pcts.length ? Math.round(pcts.reduce((a,b)=>a+b,0) / pcts.length) : 0;
}

function overallReportStats(progressObj){
  const ids = Object.keys(CHAPTERS);
  let mastered = 0, started = 0, quizSum = 0, quizCount = 0;
  ids.forEach(id=>{
    const s = chapterStats(id, progressObj);
    if(s.mastered) mastered++;
    else if(s.started) started++;
    if(s.quizDone){ quizSum += s.quizBest; quizCount++; }
  });
  return {
    total: ids.length,
    mastered,
    started,
    notStarted: ids.length - mastered - started,
    avgQuiz: quizCount ? Math.round(quizSum / quizCount) : null,
    pct: ids.length ? Math.round(mastered / ids.length * 100) : 0
  };
}

/* ---------------- STUDY REPORT (rendering) ---------------- */
function renderReportHero(progressObj, email){
  const s = overallReportStats(progressObj);
  return `
    <div class="rp-hero">
      <div class="rp-ring" style="--rp:${s.pct}"><div class="rp-ring-in">${s.pct}%</div></div>
      <div class="rp-hero-text">
        <div class="rp-hero-label">Overall progress · ${s.mastered}/${s.total} chapters mastered</div>
        <div class="rp-hero-email">${email || ''}</div>
      </div>
    </div>
    <div class="rp-cards">
      <div class="rp-card mastered"><b>${s.mastered}</b><span>Mastered</span></div>
      <div class="rp-card inprog"><b>${s.started}</b><span>In progress</span></div>
      <div class="rp-card"><b>${s.notStarted}</b><span>Not started</span></div>
      <div class="rp-card"><b>${s.avgQuiz===null ? '—' : s.avgQuiz+'%'}</b><span>Avg quiz score</span></div>
    </div>`;
}

function renderReportSections(progressObj){
  const unitsHtml = UNITS.map(unit=>{
    const pct = unitPct(unit, progressObj);
    return `<div class="rp-unit-row">
      <div class="rp-unit-name"><b>${unit.code}</b> ${unit.name}</div>
      <div class="rp-bar"><i style="width:${pct}%"></i></div>
      <div class="rp-unit-pct">${pct}%</div>
    </div>`;
  }).join('');

  const quizRows = flatChapterOrder().map(id=>{
    const ch = CHAPTERS[id];
    const s = chapterStats(id, progressObj);
    if(!s.quizDone) return '';
    return `<div class="rp-quiz-row">
      <span class="rq-code">${ch.code.replace('Topic ','')}</span>
      <span class="rq-title">${ch.title}</span>
      <span class="rq-score ${s.quizBest>=PASS_QUIZ_PCT?'pass':''}">${s.quizBest}%</span>
    </div>`;
  }).filter(Boolean).join('');

  const homeworkRows = flatChapterOrder().map(id=>{
    const ch = CHAPTERS[id];
    const p = (progressObj && progressObj[id]) || {};
    if(!p.homeworkDone) return '';
    const score = p.homeworkScore || 0;
    return `<div class="rp-quiz-row">
      <span class="rq-code">${ch.code.replace('Topic ','')}</span>
      <span class="rq-title">${ch.title}</span>
      <span class="rq-score ${score>=PASS_QUIZ_PCT?'pass':''}">${score}%</span>
    </div>`;
  }).filter(Boolean).join('');

  const flaggedRows = flatChapterOrder().map(id=>{
    const ch = CHAPTERS[id];
    const p = (progressObj && progressObj[id]) || {};
    const flagged = p.homeworkFlagged || [];
    if(!flagged.length) return '';
    const nums = flagged.slice().sort((a,b)=>a-b).map(qi=>qi+1).join(', ');
    return `<div class="rp-quiz-row">
      <span class="rq-code">${ch.code.replace('Topic ','')}</span>
      <span class="rq-title">${ch.title}</span>
      <span class="rq-score">${flagged.length} flagged — Q${nums}</span>
    </div>`;
  }).filter(Boolean).join('');

  return `
    <div class="rp-sec-title">By unit</div>
    ${unitsHtml}
    <div class="rp-sec-title">Quiz scores</div>
    ${quizRows || '<div class="rp-empty">No quizzes taken yet.</div>'}
    <div class="rp-sec-title">Homework scores</div>
    ${homeworkRows || '<div class="rp-empty">No homework submitted yet.</div>'}
    <div class="rp-sec-title">Flagged for review</div>
    ${flaggedRows || '<div class="rp-empty">No questions flagged yet.</div>'}`;
}

function renderFullReport(progressObj, email){
  return renderReportHero(progressObj, email) + renderReportSections(progressObj);
}

function renderMyReportTab(){
  document.getElementById('reportBody').innerHTML = renderFullReport(PROGRESS, currentUser && currentUser.email);
}

async function renderStudentsTab(){
  const body = document.getElementById('reportBody');
  body.innerHTML = '<div class="rp-empty">Loading students…</div>';
  try{
    const { data, error } = await sb.rpc('get_all_student_progress');
    if(error){
      console.warn('[report] students load failed:', error.message);
      body.innerHTML = '<div class="rp-empty">Couldn\'t load students right now. Please try again in a moment.</div>';
      return;
    }
    if(!data || !data.length){ body.innerHTML = '<div class="rp-empty">No students have registered yet.</div>'; return; }
    body.innerHTML = data.map((row, i)=>{
      const s = overallReportStats(row.progress || {});
      return `<div>
        <div class="rp-student-row" data-i="${i}">
          <span class="rp-student-email">${row.email}</span>
          <span class="rp-student-pct">${s.pct}%</span>
        </div>
        <div class="rp-student-detail" id="studentDetail${i}" hidden></div>
      </div>`;
    }).join('');
    body.querySelectorAll('.rp-student-row').forEach(row=>{
      row.addEventListener('click', ()=>{
        const i = row.dataset.i;
        const detail = document.getElementById('studentDetail'+i);
        const opening = detail.hidden;
        body.querySelectorAll('.rp-student-detail').forEach(d=>d.hidden = true);
        if(opening){
          detail.innerHTML = renderReportSections(data[i].progress || {});
          detail.hidden = false;
        }
      });
    });
  } catch(e){
    console.warn('[report] students load error:', e);
    body.innerHTML = '<div class="rp-empty">Couldn\'t load students right now. Please try again in a moment.</div>';
  }
}

function setReportTab(tab){
  document.querySelectorAll('.report-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab === tab));
  if(tab === 'students') renderStudentsTab();
  else renderMyReportTab();
}

function openReport(){
  const ov = document.getElementById('reportOverlay');
  document.getElementById('reportTabs').hidden = currentUserRole !== 'teacher';
  setReportTab('me');
  ov.classList.add('show');
  ov.setAttribute('aria-hidden', 'false');
}
function closeReport(){
  const ov = document.getElementById('reportOverlay');
  ov.classList.remove('show');
  ov.setAttribute('aria-hidden', 'true');
}

function wireReport(){
  document.getElementById('reportBtn').addEventListener('click', openReport);
  document.getElementById('reportClose').addEventListener('click', closeReport);
  document.getElementById('reportOverlay').addEventListener('click', e=>{
    if(e.target.id === 'reportOverlay') closeReport();
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && document.getElementById('reportOverlay').classList.contains('show')) closeReport();
  });
  document.querySelectorAll('.report-tab').forEach(b=>{
    b.addEventListener('click', ()=>setReportTab(b.dataset.tab));
  });
}

/* ---------------- HUB MOTIF SVG ---------------- */
function hubMotifSvg(){
  const pop = [[40,70],[80,30],[130,90],[170,45],[210,100],[250,55],[60,110],[100,140],[150,140],[190,130],[230,140],[270,110],[300,60],[320,100],[20,120],[300,25]];
  const sample = [[100,140],[150,140],[190,130],[230,140],[80,30]];
  let dots = pop.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="var(--population)" opacity=".45"/>`).join('');
  let sdots = sample.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="6.5" fill="var(--sample)"/>`).join('');
  return `<svg viewBox="0 0 340 170" width="100%" height="140" style="max-width:420px;display:block;">
    <ellipse cx="150" cy="115" rx="120" ry="55" fill="none" stroke="var(--sample)" stroke-width="1.6" stroke-dasharray="5 5" opacity=".55"/>
    ${dots}${sdots}
    <text x="8" y="18" font-family="JetBrains Mono, monospace" font-size="12" fill="var(--population)">N = population</text>
    <text x="40" y="168" font-family="JetBrains Mono, monospace" font-size="12" fill="var(--sample)">n = sample</text>
  </svg>`;
}

/* ---------------- ROUTER ---------------- */
function goHub(){ location.hash = '#/hub'; }
function goChapter(id){ location.hash = '#/chapter/' + id; }
function goHomework(id){ location.hash = '#/homework/' + id; }
function flatChapterOrder(){ return UNITS.flatMap(u=>u.chapterIds); }

function navigate(){
  const hash = location.hash || '#/hub';
  const mh = hash.match(/^#\/homework\/(.+)$/);
  const m = hash.match(/^#\/chapter\/(.+)$/);
  if(mh && CHAPTERS[mh[1]] && CHAPTERS[mh[1]].homework){
    renderHomework(mh[1]);
    showView('homeworkView');
  } else if(m && CHAPTERS[m[1]]){
    renderChapter(m[1]);
    showView('chapterView');
  } else {
    renderHub();
    showView('hubView');
  }
  window.scrollTo({top:0});
}
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ---------------- HUB RENDER ---------------- */
function overallStats(){
  const ids = Object.keys(CHAPTERS);
  const done = ids.filter(id=>chProg(id).quizDone).length;
  return {done, total: ids.length};
}
function renderHub(){
  document.getElementById('hubMotif').innerHTML = hubMotifSvg();
  const {done,total} = overallStats();
  document.getElementById('hubBarFill').style.width = total? (done/total*100)+'%' : '0%';
  document.getElementById('hubBarLabel').textContent = `${done} / ${total} chapters complete`;
  document.getElementById('topbarProgress').innerHTML = `<b>${done}</b> / ${total} complete`;

  const container = document.getElementById('unitsContainer');
  container.innerHTML = '';
  UNITS.forEach(unit=>{
    const block = document.createElement('div');
    block.className = 'unit-block';
    const head = document.createElement('div');
    head.className = 'unit-head';
    head.innerHTML = `<span class="code">${unit.code}</span><h3>${unit.name}</h3>`;
    block.appendChild(head);
    const grid = document.createElement('div');
    grid.className = 'chapter-grid';
    unit.chapterIds.forEach(cid=>{
      const ch = CHAPTERS[cid];
      if(!ch) return;
      const prog = chProg(cid);
      const card = document.createElement('div');
      card.className = 'chapter-card' + (prog.quizDone ? ' done' : '');
      card.onclick = ()=>goChapter(cid);
      card.innerHTML = `
        <span class="code">${ch.code}</span>
        <h4>${ch.title}</h4>
        <p>${ch.cardSummary}</p>
        <div class="cc-status"><span class="cc-dot"></span>${prog.quizDone ? 'quiz complete · best '+prog.quizBest+'%' : 'not started'}</div>`;
      grid.appendChild(card);
    });
    block.appendChild(grid);
    container.appendChild(block);
  });
}

/* ---------------- CHAPTER RENDER ---------------- */
/* ---------------- TEACHER ANSWER KEY (guided notes + quiz) ---------------- */
function teacherKeyHtml(sec){
  if(sec.type === 'fill-blank'){
    return sec.items.map(item=>{
      const text = item.segments.map(seg=>
        typeof seg === 'string' ? seg : `<strong class="tk-answer">${seg.answer}</strong>`
      ).join('');
      return `<p class="tk-sentence">${text}</p>`;
    }).join('');
  }
  if(sec.type === 'quiz'){
    return sec.questions.map((q,i)=>`
      <div class="tk-q">
        <div class="tk-q-text"><b>Q${i+1}.</b> ${q.q}</div>
        <div class="tk-q-answer">✓ ${String.fromCharCode(65+q.correct)}. ${q.opts[q.correct]}</div>
      </div>`).join('');
  }
  return '';
}
function buildTeacherKey(sec){
  const wrap = document.createElement('div');
  wrap.className = 'teacher-key-wrap';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'teacher-key-toggle';
  btn.textContent = 'Show answer key (teacher)';
  const panel = document.createElement('div');
  panel.className = 'teacher-key';
  panel.hidden = true;
  panel.innerHTML = teacherKeyHtml(sec);
  btn.onclick = ()=>{
    panel.hidden = !panel.hidden;
    btn.textContent = panel.hidden ? 'Show answer key (teacher)' : 'Hide answer key (teacher)';
  };
  wrap.appendChild(btn);
  wrap.appendChild(panel);
  return wrap;
}

function renderChapter(id){
  const ch = CHAPTERS[id];
  document.getElementById('chCode').textContent = ch.unitName + ' · ' + ch.code;
  document.getElementById('chTitle').innerHTML = ch.heroTitle;
  document.getElementById('chSub').textContent = ch.heroSub;
  document.getElementById('chSource').textContent = 'Source: ' + ch.source;
  document.getElementById('chTime').textContent = ch.estTime;

  const toc = document.getElementById('chToc');
  toc.innerHTML = ch.sections.map(s=>`<a href="#${s.id}">${s.label.split('—')[1] ? s.label.split('—')[1].trim() : s.label}</a>`).join('');

  const sel = document.getElementById('chSelect');
  sel.innerHTML = UNITS.map(unit=>`<optgroup label="${unit.name}">` +
    unit.chapterIds.filter(cid=>CHAPTERS[cid]).map(cid=>
      `<option value="${cid}" ${cid===id?'selected':''}>${CHAPTERS[cid].code} · ${CHAPTERS[cid].title}</option>`
    ).join('') + `</optgroup>`
  ).join('');
  sel.onchange = ()=>goChapter(sel.value);

  const hwActions = document.getElementById('chHwActions');
  if(ch.homework && ch.homework.questions && ch.homework.questions.length){
    hwActions.hidden = false;
    document.getElementById('homeworkBtnLabel').textContent = `Homework · ${ch.homework.questions.length} questions`;
    document.getElementById('homeworkBtn').onclick = ()=>goHomework(id);
  } else {
    hwActions.hidden = true;
  }

  const box = document.getElementById('chapterSections');
  box.innerHTML = '';
  ch.sections.forEach(sec=>{
    const el = document.createElement('section');
    el.className = 'sec';
    el.id = sec.id;
    el.innerHTML = `<div class="eyebrow sec-label">${sec.label}</div><h2>${sec.heading}</h2>` + (sec.body ? `<p class="body">${sec.body}</p>` : '');
    if(currentUserRole === 'teacher' && (sec.type === 'fill-blank' || sec.type === 'quiz')){
      el.appendChild(buildTeacherKey(sec));
    }
    const content = document.createElement('div');
    content.className = 'sec-content';
    el.appendChild(content);
    box.appendChild(el);
    renderSection(sec, content, id);
  });

  box.insertAdjacentHTML('beforeend', chapterFooterNav(id));
}

function renderHomework(id){
  const ch = CHAPTERS[id];
  const hw = ch.homework;
  const prog = chProg(id);

  document.getElementById('hwBackLink').onclick = ()=>goChapter(id);
  document.getElementById('hwCode').textContent = ch.unitName + ' · ' + ch.code + ' · Homework';
  document.getElementById('hwTitle').textContent = 'Homework: ' + ch.title;
  document.getElementById('hwSub').textContent = `${hw.questions.length} practice problems covering everything in this topic. Work them out, then submit — your teacher can review your results.`;

  const keyWrap = document.getElementById('hwTeacherKeyWrap');
  keyWrap.innerHTML = '';
  if(currentUserRole === 'teacher'){
    keyWrap.appendChild(buildTeacherKey({ type: 'quiz', questions: hw.questions }));
  }

  const answers = prog.homeworkAnswers.slice();
  while(answers.length < hw.questions.length) answers.push(null);
  const flagged = prog.homeworkFlagged.slice();

  const flagSummary = document.getElementById('hwFlagSummary');
  flagSummary.textContent = flagged.length
    ? `🚩 ${flagged.length} question${flagged.length===1?'':'s'} flagged for review.`
    : '';

  const qBox = document.getElementById('hwQuestions');
  qBox.innerHTML = '';
  hw.questions.forEach((q, qi)=>{
    const card = document.createElement('div');
    card.className = 'hw-q' + (flagged.includes(qi) ? ' is-flagged' : '');
    card.innerHTML = `
      <div class="hw-q-head">
        <span class="hw-q-num">${qi+1}.</span><span class="hw-q-text">${q.q}</span>
        <button type="button" class="hw-flag-btn${flagged.includes(qi)?' flagged':''}" data-qi="${qi}">
          <span class="flag-ico">🚩</span>${flagged.includes(qi) ? 'Flagged' : 'Not sure?'}
        </button>
      </div>
      <div class="hw-opts">${q.opts.map((o,oi)=>
        `<button type="button" class="hw-opt${answers[qi]===oi?' selected':''}" data-qi="${qi}" data-oi="${oi}">
           <span class="hw-opt-letter">${String.fromCharCode(65+oi)}.</span><span>${o}</span>
         </button>`
      ).join('')}</div>`;
    qBox.appendChild(card);
  });
  qBox.querySelectorAll('.hw-opt').forEach(btn=>{
    btn.onclick = ()=>{
      const qi = parseInt(btn.dataset.qi);
      const oi = parseInt(btn.dataset.oi);
      answers[qi] = oi;
      qBox.querySelectorAll(`.hw-opt[data-qi="${qi}"]`).forEach(b=>b.classList.toggle('selected', b === btn));
    };
  });
  qBox.querySelectorAll('.hw-flag-btn').forEach(btn=>{
    btn.onclick = (e)=>{
      e.stopPropagation();
      const qi = parseInt(btn.dataset.qi);
      const card = btn.closest('.hw-q');
      const i = prog.homeworkFlagged.indexOf(qi);
      const nowFlagged = i === -1;
      if(nowFlagged) prog.homeworkFlagged.push(qi); else prog.homeworkFlagged.splice(i,1);
      persist();
      // update in place — a full re-render here would wipe any answers
      // the student has picked but not yet submitted (see hw-opt handler above)
      card.classList.toggle('is-flagged', nowFlagged);
      btn.classList.toggle('flagged', nowFlagged);
      btn.innerHTML = `<span class="flag-ico">🚩</span>${nowFlagged ? 'Flagged' : 'Not sure?'}`;
      const count = prog.homeworkFlagged.length;
      flagSummary.textContent = count ? `🚩 ${count} question${count===1?'':'s'} flagged for review.` : '';
    };
  });

  const msg = document.getElementById('hwSubmitMsg');
  msg.textContent = prog.homeworkDone ? 'Already submitted — you can update your answers and resubmit anytime.' : '';
  document.getElementById('hwSubmitBtn').onclick = ()=>{
    let correct = 0;
    hw.questions.forEach((q, qi)=>{ if(answers[qi] === q.correct) correct++; });
    prog.homeworkAnswers = answers.slice();
    prog.homeworkScore = Math.round(correct / hw.questions.length * 100);
    prog.homeworkDone = true;
    persist();
    msg.textContent = 'Submitted ✓ — nice work. Your teacher can review your results.';
  };
}

function chapterFooterNav(id){
  const order = flatChapterOrder();
  const idx = order.indexOf(id);
  const prevId = idx > 0 ? order[idx-1] : null;
  const nextId = idx < order.length-1 ? order[idx+1] : null;

  const prev = prevId
    ? `<a class="ch-nav-btn prev" onclick="goChapter('${prevId}')">
         <span class="cn-dir">&larr; Previous</span>
         <span class="cn-title">${CHAPTERS[prevId].code} · ${CHAPTERS[prevId].title}</span>
       </a>`
    : `<span></span>`;

  const next = nextId
    ? `<a class="ch-nav-btn next" onclick="goChapter('${nextId}')">
         <span class="cn-dir">Next &rarr;</span>
         <span class="cn-title">${CHAPTERS[nextId].code} · ${CHAPTERS[nextId].title}</span>
       </a>`
    : `<a class="ch-nav-btn next" onclick="goHub()">
         <span class="cn-dir">Finish &rarr;</span>
         <span class="cn-title">Back to all topics</span>
       </a>`;

  return `<nav class="chapter-footer-nav">${prev}${next}</nav>`;
}

function renderSection(sec, mount, chapterId){
  switch(sec.type){
    case 'overview': return renderOverview(sec, mount);
    case 'quick-list': return renderQuickList(sec, mount);
    case 'vocab': return renderVocab(sec, mount, chapterId);
    case 'fill-blank': return renderFillBlank(sec, mount, chapterId);
    case 'examples': return renderExamples(sec, mount);
    case 'flashcards': return renderFlashcards(sec, mount, chapterId);
    case 'quiz': return renderQuiz(sec, mount, chapterId);
    case 'takeaways': return renderTakeaways(sec, mount);
    case 'chart': return renderChart(sec, mount);
  }
}

/* ---- overview ---- */
function renderOverview(sec, mount){
  const row = document.createElement('div');
  row.className = 'card-row';
  sec.cards.forEach(c=>{
    const div = document.createElement('div');
    div.className = 'concept-card' + (c.accent ? ' '+c.accent+'-accent' : '');
    div.innerHTML = `<span class="roman">${c.roman}</span><h4>${c.title}</h4><p>${c.body}</p>
      <div class="tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
    row.appendChild(div);
  });
  mount.appendChild(row);
}

/* ---- quick list ---- */
function renderQuickList(sec, mount){
  const wrap = document.createElement('div');
  wrap.className = 'card-row';
  sec.items.forEach(it=>{
    const div = document.createElement('div');
    div.className = 'concept-card sample-accent';
    div.innerHTML = `<p style="color:var(--ink); font-family:'Fraunces',serif; font-size:1.02rem; margin-bottom:.6rem;">\u201c${it.q}\u201d</p>
      <div class="tags">
        <span class="tag">pop: ${it.pop}</span>
      </div>
      <p style="margin-top:.5rem; font-size:.85rem;"><strong>needs:</strong> ${it.info}</p>`;
    wrap.appendChild(div);
  });
  mount.appendChild(wrap);
}

/* ---- vocab ---- */
function renderVocab(sec, mount, chapterId){
  const prog = chProg(chapterId);
  const grid = document.createElement('div');
  grid.className = 'vocab-grid';
  sec.items.forEach(v=>{
    const known = prog.vocabKnown.includes(v.id);
    const card = document.createElement('div');
    card.className = 'vocab-card' + (v.accent==='sample' ? ' sample' : '') + (known ? ' is-known' : '');
    card.innerHTML = `<div class="term">${v.term}${v.sym ? `<span class="sym">${v.sym}</span>` : ''}</div><p>${v.body}</p>
      <button type="button" class="mark-known-btn ${known?'known':''}">
        <span class="chk"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
        ${known ? 'Known' : 'Mark as known'}
      </button>`;
    const btn = card.querySelector('.mark-known-btn');
    btn.onclick = ()=>{
      const i = prog.vocabKnown.indexOf(v.id);
      if(i>-1) prog.vocabKnown.splice(i,1); else prog.vocabKnown.push(v.id);
      persist();
      renderVocab(sec, mount, chapterId);
    };
    grid.appendChild(card);
  });
  mount.innerHTML = '';
  mount.appendChild(grid);
}

/* ---- fill in the blank (guided notes) ---- */
function shuffleArr(arr){ return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1]); }

function renderFillBlank(sec, mount, chapterId){
  const prog = chProg(chapterId);
  if(prog.fillBlankBest === undefined) prog.fillBlankBest = 0;
  let attempt = 0;
  const shell = document.createElement('div');
  shell.className = 'fb-shell';
  mount.appendChild(shell);

  function buildPassage(){
    const wrap = document.createElement('div');
    wrap.className = 'fb-passage';
    sec.items.forEach(item=>{
      const p = document.createElement('div');
      p.className = 'fb-sentence';
      item.segments.forEach(seg=>{
        if(typeof seg === 'string'){
          p.appendChild(document.createTextNode(seg));
        } else {
          const sel = document.createElement('select');
          sel.className = 'fb-select';
          sel.dataset.id = seg.id;
          sel.dataset.answer = seg.answer;
          const opts = shuffleArr(seg.options.slice());
          const placeholder = document.createElement('option');
          placeholder.value = ''; placeholder.textContent = '— choose —';
          sel.appendChild(placeholder);
          opts.forEach(o=>{
            const optEl = document.createElement('option');
            optEl.value = o; optEl.textContent = o;
            sel.appendChild(optEl);
          });
          p.appendChild(sel);
        }
      });
      wrap.appendChild(p);
    });
    return wrap;
  }

  function render(){
    attempt = 0;
    shell.innerHTML = '';
    shell.appendChild(buildPassage());
    const controls = document.createElement('div');
    controls.className = 'fb-controls';
    controls.innerHTML = `<button class="btn" id="fbSubmit">Check answers</button><span class="fb-msg" id="fbMsg"></span>`;
    shell.appendChild(controls);
    shell.querySelector('#fbSubmit').onclick = handleSubmit;
  }

  function handleSubmit(){
    attempt++;
    const selects = shell.querySelectorAll('.fb-select');
    let correctCount = 0;
    let allResolved = true;
    selects.forEach(sel=>{
      const correctAns = sel.dataset.answer;
      const val = sel.value;
      sel.classList.remove('fb-correct','fb-wrong');
      if(val === correctAns){
        sel.classList.add('fb-correct');
        sel.disabled = true;
        correctCount++;
      } else if(attempt >= 2){
        const span = document.createElement('span');
        span.className = 'fb-revealed';
        span.textContent = '\u2713 ' + correctAns;
        sel.replaceWith(span);
      } else {
        sel.classList.add('fb-wrong');
        allResolved = false;
      }
    });
    const total = selects.length;
    const msg = shell.querySelector('#fbMsg');
    if(attempt === 1 && !allResolved){
      msg.textContent = `${correctCount} / ${total} correct on the first try \u2014 the red ones need another guess.`;
      shell.querySelector('#fbSubmit').textContent = 'Check again';
      return;
    }
    const pct = Math.round(correctCount / total * 100);
    prog.fillBlankBest = Math.max(prog.fillBlankBest, pct);
    prog.fillBlankDone = true;
    persist();
    const controls = shell.querySelector('.fb-controls');
    controls.innerHTML = `
      <div class="fb-result" style="width:100%;">
        <div class="score">${correctCount} / ${total}</div>
        <div class="best">first-try score: ${pct}% &middot; best saved: ${prog.fillBlankBest}%</div>
        <div style="margin-top:1rem;"><button class="btn ghost" id="fbRetry">try again</button></div>
      </div>`;
    controls.querySelector('#fbRetry').onclick = render;
  }

  render();
}

/* ---- worked examples ---- */
function renderExamples(sec, mount){
  sec.items.forEach((ex, i)=>{
    const card = document.createElement('div');
    card.className = 'example-card';
    card.innerHTML = `
      <div class="example-head">
        <span class="q">${ex.q}</span>
        <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="example-body"><div class="example-body-inner">
        ${ex.fields.map(f=>`<div class="eb-item"><div class="k">${f.k}</div><div class="v">${f.v}</div></div>`).join('')}
      </div></div>`;
    card.querySelector('.example-head').onclick = ()=>card.classList.toggle('open');
    mount.appendChild(card);
  });
}

/* ---- flashcards ---- */
function renderFlashcards(sec, mount, chapterId){
  const prog = chProg(chapterId);
  let idx = 0;
  let flipped = false;
  const stage = document.createElement('div');
  stage.className = 'fc-wrap';
  stage.innerHTML = `
    <div class="fc-stage"><div class="fc-card" id="fcCard">
      <div class="fc-face fc-front"><span class="eyebrow" id="fcFrontLabel">clue</span><div class="prompt" id="fcPrompt"></div></div>
      <div class="fc-face fc-back"><div class="term" id="fcTerm"></div><p id="fcDetail"></p></div>
    </div></div>
    <div class="fc-progress" id="fcCount"></div>
    <div class="fc-controls">
      <button class="fc-btn" id="fcPrev">&larr; prev</button>
      <button class="fc-btn primary" id="fcFlip">flip card</button>
      <button class="fc-btn" id="fcNext">next &rarr;</button>
    </div>
    <div class="fc-controls">
      <button class="fc-btn got-it" id="fcKnow">✓ I know this</button>
    </div>
    <div class="fc-dots" id="fcDots"></div>`;
  mount.appendChild(stage);

  const cardEl = stage.querySelector('#fcCard');
  const promptEl = stage.querySelector('#fcPrompt');
  const termEl = stage.querySelector('#fcTerm');
  const detailEl = stage.querySelector('#fcDetail');
  const countEl = stage.querySelector('#fcCount');
  const dotsEl = stage.querySelector('#fcDots');

  function renderDots(){
    dotsEl.innerHTML = sec.items.map((_,i)=>{
      const known = prog.flashKnown.includes(chapterId+'-'+i);
      return `<span class="fc-dot ${known?'known':''} ${i===idx?'current':''}"></span>`;
    }).join('');
  }
  function show(){
    const card = sec.items[idx];
    flipped = false;
    cardEl.classList.remove('flipped');
    promptEl.textContent = card.prompt;
    termEl.textContent = card.term;
    detailEl.textContent = card.detail;
    countEl.textContent = `Card ${idx+1} of ${sec.items.length}`;
    renderDots();
  }
  cardEl.onclick = ()=>{ flipped = !flipped; cardEl.classList.toggle('flipped', flipped); };
  stage.querySelector('#fcFlip').onclick = ()=>{ flipped = !flipped; cardEl.classList.toggle('flipped', flipped); };
  stage.querySelector('#fcNext').onclick = ()=>{ idx = (idx+1) % sec.items.length; show(); };
  stage.querySelector('#fcPrev').onclick = ()=>{ idx = (idx-1+sec.items.length) % sec.items.length; show(); };
  stage.querySelector('#fcKnow').onclick = ()=>{
    const key = chapterId+'-'+idx;
    const i = prog.flashKnown.indexOf(key);
    if(i>-1) prog.flashKnown.splice(i,1); else prog.flashKnown.push(key);
    persist();
    renderDots();
  };
  show();
}

/* ---- quiz ---- */
function renderQuiz(sec, mount, chapterId){
  const prog = chProg(chapterId);
  let idx = 0, correctCount = 0, answered = false;
  const shell = document.createElement('div');
  shell.className = 'quiz-shell';
  mount.appendChild(shell);

  function renderQuestion(){
    answered = false;
    const q = sec.questions[idx];
    shell.innerHTML = `
      <div class="quiz-progress"><span>Question ${idx+1} of ${sec.questions.length}</span><span>Best: ${prog.quizBest}%</span></div>
      <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${(idx)/sec.questions.length*100}%"></div></div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts">${q.opts.map((o,i)=>`<button class="quiz-opt" data-i="${i}"><span class="quiz-opt-letter">${String.fromCharCode(65+i)}.</span><span>${o}</span></button>`).join('')}</div>
      <div class="quiz-exp" id="quizExp"></div>
      <div class="quiz-nav"><button class="btn" id="quizNext" style="display:none;">${idx===sec.questions.length-1?'See results':'Next question'} &rarr;</button></div>`;
    shell.querySelectorAll('.quiz-opt').forEach(btn=>{
      btn.onclick = ()=>{
        if(answered) return;
        answered = true;
        const i = parseInt(btn.dataset.i);
        const correct = q.correct;
        shell.querySelectorAll('.quiz-opt').forEach((b2,i2)=>{
          b2.classList.add('disabled');
          if(i2===correct) b2.classList.add('correct');
          else if(i2===i) b2.classList.add('wrong');
        });
        if(i===correct) correctCount++;
        const exp = shell.querySelector('#quizExp');
        exp.textContent = q.exp;
        exp.classList.add('show');
        shell.querySelector('#quizNext').style.display = 'inline-flex';
      };
    });
    shell.querySelector('#quizNext').onclick = ()=>{
      if(idx < sec.questions.length-1){ idx++; renderQuestion(); }
      else renderResult();
    };
  }
  function renderResult(){
    const pct = Math.round(correctCount / sec.questions.length * 100);
    prog.quizBest = Math.max(prog.quizBest, pct);
    prog.quizDone = true;
    persist();
    shell.innerHTML = `
      <div class="quiz-result">
        <div class="eyebrow">Quiz complete</div>
        <div class="score">${correctCount} / ${sec.questions.length}</div>
        <div class="best">this attempt: ${pct}% · best saved: ${prog.quizBest}%</div>
        <div style="margin-top:1.4rem; display:flex; gap:.8rem; justify-content:center;">
          <button class="btn ghost" id="quizRetry">try again</button>
          <button class="btn" id="quizHub">back to hub</button>
        </div>
      </div>`;
    shell.querySelector('#quizRetry').onclick = ()=>{ idx=0; correctCount=0; renderQuestion(); };
    shell.querySelector('#quizHub').onclick = goHub;
  }
  renderQuestion();
}

/* ---- takeaways ---- */
function renderTakeaways(sec, mount){
  const list = document.createElement('div');
  list.className = 'tk-list';
  sec.items.forEach(t=>{
    const div = document.createElement('div');
    div.className = 'tk-item';
    div.innerHTML = `<div class="num">${t.num}</div><div><h4>${t.title}</h4><p>${t.body}</p></div>`;
    list.appendChild(div);
  });
  mount.appendChild(list);
}

/* ---- chart (bar / pie) ---- */
function chartColor(i){
  const palette = ['var(--population)','var(--sample)','var(--gold)','var(--plum)'];
  return palette[i % palette.length];
}
function polarPoint(cx, cy, r, angleDeg){
  const rad = angleDeg * Math.PI / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}
function svgBarChart(data, opts){
  const mode = (opts && opts.mode) || 'count';
  const total = data.reduce((a,d)=>a+d.value, 0);
  const max = mode === 'relative' ? total : Math.max(...data.map(d=>d.value));
  const barW = 56, gap = 22, pad = 12, chartH = 150, padT = 28, padB = 34;
  const w = pad*2 + data.length*barW + (data.length-1)*gap;
  const h = padT + chartH + padB;
  const bars = data.map((d,i)=>{
    const frac = mode === 'relative' ? d.value/total : d.value/max;
    const barH = Math.max(2, frac*chartH);
    const x = pad + i*(barW+gap);
    const y = padT + (chartH - barH);
    const label = mode === 'relative' ? (Math.round(d.value/total*1000)/10) + '%' : d.value;
    return `
      <text x="${x+barW/2}" y="${y-8}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12" fill="var(--ink)">${label}</text>
      <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="4" fill="var(--population)"/>
      <text x="${x+barW/2}" y="${padT+chartH+18}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="12" fill="var(--ink-soft)">${d.label}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    <line x1="${pad-4}" y1="${padT+chartH}" x2="${w-pad+4}" y2="${padT+chartH}" stroke="var(--line)" stroke-width="1.5"/>
    ${bars}
  </svg>`;
}
function svgPieChart(data){
  const total = data.reduce((a,d)=>a+d.value, 0);
  const cx = 90, cy = 90, r = 80;
  let angle = -90;
  const paths = data.map((d,i)=>{
    const frac = d.value/total;
    const sweep = frac*360;
    const startAngle = angle;
    const endAngle = angle + sweep;
    angle = endAngle;
    const large = sweep > 180 ? 1 : 0;
    const [x1,y1] = polarPoint(cx, cy, r, startAngle);
    const [x2,y2] = polarPoint(cx, cy, r, endAngle);
    const color = chartColor(i);
    const path = `M${cx},${cy} L${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${large} 1 ${x2.toFixed(2)},${y2.toFixed(2)} Z`;
    const midAngle = startAngle + sweep/2;
    const [lx,ly] = polarPoint(cx, cy, r*0.62, midAngle);
    const pct = Math.round(frac*1000)/10;
    const showLabel = frac > 0.045;
    return `<path d="${path}" fill="${color}" stroke="var(--card)" stroke-width="2"/>` +
      (showLabel ? `<text x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#fff">${pct}%</text>` : '');
  }).join('');
  const legend = data.map((d,i)=>{
    const pct = Math.round(d.value/total*1000)/10;
    return `<span class="chart-legend-item"><span class="chart-legend-swatch" style="background:${chartColor(i)};"></span>${d.label} — ${pct}%</span>`;
  }).join('');
  return `<div class="chart-pie-wrap">
    <svg viewBox="0 0 180 180" width="180" height="180">${paths}</svg>
    <div class="chart-legend">${legend}</div>
  </div>`;
}
/* ---- histogram (quantitative, flush bins — not a bar chart) ---- */
function svgHistogram(bins, opts){
  const mode = (opts && opts.mode) || 'count';
  const total = bins.reduce((a,d)=>a+d.value, 0);
  const max = mode === 'relative' ? total : Math.max(...bins.map(d=>d.value));
  const barW = 62, pad = 12, chartH = 150, padT = 28, padB = 34;
  const w = pad*2 + bins.length*barW;
  const h = padT + chartH + padB;
  const bars = bins.map((d,i)=>{
    const frac = mode === 'relative' ? d.value/total : d.value/max;
    const barH = Math.max(0, frac*chartH);
    const x = pad + i*barW;
    const y = padT + (chartH - barH);
    const label = mode === 'relative' ? (Math.round(d.value/total*1000)/10) + '%' : d.value;
    return `
      ${barH > 0 ? `<text x="${x+barW/2}" y="${y-8}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12" fill="var(--ink)">${label}</text>` : ''}
      <rect x="${x}" y="${y}" width="${barW}" height="${barH}" fill="var(--population)" stroke="var(--card)" stroke-width="1.5"/>
      <text x="${x+barW/2}" y="${padT+chartH+18}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10.5" fill="var(--ink-soft)">${d.label}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    <line x1="${pad-2}" y1="${padT+chartH}" x2="${w-pad+2}" y2="${padT+chartH}" stroke="var(--line)" stroke-width="1.5"/>
    ${bars}
  </svg>`;
}

/* ---- dot plot (discrete quantitative, "salt shaker" stacking) ---- */
function svgDotPlot(data, opts){
  opts = opts || {};
  const values = data.map(d=>d.value);
  const min = opts.min !== undefined ? opts.min : Math.min(...values);
  const max = opts.max !== undefined ? opts.max : Math.max(...values);
  const step = opts.step || 1;
  const decimals = opts.decimals || 0;
  const dotR = 7, dotGap = 16;
  const pad = 24, plotW = 440, padT = 16, padB = 34;
  const maxStack = Math.max(...data.map(d=>d.count));
  const chartH = Math.max(dotGap, maxStack*dotGap);
  const axisY = padT + chartH + 4;
  const w = pad*2 + plotW;
  const h = axisY + padB;
  const xScale = v => pad + (v-min)/(max-min)*plotW;
  const ticks = [];
  for(let t = min; t <= max + 1e-9; t += step) ticks.push(Math.round(t*1000)/1000);
  const tickEls = ticks.map(t=>{
    const x = xScale(t);
    const label = decimals ? t.toFixed(decimals) : t;
    return `<line x1="${x}" y1="${axisY}" x2="${x}" y2="${axisY+5}" stroke="var(--line)" stroke-width="1.5"/>
      <text x="${x}" y="${axisY+18}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--ink-soft)">${label}</text>`;
  }).join('');
  const dots = data.map(d=>{
    const x = xScale(d.value);
    let circles = '';
    for(let i=0;i<d.count;i++){
      const y = axisY - 4 - dotR - i*dotGap;
      circles += `<circle cx="${x}" cy="${y}" r="${dotR}" fill="var(--population)"/>`;
    }
    return circles;
  }).join('');
  const axisLabelEl = opts.axisLabel ? `<text x="${w/2}" y="${h-4}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="11.5" fill="var(--ink-soft)">${opts.axisLabel}</text>` : '';
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    <line x1="${pad}" y1="${axisY}" x2="${pad+plotW}" y2="${axisY}" stroke="var(--line)" stroke-width="1.5"/>
    ${tickEls}
    ${dots}
    ${axisLabelEl}
  </svg>`;
}

/* ---- box plot (single or parallel, from a five-number summary) ---- */
function niceStep(range){
  const rough = range/6;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  const norm = rough/mag;
  let mult;
  if(norm < 1.5) mult = 1;
  else if(norm < 3.5) mult = 2;
  else if(norm < 7.5) mult = 5;
  else mult = 10;
  return mult*mag;
}
function svgBoxPlot(groups, opts){
  opts = opts || {};
  const allVals = groups.flatMap(g=>[g.min,g.q1,g.median,g.q3,g.max,...(g.outliers||[])]);
  const dataMin = Math.min(...allVals), dataMax = Math.max(...allVals);
  const range = (dataMax - dataMin) || 1;
  const axisMin = opts.axisMin !== undefined ? opts.axisMin : dataMin - range*0.08;
  const axisMax = opts.axisMax !== undefined ? opts.axisMax : dataMax + range*0.08;
  const hasLabels = groups.some(g=>g.label);
  const labelW = hasLabels ? 92 : 0;
  const plotW = 420, padR = 24, padT = 20, rowH = 56, boxH = 24, padB = 34;
  const padL = 16 + labelW;
  const w = padL + plotW + padR;
  const axisY = padT + groups.length*rowH;
  const h = axisY + padB;
  const xScale = v => padL + (v-axisMin)/(axisMax-axisMin)*plotW;
  const step = opts.step || niceStep(axisMax-axisMin);
  const ticks = [];
  for(let t = Math.ceil(axisMin/step)*step; t <= axisMax + 1e-9; t += step) ticks.push(Math.round(t*1000)/1000);
  const tickEls = ticks.map(t=>{
    const x = xScale(t);
    return `<line x1="${x}" y1="${axisY}" x2="${x}" y2="${axisY+5}" stroke="var(--line)" stroke-width="1.5"/>
      <text x="${x}" y="${axisY+18}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--ink-soft)">${t}</text>`;
  }).join('');
  const rows = groups.map((g,i)=>{
    const y = padT + i*rowH + rowH/2;
    const color = chartColor(i);
    const xMin = xScale(g.min), xQ1 = xScale(g.q1), xMed = xScale(g.median), xQ3 = xScale(g.q3), xMax = xScale(g.max);
    const outliers = (g.outliers||[]).map(v=>`<circle cx="${xScale(v)}" cy="${y}" r="4.5" fill="var(--sample)" stroke="var(--card)" stroke-width="1"/>`).join('');
    const label = g.label ? `<text x="${padL-12}" y="${y+4}" text-anchor="end" font-family="Plus Jakarta Sans, sans-serif" font-size="12" fill="var(--ink)">${g.label}</text>` : '';
    return `
      ${label}
      <line x1="${xMin}" y1="${y}" x2="${xQ1}" y2="${y}" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <line x1="${xMin}" y1="${y-8}" x2="${xMin}" y2="${y+8}" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <line x1="${xQ3}" y1="${y}" x2="${xMax}" y2="${y}" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <line x1="${xMax}" y1="${y-8}" x2="${xMax}" y2="${y+8}" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <rect x="${xQ1}" y="${y-boxH/2}" width="${Math.max(2,xQ3-xQ1)}" height="${boxH}" fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-width="2"/>
      <line x1="${xMed}" y1="${y-boxH/2}" x2="${xMed}" y2="${y+boxH/2}" stroke="${color}" stroke-width="2.5"/>
      ${outliers}`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    <line x1="${padL}" y1="${axisY}" x2="${padL+plotW}" y2="${axisY}" stroke="var(--line)" stroke-width="1.5"/>
    ${tickEls}
    ${rows}
  </svg>`;
}

/* ---- stem-and-leaf plot (single or back-to-back/split — a textual figure, not SVG) ---- */
function renderStemplot(it){
  const header = it.splitSides
    ? `<div class="stem-row stem-header"><span class="stem-leaves left">${it.leftLabel||''}</span><span class="stem-stem"></span><span class="stem-leaves right">${it.rightLabel||''}</span></div>`
    : '';
  const rows = it.stems.map(row=>{
    if(it.splitSides){
      const leftStr = (row.left||[]).slice().reverse().join(' ');
      const rightStr = (row.right||[]).join(' ');
      return `<div class="stem-row">
        <span class="stem-leaves left">${leftStr}</span>
        <span class="stem-stem">${row.stem}</span>
        <span class="stem-leaves right">${rightStr}</span>
      </div>`;
    }
    const leafStr = (row.leaves||[]).join(' ');
    return `<div class="stem-row">
      <span class="stem-stem">${row.stem}</span>
      <span class="stem-leaves right">${leafStr}</span>
    </div>`;
  }).join('');
  const key = it.keyText ? `<p class="stem-key">${it.keyText}</p>` : '';
  return `<div class="chart-stemplot-wrap"><div class="chart-stemplot">${header}${rows}</div>${key}</div>`;
}

function renderChart(sec, mount){
  const grid = document.createElement('div');
  grid.className = 'chart-grid';
  sec.items.forEach(it=>{
    const card = document.createElement('div');
    card.className = 'chart-card';
    let body;
    switch(it.chartType){
      case 'pie': body = svgPieChart(it.data); break;
      case 'histogram': body = svgHistogram(it.data, { mode: it.mode || 'count' }); break;
      case 'dotplot': body = svgDotPlot(it.data, it.opts || {}); break;
      case 'boxplot': body = svgBoxPlot(it.groups, it.opts || {}); break;
      case 'stemplot': body = renderStemplot(it); break;
      default: body = svgBarChart(it.data, { mode: it.mode || 'count' });
    }
    card.innerHTML = `<h4>${it.title}</h4><div class="chart-svg-wrap">${body}</div>` + (it.caption ? `<p class="chart-caption">${it.caption}</p>` : '');
    grid.appendChild(card);
  });
  mount.appendChild(grid);
}

/* ---------------- BACK TO TOP ---------------- */
function wireToTop(){
  const btn = document.getElementById('toTopBtn');
  window.addEventListener('scroll', ()=>{
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', ()=>window.scrollTo({ top: 0, behavior: 'smooth' }));
}
wireToTop();

/* ---------------- BOOT ---------------- */
function boot(){
  if(!CLOUD){
    document.documentElement.classList.remove('auth-pending');
    window.addEventListener('hashchange', navigate);
    navigate();
    return;
  }
  wireAuth();
  wireCodeGate();
  wireReport();
  sb.auth.onAuthStateChange((event, session)=>{ handleSession(session); });
  sb.auth.getSession().then(({data})=>handleSession(data.session));
}
try {
  boot();
} catch(e){
  console.error('[boot] failed, falling back to offline mode:', e);
  document.documentElement.classList.remove('auth-pending');
  if(!hashListenerBound){ window.addEventListener('hashchange', navigate); hashListenerBound = true; }
  navigate();
}

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

/* Homework confirmations: { chapterId: confirmed_at } for the signed-in
   student's own homework. A row only exists once a teacher has reviewed
   that chapter's submission and released the graded results — see
   supabase/003_homework_confirmations.sql. Cloud-only; stays empty in
   localStorage-only mode (no teacher/student split exists there). */
let HW_CONFIRMATIONS = {};
function isHwConfirmed(chapterId){ return !!HW_CONFIRMATIONS[chapterId]; }
async function loadHwConfirmations(){
  if(!CLOUD || !currentUser) return;
  try{
    const { data, error } = await sb.from('homework_confirmations')
      .select('chapter_id, confirmed_at').eq('student_id', currentUser.id);
    if(error){ console.warn('[hw] confirmations load failed:', error.message); return; }
    HW_CONFIRMATIONS = {};
    (data || []).forEach(row=>{ HW_CONFIRMATIONS[row.chapter_id] = row.confirmed_at; });
  } catch(e){ console.warn('[hw] confirmations load error:', e); }
}

/* Hub view mode (cards / list) — a local UI preference, not study
   progress, so it's kept out of PROGRESS/Supabase sync entirely. */
const HUB_VIEW_KEY = 'apstats-hub-view-mode';
let hubViewMode = (function(){
  try { return localStorage.getItem(HUB_VIEW_KEY) || 'list'; }
  catch(e){ return 'list'; }
})();
function setHubView(mode){
  hubViewMode = mode;
  try { localStorage.setItem(HUB_VIEW_KEY, mode); } catch(e){}
  renderHub();
}

/* Which units are expanded in the hub — persisted, and empty (all
   collapsed) by default so the "All contents" list starts tidy. */
const HUB_EXPANDED_KEY = 'apstats-hub-expanded-units';
let expandedUnits = (function(){
  try { return new Set(JSON.parse(localStorage.getItem(HUB_EXPANDED_KEY)) || []); }
  catch(e){ return new Set(); }
})();
function saveExpandedUnits(){
  try { localStorage.setItem(HUB_EXPANDED_KEY, JSON.stringify([...expandedUnits])); } catch(e){}
}
/* Toggles a unit's expanded state by mutating the existing DOM nodes in
   place (never re-rendering the hub) — that's what lets the CSS grid-rows
   transition actually animate instead of snapping instantly. */
function toggleUnitCollapse(unitCode, els){
  const nowExpanded = !expandedUnits.has(unitCode);
  if(nowExpanded) expandedUnits.add(unitCode); else expandedUnits.delete(unitCode);
  saveExpandedUnits();
  els.head.classList.toggle('collapsed', !nowExpanded);
  els.wrap.classList.toggle('expanded', nowExpanded);
  els.peek.classList.toggle('show', !nowExpanded);
}
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
  // homeworkSnapshot: frozen copy of hw.questions exactly as shown at
  // submission time (see hwSubmitBtn handler). Absent on submissions made
  // before this field existed — those fall back to live hw.questions and
  // can misgrade/mislabel if the question bank was edited since (e.g.
  // reordering options to de-cluster which letter holds the answer).
  if(p.homeworkSnapshot === undefined) p.homeworkSnapshot = null;
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
  await loadHwConfirmations();
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

function renderReportSections(progressObj, opts){
  opts = opts || {};
  const mode = opts.mode || 'self';
  const confirmations = opts.confirmations || (mode === 'self' ? HW_CONFIRMATIONS : {});
  const studentId = opts.studentId || null;

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
    const confirmed = !!confirmations[id];
    const code = ch.code.replace('Topic ','');

    if(mode === 'self'){
      if(!confirmed){
        return `<div class="rp-quiz-row">
          <span class="rq-code">${code}</span>
          <span class="rq-title">${ch.title}</span>
          <span class="rq-score pending">Awaiting review</span>
        </div>`;
      }
      return `<div class="rp-quiz-row rp-hw-row-link" onclick="closeReport(); goHomework('${id}')">
        <span class="rq-code">${code}</span>
        <span class="rq-title">${ch.title}</span>
        <span class="rq-score ${score>=PASS_QUIZ_PCT?'pass':''}">${score}%</span>
      </div>`;
    }

    // teacher mode: score is always visible to the teacher; a "Check
    // answers" toggle reveals the per-question breakdown, with a confirm
    // button that releases the graded result to the student.
    const badgeText = confirmed
      ? `Confirmed ✓ ${new Date(confirmations[id]).toLocaleDateString()}`
      : 'Not yet released to student';
    return `<div class="rp-hw-block">
      <div class="rp-quiz-row rp-hw-row-teacher">
        <span class="rq-code">${code}</span>
        <span class="rq-title">${ch.title}</span>
        <span class="rq-score ${score>=PASS_QUIZ_PCT?'pass':''}">${score}%</span>
        <button type="button" class="hw-review-toggle" data-chapter="${id}">Check answers</button>
      </div>
      <div class="hw-review-panel" id="hwReviewPanel-${studentId}-${id}" hidden>
        <div class="hw-review-badge" id="hwConfirmBadge-${studentId}-${id}">${badgeText}</div>
        <div class="hw-review-questions"></div>
        ${confirmed ? '' : `<button type="button" class="btn hw-confirm-btn" data-chapter="${id}">Confirm &amp; release to student</button>`}
      </div>
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

/* Per-question right/wrong breakdown for one student's homework
   submission — teacher-only, rendered inside a .hw-review-panel. */
function renderHomeworkGradeDetail(chapterId, progressObj){
  const ch = CHAPTERS[chapterId];
  const hw = ch && ch.homework;
  if(!hw || !hw.questions || !hw.questions.length) return '<div class="rp-empty">No homework data.</div>';
  const p = (progressObj && progressObj[chapterId]) || {};
  const answers = p.homeworkAnswers || [];
  // Grade against the submission-time snapshot when one exists, so a
  // later edit to the question bank (e.g. reordering options) can't
  // desync stored answer indices from their meaning — see homeworkSnapshot
  // in hwSubmitBtn's handler (renderHomework, app.js).
  const questions = (Array.isArray(p.homeworkSnapshot) && p.homeworkSnapshot.length === hw.questions.length)
    ? p.homeworkSnapshot
    : hw.questions;
  return questions.map((q, qi)=>{
    const chosen = answers[qi];
    const hasAnswer = chosen !== null && chosen !== undefined;
    const isCorrect = hasAnswer && chosen === q.correct;
    const chosenText = hasAnswer ? `${String.fromCharCode(65+chosen)}. ${q.opts[chosen]}` : '— no answer —';
    return `<div class="hw-review-q ${isCorrect ? 'is-correct' : 'is-wrong'}">
      <div class="hw-review-q-text"><b>Q${qi+1}.</b> ${q.q}</div>
      <div class="hw-review-q-answer">${isCorrect ? '✓' : '✗'} Student answered: ${chosenText}</div>
      ${!isCorrect ? `<div class="hw-review-q-correct">Correct answer: ${String.fromCharCode(65+q.correct)}. ${q.opts[q.correct]}</div>` : ''}
    </div>`;
  }).join('');
}

/* Wires up the "Check answers" toggles and "Confirm & release" buttons
   inside a just-rendered teacher-mode renderReportSections() block. */
function wireHomeworkReviewPanels(container, studentId, progressObj){
  container.querySelectorAll('.hw-review-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const chapterId = btn.dataset.chapter;
      const panel = document.getElementById(`hwReviewPanel-${studentId}-${chapterId}`);
      const opening = panel.hidden;
      panel.hidden = !opening;
      btn.textContent = opening ? 'Hide answers' : 'Check answers';
      if(opening){
        const qBox = panel.querySelector('.hw-review-questions');
        if(qBox && !qBox.innerHTML) qBox.innerHTML = renderHomeworkGradeDetail(chapterId, progressObj);
      }
    });
  });
  container.querySelectorAll('.hw-confirm-btn').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const chapterId = btn.dataset.chapter;
      btn.disabled = true; btn.textContent = 'Confirming…';
      try{
        const { error } = await sb.rpc('confirm_homework', { p_student_id: studentId, p_chapter_id: chapterId });
        if(error){
          console.warn('[hw] confirm failed:', error.message);
          btn.disabled = false; btn.textContent = 'Confirm & release to student';
          return;
        }
        const badge = document.getElementById(`hwConfirmBadge-${studentId}-${chapterId}`);
        if(badge) badge.textContent = 'Confirmed ✓ just now';
        btn.remove();
      } catch(e){
        console.warn('[hw] confirm error:', e);
        btn.disabled = false; btn.textContent = 'Confirm & release to student';
      }
    });
  });
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
      row.addEventListener('click', async ()=>{
        const i = row.dataset.i;
        const detail = document.getElementById('studentDetail'+i);
        const opening = detail.hidden;
        body.querySelectorAll('.rp-student-detail').forEach(d=>d.hidden = true);
        if(opening){
          detail.hidden = false;
          detail.innerHTML = '<div class="rp-empty">Loading…</div>';
          const studentId = data[i].user_id;
          const progress = data[i].progress || {};
          let confirmations = {};
          try{
            const { data: rows, error } = await sb.from('homework_confirmations')
              .select('chapter_id, confirmed_at').eq('student_id', studentId);
            if(error) console.warn('[hw] student confirmations load failed:', error.message);
            else (rows || []).forEach(r=>{ confirmations[r.chapter_id] = r.confirmed_at; });
          } catch(e){ console.warn('[hw] student confirmations load error:', e); }
          detail.innerHTML = renderReportSections(progress, { mode:'teacher', confirmations, studentId });
          wireHomeworkReviewPanels(detail, studentId, progress);
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
function flatChapterOrder(){ return UNITS.flatMap(u=>u.chapterIds).filter(cid=>CHAPTERS[cid]); }

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

  document.getElementById('hubToolbar').innerHTML = `
    <div class="view-toggle">
      <button type="button" class="${hubViewMode==='cards'?'active':''}" onclick="setHubView('cards')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        Cards
      </button>
      <button type="button" class="${hubViewMode==='list'?'active':''}" onclick="setHubView('list')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        List
      </button>
    </div>`;

  const container = document.getElementById('unitsContainer');
  container.innerHTML = '';
  UNITS.forEach(unit=>{
    const block = document.createElement('div');
    block.className = 'unit-block';
    const chapterCount = unit.chapterIds.filter(cid=>CHAPTERS[cid]).length;
    const isExpanded = expandedUnits.has(unit.code);
    const head = document.createElement('div');
    head.className = 'unit-head' + (isExpanded ? '' : ' collapsed');
    head.innerHTML = `<span class="code">${unit.code}</span><h3>${unit.name}</h3><span class="unit-count">${chapterCount} topic${chapterCount===1?'':'s'}</span>
      <svg class="unit-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
    block.appendChild(head);

    const peek = document.createElement('div');
    peek.className = 'unit-stack-peek' + (isExpanded ? '' : ' show');
    peek.innerHTML = `<div class="peek-card peek-1"></div><div class="peek-card peek-2"></div><div class="peek-card peek-3"></div>`;
    block.appendChild(peek);

    const collapseWrap = document.createElement('div');
    collapseWrap.className = 'unit-collapse-wrap' + (isExpanded ? ' expanded' : '');
    const collapseInner = document.createElement('div');
    collapseInner.className = 'unit-collapse-inner';
    collapseWrap.appendChild(collapseInner);

    head.onclick = ()=>toggleUnitCollapse(unit.code, { head, wrap: collapseWrap, peek });

    const chWrap = document.createElement('div');
    chWrap.className = hubViewMode === 'list' ? 'chapter-list' : 'chapter-grid';
    unit.chapterIds.forEach(cid=>{
      const ch = CHAPTERS[cid];
      if(!ch) return;
      const prog = chProg(cid);
      if(hubViewMode === 'list'){
        const row = document.createElement('div');
        row.className = 'chapter-row' + (prog.quizDone ? ' done' : '');
        row.onclick = ()=>goChapter(cid);
        row.innerHTML = `
          <span class="row-code">${ch.code}</span>
          <span class="row-title">${ch.title}</span>
          <span class="row-status"><span class="cc-dot"></span>${prog.quizDone ? 'best '+prog.quizBest+'%' : 'not started'}</span>`;
        chWrap.appendChild(row);
      } else {
        const card = document.createElement('div');
        card.className = 'chapter-card' + (prog.quizDone ? ' done' : '');
        card.onclick = ()=>goChapter(cid);
        card.innerHTML = `
          <span class="code">${ch.code}</span>
          <h4>${ch.title}</h4>
          <p>${ch.cardSummary}</p>
          <div class="cc-status"><span class="cc-dot"></span>${prog.quizDone ? 'quiz complete · best '+prog.quizBest+'%' : 'not started'}</div>`;
        chWrap.appendChild(card);
      }
    });
    collapseInner.appendChild(chWrap);
    block.appendChild(collapseWrap);
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

  const confirmed = isHwConfirmed(id);
  const showGrading = prog.homeworkDone && confirmed;
  const banner = document.getElementById('hwStatusBanner');
  if(showGrading){
    banner.className = 'hw-status-banner confirmed';
    banner.textContent = `Reviewed by your teacher — you scored ${prog.homeworkScore}%. Right and wrong answers are marked below.`;
  } else if(prog.homeworkDone){
    banner.className = 'hw-status-banner pending';
    banner.textContent = "Submitted — your teacher hasn't reviewed this yet. Your score will appear here once they do.";
  } else {
    banner.className = 'hw-status-banner';
    banner.textContent = '';
  }

  const flagSummary = document.getElementById('hwFlagSummary');
  flagSummary.textContent = flagged.length
    ? `🚩 ${flagged.length} question${flagged.length===1?'':'s'} flagged for review.`
    : '';

  // Once grading is showing, render from the frozen submission-time
  // snapshot (if one was saved) rather than the live question bank — see
  // homeworkSnapshot in hwSubmitBtn's handler. Older submissions made
  // before snapshots existed have none, so they still fall back to live
  // hw.questions and can misgrade if the question bank changed since.
  const gradingSrc = (showGrading && Array.isArray(prog.homeworkSnapshot) && prog.homeworkSnapshot.length === hw.questions.length)
    ? prog.homeworkSnapshot
    : hw.questions;

  const qBox = document.getElementById('hwQuestions');
  qBox.innerHTML = '';
  hw.questions.forEach((liveQ, qi)=>{
    const q = gradingSrc[qi];
    const card = document.createElement('div');
    card.className = 'hw-q' + (flagged.includes(qi) ? ' is-flagged' : '');
    card.innerHTML = `
      <div class="hw-q-head">
        <span class="hw-q-num">${qi+1}.</span><span class="hw-q-text">${q.q}</span>
        <button type="button" class="hw-flag-btn${flagged.includes(qi)?' flagged':''}" data-qi="${qi}">
          <span class="flag-ico">🚩</span>${flagged.includes(qi) ? 'Flagged' : 'Not sure?'}
        </button>
      </div>
      <div class="hw-opts">${q.opts.map((o,oi)=>{
        let cls = 'hw-opt';
        if(answers[qi]===oi) cls += ' selected';
        if(showGrading){
          if(oi === q.correct) cls += ' correct';
          else if(answers[qi]===oi) cls += ' wrong';
        }
        return `<button type="button" class="${cls}" data-qi="${qi}" data-oi="${oi}">
           <span class="hw-opt-letter">${String.fromCharCode(65+oi)}.</span><span>${o}</span>
         </button>`;
      }).join('')}</div>
      ${showGrading && q.exp ? `<div class="hw-q-exp">${q.exp}</div>` : ''}`;
    qBox.appendChild(card);
  });
  qBox.querySelectorAll('.hw-opt').forEach(btn=>{
    btn.onclick = ()=>{
      const qi = parseInt(btn.dataset.qi);
      const oi = parseInt(btn.dataset.oi);
      answers[qi] = oi;
      qBox.querySelectorAll(`.hw-opt[data-qi="${qi}"]`).forEach(b=>{
        b.classList.toggle('selected', b === btn);
        b.classList.remove('correct','wrong'); // stale grading no longer applies once the student edits this question
      });
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
    // Freeze exactly what was shown at submission time. Without this, a
    // later content edit to hw.questions (e.g. reordering options so the
    // correct answer isn't always "A") reshuffles the indices this
    // submission's answers[] were recorded against, and the review/grade
    // views below — which read live hw.questions — end up comparing an
    // old index to a new meaning and mislabeling already-graded answers.
    prog.homeworkSnapshot = hw.questions.map(q => ({ q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp || '' }));
    persist();
    // Resubmitting invalidates any earlier teacher confirmation — the
    // new answers need a fresh check before results reach the student.
    if(CLOUD && currentUser && HW_CONFIRMATIONS[id]){
      delete HW_CONFIRMATIONS[id];
      sb.from('homework_confirmations').delete()
        .eq('student_id', currentUser.id).eq('chapter_id', id)
        .then(({error})=>{ if(error) console.warn('[hw] unconfirm failed:', error.message); });
    }
    renderHomework(id);
    document.getElementById('hwSubmitMsg').textContent = 'Submitted ✓ — nice work. Your teacher can review your results.';
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
    case 'compare-table': return renderCompareTable(sec, mount);
    case 'flow': return renderFlow(sec, mount);
    case 'twowaytable': return renderTwoWayTable(sec, mount);
    case 'simulator': return renderSimulator(sec, mount);
    case 'samplingsim': return renderSamplingSim(sec, mount);
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

/* ---- z-score number line (mean, sd, and one marked value) ---- */
function svgZScoreLine(spec, opts){
  opts = opts || {};
  const mean = spec.mean, sd = spec.sd, value = spec.value;
  const decimals = spec.decimals !== undefined ? spec.decimals : (Number.isInteger(mean) && Number.isInteger(sd) && Number.isInteger(value) ? 0 : 1);
  const z = (value - mean) / sd;
  const spread = Math.max(3.5, Math.abs(z) + 0.6);
  const axisMin = mean - spread*sd, axisMax = mean + spread*sd;
  const pad = 24, plotW = 440, padT = 54, padB = 34;
  const w = pad*2 + plotW;
  const axisY = padT + 70;
  const h = axisY + padB;
  const xScale = v => pad + (v-axisMin)/(axisMax-axisMin)*plotW;
  const bandOpacities = [0.10, 0.17, 0.26]; /* widest (3sd) first, narrowest (1sd) painted last/darkest */
  const bands = [3,2,1].map((k,i)=>{
    const x0 = xScale(mean - k*sd), x1 = xScale(mean + k*sd);
    return `<rect x="${x0}" y="${padT}" width="${x1-x0}" height="${axisY-padT}" fill="var(--population)" fill-opacity="${bandOpacities[i]}"/>`;
  }).join('');
  const ticks = [];
  for(let k=-3;k<=3;k++){
    const v = mean + k*sd;
    const x = xScale(v);
    const vLabel = decimals ? v.toFixed(decimals) : Math.round(v);
    const zLabel = (k===0 ? '0' : (k>0?'+':'') + k) + 'σ';
    ticks.push(`<line x1="${x}" y1="${axisY}" x2="${x}" y2="${axisY+5}" stroke="var(--line)" stroke-width="1.5"/>
      <text x="${x}" y="${axisY+18}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--ink-soft)">${vLabel}</text>
      <text x="${x}" y="${axisY+30}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9.5" fill="var(--ink-faint)">${zLabel}</text>`);
  }
  const meanX = xScale(mean);
  const valX = xScale(value);
  const labelY = padT - 14;
  const zText = `z = ${z>=0?'+':''}${z.toFixed(2)}`;
  const decOrRound = n => decimals ? n.toFixed(decimals) : Math.round(n);
  const valueLabel = (spec.label ? spec.label + ': ' : '') + decOrRound(value) + (spec.unit||'');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    ${bands}
    <line x1="${pad}" y1="${axisY}" x2="${pad+plotW}" y2="${axisY}" stroke="var(--line)" stroke-width="1.5"/>
    ${ticks.join('')}
    <line x1="${meanX}" y1="${padT}" x2="${meanX}" y2="${axisY}" stroke="var(--ink-soft)" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="${meanX}" y="${padT-38}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10.5" fill="var(--ink-soft)">mean = ${decOrRound(mean)}${spec.unit||''}</text>
    <line x1="${valX}" y1="${axisY}" x2="${valX}" y2="${padT}" stroke="var(--sample)" stroke-width="1.5" stroke-dasharray="3,3"/>
    <circle cx="${valX}" cy="${axisY}" r="6.5" fill="var(--sample)"/>
    <text x="${valX}" y="${labelY}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12.5" font-weight="700" fill="var(--sample)">${zText}</text>
    <text x="${valX}" y="${labelY-16}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10.5" fill="var(--ink-soft)">${valueLabel}</text>
  </svg>`;
}

/* ---- population/dot grid (a population of colored dots, some selected as a sample) ---- */
function svgPopulationGrid(spec, opts){
  opts = opts || {};
  const cols = spec.cols;
  const cells = spec.cells;
  const rows = Math.ceil(cells.length / cols);
  const r = 11, gap = 30, pad = 20;
  const legendH = spec.legend ? 30 : 0;
  const w = pad*2 + (cols-1)*gap + r*2;
  const h = pad*2 + (rows-1)*gap + r*2 + legendH;
  const dots = cells.map((cell,i)=>{
    const row = Math.floor(i/cols), col = i%cols;
    const cx = pad + r + col*gap;
    const cy = pad + r + row*gap;
    const color = chartColor(cell.group);
    if(cell.selected){
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="var(--ink)" stroke-width="2.25"/>`;
    }
    return `<circle cx="${cx}" cy="${cy}" r="${r-1.5}" fill="${color}" fill-opacity="0.22" stroke="${color}" stroke-opacity="0.4" stroke-width="1"/>`;
  }).join('');
  const legend = (spec.legend||[]).map(l=>`<span class="chart-legend-item"><span class="chart-legend-swatch" style="background:${chartColor(l.group)}; border-radius:50%;"></span>${l.label}</span>`).join('');
  const legendEl = spec.legend ? `<div class="chart-legend">${legend}</div>` : '';
  return `<div class="chart-pie-wrap">
    <svg viewBox="0 0 ${w} ${h-legendH}" width="100%" height="${h-legendH}" style="max-width:${w}px;display:block;margin:0 auto;">${dots}</svg>
    ${legendEl}
  </div>`;
}

/* ---- matched pairs (rows of two linked circles, one pair per row) ---- */
function svgMatchedPairs(spec, opts){
  opts = opts || {};
  const pairs = spec.pairs;
  const rowH = 50, pad = 22, circleR = 14, gapWithinPair = 66, padT = 14;
  const hasNotes = pairs.some(p=>p.note);
  const w = pad*2 + gapWithinPair + circleR*2 + (hasNotes ? 210 : 0);
  const h = padT*2 + pairs.length*rowH;
  const rows = pairs.map((p,i)=>{
    const y = padT + i*rowH + rowH/2;
    const x1 = pad + circleR, x2 = x1 + gapWithinPair;
    const color = chartColor(p.group||0);
    const noteEl = p.note ? `<text x="${x2+circleR+16}" y="${y+4}" font-family="Plus Jakarta Sans, sans-serif" font-size="11.5" fill="var(--ink-soft)">${p.note}</text>` : '';
    return `
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="var(--line)" stroke-width="2"/>
      <circle cx="${x1}" cy="${y}" r="${circleR}" fill="${color}" stroke="var(--population)" stroke-width="2.5"/>
      <text x="${x1}" y="${y+4}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10.5" font-weight="700" fill="#fff">A</text>
      <circle cx="${x2}" cy="${y}" r="${circleR}" fill="${color}" stroke="var(--sample)" stroke-width="2.5"/>
      <text x="${x2}" y="${y+4}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10.5" font-weight="700" fill="#fff">B</text>
      ${noteEl}`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">${rows}</svg>`;
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

/* ---- side-by-side (grouped) bar chart — compare 2 categorical variables ---- */
function svgSideBySideBar(spec, opts){
  opts = opts || {};
  const mode = spec.mode || 'count';
  const categories = spec.categories;
  const series = spec.series;
  const seriesTotals = series.map(s=>s.values.reduce((a,v)=>a+v,0));
  const barVal = (si, ci) => mode === 'relative' ? series[si].values[ci]/seriesTotals[si]*100 : series[si].values[ci];
  let max = 0;
  series.forEach((s,si)=>categories.forEach((c,ci)=>{ max = Math.max(max, barVal(si,ci)); }));
  if(max <= 0) max = 1;

  const barW = 24, innerGap = 4, groupGap = 30, pad = 16, chartH = 150, padT = 26, padB = 34;
  const groupW = series.length*barW + (series.length-1)*innerGap;
  const w = pad*2 + categories.length*groupW + (categories.length-1)*groupGap;
  const h = padT + chartH + padB;

  const groups = categories.map((cat, ci)=>{
    const gx = pad + ci*(groupW+groupGap);
    const bars = series.map((s, si)=>{
      const val = barVal(si, ci);
      const barH = Math.max(0, val/max*chartH);
      const x = gx + si*(barW+innerGap);
      const y = padT + (chartH - barH);
      const label = mode === 'relative' ? (Math.round(val*10)/10)+'%' : series[si].values[ci];
      return `${barH > 0 ? `<text x="${x+barW/2}" y="${y-6}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10.5" fill="var(--ink)">${label}</text>` : ''}
        <rect x="${x}" y="${y}" width="${barW}" height="${barH}" fill="${chartColor(si)}" stroke="var(--card)" stroke-width="1.5"/>`;
    }).join('');
    const catLabel = `<text x="${gx+groupW/2}" y="${padT+chartH+18}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-soft)">${cat}</text>`;
    return bars + catLabel;
  }).join('');

  const legend = series.map((s,si)=>`<span class="chart-legend-item"><span class="chart-legend-swatch" style="background:${chartColor(si)};"></span>${s.label}</span>`).join('');

  return `<div class="chart-pie-wrap">
    <svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
      <line x1="${pad-2}" y1="${padT+chartH}" x2="${w-pad+2}" y2="${padT+chartH}" stroke="var(--line)" stroke-width="1.5"/>
      ${groups}
    </svg>
    <div class="chart-legend">${legend}</div>
  </div>`;
}

/* ---- segmented bar graph / mosaic plot — 100%-stacked bars, optional variable width for mosaic ---- */
function svgSegmentedBar(spec, opts){
  opts = opts || {};
  const orientation = opts.orientation || 'vertical';
  const variableWidth = !!opts.variableWidth;
  const bars = spec.bars.map(b=>Object.assign({}, b, { total: b.total || b.segments.reduce((a,s)=>a+s.value,0) }));
  const grandTotal = bars.reduce((a,b)=>a+b.total, 0);
  const nBars = bars.length;
  const pad = 16, chartLen = 190, padT = 20, padB = 44, padL = 16, thickBase = 70, gap = 18;

  const legendLabels = bars[0].segments.map((s,si)=>`<span class="chart-legend-item"><span class="chart-legend-swatch" style="background:${chartColor(si)};"></span>${s.label}</span>`).join('');

  if(orientation === 'vertical'){
    const availW = thickBase*nBars;
    const w = pad*2 + availW + gap*(nBars-1);
    const h = padT + chartLen + padB;
    let x = pad;
    const barEls = bars.map(b=>{
      const bw = variableWidth ? (b.total/grandTotal)*availW : availW/nBars;
      let y = padT;
      const segEls = b.segments.map((s,si)=>{
        const segH = (s.value/b.total)*chartLen;
        const pct = Math.round(s.value/b.total*1000)/10;
        const el = `<rect x="${x}" y="${y}" width="${bw}" height="${segH}" fill="${chartColor(si)}" stroke="var(--card)" stroke-width="1.5"/>` +
          (segH > 14 ? `<text x="${x+bw/2}" y="${y+segH/2+4}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10.5" fill="#fff">${pct}%</text>` : '');
        y += segH;
        return el;
      }).join('');
      const label = `<text x="${x+bw/2}" y="${padT+chartLen+18}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-soft)">${b.label}</text>` +
        (variableWidth ? `<text x="${x+bw/2}" y="${padT+chartLen+32}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9.5" fill="var(--ink-faint)">n=${b.total}</text>` : '');
      const out = segEls + label;
      x += bw + gap;
      return out;
    }).join('');
    return `<div class="chart-pie-wrap">
      <svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">${barEls}</svg>
      <div class="chart-legend">${legendLabels}</div>
    </div>`;
  }

  // horizontal: bars are rows; chartLen = width (100%), thickness = row height
  const availH = thickBase*nBars*0.62;
  const labelW = Math.max(...bars.map(b=>b.label.length))*6.5 + 20;
  const w = padL + labelW + chartLen + pad;
  const h = padT + availH + gap*(nBars-1) + (padB - 20);
  let y = padT;
  const barEls = bars.map(b=>{
    const bh = variableWidth ? (b.total/grandTotal)*availH : availH/nBars;
    let x = padL + labelW;
    const segEls = b.segments.map((s,si)=>{
      const segW = (s.value/b.total)*chartLen;
      const pct = Math.round(s.value/b.total*1000)/10;
      const el = `<rect x="${x}" y="${y}" width="${segW}" height="${bh}" fill="${chartColor(si)}" stroke="var(--card)" stroke-width="1.5"/>` +
        (segW > 24 ? `<text x="${x+segW/2}" y="${y+bh/2+4}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10.5" fill="#fff">${pct}%</text>` : '');
      x += segW;
      return el;
    }).join('');
    const label = `<text x="${padL+labelW-10}" y="${y+bh/2+4}" text-anchor="end" font-family="Plus Jakarta Sans, sans-serif" font-size="11" fill="var(--ink-soft)">${b.label}${variableWidth ? ` (n=${b.total})` : ''}</text>`;
    const out = segEls + label;
    y += bh + gap;
    return out;
  }).join('');
  return `<div class="chart-pie-wrap">
    <svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">${barEls}</svg>
    <div class="chart-legend">${legendLabels}</div>
  </div>`;
}

/* ---- live convergence line — running success proportion vs. trial number ---- */
function svgLLNLive(successBools, trueProb){
  const n = successBools.length;
  const padL = 40, padR = 14, padT = 14, padB = 28, plotW = 460, plotH = 160;
  const w = padL + plotW + padR, h = padT + plotH + padB;
  const xScale = i => padL + (n <= 1 ? plotW : (i/(n-1))*plotW);
  const yScale = p => padT + (1-p)*plotH;

  const grid = [0, 0.25, 0.5, 0.75, 1].map(p=>{
    const y = yScale(p);
    return `<line x1="${padL}" y1="${y}" x2="${padL+plotW}" y2="${y}" stroke="var(--line-soft)" stroke-width="1"/>
      <text x="${padL-8}" y="${y+4}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--ink-soft)">${p}</text>`;
  }).join('');

  const refY = yScale(trueProb);
  const refLine = `<line x1="${padL}" y1="${refY}" x2="${padL+plotW}" y2="${refY}" stroke="var(--sample)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="${padL+plotW}" y="${refY-4}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--sample)">theoretical ${(trueProb*100).toFixed(1)}%</text>`;

  let pathEl = '';
  if(n > 0){
    let successCount = 0;
    const pts = successBools.map((s,i)=>{
      if(s) successCount++;
      return [xScale(i), yScale(successCount/(i+1))];
    });
    const d = 'M' + pts.map(([x,y])=>`${x.toFixed(2)},${y.toFixed(2)}`).join(' L');
    pathEl = `<path d="${d}" fill="none" stroke="var(--population)" stroke-width="2"/>`;
  }

  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    ${grid}
    ${refLine}
    ${pathEl}
    <text x="${padL+plotW/2}" y="${h-4}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10.5" fill="var(--ink-soft)">trial number (n=${n})</text>
  </svg>`;
}

/* ---- draw one simulated trial for a scenario: independent draws if allowRepeats, without replacement otherwise ---- */
function simDrawTrial(sc){
  const [lo, hi] = sc.numberRange;
  const draws = [];
  const used = new Set();
  for(let i=0;i<sc.drawCount;i++){
    let n;
    if(sc.allowRepeats){
      n = lo + Math.floor(Math.random()*(hi-lo+1));
    } else {
      do { n = lo + Math.floor(Math.random()*(hi-lo+1)); } while(used.has(n));
      used.add(n);
    }
    draws.push(n);
  }
  const outcomes = draws.map(sc.classify);
  return { draws, outcomes, success: sc.isSuccess(outcomes) };
}

/* ---- interactive simulation runner — Topic 2.3 ---- */
function renderSimulator(sec, mount){
  const wrap = document.createElement('div');
  wrap.className = 'sim-shell';
  let activeIdx = 0;
  const states = sec.scenarios.map(()=>({ trials: [] }));

  function draw(){
    const sc = sec.scenarios[activeIdx];
    const state = states[activeIdx];
    const n = state.trials.length;
    const successes = state.trials.filter(t=>t.success).length;
    const runningPct = n ? (Math.round(successes/n*1000)/10)+'%' : '—';

    const tabs = sec.scenarios.map((s,i)=>`<button type="button" class="sim-tab ${i===activeIdx?'active':''}" data-i="${i}">${s.shortLabel}</button>`).join('');
    const stepsHtml = sc.steps.map(s=>`<li>${s}</li>`).join('');
    const logRows = state.trials.slice(-15).reverse().map(t=>`
      <div class="sim-log-row ${t.success?'success':''}">
        <span class="sim-log-num">#${t.num}</span>
        <span class="sim-log-outcomes">${t.outcomes.join(' ')}</span>
        <span class="sim-log-mark">${t.success ? '✓' : '✗'}</span>
      </div>`).join('');
    const chart = svgLLNLive(state.trials.map(t=>t.success), sc.trueProb);

    wrap.innerHTML = `
      <div class="sim-tabs">${tabs}</div>
      <p class="sim-desc">${sc.description}</p>
      <ol class="sim-steps">${stepsHtml}</ol>
      <div class="sim-controls">
        <button type="button" class="sim-btn primary" data-act="run1">Run 1 trial</button>
        <button type="button" class="sim-btn" data-act="run10">Run 10 trials</button>
        <button type="button" class="sim-btn" data-act="run100">Run 100 trials</button>
        <button type="button" class="sim-btn ghost" data-act="reset">Reset</button>
      </div>
      <div class="sim-stats">
        <div class="sim-stat"><span class="sim-stat-val">${n}</span><span class="sim-stat-label">Trials run</span></div>
        <div class="sim-stat"><span class="sim-stat-val">${successes}</span><span class="sim-stat-label">Successes</span></div>
        <div class="sim-stat"><span class="sim-stat-val">${runningPct}</span><span class="sim-stat-label">Estimated probability</span></div>
        <div class="sim-stat ref"><span class="sim-stat-val">${(sc.trueProb*100).toFixed(2)}%</span><span class="sim-stat-label">True probability</span></div>
      </div>
      <div class="sim-chart-wrap">${chart}</div>
      <div class="sim-log">${logRows || '<p class="sim-log-empty">No trials yet — click "Run 1 trial" to start, or "Run 100 trials" to watch the law of large numbers kick in.</p>'}</div>
    `;

    wrap.querySelectorAll('.sim-tab').forEach(btn=>{
      btn.onclick = ()=>{ activeIdx = +btn.dataset.i; draw(); };
    });
    wrap.querySelector('[data-act="run1"]').onclick = ()=>runN(1);
    wrap.querySelector('[data-act="run10"]').onclick = ()=>runN(10);
    wrap.querySelector('[data-act="run100"]').onclick = ()=>runN(100);
    wrap.querySelector('[data-act="reset"]').onclick = ()=>{ state.trials = []; draw(); };
  }

  function runN(count){
    const sc = sec.scenarios[activeIdx];
    const state = states[activeIdx];
    for(let i=0;i<count;i++){
      const r = simDrawTrial(sc);
      state.trials.push({ outcomes: r.outcomes, success: r.success, num: state.trials.length+1 });
    }
    draw();
  }

  draw();
  mount.appendChild(wrap);
}

/* ---- two-dice sample space grid — highlight the outcomes matching an event ---- */
function svgDiceGrid(it){
  const n = 6, cell = 34, labelW = 26, pad = 10, padT = 26;
  const w = pad*2 + labelW + n*cell;
  const h = pad + padT + n*cell + pad;
  let highlightCount = 0;
  const cells = [];
  for(let r=1;r<=n;r++){
    for(let c=1;c<=n;c++){
      const sum = r+c;
      const hl = it.highlight(sum);
      if(hl) highlightCount++;
      const x = pad+labelW+(c-1)*cell, y = pad+padT+(r-1)*cell;
      cells.push(`<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${hl?'var(--sample)':'var(--paper-deep)'}" stroke="var(--card)" stroke-width="1.5"/>
        <text x="${x+cell/2}" y="${y+cell/2+4}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="${hl?'#fff':'var(--ink)'}">${sum}</text>`);
    }
  }
  const colHeaders = Array.from({length:n}, (_,i)=>{
    const x = pad+labelW+i*cell+cell/2;
    return `<text x="${x}" y="${pad+padT-10}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12" fill="var(--ink-soft)">${i+1}</text>`;
  }).join('');
  const rowHeaders = Array.from({length:n}, (_,i)=>{
    const y = pad+padT+i*cell+cell/2+4;
    return `<text x="${pad+labelW-10}" y="${y}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="12" fill="var(--ink-soft)">${i+1}</text>`;
  }).join('');
  const pct = Math.round(highlightCount/36*1000)/10;
  return `<div class="chart-pie-wrap">
    <svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">${colHeaders}${rowHeaders}${cells.join('')}</svg>
    <p class="chart-caption" style="margin-top:.2rem;">${highlightCount} of 36 outcomes highlighted → P ≈ ${highlightCount}/36 = ${pct}%</p>
  </div>`;
}

/* ---- Venn diagram — two circles, overlapping (joint) or disjoint (mutually exclusive) ---- */
function svgVenn(it){
  const w = 320, h = 190;
  const disjoint = it.mode === 'disjoint';
  const r = 62, cy = 95;
  const cxA = disjoint ? 95 : 130;
  const cxB = disjoint ? 225 : 190;

  const label = (text, x, y, color) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="600" fill="${color}">${text}</text>`;
  const num = (val, x, y, bold) => val === undefined ? '' : `<text x="${x}" y="${y+5}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="14" font-weight="${bold?700:400}" fill="var(--ink)">${val}</text>`;

  const onlyAx = disjoint ? cxA : cxA - 26;
  const onlyBx = disjoint ? cxB : cxB + 26;
  const outsideEl = it.outside !== undefined
    ? `<text x="${w/2}" y="${h-8}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--ink-soft)">outside both: ${it.outside}</text>`
    : '';

  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    <circle cx="${cxA}" cy="${cy}" r="${r}" fill="var(--population)" fill-opacity="0.32" stroke="var(--population)" stroke-width="2"/>
    <circle cx="${cxB}" cy="${cy}" r="${r}" fill="var(--sample)" fill-opacity="0.32" stroke="var(--sample)" stroke-width="2"/>
    ${label(it.labelA, cxA - (disjoint?0:28), cy-r-10, 'var(--population)')}
    ${label(it.labelB, cxB + (disjoint?0:28), cy-r-10, 'var(--sample)')}
    ${num(it.onlyA, onlyAx, cy)}
    ${num(it.onlyB, onlyBx, cy)}
    ${(!disjoint) ? num(it.overlapValue, (cxA+cxB)/2, cy, true) : ''}
    ${outsideEl}
  </svg>`;
}

/* ---- two-level probability tree — branch probabilities + computed joint leaf probabilities ---- */
function svgProbTree(it){
  const w = 640, h = 260;
  const rootX = 46, rootY = h/2;
  const s1X = 250, s1Y = [h*0.26, h*0.74];
  const s2X = 430, s2Y = [h*0.10, h*0.37, h*0.63, h*0.90];

  const b1 = it.stage1.branches;
  const b2 = it.stage2.branchesByStage1;

  function edge(x1,y1,x2,y2,label){
    const mx=(x1+x2)/2, my=(y1+y2)/2;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--ink-faint)" stroke-width="1.5"/>
      <rect x="${mx-15}" y="${my-10}" width="30" height="15" fill="var(--card)"/>
      <text x="${mx}" y="${my+2}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10.5" fill="var(--population)">${label}</text>`;
  }

  let inner = `<circle cx="${rootX}" cy="${rootY}" r="4" fill="var(--ink-soft)"/>` +
    (it.rootLabel ? `<text x="${rootX}" y="${rootY-12}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="11.5" font-weight="600" fill="var(--ink)">${it.rootLabel}</text>` : '');

  b1.forEach((br,i)=>{
    inner += edge(rootX, rootY, s1X, s1Y[i], (br.prob*100).toFixed(0)+'%');
    inner += `<circle cx="${s1X}" cy="${s1Y[i]}" r="4" fill="${chartColor(i)}"/>
      <text x="${s1X}" y="${s1Y[i]-12}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="11.5" font-weight="600" fill="var(--ink)">${br.label}</text>`;
    b2[i].forEach((leaf,j)=>{
      const idx = i*2+j;
      inner += edge(s1X, s1Y[i], s2X, s2Y[idx], (leaf.prob*100).toFixed(0)+'%');
      const joint = br.prob*leaf.prob;
      inner += `<circle cx="${s2X}" cy="${s2Y[idx]}" r="4" fill="${chartColor(i)}"/>
        <text x="${s2X+10}" y="${s2Y[idx]-4}" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="600" fill="var(--ink)">${br.label} ∩ ${leaf.label}</text>
        <text x="${s2X+10}" y="${s2Y[idx]+11}" font-family="JetBrains Mono, monospace" font-size="10.5" fill="var(--sample)">P = ${(joint*100).toFixed(2)}%</text>`;
    });
  });

  return `<div class="chart-svg-wrap"><svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">${inner}</svg></div>`;
}

/* ---- normal curve with a shaded region — P(lower < X < upper) ---- */
function svgNormalCurve(spec){
  const mean = spec.mean, sd = spec.sd;
  const decimals = spec.decimals !== undefined ? spec.decimals : 1;
  const xMin = mean - 3.5*sd, xMax = mean + 3.5*sd;
  const w = 440, h = 190, padL = 16, padR = 16, padT = 14, padB = 34;
  const plotW = w - padL - padR, plotH = h - padT - padB;
  const xScale = x => padL + (x - xMin) / (xMax - xMin) * plotW;
  function pdf(x){ const z = (x - mean) / sd; return Math.exp(-z*z/2) / (sd * Math.sqrt(2*Math.PI)); }
  const peak = pdf(mean);
  const yScale = y => padT + (1 - y/peak) * plotH;
  const baseline = yScale(0);

  const N = 90;
  const curvePts = [];
  for(let i=0;i<=N;i++){ const x = xMin + (xMax-xMin)*i/N; curvePts.push(xScale(x).toFixed(2)+','+yScale(pdf(x)).toFixed(2)); }
  const curvePath = 'M' + curvePts.join(' L');

  const lo = (spec.lower === undefined || spec.lower === null) ? xMin : Math.max(spec.lower, xMin);
  const hi = (spec.upper === undefined || spec.upper === null) ? xMax : Math.min(spec.upper, xMax);
  const M = 60;
  const shadePts = [];
  for(let i=0;i<=M;i++){ const x = lo + (hi-lo)*i/M; shadePts.push(xScale(x).toFixed(2)+','+yScale(pdf(x)).toFixed(2)); }
  const shadePath = `M${xScale(lo).toFixed(2)},${baseline.toFixed(2)} L${shadePts.join(' L')} L${xScale(hi).toFixed(2)},${baseline.toFixed(2)} Z`;

  const boundaryLines = [spec.lower, spec.upper].filter(v => v !== undefined && v !== null).map(v=>{
    const x = xScale(Math.max(xMin, Math.min(xMax, v)));
    return `<line x1="${x}" y1="${padT}" x2="${x}" y2="${baseline}" stroke="var(--sample)" stroke-width="1.5" stroke-dasharray="3 3"/>`;
  }).join('');

  const ticks = [];
  for(let k=-3;k<=3;k++){
    const x = mean + k*sd;
    if(x < xMin-1e-9 || x > xMax+1e-9) continue;
    const px = xScale(x);
    const label = spec.useZ ? (k===0?'0':(k>0?'+':'')+k) : x.toFixed(decimals);
    ticks.push(`<line x1="${px}" y1="${baseline}" x2="${px}" y2="${baseline+5}" stroke="var(--line)" stroke-width="1.5"/>
      <text x="${px}" y="${baseline+18}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--ink-soft)">${label}</text>`);
  }
  const axisLabel = spec.label ? `<text x="${w/2}" y="${h-2}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="10.5" fill="var(--ink-soft)">${spec.label}</text>` : '';

  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    <path d="${shadePath}" fill="var(--sample)" fill-opacity="0.35" stroke="none"/>
    <path d="${curvePath}" fill="none" stroke="var(--population)" stroke-width="2"/>
    <line x1="${padL}" y1="${baseline}" x2="${w-padR}" y2="${baseline}" stroke="var(--line)" stroke-width="1.5"/>
    ${boundaryLines}
    ${ticks.join('')}
    ${axisLabel}
  </svg>`;
}

/* ---- sampling distribution simulator — draw many samples, watch the statistic's own distribution take shape ---- */
function randStdNormal(){
  let u = 0, v = 0;
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  return Math.sqrt(-2*Math.log(u)) * Math.cos(2*Math.PI*v);
}
function drawOneIndividual(sc){
  if(sc.populationType === 'bernoulli') return Math.random() < sc.populationParam.p ? 1 : 0;
  if(sc.populationType === 'exponential') return -Math.log(1 - Math.random()) * sc.populationParam.mean;
  if(sc.populationType === 'normal') return sc.populationParam.mean + sc.populationParam.sd * randStdNormal();
}
function drawSampleStatistic(sc){
  let sum = 0;
  for(let i=0;i<sc.n;i++) sum += drawOneIndividual(sc);
  return sum / sc.n;
}

function svgSamplingHistogram(values, opts){
  const w = 460, h = 170, padL = 34, padR = 14, padT = 14, padB = 30;
  const plotW = w - padL - padR, plotH = h - padT - padB;
  const binWidth = opts.binWidth;
  const binOf = v => Math.round(v / binWidth) * binWidth;
  const counts = {};
  let maxCount = 0;
  values.forEach(v => {
    const b = binOf(v);
    counts[b] = (counts[b] || 0) + 1;
    if(counts[b] > maxCount) maxCount = counts[b];
  });
  const bins = Object.keys(counts).map(Number);
  const dataMin = bins.length ? Math.min(...bins, opts.trueValue) : opts.trueValue;
  const dataMax = bins.length ? Math.max(...bins, opts.trueValue) : opts.trueValue;
  const span = Math.max(dataMax - dataMin, binWidth*4);
  const xMin = dataMin - span*0.15 - binWidth/2, xMax = dataMax + span*0.15 + binWidth/2;
  const xScale = v => padL + (v - xMin)/(xMax - xMin) * plotW;
  const barW = Math.max(2, (binWidth/(xMax-xMin))*plotW - 1);
  const baseline = padT + plotH;
  const yMax = Math.max(maxCount, 1);

  const bars = bins.map(b=>{
    const c = counts[b];
    const bh = (c/yMax) * plotH;
    const x = xScale(b) - barW/2;
    const y = baseline - bh;
    return `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${barW.toFixed(2)}" height="${bh.toFixed(2)}" fill="var(--population)" fill-opacity="0.75"/>`;
  }).join('');

  const trueX = xScale(opts.trueValue);
  const refLine = `<line x1="${trueX.toFixed(2)}" y1="${padT}" x2="${trueX.toFixed(2)}" y2="${baseline}" stroke="var(--sample)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="${trueX.toFixed(2)}" y="${padT-2}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--sample)">true value</text>`;

  const ticks = [];
  const tickStep = binWidth * Math.max(1, Math.round((xMax-xMin)/binWidth/6));
  for(let t = Math.ceil(xMin/tickStep)*tickStep; t <= xMax; t += tickStep){
    const x = xScale(t);
    ticks.push(`<text x="${x.toFixed(2)}" y="${baseline+14}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9.5" fill="var(--ink-soft)">${(opts.decimals!==undefined ? t.toFixed(opts.decimals) : t)}</text>`);
  }

  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="max-width:${w}px;display:block;margin:0 auto;">
    <line x1="${padL}" y1="${baseline}" x2="${w-padR}" y2="${baseline}" stroke="var(--line)" stroke-width="1.5"/>
    ${bars}
    ${values.length ? refLine : ''}
    ${ticks.join('')}
  </svg>`;
}

function renderSamplingSim(sec, mount){
  const wrap = document.createElement('div');
  wrap.className = 'sim-shell';
  let activeIdx = 0;
  const states = sec.scenarios.map(()=>({ values: [] }));

  function draw(){
    const sc = sec.scenarios[activeIdx];
    const state = states[activeIdx];
    const n = state.values.length;
    const mean = n ? state.values.reduce((a,v)=>a+v,0)/n : null;

    const tabs = sec.scenarios.map((s,i)=>`<button type="button" class="sim-tab ${i===activeIdx?'active':''}" data-i="${i}">${s.shortLabel}</button>`).join('');
    const fmt = v => v===null ? '—' : v.toFixed(sc.decimals!==undefined?sc.decimals:2) + (sc.unit||'');
    const recent = state.values.slice(-15).reverse().map((v,ri)=>`
      <div class="sim-log-row">
        <span class="sim-log-num">#${n-ri}</span>
        <span class="sim-log-outcomes">${sc.statLabel} = ${fmt(v)}</span>
      </div>`).join('');
    const hist = svgSamplingHistogram(state.values, { binWidth: sc.binWidth, trueValue: sc.trueValue, decimals: sc.decimals });

    wrap.innerHTML = `
      <div class="sim-tabs">${tabs}</div>
      <p class="sim-desc">${sc.description}</p>
      <div class="sim-controls">
        <button type="button" class="sim-btn primary" data-act="run1">Draw 1 sample</button>
        <button type="button" class="sim-btn" data-act="run10">Draw 10 samples</button>
        <button type="button" class="sim-btn" data-act="run100">Draw 100 samples</button>
        <button type="button" class="sim-btn ghost" data-act="reset">Reset</button>
      </div>
      <div class="sim-stats">
        <div class="sim-stat"><span class="sim-stat-val">${n}</span><span class="sim-stat-label">Samples drawn</span></div>
        <div class="sim-stat"><span class="sim-stat-val">${fmt(mean)}</span><span class="sim-stat-label">Mean of the dots so far</span></div>
        <div class="sim-stat ref"><span class="sim-stat-val">${sc.trueValue}${sc.unit||''}</span><span class="sim-stat-label">True population value</span></div>
      </div>
      <div class="sim-chart-wrap">${hist}</div>
      <div class="sim-log">${recent || '<p class="sim-log-empty">No samples drawn yet — click "Draw 1 sample" to take one sample of n='+sc.n+' and plot its '+sc.statLabel.toLowerCase()+'.</p>'}</div>
    `;

    wrap.querySelectorAll('.sim-tab').forEach(btn=>{
      btn.onclick = ()=>{ activeIdx = +btn.dataset.i; draw(); };
    });
    wrap.querySelector('[data-act="run1"]').onclick = ()=>runN(1);
    wrap.querySelector('[data-act="run10"]').onclick = ()=>runN(10);
    wrap.querySelector('[data-act="run100"]').onclick = ()=>runN(100);
    wrap.querySelector('[data-act="reset"]').onclick = ()=>{ state.values = []; draw(); };
  }

  function runN(count){
    const sc = sec.scenarios[activeIdx];
    const state = states[activeIdx];
    for(let i=0;i<count;i++) state.values.push(drawSampleStatistic(sc));
    draw();
  }

  draw();
  mount.appendChild(wrap);
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
      case 'zscoreline': body = svgZScoreLine(it.spec, it.opts || {}); break;
      case 'populationgrid': body = svgPopulationGrid(it.spec, it.opts || {}); break;
      case 'matchedpairs': body = svgMatchedPairs(it.spec, it.opts || {}); break;
      case 'sidebysidebar': body = svgSideBySideBar(it, it.opts || {}); break;
      case 'segmentedbar': body = svgSegmentedBar(it, { variableWidth:false, orientation: it.orientation||'vertical' }); break;
      case 'mosaic': body = svgSegmentedBar(it, { variableWidth:true, orientation: it.orientation||'vertical' }); break;
      case 'dicegrid': body = svgDiceGrid(it); break;
      case 'venn': body = svgVenn(it); break;
      case 'probtree': body = svgProbTree(it); break;
      case 'normalcurve': body = svgNormalCurve(it); break;
      default: body = svgBarChart(it.data, { mode: it.mode || 'count' });
    }
    card.innerHTML = `<h4>${it.title}</h4><div class="chart-svg-wrap">${body}</div>` + (it.caption ? `<p class="chart-caption">${it.caption}</p>` : '');
    grid.appendChild(card);
  });
  mount.appendChild(grid);
}

/* ---- comparison table(s) ---- */
function renderCompareTable(sec, mount){
  const wrap = document.createElement('div');
  wrap.className = 'compare-table-list';
  sec.items.forEach(it=>{
    const card = document.createElement('div');
    card.className = 'compare-table-wrap';
    const theadCells = it.headers.map(hh=>`<th>${hh}</th>`).join('');
    const bodyRows = it.rows.map(row=>`<tr>${row.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
    card.innerHTML = (it.title ? `<h4>${it.title}</h4>` : '') +
      `<div class="compare-table-scroll"><table class="compare-table"><thead><tr>${theadCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>` +
      (it.caption ? `<p class="chart-caption">${it.caption}</p>` : '');
    wrap.appendChild(card);
  });
  mount.appendChild(wrap);
}

/* ---- decision-flow diagram: a question with 2-3 labeled branches, each stacking outcome cards ---- */
function renderFlow(sec, mount){
  const wrap = document.createElement('div');
  wrap.className = 'flow-list';
  sec.items.forEach(it=>{
    const card = document.createElement('div');
    card.className = 'flow-card';
    const branches = it.branches.map(b=>{
      const outcomes = b.outcomes.map(o=>`<div class="flow-outcome"><strong>${o.title}</strong><p>${o.body}</p></div>`).join('');
      return `<div class="flow-branch">
        <span class="flow-branch-label flow-tone-${b.tone||'neutral'}">${b.label}</span>
        <span class="flow-arrow" aria-hidden="true">&darr;</span>
        <div class="flow-outcomes">${outcomes}</div>
      </div>`;
    }).join('');
    card.innerHTML = `<div class="flow-question">${it.question}</div><div class="flow-branch-row">${branches}</div>`;
    wrap.appendChild(card);
  });
  mount.appendChild(wrap);
}

/* ---- two-way (contingency) table — counts / % of total / conditional highlighting ---- */
function renderTwoWayTable(sec, mount){
  const wrap = document.createElement('div');
  wrap.className = 'twt-list';
  sec.items.forEach((item, itemIdx)=>{
    const card = document.createElement('div');
    card.className = 'twt-card';
    const state = { mode: 'count', condDir: null, condIndex: null };

    function draw(){
      const data = item.data;
      const rows = item.rows, cols = item.cols;
      const rowTotals = rows.map((_,ri)=>data[ri].reduce((a,v)=>a+v,0));
      const colTotals = cols.map((_,ci)=>rows.reduce((a,__,ri)=>a+data[ri][ci],0));
      const grand = rowTotals.reduce((a,v)=>a+v,0);

      const fmtPct = (v,base)=> base ? (Math.round(v/base*1000)/10)+'%' : '—';

      function cellDisplay(ri, ci){
        const v = data[ri][ci];
        if(state.condDir === 'row' && state.condIndex === ri) return `${v}<span class="twt-pct">${fmtPct(v, rowTotals[ri])}</span>`;
        if(state.condDir === 'col' && state.condIndex === ci) return `${v}<span class="twt-pct">${fmtPct(v, colTotals[ci])}</span>`;
        if(state.mode === 'percent') return `${v}<span class="twt-pct">${fmtPct(v, grand)}</span>`;
        return `${v}`;
      }
      function cellClass(ri, ci){
        let cls = 'twt-cell';
        if((state.condDir==='row' && state.condIndex===ri) || (state.condDir==='col' && state.condIndex===ci)) cls += ' is-cond';
        return cls;
      }

      const theadCols = cols.map(c=>`<th>${c}</th>`).join('');
      const bodyRows = rows.map((r, ri)=>{
        const cells = cols.map((c, ci)=>`<td class="${cellClass(ri,ci)}" data-ri="${ri}" data-ci="${ci}">${cellDisplay(ri,ci)}</td>`).join('');
        const totalDisp = (state.mode==='percent' && !state.condDir) ? `${rowTotals[ri]}<span class="twt-pct">${fmtPct(rowTotals[ri], grand)}</span>` : rowTotals[ri];
        return `<tr><th class="twt-rowhead">${r}</th>${cells}<td class="twt-total" data-row="${ri}">${totalDisp}</td></tr>`;
      }).join('');
      const colTotalCells = cols.map((c, ci)=>{
        const totalDisp = (state.mode==='percent' && !state.condDir) ? `${colTotals[ci]}<span class="twt-pct">${fmtPct(colTotals[ci], grand)}</span>` : colTotals[ci];
        return `<td class="twt-total" data-col="${ci}">${totalDisp}</td>`;
      }).join('');

      const condOptions = [`<option value="">None</option>`]
        .concat(rows.map((r,ri)=>`<option value="row:${ri}" ${state.condDir==='row'&&state.condIndex===ri?'selected':''}>Row: ${r}</option>`))
        .concat(cols.map((c,ci)=>`<option value="col:${ci}" ${state.condDir==='col'&&state.condIndex===ci?'selected':''}>Col: ${c}</option>`))
        .join('');

      card.innerHTML = `
        <h4>${item.title}</h4>
        ${item.sub ? `<p class="twt-sub">${item.sub}</p>` : ''}
        <div class="twt-controls">
          <div class="twt-toggle-group">
            <button type="button" class="twt-toggle-btn ${state.mode==='count'?'active':''}" data-act="mode-count">Counts</button>
            <button type="button" class="twt-toggle-btn ${state.mode==='percent'?'active':''}" data-act="mode-percent">% of total</button>
          </div>
          <select class="twt-cond-select" data-act="cond">${condOptions}</select>
        </div>
        <div class="twt-scroll"><table class="twt-table">
          <thead><tr><th class="twt-corner"></th>${theadCols}<th class="twt-corner">Total</th></tr></thead>
          <tbody>${bodyRows}
            <tr><th class="twt-rowhead">Total</th>${colTotalCells}<td class="twt-total twt-grand">${grand}</td></tr>
          </tbody>
        </table></div>
        <div class="twt-callout" hidden></div>
        ${item.caption ? `<p class="twt-caption">${item.caption}</p>` : ''}
      `;

      card.querySelector('[data-act="mode-count"]').onclick = ()=>{ state.mode='count'; draw(); };
      card.querySelector('[data-act="mode-percent"]').onclick = ()=>{ state.mode='percent'; draw(); };
      card.querySelector('[data-act="cond"]').onchange = (e)=>{
        const v = e.target.value;
        if(!v){ state.condDir=null; state.condIndex=null; }
        else { const [dir, idx] = v.split(':'); state.condDir=dir; state.condIndex=+idx; }
        draw();
      };

      const callout = card.querySelector('.twt-callout');
      function showCallout(html){ callout.hidden = false; callout.innerHTML = html; }

      card.querySelectorAll('td.twt-cell').forEach(td=>{
        td.onclick = ()=>{
          const ri = +td.dataset.ri, ci = +td.dataset.ci;
          const v = data[ri][ci];
          if(state.condDir === 'row' && state.condIndex === ri){
            showCallout(`<span class="notation">P(${cols[ci]} | ${rows[ri]})</span> = ${v}/${rowTotals[ri]} ≈ ${fmtPct(v, rowTotals[ri])}`);
          } else if(state.condDir === 'col' && state.condIndex === ci){
            showCallout(`<span class="notation">P(${rows[ri]} | ${cols[ci]})</span> = ${v}/${colTotals[ci]} ≈ ${fmtPct(v, colTotals[ci])}`);
          } else {
            showCallout(`<span class="notation">P(${rows[ri]} ∩ ${cols[ci]})</span> = ${v}/${grand} ≈ ${fmtPct(v, grand)}`);
          }
        };
      });
      card.querySelectorAll('td.twt-total[data-row]').forEach(td=>{
        td.onclick = ()=>{
          const ri = +td.dataset.row;
          showCallout(`<span class="notation">P(${rows[ri]})</span> = ${rowTotals[ri]}/${grand} ≈ ${fmtPct(rowTotals[ri], grand)}`);
        };
      });
      card.querySelectorAll('td.twt-total[data-col]').forEach(td=>{
        td.onclick = ()=>{
          const ci = +td.dataset.col;
          showCallout(`<span class="notation">P(${cols[ci]})</span> = ${colTotals[ci]}/${grand} ≈ ${fmtPct(colTotals[ci], grand)}`);
        };
      });
    }
    draw();
    wrap.appendChild(card);
  });
  mount.appendChild(wrap);
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

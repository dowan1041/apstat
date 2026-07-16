/* ============================================
   Unit 1 — Exploring One-Variable Data
   Topic 1.1 — Introducing Statistics:
   What Can We Learn From Data?
   Source: course transcript (Topic 1.1 lecture)
   ============================================ */

registerUnit({
  code: 'Unit 1',
  name: 'Exploring One-Variable Data',
  chapterIds: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11', '1-12', '1-13']
});

registerChapters({
  '1-1': {
    id: '1-1',
    code: 'Topic 1.1',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'What Can We Learn From Data?',
    cardSummary: 'The vocabulary of a statistical study — population, sample, and the investigative question that starts it all.',
    heroTitle: 'What can we <em>learn</em><br>from data?',
    heroSub: 'Every statistical study starts with a question, pulls a sample from a population, and ends in an inference. Learn the vocabulary, then practice spotting each piece in real studies.',
    source: 'Topic 1.1 course video',
    estTime: '~25–35 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'One question. <span class="underline teal">One sample.</span> One inference.',
        body: 'A <strong>statistical study</strong> collects data from a <em>sample</em> to answer a question about a much larger <em>population</em> — because asking every single individual is usually too slow, too expensive, or flat-out impossible.',
        cards: [
          { roman: 'I.', title: 'Identify the components', body: 'Given a description of a study, pull out the <strong>population</strong>, the <strong>sample</strong>, the <strong>data collected</strong>, and the <strong>question</strong> being asked.', tags: ['Population','Sample','Data','Question'] },
          { roman: 'II.', title: 'Judge the investigative question', body: 'A good question is set <em>before</em> data collection, has a clear purpose, and can actually be answered with data you\'re able to gather.', tags: ['Defined purpose','Set in advance','Answerable'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. QUICK LIST ---------------- */
      {
        type: 'quick-list', id: 'quick-check', label: 'Section 02 — Spot the Question',
        heading: 'Five questions, <span class="underline">one shape</span>.',
        body: 'Every investigative question names a <strong>population</strong> and the <strong>information</strong> you need from it. Skim these — notice the pattern before you hit the full worked examples below.',
        items: [
          { q: 'What proportion of high school students own their own car?', pop: 'High school students', info: 'Do they own a car? (yes/no)' },
          { q: 'What is the median home price of houses in Indiana?', pop: 'Houses in Indiana', info: 'Sale price of each house' },
          { q: 'What is the mean time for a 5-year-old to finish a puzzle?', pop: '5-year-olds', info: 'Time to finish the same puzzle' },
          { q: 'Does an electrolyte drink help runners finish faster?', pop: 'Runners', info: 'Race time, and whether they drank it' },
          { q: 'Does a new drug help cancer patients\u2019 immune systems recover faster?', pop: 'Cancer patients', info: 'Recovery speed, and whether they got the drug' }
        ]
      },

      /* ---------------- 3. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 03 — Vocabulary',
        heading: 'The <span class="underline teal">eight words</span> this topic runs on.',
        body: 'Tap a term you\'ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'statistical-study', term: 'Statistical study', accent: 'population', body: 'A study in which data are collected from a <strong>sample</strong> to answer an investigative question about a larger <strong>population</strong>.' },
          { id: 'investigative-question', term: 'Investigative question', accent: 'sample', body: 'The question a study exists to answer. It has a defined purpose, is set <em>before</em> data is collected, and never changes based on the results.' },
          { id: 'in-context', term: 'In context', accent: 'sample', body: 'Answering with real-world meaning attached, not just a bare number. "7%" isn\'t an answer — "7% of high schoolers own a car" is.' },
          { id: 'datum', term: 'Datum', accent: 'population', body: 'One single piece of information about one item or individual — e.g. one chair\'s color, or one person\'s eye color.' },
          { id: 'data-set', term: 'Data set', accent: 'population', body: 'A collection of many datums gathered from a sample or population — e.g. the eye colors of 1,000 people.' },
          { id: 'population', term: 'Population', sym: 'N', accent: 'population', body: 'All items or individuals of interest — the entire group a study wants to learn about.' },
          { id: 'sample', term: 'Sample', sym: 'n', accent: 'sample', body: 'A subset of the population that data is actually collected from, because reaching the whole population isn\'t realistic.' },
          { id: 'inference', term: 'Statistical inference', accent: 'sample', body: 'Using data from a sample to make a judgment, estimation, or prediction about the population it came from. It\'s an estimate — never a guarantee.' }
        ]
      },

      /* ---------------- 4. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 04 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A statistical study is a study in which ',
            { id:'b1', answer:'data', options:['data','opinions','guesses'] },
            ' are collected from a ',
            { id:'b2', answer:'sample', options:['sample','population','data set'] },
            ' to answer an investigative question about a larger ',
            { id:'b3', answer:'population', options:['population','sample','datum'] },
            '.'
          ]},
          { segments: [
            'Statistical studies are necessary when the population is too ',
            { id:'b4', answer:'large', options:['large','small','recent'] },
            ' or it is too ',
            { id:'b5', answer:'difficult', options:['difficult','cheap','quick'] },
            ' to collect data from every item or individual in the population.'
          ]},
          { segments: [
            'An ',
            { id:'b6', answer:'investigative question', options:['investigative question','statistical inference','data set'] },
            ' for a specific study should have a defined purpose and should not be changed based on the data analysis or results.'
          ]},
          { segments: [
            'A good investigative question should be posed so that the required data can be ',
            { id:'b7', answer:'collected', options:['collected','ignored','deleted'] },
            ' and ',
            { id:'b8', answer:'analyzed', options:['analyzed','forgotten','guessed'] },
            ' in order to answer it.'
          ]},
          { segments: [
            'Relating a statistical result back to its real-world setting, instead of leaving it as a bare number, is what is meant by answering in ',
            { id:'b9', answer:'context', options:['context','inference','a sample'] },
            '.'
          ]},
          { segments: [
            'Using the data from a sample to make a judgment or prediction about the population it came from is called statistical ',
            { id:'b10', answer:'inference', options:['inference','datum','population'] },
            '.'
          ]}
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Read the study. <span class="underline teal">Find the pieces.</span>',
        body: 'Real study descriptions read like paragraphs, not labeled diagrams. Click each one open, try to identify the four pieces yourself, then check your answer.',
        items: [
          {
            q: 'David wanted to know what proportion of all students at his large college own their own vehicle. He selected a random sample of 230 students, and 141 of them reported owning a vehicle.',
            fields: [
              { k: 'Population', v: 'All students at David\u2019s large college' },
              { k: 'Sample', v: 'The 230 students he randomly selected' },
              { k: 'Data collected', v: '"Do you own your own vehicle?" — 141 said yes' },
              { k: 'Investigative question', v: 'What proportion of students at his college own their own vehicle?' }
            ]
          },
          {
            q: 'Michelle selected a random sample of 50 students from her large high school and asked each what they ate for breakfast on a given day and how many total calories that breakfast contained. She calculated the mean number of calories.',
            fields: [
              { k: 'Population', v: 'All students at Michelle\u2019s large high school' },
              { k: 'Sample', v: 'The 50 students she surveyed' },
              { k: 'Data collected', v: 'What they ate for breakfast, and total calories consumed' },
              { k: 'Investigative question', v: 'What is the mean number of calories students consume at breakfast?' }
            ]
          },
          {
            q: 'In a random sample of 150 runners, 75 were given an electrolyte mix to drink before a one-mile race and the other 75 were given plain water. All ran the same course on the same day, and every runner\u2019s time was recorded.',
            fields: [
              { k: 'Population', v: 'Runners in this one-mile race' },
              { k: 'Sample', v: 'The 150 runners in the study (75 electrolyte / 75 water)' },
              { k: 'Data collected', v: 'Each runner\u2019s race time, and which drink they had' },
              { k: 'Investigative question', v: 'Does drinking an electrolyte mix before a race help runners finish faster?' }
            ]
          }
        ]
      },

      /* ---------------- 5. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'A study collects data from 230 students to answer a question about all students at a college. What is this whole process called?', term: 'Statistical study', detail: 'Data from a sample, used to answer a question about a larger population.' },
          { prompt: 'This must be set before data collection, have a defined purpose, and never change based on results.', term: 'Investigative question', detail: 'The question the entire study exists to answer.' },
          { prompt: '"Yes, I went to the store and bought milk and cookies" instead of just "yes" — this is answering...', term: 'In context', detail: 'Attaching real-world meaning to a statistical result.' },
          { prompt: 'The color of one specific chair, "pink," is an example of a...', term: 'Datum', detail: 'One single piece of information about one item.' },
          { prompt: 'The colors of 100 different chairs, collected together, form a...', term: 'Data set', detail: 'A collection of many datums.' },
          { prompt: 'All 40,000 chairs a company has ever produced — symbol N.', term: 'Population', detail: 'Every item or individual of interest.' },
          { prompt: '100 chairs pulled out of that 40,000 to actually inspect — symbol n.', term: 'Sample', detail: 'A subset of the population that data is collected from.' },
          { prompt: '7% of a 230-student sample own a car, so we estimate 7% of all students do too. What is this reasoning called?', term: 'Statistical inference', detail: 'Using sample data to estimate something about the population.' }
        ]
      },

      /* ---------------- 6. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson\u2019s examples. Your best score is saved.',
        questions: [
          { q: 'A statistical study is necessary mainly when:', opts: ['The researcher prefers small numbers', 'The population is too large or difficult to survey entirely', 'The data set has fewer than 30 datums', 'The investigative question has no clear purpose'], correct: 1, exp: 'We take a sample instead of surveying everyone because the full population is usually too big or too hard to reach.' },
          { q: 'Which of these is true about a good investigative question?', opts: ['It can be adjusted after seeing the results', 'It should be posed so the needed data can actually be collected and analyzed', 'It doesn\u2019t need a defined purpose', 'It only applies to yes/no questions'], correct: 1, exp: 'An investigative question has to be answerable — you need to know exactly what data you\'ll collect and how you\'ll analyze it.' },
          { q: 'David surveys 230 of the students at his large college about vehicle ownership. What is the population?', opts: ['The 230 students surveyed', 'All students at David\u2019s college', 'Students who own a vehicle', 'David himself'], correct: 1, exp: 'The population is the full group David wants to learn about — every student at his college, not just the ones he surveyed.' },
          { q: 'In that same study, what is the sample?', opts: ['All students at the college', 'The 141 students who own a car', 'The 230 students David selected', 'The entire state\u2019s college population'], correct: 2, exp: 'The sample is the subset actually surveyed — the 230 students, whether or not they owned a car.' },
          { q: 'The color "pink," describing one specific chair, is an example of a:', opts: ['Data set', 'Sample', 'Datum', 'Population'], correct: 2, exp: 'A datum is a single piece of information about one individual item — here, one chair\'s color.' },
          { q: 'Which symbol represents the sample size?', opts: ['N', 'n', '\u03bc', '\u03c3'], correct: 1, exp: 'Lowercase n is the sample size; capital N is reserved for the population size.' },
          { q: 'A sample of 230 high school students shows 7% own a car, so we estimate about 7% of all high schoolers do too. This process is called:', opts: ['Data collection', 'Statistical inference', 'An investigative question', 'A datum'], correct: 1, exp: 'Using a sample statistic to make an estimate about the population is statistical inference.' },
          { q: 'Why is it risky to assume the sample\'s 7% is the population\'s exact true value?', opts: ['Because samples are always biased on purpose', 'Because an inference is an estimate, not a guarantee', 'Because 7% is too small a number to trust', 'Because populations never have a true value'], correct: 1, exp: 'Inference gives an estimate or prediction — it\'s not guaranteed to match the population exactly unless you survey everyone.' },
          { q: 'In the electrolyte-drink study, what is the investigative question?', opts: ['How many runners finished the race?', 'Does drinking an electrolyte mix before a race help runners finish faster?', 'What brand of electrolyte mix was used?', 'How long is a one-mile race?'], correct: 1, exp: 'The study compares finish times between an electrolyte group and a plain-water group specifically to test whether the drink helps.' },
          { q: 'Giving a "yes, and here\'s why" answer instead of a bare "yes" is an example of answering:', opts: ['With a datum', 'In context', 'With an investigative question', 'With statistical inference'], correct: 1, exp: 'Answering in context means tying the statistical result back to its real-world meaning, not leaving it as a bare number or word.' }
        ]
      },

      /* ---------------- 7. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Every study starts with a question', body: 'No investigative question, no study. It has to be set <strong>before</strong> data collection and never change afterward.' },
          { num: 'ii.', title: 'Population ≠ Sample', body: '<strong>N</strong> is everyone you care about. <strong>n</strong> is the smaller group you actually collect data from, because reaching all of N usually isn\'t realistic.' },
          { num: 'iii.', title: 'Datum vs. data set', body: 'One piece of information is a <strong>datum</strong>. A pile of them, from many individuals, is a <strong>data set</strong>.' },
          { num: 'iv.', title: 'Inference is an estimate, not a fact', body: 'What\'s true for your sample is not guaranteed to be exactly true for the population — it\'s a prediction built from evidence.' },
          { num: 'v.', title: 'Always answer in context', body: 'A percentage or number alone isn\'t an answer. Tie it back to the real-world population and question it came from.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A gym wants to know what percentage of all its members use the gym at least three times a week. It randomly contacts 80 of its 2,400 members and asks how often they visit. What is the population in this study?', opts: ['All 2,400 gym members', 'Members who visit 3+ times a week', 'The gym\'s staff', 'The 80 members contacted'], correct: 0, exp: 'The population is the full group the gym wants to learn about — all 2,400 members — not just the 80 who were contacted.' },
        { q: 'In that same gym study, what is the sample?', opts: ['All 2,400 gym members', 'The 80 members who were contacted', 'Members who visit 3+ times a week', 'The gym itself'], correct: 1, exp: 'The sample is the subset actually surveyed — the 80 members contacted, regardless of how they answered.' },
        { q: 'A single response from one gym member — "I visit 4 times a week" — is an example of a:', opts: ['Data set', 'Investigative question', 'Datum', 'Population'], correct: 2, exp: 'One piece of information from one individual is a datum.' },
        { q: 'All 80 responses collected from the gym members, together, form a:', opts: ['Sample size', 'Investigative question', 'Datum', 'Data set'], correct: 3, exp: 'A data set is a collection of many datums gathered from a sample or population.' },
        { q: 'A city wants to know the median commute time for all 50,000 residents who work downtown. It surveys a random 200 of them. What is the sample?', opts: ['The 200 residents surveyed', 'The median commute time', 'All 50,000 downtown workers', 'The city government'], correct: 0, exp: 'The sample is the smaller group actually surveyed — the 200 residents.' },
        { q: 'Which of the following is the best investigative question for a study about coffee habits?', opts: ['Coffee is popular in this city.', 'What proportion of adults in this city drink at least one cup of coffee per day?', 'Do you think coffee is good?', 'Coffee shops are everywhere.'], correct: 1, exp: 'A good investigative question is specific and answerable with data you can actually collect — the others are statements or too vague.' },
        { q: 'A researcher collects data first, and only afterward decides what question the data will be used to answer. What is wrong with this approach?', opts: ['The population was too large.', 'Nothing — this is normal.', 'An investigative question must be set before data is collected.', 'Data can never answer a question.'], correct: 2, exp: 'An investigative question needs a defined purpose and must be set before data collection — it shouldn\'t be chosen or changed after seeing the results.' },
        { q: 'A statistical study of all 40,000 students in a school district would require surveying every single student. Why might researchers use a sample instead?', opts: ['Because populations don\'t have data.', 'Because investigative questions require samples by definition.', 'Because samples are always more accurate than populations.', 'Because surveying the entire population is often too slow, expensive, or impractical.'], correct: 3, exp: 'We use samples because reaching an entire population is often too costly, slow, or logistically difficult.' },
        { q: 'Which best defines a statistical study?', opts: ['A study in which data are collected from a sample to answer an investigative question about a larger population.', 'A study in which the same person is measured every day for a year.', 'A study that only uses numbers, never words.', 'Any experiment conducted in a laboratory.'], correct: 0, exp: 'That\'s the definition of a statistical study — sample data used to answer a question about a population.' },
        { q: 'A random sample of 150 fish from a lake shows that 18% have a specific marking. Based on this, a biologist estimates that about 18% of all fish in the lake have that marking. This process is called:', opts: ['A datum', 'Statistical inference', 'An investigative question', 'A data set'], correct: 1, exp: 'Using sample data (18% of the sampled fish) to estimate something about the full population is statistical inference.' },
        { q: 'A sample of 150 fish shows 18% have the marking. Can the biologist be certain that exactly 18% of all fish in the lake have it?', opts: ['No, because inference cannot be used with fish.', 'Yes, samples always exactly match the population.', 'No — inference gives an estimate, not a guarantee.', 'Yes, because 150 is a large sample.'], correct: 2, exp: 'Statistical inference is an estimate or prediction — it\'s not guaranteed to be exactly right, even with a good sample.' },
        { q: 'A survey finds that "62%" of respondents support a new park. Which of the following answers this result in context?', opts: ['Sixty-two.', '62%', '0.62', '62% of survey respondents support building the new park.'], correct: 3, exp: 'Answering in context means tying the number back to its real-world meaning — what the 62% actually represents.' },
        { q: 'Why is it important to answer a statistical question "in context" instead of just giving a bare number?', opts: ['Because a number alone doesn\'t explain what it measures or refers to.', 'Because context makes the math easier.', 'It isn\'t important — any answer format works.', 'Because bare numbers are always wrong.'], correct: 0, exp: 'A number by itself doesn\'t communicate what was measured — context connects it back to the real-world question.' },
        { q: 'A teacher grades all 28 essays written by her class to find the class\'s average score. Is this a sample or the full population?', opts: ['A sample of the class', 'The full population of the class\'s essays', 'Neither — it\'s a datum', 'It\'s an investigative question'], correct: 1, exp: 'Since every essay in the class was graded, this is the entire population, not a sample — there was no need to select a subset.' },
        { q: 'A farmer records the weight of one specific pumpkin at his farm: 14.2 lbs. This single measurement is a:', opts: ['Data set', 'Sample', 'Datum', 'Population'], correct: 2, exp: 'One measurement from one item is a datum.' },
        { q: 'A phone manufacturer wants to know the average battery life of a new phone model. They test a random sample of 40 out of the 500,000 phones produced. What is the population?', opts: ['The average battery life', 'The phone manufacturer', 'The 40 phones tested', 'All 500,000 phones produced'], correct: 3, exp: 'The population is every phone of that model produced — 500,000 — not just the 40 tested.' },
        { q: 'A librarian wants to study book circulation. Which is the best investigative question?', opts: ['What is the mean number of times a book is checked out per year at this library?', 'Do people like reading?', 'The library has many books.', 'Books are borrowed a lot.'], correct: 0, exp: 'A good investigative question is specific, measurable, and answerable with data — this one names exactly what will be measured.' },
        { q: 'A hospital samples 60 patients and finds a mean wait time of 22 minutes, then uses this to estimate the mean wait time for all patients at the hospital. Using the sample result to estimate a population value is an example of:', opts: ['An investigative question', 'Statistical inference', 'Answering in context', 'A datum'], correct: 1, exp: 'Using a sample result to estimate something about the full population is statistical inference.' },
        { q: 'A mobile game company collects the play time of 500 randomly selected users to estimate the average play time of all 2 million users. Which term describes the full collection of those 500 play-time measurements together?', opts: ['An investigative question', 'A datum', 'A data set', 'A population'], correct: 2, exp: 'A data set is the full collection of datums (all 500 measurements together), not just one.' },
        { q: 'A coffee shop chain wants to know what proportion of all its customers, across every location, prefer oat milk. A random sample of 300 customers is surveyed, and 27% say they prefer oat milk. Which statement is most appropriate?', opts: ['The 300 customers surveyed are the population.', '27% is a datum.', 'Exactly 27% of all customers at every location prefer oat milk.', 'We can infer that roughly 27% of all customers prefer oat milk, but this is an estimate, not a certainty.'], correct: 3, exp: '27% is a sample statistic; it lets us infer an estimate about the full customer population, but it\'s not guaranteed to be the exact population value.' },
      ]
    }
  }
});

/* ============================================
   Topic 1.2 — The Language of Variation: Variables
   Source: course transcript (Topic 1.2 lecture)
   ============================================ */

registerChapters({
  '1-2': {
    id: '1-2',
    code: 'Topic 1.2',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'The Language of Variation: Variables',
    cardSummary: 'Observational units and variables, categorical vs. quantitative, discrete vs. continuous, and parameter vs. statistic.',
    heroTitle: 'Every study speaks the <em>language</em><br>of variables.',
    heroSub: 'Before you can organize or summarize data, you need to know what kind of variable you\'re looking at — and whether a number describes the whole population or just your sample.',
    source: 'Topic 1.2 course video',
    estTime: '~25–35 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'One unit. <span class="underline teal">One variable.</span> Two big splits.',
        body: 'Every piece of data starts with an <strong>observational unit</strong> — the item or individual it came from — and a <strong>variable</strong>, the characteristic being recorded. From there, everything is about classification.',
        cards: [
          { roman: 'I.', title: 'Classify the variable', body: 'Every variable is first <strong>categorical</strong> (a word or label) or <strong>quantitative</strong> (a number). If it\'s quantitative, decide whether it\'s <strong>discrete</strong> (counted) or <strong>continuous</strong> (measured).', tags: ['Categorical','Quantitative','Discrete','Continuous'] },
          { roman: 'II.', title: 'Parameter vs. statistic', body: 'A number describing the whole <strong>population</strong> is a parameter. A number describing only the <strong>sample</strong> you actually measured is a statistic — and statistics vary from sample to sample.', tags: ['Population → parameter','Sample → statistic','Samples vary'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">eight words</span> this topic runs on.',
        body: 'Tap a term you\'ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'observational-unit', term: 'Observational unit', accent: 'population', body: 'An item or individual from which a <strong>datum</strong> is collected — a chair, a tree, a person, even a place.' },
          { id: 'variable', term: 'Variable', accent: 'sample', body: 'A characteristic that may change from one observational unit to another — e.g. a person\'s height, a chair\'s color.' },
          { id: 'categorical-variable', term: 'Categorical variable', accent: 'sample', body: 'Also called a <em>qualitative</em> variable. Takes on values that are category names or group labels — if the answer is a <strong>word</strong>, or puts you in a group, it\'s categorical.' },
          { id: 'quantitative-variable', term: 'Quantitative variable', accent: 'population', body: 'Also called a <em>numerical</em> variable. Takes on numerical values for a measured or counted quantity, and generally has units of measure.' },
          { id: 'discrete-quantitative', term: 'Discrete quantitative variable', accent: 'population', body: 'A quantitative variable that is <strong>countable</strong> — a finite or countably infinite number of values, usually whole numbers, like the number of legs on a chair.' },
          { id: 'continuous-quantitative', term: 'Continuous quantitative variable', accent: 'population', body: 'A quantitative variable that can take on an <strong>infinite number of values within an interval</strong>, because it\'s measured, not counted — like height or weight.' },
          { id: 'parameter', term: 'Parameter', sym: 'N', accent: 'population', body: 'A numerical attribute or summary of a variable of interest for a <strong>population</strong>. P for parameter, P for population.' },
          { id: 'statistic', term: 'Statistic', sym: 'n', accent: 'sample', body: 'A numerical attribute or summary of a variable of interest for a <strong>sample</strong>. S for statistic, S for sample.' }
        ]
      },

      /* ---------------- 3. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 03 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'An ',
            { id:'b1', answer:'observational unit', options:['observational unit','parameter','datum'] },
            ' is an item or individual from which a datum is collected, and a ',
            { id:'b2', answer:'variable', options:['variable','statistic','sample'] },
            ' is a characteristic that may change from one observational unit to another.'
          ]},
          { segments: [
            'A categorical variable takes on values that are category names or ',
            { id:'b3', answer:'group labels', options:['group labels','sample sizes','measured amounts'] },
            ', while a quantitative variable takes on ',
            { id:'b4', answer:'numerical', options:['numerical','categorical','alphabetical'] },
            ' values for a measured or counted quantity.'
          ]},
          { segments: [
            'A discrete quantitative variable is one that is ',
            { id:'b5', answer:'countable', options:['countable','measurable','categorical'] },
            ', while a continuous quantitative variable can take on an infinite number of values within a given ',
            { id:'b6', answer:'interval', options:['interval','category','population'] },
            '.'
          ]},
          { segments: [
            'Even though a zip code is written as a number, it is actually a ',
            { id:'b7', answer:'categorical', options:['categorical','quantitative','continuous'] },
            ' variable because it is not measured or counted and it would not make sense to find its ',
            { id:'b8', answer:'mean', options:['mean','category','label'] },
            '.'
          ]},
          { segments: [
            'A parameter is a numerical summary of a variable of interest for a ',
            { id:'b9', answer:'population', options:['population','sample','datum'] },
            ', while a statistic is a numerical summary of a variable of interest for a ',
            { id:'b10', answer:'sample', options:['sample','population','parameter'] },
            '.'
          ]},
          { segments: [
            'The value of a sample statistic is often not equal to the unknown population parameter, but the one thing sample statistics reliably do is ',
            { id:'b11', answer:'vary', options:['vary','match exactly','disappear'] },
            ' from one sample to another.'
          ]}
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 04 — Worked Examples',
        heading: 'Read the study. <span class="underline teal">Classify every piece.</span>',
        body: 'Click each one open, try to identify the observational units, the variable and its type, the parameter, and the statistic yourself, then check your answer.',
        items: [
          {
            q: 'Molly read that the proportion of all high school students who eat breakfast is 32%. She then selected a random sample of 40 students from her school, and 40% of them in her sample ate breakfast.',
            fields: [
              { k: 'Observational units', v: 'Students at Molly’s high school' },
              { k: 'Variable', v: 'Whether the student eats breakfast (yes/no)' },
              { k: 'Type of variable', v: 'Categorical — the answer is yes/no, not a measured or counted number' },
              { k: 'Parameter', v: '32% of all high school students eat breakfast' },
              { k: 'Statistic', v: '40% of the 40 sampled students ate breakfast' }
            ]
          },
          {
            q: 'A production company reports that the mean diameter of the tortillas it makes is 6.5 in. A sample of 120 tortillas revealed a mean diameter of 6.3 in.',
            fields: [
              { k: 'Observational units', v: 'Tortillas' },
              { k: 'Variable', v: 'Diameter of the tortilla' },
              { k: 'Type of variable', v: 'Quantitative — continuous (it’s measured, and could take on decimal values)' },
              { k: 'Parameter', v: '6.5 in — the company’s claimed population mean' },
              { k: 'Statistic', v: '6.3 in — the sample mean from 120 tortillas' }
            ]
          },
          {
            q: 'A jelly bean company reports that the mean number of jelly beans in each bag is 15. A sample of 30 bags revealed a mean of 15.8 jelly beans per bag.',
            fields: [
              { k: 'Observational units', v: 'Bags of jelly beans' },
              { k: 'Variable', v: 'Number of jelly beans in the bag' },
              { k: 'Type of variable', v: 'Quantitative — discrete (you count a whole number of beans)' },
              { k: 'Parameter', v: '15 jelly beans per bag — the company’s claimed population mean' },
              { k: 'Statistic', v: '15.8 jelly beans per bag — the sample mean from 30 bags' }
            ]
          }
        ]
      },

      /* ---------------- 5. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 05 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'A chair, a tree, a person, a bag of jelly beans — each is a single item data gets collected from. What’s this called?', term: 'Observational unit', detail: 'An item or individual from which a datum is collected.' },
          { prompt: 'A chair’s color, a person’s height, a bag’s bean count — each is something that changes from one observational unit to the next.', term: 'Variable', detail: 'A characteristic that may change from one observational unit to another.' },
          { prompt: 'The answer is a word, like "blue" or "yes" — and it puts you into a group. What kind of variable is this?', term: 'Categorical variable', detail: 'Takes on values that are category names or group labels (also called qualitative).' },
          { prompt: 'The answer is a number you get by measuring or counting, and it usually has units. What kind of variable is this?', term: 'Quantitative variable', detail: 'Takes on numerical values for a measured or counted quantity.' },
          { prompt: 'Number of legs on a chair, number of jelly beans in a bag — you have to count a whole number to get the answer.', term: 'Discrete quantitative variable', detail: 'Countable — a finite or countably infinite number of values, usually whole numbers.' },
          { prompt: 'Height, weight, diameter — you measure with a ruler or scale, and decimals could go on forever.', term: 'Continuous quantitative variable', detail: 'Can take on an infinite number of values within an interval, because it’s measured.' },
          { prompt: '"32% of all high school students eat breakfast" — this number describes the entire population.', term: 'Parameter', detail: 'A numerical summary of a variable of interest for a population. P for parameter, P for population.' },
          { prompt: '"40% of my 40 sampled students ate breakfast" — this number only describes the sample.', term: 'Statistic', detail: 'A numerical summary of a variable of interest for a sample. S for statistic, S for sample.' }
        ]
      },

      /* ---------------- 6. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 06 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'A characteristic that may change from one observational unit to another is called a:', opts: ['Parameter', 'Variable', 'Statistic', 'Datum'], correct: 1, exp: 'A variable is anything that can differ from one observational unit (item/individual) to the next.' },
          { q: 'Which of these makes a variable categorical rather than quantitative?', opts: ['The answer is a number you count', 'The answer is a number you measure', 'The answer is a word or puts you into a group', 'The answer has units of measure'], correct: 2, exp: 'Categorical variables take on category names or group labels — if the answer is a word (or a label), it\'s categorical.' },
          { q: 'A student’s zip code is written as a number, but it is classified as a:', opts: ['Discrete quantitative variable', 'Continuous quantitative variable', 'Categorical variable', 'Parameter'], correct: 2, exp: 'Zip code isn’t measured or counted, and an "average zip code" is meaningless — it just labels where your mail goes, so it\'s categorical.' },
          { q: 'The number of legs on a chair is an example of a:', opts: ['Categorical variable', 'Continuous quantitative variable', 'Discrete quantitative variable', 'Parameter'], correct: 2, exp: 'You count legs — a whole, finite number — which makes it discrete quantitative.' },
          { q: 'The height of a tree, measured with a tape measure, is an example of a:', opts: ['Discrete quantitative variable', 'Continuous quantitative variable', 'Categorical variable', 'Statistic'], correct: 1, exp: 'Height is measured, not counted, and can take on infinitely many values within an interval (including decimals) — that\'s continuous.' },
          { q: 'A number that describes the entire population is called a:', opts: ['Statistic', 'Datum', 'Parameter', 'Sample'], correct: 2, exp: 'Parameter — P for parameter, P for population.' },
          { q: 'A number that describes only the sample actually collected is called a:', opts: ['Parameter', 'Statistic', 'Variable', 'Observational unit'], correct: 1, exp: 'Statistic — S for statistic, S for sample.' },
          { q: 'A company claims its tortillas have a mean diameter of 6.5 in (the population value). A sample of 120 tortillas has a mean of 6.3 in. What is 6.3 in?', opts: ['A parameter', 'A statistic', 'An observational unit', 'A categorical variable'], correct: 1, exp: '6.3 in came from the sample of 120 tortillas, so it\'s a statistic.' },
          { q: 'Why might a sample statistic differ from the true population parameter?', opts: ['Because statistics are always calculated incorrectly', 'Because sample statistics vary from sample to sample', 'Because parameters change over time', 'Because samples always use the wrong units'], correct: 1, exp: 'The one thing sample statistics reliably do is vary — a different sample will usually give a somewhat different number, even if the population hasn’t changed.' },
          { q: 'A jelly bean company reports a mean of 15 beans per bag; a sample of 30 bags shows a mean of 15.8. What type of variable is "number of jelly beans in a bag"?', opts: ['Categorical', 'Quantitative — continuous', 'Quantitative — discrete', 'Parameter'], correct: 2, exp: 'You count a whole number of jelly beans, so it\'s quantitative discrete.' }
        ]
      },

      /* ---------------- 7. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 07 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Categorical vs. quantitative', body: 'If the answer is a word or a label, it’s <strong>categorical</strong>. If it’s a number you measure or count, it’s <strong>quantitative</strong>.' },
          { num: 'ii.', title: 'Discrete vs. continuous', body: 'Quantitative variables split further: <strong>discrete</strong> if you count them (whole numbers), <strong>continuous</strong> if you measure them (infinite values in an interval).' },
          { num: 'iii.', title: 'P for parameter, P for population', body: 'A number that describes the whole <strong>population</strong> is a <strong>parameter</strong>. A number that describes only your <strong>sample</strong> is a <strong>statistic</strong>.' },
          { num: 'iv.', title: 'Samples vary', body: 'The one thing sample statistics reliably do is <strong>vary</strong> — a different sample almost always gives a somewhat different number, even from the same population.' },
          { num: 'v.', title: 'Watch for the trick variables', body: 'Some numbers look quantitative but aren’t — zip code and age-as-a-range (e.g. "21–30") are actually <strong>categorical</strong> because they aren’t measured, counted, or meaningfully averaged.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A researcher studies a collection of houses in a neighborhood, recording each house\'s paint color, square footage, and number of bedrooms. What is the observational unit?', opts: ['A house', 'Paint color', 'The neighborhood', 'Square footage'], correct: 0, exp: 'The observational unit is the item data is collected from — here, each individual house.' },
        { q: 'For that study of houses, which of these is a variable?', opts: ['The neighborhood', 'Paint color', 'The researcher', 'A specific house on Maple Street'], correct: 1, exp: 'A variable is a characteristic that can change from one observational unit to another — paint color changes from house to house.' },
        { q: 'A bakery records the flavor of each cupcake sold (chocolate, vanilla, red velvet, etc.). What type of variable is flavor?', opts: ['Quantitative discrete', 'Quantitative continuous', 'Categorical', 'A parameter'], correct: 2, exp: 'Flavor is a word/label describing a category — that makes it categorical.' },
        { q: 'The bakery also records the exact weight of each cupcake in grams. What type of variable is weight?', opts: ['A statistic', 'Categorical', 'Quantitative discrete', 'Quantitative continuous'], correct: 3, exp: 'Weight is measured and can take on decimal values within a range — that makes it continuous quantitative.' },
        { q: 'The bakery counts the number of sprinkles on each cupcake. What type of variable is this?', opts: ['Quantitative discrete', 'Quantitative continuous', 'An observational unit', 'Categorical'], correct: 0, exp: 'You count a whole number of sprinkles, so this is quantitative discrete.' },
        { q: 'A car dealership records the make of each car on its lot (Honda, Toyota, Ford, etc.). What type of variable is make?', opts: ['Quantitative discrete', 'Categorical', 'A parameter', 'Quantitative continuous'], correct: 1, exp: 'Make is a name/label, not a number — that\'s categorical.' },
        { q: 'The dealership also records how many previous owners each car has had. What type of variable is this?', opts: ['A statistic', 'Categorical', 'Quantitative discrete', 'Quantitative continuous'], correct: 2, exp: 'The number of previous owners is a whole number you count — quantitative discrete.' },
        { q: 'The dealership records each car\'s mileage (e.g. 34,218.5 miles). What type of variable is mileage?', opts: ['An observational unit', 'Categorical', 'Quantitative discrete', 'Quantitative continuous'], correct: 3, exp: 'Mileage is measured and can include fractional values — quantitative continuous.' },
        { q: 'A sports team records each player\'s jersey number. What type of variable is jersey number?', opts: ['Categorical', 'A parameter', 'Quantitative discrete', 'Quantitative continuous'], correct: 0, exp: 'Even though a jersey number is written as a number, it\'s not measured or counted, and averaging jersey numbers is meaningless — it just identifies a player, so it\'s categorical (like zip code).' },
        { q: 'A national park reports that the mean height of all 50,000 pine trees in the park is 62 feet. This 62-foot figure is a:', opts: ['Statistic', 'Parameter', 'Datum', 'Sample'], correct: 1, exp: 'This number describes the entire population of trees, so it\'s a parameter.' },
        { q: 'A ranger measures a random sample of 40 pine trees and finds a mean height of 59 feet. This 59-foot figure is a:', opts: ['Categorical variable', 'Parameter', 'Statistic', 'Observational unit'], correct: 2, exp: 'This number came from a sample, so it\'s a statistic.' },
        { q: 'Why might the sample mean of 59 feet differ from the population mean of 62 feet?', opts: ['Because parameters change every day.', 'Because trees cannot be measured accurately.', 'Because the ranger measured incorrectly.', 'Because sample statistics vary from sample to sample.'], correct: 3, exp: 'The one thing sample statistics reliably do is vary — a different sample of trees would likely give a somewhat different mean, even without any error.' },
        { q: 'A farmer counts the number of eggs laid by each hen in one day. What type of variable is this?', opts: ['Quantitative discrete', 'Quantitative continuous', 'A parameter', 'Categorical'], correct: 0, exp: 'You count a whole number of eggs — quantitative discrete.' },
        { q: 'The farmer also records the color of each egg (white, brown, speckled). What type of variable is egg color?', opts: ['Quantitative continuous', 'Categorical', 'A statistic', 'Quantitative discrete'], correct: 1, exp: 'Egg color is a label/word, so it\'s categorical.' },
        { q: 'A company claims the mean salary of all 3,000 employees is $58,000. A sample of 50 employees has a mean salary of $56,200. Which value is the parameter?', opts: ['3,000', '$56,200', '$58,000', '50'], correct: 2, exp: '$58,000 describes the entire population of employees, making it the parameter.' },
        { q: 'In that same company, which value is the statistic?', opts: ['The company itself', '$58,000', '3,000', '$56,200'], correct: 3, exp: '$56,200 came from the sample of 50 employees, making it the statistic.' },
        { q: 'A used bookstore records the genre, price, and number of pages for every book in its inventory. What is the observational unit?', opts: ['A book', 'The bookstore', 'Genre', 'Price'], correct: 0, exp: 'The observational unit is the individual item data is collected from — each book.' },
        { q: 'The bookstore also records the exact weight of each book, in ounces, for shipping. Weight is best classified as:', opts: ['Quantitative discrete', 'Quantitative continuous', 'A parameter', 'Categorical'], correct: 1, exp: 'Weight is measured, not counted, and can take on many decimal values — quantitative continuous.' },
        { q: 'Number of pages in a book is best classified as:', opts: ['A statistic', 'Categorical', 'Quantitative discrete', 'Quantitative continuous'], correct: 2, exp: 'Pages are counted in whole numbers — quantitative discrete.' },
        { q: 'A hospital records the blood type of every newborn (A, B, AB, O). What type of variable is blood type, and why?', opts: ['Quantitative continuous, because blood type can be measured with a machine.', 'A parameter, because it applies to every newborn.', 'Quantitative discrete, because there are only 4 possible values.', 'Categorical, because the answer is a label, not a measured or counted number.'], correct: 3, exp: 'Even with only a few possible values, blood type is a label describing a group, not a number — that makes it categorical.' },
      ]
    }
  }
});

/* ============================================
   Topic 1.3 — Representing a Categorical Variable with Tables
   Source: course transcript (Topic 1.3 lecture)
   ============================================ */

registerChapters({
  '1-3': {
    id: '1-3',
    code: 'Topic 1.3',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Representing a Categorical Variable with Tables',
    cardSummary: 'Turning a pile of category labels into a frequency table and a relative frequency table — and describing what you see.',
    heroTitle: 'Turn a pile of <em>words</em><br>into a table.',
    heroSub: 'A categorical variable gives you a stack of labels. A frequency table counts them; a relative frequency table turns those counts into proportions you can compare.',
    source: 'Topic 1.3 course video',
    estTime: '~20–30 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Counts, then <span class="underline sample">proportions</span>.',
        body: 'Once you’ve collected a categorical variable, you organize it two ways: a <strong>frequency table</strong> for raw counts, and a <strong>relative frequency table</strong> for proportions — both describe the same categorical variable, they just report it differently.',
        cards: [
          { roman: 'I.', title: 'Build the table', body: 'Count how many observational units fall into each category (frequency), then divide each count by the total to get proportions (relative frequency).', tags: ['Frequency','Relative frequency','Proportion = %'] },
          { roman: 'II.', title: 'Describe what you see', body: 'With categorical data, description mostly means comparison: which category is most common, which is least common, and how close the others are.', tags: ['Most common','Least common','Compare categories'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">five words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'frequency-table', term: 'Frequency table', accent: 'population', body: 'A table that shows the <strong>number (count)</strong> of observational units in each category of a categorical variable.' },
          { id: 'frequency', term: 'Frequency', accent: 'population', body: 'Another word for <strong>count</strong> — how many times a category appeared in the data.' },
          { id: 'relative-frequency-table', term: 'Relative frequency table', accent: 'sample', body: 'A table that shows the <strong>proportion or percentage</strong> of observational units in each category, instead of raw counts.' },
          { id: 'relative-frequency', term: 'Relative frequency', accent: 'sample', body: 'The proportion of the total that falls in one category — the same idea as a percentage or a ratio, just written differently.' },
          { id: 'describing-categorical-data', term: 'Describing categorical data', accent: 'sample', body: 'With categorical data, "description" mostly means comparing categories — which had the most, which had the least, and whether any were close.' }
        ]
      },

      /* ---------------- 3. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 03 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A ',
            { id:'b1', answer:'frequency table', options:['frequency table','relative frequency table','data set'] },
            ' shows the number, or ',
            { id:'b2', answer:'count', options:['count','percentage','mean'] },
            ', of observational units in each category of a categorical variable.'
          ]},
          { segments: [
            'A relative frequency table shows the ',
            { id:'b3', answer:'proportion', options:['proportion','frequency','parameter'] },
            ' or percentage of observational units in each category, instead of the raw counts.'
          ]},
          { segments: [
            'A proportion, a percentage, a ratio, and a relative frequency all give the ',
            { id:'b4', answer:'same', options:['same','different','opposite'] },
            ' information — a percentage is just a proportion with the decimal moved two places to the ',
            { id:'b5', answer:'right', options:['right','left','center'] },
            '.'
          ]},
          { segments: [
            'Even though a frequency table is full of numbers, the variable it describes is still ',
            { id:'b6', answer:'categorical', options:['categorical','quantitative','continuous'] },
            ', because those numbers are just counts of a word-based category.'
          ]},
          { segments: [
            'To describe a categorical data set, you typically report which category was the ',
            { id:'b7', answer:'most', options:['most','least','average'] },
            ' common and which was the ',
            { id:'b8', answer:'least', options:['least','most','discrete'] },
            ' common.'
          ]}
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 04 — Worked Examples',
        heading: 'From raw labels to a <span class="underline teal">real table</span>.',
        body: 'Based on a sample of 70 lemurs classified by type. Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'A random sample of 70 lemurs was classified by type: 20 were ring-tailed, 24 were aye-aye, 11 were mouse lemurs, and the rest were sifaka. Build a frequency and relative frequency table for type of lemur.',
            fields: [
              { k: 'Ring-tailed', v: 'freq = 20, rel. freq = 20/70 ≈ 0.286 = 28.6%' },
              { k: 'Aye-aye', v: 'freq = 24, rel. freq = 24/70 ≈ 0.343 = 34.3%' },
              { k: 'Mouse', v: 'freq = 11, rel. freq = 11/70 ≈ 0.157 = 15.7%' },
              { k: 'Sifaka', v: 'freq = 70 − 20 − 24 − 11 = 15, rel. freq = 15/70 ≈ 0.214 = 21.4% (found by subtracting the other three from the 70 total — not stated directly in the source video)' }
            ]
          },
          {
            q: 'Using that same lemur table, which type was the most common, and what percentage of the sample were mouse lemurs?',
            fields: [
              { k: 'Most common type', v: 'Aye-aye — 24 lemurs, 34.3% of the sample (the highest count/percentage in the table)' },
              { k: 'Mouse lemurs', v: '15.7% of the sampled lemurs were mouse lemurs' },
              { k: 'Caution', v: 'That 15.7% is a sample statistic — it’s reasonable to infer roughly 15.7% of all lemurs are mouse lemurs, but samples vary, so it won’t be exact.' }
            ]
          },
          {
            q: 'The lemur data set also recorded body length, tail length, whether the tail has stripes (yes/no), fur color, and weight. Which of these variables are categorical?',
            fields: [
              { k: 'Categorical variables', v: 'Type of lemur, whether the tail has stripes (yes/no), and fur color — all are words or yes/no labels' },
              { k: 'Quantitative variables', v: 'Body length, tail length, and weight — all are measured, so they’re quantitative continuous' },
              { k: 'Why it matters', v: 'Only categorical variables get summarized with frequency / relative frequency tables' }
            ]
          }
        ]
      },

      /* ---------------- 5. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 05 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'A table showing how many observational units fall into each category — raw counts, not percentages.', term: 'Frequency table', detail: 'Shows the count (frequency) of observational units in each category.' },
          { prompt: '"88 people said Black or African-American" — the number 88 here is called the...', term: 'Frequency', detail: 'Another word for count.' },
          { prompt: 'A table showing 50.8%, 8.9%, ... instead of raw counts for each category.', term: 'Relative frequency table', detail: 'Shows the proportion/percentage of observational units in each category.' },
          { prompt: '0.508, 50.8%, and a ratio of about 1-in-2 are all different ways of expressing the same...', term: 'Relative frequency', detail: 'Proportion, percentage, and ratio are all the same idea as relative frequency.' },
          { prompt: 'Even though this table is full of numbers, the variable itself (ethnicity, type of lemur, color) is still...', term: 'Categorical', detail: 'The counts describe a categorical variable — the variable itself never becomes quantitative.' },
          { prompt: 'For a categorical data set, "describing" it mostly means comparing categories by...', term: 'Most/least common category', detail: 'Which category had the highest count or percentage, which had the lowest, and how they compare.' }
        ]
      },

      /* ---------------- 6. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 06 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Nine questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'A frequency table shows:', opts: ['The proportion of observational units in each category', 'The number (count) of observational units in each category', 'The mean of a quantitative variable', 'The population parameter'], correct: 1, exp: 'Frequency = count. A frequency table reports the raw number of observational units in each category.' },
          { q: 'A relative frequency table shows:', opts: ['Raw counts only', 'Proportions or percentages instead of counts', 'Only the most common category', 'The sample size'], correct: 1, exp: 'Relative frequency tables convert counts into proportions/percentages of the total.' },
          { q: 'If 132 out of 260 people surveyed said their ethnicity was "white," the relative frequency for that category is closest to:', opts: ['13.2%', '50.8%', '2.6%', '132%'], correct: 1, exp: '132/260 ≈ 0.508 = 50.8%.' },
          { q: 'A proportion, a percentage, and a relative frequency:', opts: ['Are three completely different statistics', 'All give the same information, just in different forms', 'Only apply to quantitative variables', 'Can only be calculated from a population, never a sample'], correct: 1, exp: 'They’re the same idea — a percentage is a proportion with the decimal moved two places.' },
          { q: 'A frequency table for "type of lemur" contains only numbers. This means the underlying variable is now:', opts: ['Quantitative discrete', 'Quantitative continuous', 'Still categorical — the numbers are just counts of a category', 'A parameter'], correct: 2, exp: 'The counts describe how many fell into each category — the variable itself (type of lemur) is still categorical.' },
          { q: 'In the lemur study (70 lemurs), aye-aye lemurs had a frequency of 24. What is their relative frequency?', opts: ['24%', 'About 34.3%', 'About 15.7%', '24/100'], correct: 1, exp: '24/70 ≈ 0.343 = 34.3%.' },
          { q: 'In that same lemur study, ring-tailed = 20, aye-aye = 24, and mouse = 11, out of 70 lemurs total. How many were sifaka?', opts: ['5', '10', '15', '20'], correct: 2, exp: '70 − 20 − 24 − 11 = 15 sifaka lemurs.' },
          { q: 'When describing a categorical data set, the main thing you comment on is:', opts: ['The mean and standard deviation', 'Which category is most/least common', 'Whether the data is symmetric', 'The margin of error'], correct: 1, exp: 'For categorical data, description is mostly about comparing category counts/percentages — mean and standard deviation apply to quantitative data.' },
          { q: '15.7% of a sample of lemurs were mouse lemurs. Can we conclude exactly 15.7% of all lemurs are mouse lemurs?', opts: ['Yes, samples always match the population exactly', 'No — that 15.7% is a sample statistic, and statistics vary from sample to sample', 'No, because relative frequency only works for quantitative variables', 'Yes, because relative frequency tables are always exact'], correct: 1, exp: 'That 15.7% is a statistic from one sample; we can infer the population is probably close to it, but samples vary, so it’s not guaranteed to be exact.' }
        ]
      },

      /* ---------------- 7. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 07 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Frequency = count', body: 'A <strong>frequency table</strong> shows how many observational units landed in each category — nothing more.' },
          { num: 'ii.', title: 'Relative frequency = proportion', body: 'A <strong>relative frequency table</strong> swaps counts for proportions or percentages of the total — same information, different scale.' },
          { num: 'iii.', title: 'Proportion, percentage, ratio — same idea', body: 'These words all describe the same relative-frequency concept; a percentage is just a proportion with the decimal shifted two places.' },
          { num: 'iv.', title: 'Numbers in the table ≠ quantitative variable', body: 'A frequency table is full of numbers, but the variable it summarizes is still <strong>categorical</strong> — those numbers are just counts of a label.' },
          { num: 'v.', title: 'Describing categorical data = comparing categories', body: 'Talk about which category is most common, which is least common, and how the categories compare to each other.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A frequency table for a categorical variable shows:', opts: ['The number (count) of observational units in each category', 'The mean of the variable', 'The population size only', 'The proportion of observational units in each category'], correct: 0, exp: 'A frequency table reports raw counts — how many observational units fall into each category.' },
        { q: 'How does a relative frequency table differ from a plain frequency table?', opts: ['It lists categories in a different order', 'It replaces the raw counts with proportions or percentages', 'It only applies to quantitative variables', 'It shows the mean instead of individual categories'], correct: 1, exp: 'A relative frequency table converts counts into proportions or percentages of the total, instead of showing raw counts.' },
        { q: 'A pet shelter has 45 dogs and 30 cats currently available (75 animals total). What is the relative frequency of dogs?', opts: ['75%', '45%', '60%', '30%'], correct: 2, exp: '45/75 = 0.60 = 60%.' },
        { q: 'In a survey of 200 students, 70 said pepperoni was their favorite pizza topping. What is the relative frequency of pepperoni?', opts: ['0.35%', '2.86%', '70%', '35%'], correct: 3, exp: '70/200 = 0.35 = 35%.' },
        { q: 'A relative frequency of 0.42 for a category could also correctly be reported as:', opts: ['42%', '0.042%', '42', '4.2%'], correct: 0, exp: 'A proportion is converted to a percentage by moving the decimal two places — 0.42 = 42%.' },
        { q: 'A recycling center\'s frequency table for material type (plastic, glass, metal, paper) shows counts like 120, 85, 40, 200. Even though the table is full of numbers, the variable "material type" is still:', opts: ['Quantitative continuous', 'Categorical, because those numbers are just counts of a label', 'A parameter', 'Quantitative discrete, because the table has numbers'], correct: 1, exp: 'The counts describe how many items fell into each label — the variable itself (material type) is still categorical.' },
        { q: 'A music app\'s frequency table for genre played shows: Pop 4,200; Hip-Hop 3,100; Rock 2,000; Jazz 500. Which genre was most common?', opts: ['Hip-Hop', 'Rock', 'Pop', 'Jazz'], correct: 2, exp: 'Pop has the highest count (4,200), making it the most common category.' },
        { q: 'Using that same music app data (Pop 4,200; Hip-Hop 3,100; Rock 2,000; Jazz 500; total 9,800), what is the relative frequency of Jazz, rounded to the nearest tenth of a percent?', opts: ['500%', '0.5%', '5.0%', '5.1%'], correct: 3, exp: '500/9,800 ≈ 0.051 = 5.1%.' },
        { q: 'A parking lot survey of 300 cars found: 110 silver, 75 black, 60 white, and the rest were "other colors." How many cars were "other colors"?', opts: ['55', '65', '245', '300'], correct: 0, exp: '300 − 110 − 75 − 60 = 55.' },
        { q: 'In that same parking lot survey, what is the relative frequency of "other colors" (55 out of 300)?', opts: ['5.5%', '18.3%', '55%', '1.8%'], correct: 1, exp: '55/300 ≈ 0.183 = 18.3%.' },
        { q: 'When describing a categorical data set, which of the following is most appropriate?', opts: ['Computing a correlation coefficient', 'Calculating the mean and standard deviation', 'Comparing which category is most and least common', 'Finding the five-number summary'], correct: 2, exp: 'Categorical data is described by comparing category counts/percentages — mean, standard deviation, and correlation apply to quantitative data.' },
        { q: 'Which pair of terms describe essentially the same concept?', opts: ['Datum and data set', 'Population and sample', 'Frequency and relative frequency', 'Proportion and percentage'], correct: 3, exp: 'A proportion and a percentage are the same idea, just expressed differently (percentage = proportion × 100).' },
        { q: 'A school surveys 400 students about their favorite sport: basketball 140, soccer 120, football 100, other 40. What is the relative frequency of soccer?', opts: ['30%', '12%', '3%', '120%'], correct: 0, exp: '120/400 = 0.30 = 30%.' },
        { q: 'In that same survey, which sport was least common?', opts: ['Football', 'Other', 'Basketball', 'Soccer'], correct: 1, exp: '"Other" has the lowest count (40), making it the least common category.' },
        { q: 'True or false: a relative frequency table always displays the exact same raw counts as the frequency table it was built from.', opts: ['False — relative frequency tables never relate to the original counts.', 'True — both show the raw count.', 'False — a relative frequency table shows proportions/percentages, not the counts.', 'True — but only for large samples.'], correct: 2, exp: 'A relative frequency table replaces counts with proportions or percentages — it typically doesn\'t display the raw counts at all.' },
        { q: 'A bakery sold 60 chocolate chip, 45 oatmeal, and 15 sugar cookies in one day (120 total). What is the relative frequency of oatmeal cookies?', opts: ['60%', '15%', '45%', '37.5%'], correct: 3, exp: '45/120 = 0.375 = 37.5%.' },
        { q: 'In that same bakery data, which cookie was most common?', opts: ['Chocolate chip', 'They were tied', 'Oatmeal', 'Sugar'], correct: 0, exp: 'Chocolate chip had the highest count (60 out of 120).' },
        { q: 'A relative frequency table shows a proportion of 0.183 for one category. Written as a percentage, this is closest to:', opts: ['1.83%', '18.3%', '0.183%', '183%'], correct: 1, exp: '0.183 as a percentage is 18.3% (move the decimal two places right).' },
        { q: 'The pet shelter also records each animal\'s age in months and whether it has been vaccinated (yes/no). Which of these two is categorical?', opts: ['Neither is categorical', 'Age in months', 'Whether it has been vaccinated', 'Both are categorical'], correct: 2, exp: 'Vaccination status is a yes/no label — categorical. Age in months is a measured/counted number — quantitative.' },
        { q: 'A random sample of 300 parking lot cars found 18.3% were "other colors." Can we conclude that exactly 18.3% of all cars in the city are "other colors"?', opts: ['No, because relative frequency only applies to quantitative variables.', 'Yes, because 300 cars is enough to guarantee an exact match.', 'Yes, the sample and population always match exactly.', 'No — 18.3% is a sample statistic, and it\'s reasonable to infer the population is close to it, but not guaranteed to be exact.'], correct: 3, exp: 'That 18.3% is a sample statistic; we can infer the population is probably similar, but samples vary, so it\'s not guaranteed to be exact.' },
      ]
    }
  }
});

/* ============================================
   Topic 1.4 — Representing a Categorical Variable with Graphs
   Source: course transcript (Topic 1.4 lecture)
   ============================================ */

registerChapters({
  '1-4': {
    id: '1-4',
    code: 'Topic 1.4',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Representing a Categorical Variable with Graphs',
    cardSummary: 'Bar charts and pie charts for a categorical variable — justifying claims, and the count-vs-proportion trap when comparing two graphs.',
    heroTitle: 'Turn categories<br>into a <em>picture</em>.',
    heroSub: 'A frequency table is accurate but hard to scan. Bar charts and pie charts turn the same numbers into something you can read at a glance — as long as you know what to check before trusting one.',
    source: 'Topic 1.4 course video',
    estTime: '~20–30 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Same numbers, <span class="underline teal">two shapes</span>.',
        body: 'A bar chart and a pie chart can display the exact same frequency or relative frequency data — you’re just choosing how to draw it. The real skill is reading them correctly and comparing them fairly.',
        cards: [
          { roman: 'I.', title: 'Bar chart or pie chart', body: 'A bar chart uses <strong>bar height</strong> to show frequency or relative frequency. A pie chart uses <strong>slice area</strong> — and the slices always sum to 100%.', tags: ['Equal-width bars','Slices sum to 100%','Frequency or relative frequency'] },
          { roman: 'II.', title: 'Justify, infer, compare carefully', body: 'Use a graph to justify a claim about the sample in context, infer about the population only if the sample was random, and — when comparing two graphs — always check whether you’re looking at counts or proportions.', tags: ['Justify a claim','Infer (if random)','Compare fairly'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">four words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'bar-chart', term: 'Bar chart', accent: 'population', body: 'Displays the frequency or relative frequency of each category as bars of equal width — only the height (or length) of each bar changes.' },
          { id: 'pie-chart', term: 'Pie chart', accent: 'population', body: 'Displays the frequency or relative frequency of each category as slices of a circle — each slice’s area equals its relative frequency, and all slices sum to 100%.' },
          { id: 'justify-a-claim', term: 'Justify a claim', accent: 'sample', body: 'Using a graph to support a specific, in-context statement about the variable — e.g. "more of this sample answered White than any other ethnicity."' },
          { id: 'comparing-distributions', term: 'Comparing distributions', accent: 'sample', body: 'Comparing two categorical data sets fairly means comparing relative frequency (proportion), not raw counts — raw counts mislead when the sample sizes are different.' }
        ]
      },

      /* ---------------- 3. READING THE GRAPHS ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 03 — Reading the Graphs',
        heading: 'The exact same data, <span class="underline sample">five different ways</span>.',
        items: [
          {
            title: 'Tree species in Ohio — frequency (n = 300)',
            chartType: 'bar', mode: 'count',
            data: [{ label:'Oak', value:66 }, { label:'Ash', value:54 }, { label:'Elm', value:24 }, { label:'Other', value:156 }],
            caption: 'Bar height = raw count. "Other" bundles every remaining species into one bar — it’s the tallest bar, but oak is still the single most common individual species.'
          },
          {
            title: 'Same trees — relative frequency',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'Oak', value:66 }, { label:'Ash', value:54 }, { label:'Elm', value:24 }, { label:'Other', value:156 }],
            caption: 'Same data, but the bar height now shows the percentage of the sample in each category instead of the count — the shape of the graph doesn’t change, only what the y-axis measures.'
          },
          {
            title: 'Ethnicities (n = 260) — relative frequency',
            chartType: 'pie',
            data: [{ label:'White', value:132 }, { label:'Black or African-American', value:88 }, { label:'Asian', value:23 }, { label:'Hispanic', value:12 }, { label:'Other', value:5 }],
            caption: 'The same 260-person sample from Topic 1.3’s frequency table — each slice’s area equals its relative frequency, and all five slices sum to 100%.'
          },
          {
            title: 'School A ethnicities — frequency (n = 100)',
            chartType: 'bar', mode: 'count',
            data: [{ label:'White', value:85 }, { label:'Black/Afr.Am.', value:10 }, { label:'Other', value:5 }],
            caption: '85% of School A’s sample is White — the clear majority.'
          },
          {
            title: 'School B ethnicities — frequency (n = 1000)',
            chartType: 'bar', mode: 'count',
            data: [{ label:'White', value:410 }, { label:'Black/Afr.Am.', value:450 }, { label:'Other', value:140 }],
            caption: 'Only 41% of School B is White — but because School B’s sample is 10× bigger, that 41% (410 students) still outnumbers School A’s entire White count (85).'
          }
        ]
      },

      /* ---------------- 4. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 04 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A bar chart displays the frequency or relative frequency of each category using bars of equal ',
            { id:'b1', answer:'width', options:['width','height','color'] },
            '; only the ',
            { id:'b2', answer:'height', options:['height','width','color'] },
            ' of each bar changes.'
          ]},
          { segments: [
            'A pie chart represents each category as a slice of a circle, where the ',
            { id:'b3', answer:'area', options:['area','width','frequency'] },
            ' of each slice equals its relative frequency, and all slices sum to ',
            { id:'b4', answer:'100%', options:['100%','the mean','the mode'] },
            '.'
          ]},
          { segments: [
            'A graph can be used to ',
            { id:'b5', answer:'justify a claim', options:['justify a claim','calculate a parameter','collect data'] },
            ' about the sample in context, and — if the sample was randomly selected — to make an ',
            { id:'b6', answer:'inference', options:['inference','observation','datum'] },
            ' about the population.'
          ]},
          { segments: [
            'When comparing two categorical data sets of different sizes, comparing raw ',
            { id:'b7', answer:'counts', options:['counts','proportions','percentages'] },
            ' can be misleading; it is more fair to compare ',
            { id:'b8', answer:'relative frequency', options:['relative frequency','the mode','the total sample size'] },
            '.'
          ]},
          { segments: [
            'Before concluding which group has "more" of a category, always check the ',
            { id:'b9', answer:'axis', options:['axis','color','title'] },
            ' of the graph, since two graphs can use very different scales.'
          ]}
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Read the graph. <span class="underline teal">Answer the question.</span>',
        body: 'These reference the charts in Section 03 above. Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'A random sample of 300 trees in Ohio was classified by species: 66 oak, 54 ash, 24 elm, and 156 classified as other species combined (see the bar charts above). Which species was most common, what proportion of the sample was oak, and what can we infer about all trees in Ohio?',
            fields: [
              { k: 'Most common individual species', v: 'Oak — 66 trees, the tallest single-species bar (22% of the sample)' },
              { k: 'Proportion that were oak', v: '66 / 300 = 0.22 = 22%' },
              { k: 'Population inference', v: 'If this was a random sample, we can infer oak trees make up roughly 22% of all trees in Ohio — not exactly, since samples vary, but it’s a reasonable estimate' }
            ]
          },
          {
            q: 'The same 260-person ethnicity survey from Topic 1.3 is shown as a pie chart above. Justify a claim about which ethnicity was most common in the sample, and state what we can infer about the population.',
            fields: [
              { k: 'Justify the claim', v: '"White" was the most common response in this sample — its slice (50.8%) takes up just over half the pie, more than every other category combined' },
              { k: 'Population inference', v: 'If the sample was randomly selected, we can infer that somewhere around half of the population would respond "White" — not exactly 50.8%, because that number is a sample statistic and statistics vary' }
            ]
          },
          {
            q: 'School A (n = 100) and School B (n = 1000) each reported the ethnicity of a random sample of their students, shown as the two bar charts above. Is it true that School B has more White students than School A? Is it true that School A has a higher proportion of White students than School B?',
            fields: [
              { k: 'More White students (raw count)', v: 'True for School B — 410 White students vs. School A’s 85, simply because School B’s whole sample is 10× bigger' },
              { k: 'Higher proportion White', v: 'True for School A — 85% of School A is White, compared to only 41% of School B' },
              { k: 'Why both are true at once', v: 'Comparing raw counts and comparing proportions can point in opposite directions when sample sizes differ — always check which one (and which axis) you’re actually looking at' }
            ]
          }
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'Bars of equal width, height shows count or percentage — one bar per category.', term: 'Bar chart', detail: 'Displays frequency or relative frequency as bars of equal width.' },
          { prompt: 'A circle cut into slices, where each slice’s area equals its share of the whole.', term: 'Pie chart', detail: 'Slices sum to 100%; area = relative frequency.' },
          { prompt: '"More of this sample chose White than any other ethnicity" — using a graph to back up a statement like this is called...', term: 'Justify a claim', detail: 'Using a graph to support an in-context statement about the variable.' },
          { prompt: 'School A is 85% White; School B is only 41% White, but School B has more White students overall. What’s the danger of just comparing counts?', term: 'Comparing distributions fairly', detail: 'Different sample sizes make raw-count comparisons misleading — compare relative frequency instead.' },
          { prompt: 'A sample gives you 22% oak trees. Can you say that means exactly 22% of all trees in Ohio are oak?', term: 'Inference (only if random)', detail: 'Only valid to infer about the population if the sample was randomly selected — and even then, it’s an estimate, not a guarantee.' },
          { prompt: 'Two bar charts, two different y-axis scales — what should you always check before comparing them?', term: 'The axis / scale', detail: 'Always check whether you’re looking at counts or percentages, and what the scale actually is.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'In a bar chart for a categorical variable, what should stay constant across every bar?', opts: ['The height', 'The color', 'The width', 'The label'], correct: 2, exp: 'Bars should all be the same width — only the height (encoding frequency or relative frequency) should change.' },
          { q: 'In a pie chart, the area of each slice represents:', opts: ['The category’s rank', 'The category’s relative frequency', 'The category’s mean', 'The number of categories'], correct: 1, exp: 'Slice area equals relative frequency, and all slices sum to 100%.' },
          { q: 'A bar chart can show either the frequency of each category or the:', opts: ['Mean of each category', 'Relative frequency of each category', 'Standard deviation', 'Sample size only'], correct: 1, exp: 'Bar charts can be built from either the frequency table (counts) or the relative frequency table (proportions).' },
          { q: 'Using a graph to support a specific in-context statement, like "oak was the most common tree species in this sample," is called:', opts: ['Making an inference', 'Justifying a claim', 'Building a parameter', 'Constructing a variable'], correct: 1, exp: 'That’s justifying a claim — backing up a specific statement using the graph’s data.' },
          { q: 'A random sample shows 22% of trees are oak. When can we infer that roughly 22% of all trees in the population are oak?', opts: ['Always, regardless of how the sample was chosen', 'Only if the sample was randomly selected', 'Only if the sample has over 1000 trees', 'Never — inference only works for quantitative data'], correct: 1, exp: 'Inference to the population is only valid when the sample was chosen randomly — and it’s still an estimate, not a guarantee.' },
          { q: 'School A (n = 100) is 85% White. School B (n = 1000) is 41% White. Which school has more White students, in raw count?', opts: ['School A', 'School B', 'They are equal', 'Cannot be determined'], correct: 1, exp: '85% of 100 = 85 students; 41% of 1000 = 410 students. School B has more, despite the smaller percentage.' },
          { q: 'In that same comparison, which school has the higher proportion of White students?', opts: ['School A', 'School B', 'They are equal', 'Cannot be determined'], correct: 0, exp: '85% (School A) is higher than 41% (School B) — proportion and raw count can disagree when sample sizes differ.' },
          { q: 'Why is it misleading to compare two bar charts using only raw counts?', opts: ['Bar charts can never show counts', 'The sample sizes might be very different, so a "bigger" bar doesn’t always mean a "bigger share"', 'Counts are never accurate', 'Only pie charts can be compared'], correct: 1, exp: 'If sample sizes differ, a bigger count can still be a smaller proportion — you have to compare relative frequency to compare fairly.' },
          { q: 'What should you always check before comparing two bar graphs?', opts: ['The color scheme', 'The font used for labels', 'The axis / scale each graph uses', 'The order of the categories'], correct: 2, exp: 'Different graphs can use very different axis scales — always check what the axis actually represents (and its range) before comparing.' },
          { q: 'A pie chart’s slices must:', opts: ['Each be the same size', 'Sum to 100% of the total', 'Only represent quantitative data', 'Be arranged alphabetically'], correct: 1, exp: 'All the slices together must account for the whole sample — they sum to 100% (a relative frequency of 1).' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Bar or pie — same information, different shape', body: 'Both display a categorical variable’s frequency or relative frequency; a bar chart uses height, a pie chart uses slice area.' },
          { num: 'ii.', title: 'Equal widths, slices sum to 100%', body: 'Bars must all be the same width so only height carries meaning; pie slices must add up to the whole sample.' },
          { num: 'iii.', title: 'Justify claims in context, infer only if random', body: 'Use the graph to back up a specific in-context statement. You can only infer about the population if the sample was randomly selected — and even then, it’s an estimate.' },
          { num: 'iv.', title: 'Compare proportions, not raw counts', body: 'When comparing two categorical data sets, a bigger raw count can still be a smaller share if the sample sizes differ — compare relative frequency instead.' },
          { num: 'v.', title: 'Always check the axis', body: 'Before drawing any conclusion from a graph, confirm whether you’re looking at counts or percentages, and what scale is actually being used.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'In a bar chart for a categorical variable, what must stay the same across every bar?', opts: ['The width', 'The label length', 'The height', 'The color'], correct: 0, exp: 'All bars must be the same width — only the height (frequency or relative frequency) should vary.' },
        { q: 'A bar chart\'s bar heights can represent:', opts: ['Only relative frequency (percentages)', 'Either frequency or relative frequency, depending on how it\'s built', 'The mean of a quantitative variable', 'Only frequency (counts)'], correct: 1, exp: 'A bar chart can be built from either a frequency table (counts) or a relative frequency table (percentages).' },
        { q: 'What does the size of a slice in a pie chart tell you about that category?', opts: ['The mean of that category\'s values', 'Its alphabetical rank among the categories', 'Its relative frequency — the bigger the slice, the larger its share of the sample', 'Nothing — slice size is just for decoration'], correct: 2, exp: 'Slice area equals relative frequency, and all slices together sum to 100%.' },
        { q: 'All the slices in a pie chart must:', opts: ['Be arranged by size, largest first', 'Represent quantitative data only', 'Be the same size', 'Sum to 100% (or a relative frequency of 1)'], correct: 3, exp: 'The slices together must account for the whole sample — they sum to 100%.' },
        { q: 'A movie theater\'s bar chart shows snack sales: popcorn 340, candy 210, soda 180, nachos 70. Which snack was most popular?', opts: ['Popcorn', 'Nachos', 'Candy', 'Soda'], correct: 0, exp: 'Popcorn has the tallest bar (340), making it the most popular snack sold.' },
        { q: 'Using that same data (total 800 snacks sold), what percentage of sales were nachos?', opts: ['70%', '8.75%', '17.5%', '0.7%'], correct: 1, exp: '70/800 = 0.0875 = 8.75%.' },
        { q: 'A weather app\'s pie chart for last month\'s 30 days shows: Sunny 50%, Cloudy 33%, Rainy 17%. About how many days were rainy?', opts: ['30 days', '17 days', '5 days', '10 days'], correct: 2, exp: '17% of 30 days ≈ 5.1 days, so about 5 days were rainy.' },
        { q: 'Using the movie theater\'s bar chart (popcorn most popular, at 340 out of 800 sales), which statement correctly justifies a claim using the graph?', opts: ['Popcorn is the healthiest snack.', 'Candy sales caused popcorn sales to increase.', 'Popcorn will always outsell candy everywhere.', 'In this sample, popcorn was the most commonly sold snack.'], correct: 3, exp: 'Justifying a claim means backing up a specific, in-context statement using the graph\'s actual data — not making unsupported claims beyond what the sample shows.' },
        { q: 'If the 800 snack sales were from a random sample of showtimes, can the theater infer that popcorn is the most popular snack overall?', opts: ['Yes — since the sample was random, it\'s reasonable to infer popcorn is popular overall, though it\'s an estimate, not a certainty.', 'Yes, and we can be 100% certain of this for every theater everywhere.', 'No, because bar charts cannot be used for inference.', 'No, inference never applies to graphs.'], correct: 0, exp: 'Inference to a broader population is valid only when the sample is random, and even then it\'s an estimate, not a guarantee.' },
        { q: 'If the theater only recorded sales from one Friday night showing of a superhero movie (not a random sample of all showtimes), can they confidently infer popcorn is the most popular snack overall?', opts: ['Yes, one showing is always enough.', 'No — without a random sample, it\'s risky to generalize beyond that specific showing.', 'Yes, because popcorn is always the most popular.', 'No, because bar charts are never valid.'], correct: 1, exp: 'Without random sampling, the results may not represent all showtimes/audiences — generalizing beyond the sample is risky.' },
        { q: 'Gym A (n = 80 members) has 60 members with a "Premium" membership. Gym B (n = 900 members) has 300 members with a "Premium" membership. Which gym has more Premium members in raw count?', opts: ['Cannot be determined', 'Gym A', 'Gym B', 'They are equal'], correct: 2, exp: 'Gym B has 300 Premium members vs. Gym A\'s 60 — more in raw count, even though its overall membership is much larger.' },
        { q: 'In that same comparison, which gym has the higher proportion of Premium members?', opts: ['Gym B (300/900 ≈ 33%)', 'They are equal', 'Cannot be determined', 'Gym A (60/80 = 75%)'], correct: 3, exp: '75% (Gym A) is much higher than about 33% (Gym B) — proportion and raw count can point in opposite directions when sample sizes differ.' },
        { q: 'Why would it be misleading to compare Gym A and Gym B\'s Premium membership using only the raw counts (60 vs. 300)?', opts: ['The two gyms have very different total membership sizes, so a bigger count doesn\'t mean a bigger share.', 'Gym B doesn\'t really have 300 Premium members.', 'Only pie charts can be compared, not bar charts.', 'Raw counts are always wrong.'], correct: 0, exp: 'Since the gyms have very different total sizes, comparing raw counts alone hides that Gym A actually has the much higher proportion of Premium members.' },
        { q: 'Before concluding that one bar chart shows "more" of a category than another bar chart, what should you always check first?', opts: ['The font used for the labels', 'The axis/scale each chart uses, and whether the sample sizes match', 'The order the categories are listed in', 'The color scheme of each chart'], correct: 1, exp: 'Different charts can use very different scales or sample sizes — always check the axis and sample size before comparing.' },
        { q: 'A bookstore\'s pie chart of genre sales shows Fiction 45%, Mystery 25%, Sci-Fi 20%, Other 10%. If the store sold 500 books last month, about how many were Mystery?', opts: ['45 books', '25 books', '125 books', '250 books'], correct: 2, exp: '25% of 500 = 125 books.' },
        { q: 'A call center\'s bar chart of complaint type shows: billing 220, technical 150, shipping 90, other 40. What is the total number of complaints represented?', opts: ['90', '410', '220', '500'], correct: 3, exp: '220 + 150 + 90 + 40 = 500.' },
        { q: 'Using that call center data (total 500), what is the relative frequency of technical complaints?', opts: ['30%', '15%', '3%', '150%'], correct: 0, exp: '150/500 = 0.30 = 30%.' },
        { q: 'A data set\'s frequency table is used to build both a bar chart and a pie chart. Which statement is true?', opts: ['The bar chart and pie chart will show completely different information.', 'Both charts can represent the exact same underlying data, just displayed differently.', 'Only the pie chart can use relative frequency.', 'Only the bar chart can use relative frequency.'], correct: 1, exp: 'A bar chart and pie chart can both be built from the same frequency or relative frequency data — they\'re just different visual formats for the same information.' },
        { q: 'Club A (n=40) has 30 students who attend every meeting. Club B (n=500) has 100 students who attend every meeting. Which club has a higher proportion of students attending every meeting?', opts: ['They are equal', 'Cannot be determined without more information', 'Club A (30/40 = 75%)', 'Club B (100/500 = 20%)'], correct: 2, exp: '75% (Club A) is much higher than 20% (Club B), even though Club B has more such students in raw count (100 vs. 30).' },
        { q: 'A student looks at Club B\'s bar chart alone and claims "Club B has better meeting attendance than Club A" because 100 is a bigger number than 30. What is the flaw in this claim?', opts: ['Club A doesn\'t really have 30 students.', 'Bar charts cannot be used to make claims.', 'There is no flaw — 100 is bigger than 30.', 'The student compared raw counts without accounting for the very different club sizes; by proportion, Club A actually has better attendance.'], correct: 3, exp: 'Comparing raw counts alone ignores the difference in total membership — by proportion (75% vs. 20%), Club A actually has noticeably better attendance.' },
      ]
    }
  }
});

/* ============================================
   Topic 1.5 — Representing a Quantitative Variable with Graphs
   Source: course transcript (Topic 1.5 lecture)
   ============================================ */

registerChapters({
  '1-5': {
    id: '1-5',
    code: 'Topic 1.5',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Representing a Quantitative Variable with Graphs',
    cardSummary: 'Dot plots, stem-and-leaf plots, and histograms for a quantitative variable — one number line, three ways to show how the values are distributed.',
    heroTitle: 'Turn numbers<br>into a <em>shape</em>.',
    heroSub: 'Categorical data got bars and pies. Quantitative data gets a number line — dot plots, stem-and-leaf plots, and histograms all show where your values fall and how often, just with different amounts of detail.',
    source: 'Topic 1.5 course video',
    estTime: '~25–35 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'One number line, <span class="underline teal">three graphs</span>.',
        body: 'Dot plots, stem-and-leaf plots, and histograms all order a quantitative variable from smallest to largest and show how often values occur — they just trade off detail differently.',
        cards: [
          { roman: 'I.', title: 'Match the graph to the data', body: 'A <strong>dot plot</strong> stacks a dot per value — best for discrete data. A <strong>stem-and-leaf plot</strong> keeps every real value visible and in order. A <strong>histogram</strong> groups continuous data into equal-width <strong>bins</strong>.', tags: ['Dot plot','Stem-and-leaf','Histogram'] },
          { roman: 'II.', title: 'Same skeleton, different detail', body: 'Every one of these graphs starts with an ordered number line and shows frequency or relative frequency — the real tradeoff is how much of the actual data you can still see once it’s graphed.', tags: ['Ordered number line','Frequency or relative frequency','Detail vs. simplicity'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">six words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'dot-plot', term: 'Dot plot', accent: 'population', body: 'Stacks one dot per data value above its spot on a number line — best for discrete data, where values are countable and typically whole numbers.' },
          { id: 'stem-and-leaf-plot', term: 'Stem-and-leaf plot', accent: 'population', body: 'Splits each value into a "stem" (every digit except the last) and a "leaf" (the last digit), keeping every real data value visible and in order.' },
          { id: 'split-stem', term: 'Split stem', accent: 'sample', body: 'Gives each stem two rows instead of one — leaves 0–4 in the first row, leaves 5–9 in the second — to spread out a stemplot that would otherwise be too crowded.' },
          { id: 'back-to-back', term: 'Back-to-back stem-and-leaf plot', accent: 'sample', body: 'Two stem-and-leaf plots sharing one middle column of stems — one group’s leaves read outward to the left, the other group’s leaves read outward to the right — used to compare two data sets.' },
          { id: 'histogram', term: 'Histogram', accent: 'population', body: 'Groups continuous data into equal-width bins and draws a bar for each. Bars touch with no gaps — unlike a bar chart, because the variable is quantitative, not categorical.' },
          { id: 'bin', term: 'Bin (interval)', accent: 'population', body: 'One equal-width chunk of a histogram’s number line, usually left-inclusive — a 150–200 bin includes 150 up to (but not including) 200.' }
        ]
      },

      /* ---------------- 3. READING THE GRAPHS ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 03 — Reading the Graphs',
        heading: 'Seven graphs, <span class="underline sample">one number line each</span>.',
        items: [
          {
            title: 'Weekly video-game hours (n = 14)',
            chartType: 'dotplot',
            data: [{value:0,count:1},{value:1,count:1},{value:3,count:1},{value:4,count:1},{value:5,count:1},{value:6,count:2},{value:7,count:1},{value:8,count:2},{value:9,count:1},{value:10,count:1},{value:12,count:1},{value:14,count:1}],
            opts: { min: 0, max: 14, step: 2, axisLabel: 'Hours of video games per week' },
            caption: '14 kids reported how many hours a week they play video games — discrete, whole-number data, so a dot plot works well. Most cluster from 6 to 9 hours.'
          },
          {
            title: 'Ball bearing diameters, cm (n = 16)',
            chartType: 'dotplot',
            data: [{value:0.94,count:1},{value:0.96,count:1},{value:0.97,count:1},{value:0.98,count:3},{value:0.99,count:2},{value:1.00,count:2},{value:1.01,count:2},{value:1.02,count:1},{value:1.03,count:1},{value:1.05,count:1},{value:1.06,count:1}],
            opts: { min: 0.94, max: 1.06, step: 0.02, decimals: 2, axisLabel: 'Diameter (cm)' },
            caption: 'A sample of manufactured ball bearings, measured to the nearest 0.01 cm. Even continuous data can be dot-plotted — diameters cluster from 0.98 to 1.00 cm.'
          },
          {
            title: 'Amount spent per shopper, $ (n = 14)',
            chartType: 'stemplot',
            stems: [
              {stem:'3', leaves:[4,4,5]}, {stem:'4', leaves:[]}, {stem:'5', leaves:[2]},
              {stem:'6', leaves:[1,1,2,5]}, {stem:'7', leaves:[0,3,8]}, {stem:'8', leaves:[2]},
              {stem:'9', leaves:[5]}, {stem:'10', leaves:[]}, {stem:'11', leaves:[]},
              {stem:'12', leaves:[]}, {stem:'13', leaves:[]}, {stem:'14', leaves:[]}, {stem:'15', leaves:[0]}
            ],
            keyText: 'Key: 3 | 4 = $34',
            caption: 'A stem-and-leaf plot keeps every actual value — you can read off that someone spent exactly $92, not just "somewhere in the 90s." The empty stems from $100–$149 create an obvious gap before the $150 outlier.'
          },
          {
            title: 'Quiz scores, split stem (n = 18)',
            chartType: 'stemplot',
            stems: [
              {stem:'6', leaves:[1,3,4]}, {stem:'6', leaves:[7,8]},
              {stem:'7', leaves:[0,1,2,4]}, {stem:'7', leaves:[6,7,9]},
              {stem:'8', leaves:[1,3]}, {stem:'8', leaves:[5,8]},
              {stem:'9', leaves:[1]}, {stem:'9', leaves:[5]}
            ],
            keyText: 'Key: 7 | 6 = 76. Each stem gets two rows: leaves 0–4 first, then leaves 5–9.',
            caption: 'Splitting each stem into two rows spreads the data out when a regular stemplot would bunch too many leaves onto one line — useful once a data set gets a little bigger.'
          },
          {
            title: 'Commute time, minutes — urban vs. rural (n = 20 each)',
            chartType: 'stemplot', splitSides: true, leftLabel: 'Urban', rightLabel: 'Rural',
            stems: [
              {stem:'1', left:[2,4,6,8], right:[]},
              {stem:'2', left:[1,1,3,5,6,7,8,9,9], right:[]},
              {stem:'3', left:[1,4,7], right:[0,1,2,3,4,5,7,9]},
              {stem:'4', left:[2,5], right:[0,1,1,2,3,4,4,6,8,8,9]},
              {stem:'5', left:[3,8], right:[1]}
            ],
            keyText: 'Key: 2 | 6 = 26 minutes — read outward from the shared stem in the middle.',
            caption: 'A back-to-back stem-and-leaf plot shares one stem column so two groups can be compared directly — urban commutes cluster in the teens and twenties, while rural commutes run mostly in the 30s and 40s.'
          },
          {
            title: 'Tree heights, ft — bin width 50 (n = 120)',
            chartType: 'histogram', mode: 'count',
            data: [{label:'100–150',value:3},{label:'150–200',value:30},{label:'200–250',value:26},{label:'250–300',value:50},{label:'300–350',value:11}],
            caption: 'Bars touch — this is a histogram, not a bar chart, because tree height is quantitative. Each bin is left-inclusive: the 250–300 bin holds every tree from 250 up to (but not including) 300 ft.'
          },
          {
            title: 'Same 120 trees — bin width 100',
            chartType: 'histogram', mode: 'count',
            data: [{label:'100–200',value:33},{label:'200–300',value:76},{label:'300–400',value:11}],
            caption: 'Same data, wider bins. Fewer, taller bars mean less fine detail — the 250–300 spike disappears into one big bin — but the overall shape still comes through. Bin width is a choice, as long as it stays consistent across the whole graph.'
          }
        ]
      },

      /* ---------------- 4. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 04 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'Dot plots, stem-and-leaf plots, and histograms all start with a number line ordered from ',
            { id:'b1', answer:'smallest to largest', options:['smallest to largest','largest to smallest','a random order'] },
            ', showing how often the quantitative variable takes on each value or falls into each interval.'
          ]},
          { segments: [
            'A dot plot works best for ',
            { id:'b2', answer:'discrete', options:['discrete','continuous','categorical'] },
            ' data, where values are countable and typically whole numbers.'
          ]},
          { segments: [
            'In a stem-and-leaf plot, the stem is every digit except the last, and the leaf is the ',
            { id:'b3', answer:'last digit', options:['last digit','first digit','decimal point'] },
            '; unlike a histogram, a stemplot lets you read off the ',
            { id:'b4', answer:'exact', options:['exact','rounded','average'] },
            ' data values.'
          ]},
          { segments: [
            'A ',
            { id:'b5', answer:'split stem', options:['split stem','back-to-back stemplot','histogram'] },
            ' gives each stem two rows to spread out a crowded data set, while a ',
            { id:'b6', answer:'back-to-back stemplot', options:['back-to-back stemplot','split stem','dot plot'] },
            ' shares one column of stems to compare two different groups.'
          ]},
          { segments: [
            'A histogram groups continuous data into equal-width ',
            { id:'b7', answer:'bins', options:['bins','categories','stems'] },
            '; the bars are drawn ',
            { id:'b8', answer:'touching', options:['touching','with gaps','overlapping'] },
            ' because the variable is quantitative, not categorical.'
          ]},
          { segments: [
            'Histogram bins are usually ',
            { id:'b9', answer:'left-inclusive', options:['left-inclusive','right-inclusive','symmetric'] },
            ', meaning a 150–200 bin includes 150 but stops just short of 200.'
          ]}
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Read the graph. <span class="underline teal">Answer the question.</span>',
        body: 'These reference the charts in Section 03 above. Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'The video-game dot plot above shows 14 kids’ weekly hours. What proportion of kids played at least 8 hours, and what does the shape tell you about where most kids fall?',
            fields: [
              { k: 'At least 8 hours', v: '8, 8, 9, 10, 12, 14 — 6 of the 14 kids, so 6/14 ≈ 0.43 or about 43%' },
              { k: 'Where most data falls', v: 'The tallest stacks are at 6 hours (2 kids) and 8 hours (2 kids); the values thin out heading toward 0 and toward 14' }
            ]
          },
          {
            q: 'The ball-bearing dot plot shows 16 diameters measured to the nearest 0.01 cm. What is the range of diameters, and roughly where do most of them fall?',
            fields: [
              { k: 'Range of the data', v: '0.94 cm to 1.06 cm — a spread of 0.12 cm' },
              { k: 'Where most values fall', v: 'Most diameters cluster from about 0.98 to 1.00 cm, where the dots stack the highest' }
            ]
          },
          {
            q: 'The stem-and-leaf plot of shopper spending shows one value all the way up at $150, separated from the rest of the data by several empty stems. Using only the graph, how would you describe this?',
            fields: [
              { k: 'Value in question', v: '$150 — the single leaf on the "15" stem' },
              { k: 'Why it stands out', v: 'Stems 10 through 14 ($100–$149) are completely empty — that gap is what marks $150 as a possible outlier, not just a "big" value' }
            ]
          },
          {
            q: 'Using the back-to-back stem-and-leaf plot of commute times, what proportion of the urban sample commutes at most 30 minutes, and what proportion of the rural sample commutes over 45 minutes?',
            fields: [
              { k: 'Urban, at most 30 min', v: 'Stems 1 and 2 (13 values total) are all ≤ 30 minutes — 13/20 = 65%' },
              { k: 'Rural, over 45 min', v: 'The upper half of the "4" stem (46, 48, 48, 49) plus the "5" stem (51) — 5/20 = 25%' }
            ]
          }
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'Countable, whole-number data stacked as dots above a number line.', term: 'Dot plot', detail: 'Best for discrete quantitative data.' },
          { prompt: 'A graph that splits each value into a "stem" and a "leaf" so every real data value stays visible.', term: 'Stem-and-leaf plot', detail: 'Unlike a histogram, you can read the exact values back out.' },
          { prompt: 'Giving each stem two rows — leaves 0–4, then leaves 5–9 — to spread out a crowded stemplot.', term: 'Split stem', detail: 'Same data, just more rows to work with.' },
          { prompt: 'Two stemplots sharing one middle column of stems, one group’s leaves reading left and the other’s reading right.', term: 'Back-to-back stem-and-leaf plot', detail: 'Used to compare two data sets directly.' },
          { prompt: 'Bars touching with no gaps, grouping a continuous variable into equal-width intervals.', term: 'Histogram', detail: 'Looks like a bar chart, but it is not one — the variable is quantitative.' },
          { prompt: 'One equal-width chunk of a histogram’s number line, usually left-inclusive.', term: 'Bin (interval)', detail: 'A 150–200 bin holds 150 up to just under 200.' },
          { prompt: 'You only have a histogram of a data set — no stemplot, no raw list. Can you recover the exact minimum value?', term: 'No — histograms hide individual values', detail: 'You only know how many values fell in a bin, not what they actually were.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'Which graph is best suited for discrete, countable, whole-number data?', opts: ['Histogram', 'Dot plot', 'Pie chart', 'Bar chart'], correct: 1, exp: 'Dot plots are built for discrete quantitative data — one dot stacked per repeated value.' },
          { q: 'In a stem-and-leaf plot, the leaf represents:', opts: ['Every digit except the last', 'Only the last digit of the value', 'The frequency of that value', 'The bin width'], correct: 1, exp: 'The stem is every digit except the last; the leaf is just the final digit.' },
          { q: 'What is the main purpose of splitting a stem into two rows?', opts: ['To hide outliers', 'To spread out a data set that would otherwise be too crowded on one stem', 'To combine two different variables', 'To convert it into a histogram'], correct: 1, exp: 'A split stem gives leaves 0–4 and leaves 5–9 their own rows so a crowded stemplot becomes easier to read.' },
          { q: 'A back-to-back stem-and-leaf plot is most useful for:', opts: ['Displaying one categorical variable', 'Comparing two quantitative data sets that share the same stems', 'Finding the mean of a data set', 'Making a pie chart'], correct: 1, exp: 'Back-to-back stemplots share a stem column so two groups can be compared side-by-side.' },
          { q: 'Why is a histogram not considered a bar chart, even though it looks similar?', opts: ['A histogram never has bars', 'A histogram displays a quantitative variable grouped into bins, not a categorical variable', 'A histogram uses only one color', 'A histogram cannot show frequency'], correct: 1, exp: 'A bar chart is for categorical data; the moment bars represent bins of a quantitative variable, it’s a histogram.' },
          { q: 'In a histogram, what does "left-inclusive" mean for a 150–200 bin?', opts: ['It includes 200 but not 150', 'It includes both 150 and 200', 'It includes 150 up to but not including 200', 'It includes neither endpoint'], correct: 2, exp: 'Left-inclusive bins include the left edge and stop just short of the right edge.' },
          { q: 'A dot plot shows the exact same 14 values as a jumbled list. What advantage does the dot plot have?', opts: ['It hides individual values for privacy', 'It lets you instantly see the shape and clustering of the distribution', 'It automatically calculates the mean', 'It removes any outliers'], correct: 1, exp: 'A dot plot turns a list of numbers into a visual shape you can read at a glance.' },
          { q: 'If a stem-and-leaf plot has several completely empty stems between the bulk of the data and one extreme value, that extreme value is likely:', opts: ['A typo', 'The mode', 'A possible outlier', 'The median'], correct: 2, exp: 'A big gap separating one value from the rest is the visual signature of a possible outlier.' },
          { q: 'Changing a histogram’s bin width from 50 to 100 while keeping the same data will:', opts: ['Change the underlying data values', 'Combine bars into fewer, wider bins, showing less fine detail', 'Always increase the total count', 'Turn it into a dot plot'], correct: 1, exp: 'Wider bins group more values together per bar, smoothing out fine detail without changing the data itself.' },
          { q: 'Which of these is an advantage a stem-and-leaf plot has over a histogram?', opts: ['It can display more than one variable at once', 'It shows every actual data value, not just how many fell in a range', 'It never needs a key', 'It works better for very large data sets'], correct: 1, exp: 'A histogram only tells you a count per bin; a stemplot preserves every real value.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Match the graph to the data', body: 'A <strong>dot plot</strong> suits discrete data, a <strong>stem-and-leaf plot</strong> keeps every exact value, and a <strong>histogram</strong> groups continuous data into bins.' },
          { num: 'ii.', title: 'Same number line, different detail', body: 'All three order data smallest to largest — a stemplot shows everything, a histogram trades individual values for a cleaner shape.' },
          { num: 'iii.', title: 'A histogram is not a bar chart', body: 'Bars touch because the variable is quantitative and continuous, not categorical — spaces between bars would only appear where a bin is truly empty.' },
          { num: 'iv.', title: 'Split and back-to-back stems add flexibility', body: 'Split stems spread out one crowded data set; back-to-back stems let you compare two data sets on shared stems.' },
          { num: 'v.', title: 'Bin width is a choice, not the data', body: 'The same quantitative data can look different at different bin widths, but the underlying values never change — empty bins or stems are what reveal gaps and possible outliers.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A dot plot is best suited for which type of data?', opts: ['Categorical data', 'Discrete, countable quantitative data', 'Data with no numeric value', 'Data that must be continuous and never whole numbers'], correct: 1, exp: 'Dot plots stack a dot per repeated whole-number value — ideal for discrete quantitative data.' },
        { q: 'In a stem-and-leaf plot showing exam scores, the stem represents the tens digit. A leaf of "7" on the "8" stem represents the value:', opts: ['87', '78', '8.7', '780'], correct: 0, exp: 'Stem 8 (tens digit) plus leaf 7 (ones digit) makes 87.' },
        { q: 'Why might a data set use a split stem instead of a regular stem-and-leaf plot?', opts: ['The data is categorical', 'There are too many leaves piling up onto a single stem', 'To make the graph shorter', 'Split stems are required by AP Statistics rules'], correct: 1, exp: 'Splitting a stem into two rows spreads out leaves that would otherwise be crowded onto one line.' },
        { q: 'A back-to-back stem-and-leaf plot is designed to:', opts: ['Show one variable at four different times', 'Compare two data sets side-by-side using shared stems', 'Replace the need for a key', 'Only work with categorical data'], correct: 1, exp: 'Back-to-back stemplots share a middle stem column so two groups can be read and compared directly.' },
        { q: 'A histogram’s bars are drawn touching with no gaps because:', opts: ['It saves ink', 'The variable is quantitative, and the bins represent a continuous, ordered number line', 'It is a rule with no real reason', 'It is actually a bar chart in disguise'], correct: 1, exp: 'Touching bars reflect that the bins tile a continuous number line — a gap would only appear if a bin held zero data.' },
        { q: 'A histogram bin is labeled "50–100." Using the left-inclusive convention, a value of exactly 100 would fall into:', opts: ['The 50–100 bin', 'The next bin up (100–150)', 'Neither bin', 'Both bins'], correct: 1, exp: 'Left-inclusive bins stop just short of their right edge, so exactly 100 belongs to the next bin.' },
        { q: 'A histogram of family-room sizes has bins 100–150 ft² (3 houses), 150–200 ft² (6 houses), 200–250 ft² (1 house), 250–300 ft² (7 houses), and 300–350 ft² (3 houses). How many houses have a family room between 250 and 300 ft²?', opts: ['3', '6', '7', '1'], correct: 2, exp: 'Read the bar directly: the 250–300 ft² bin holds 7 houses.' },
        { q: 'Using that same family-room histogram (n = 20 total), what proportion of houses have a family room between 150 and 200 ft²?', opts: ['3/20 = 15%', '6/20 = 30%', '7/20 = 35%', '1/20 = 5%'], correct: 1, exp: '6 houses fall in the 150–200 ft² bin, and 6/20 = 30%.' },
        { q: 'In that family-room histogram, how many houses have a family room of 250 ft² or more?', opts: ['7', '3', '10', '1'], correct: 2, exp: '7 (250–300 ft²) plus 3 (300–350 ft²) makes 10 houses.' },
        { q: 'A histogram of tip amounts has bins $0–$2.50 (25 tips), $2.50–$5 (22 tips), $5–$7.50 (10 tips), and $7.50–$10 (3 tips). How many tips were less than $5?', opts: ['25', '22', '47', '60'], correct: 2, exp: '25 + 22 = 47 tips fell below $5.' },
        { q: 'Using that same tips histogram (n = 60 total), what proportion of tips were $5 or more?', opts: ['13/60 ≈ 21.7%', '47/60 ≈ 78.3%', '10/60 ≈ 16.7%', '3/60 = 5%'], correct: 0, exp: '60 − 47 = 13 tips were $5 or more, and 13/60 ≈ 21.7%.' },
        { q: 'What is the width of each bin in that tips histogram?', opts: ['$1', '$2.50', '$5', '$10'], correct: 1, exp: 'Each bin spans $2.50 (e.g. $0–$2.50, $2.50–$5, and so on).' },
        { q: 'A stem-and-leaf plot has several completely empty stems between the bulk of the values and one extreme value far above them. This pattern most likely signals:', opts: ['A typo in the data', 'A possible outlier', 'That the data is categorical', 'That a histogram would be impossible to build'], correct: 1, exp: 'A gap separating one value from the rest of the data is the visual sign of a possible outlier.' },
        { q: 'Which of the following is true about dot plots?', opts: ['They can only be used for categorical data', 'Each dot represents one data value, stacked when values repeat', 'They never show repeated values', 'They require a stem and a leaf'], correct: 1, exp: 'Repeated values stack as multiple dots directly above that point on the number line.' },
        { q: 'A researcher has the same data set graphed two ways: once as a stem-and-leaf plot, once as a histogram. Which graph lets you recover every original data value exactly?', opts: ['The histogram', 'The stem-and-leaf plot', 'Neither', 'Both equally'], correct: 1, exp: 'A stem-and-leaf plot preserves every real data value; a histogram only shows counts per bin.' },
        { q: 'Changing a histogram’s bin width from 20 to 50 will typically:', opts: ['Delete data from the sample', 'Result in fewer, wider bars that show less fine detail', 'Always double the total count', 'Convert the histogram into a pie chart'], correct: 1, exp: 'Wider bins combine more values per bar, trading detail for a simpler shape — the data itself is unchanged.' },
        { q: 'A data set of shoe sizes (whole and half sizes only) and a data set of exact race times (measured to the hundredth of a second) — which graph pairing makes the most sense?', opts: ['Race times as a dot plot, shoe sizes as a histogram', 'Shoe sizes as a dot plot (few repeated discrete values), race times as a histogram (many unique continuous values)', 'Both should be pie charts', 'Neither can be graphed'], correct: 1, exp: 'Shoe sizes repeat often and are discrete, suiting a dot plot; race times are continuous with few exact repeats, suiting a histogram.' },
        { q: 'In a back-to-back stem-and-leaf plot comparing two towns’ commute times, Town A’s leaves (on the left) are read right-to-left toward the shared stem. Why?', opts: ['It is a typo', 'So both sides read outward from the shared stem in increasing order, keeping the plot legible', 'Because Town A’s data is backwards', 'Because Town A has fewer observations'], correct: 1, exp: 'Reading outward from the shared stem keeps both sides in increasing order and the plot easy to read.' },
        { q: 'What single feature do dot plots, stem-and-leaf plots, and histograms all share?', opts: ['They all require a key', 'They all group data into exactly five bins', 'They are all built on a number line ordered from smallest to largest', 'They can only be used for categorical variables'], correct: 2, exp: 'Every one of these graphs is built on an ordered quantitative number line.' },
        { q: 'A histogram has a tall bar from 0–10 minutes, a shorter bar from 10–20, an even shorter one from 20–30, and bars that keep shrinking as you move right. What would a stem-and-leaf plot or dot plot of the same data most likely show?', opts: ['A shape with most data concentrated near the low end and a tail stretching toward higher values', 'A perfectly uniform shape', 'No data at all near zero', 'Only categorical labels'], correct: 0, exp: 'Bars shrinking as values increase describes data piled up low with a tail extending to the right — the same shape would show up as clustering near the low end in a dot plot or stemplot.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.6 — Describing Distributions of a Quantitative Variable
   Source: course transcript (Topic 1.6 lecture)
   ============================================ */

registerChapters({
  '1-6': {
    id: '1-6',
    code: 'Topic 1.6',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Describing Distributions of a Quantitative Variable',
    cardSummary: 'Shape, center, spread, and outliers — turning a dot plot, stem-and-leaf plot, or histogram into a full, in-context sentence.',
    heroTitle: 'Give the shape<br>a <em>sentence</em>.',
    heroSub: 'Symmetric, skewed, uniform, unimodal, bimodal — learn the shape vocabulary, then practice writing full-sentence descriptions of center and spread without ever starting with a bare "it."',
    source: 'Topic 1.6 course video',
    estTime: '~25–35 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: '<span class="underline teal">Four things</span>, every single time.',
        body: 'Describing a quantitative distribution means addressing its shape, center, and variability — and calling out anything unusual like outliers, gaps, or clusters — always in full sentences, in context.',
        cards: [
          { roman: 'I.', title: 'Shape, center, spread, unusual features', body: 'Every description touches <strong>shape</strong> (symmetric, skewed, uniform, unimodal, bimodal), a rough <strong>center</strong>, a rough <strong>spread</strong>, and any <strong>outliers, gaps, or clusters</strong> you notice.', tags: ['Shape','Center','Spread','Outliers'] },
          { roman: 'II.', title: 'Rough numbers, real sentences', body: 'Right now, just eyeball it — one number for center, an interval for spread. Precise formulas come next topic. But never start a sentence with a bare "it" — name the variable and context immediately.', tags: ['Rough estimate','Full sentences','Never start with "it"'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">eight words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'symmetric', term: 'Symmetric', accent: 'population', body: 'The left half of the distribution is approximately a mirror image of the right half — also called bell-shaped or mound-shaped when it peaks in the middle.' },
          { id: 'skewed-right', term: 'Skewed right (positively skewed)', accent: 'sample', body: 'A longer tail stretches toward the higher values; most of the data bunches up on the left.' },
          { id: 'skewed-left', term: 'Skewed left (negatively skewed)', accent: 'sample', body: 'A longer tail stretches toward the lower values; most of the data bunches up on the right.' },
          { id: 'uniform', term: 'Uniform', accent: 'population', body: 'Every interval holds roughly the same amount of data — no strong peak, and no real tail on either side.' },
          { id: 'unimodal', term: 'Unimodal', accent: 'population', body: 'One general area where the data peaks — even if that peak spans two or three adjacent bins, as long as they’re connected.' },
          { id: 'bimodal', term: 'Bimodal', accent: 'sample', body: 'Two clearly separated peaks, usually with a dip or gap between them — often a sign that two different sub-groups got mixed into one data set.' },
          { id: 'gap-cluster', term: 'Gap and cluster', accent: 'sample', body: 'A gap is a complete absence of data across an interval; a gap naturally splits the rest of the data into clusters on either side of it.' },
          { id: 'outlier-rough', term: 'Outlier (visual)', accent: 'population', body: 'A value clearly separated from the rest of the data by a gap. For now, this is a rough, by-eye judgment — formal rules come next topic.' }
        ]
      },

      /* ---------------- 3. SEEING THE SHAPES ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 03 — Seeing the Shapes',
        heading: 'Seven shapes, <span class="underline sample">seven vocabularies</span>.',
        items: [
          {
            title: 'A textbook symmetric, unimodal shape',
            chartType: 'dotplot',
            data: [{value:20,count:1},{value:22,count:2},{value:24,count:3},{value:26,count:4},{value:28,count:5},{value:30,count:6},{value:32,count:5},{value:34,count:4},{value:36,count:3},{value:38,count:2},{value:40,count:1}],
            opts: { min: 20, max: 40, step: 2 },
            caption: 'The tallest stack sits at the center (30), and both sides thin out at about the same rate — roughly symmetric and unimodal.'
          },
          {
            title: 'Skewed right (n = 95)',
            chartType: 'histogram', mode: 'count',
            data: [{label:'0–10',value:35},{label:'10–20',value:25},{label:'20–30',value:15},{label:'30–40',value:10},{label:'40–50',value:6},{label:'50–60',value:3},{label:'60–70',value:1}],
            caption: 'The tallest bar is on the left, and the bars get steadily shorter to the right — a long tail stretching toward the higher values means skewed right.'
          },
          {
            title: 'Skewed left (n = 95)',
            chartType: 'histogram', mode: 'count',
            data: [{label:'0–10',value:1},{label:'10–20',value:3},{label:'20–30',value:6},{label:'30–40',value:10},{label:'40–50',value:15},{label:'50–60',value:25},{label:'60–70',value:35}],
            caption: 'The mirror image of skewed right — the tallest bar is on the right, with a long tail stretching toward the lower values.'
          },
          {
            title: 'Bimodal, with a gap',
            chartType: 'dotplot',
            data: [{value:5,count:2},{value:6,count:3},{value:7,count:2},{value:20,count:2},{value:21,count:3},{value:22,count:2}],
            opts: { min: 5, max: 22, step: 1 },
            caption: 'Two clearly separated peaks (around 6 and around 21) with a complete gap from 8 to 19 in between — bimodal, with a low cluster and a high cluster.'
          },
          {
            title: 'Heights of a random sample of buildings, ft (n = 28)',
            chartType: 'stemplot',
            stems: [
              {stem:'6', leaves:[8]}, {stem:'7', leaves:[]}, {stem:'8', leaves:[5]},
              {stem:'9', leaves:[2,6]}, {stem:'10', leaves:[1,4,8]}, {stem:'11', leaves:[0,3,5,7,9]},
              {stem:'12', leaves:[1,2,3,4,6,8,9]}, {stem:'13', leaves:[0,2,5,7]},
              {stem:'14', leaves:[1,4,8]}, {stem:'15', leaves:[3]}, {stem:'16', leaves:[8]}
            ],
            keyText: 'Key: 9 | 2 = 92 ft',
            caption: 'Roughly symmetric and unimodal, peaking around 110–140 ft — but the building at 68 ft sits behind a completely empty stem, making it a possible low outlier and pulling this slightly toward skewed left.'
          },
          {
            title: 'Largemouth bass lengths, in. (n = 44)',
            chartType: 'histogram', mode: 'count',
            data: [{label:'5–10',value:2},{label:'10–15',value:5},{label:'15–20',value:9},{label:'20–25',value:12},{label:'25–30',value:9},{label:'30–35',value:5},{label:'35–40',value:2}],
            caption: 'A clean, roughly symmetric, unimodal shape peaking at 20–25 inches — no gaps, no separated values, no apparent outliers.'
          },
          {
            title: 'Grocery store spending, $ (n = 65)',
            chartType: 'histogram', mode: 'count',
            data: [{label:'0–50',value:40},{label:'50–100',value:15},{label:'100–150',value:5},{label:'150–200',value:2},{label:'200–250',value:1},{label:'250–300',value:0},{label:'300–350',value:0},{label:'350–400',value:0},{label:'400–450',value:0},{label:'450–500',value:2}],
            caption: 'Strongly skewed right — most shoppers spent under $100, and the $450–$500 group sits behind four completely empty bins, marking it as likely high outliers.'
          }
        ]
      },

      /* ---------------- 4. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 04 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A complete description of a quantitative distribution addresses its ',
            { id:'b1', answer:'shape, center, and variability', options:['shape, center, and variability','mean and standard deviation only','sample size and population'] },
            ', along with any unusual features like outliers, gaps, or clusters.'
          ]},
          { segments: [
            'When a distribution’s left half is roughly a mirror image of its right half, it is called ',
            { id:'b2', answer:'symmetric', options:['symmetric','skewed','uniform'] },
            '.'
          ]},
          { segments: [
            'A distribution with a long tail stretching toward the higher values, and most of the data bunched on the left, is ',
            { id:'b3', answer:'skewed right', options:['skewed right','skewed left','bimodal'] },
            '.'
          ]},
          { segments: [
            'A distribution with one clear peak is ',
            { id:'b4', answer:'unimodal', options:['unimodal','bimodal','uniform'] },
            ', while one with two clearly separated peaks is ',
            { id:'b5', answer:'bimodal', options:['bimodal','unimodal','skewed'] },
            '.'
          ]},
          { segments: [
            'A complete absence of data across an interval is called a ',
            { id:'b6', answer:'gap', options:['gap','cluster','outlier'] },
            ', and it naturally splits the data into ',
            { id:'b7', answer:'clusters', options:['clusters','gaps','bins'] },
            ' on either side.'
          ]},
          { segments: [
            'When describing a distribution in a full sentence, you should never start with the pronoun "it" — instead, name the ',
            { id:'b8', answer:'variable and context', options:['variable and context','sample size','mean'] },
            ' right away, e.g. "The distribution of heights in feet of this sample of buildings is..."'
          ]}
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Read the graph. <span class="underline teal">Write the sentence.</span>',
        body: 'These reference the charts in Section 03 above. Click each one open, write your own description first, then check the answer.',
        items: [
          {
            q: 'Describe the distribution of building heights shown in the stem-and-leaf plot above (heights of a random sample of buildings, in feet).',
            fields: [
              { k: 'Shape', v: 'Roughly symmetric and unimodal, though slightly skewed left due to a low outlier' },
              { k: 'Center', v: 'Approximately 125–128 feet' },
              { k: 'Spread', v: 'Heights spread from 68 to 168 feet, but the majority of buildings are 110 to 140 feet tall' },
              { k: 'Outliers', v: 'The building at 68 feet is a possible low outlier — it’s separated from the rest of the data by a completely empty stem' }
            ]
          },
          {
            q: 'Describe the distribution of largemouth bass lengths (inches) shown in the histogram above.',
            fields: [
              { k: 'Shape', v: 'Roughly symmetric and unimodal' },
              { k: 'Center', v: 'Approximately 22 inches' },
              { k: 'Spread', v: 'Lengths spread from about 5 to 40 inches, but the majority of fish are 15 to 30 inches' },
              { k: 'Outliers', v: 'There do not appear to be any outliers' }
            ]
          },
          {
            q: 'Describe the distribution of grocery spending shown in the histogram above.',
            fields: [
              { k: 'Shape', v: 'Strongly skewed right and unimodal' },
              { k: 'Center', v: 'Approximately $50' },
              { k: 'Spread', v: 'Spending ranges from $0 to $500, but the vast majority of shoppers spent under $100' },
              { k: 'Outliers', v: 'The $450–$500 group is separated from the rest by several empty bins — likely one or more high outliers' }
            ]
          },
          {
            q: 'Two catapults each launched 40 ping-pong balls; both distance dot plots are roughly symmetric and unimodal, but Catapult A’s distances range from about 120 to 150 cm while Catapult B’s range from about 133 to 144 cm. Compare their centers and their spread.',
            fields: [
              { k: 'Centers', v: 'Both are close, roughly 137–138 cm — neither catapult is dramatically more accurate on average' },
              { k: 'Spread', v: 'Catapult A is far more spread out (120–150 cm, a 30 cm range) than Catapult B (133–144 cm, an 11 cm range)' },
              { k: 'Takeaway', v: 'A similar center but very different consistency — always compare shape, center, AND spread, not just one of the three' }
            ]
          }
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'Left half is roughly a mirror image of the right half.', term: 'Symmetric', detail: 'Also called bell-shaped or mound-shaped.' },
          { prompt: 'Long tail toward the higher values, most data bunched on the left.', term: 'Skewed right', detail: 'Also called positively skewed.' },
          { prompt: 'Long tail toward the lower values, most data bunched on the right.', term: 'Skewed left', detail: 'Also called negatively skewed.' },
          { prompt: 'Every interval holds roughly the same amount of data.', term: 'Uniform', detail: 'No strong peak, no real tail either direction.' },
          { prompt: 'One general peak, even if it spans two or three connected bins.', term: 'Unimodal', detail: 'The most common shape description.' },
          { prompt: 'Two clearly separated peaks, usually with a dip in between.', term: 'Bimodal', detail: 'Often hints at two different sub-groups mixed together.' },
          { prompt: 'A value cut off from the rest of the data by a complete gap.', term: 'Outlier (visual)', detail: 'For now, just a by-eye judgment call — formal rules come next topic.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'A distribution’s left half is roughly a mirror image of its right half. This shape is called:', opts: ['Skewed', 'Symmetric', 'Uniform', 'Bimodal'], correct: 1, exp: 'A mirror-image left and right half is the definition of a symmetric shape.' },
          { q: 'A distribution with most data bunched on the left and a long tail stretching toward higher values is:', opts: ['Skewed left', 'Symmetric', 'Skewed right', 'Uniform'], correct: 2, exp: 'A tail toward the higher values means skewed right, even though the bulk of the data sits on the left.' },
          { q: 'A distribution with two clearly separated peaks is described as:', opts: ['Unimodal', 'Bimodal', 'Uniform', 'Symmetric'], correct: 1, exp: 'Two clearly separated peaks is the definition of bimodal.' },
          { q: 'A distribution where every interval holds roughly the same amount of data, with no real peak or tail, is:', opts: ['Skewed', 'Uniform', 'Bimodal', 'Symmetric only'], correct: 1, exp: 'Roughly equal amounts across every interval, with no strong peak, describes a uniform distribution.' },
          { q: 'A complete absence of data across an interval is called a:', opts: ['Cluster', 'Outlier', 'Gap', 'Mode'], correct: 2, exp: 'A gap is a stretch of the number line with zero data in it.' },
          { q: 'When describing a distribution’s center at this stage in the course, you should:', opts: ['Give an exact formula-based value', 'Give one rough number that best represents the middle of the data', 'Always say the center is exactly the mean', 'Avoid mentioning a center at all'], correct: 1, exp: 'This topic keeps things general — one reasonable, rough number for the center is enough; exact methods come next.' },
          { q: 'When describing spread at this stage, a good sentence mentions:', opts: ['Only the single highest value', 'The interval where the data ranges, plus where the majority falls', 'Only the standard deviation', 'Nothing — spread is described in the next topic only'], correct: 1, exp: 'A solid spread description gives the overall range and also calls out where most of the data actually sits.' },
          { q: 'Why shouldn’t a distribution description start with the word "it"?', opts: ['"It" is grammatically incorrect in all cases', 'The pronoun has nothing defined yet — you should name the variable and context first', 'Descriptions must be exactly one word long', 'AP Statistics forbids pronouns entirely'], correct: 1, exp: 'Starting with "it" leaves the reader guessing what "it" refers to — name the variable and context up front instead.' },
          { q: 'A stem-and-leaf plot shows the bulk of the data from 100–140, then several completely empty stems, then one value at 250. This value is best described as:', opts: ['The median', 'A possible outlier', 'Proof the data is uniform', 'The mode'], correct: 1, exp: 'A value separated from the rest of the data by several empty stems is exactly the visual signature of a possible outlier.' },
          { q: 'Two dot plots have almost the same center, but Data Set A ranges from 10–90 while Data Set B ranges from 45–55. Which statement is correct?', opts: ['They have the same spread', 'Data Set A is far more spread out than Data Set B, even though their centers are similar', 'Data Set B must be skewed', 'Centers cannot be compared if spreads differ'], correct: 1, exp: 'Center and spread are separate ideas — two data sets can share a similar center while having very different amounts of spread.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Four things, every description', body: 'Shape, center, spread, and any unusual features like outliers, gaps, or clusters — always in context.' },
          { num: 'ii.', title: 'Shape has a vocabulary', body: 'Symmetric, skewed left, skewed right, uniform, unimodal, bimodal — learn to recognize each of these by eye.' },
          { num: 'iii.', title: 'Center and spread are still rough here', body: 'One number for center, an interval (plus a "majority" interval) for spread — exact numerical methods arrive next topic.' },
          { num: 'iv.', title: 'Gaps create clusters, and hint at outliers', body: 'A complete absence of data splits the distribution and often flags an extreme value sitting just past the gap.' },
          { num: 'v.', title: 'Never start with "it"', body: 'Name the variable and its context immediately — a bare pronoun has nothing to refer to yet.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A distribution’s shape shows one clear peak with roughly equal tails on both sides. This is best described as:', opts: ['Skewed and bimodal', 'Roughly symmetric and unimodal', 'Uniform and skewed', 'Bimodal and uniform'], correct: 1, exp: 'One clear peak with roughly equal tails on both sides is the picture of a symmetric, unimodal shape.' },
        { q: 'A histogram of commute times has a tall bar near 10–20 minutes, and each bar gets shorter as commute time increases, with a long thin bar all the way out at 80–90 minutes. This distribution is:', opts: ['Skewed left', 'Uniform', 'Skewed right', 'Bimodal'], correct: 2, exp: 'The bulk of the data is low, with a tail stretching toward the higher commute times — that is skewed right.' },
        { q: 'In that same commute-time histogram, where would you expect the "long thin bar" description to apply?', opts: ['The tail, toward the higher values', 'The peak, near the center', 'Every bar equally', 'Only the very first bar'], correct: 0, exp: 'A long thin bar describes the tail of a skewed distribution — few observations stretching far from the bulk of the data.' },
        { q: 'A dot plot shows two separate clusters of dots — one from 2 to 5, and another from 20 to 23 — with a complete gap from 6 to 19. This shape is:', opts: ['Uniform', 'Unimodal', 'Bimodal', 'Symmetric only'], correct: 2, exp: 'Two clearly separated clusters of data is the definition of bimodal.' },
        { q: 'In that same dot plot, the empty interval from 6 to 19 is called a:', opts: ['Cluster', 'Mode', 'Gap', 'Center'], correct: 2, exp: 'A stretch of the number line with zero data is a gap.' },
        { q: 'A distribution has bars of roughly equal height across every interval, with no real peak. This is:', opts: ['Skewed right', 'Uniform', 'Bimodal', 'Skewed left'], correct: 1, exp: 'Roughly equal amounts of data in every interval, with no dominant peak, describes a uniform distribution.' },
        { q: 'For a roughly symmetric, unimodal distribution centered around 50, with data ranging from 20 to 80, which of these is the most reasonable description of the center?', opts: ['Approximately 50', 'Approximately 20', 'Approximately 80', 'There is no way to estimate a center'], correct: 0, exp: 'For a symmetric distribution, the center sits near the middle of the range — here, about 50.' },
        { q: 'A histogram of test scores has most of its data clustered tightly from 80–100, with a few completely empty bars, then one isolated bar at 20–30. How should this be described?', opts: ['Uniform, with no unusual features', 'Roughly symmetric for the bulk of the data, with a possible low outlier', 'Bimodal, with two equal peaks', 'Skewed right, because outliers always create skew'], correct: 1, exp: 'The main cluster (80–100) is fairly tight and roughly symmetric on its own; the single isolated low bar is best called a possible outlier, not a sign of overall skew.' },
        { q: 'A student says "It is skewed right" as their entire description of a distribution. What is the issue with starting this way?', opts: ['Nothing, it is fine to start this way', 'The pronoun "it" has not been defined yet — the variable and context should be named first', 'Skewed right descriptions are always wrong', 'Sentences about shape cannot use the word "right"'], correct: 1, exp: 'A description should name the variable and context immediately, rather than opening with an undefined "it."' },
        { q: 'Which of the following is an example of correctly describing a distribution in context?', opts: ['"It is skewed."', '"Skewed."', '"The distribution of exam scores for this class is skewed right."', '"Skewed right, definitely."'], correct: 2, exp: 'Only this option names the actual variable (exam scores) and context (this class) along with the shape.' },
        { q: 'A distribution of house prices is described as: center around $250,000, prices range from $120,000 to $900,000, but the majority fall between $200,000 and $300,000, with one home at $900,000 separated by a gap. What shape best fits this description?', opts: ['Uniform', 'Skewed right with a possible high outlier', 'Skewed left', 'Bimodal'], correct: 1, exp: 'Most data bunched at the lower end with one extreme high value separated by a gap describes skewed right with a possible high outlier.' },
        { q: 'Why is it useful to mention BOTH the full range of a distribution AND where the majority of the data falls?', opts: ['It is not useful — only the full range matters', 'The full range alone can be misleading if it is stretched by an outlier; the "majority" interval shows where the data is really concentrated', 'The majority interval is always required by the AP formula sheet', 'Only one of the two can ever be reported'], correct: 1, exp: 'A single outlier can stretch the full range far beyond where most of the data actually sits, so reporting both paints a much clearer picture.' },
        { q: 'A dot plot has one peak, and the data trails off gradually and roughly equally in both directions from that peak. This shape is best called:', opts: ['Bimodal', 'Roughly symmetric and unimodal', 'Skewed right', 'Uniform'], correct: 1, exp: 'One peak with roughly equal tails on both sides is a symmetric, unimodal shape.' },
        { q: 'A histogram has two separate humps of roughly equal height, with a clear dip between them. This shape most likely reflects:', opts: ['A single homogeneous group', 'Two different sub-groups mixed into one data set', 'A data-entry error that should be ignored', 'A uniform distribution'], correct: 1, exp: 'A bimodal shape often signals that two distinct sub-groups got combined into a single data set.' },
        { q: 'A stem-and-leaf plot’s tallest cluster of leaves is on stems 12 and 13, with the data thinning out steadily on stems below 12 and above 13. What is the shape?', opts: ['Bimodal', 'Roughly symmetric and unimodal, peaking around 120–139', 'Uniform', 'Impossible to determine shape from a stemplot'], correct: 1, exp: 'A single connected peak with data thinning out on both sides is roughly symmetric and unimodal — stemplots absolutely can show shape.' },
        { q: 'A weather app shows daily high temperatures for a month, roughly evenly split among "cool," "mild," and "hot" days with about the same count in each range. This distribution is best described as:', opts: ['Skewed right', 'Uniform', 'Bimodal', 'Symmetric with a sharp peak'], correct: 1, exp: 'Roughly equal counts across the ranges, with no dominant peak, describes a uniform distribution.' },
        { q: 'A distribution described as "spreads from 10 to 90, but the majority of data is from 40 to 50" is most likely:', opts: ['Uniform', 'Skewed, with a longer tail on at least one side', 'Perfectly symmetric with no tail on either side', 'Bimodal with two equal peaks'], correct: 1, exp: 'A tight majority interval with a much wider overall range usually signals a tail stretching off to one side — skew, not uniform or perfect symmetry.' },
        { q: 'Two data sets have the same center of about 30. Data Set X ranges from 25 to 35; Data Set Y ranges from 0 to 60. Which statement is correct?', opts: ['They have identical spread since centers match', 'Data Set Y is far more spread out than Data Set X, despite the similar center', 'Data Set X must be skewed', 'Center and spread always match'], correct: 1, exp: 'Center and spread describe different things — two data sets can share a center while having very different amounts of variability.' },
        { q: 'A distribution’s stem-and-leaf plot has a value completely isolated by several empty stems from the rest of a tightly clustered data set. The best description mentions:', opts: ['Only the center, nothing else', 'The overall shape, center, and spread, plus a note about the possible outlier', 'Only that the data is symmetric', 'Nothing, isolated values should be deleted before describing the data'], correct: 1, exp: 'A complete description always covers shape, center, and spread, and calls out any possible outliers rather than ignoring or deleting them.' },
        { q: 'Which of these is the most complete, properly-in-context description of a distribution?', opts: ['"Skewed right, center 50."', '"The distribution of weekly grocery spending for this sample is skewed right, centered around $50, spreading from $0 to $500 with the majority under $100, and a possible high outlier near $475."', '"It spreads out a lot."', '"$50 is the answer."'], correct: 1, exp: 'This is the only option that names the variable and context, and covers shape, center, spread, and a possible outlier in full sentences.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.7 — Summary Statistics for a Quantitative Variable
   Source: course transcript (Topic 1.7 lecture)
   ============================================ */

registerChapters({
  '1-7': {
    id: '1-7',
    code: 'Topic 1.7',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Summary Statistics for a Quantitative Variable',
    cardSummary: 'Mean, median, five-number summary, percentiles, range, IQR, and standard deviation — plus two ways to flag an outlier by the numbers, not just by eye.',
    heroTitle: 'Put a <em>number</em><br>on the shape.',
    heroSub: 'Topic 1.6 eyeballed shape, center, and spread. Now it gets exact — mean vs. median, the five-number summary, percentiles, range vs. IQR vs. standard deviation, and two formulas for spotting an outlier.',
    source: 'Topic 1.7 course video',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Center: <span class="underline teal">mean vs. median</span>.',
        body: 'Statistics turn "roughly symmetric, centered around 50" into exact numbers — but which number you should trust depends entirely on shape and outliers.',
        cards: [
          { roman: 'I.', title: 'Two centers, two personalities', body: 'The <strong>mean</strong> (x̄ / μ) balances every deviation but gets pulled by outliers. The <strong>median</strong> splits the data exactly in half and doesn’t care what the extreme values actually are.', tags: ['Mean — balancing point','Median — resistant'] },
          { roman: 'II.', title: 'Position and spread get exact too', body: 'The five-number summary and percentiles mark <strong>position</strong>; range, IQR, and standard deviation measure <strong>spread</strong> — and two formulas let you flag outliers without eyeballing a gap.', tags: ['Five-number summary','IQR & standard deviation','Fence method'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">ten words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'statistic-parameter', term: 'Statistic vs. parameter', accent: 'sample', body: 'A statistic (x̄, s) describes a sample; a parameter (μ, σ) describes a population. We use sample statistics to estimate population parameters.' },
          { id: 'mean', term: 'Mean (x̄ or μ)', accent: 'population', body: 'The balancing point of the data — sum every value and divide by how many there are. Uses every data value, but is sensitive to outliers; best for symmetric data with no major outliers.' },
          { id: 'median', term: 'Median', accent: 'sample', body: 'The middle value once data is ordered smallest to largest — its location (not its value) comes from (n+1)/2. Resistant to outliers; best for skewed data or data with major outliers.' },
          { id: 'five-number-summary', term: 'Five-number summary', accent: 'population', body: 'Min, Q1, median, Q3, max — five values that break an ordered data set into four 25% chunks.' },
          { id: 'percentile', term: 'Percentile', accent: 'sample', body: 'The pth percentile is the value with p% of the data at or below it. Q1 is the 25th percentile, the median is the 50th, and Q3 is the 75th.' },
          { id: 'range', term: 'Range', accent: 'population', body: 'Max minus min — the simplest measure of spread, but easily thrown off by a single outlier.' },
          { id: 'iqr', term: 'Interquartile range (IQR)', accent: 'sample', body: 'Q3 minus Q1 — the spread of the middle 50% of the data. Resistant to outliers, and paired with the median.' },
          { id: 'standard-deviation', term: 'Standard deviation (s or σ)', accent: 'population', body: 'Roughly, the typical distance a data value sits from the mean. Paired with the mean; a bigger standard deviation means more spread-out data.' },
          { id: 'variance', term: 'Variance', accent: 'population', body: 'Standard deviation squared — another measure of spread, used less often on its own than standard deviation.' },
          { id: 'fence-method', term: 'Outlier fences', accent: 'sample', body: 'Lower fence = Q1 − 1.5×IQR; upper fence = Q3 + 1.5×IQR. Any value beyond either fence counts as an outlier.' }
        ]
      },

      /* ---------------- 3. THE DATA IN QUESTION ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 03 — The Data in Question',
        heading: 'Two data sets, <span class="underline sample">every example below</span>.',
        items: [
          {
            title: 'A 9-value data set (with one extreme value)',
            chartType: 'dotplot',
            data: [{value:18,count:1},{value:22,count:1},{value:25,count:1},{value:28,count:1},{value:30,count:1},{value:33,count:1},{value:35,count:1},{value:42,count:1},{value:97,count:1}],
            opts: { min: 15, max: 100, step: 5 },
            caption: '18, 22, 25, 28, 30, 33, 35, 42, 97 — eight values bunched together, and one value way out at 97. Every worked example in this topic uses these nine numbers.'
          },
          {
            title: 'Gas mileage, mpg — 53 cars',
            chartType: 'histogram', mode: 'count',
            data: [{label:'10–15',value:6},{label:'15–20',value:10},{label:'20–25',value:12},{label:'25–30',value:10},{label:'30–35',value:6},{label:'35–40',value:4},{label:'40–45',value:2},{label:'45–50',value:1},{label:'50–55',value:2}],
            caption: 'Five-number summary: min = 12, Q1 = 18, median = 24, Q3 = 30, max = 55. That max sits well past the bulk of the data — this histogram comes back in the worked examples below.'
          }
        ]
      },

      /* ---------------- 4. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 04 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A number that describes a sample is called a ',
            { id:'b1', answer:'statistic', options:['statistic','parameter','percentile'] },
            ', while a number that describes a population is called a ',
            { id:'b2', answer:'parameter', options:['parameter','statistic','variance'] },
            '.'
          ]},
          { segments: [
            'The mean is the ',
            { id:'b3', answer:'balancing point', options:['balancing point','middle value','most common value'] },
            ' of the data, but it is heavily influenced by ',
            { id:'b4', answer:'outliers', options:['outliers','the sample size','percentiles'] },
            '.'
          ]},
          { segments: [
            'The formula (n + 1) / 2 gives the ',
            { id:'b5', answer:'location', options:['location','value','average'] },
            ' of the median once the data is in order — not the median’s value itself.'
          ]},
          { segments: [
            'The five-number summary — min, Q1, median, Q3, max — breaks an ordered data set into four chunks of ',
            { id:'b6', answer:'25%', options:['25%','50%','10%'] },
            ' each.'
          ]},
          { segments: [
            'The interquartile range is calculated as ',
            { id:'b7', answer:'Q3 minus Q1', options:['Q3 minus Q1','max minus min','Q1 minus Q3'] },
            ', and — paired with the ',
            { id:'b8', answer:'median', options:['median','mean','mode'] },
            ' — it is the preferred measure of spread when data is skewed or has major outliers.'
          ]},
          { segments: [
            'Using the fence method, a value is a possible outlier if it falls below Q1 − 1.5×IQR, or above ',
            { id:'b9', answer:'Q3 + 1.5×IQR', options:['Q3 + 1.5×IQR','Q3 − 1.5×IQR','the mean plus IQR'] },
            '.'
          ]}
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Do the math. <span class="underline teal">Trust the right statistic.</span>',
        body: 'These reference the data sets in Section 03 above. Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'Using the 9-value data set above (18, 22, 25, 28, 30, 33, 35, 42, 97), find the mean and the median. Which one moved more because of the 97, and why?',
            fields: [
              { k: 'Median', v: '30 — the 5th of 9 ordered values; it does not care what 97 actually is' },
              { k: 'Mean with 97 included', v: '(18+22+25+28+30+33+35+42+97) / 9 = 330 / 9 ≈ 36.67' },
              { k: 'Mean without 97', v: '(18+22+25+28+30+33+35+42) / 8 = 233 / 8 ≈ 29.13' },
              { k: 'Why', v: 'The mean shifted by more than 7, while the median barely moved (30 vs. 29) — the mean is sensitive to outliers, the median is resistant' }
            ]
          },
          {
            q: 'Using the same 9 values, find the five-number summary, the IQR, and use the fence method to check for outliers.',
            fields: [
              { k: 'Five-number summary', v: 'Min = 18, Q1 = 23.5, Median = 30, Q3 = 38.5, Max = 97' },
              { k: 'IQR', v: 'Q3 − Q1 = 38.5 − 23.5 = 15' },
              { k: 'Fences', v: 'Lower fence = 23.5 − 1.5(15) = 1; Upper fence = 38.5 + 1.5(15) = 61' },
              { k: 'Outliers', v: '97 is above the upper fence of 61, so it is an outlier by the fence method; nothing falls below the lower fence of 1' }
            ]
          },
          {
            q: 'The gas-mileage histogram above (53 cars) has five-number summary min = 12, Q1 = 18, median = 24, Q3 = 30, max = 55. Use the fence method to check for outliers, and say which measures of center and spread you would report.',
            fields: [
              { k: 'IQR', v: '30 − 18 = 12' },
              { k: 'Fences', v: 'Lower fence = 18 − 1.5(12) = 0; Upper fence = 30 + 1.5(12) = 48' },
              { k: 'Outliers', v: 'The max of 55 is above the upper fence of 48, so it is an outlier — and the histogram shows it isn’t the only car up there' },
              { k: 'Preferred statistics', v: 'Because of the high outliers, report the median and IQR instead of the mean and standard deviation' }
            ]
          },
          {
            q: 'A distribution is strongly skewed right with several high outliers. Without calculating anything, would you expect the mean to be greater than, less than, or about equal to the median? Which measures of center and spread should be reported?',
            fields: [
              { k: 'Mean vs. median', v: 'Mean > median — the mean gets pulled toward the long right tail and the high outliers, while the median stays put' },
              { k: 'Preferred statistics', v: 'Median and IQR, since both resist the influence of skew and outliers' }
            ]
          }
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'S for sample, S for ___.', term: 'Statistic', detail: 'Describes a sample; used to estimate a population parameter.' },
          { prompt: 'A number that describes a population, like μ or σ.', term: 'Parameter', detail: 'P for population, P for parameter.' },
          { prompt: 'The balancing point of the data — sensitive to outliers, best for symmetric data.', term: 'Mean (x̄ / μ)', detail: 'Uses every data value in its calculation.' },
          { prompt: '(n + 1) / 2 finds this — but only the location, not the value itself.', term: 'Median (location formula)', detail: 'Resistant to outliers; best for skewed data.' },
          { prompt: 'Min, Q1, median, Q3, max.', term: 'Five-number summary', detail: 'Splits ordered data into four 25% chunks.' },
          { prompt: 'Q3 minus Q1 — the spread of the middle 50%.', term: 'Interquartile range (IQR)', detail: 'Resistant to outliers; pairs with the median.' },
          { prompt: 'Roughly, the typical distance a value sits from the mean.', term: 'Standard deviation (s / σ)', detail: 'Pairs with the mean; a bigger value means more spread out.' },
          { prompt: 'Q1 − 1.5×IQR and Q3 + 1.5×IQR.', term: 'Outlier fences', detail: 'Anything beyond either fence counts as an outlier.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'A number that summarizes a sample is called a:', opts: ['Parameter', 'Statistic', 'Population', 'Percentile'], correct: 1, exp: 'Statistics describe samples; parameters describe populations.' },
          { q: 'Which symbol represents the mean of a population?', opts: ['x̄', 's', 'μ', 'σ'], correct: 2, exp: 'μ (mu) is the population mean; x̄ is the sample mean.' },
          { q: 'The formula (n + 1) / 2 gives you:', opts: ['The median itself', 'The location of the median once data is ordered', 'The mean', 'The IQR'], correct: 1, exp: 'This formula only tells you which position to look at — you still have to find the value at that position.' },
          { q: 'Which measure of center is resistant to outliers?', opts: ['Mean', 'Median', 'Standard deviation', 'Range'], correct: 1, exp: 'The median only cares about the middle position, not how extreme the other values are.' },
          { q: 'The interquartile range is calculated as:', opts: ['Max − Min', 'Q3 − Q1', 'Mean − Median', 'Q1 − Q3'], correct: 1, exp: 'IQR = Q3 − Q1, the spread of the middle 50% of the data.' },
          { q: 'A data set is strongly skewed right with major outliers. Which pair of statistics should be reported?', opts: ['Mean and standard deviation', 'Median and IQR', 'Mode and range', 'Q1 and Q3 only'], correct: 1, exp: 'Median and IQR resist the pull of skew and outliers, unlike mean and standard deviation.' },
          { q: 'The upper fence in the fence method for outliers is calculated as:', opts: ['Q3 + 1.5×IQR', 'Q1 − 1.5×IQR', 'Mean + 2×SD', 'Max + IQR'], correct: 0, exp: 'Upper fence = Q3 + 1.5×IQR; anything beyond it is a possible outlier.' },
          { q: 'If a value is more than two standard deviations from the mean, the two-standard-deviation method would call it:', opts: ['The median', 'An outlier', 'The mode', 'A parameter'], correct: 1, exp: 'The 2-SD method flags anything more than two standard deviations above or below the mean as a possible outlier.' },
          { q: 'Which measure of spread uses every single data value in its calculation?', opts: ['Range', 'IQR', 'Standard deviation', 'The five-number summary'], correct: 2, exp: 'Standard deviation is built from every value’s deviation from the mean; range and IQR only use two values each.' },
          { q: 'A distribution is roughly symmetric with no major outliers. Which pair of statistics is preferred?', opts: ['Median and IQR', 'Mean and standard deviation', 'Range and mode', 'Q1 and Q3 only'], correct: 1, exp: 'With no skew or outliers to worry about, mean and standard deviation are the standard, most informative pair.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Statistic vs. parameter', body: 'A sample gives you a statistic (x̄, s); a population gives you a parameter (μ, σ) — statistics estimate parameters.' },
          { num: 'ii.', title: 'Two ways to measure center', body: 'The mean balances every value but is outlier-sensitive; the median splits the data in half and resists outliers.' },
          { num: 'iii.', title: 'Five-number summary marks position', body: 'Min, Q1, median, Q3, max cut ordered data into four 25% chunks — percentiles generalize the same idea.' },
          { num: 'iv.', title: 'Three ways to measure spread', body: 'Range is crude and outlier-sensitive; IQR is resistant and pairs with the median; standard deviation pairs with the mean.' },
          { num: 'v.', title: 'Match the pair to the shape', body: 'Symmetric with no outliers → mean & standard deviation. Skewed or major outliers → median & IQR. Check outliers with the 1.5×IQR fence method or the 2-standard-deviation method.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A number that describes a population is called a:', opts: ['Statistic', 'Parameter', 'Sample', 'Percentile'], correct: 1, exp: 'Parameters describe populations; statistics describe samples.' },
        { q: 'Which symbol represents the standard deviation of a sample?', opts: ['σ', 's', 'μ', 'x̄'], correct: 1, exp: 's is the sample standard deviation; σ (sigma) is reserved for the population.' },
        { q: 'For the data set 5, 8, 10, 12, 14, 16, 50, what is the median?', opts: ['12', '10.5', '14', '50'], correct: 0, exp: '(7+1)/2 = 4th value once ordered = 12.' },
        { q: 'For that same data set, is the mean greater than, less than, or about equal to the median?', opts: ['Greater than, because 50 pulls the mean up', 'Less than, because 50 pulls the mean down', 'About equal, since the data is symmetric', 'Cannot be determined'], correct: 0, exp: 'Mean = (5+8+10+12+14+16+50)/7 = 115/7 ≈ 16.43, noticeably greater than the median of 12 — the high value pulls the mean up.' },
        { q: 'For the data set 5, 8, 10, 12, 14, 16, 50, find Q1 (the median of the lower half, not including the overall median).', opts: ['8', '7', '9', '10'], correct: 0, exp: 'The lower half is 5, 8, 10 — its median is 8.' },
        { q: 'Find Q3 for that same data set (the median of the upper half, not including the overall median).', opts: ['14', '16', '50', '15'], correct: 1, exp: 'The upper half is 14, 16, 50 — its median is 16.' },
        { q: 'What is the IQR for that data set?', opts: ['8', '42', '24', '16'], correct: 0, exp: 'IQR = Q3 − Q1 = 16 − 8 = 8.' },
        { q: 'Using the fence method, is 50 an outlier in that data set?', opts: ['Yes, 50 is above the upper fence of 28', 'No, 50 is within the fences', 'Cannot be determined without the mean', 'Only if using the 2-SD method'], correct: 0, exp: 'Upper fence = 16 + 1.5(8) = 28. Since 50 > 28, it is an outlier.' },
        { q: 'Which measure of center and spread would be most appropriate for this data set?', opts: ['Mean and standard deviation, since 50 is not unusual', 'Median and IQR, since 50 is an outlier that skews the data', 'Range only', 'Q1 and Q3 only, ignoring center entirely'], correct: 1, exp: 'With a confirmed outlier, median and IQR give a more accurate picture than mean and standard deviation.' },
        { q: 'A histogram of gas mileage for 53 cars has five-number summary min = 12, Q1 = 18, median = 24, Q3 = 30, max = 55. What is the IQR?', opts: ['12', '30', '18', '43'], correct: 0, exp: 'IQR = Q3 − Q1 = 30 − 18 = 12.' },
        { q: 'Using that IQR, what is the upper fence?', opts: ['48', '42', '36', '54'], correct: 0, exp: 'Upper fence = Q3 + 1.5×IQR = 30 + 1.5(12) = 48.' },
        { q: 'Is the maximum of 55 an outlier by the fence method?', opts: ['Yes, 55 is above the upper fence of 48', 'No, 55 is below the upper fence', 'Cannot be determined', 'Only the minimum can ever be an outlier'], correct: 0, exp: '55 exceeds the upper fence of 48, so it is an outlier.' },
        { q: 'Given that this gas-mileage data has upper outliers, which statistics should be reported for center and spread?', opts: ['Mean and standard deviation', 'Median and IQR', 'Mode and range', 'Mean and IQR'], correct: 1, exp: 'Outliers call for median and IQR, since mean and standard deviation would be distorted by the extreme values.' },
        { q: 'The two-standard-deviation method flags a value as an outlier when it is:', opts: ['More than 1.5×IQR from a quartile', 'More than two standard deviations from the mean', 'Exactly equal to the median', 'Below the minimum'], correct: 1, exp: 'The 2-SD method uses mean ± 2×(standard deviation) as its cutoff, rather than quartiles.' },
        { q: 'Two data sets both have a mean of 42. Data Set A has a standard deviation of 5; Data Set B has a standard deviation of 15. Which statement is true?', opts: ['Data Set A’s values typically sit closer to 42 than Data Set B’s do', 'Data Set B’s values typically sit closer to 42', 'Both data sets are equally spread out', 'Standard deviation does not relate to spread'], correct: 0, exp: 'A smaller standard deviation means the data typically sits closer to the mean — Data Set A is less spread out.' },
        { q: 'Variance is best described as:', opts: ['The square root of the standard deviation', 'The standard deviation squared', 'The same thing as the range', 'Another name for the mean'], correct: 1, exp: 'Variance is standard deviation squared — another measure of spread, used less often on its own.' },
        { q: 'Why does the median only require the position of data values, not a calculation involving their exact size?', opts: ['Because the median is always the smallest value', 'Because the median’s definition is just "the middle value once ordered" — nothing gets added or averaged except when two middle values must be combined', 'Because the median is a parameter, not a statistic', 'Because medians only exist for even-sized data sets'], correct: 1, exp: 'The median is purely positional — it is the value (or average of two values) sitting in the exact middle once the data is ordered.' },
        { q: 'A distribution is roughly symmetric with no major outliers. Which pair of statistics is most appropriate to report?', opts: ['Median and IQR', 'Mean and standard deviation', 'Range and mode', 'Min and max only'], correct: 1, exp: 'With no skew or outliers, mean and standard deviation are the preferred, more informative pair.' },
        { q: 'Percentile is best defined as:', opts: ['The value with a given percentage of the data at or below it', 'Always the same as the mean', 'A measure of spread, not position', 'Only usable for exam scores'], correct: 0, exp: 'The pth percentile is the value with p% of the data at or below it.' },
        { q: 'A student scores at the 92nd percentile on an exam. What does this mean?', opts: ['The student got a 92% on the exam', '92% of students scored at or below the student’s score', 'Only 8% of students took the exam', 'The student’s score is exactly the mean'], correct: 1, exp: 'A percentile describes position relative to other scores, not the raw percent score itself.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.8 — Graphical Representations of Summary Statistics
   Source: course transcript (Topic 1.8 lecture)
   ============================================ */

registerChapters({
  '1-8': {
    id: '1-8',
    code: 'Topic 1.8',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Graphical Representations of Summary Statistics',
    cardSummary: 'Box plots built from the five-number summary — reading spread and shape, comparing groups side-by-side, and the proportion-vs-count trap.',
    heroTitle: 'Draw the<br><em>five numbers</em>.',
    heroSub: 'A box plot is just the five-number summary, drawn. Read spread and shape off it, compare two groups with parallel box plots, and watch for the classic trap: a bigger proportion doesn’t always mean a bigger count.',
    source: 'Topic 1.8 course video',
    estTime: '~20–30 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'A box plot is <span class="underline teal">the five-number summary</span>, drawn.',
        body: 'A box from Q1 to Q3, a line at the median, and whiskers reaching out to the extremes — every box plot is built the exact same way.',
        cards: [
          { roman: 'I.', title: 'Box, line, whiskers, outliers', body: 'The <strong>box</strong> spans Q1 to Q3 with a line at the <strong>median</strong>. <strong>Whiskers</strong> extend to the min and max — or to the last value that isn’t an outlier, if there are any.', tags: ['Box = Q1 to Q3','Median line','Whiskers','Outliers marked separately'] },
          { roman: 'II.', title: 'Wider ≠ more data', body: 'Every section of a box plot — no matter how wide — represents exactly 25% of the data. A wider section just means that quarter is more spread out, and it hints at skew.', tags: ['Each section = 25%','Spread, not count','Parallel box plots'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">five words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'box-plot', term: 'Box plot', accent: 'population', body: 'A graph of the five-number summary — a box from Q1 to Q3 with a line at the median, and whiskers extending out to the min and max (or the last non-outlier value).' },
          { id: 'whisker', term: 'Whisker', accent: 'population', body: 'The line extending from the box out to the most extreme value that is not an outlier. If there are outliers, they get their own mark beyond the whisker instead of being folded into it.' },
          { id: 'parallel-box-plots', term: 'Parallel box plots', accent: 'sample', body: 'Two or more box plots drawn on the same scale, stacked so their five-number summaries can be compared directly.' },
          { id: 'wider-not-more', term: '"Wider" means more spread, not more data', accent: 'sample', body: 'Each of the four sections of a box plot — min to Q1, Q1 to median, median to Q3, Q3 to max — always represents exactly 25% of the data. A wider section is more spread out, not more populated.' },
          { id: 'shape-from-boxplot', term: 'Reading shape from a box plot', accent: 'sample', body: 'A box plot can’t show gaps or multiple modes, but a longer section on one side signals skew in that direction — and the mean moves toward whichever side is more spread out.' }
        ]
      },

      /* ---------------- 3. READING THE BOX PLOTS ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 03 — Reading the Box Plots',
        heading: 'One box plot, <span class="underline sample">then two side-by-side</span>.',
        items: [
          {
            title: 'Exam scores, n = 135',
            chartType: 'boxplot',
            groups: [{ label: 'Score', min: 20, q1: 30, median: 62, q3: 70, max: 92, outliers: [] }],
            caption: 'Five-number summary: min 20, Q1 30, median 62, Q3 70, max 92 — no outliers, so both whiskers reach all the way to the min and max.'
          },
          {
            title: 'Commute time, minutes — Ohio vs. New York',
            chartType: 'boxplot',
            groups: [
              { label: 'Ohio', min: 5, q1: 10, median: 20, q3: 30, max: 50, outliers: [] },
              { label: 'New York', min: 8, q1: 15, median: 30, q3: 50, max: 70, outliers: [85] }
            ],
            caption: 'Parallel box plots on the same scale. New York’s box is noticeably wider (more spread in the middle 50%), and one commuter at 85 minutes is marked separately as an outlier rather than stretching the whisker.'
          }
        ]
      },

      /* ---------------- 4. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 04 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A box plot graphs the five-number summary: a box from ',
            { id:'b1', answer:'Q1 to Q3', options:['Q1 to Q3','min to max','the mean to the median'] },
            ' with a line at the ',
            { id:'b2', answer:'median', options:['median','mean','mode'] },
            ', and whiskers extending toward the min and max.'
          ]},
          { segments: [
            'If a data set has outliers, the whisker instead extends only to the most extreme value that is ',
            { id:'b3', answer:'not an outlier', options:['not an outlier','exactly the mean','equal to Q1'] },
            ', and the outlier itself gets its own separate mark.'
          ]},
          { segments: [
            'Each of the four sections of a box plot — min to Q1, Q1 to median, median to Q3, and Q3 to max — always represents ',
            { id:'b4', answer:'25%', options:['25%','50%','10%'] },
            ' of the data, no matter how wide or narrow that section looks.'
          ]},
          { segments: [
            'A wider section of a box plot means that part of the data is more ',
            { id:'b5', answer:'spread out', options:['spread out','densely packed','likely to contain outliers'] },
            ', not that it contains more data.'
          ]},
          { segments: [
            'If the section above the median is noticeably wider than the section below it, the distribution is likely skewed ',
            { id:'b6', answer:'right', options:['right','left','uniformly'] },
            ', and the mean would sit ',
            { id:'b7', answer:'above', options:['above','below','exactly on'] },
            ' the median.'
          ]},
          { segments: [
            'Parallel box plots let you compare two groups’ five-number summaries directly, but without knowing each group’s sample size, a bigger proportion above some value does not necessarily mean a bigger raw ',
            { id:'b8', answer:'count', options:['count','median','box width'] },
            '.'
          ]}
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Read the box plot. <span class="underline teal">Watch the trap.</span>',
        body: 'These reference the charts in Section 03 above. Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'The box plot above shows exam scores for a professor’s 135 students (five-number summary: min 20, Q1 30, median 62, Q3 70, max 92, no outliers). About how many students scored above 70, and did more students score above 70 or below 30?',
            fields: [
              { k: 'Above 70', v: 'Q3 = 70, so 25% of the class scored above it — 0.25 × 135 ≈ 34 students' },
              { k: 'Below 30', v: 'Q1 = 30, so 25% scored below it too — also ≈ 34 students' },
              { k: 'Comparison', v: 'About the same number scored above 70 as below 30 — both are exactly the "outer 25%" on their side, regardless of how long each whisker looks' }
            ]
          },
          {
            q: 'Using the parallel box plots of Ohio vs. New York commute times, is it true that more adults from the New York sample travel over 30 minutes than adults in the Ohio sample?',
            fields: [
              { k: 'New York', v: '30 is New York’s median, so 50% of the New York sample travels over 30 minutes' },
              { k: 'Ohio', v: '30 is Ohio’s Q3, so only 25% of the Ohio sample travels over 30 minutes' },
              { k: 'Verdict', v: 'False as stated — a larger proportion of New York travels over 30 minutes, but without knowing each sample’s size, we can’t say more people (a raw count) do' }
            ]
          },
          {
            q: 'Compare the interquartile ranges of the Ohio and New York commute-time distributions, and describe what a wider box means (and doesn’t mean).',
            fields: [
              { k: 'Ohio IQR', v: 'Q3 − Q1 = 30 − 10 = 20 minutes' },
              { k: 'New York IQR', v: 'Q3 − Q1 = 50 − 15 = 35 minutes' },
              { k: 'What "wider" means', v: 'New York’s box is wider, so its middle 50% of commute times is more spread out — it does not mean New York has more commuters, just more variability in that range' }
            ]
          },
          {
            q: 'What can you say about the shape of the Ohio commute-time distribution just from its box plot?',
            fields: [
              { k: 'Reading the box', v: 'Min to Q1 is 5 minutes wide (5–10); Q1 to median is 10 wide (10–20); median to Q3 is 10 wide (20–30); Q3 to max is 20 wide (30–50)' },
              { k: 'Shape', v: 'The upper half (above the median) is noticeably more spread out than the lower half — this points toward a distribution skewed right, where the mean would sit a bit above the median' }
            ]
          }
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'A box from Q1 to Q3, a line at the median, and whiskers to the extremes.', term: 'Box plot', detail: 'A direct graph of the five-number summary.' },
          { prompt: 'The line from the box out to the most extreme non-outlier value.', term: 'Whisker', detail: 'Outliers get their own separate mark instead of stretching the whisker.' },
          { prompt: 'Two or more box plots stacked on the same scale to compare groups.', term: 'Parallel box plots', detail: 'Lets you compare five-number summaries directly.' },
          { prompt: 'A box plot section is unusually wide. Does that mean it holds more data?', term: 'No — "wider" means more spread, not more data', detail: 'Every section is always exactly 25% of the data.' },
          { prompt: 'The section above the median is much wider than the section below it.', term: 'Skewed right (mean above the median)', detail: 'A longer section on one side signals skew in that direction.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'A box plot’s box stretches from:', opts: ['Min to max', 'Q1 to Q3', 'Mean minus SD to mean plus SD', 'The 10th to 90th percentile'], correct: 1, exp: 'The box always spans Q1 to Q3 — the middle 50% of the data.' },
          { q: 'The line inside the box represents the:', opts: ['Mean', 'Mode', 'Median', 'Standard deviation'], correct: 2, exp: 'The line inside the box marks the median.' },
          { q: 'If a data set has an outlier, the whisker on that side extends to:', opts: ['The outlier itself', 'The most extreme value that is not an outlier', 'The mean', 'Exactly 1.5×IQR past the box, always'], correct: 1, exp: 'Outliers are marked separately; the whisker stops at the last non-outlier value.' },
          { q: 'Each of the four sections of a box plot represents:', opts: ['A different, unequal share of the data', 'Exactly 25% of the data, regardless of width', 'Only the outliers', 'The mode of that section'], correct: 1, exp: 'By definition, min–Q1, Q1–median, median–Q3, and Q3–max each hold 25% of the data.' },
          { q: 'A box plot’s upper section (median to Q3 to max) is much wider than its lower section. This suggests:', opts: ['Skewed left, mean below the median', 'Skewed right, mean above the median', 'Perfectly uniform data', 'Bimodal data with two peaks'], correct: 1, exp: 'More spread above the median points toward skewed right, pulling the mean above the median.' },
          { q: 'Parallel box plots are used to:', opts: ['Show a single group’s shape only', 'Compare two or more groups’ five-number summaries on the same scale', 'Replace the need for a five-number summary', 'Show individual data values exactly'], correct: 1, exp: 'Parallel box plots stack multiple groups on a shared scale for direct comparison.' },
          { q: 'Box Plot A shows 50% of its data above 40 minutes (its median). Box Plot B shows 25% of its data above 40 minutes (its Q3). Without knowing sample sizes, can you say more people in Group A traveled over 40 minutes than in Group B?', opts: ['Yes, since 50% > 25%', 'No — a bigger proportion doesn’t guarantee a bigger raw count unless sample sizes are known', 'Yes, because box plots always have equal sample sizes', 'No, because box plots cannot show percentages'], correct: 1, exp: 'A higher proportion only guarantees a higher raw count once you know both groups’ sample sizes.' },
          { q: 'Which of the following can a box plot NOT show directly?', opts: ['The median', 'Gaps or multiple modes in the data', 'The interquartile range', 'Roughly where the middle 50% of data falls'], correct: 1, exp: 'Box plots compress the data into five numbers, so gaps and multiple modes are invisible — a dot plot or histogram would be needed for those.' },
          { q: 'A box plot has a very short whisker on the left and a very long whisker on the right, and a median that sits closer to the left edge of the box. Overall shape?', opts: ['Skewed left', 'Roughly uniform', 'Skewed right', 'Cannot say anything about shape from a box plot ever'], correct: 2, exp: 'A long right whisker plus a median pulled toward the left of the box both point to skewed right.' },
          { q: 'If a distribution is roughly symmetric, its box plot will typically show:', opts: ['A median far from the center of the box, with very unequal whiskers', 'A median roughly in the middle of the box, with roughly equal whiskers', 'No box at all', 'Only one whisker'], correct: 1, exp: 'Symmetric data tends to produce a centered median and whiskers of similar length on both sides.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'A box plot is the five-number summary, drawn', body: 'Box from Q1 to Q3, a line at the median, whiskers to the non-outlier extremes, and outliers marked separately.' },
          { num: 'ii.', title: 'Every section is 25%', body: 'A wider section always means more spread, never more data — each of the four chunks holds exactly a quarter of the data set.' },
          { num: 'iii.', title: 'Box plots hint at shape, but not everything', body: 'A longer section on one side signals skew in that direction and pulls the mean that way too — but gaps and multiple modes stay invisible.' },
          { num: 'iv.', title: 'Parallel box plots compare fairly', body: 'The same scale, side-by-side, makes five-number summaries directly comparable across groups.' },
          { num: 'v.', title: 'Proportion isn’t count', body: 'A bigger percentage above some value doesn’t mean a bigger number of people — not unless you also know both groups’ sample sizes.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A box plot’s box represents:', opts: ['The full range of the data', 'The middle 50% of the data (Q1 to Q3)', 'Only the outliers', 'The mean and standard deviation'], correct: 1, exp: 'The box always spans the middle 50% of the data, from Q1 to Q3.' },
        { q: 'The line drawn inside the box marks the:', opts: ['Mode', 'Mean', 'Median', 'Range'], correct: 2, exp: 'The line inside the box is the median.' },
        { q: 'Using the exam-score box plot (five-number summary: min 20, Q1 30, median 62, Q3 70, max 92, n = 135), about how many students scored below 30?', opts: ['≈ 34 students (25% of 135)', '≈ 68 students (50% of 135)', 'Exactly 30 students', 'Exactly 20 students'], correct: 0, exp: '30 is Q1, so 25% of 135 ≈ 34 students scored below it.' },
        { q: 'In that same class, did more students score above 70 or below 30?', opts: ['More scored above 70', 'More scored below 30', 'About the same number scored in each group', 'Cannot be determined from a box plot'], correct: 2, exp: 'Both 70 (Q3) and 30 (Q1) mark off exactly 25% of the class on their respective side — about the same count.' },
        { q: 'Using the Ohio/New York parallel box plots (Ohio: min 5, Q1 10, median 20, Q3 30, max 50; New York: min 8, Q1 15, median 30, Q3 50, max 70, one outlier at 85), what is the IQR for New York?', opts: ['35 minutes', '50 minutes', '15 minutes', '62 minutes'], correct: 0, exp: 'New York’s IQR = Q3 − Q1 = 50 − 15 = 35 minutes.' },
        { q: 'What is the IQR for Ohio?', opts: ['20 minutes', '30 minutes', '10 minutes', '45 minutes'], correct: 0, exp: 'Ohio’s IQR = Q3 − Q1 = 30 − 10 = 20 minutes.' },
        { q: 'Which sample has the larger interquartile range?', opts: ['Ohio', 'New York', 'They are equal', 'Cannot be determined'], correct: 1, exp: 'New York’s IQR (35) is larger than Ohio’s (20).' },
        { q: 'What proportion of the Ohio sample travels 30 minutes or less?', opts: ['25%', '50%', '75%', '100%'], correct: 2, exp: '30 is Ohio’s Q3, so 75% of the sample is at or below it.' },
        { q: 'What proportion of the New York sample travels more than 30 minutes?', opts: ['25%', '50%', '75%', '10%'], correct: 1, exp: '30 is New York’s median, so 50% of the sample travels more than 30 minutes.' },
        { q: 'Is it true that more adults from the New York sample travel over 30 minutes than adults from the Ohio sample, in raw count?', opts: ['Yes, definitely, since 50% > 25%', 'Cannot be determined — sample sizes for each group aren’t given', 'No, it is definitely false', 'Yes, because New York always has more commuters'], correct: 1, exp: 'A higher proportion doesn’t guarantee a higher raw count unless both sample sizes are known.' },
        { q: 'New York’s box plot shows one point drawn separately beyond the right whisker, at 85 minutes. What does this represent?', opts: ['The median', 'An outlier', 'The mean', 'A data-entry requirement, not real data'], correct: 1, exp: 'A point marked separately beyond the whisker is an outlier.' },
        { q: 'Why does New York’s whisker stop at 70 instead of extending to the outlier at 85?', opts: ['It is a drawing error', 'Whiskers extend only to the most extreme value that is not an outlier; outliers get their own separate mark', 'Whiskers always stop at exactly Q3 + 10', 'Because 85 was deleted from the data set'], correct: 1, exp: 'The whisker reaches the last non-outlier value; the outlier itself is marked separately rather than stretching the whisker.' },
        { q: 'A box plot’s section from the median to Q3 is much wider than the section from Q1 to the median. What does this suggest about shape?', opts: ['Skewed left, mean likely below the median', 'Skewed right, mean likely above the median', 'The data must be bimodal', 'Nothing — box plots never show shape'], correct: 1, exp: 'More spread just above the median (in the median-to-Q3 section) points toward skewed right.' },
        { q: 'A box plot cannot show which of the following?', opts: ['The median', 'The interquartile range', 'Whether there are two separate peaks (bimodal) in the data', 'Roughly where the middle 50% of the data falls'], correct: 2, exp: 'Box plots compress the data into five summary numbers, so multiple peaks or gaps are invisible.' },
        { q: 'Class A’s test-score box plot has a median of 78 and a fairly narrow box. Class B’s box plot has the same median of 78 but a much wider box. What does this tell you?', opts: ['Class A and Class B have identical spread', 'Class B’s scores are more spread out around the same central value', 'Class A must have more students', 'Class B’s median is actually higher'], correct: 1, exp: 'A wider box means more spread in the middle 50%, even with the same median — sample size can’t be inferred from box width.' },
        { q: 'Parallel box plots are most useful for:', opts: ['Displaying a single variable in isolation', 'Comparing the five-number summaries of two or more groups on the same scale', 'Replacing histograms entirely', 'Showing individual raw data values'], correct: 1, exp: 'Parallel box plots exist specifically to compare groups directly on a shared scale.' },
        { q: 'A distribution’s box plot has a median positioned almost exactly in the middle of the box, with two whiskers of roughly equal length. This is most consistent with:', opts: ['A strongly skewed distribution', 'A roughly symmetric distribution', 'A bimodal distribution', 'An outlier-heavy distribution'], correct: 1, exp: 'A centered median with roughly equal whiskers is the box-plot signature of a roughly symmetric distribution.' },
        { q: 'Why is a wider section of a box plot NOT evidence of "more data" in that section?', opts: ['Because box plots do not use real data', 'Because every section — wide or narrow — always represents exactly 25% of the data by definition', 'Because wider sections actually mean less data', 'Because only the box itself contains any data'], correct: 1, exp: 'Each of the four sections is defined to hold exactly 25% of the data, so width only reflects spread, never count.' },
        { q: 'Two box plots have very different sample sizes, but Group A shows a higher proportion above a certain time cutoff than Group B. Which is guaranteed to be true?', opts: ['Group A definitely has more people above the cutoff, in raw count', 'Group A has a higher percentage above the cutoff, but not necessarily a higher count', 'Group A and Group B must have the same sample size', 'Nothing can be said about proportions from a box plot'], correct: 1, exp: 'Only the proportion comparison is guaranteed; raw count depends on the (unknown) sample sizes.' },
        { q: 'Which single graph type most directly displays a five-number summary?', opts: ['Histogram', 'Bar chart', 'Box plot', 'Pie chart'], correct: 2, exp: 'A box plot is built directly from the five-number summary — min, Q1, median, Q3, and max.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.9 — Comparing Distributions of a Quantitative Variable
   Source: course transcript (Topic 1.9 lecture)
   ============================================ */

registerChapters({
  '1-9': {
    id: '1-9',
    code: 'Topic 1.9',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Comparing Distributions of a Quantitative Variable',
    cardSummary: 'Comparing two distributions side by side, then standardizing individual values into z-scores so you can compare across completely different variables.',
    heroTitle: 'Same score. <em>Different</em><br>meaning.',
    heroSub: 'A 78 can be a great score or a terrible one — it depends entirely on the mean and spread around it. Compare two distributions graphically, then standardize with a z-score to compare anything to anything.',
    source: 'Topic 1.9 course video',
    estTime: '~25–35 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Compare <span class="underline teal">two distributions</span>. Standardize <span class="underline sample">one value</span>.',
        body: 'This topic has two halves: putting two distributions side by side to compare them, and standardizing a single value into a z-score so it can be compared against a distribution — or against a value from a completely different distribution.',
        cards: [
          { roman: 'I.', title: 'Compare graphically', body: 'Histograms, back-to-back stem-and-leaf plots, dot plots, and parallel box plots can all compare <strong>center, spread, shape, and outliers</strong> between two groups. Only box plots can’t reveal <strong>clusters or gaps</strong>.', tags: ['Center · spread · shape', 'Outliers', 'Box plots hide gaps'] },
          { roman: 'II.', title: 'Standardize with z-scores', body: 'A <strong>z-score</strong> measures how many standard deviations a value sits from the mean. It has no units, which is exactly what lets you compare values from two totally different variables on one common scale.', tags: ['z = (x − mean) / sd', 'No units', 'Compares anything to anything'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">eight words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'comparing-distributions', term: 'Comparing distributions', accent: 'population', body: 'Describing two or more distributions using the same categories — center, spread (variability), shape, outliers, clusters, and gaps — so they can be judged side by side.' },
          { id: 'back-to-back-stemplot', term: 'Back-to-back stem-and-leaf plot', accent: 'population', body: 'A stem-and-leaf plot for two groups that share one column of stems in the middle, with one group’s leaves running left and the other’s running right.' },
          { id: 'boxplot-blind-spot', term: 'Box plots can’t show gaps', accent: 'sample', body: 'Box plots compare center, variability, outliers, and skew well, but — unlike a histogram or dot plot — they can hide clusters and gaps in the data.' },
          { id: 'z-score', term: 'Standardized score (z-score)', sym: 'z', accent: 'population', body: 'Measures the number of standard deviations a data value falls above or below the mean: z = (x − mean) / (standard deviation).' },
          { id: 'z-no-units', term: 'Z-scores have no units', accent: 'sample', body: 'A z-score is a pure count of standard deviations — stripped of units, it lets you compare values from two entirely different variables on the same scale.' },
          { id: 'z-sign', term: 'Sign of a z-score', accent: 'sample', body: 'A negative z-score means the value is below the mean; a positive z-score means it’s above the mean. The size tells you how far.' },
          { id: 'empirical-guideline', term: 'The 1 / 2 / 3 standard-deviation guideline', accent: 'population', body: 'Roughly: the majority of data sits within 1 standard deviation of the mean, a large majority within 2, and virtually all of it within 3.' },
          { id: 'z-comparison', term: 'Comparing with z-scores', accent: 'sample', body: 'Because z-scores strip away units, they let you compare an individual’s relative position across two completely different distributions — like a dog’s weight against other dogs vs. a cat’s weight against other cats.' }
        ]
      },

      /* ---------------- 3. THE DISTRIBUTIONS WE'LL COMPARE ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 03 — The Distributions We’ll Compare',
        heading: 'Two razors. <span class="underline sample">Two data sets.</span>',
        items: [
          {
            title: 'Shaves until dull — generic vs. name-brand razors',
            chartType: 'stemplot',
            splitSides: true, leftLabel: 'Generic', rightLabel: 'Name Brand',
            stems: [
              { stem: '8', left: [0], right: [] },
              { stem: '9', left: [6,7,9], right: [] },
              { stem: '10', left: [5], right: [3,6,8] },
              { stem: '11', left: [0,8], right: [0,1,4,8] },
              { stem: '12', left: [], right: [3] },
              { stem: '13', left: [2,8], right: [0] }
            ],
            keyText: 'Key: 8 | 0 = 80 shaves (generic); 10 | 3 = 103 shaves (name brand).',
            caption: 'Name brand has a higher center (median 111) and is less spread out (103–130). Generic has a lower center (median 105) but is much more spread out (80–138) — and its two longest-lasting razors (132, 138) beat every name-brand razor.'
          },
          {
            title: 'Two data sets, same units — summary stats only',
            chartType: 'boxplot',
            groups: [
              { label: 'Data Set 1', min: 4, q1: 12, median: 17, q3: 29, max: 48, outliers: [] },
              { label: 'Data Set 2', min: 10, q1: 19, median: 24, q3: 31, max: 40, outliers: [] }
            ],
            caption: 'Data Set 1: mean 22.4, median 17, sd 12.8 — the mean sits well above the median (the gap from Q1 to the median is only 5, but median to Q3 is 12), pointing to a right skew. Data Set 2: mean 24.3, median 24, sd 4.1 — mean and median are almost identical and the box is close to symmetric, with a higher, tighter center overall.'
          }
        ]
      },

      /* ---------------- 4. SEEING A Z-SCORE ---------------- */
      {
        type: 'chart', id: 'zscores', label: 'Section 04 — Seeing a Z-Score',
        heading: 'The <span class="underline teal">same 78</span>, four different contexts.',
        body: 'Each number line below shades ±1σ, ±2σ, and ±3σ around the mean, and marks one value against it. Same raw score, wildly different z-score.',
        items: [
          { title: 'Test score 78 — mean 80, sd 5', chartType: 'zscoreline', spec: { mean: 80, sd: 5, value: 78, label: 'Score', decimals: 0 }, caption: 'z = −0.4 — just a bit below the mean, nothing dramatic.' },
          { title: 'Test score 78 — mean 80, sd 0.5', chartType: 'zscoreline', spec: { mean: 80, sd: 0.5, value: 78, label: 'Score', decimals: 1 }, caption: 'z = −4 — with sd this tiny, this is an unbelievably bad score relative to everyone else.' },
          { title: 'Test score 78 — mean 95, sd 12', chartType: 'zscoreline', spec: { mean: 95, sd: 12, value: 78, label: 'Score', decimals: 0 }, caption: 'z ≈ −1.42 — meaningfully below average, beyond the "most students" ±1σ zone.' },
          { title: 'Test score 78 — mean 70, sd 12', chartType: 'zscoreline', spec: { mean: 70, sd: 12, value: 78, label: 'Score', decimals: 0 }, caption: 'z ≈ +0.67 — above the mean, and still solidly inside the ±1σ zone most students land in.' },
          { title: 'Dog weight — 54 lb', chartType: 'zscoreline', spec: { mean: 45, sd: 5.4, value: 54, label: 'Dog', unit: ' lb', decimals: 1 }, caption: 'z ≈ +1.67 — noticeably heavier than a typical dog.' },
          { title: 'Cat weight — 22 lb', chartType: 'zscoreline', spec: { mean: 16, sd: 2.4, value: 22, label: 'Cat', unit: ' lb', decimals: 1 }, caption: 'z = +2.5 — even though 22 lb is far less than the dog’s 54 lb, this cat is much bigger relative to other cats than that dog is relative to other dogs.' }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 05 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'When comparing two distributions, describe their center, spread, shape, outliers, and ',
            { id:'b1', answer:'clusters and gaps', options:['clusters and gaps','sample size','population'] },
            ' — although ',
            { id:'b2', answer:'box plots', options:['box plots','dot plots','stem-and-leaf plots'] },
            ' cannot reveal clusters or gaps the way the other graphs can.'
          ]},
          { segments: [
            'A standardized score, or ',
            { id:'b3', answer:'z-score', options:['z-score','percentile','parameter'] },
            ', measures the number of standard deviations a data value falls above or below the mean.'
          ]},
          { segments: [
            'The formula for a z-score is z = (x − mean) divided by the ',
            { id:'b4', answer:'standard deviation', options:['standard deviation','sample size','IQR'] },
            ', and a z-score has ',
            { id:'b5', answer:'no units', options:['no units','the same units as x','squared units'] },
            ' — which is exactly what lets it compare values from two completely different distributions.'
          ]},
          { segments: [
            'A ',
            { id:'b6', answer:'negative', options:['negative','positive','zero'] },
            ' z-score means the value is below the mean, while a ',
            { id:'b7', answer:'positive', options:['positive','negative','zero'] },
            ' z-score means it is above the mean.'
          ]},
          { segments: [
            'As a rough guideline, the majority of data falls within 1 standard deviation of the mean, a large majority within ',
            { id:'b8', answer:'2', options:['2','3','0.5'] },
            ' standard deviations, and virtually all of it within ',
            { id:'b9', answer:'3', options:['3','2','1'] },
            ' standard deviations.'
          ]},
          { segments: [
            'Changing the units a variable is measured in (feet to inches, dollars to cents) does not change a data value’s ',
            { id:'b10', answer:'z-score', options:['z-score','raw value','mean'] },
            ', because its position relative to the mean and standard deviation stays exactly the same.'
          ]}
        ]
      },

      /* ---------------- 6. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 06 — Worked Examples',
        heading: 'Read the distributions. <span class="underline teal">Do the standardizing.</span>',
        body: 'These reference the charts in Sections 03–04 above. Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'Using the back-to-back stem-and-leaf plot above, compare the generic and name-brand razors in terms of center, spread, and shape. Can you conclude the name brand is definitively better?',
            fields: [
              { k: 'Center', v: 'Name brand has a higher center (median 111 shaves) than generic (median 105) — name brand razors tend to last a bit longer before going dull' },
              { k: 'Spread', v: 'Generic is far more spread out (80 to 138) than name brand (103 to 130) — name brand is more consistent' },
              { k: 'Shape', v: 'Both are slightly skewed right, with more data bunched at the low end and a longer tail toward the higher values' },
              { k: 'Verdict', v: 'Not conclusively — the two longest-lasting razors in the entire data set (132 and 138 shaves) were both generic, even though the name brand’s overall center is higher' }
            ]
          },
          {
            q: 'Data Set 1 has mean 22.4, median 17, sd 12.8 (Q1 12, Q3 29). Data Set 2 has mean 24.3, median 24, sd 4.1 (Q1 19, Q3 31). Compare their shape and spread.',
            fields: [
              { k: 'Data Set 1 shape', v: 'Mean (22.4) sits well above the median (17), and Q1-to-median (5) is smaller than median-to-Q3 (12) — both point to a right skew' },
              { k: 'Data Set 2 shape', v: 'Mean (24.3) and median (24) are almost identical, and Q1-to-median (5) is close to median-to-Q3 (7) — a roughly symmetric distribution' },
              { k: 'Spread comparison', v: 'Data Set 1’s standard deviation (12.8) is much larger than Data Set 2’s (4.1) — Data Set 1 is far more spread out' }
            ]
          },
          {
            q: 'A student scores 78 on four different exams: (a) mean 80, sd 5; (b) mean 80, sd 0.5; (c) mean 95, sd 12; (d) mean 70, sd 12. Find each z-score and rank the four performances from best to worst.',
            fields: [
              { k: '(a)', v: 'z = (78 − 80) / 5 = −0.4 — slightly below average' },
              { k: '(b)', v: 'z = (78 − 80) / 0.5 = −4 — catastrophically bad; almost no one scores this many sd below the mean' },
              { k: '(c)', v: 'z = (78 − 95) / 12 ≈ −1.42 — meaningfully below average' },
              { k: '(d)', v: 'z = (78 − 70) / 12 ≈ +0.67 — above average' },
              { k: 'Ranking (best → worst)', v: '(d) +0.67  >  (a) −0.4  >  (c) −1.42  >  (b) −4' }
            ]
          },
          {
            q: 'A dog weighs 54 lb (mean 45 lb, sd 5.4 among dogs). A cat weighs 22 lb (mean 16 lb, sd 2.4 among cats). Which animal is bigger relative to its own species?',
            fields: [
              { k: 'Dog z-score', v: 'z = (54 − 45) / 5.4 ≈ 1.67' },
              { k: 'Cat z-score', v: 'z = (22 − 16) / 2.4 = 2.5' },
              { k: 'Verdict', v: 'The cat — even though it weighs far less in raw pounds, 2.5 sd above the mean beats 1.67 sd above the mean' }
            ]
          },
          {
            q: 'A box of crackers has mean weight 16.5 oz, sd 0.4 oz. One box has a z-score of −1.24. What does that box actually weigh?',
            fields: [
              { k: 'Setup', v: 'Solve the z-score formula for x: x = z · sd + mean' },
              { k: 'Work', v: 'x = (−1.24)(0.4) + 16.5 = −0.496 + 16.5' },
              { k: 'Answer', v: 'x ≈ 16.0 oz' }
            ]
          },
          {
            q: 'The mean height of boys is 54 in, sd 2.7 in. A boy has a z-score of +0.58. How tall is he?',
            fields: [
              { k: 'Work', v: 'x = (0.58)(2.7) + 54 = 1.566 + 54' },
              { k: 'Answer', v: 'x ≈ 55.57 in — just a bit above average, consistent with a z-score under 1' }
            ]
          }
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'Two histograms sit side by side. What five things should you compare between them?', term: 'Center, spread, shape, outliers, clusters/gaps', detail: 'Box plots are the one graph that can’t show clusters or gaps.' },
          { prompt: 'Two stem-and-leaf plots share one stem column, with leaves running in opposite directions.', term: 'Back-to-back stem-and-leaf plot', detail: 'A quick way to compare two distributions leaf-by-leaf.' },
          { prompt: 'Measures how many standard deviations a value sits above or below the mean.', term: 'Z-score (standardized score)', detail: 'z = (x − mean) / (standard deviation).' },
          { prompt: 'This measure of position has no units at all.', term: 'Z-score', detail: 'That’s exactly what lets it compare completely different variables.' },
          { prompt: 'A negative z-score means the value is...', term: 'Below the mean', detail: 'Positive means above; zero means exactly at the mean.' },
          { prompt: 'Roughly how much data falls within 2 standard deviations of the mean?', term: 'A large majority — almost all of it', detail: '1 sd = the majority, 2 sd = a large majority, 3 sd = virtually all.' },
          { prompt: 'A dog weighs less than a cat in raw pounds, but has a bigger z-score. Which is bigger relative to its own species?', term: 'The dog', detail: 'Z-scores compare position within a distribution, not raw size.' },
          { prompt: 'Converting a variable from feet to inches — does a value’s z-score change?', term: 'No — z-scores don’t change when you change units', detail: 'Position relative to the mean, in standard-deviation units, stays identical.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'Which graph type cannot easily show gaps or clusters in the data?', opts: ['Dot plot', 'Histogram', 'Stem-and-leaf plot', 'Box plot'], correct: 3, exp: 'Box plots compress data into five numbers, hiding gaps and clusters that a dot plot, histogram, or stem plot would reveal.' },
          { q: 'A back-to-back stem-and-leaf plot compares two distributions by:', opts: ['Sharing one column of stems, with leaves running opposite directions', 'Showing only the outliers of each group', 'Calculating each group’s mean automatically', 'Replacing the need for a five-number summary'], correct: 0, exp: 'One shared stem column, leaves going left for one group and right for the other.' },
          { q: 'The z-score formula is:', opts: ['(mean − x) / sd', '(x − mean) / sd', 'x · sd + mean', '(x − median) / IQR'], correct: 1, exp: 'z = (x − mean) / (standard deviation).' },
          { q: 'Z-scores are expressed in which units?', opts: ['Squared units of x', 'Percent', 'No units at all', 'The same units as x'], correct: 2, exp: 'A z-score is a pure count of standard deviations — no units, which is what lets it compare different variables.' },
          { q: 'A value with z = −2.3 is:', opts: ['2.3 standard deviations above the mean', 'Impossible', 'Exactly at the 2.3rd percentile', '2.3 standard deviations below the mean'], correct: 3, exp: 'Negative means below the mean; the magnitude (2.3) is the distance in standard deviations.' },
          { q: 'Roughly what portion of data falls within 1 standard deviation of the mean?', opts: ['The majority of it', 'None of it', 'Virtually all of it', 'Exactly half'], correct: 0, exp: 'The 1/2/3-sd guideline: majority within 1 sd, a large majority within 2, virtually all within 3.' },
          { q: 'A student scores 78 on an exam with mean 80 and sd 0.5, giving z = −4. This tells you the score was:', opts: ['An average performance', 'An excellent performance', 'Impossible to interpret', 'An extremely poor performance relative to everyone else'], correct: 3, exp: 'Virtually all data sits within 3 sd of the mean, so z = −4 is dramatically far below.' },
          { q: 'A dog has z = 1.67 for weight; a cat has z = 2.5 for weight. Relative to its own species, which animal is bigger?', opts: ['The dog', 'The cat', 'Both equally', 'Cannot be compared'], correct: 1, exp: 'The cat’s z-score is farther from its mean, even though it weighs less in raw pounds than the dog.' },
          { q: 'If you convert a variable’s units (e.g. feet to inches), a specific data value’s z-score:', opts: ['Doubles', 'Becomes zero', 'Stays exactly the same', 'Cannot be calculated anymore'], correct: 2, exp: 'Z-scores measure relative position, which does not change when the units change.' },
          { q: 'Distribution A and Distribution B share the same mean, but A has a smaller standard deviation than B. Which is true?', opts: ['A’s values typically sit closer to the mean than B’s do', 'B’s values typically sit closer to the mean', 'A and B are identically spread', 'Nothing can be said about spread'], correct: 0, exp: 'A smaller standard deviation means values typically sit closer to the mean.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Compare with the same graph, twice', body: 'Center, spread, shape, and outliers all compare directly — but box plots are the one graph that can’t reveal clusters or gaps.' },
          { num: 'ii.', title: 'z = (x − mean) / sd', body: 'A z-score is the number of standard deviations a value sits from the mean — and it carries no units at all.' },
          { num: 'iii.', title: 'Sign tells the side, size tells the distance', body: 'Negative is below the mean, positive is above — and the further from 0, the more unusual the value.' },
          { num: 'iv.', title: '1 / 2 / 3 is a rough compass', body: 'Majority of data within 1 sd, a large majority within 2, virtually all within 3 — anything past 2 or 3 starts looking like an outlier.' },
          { num: 'v.', title: 'Z-scores compare apples to oranges', body: 'Stripped of units, a z-score lets you compare a test score to a test score, a dog to a cat, or a value in one distribution to a value in a totally different one.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A distribution has mean 50 and sd 4. What is the z-score of a value of 42?', opts: ['-2', '-8', '2', '-1.5'], correct: 0, exp: 'z = (42 − 50) / 4 = −2.' },
        { q: 'A distribution has mean 100 and sd 15. What is the z-score of a value of 130?', opts: ['1.33', '2', '-2', '30'], correct: 1, exp: 'z = (130 − 100) / 15 = 2.' },
        { q: 'Which graph type cannot directly show gaps or clusters in a data set?', opts: ['Histogram', 'Dot plot', 'Box plot', 'Stem-and-leaf plot'], correct: 2, exp: 'A box plot only shows five summary numbers, so gaps and clusters are invisible.' },
        { q: 'In a back-to-back stem-and-leaf plot, what is shared between the two sides?', opts: ['The leaves', 'The stems', 'The mean', 'The sample size'], correct: 1, exp: 'Both groups share one middle column of stems, with leaves running in opposite directions.' },
        { q: 'A distribution has mean 68 and sd 3. A value has z = +1.5. What is that value?', opts: ['72.5', '63.5', '70', '66.5'], correct: 0, exp: 'x = z·sd + mean = 1.5(3) + 68 = 72.5.' },
        { q: 'Using that same distribution (mean 68, sd 3), what value has z = −2?', opts: ['65', '62', '74', '71'], correct: 1, exp: 'x = −2(3) + 68 = 62.' },
        { q: 'A z-score of exactly 0 means:', opts: ['The value equals the median', 'The value is the maximum', 'The value equals the mean', 'This can never occur'], correct: 2, exp: 'z = 0 happens exactly when x equals the mean.' },
        { q: 'Which of these has no units at all?', opts: ['The mean', 'The standard deviation', 'The median', 'The z-score'], correct: 3, exp: 'A z-score is a pure count of standard deviations, so it carries no units.' },
        { q: 'In Distribution A (mean 10, sd 2), a value of 14 has z = 2. In Distribution B (mean 50, sd 10), a value of 70 has z = 2. Which value is relatively higher?', opts: ['They are equally high relative to their own distribution', 'The value in A is relatively higher', 'The value in B is relatively higher', 'Cannot be compared'], correct: 0, exp: 'Both have the same z-score, so both sit an identical distance (in sd) above their own mean.' },
        { q: 'In Distribution A (mean 10, sd 2), a value of 6 has z = −2. In Distribution B (mean 50, sd 10), a value of 40 has z = −1. Which value is relatively lower?', opts: ['The value in B is relatively lower', 'The value in A is relatively lower', 'They are equally low', 'Cannot be determined'], correct: 1, exp: 'z = −2 is farther below the mean than z = −1, so the value in Distribution A is relatively lower.' },
        { q: 'Roughly what proportion of data falls within 3 standard deviations of the mean?', opts: ['About 50%', 'About 68%', 'Virtually all of it', 'Exactly 100%, with no exceptions'], correct: 2, exp: 'Virtually all data sits within 3 sd of the mean, though rare exceptions are possible.' },
        { q: 'A value has z = +3.8. This value is:', opts: ['A typical value', 'Exactly average', 'Impossible', 'An extremely rare, unusual value'], correct: 3, exp: 'Values beyond 3 sd from the mean are extremely uncommon.' },
        { q: 'The mean weight of hens is 4 lb, sd 0.5 lb. One hen weighs 5.5 lb. What is her z-score?', opts: ['3', '-3', '1.5', '0.375'], correct: 0, exp: 'z = (5.5 − 4) / 0.5 = 3.' },
        { q: 'A back-to-back stem plot compares apartment rents in City A and City B. City A’s leaves stay close to the stem; City B’s leaves stretch far from the stem. What does this suggest?', opts: ['City A is more spread out', 'City B is more spread out', 'Both cities have equal spread', 'Spread cannot be read from a stem plot'], correct: 1, exp: 'Leaves stretching farther from the stem indicate more spread-out data.' },
        { q: 'Which measure of position gives a value’s exact standardized distance from the mean, unlike the median?', opts: ['Percentile', 'Five-number summary', 'Z-score', 'Interquartile range'], correct: 2, exp: 'A z-score directly measures distance from the mean in standard-deviation units.' },
        { q: 'A class has mean test score 82, sd 4. A student scores 88. What is that student’s z-score?', opts: ['6', '0.67', '-1.5', '1.5'], correct: 3, exp: 'z = (88 − 82) / 4 = 1.5.' },
        { q: 'In that same class (mean 82, sd 4), a student scores 78. What is that z-score?', opts: ['-1', '1', '-4', '4'], correct: 0, exp: 'z = (78 − 82) / 4 = −1.' },
        { q: 'Between the score of 88 (z = 1.5) and the score of 78 (z = −1), which is farther from the mean?', opts: ['78', '88', 'They are equally far', 'Cannot be determined'], correct: 1, exp: '|1.5| is greater than |−1|, so 88 is farther from the mean in standard-deviation terms.' },
        { q: 'A data set is converted from dollars to cents. What happens to each value’s z-score?', opts: ['It multiplies by 100', 'It divides by 100', 'It stays exactly the same', 'It becomes 0'], correct: 2, exp: 'Both the value and the mean/sd scale by the same factor, so the ratio — the z-score — is unchanged.' },
        { q: 'Why might you avoid reporting z-scores for individual values in a skewed, outlier-heavy data set?', opts: ['Z-scores cannot be computed without outliers present', 'Z-scores only work for categorical data', 'Z-scores only work for normal populations by definition', 'Z-scores are built from the mean and standard deviation, which are misleading for skewed or outlier-heavy data'], correct: 3, exp: 'Since the mean and sd themselves get distorted by skew and outliers, a z-score built from them inherits that distortion.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.10 — The Investigative Question & Collecting Data
   Source: course transcript (Topic 1.10 lecture)
   ============================================ */

registerChapters({
  '1-10': {
    id: '1-10',
    code: 'Topic 1.10',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'The Investigative Question & Collecting Data',
    cardSummary: 'The three components every investigative question quietly promises — how to collect the data, how to analyze it, and who the conclusions apply to — plus census, sample, experiment, and observational study.',
    heroTitle: 'One question. <em>Three</em><br>promises.',
    heroSub: 'A good investigative question secretly promises three things: how the data will be collected, how it will be analyzed, and who the conclusions will apply to. Get any one of those wrong and the whole study falls apart.',
    source: 'Topic 1.10 course video',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Every investigative question makes <span class="underline teal">three promises</span>.',
        body: 'An investigative question isn’t just something you ask — it quietly commits you to a plan for collecting data, a technique for analyzing it, and a scope for what you’re allowed to conclude afterward.',
        cards: [
          { roman: 'I.', title: 'Guides collection', body: 'The question tells you what to collect and how: <strong>census</strong> (everyone), a <strong>sample</strong>, an <strong>experiment</strong> (impose a treatment), or an <strong>observational study</strong> (just record).', tags: ['Census','Sample','Experiment','Observational study'] },
          { roman: 'II.', title: 'Guides analysis', body: 'Estimating an unknown parameter calls for a <strong>confidence interval</strong>. Testing an existing claim calls for a <strong>hypothesis test</strong>.', tags: ['Confidence interval','Hypothesis test'], accent: 'sample' },
          { roman: 'III.', title: 'Guides conclusions', body: 'Random <strong>selection</strong> earns you the right to generalize to the population. Random <strong>assignment</strong> in an experiment earns you the word "cause."', tags: ['Generalize','Cause-and-effect'] }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">eleven words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'investigative-question-3', term: 'Investigative question (3 components)', accent: 'population', body: 'A question that must (1) guide how data will be collected, (2) guide which analysis technique is used, and (3) indicate who the conclusions can be generalized to.' },
          { id: 'census', term: 'Census', accent: 'population', body: 'Recording information from every single item or individual in the population — gives you the exact parameter, but is often too slow or costly for large populations.' },
          { id: 'random-mechanism', term: 'Random mechanism', accent: 'sample', body: 'Any process that gives every observational unit an equal chance of being selected into a sample.' },
          { id: 'experiment', term: 'Experiment', accent: 'sample', body: 'A study in which a researcher imposes treatments on experimental units to see whether changing the explanatory variable changes the response variable.' },
          { id: 'explanatory-response', term: 'Explanatory & response variable', accent: 'sample', body: 'The explanatory variable (treatment) is what the researcher manipulates; the response variable is the outcome measured afterward.' },
          { id: 'experimental-unit-subject', term: 'Experimental unit / subject', accent: 'sample', body: 'The individual — person, animal, or object — a treatment is assigned to. When it’s a person, we usually call them a subject.' },
          { id: 'observational-study', term: 'Observational study', accent: 'population', body: 'A study where the researcher only records existing variables without imposing any treatment. Includes prospective (following forward) and retrospective (looking back) designs.' },
          { id: 'confounding-variable-10', term: 'Confounding variable', accent: 'sample', body: 'A variable related to both the explanatory and response variables in an observational study — offering an alternative explanation for the result, and blocking any cause-and-effect claim.' },
          { id: 'confidence-interval', term: 'Confidence interval', accent: 'population', body: 'A range of values, built from a sample statistic, used to estimate an unknown population parameter with a stated level of confidence.' },
          { id: 'hypothesis-test', term: 'Hypothesis test', accent: 'population', body: 'A statistical process that uses sample evidence to decide whether a claimed value for a population parameter (the null hypothesis) should be rejected in favor of an alternative.' },
          { id: 'generalization', term: 'Generalization', accent: 'sample', body: 'Applying a conclusion from a sample to a larger group. Valid for the entire population only if the sample was randomly selected; otherwise, valid only for individuals similar to those studied.' }
        ]
      },

      /* ---------------- 3. FOUR METHODS, TWO TECHNIQUES ---------------- */
      {
        type: 'compare-table', id: 'compare', label: 'Section 03 — Four Methods, Two Techniques',
        heading: 'Collect it <span class="underline teal">one of four ways</span>. Analyze it <span class="underline sample">one of two ways</span>.',
        items: [
          {
            title: 'Four ways to collect data',
            headers: ['Method', 'Imposes a treatment?', 'Covers whole population?', 'Typical use'],
            rows: [
              ['Census', 'No', 'Yes — every individual', 'Small populations where reaching everyone is realistic'],
              ['Sample survey', 'No', 'No — a subset only', 'Most large populations; relies on random selection plus a survey or measurement'],
              ['Experiment', 'Yes — researcher assigns treatments', 'No — a subset (often volunteers)', 'Testing whether an explanatory variable causes a change in a response'],
              ['Observational study', 'No — variables are only recorded', 'No — a subset, random or not', 'Studying variables you cannot or should not manipulate (sleep habits, past behavior)']
            ],
            caption: 'A census and a sample survey both just record what’s already there — the only difference is whether you reach everyone or only a subset. An experiment is the one method where the researcher imposes something.'
          },
          {
            title: 'Confidence interval vs. hypothesis test',
            headers: ['', 'Confidence interval', 'Hypothesis test'],
            rows: [
              ['Purpose', 'Estimate an unknown population parameter', 'Decide whether a claimed value for a parameter should be rejected'],
              ['Question shape', '"What is the true proportion / mean …?"', '"Is there evidence the true proportion / mean is greater than / less than / different from [claimed value]?"'],
              ['What you get back', 'A range of plausible values at some confidence level — e.g. "95% confident it’s between 41% and 48%"', 'A conclusion about whether the sample gives convincing evidence against a specific claim']
            ],
            caption: 'If nobody has claimed a specific number yet, you’re estimating — use a confidence interval. If somebody already claimed a number and you want to test it, use a hypothesis test.'
          }
        ]
      },

      /* ---------------- 4. WHO CAN YOU CONCLUDE THIS FOR? ---------------- */
      {
        type: 'flow', id: 'decision', label: 'Section 04 — Who Can You Conclude This For?',
        heading: 'Two questions decide <span class="underline sample">what you’re allowed to claim</span>.',
        body: 'These two questions are independent of each other — answer them separately for any study.',
        items: [
          {
            question: 'Were the observational or experimental units randomly selected from the population?',
            branches: [
              { label: 'Yes', tone: 'good', outcomes: [{ title: 'Generalize to the whole population', body: 'You may apply your conclusions to every individual in the population the sample came from.' }] },
              { label: 'No', tone: 'bad', outcomes: [{ title: 'Generalize only to similar individuals', body: 'You may only apply your conclusions to individuals similar to those actually used in the study — not the whole population.' }] }
            ]
          },
          {
            question: 'Was it an experiment, with subjects randomly assigned to treatment groups?',
            branches: [
              { label: 'Yes — experiment + random assignment', tone: 'good', outcomes: [{ title: 'You can say cause-and-effect', body: 'Random assignment lets you conclude the explanatory variable caused the change in the response variable.' }] },
              { label: 'No — observational study, or no random assignment', tone: 'bad', outcomes: [{ title: 'You cannot say cause-and-effect', body: 'Without random assignment to treatments, a lurking confounding variable could be the real explanation — you can only claim an association.' }] }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 05 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A ',
            { id:'b1', answer:'census', options:['census','sample','experiment'] },
            ' records information from every individual in the population, while a sample only records information from a ',
            { id:'b2', answer:'subset', options:['subset','majority','random half'] },
            ' of it.'
          ]},
          { segments: [
            'In an experiment, the researcher ',
            { id:'b3', answer:'imposes', options:['imposes','observes','ignores'] },
            ' a treatment on experimental units, while in an ',
            { id:'b4', answer:'observational study', options:['observational study','census','random sample'] },
            ', the researcher only records existing variables without giving anyone a treatment.'
          ]},
          { segments: [
            'A variable that is related to both the explanatory and response variables in an observational study, and offers an alternative explanation for the result, is called a ',
            { id:'b5', answer:'confounding variable', options:['confounding variable','response variable','random mechanism'] },
            '.'
          ]},
          { segments: [
            'If a claim about a population parameter already exists and you want to test whether the data contradicts it, use a ',
            { id:'b6', answer:'hypothesis test', options:['hypothesis test','confidence interval','census'] },
            '; if instead you simply want to estimate an unknown parameter, use a ',
            { id:'b7', answer:'confidence interval', options:['confidence interval','hypothesis test','random sample'] },
            '.'
          ]},
          { segments: [
            'You may generalize your conclusions to the entire population only if the sample was selected ',
            { id:'b8', answer:'randomly', options:['randomly','by convenience','from volunteers'] },
            '; otherwise, you may only generalize to individuals similar to those in the study.'
          ]},
          { segments: [
            'You may claim a cause-and-effect relationship only if the study was an ',
            { id:'b9', answer:'experiment', options:['experiment','observational study','census'] },
            ' with random ',
            { id:'b10', answer:'assignment', options:['assignment','selection','sampling'] },
            ' of subjects to treatment groups.'
          ]}
        ]
      },

      /* ---------------- 6. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 06 — Worked Examples',
        heading: 'Read the scenario. <span class="underline teal">Name all three components.</span>',
        body: 'For each study: how was the data collected, what technique analyzes it, and who can the conclusions apply to? Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'A high school wants to know the average number of hours students sleep on school nights. Every student in the school fills out a short online form reporting their typical hours of sleep.',
            fields: [
              { k: 'Collection method', v: 'A census — every student in the school was surveyed, not just a sample' },
              { k: 'Data-analysis technique', v: 'A confidence interval — the question just wants to estimate the typical number of hours slept, not test a specific claim' },
              { k: 'Generalization', v: 'Since every student was included, results apply to the entire school population by definition' }
            ]
          },
          {
            q: 'Researchers record the amount of time 200 randomly selected people spend on social media each day and compare it to their reported stress levels. No treatments were assigned.',
            fields: [
              { k: 'Collection method', v: 'An observational study (a sample survey) — no treatment was imposed, and only 200 of the larger population were sampled' },
              { k: 'Data-analysis technique', v: 'Confidence intervals — one to estimate typical social-media time, another to estimate typical stress level' },
              { k: 'Generalization', v: 'Because the 200 people were randomly selected, results generalize to the larger population they were drawn from' }
            ]
          },
          {
            q: 'A nutrition researcher randomly assigns 100 volunteer adults to one of two groups: one drinks a protein shake every morning for 6 weeks, the other does not. After 6 weeks, muscle mass is compared between groups.',
            fields: [
              { k: 'Collection method', v: 'An experiment — the researcher imposed a treatment (the shake) on some subjects and not others' },
              { k: 'Data-analysis technique', v: 'A hypothesis test — comparing whether the shake group’s mean muscle mass is greater than the no-shake group’s' },
              { k: 'Cause-and-effect?', v: 'Yes — random assignment to the two groups supports a cause-and-effect claim' },
              { k: 'Generalization', v: 'Only to people similar to these 100 volunteers, since they were not randomly selected from the larger population — they had to volunteer' }
            ]
          },
          {
            q: 'A large school district randomly assigns 10 of its 20 elementary schools to a new math curriculum for a year, while the other 10 continue with the current curriculum. At year’s end, average math scores are compared.',
            fields: [
              { k: 'Collection method', v: 'An experiment — the district assigned which schools got which curriculum' },
              { k: 'Cause-and-effect?', v: 'Yes — random assignment of schools to curriculum groups supports a cause-and-effect claim' },
              { k: 'Generalization', v: 'To all elementary schools in this district, since all 20 schools (the entire relevant population) were included and randomly split — no volunteers involved' }
            ]
          },
          {
            q: 'The transportation department collects commute-time data from 150 drivers pulled from a database of all registered drivers in the city, but never states that the 150 were selected randomly.',
            fields: [
              { k: 'Collection method', v: 'An observational study (a sample survey) of registered drivers' },
              { k: 'Data-analysis technique', v: 'A confidence interval, to estimate the true average commute time' },
              { k: 'Generalization', v: 'Only to drivers similar to those 150 — since random selection was never stated, results cannot be generalized to all registered drivers' }
            ]
          }
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'Recording information from every single individual in a population.', term: 'Census', detail: 'Gives you the exact parameter, but often too costly or slow for large populations.' },
          { prompt: 'A researcher decides who gets a treatment and who doesn’t.', term: 'Experiment', detail: 'The defining feature: imposing a treatment on experimental units.' },
          { prompt: 'A researcher only records existing variables — nobody is given anything.', term: 'Observational study', detail: 'Includes prospective (forward-looking) and retrospective (backward-looking) designs.' },
          { prompt: 'A hidden variable related to both the explanatory and response variables, offering an alternative explanation.', term: 'Confounding variable', detail: 'Exactly what blocks a cause-and-effect claim in observational studies.' },
          { prompt: '"I’m 95% confident the true proportion is between 41% and 48%." What technique produced this?', term: 'Confidence interval', detail: 'Estimates an unknown population parameter within a range.' },
          { prompt: '"Is there evidence the true mean is greater than the claimed 5.5 inches?" What technique answers this?', term: 'Hypothesis test', detail: 'Tests a specific claim about a population parameter using sample evidence.' },
          { prompt: 'The sample was not randomly selected from the population. Can you generalize your findings to everyone?', term: 'No — only to individuals similar to those studied', detail: 'Random selection is required to generalize to the entire population.' },
          { prompt: 'It was an experiment, and subjects were randomly assigned to treatment groups. Can you claim cause-and-effect?', term: 'Yes', detail: 'Random assignment — not random selection — is what earns you the word "cause."' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'Which of the four data-collection methods is the only one where the researcher imposes a treatment?', opts: ['Census', 'Observational study', 'Sample survey', 'Experiment'], correct: 3, exp: 'Only an experiment involves the researcher assigning a treatment to subjects.' },
          { q: 'A study records every single student in a school, with no treatment given. This is a:', opts: ['Census', 'Experiment', 'Hypothesis test', 'Confounding variable'], correct: 0, exp: 'Surveying the entire population, with no treatment imposed, is a census.' },
          { q: 'In an experiment, the outcome measured after the treatment is called the:', opts: ['Explanatory variable', 'Confounding variable', 'Response variable', 'Parameter'], correct: 2, exp: 'The response variable is the outcome measured after treatment is applied.' },
          { q: 'A hidden variable related to both the explanatory and response variables in an observational study is a:', opts: ['Response variable', 'Confounding variable', 'Treatment', 'Census'], correct: 1, exp: 'That is exactly the definition of a confounding variable.' },
          { q: 'Which technique estimates an unknown population parameter, with no existing claim to test?', opts: ['Hypothesis test', 'Census', 'Random assignment', 'Confidence interval'], correct: 3, exp: 'A confidence interval estimates an unknown parameter; a hypothesis test evaluates an existing claim.' },
          { q: 'A company claims its tortillas average 5.5 in, and you want to test whether the true mean is actually less. Which technique fits?', opts: ['Hypothesis test', 'Confidence interval', 'Census', 'Random assignment'], correct: 0, exp: 'Testing an existing claim calls for a hypothesis test.' },
          { q: 'A sample was NOT randomly selected from the population. What can you conclude?', opts: ['You can generalize to the entire population', 'You can only generalize to individuals similar to the sample', 'You can claim cause-and-effect', 'No conclusions are possible at all'], correct: 1, exp: 'Without random selection, generalization is limited to individuals similar to those studied.' },
          { q: 'To claim a cause-and-effect relationship, a study must be:', opts: ['A census with no experiment', 'An observational study with a large sample', 'An experiment with random assignment of treatments', 'Any study with over 100 subjects'], correct: 2, exp: 'Cause-and-effect requires an experiment with random assignment to treatment groups.' },
          { q: '100 volunteers are randomly assigned to two treatment groups in an experiment. What can be concluded?', opts: ['Cause-and-effect for the volunteers, but generalization only to people similar to them', 'Cause-and-effect and full generalization to the whole population', 'No cause-and-effect claim is possible', 'Generalization to the population but no cause-and-effect claim'], correct: 0, exp: 'Random assignment earns "cause," but volunteers (not randomly selected) limit generalization.' },
          { q: 'Which of these is an example of a retrospective observational study?', opts: ['Following students forward for a year to record grades', 'Looking back at existing medical records to compare past behaviors of two groups', 'Randomly assigning subjects to a new treatment', 'Surveying every member of a population'], correct: 1, exp: 'Retrospective means looking backward at data that already exists.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Three promises in one question', body: 'An investigative question quietly commits to a collection plan, an analysis technique, and a scope for its conclusions.' },
          { num: 'ii.', title: 'Only experiments impose a treatment', body: 'Census, sample survey, and observational study all just record what’s already there — an experiment is the one method that manipulates something.' },
          { num: 'iii.', title: 'Estimate, or test a claim?', body: 'No existing number to check → confidence interval. Someone already claimed a number → hypothesis test.' },
          { num: 'iv.', title: 'Random selection → generalize', body: 'You can only extend conclusions to the whole population if the sample was randomly selected from it.' },
          { num: 'v.', title: 'Random assignment → cause-and-effect', body: 'Only an experiment with random assignment of subjects to treatments earns you the word "cause."' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A researcher records the wingspan of every single butterfly in a small enclosed butterfly house (only 40 butterflies total). This is a:', opts: ['Census', 'Sample survey', 'Experiment', 'Hypothesis test'], correct: 0, exp: 'Every individual in this small population was measured, making it a census.' },
        { q: 'A researcher randomly assigns 60 plants to receive either fertilizer A or fertilizer B, then measures plant height after 8 weeks. This is a:', opts: ['Census', 'Experiment', 'Observational study', 'Confidence interval'], correct: 1, exp: 'Assigning a treatment (fertilizer type) to experimental units makes this an experiment.' },
        { q: 'A researcher simply records whether 300 randomly selected voters support a ballot measure, without giving anyone any treatment. This is a:', opts: ['Experiment', 'Census', 'Observational study', 'Hypothesis test'], correct: 2, exp: 'No treatment was imposed, and only a subset was sampled — an observational study (sample survey).' },
        { q: 'In an experiment testing whether a new fertilizer increases crop yield, what is the response variable?', opts: ['The type of fertilizer', 'The plot of land', 'Whether a plot got fertilizer or not', 'The crop yield measured at the end'], correct: 3, exp: 'The response variable is the outcome measured — here, the crop yield.' },
        { q: 'What is the defining feature that makes a study an experiment rather than an observational study?', opts: ['The researcher imposes a treatment on the experimental units', 'The sample size is larger than 30', 'The data is quantitative', 'The study uses a survey'], correct: 0, exp: 'Imposing a treatment is exactly what distinguishes an experiment from an observational study.' },
        { q: 'A study observing whether people who already drink coffee daily have different sleep quality than those who don’t, with no treatment assigned, is:', opts: ['An experiment', 'An observational study', 'A census', 'A hypothesis test'], correct: 1, exp: 'Existing coffee habits are simply observed, not assigned — an observational study.' },
        { q: 'A gym wants to know if a new workout program reduces recovery time. Researchers randomly assign volunteers to either the new program or the old one. What could act as a confounding variable if not controlled?', opts: ['The workout program itself', 'The recovery time measured', 'Participants’ existing fitness level, if it differs a lot between groups', 'The researcher’s name'], correct: 2, exp: 'A variable related to both the treatment and the outcome — like pre-existing fitness level — could confound the result if it isn’t balanced across groups.' },
        { q: 'A poll wants to estimate what proportion of a town supports building a new library, with no specific number already claimed. Which technique fits?', opts: ['Hypothesis test', 'Census of every resident, always', 'Random assignment', 'Confidence interval'], correct: 3, exp: 'Estimating an unknown proportion, with nothing specific to test, calls for a confidence interval.' },
        { q: 'A cereal company claims its boxes average 14 oz. A shopper group wants to test whether the true mean is actually less. Which technique fits?', opts: ['Hypothesis test', 'Confidence interval', 'Census', 'Observational study only'], correct: 0, exp: 'Testing an existing specific claim calls for a hypothesis test.' },
        { q: 'Which phrase in an investigative question signals that a hypothesis test — not a confidence interval — is needed?', opts: ['"What is the true proportion of...?"', '"Is there evidence that the true mean is greater than [a specific claimed value]?"', '"Estimate the average time spent..."', '"What is the range of likely values for...?"'], correct: 1, exp: 'Testing against a specific claimed value is the signature of a hypothesis test.' },
        { q: 'A random sample of 500 shoppers is surveyed about produce spending, and the results are generalized to all shoppers at that chain. What justifies this generalization?', opts: ['The sample size was over 100', 'No justification is needed for any sample', 'The 500 shoppers were randomly selected from the population', 'The study was a census'], correct: 2, exp: 'Random selection from the population is exactly what earns the right to generalize to it.' },
        { q: 'A study uses only volunteers, with no random selection from the broader population, but does randomly assign those volunteers to treatment groups. What can be concluded?', opts: ['Nothing at all can be concluded', 'Generalization to the whole population, but no cause-and-effect claim', 'Neither cause-and-effect nor generalization is possible', 'A cause-and-effect claim for the volunteers, but generalization only to people similar to them'], correct: 3, exp: 'Random assignment (not random selection) earns cause-and-effect; without random selection, generalization is limited to similar individuals.' },
        { q: 'A study is an observational study, not an experiment. Can the researchers claim a cause-and-effect relationship, even with a very large random sample?', opts: ['No — cause-and-effect requires an experiment with random assignment', 'Yes, as long as the sample is random', 'Yes, as long as the sample size exceeds 1,000', 'Yes, but only for quantitative variables'], correct: 0, exp: 'Random selection alone is never enough for cause-and-effect — that requires an experiment with random assignment.' },
        { q: 'A confounding variable is best described as one that:', opts: ['Is measured after the response variable only', 'Is related to both the explanatory and response variables, offering an alternative explanation for the result', 'Only appears in experiments, never in observational studies', 'Always makes a study invalid and unusable'], correct: 1, exp: 'A confounding variable is tied to both the explanatory and response variables, muddying any cause-and-effect claim.' },
        { q: 'A prospective observational study is one where:', opts: ['Data from the past is gathered after subjects are identified', 'Treatments are randomly assigned to subjects', 'Subjects are identified at one point in time, then followed forward to collect future data', 'Every member of the population is surveyed'], correct: 2, exp: 'Prospective means looking forward — subjects are identified now and followed into the future.' },
        { q: 'A retrospective observational study is one where:', opts: ['Subjects are followed forward in time', 'Treatments are imposed on subjects', 'Every member of the population must be surveyed', 'Subjects are identified at one point in time, and data about their past is gathered'], correct: 3, exp: 'Retrospective means looking backward at data that already exists about the subjects’ past.' },
        { q: 'Why is a census often impractical for very large populations?', opts: ['It is usually too costly, slow, or logistically difficult to reach every individual', 'Censuses are illegal for populations over 10,000', 'Censuses can only be used for categorical variables', 'Censuses always produce biased results'], correct: 0, exp: 'Reaching every single individual in a huge population is typically too expensive or time-consuming.' },
        { q: 'A city surveys a random sample of residents about park usage; no one’s behavior is manipulated. Which data-collection method is this?', opts: ['Experiment', 'Observational study (sample survey)', 'Census', 'Retrospective experiment'], correct: 1, exp: 'No treatment was imposed, and only a subset was surveyed — an observational study.' },
        { q: 'Which best distinguishes a confidence interval from a hypothesis test?', opts: ['A confidence interval always uses more data than a hypothesis test', 'A hypothesis test can only be used with categorical variables', 'A confidence interval estimates an unknown parameter, while a hypothesis test evaluates a specific claim about a parameter', 'They are two different names for the exact same procedure'], correct: 2, exp: 'That is the core distinction between the two techniques.' },
        { q: 'A study’s conclusions may be generalized to the entire population from which the sample was drawn only if:', opts: ['The sample size is at least 30', 'The study is an experiment', 'The response variable is quantitative', 'The sample was randomly selected from that population'], correct: 3, exp: 'Random selection from the population is required before generalizing conclusions to it.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.11 — Random Sampling Methods
   Source: course transcript (Topic 1.11 lecture)
   ============================================ */

registerChapters({
  '1-11': {
    id: '1-11',
    code: 'Topic 1.11',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Random Sampling Methods',
    cardSummary: 'Sampling with vs. without replacement, and the four random sampling methods — simple random, stratified, cluster, and systematic — each with a different guarantee and a different best use case.',
    heroTitle: 'Random doesn’t mean <em>messy</em>.',
    heroSub: 'A "random" sample still runs on a very specific procedure. Simple random, stratified, cluster, and systematic sampling each guarantee randomness in a different way — and each fits a different kind of population.',
    source: 'Topic 1.11 course video',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Four ways to draw a <span class="underline teal">random sample</span>.',
        body: 'Every usable sample in this course must be random — no volunteers, no convenience. Beyond that, the four methods below differ only in how they use groups within the population.',
        cards: [
          { roman: 'I.', title: 'Replace it, or don’t?', body: 'Sampling <strong>without replacement</strong> — a unit can’t be picked twice — is the default in almost all of AP Statistics. <strong>With replacement</strong> means a unit goes back and could be picked again.', tags: ['Without replacement (default)','With replacement'] },
          { roman: 'II.', title: 'Four methods, one goal', body: '<strong>Simple random</strong>, <strong>stratified</strong>, <strong>cluster</strong>, and <strong>systematic</strong> sampling all aim for a representative sample — they just use groups (or a list) differently to get there.', tags: ['Simple random','Stratified','Cluster','Systematic'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">nine words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'without-replacement', term: 'Sampling without replacement', accent: 'population', body: 'Once an observational unit is selected, it is not returned to the population and cannot be picked again — the default in almost all of AP Statistics.' },
          { id: 'with-replacement', term: 'Sampling with replacement', accent: 'sample', body: 'An observational unit is returned to the population after being selected, so it could be picked again.' },
          { id: 'srs', term: 'Simple random sample (SRS)', accent: 'population', body: 'Every group of a given size has an equal chance of being selected. Procedure: number the population, use a random number generator, ignore repeats and unused numbers.' },
          { id: 'stratified', term: 'Stratified random sample', accent: 'sample', body: 'The population is divided into non-overlapping, homogeneous strata (groups sharing an attribute); a simple random sample is then taken from every stratum.' },
          { id: 'strata-homogeneous', term: 'Strata are homogeneous', accent: 'sample', body: 'Everyone inside one stratum shares the attribute being stratified on — e.g. every senior is in the "senior" stratum, and nowhere else.' },
          { id: 'cluster', term: 'Cluster sample', accent: 'population', body: 'The population is divided into heterogeneous clusters that each already mirror the population; one or more entire clusters are then randomly selected to form the whole sample.' },
          { id: 'cluster-heterogeneous', term: 'Clusters are heterogeneous', accent: 'sample', body: 'A good cluster is a nice mix of the population — the opposite of a stratum, which is homogeneous.' },
          { id: 'systematic', term: 'Systematic random sample', accent: 'population', body: 'A random starting point on an ordered list, followed by selecting every kth individual after it.' },
          { id: 'why-stratify', term: 'Why stratify (or cluster) at all', accent: 'sample', body: 'Only worth doing when an attribute of the population might actually affect the results. Stratifying on an irrelevant attribute reduces variation for no reason.' }
        ]
      },

      /* ---------------- 3. WATCHING FOUR METHODS PICK THE SAME POPULATION ---------------- */
      {
        type: 'chart', id: 'grids', label: 'Section 03 — Watching Four Methods Pick the Same Population',
        heading: 'Same <span class="underline teal">32 students</span>. Four different samples of 8.',
        body: 'Faded circles are the population; solid, ringed circles are who actually made it into the sample. All four diagrams draw from the exact same 32 students — only the method changes.',
        items: [
          {
            title: 'Simple random sample',
            chartType: 'populationgrid',
            spec: {
              cols: 8,
              legend: [{label:'Freshmen',group:0},{label:'Sophomores',group:1},{label:'Juniors',group:2},{label:'Seniors',group:3}],
              cells: [
                {group:0,selected:false},{group:1,selected:false},{group:2,selected:true},{group:3,selected:false},{group:1,selected:false},{group:0,selected:true},{group:3,selected:false},{group:2,selected:false},
                {group:2,selected:false},{group:3,selected:true},{group:0,selected:false},{group:1,selected:false},{group:3,selected:false},{group:2,selected:false},{group:1,selected:true},{group:0,selected:false},
                {group:1,selected:false},{group:0,selected:false},{group:3,selected:false},{group:2,selected:true},{group:0,selected:false},{group:1,selected:false},{group:2,selected:false},{group:3,selected:true},
                {group:3,selected:false},{group:2,selected:false},{group:1,selected:false},{group:0,selected:true},{group:2,selected:false},{group:3,selected:false},{group:0,selected:true},{group:1,selected:false}
              ]
            },
            caption: 'Every student gets a number; a random number generator picks 8. This particular scatter happens to land a mix of every grade — but it could just as easily have missed one entirely. That risk is exactly what the next two methods remove.'
          },
          {
            title: 'Stratified random sample',
            chartType: 'populationgrid',
            spec: {
              cols: 8,
              legend: [{label:'Freshmen',group:0},{label:'Sophomores',group:1},{label:'Juniors',group:2},{label:'Seniors',group:3}],
              cells: [
                {group:0,selected:false},{group:0,selected:true},{group:0,selected:false},{group:0,selected:false},{group:0,selected:false},{group:0,selected:true},{group:0,selected:false},{group:0,selected:false},
                {group:1,selected:false},{group:1,selected:true},{group:1,selected:false},{group:1,selected:false},{group:1,selected:false},{group:1,selected:true},{group:1,selected:false},{group:1,selected:false},
                {group:2,selected:false},{group:2,selected:true},{group:2,selected:false},{group:2,selected:false},{group:2,selected:false},{group:2,selected:true},{group:2,selected:false},{group:2,selected:false},
                {group:3,selected:false},{group:3,selected:true},{group:3,selected:false},{group:3,selected:false},{group:3,selected:false},{group:3,selected:true},{group:3,selected:false},{group:3,selected:false}
              ]
            },
            caption: 'Split into four homogeneous strata by grade level first (one row each), then 2 students are randomly selected from every stratum — guaranteeing all four grades appear in the sample, every single time.'
          },
          {
            title: 'Cluster sample',
            chartType: 'populationgrid',
            spec: {
              cols: 8,
              legend: [{label:'Freshmen',group:0},{label:'Sophomores',group:1},{label:'Juniors',group:2},{label:'Seniors',group:3}],
              cells: [
                {group:0,selected:false},{group:1,selected:false},{group:1,selected:true},{group:2,selected:true},{group:2,selected:false},{group:3,selected:false},{group:3,selected:false},{group:0,selected:false},
                {group:2,selected:false},{group:3,selected:false},{group:3,selected:true},{group:0,selected:true},{group:0,selected:false},{group:1,selected:false},{group:1,selected:false},{group:2,selected:false},
                {group:0,selected:false},{group:1,selected:false},{group:1,selected:true},{group:2,selected:true},{group:2,selected:false},{group:3,selected:false},{group:3,selected:false},{group:0,selected:false},
                {group:2,selected:false},{group:3,selected:false},{group:3,selected:true},{group:0,selected:true},{group:0,selected:false},{group:1,selected:false},{group:1,selected:false},{group:2,selected:false}
              ]
            },
            caption: 'Split into four heterogeneous clusters instead (each 2-column strip already contains a mix of all four grades). Randomly pick just one whole cluster — here, the second one — and everyone in it joins the sample.'
          },
          {
            title: 'Systematic random sample',
            chartType: 'populationgrid',
            spec: {
              cols: 8,
              legend: [{label:'Freshmen',group:0},{label:'Sophomores',group:1},{label:'Juniors',group:2},{label:'Seniors',group:3}],
              cells: [
                {group:0,selected:false},{group:1,selected:false},{group:2,selected:true},{group:3,selected:false},{group:1,selected:false},{group:0,selected:false},{group:3,selected:true},{group:2,selected:false},
                {group:2,selected:false},{group:3,selected:false},{group:0,selected:true},{group:1,selected:false},{group:3,selected:false},{group:2,selected:false},{group:1,selected:true},{group:0,selected:false},
                {group:1,selected:false},{group:0,selected:false},{group:3,selected:true},{group:2,selected:false},{group:0,selected:false},{group:1,selected:false},{group:2,selected:true},{group:3,selected:false},
                {group:3,selected:false},{group:2,selected:false},{group:1,selected:true},{group:0,selected:false},{group:2,selected:false},{group:3,selected:false},{group:0,selected:true},{group:1,selected:false}
              ]
            },
            caption: 'Line up the whole population in a fixed order, pick a random start (position 3 here), then take every 4th person after that. Fast, and spreads the sample evenly across the list.'
          }
        ]
      },

      /* ---------------- 4. THE FOUR METHODS, SIDE BY SIDE ---------------- */
      {
        type: 'compare-table', id: 'compare', label: 'Section 04 — The Four Methods, Side by Side',
        heading: 'Same goal. <span class="underline sample">Four different procedures.</span>',
        items: [
          {
            title: 'Simple random, stratified, cluster, and systematic sampling',
            headers: ['Method', 'Core idea', 'Procedure', 'Best used when'],
            rows: [
              ['Simple random sample (SRS)', 'Every group of a given size has an equal chance of being picked', 'Number everyone; use a random number generator to pick n numbers, ignoring repeats and unused numbers', 'No attribute of the population is critical enough to guarantee — random chance alone is trusted to mix things up'],
              ['Stratified random sample', 'Population split into homogeneous strata; sample randomly within each one', 'Divide by a shared attribute (e.g. grade level), then take a simple random sample from every group', 'A specific attribute might matter to the results, and every group must be guaranteed to appear'],
              ['Cluster sample', 'Population split into heterogeneous clusters, each already a mini population; select whole clusters at random', 'Label pre-existing natural groups (e.g. lunch periods), randomly pick one or more entire clusters', 'Natural, already-mixed groups exist, and individually visiting or labeling every person would be too slow'],
              ['Systematic sample', 'A random starting point, then every kth person after it, off an ordered list', 'Pick a random start, then select every kth name on the list', 'A complete list of the population already exists, and you want a fast, evenly spread sample']
            ],
            caption: 'Stratified sampling guarantees representation by visiting every group individually; cluster sampling is faster because it visits only one (or a few) whole groups — but only works if each cluster is already a realistic mini-population.'
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 05 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'Sampling ',
            { id:'b1', answer:'without replacement', options:['without replacement','with replacement','by convenience'] },
            ' means an observational unit is not returned to the population once selected, so it cannot be picked again — the method used in the large majority of AP Statistics.'
          ]},
          { segments: [
            'In a simple random sample, every group of a given size has an ',
            { id:'b2', answer:'equal chance', options:['equal chance','unequal chance','zero chance'] },
            ' of being selected — number every individual, then use a random number generator to select the needed amount, ignoring repeats and numbers no one has.'
          ]},
          { segments: [
            'A stratified random sample divides the population into non-overlapping, ',
            { id:'b3', answer:'homogeneous', options:['homogeneous','heterogeneous','random'] },
            ' strata based on a shared attribute, then takes a simple random sample from ',
            { id:'b4', answer:'each stratum', options:['each stratum','only one stratum','the largest stratum'] },
            '.'
          ]},
          { segments: [
            'A cluster sample divides the population into ',
            { id:'b5', answer:'heterogeneous', options:['heterogeneous','homogeneous','equal-sized'] },
            ' clusters — each one already a mini version of the population — and then randomly selects ',
            { id:'b6', answer:'one or more whole clusters', options:['one or more whole clusters','a few people from every cluster','the largest cluster only'] },
            ' to form the entire sample.'
          ]},
          { segments: [
            'A systematic random sample uses a random starting point on an ordered list, then selects every ',
            { id:'b7', answer:'kth', options:['kth','first','last'] },
            ' individual after it.'
          ]},
          { segments: [
            'You should stratify (or use a cluster sample) only when an attribute of the population might actually ',
            { id:'b8', answer:'affect the results', options:['affect the results','sound interesting','be easy to measure'] },
            ' — otherwise a simple random sample works just fine.'
          ]}
        ]
      },

      /* ---------------- 6. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 06 — Worked Examples',
        heading: 'One population. <span class="underline teal">Every method.</span>',
        body: 'Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'A high school has 1,200 students across 4 grades, each grade split into 3 homerooms of about 100 students. The administration wants a sample of 120 students. Describe how each method would work here.',
            fields: [
              { k: 'Simple random sample', v: 'Number all 1,200 students 1–1,200; use a random number generator to select 120 unique numbers (ignoring repeats and unused numbers); those 120 students form the sample' },
              { k: 'Stratified', v: 'Split students into 4 strata by grade level; randomly select 30 students from each grade, for a total of 120' },
              { k: 'Cluster', v: 'Treat each of the 12 homerooms as a cluster; randomly select whole homerooms (about 1–2 of them) until reaching roughly 120 students, and survey everyone in those homerooms' },
              { k: 'Systematic', v: 'Get a list of all 1,200 students in a fixed order, pick a random starting point, then take every 10th student on the list until 120 are selected' }
            ]
          },
          {
            q: 'A field of rocks has large rocks up north, medium rocks in the middle, and small rocks down south. Why does a "cluster sample" using north/middle/south as the clusters fail, and what would make it work?',
            fields: [
              { k: 'Why it fails', v: 'North, middle, and south are each homogeneous (all-large, all-medium, all-small) — not heterogeneous. Randomly picking one whole region as the "cluster" gives a sample of only one rock size, not a mix' },
              { k: 'The stratified fix', v: 'Treat north/middle/south as strata instead, and take a random sample of rocks from each region — that guarantees a mix of sizes' },
              { k: 'The cluster fix', v: 'Redefine the clusters as vertical strips running north-to-south, so each strip already contains a mix of large, medium, and small rocks — then randomly pick one or two whole strips' }
            ]
          }
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'A person is selected, then put back into the population, able to be picked again.', term: 'Sampling with replacement', detail: 'The less common approach in AP Statistics.' },
          { prompt: 'Every group of a given size has an equal chance of being picked — could theoretically be all one gender, all one grade, etc.', term: 'Simple random sample (SRS)', detail: 'Number everyone, then use a random number generator.' },
          { prompt: 'Population split into homogeneous groups by a shared attribute, then a random sample taken from every single group.', term: 'Stratified random sample', detail: 'Guarantees every group appears in the final sample.' },
          { prompt: 'Population split into heterogeneous groups that each already mirror the population, then one or more whole groups are randomly picked.', term: 'Cluster sample', detail: 'Much faster than stratified — you only visit the picked group(s).' },
          { prompt: 'A random starting point on a list, then every kth name after it.', term: 'Systematic random sample', detail: 'Fast, and requires an ordered list of the whole population.' },
          { prompt: 'What must be true of a stratum, for stratifying to make sense?', term: 'Homogeneous — everyone shares the attribute', detail: 'Unlike a cluster, which should be heterogeneous.' },
          { prompt: 'What must be true of a cluster, for cluster sampling to work well?', term: 'Heterogeneous — a mini version of the population', detail: 'A bad cluster (all one type) ruins the method.' },
          { prompt: 'Splitting rocks into "north / middle / south" (all-large / all-medium / all-small) and randomly picking one whole region as your sample.', term: 'A broken cluster sample — clusters must be heterogeneous, not homogeneous', detail: 'This design is really trying to be a stratified sample instead.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'Sampling without replacement means:', opts: ['A unit can be picked more than once', 'Every group has an equal chance of selection', 'A unit is not returned to the population once selected', 'The sample must include the entire population'], correct: 2, exp: 'Without replacement, once picked, a unit is removed from further consideration.' },
          { q: 'In a simple random sample, what has an equal chance of being selected?', opts: ['Every group of the given sample size', 'Only individuals from one category', 'Only the first individuals on a list', 'Every stratum, one at a time'], correct: 0, exp: 'The defining feature of an SRS: every possible group of that size is equally likely.' },
          { q: 'A stratified random sample requires strata that are:', opts: ['Heterogeneous, like a mini population', 'Homogeneous, sharing a common attribute', 'Exactly equal in size', 'Selected using a random number generator instead of grouping'], correct: 1, exp: 'Strata must be homogeneous — everyone inside shares the attribute being stratified on.' },
          { q: 'A cluster sample requires clusters that are:', opts: ['Homogeneous, sharing a common attribute', 'Exactly equal in size', 'Formed only after the sample is drawn', 'Heterogeneous, each one a mini version of the population'], correct: 3, exp: 'A good cluster mirrors the whole population — heterogeneous, not homogeneous.' },
          { q: 'A systematic random sample selects individuals by:', opts: ['Picking a random start, then every kth person on an ordered list', 'Splitting the population into homogeneous groups first', 'Selecting one or more entire pre-existing groups', 'Assigning treatments to experimental units'], correct: 0, exp: 'Random start + fixed interval down an ordered list is the systematic method.' },
          { q: 'Why might you choose to stratify a sample?', opts: ['To make data collection faster than any other method', 'Because stratifying is always required by AP Statistics', 'An attribute of the population (like age or grade) might affect the results and you want it represented', 'Because clusters cannot be found in your population'], correct: 2, exp: 'Stratifying is worth the extra effort only when an attribute might genuinely matter to the results.' },
          { q: 'Why is a cluster sample often faster than a stratified sample?', opts: ['Because clusters are always bigger than strata', 'Because you only need to visit the one or two whole clusters selected, not every group', 'Because cluster samples don’t require randomness', 'Because cluster samples use fewer strata by definition'], correct: 1, exp: 'Cluster sampling only requires visiting the chosen cluster(s), unlike stratified sampling, which visits every stratum.' },
          { q: 'A field of rocks has large rocks up north, medium in the middle, small down south. Randomly selecting one whole region as your entire sample is a poor cluster sample because:', opts: ['Regions cannot be numbered', 'Random number generators do not work on rocks', 'The sample size would be too small', 'Each region is homogeneous, not heterogeneous, so the sample would miss two of the three sizes entirely'], correct: 3, exp: 'A cluster needs to already mirror the whole population; a single-size region does not.' },
          { q: '1,200 students are numbered 1–1,200, and a random number generator selects 120 unique numbers, ignoring repeats and unused numbers. This is a:', opts: ['Simple random sample', 'Stratified random sample', 'Cluster sample', 'Systematic random sample'], correct: 0, exp: 'Numbering everyone and picking numbers with a random number generator is the SRS procedure.' },
          { q: 'A list of all 1,200 students is used, a random start is chosen, and every 10th student after it is selected. This is a:', opts: ['Simple random sample', 'Systematic random sample', 'Cluster sample', 'Stratified random sample'], correct: 1, exp: 'A random start plus a fixed interval down a list defines a systematic sample.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Without replacement is the default', body: 'Once picked, a unit is out for good — that’s how almost every sample in this course works.' },
          { num: 'ii.', title: 'SRS trusts pure chance', body: 'Every group of the target size has an equal shot — usually mixes nicely, but in theory could look strange.' },
          { num: 'iii.', title: 'Stratify to guarantee a mix', body: 'Split into homogeneous groups by an attribute that matters, then sample from every single one.' },
          { num: 'iv.', title: 'Cluster to save time', body: 'Split into heterogeneous whole-groups, pick just one or a few — but only works if those clusters really are mini populations.' },
          { num: 'v.', title: 'Systematic is a shortcut off a list', body: 'Random start, then a fixed interval — fast, and only needs one ordered list of the whole population.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A population of 500 people is numbered, and a random number generator selects 50 unique numbers to form the sample. This is a:', opts: ['Simple random sample', 'Stratified random sample', 'Cluster sample', 'Systematic random sample'], correct: 0, exp: 'Numbering everyone and using a random number generator is the SRS procedure.' },
        { q: 'A population is split by gender into two homogeneous groups, and a random sample is drawn from each group separately. This is a:', opts: ['Simple random sample', 'Stratified random sample', 'Cluster sample', 'Systematic random sample'], correct: 1, exp: 'Splitting into homogeneous groups and sampling from each is stratified sampling.' },
        { q: 'A company has 40 regional offices, each already a realistic mix of every job role. Two whole offices are randomly selected, and everyone in them is surveyed. This is a:', opts: ['Simple random sample', 'Stratified random sample', 'Cluster sample', 'Systematic random sample'], correct: 2, exp: 'Randomly selecting whole pre-existing heterogeneous groups is cluster sampling.' },
        { q: 'Every 25th name on an alphabetized list of employees is selected, starting from a randomly chosen name near the top. This is a:', opts: ['Simple random sample', 'Stratified random sample', 'Cluster sample', 'Systematic random sample'], correct: 3, exp: 'A random start plus a fixed interval down an ordered list is systematic sampling.' },
        { q: 'Sampling without replacement means:', opts: ['A selected individual cannot be selected again', 'A selected individual is returned and can be selected again', 'Every stratum must be equal in size', 'The sample must equal the population'], correct: 0, exp: 'Without replacement, a selected individual is removed from further selection.' },
        { q: 'Sampling with replacement means:', opts: ['A selected individual can never be chosen again', 'A selected individual is returned to the population and could be chosen again', 'Sampling is done without any randomness', 'The sample automatically becomes a census'], correct: 1, exp: 'With replacement, a selected individual goes back into the pool and could be picked again.' },
        { q: 'Which sampling method makes it possible, in theory, to end up with a sample of all one gender, purely by chance?', opts: ['Stratified random sample', 'Cluster sample', 'Simple random sample', 'Systematic random sample, always'], correct: 2, exp: 'An SRS trusts pure chance, so an unusual (though unlikely) sample is technically possible.' },
        { q: 'A stratum, by definition, should be:', opts: ['A random subset of any size', 'Heterogeneous, like a mini population', 'Exactly equal in size to other strata', 'Homogeneous — everyone sharing the attribute being stratified on'], correct: 3, exp: 'Strata are homogeneous groups defined by a shared attribute.' },
        { q: 'A cluster, by definition, should be:', opts: ['Heterogeneous — a nice mix, like a mini population', 'Homogeneous — everyone sharing one attribute', 'Selected only after the entire population is stratified', 'Impossible to use with human populations'], correct: 0, exp: 'A good cluster is heterogeneous, mirroring the whole population.' },
        { q: 'Why would a researcher choose a cluster sample over a stratified sample, when both are possible?', opts: ['Cluster samples always produce more accurate results', 'A cluster sample is usually much faster, since you only visit the whole cluster(s) selected', 'Cluster samples do not require any randomness', 'Stratified samples cannot use a random number generator'], correct: 1, exp: 'Cluster sampling saves time by visiting only the selected cluster(s), not every group.' },
        { q: 'Why would a researcher choose to stratify instead of using a simple random sample?', opts: ['Stratifying is always faster than a simple random sample', 'Stratifying requires no random number generator', 'An attribute of the population might affect the results, and stratifying guarantees that attribute is represented', 'Stratifying always produces a smaller sample size'], correct: 2, exp: 'Stratifying is worth it specifically when an attribute might affect the results.' },
        { q: 'A survey of favorite ice cream flavors is unlikely to need stratifying by which of these attributes?', opts: ['Age group, if flavor preference varies noticeably by age', 'Region, if flavor preference varies noticeably by area', 'Nothing needs to be assumed without more information', 'Shoe size, since shoe size has no plausible connection to flavor preference'], correct: 3, exp: 'Stratifying only makes sense for attributes that might actually relate to the variable being studied.' },
        { q: 'A list of 5,000 registered voters exists in a fixed order. A researcher picks a random start and then takes every 50th voter on the list. What method is this?', opts: ['Systematic random sample', 'Cluster sample', 'Stratified random sample', 'Census'], correct: 0, exp: 'A random start plus a fixed interval down a list is a systematic sample.' },
        { q: 'A population is divided into 20 pre-existing delivery routes, each a realistic mix of every customer type. Three routes are randomly chosen in full. What method is this?', opts: ['Stratified random sample', 'Cluster sample', 'Systematic random sample', 'Simple random sample'], correct: 1, exp: 'Randomly picking whole, already-mixed pre-existing groups is cluster sampling.' },
        { q: 'A population of 800 students is divided into 4 strata by grade, and 25 students are randomly selected from each grade. How many students total are in the sample?', opts: ['800', '25', '100', '4'], correct: 2, exp: '25 students from each of 4 strata gives 25 × 4 = 100 students total.' },
        { q: 'In that same study, is the sample necessarily representative of the whole school in terms of grade level?', opts: ['No, grade level cannot be guaranteed with any method', 'No, only cluster sampling guarantees this', 'It depends entirely on chance', 'Yes, because stratifying by grade guarantees each grade appears in the exact proportion planned'], correct: 3, exp: 'Stratifying by grade guarantees representation from every grade, unlike an SRS which leaves it to chance.' },
        { q: 'A field of rocks has large rocks up north, medium in the middle, and small down south. Which sampling method would guarantee a mix of all three sizes in the sample?', opts: ['Stratified random sample, using region as the strata', 'Cluster sample, using region as the clusters', 'Systematic sample starting only in the north', 'Simple random sample restricted to the north region'], correct: 0, exp: 'Stratifying by region and sampling from each region guarantees all three sizes appear.' },
        { q: 'Why does treating "north / middle / south" as clusters fail in that same rock field?', opts: ['Because clusters must always be numbered', 'Because each region is homogeneous (all one size), not a realistic mini population', 'Because cluster sampling cannot be used outdoors', 'Because there are too many rocks to count'], correct: 1, exp: 'A cluster needs to already mirror the population; a single-size region does not.' },
        { q: 'What would make "north / middle / south" work as clusters instead of strata?', opts: ['Making all three regions exactly the same size', 'Assigning random numbers instead of regions', 'Redefining the regions (e.g. north-to-south strips) so each one already contains a mix of large, medium, and small rocks', 'Only sampling from the north region'], correct: 2, exp: 'Redefining the groups so each one is already a heterogeneous mix turns them into valid clusters.' },
        { q: 'Which sampling method requires the least amount of individual-level labeling, once natural groups already exist?', opts: ['Simple random sample', 'Stratified random sample', 'Systematic random sample', 'Cluster sample'], correct: 3, exp: 'Cluster sampling only requires labeling the pre-existing groups, not every individual — the fastest option when natural groups exist.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.12 — Potential Problems with Sampling: Bias
   Source: course transcript (Topic 1.12 lecture)
   ============================================ */

registerChapters({
  '1-12': {
    id: '1-12',
    code: 'Topic 1.12',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Potential Problems with Sampling: Bias',
    cardSummary: 'Bias as a systematic — not random — error: volunteer and convenience samples that were never random at all, plus undercoverage, nonresponse, and response bias that can creep in even after a good random sample.',
    heroTitle: 'When random <em>isn’t</em><br>enough.',
    heroSub: 'A sample can be perfectly random and still be biased. Learn to spot the five ways a sampling method can systematically push a statistic too high or too low — and which direction each one pushes.',
    source: 'Topic 1.12 course video',
    estTime: '~25–35 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: '<span class="underline teal">Systematic</span>, not random.',
        body: 'A biased sample doesn’t just miss by chance — it misses in the same direction, over and over. That’s what separates bias from the ordinary variability every sample naturally has.',
        cards: [
          { roman: 'I.', title: 'Bias pushes one way, consistently', body: 'Bias is a <strong>systematic error</strong> in the sampling procedure that makes a statistic consistently too high or too low compared to the true population parameter.', tags: ['Systematic','Consistently high or low'] },
          { roman: 'II.', title: 'Two families', body: 'Some samples are biased because they were <strong>never random</strong> to begin with (volunteer, convenience). Others are randomly selected and <strong>still end up biased</strong> (undercoverage, nonresponse, response).', tags: ['Never random','Random, but still biased'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">six words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'bias', term: 'Bias', accent: 'population', body: 'A systematic error in the sampling procedure that makes a statistic consistently larger or consistently smaller than the population parameter it estimates — different from ordinary sample-to-sample variability.' },
          { id: 'volunteer-bias', term: 'Volunteer response bias', accent: 'sample', body: 'Occurs when a sample consists entirely of volunteers — people with strong opinions are far more likely to opt in, typically pushing the statistic toward the more passionate view.' },
          { id: 'convenience-bias', term: 'Convenience sample bias', accent: 'sample', body: 'Occurs when a sample is selected in a non-random way simply because it’s easy to reach — like surveying only the students sitting nearby at lunch.' },
          { id: 'undercoverage-bias', term: 'Undercoverage bias', accent: 'population', body: 'Occurs when the sampling method systematically leaves out (or under-represents) part of the population — even if the sample actually drawn is otherwise perfectly random.' },
          { id: 'nonresponse-bias', term: 'Nonresponse bias', accent: 'population', body: 'Occurs when a randomly selected individual simply doesn’t respond, and non-respondents differ in some important way from those who do.' },
          { id: 'response-bias', term: 'Response bias', accent: 'sample', body: 'Occurs when responses aren’t truthful — because of leading question wording, an uncomfortable topic, the presence of the person asking, or a faulty measuring device.' }
        ]
      },

      /* ---------------- 3. THE BIAS FAMILY TREE ---------------- */
      {
        type: 'flow', id: 'family-tree', label: 'Section 03 — The Bias Family Tree',
        heading: 'One question splits <span class="underline sample">bias into two families</span>.',
        body: 'Ask this first, every time you read a sampling scenario.',
        items: [
          {
            question: 'Was the sample randomly selected in the first place?',
            branches: [
              { label: 'No', tone: 'bad', outcomes: [
                { title: 'Volunteer response bias', body: 'The sample is made entirely of people who opted in — usually those with the strongest opinions.' },
                { title: 'Convenience sample bias', body: 'The sample was chosen simply because it was easy to reach, not because it represented the population.' }
              ]},
              { label: 'Yes — but bias can still creep in', tone: 'warn', outcomes: [
                { title: 'Undercoverage bias', body: 'The sampling method itself systematically leaves part of the population out.' },
                { title: 'Nonresponse bias', body: 'Selected individuals simply don’t respond, and they differ from those who do.' },
                { title: 'Response bias', body: 'People respond, but their answers aren’t truthful — due to wording, discomfort, or a faulty measurement.' }
              ]}
            ]
          }
        ]
      },

      /* ---------------- 4. FIVE TYPES, SIDE BY SIDE ---------------- */
      {
        type: 'compare-table', id: 'compare', label: 'Section 04 — Five Types, Side by Side',
        heading: 'Same word, <span class="underline teal">five different mechanisms</span>.',
        items: [
          {
            title: 'The five bias types',
            headers: ['Bias type', 'What goes wrong', 'Still "random"?', 'Typical fix'],
            rows: [
              ['Volunteer response bias', 'Only people who opt in respond — usually those with the strongest opinions', 'No — never randomly selected', 'Select subjects yourself using a random mechanism, instead of asking for volunteers'],
              ['Convenience sample bias', 'The sample is chosen for ease of access, not randomness', 'No — never randomly selected', 'Use a true random-selection procedure instead of "whoever is easiest to reach"'],
              ['Undercoverage bias', 'The sampling method itself leaves part of the population out (or under-represents it)', 'Yes — the sample drawn can still be random', 'Make sure the sampling frame (the list you sample from) actually includes everyone in the population'],
              ['Nonresponse bias', 'Selected individuals don’t respond, and non-respondents differ from respondents', 'Yes — the initial selection was random', 'Follow up with non-respondents; offer an incentive that doesn’t influence their answer'],
              ['Response bias', 'Respondents answer, but untruthfully — due to wording, discomfort, or faulty measurement', 'Yes — the initial selection was random', 'Use neutral wording, anonymous responses, and a properly calibrated measuring device']
            ],
            caption: 'The first two types happen before you ever get a sample — the selection itself wasn’t random. The last three can sneak into a perfectly random sample.'
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 05 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'Bias in a sampling method is a ',
            { id:'b1', answer:'systematic', options:['systematic','random','unavoidable'] },
            ' error that makes a statistic consistently too high or too low — different from the ordinary variability every sample has.'
          ]},
          { segments: [
            'A sample made up entirely of people who chose to opt in is affected by ',
            { id:'b2', answer:'volunteer response bias', options:['volunteer response bias','undercoverage bias','response bias'] },
            ', since people with strong opinions are far more likely to participate.'
          ]},
          { segments: [
            'Selecting a sample simply because it is easy to reach — like surveying only the people nearby — is called a ',
            { id:'b3', answer:'convenience sample', options:['convenience sample','stratified sample','systematic sample'] },
            '.'
          ]},
          { segments: [
            'Even a perfectly random sample can suffer from ',
            { id:'b4', answer:'undercoverage bias', options:['undercoverage bias','response bias','volunteer bias'] },
            ' if the sampling method systematically leaves part of the population out before the random selection even happens.'
          ]},
          { segments: [
            'When selected individuals simply do not respond, and the people who do respond differ from those who don’t, the result is ',
            { id:'b5', answer:'nonresponse bias', options:['nonresponse bias','response bias','undercoverage bias'] },
            '.'
          ]},
          { segments: [
            'When people do respond, but their answers are not truthful — often because of how a question is worded or who is asking — the result is ',
            { id:'b6', answer:'response bias', options:['response bias','nonresponse bias','convenience bias'] },
            '.'
          ]}
        ]
      },

      /* ---------------- 6. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 06 — Worked Examples',
        heading: 'Read the scenario. <span class="underline teal">Name the bias, and its direction.</span>',
        body: 'Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'A teacher wants to know students’ favorite type of music. She only asks students in her morning class.',
            fields: [
              { k: 'Bias type', v: 'Convenience sample bias' },
              { k: 'Why', v: 'She surveyed whoever was easiest to reach — her own morning class — rather than selecting randomly from the whole school' },
              { k: 'Direction', v: 'Unclear which way it pushes without more detail, but it definitely fails to represent the whole student body' }
            ]
          },
          {
            q: 'A health teacher asks students, "Do you smoke cigarettes?" Many students answer no even if they do.',
            fields: [
              { k: 'Bias type', v: 'Response bias' },
              { k: 'Why', v: 'Students may lie about smoking because the health teacher — an authority figure on exactly this topic — is asking directly' },
              { k: 'Direction', v: 'Underestimates the true proportion of students who smoke' }
            ]
          },
          {
            q: 'A city council randomly surveys only residents in neighborhoods that already have city-provided trash pickup, to learn about waste-management satisfaction citywide.',
            fields: [
              { k: 'Bias type', v: 'Undercoverage bias' },
              { k: 'Why', v: 'Even though the surveyed residents were randomly selected, everyone without city trash pickup was left out of the sampling frame entirely' },
              { k: 'Direction', v: 'Likely overestimates citywide satisfaction, since residents without the service — who may be less satisfied — never had a chance to respond' }
            ]
          },
          {
            q: 'A website asks visitors to rate a new smartphone by filling out an online survey. Only users who visit the survey page respond.',
            fields: [
              { k: 'Bias type', v: 'Volunteer response bias' },
              { k: 'Why', v: 'Nobody was selected — people had to choose to visit the page and fill it out, which tends to attract those with especially strong opinions' },
              { k: 'Direction', v: 'Could push the rating toward the extremes in either direction, depending on who feels strongly enough to respond' }
            ]
          },
          {
            q: 'A company emails a satisfaction survey to 1,000 randomly selected customers, but only 150 respond — mostly customers with complaints.',
            fields: [
              { k: 'Bias type', v: 'Nonresponse bias' },
              { k: 'Why', v: 'The initial 1,000 were randomly selected, but 850 chose not to respond, and the 150 who did respond skew toward people with complaints' },
              { k: 'Direction', v: 'Underestimates true customer satisfaction, since dissatisfied customers were far more motivated to respond' }
            ]
          },
          {
            q: 'A market researcher asks random shoppers standing right next to them at a luxury car dealership, "Do you regularly purchase high-end vehicles?"',
            fields: [
              { k: 'Bias type', v: 'Response bias (with a hint of undercoverage bias)' },
              { k: 'Why', v: 'Shoppers may feel pressured to say yes with the researcher standing right there; sampling only people at this one dealership also excludes everyone who wasn’t there' },
              { k: 'Direction', v: 'Overestimates how many people regularly purchase high-end vehicles' }
            ]
          }
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'A sample statistic is consistently too high or too low, not just randomly off.', term: 'Bias', detail: 'Different from ordinary sample-to-sample variability, which is unavoidable but not systematic.' },
          { prompt: 'A radio call-in poll where only people who choose to call get counted.', term: 'Volunteer response bias', detail: 'Strong opinions are overrepresented; indifferent people rarely bother to call in.' },
          { prompt: 'A principal surveys only the students sitting in the cafeteria in front of him.', term: 'Convenience sample bias', detail: 'Chosen for ease of access, not randomness.' },
          { prompt: 'A survey is emailed only to students living in on-campus dorms, leaving out everyone off-campus.', term: 'Undercoverage bias', detail: 'Part of the population never had a chance to be selected — even if the on-campus sample itself was random.' },
          { prompt: '1,000 people are randomly emailed a survey, but only 150 — mostly people with complaints — respond.', term: 'Nonresponse bias', detail: 'Non-respondents may differ a lot from respondents.' },
          { prompt: '"Good kids always do their homework, right?" as a survey question.', term: 'Response bias', detail: 'Leading wording (or an uncomfortable topic, or the wrong person asking) makes answers untruthful.' },
          { prompt: 'Which two bias types happen because the sample was never randomly selected in the first place?', term: 'Volunteer response bias and convenience sample bias', detail: 'Everything else on this list can happen even to a properly random sample.' },
          { prompt: 'Which three bias types can sneak into a sample that WAS randomly selected?', term: 'Undercoverage, nonresponse, and response bias', detail: 'Random selection alone doesn’t protect you from any of these.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'Bias in a sampling method is best described as:', opts: ['Ordinary variability between samples', 'A systematic error that makes a statistic consistently too high or too low', 'A sample that is too large', 'A statistic that exactly matches the parameter'], correct: 1, exp: 'Bias is systematic — it consistently pushes the statistic in one direction.' },
          { q: 'A radio station’s call-in poll on a tax increase is affected by which type of bias?', opts: ['Undercoverage bias', 'Response bias', 'Volunteer response bias', 'Nonresponse bias'], correct: 2, exp: 'Only people who choose to call in are counted — the hallmark of volunteer response bias.' },
          { q: 'A principal surveys only the students in front of him at lunch duty. This is:', opts: ['A convenience sample', 'A stratified sample', 'A cluster sample', 'A systematic sample'], correct: 0, exp: 'Chosen purely for ease of access — a convenience sample.' },
          { q: 'A university surveys only students living in on-campus dorms about housing satisfaction, leaving out off-campus students entirely. This is:', opts: ['Response bias', 'Nonresponse bias', 'Volunteer response bias', 'Undercoverage bias'], correct: 3, exp: 'Part of the population (off-campus students) was never given a chance to be selected — undercoverage bias.' },
          { q: '1,000 customers are randomly emailed a survey, but only 150 — mostly people with complaints — respond. This is:', opts: ['Response bias', 'Nonresponse bias', 'Convenience sample bias', 'Undercoverage bias'], correct: 1, exp: 'The initial selection was random, but non-respondents differ from respondents — nonresponse bias.' },
          { q: 'A teacher asks students, "Good kids always do their homework, right?" This wording is likely to cause:', opts: ['Undercoverage bias', 'Nonresponse bias', 'Response bias', 'Volunteer response bias'], correct: 2, exp: 'Leading wording pressures untruthful answers — response bias.' },
          { q: 'Which two bias types mean the sample was never randomly selected to begin with?', opts: ['Undercoverage and nonresponse', 'Response and nonresponse', 'Undercoverage and response', 'Volunteer response and convenience sample'], correct: 3, exp: 'Volunteer response and convenience sample bias both happen because the sample was never random.' },
          { q: 'Which three bias types can occur even after a properly random sample is selected?', opts: ['Undercoverage, nonresponse, and response bias', 'Volunteer, convenience, and undercoverage bias', 'Only response bias', 'None — a random sample is always free of bias'], correct: 0, exp: 'Undercoverage, nonresponse, and response bias can all sneak into a genuinely random sample.' },
          { q: 'A market researcher asks shoppers at a luxury car dealership, standing right next to them, "Do you regularly buy high-end vehicles?" This is most likely:', opts: ['Nonresponse bias only', 'Response bias (the interviewer’s presence pressures answers)', 'No bias, since shoppers were randomly approached', 'Undercoverage bias only, with no other bias present'], correct: 1, exp: 'The interviewer standing right there likely pressures shoppers toward a more flattering answer.' },
          { q: 'A school counselor asks students directly, "Have you ever cheated on a test?" Which direction is the response bias likely to push the reported cheating rate?', opts: ['It overestimates the true rate', 'It has no effect on the true rate', 'It underestimates the true rate, since students may not want to admit to cheating', 'It always doubles the true rate exactly'], correct: 2, exp: 'Students are likely to underreport cheating to avoid admitting to socially frowned-upon behavior.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Bias is systematic, not random', body: 'A biased statistic is consistently too high or too low — unlike the ordinary variability every sample naturally has.' },
          { num: 'ii.', title: 'Two families of bias', body: 'Never-random samples (volunteer, convenience) vs. samples that were random but still ended up biased (undercoverage, nonresponse, response).' },
          { num: 'iii.', title: 'Volunteers and convenience samples were never random', body: 'The fix is the same for both: use a genuine random-selection mechanism instead.' },
          { num: 'iv.', title: 'Undercoverage happens before you even sample', body: 'The sampling frame itself — the list you draw from — misses part of the population.' },
          { num: 'v.', title: 'Nonresponse and response bias happen after', body: 'People are simply missing from the results, or they responded but weren’t truthful.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A sample statistic is consistently higher than the true population parameter, over and over, due to a flaw in the sampling procedure. This is an example of:', opts: ['Bias', 'Ordinary sample variability', 'A census', 'A confounding variable'], correct: 0, exp: 'A systematic, repeated skew in one direction is exactly what bias means.' },
        { q: 'An online poll asks visitors to a website to rate a product; only people who visit and choose to respond are counted. This is:', opts: ['Undercoverage bias', 'Volunteer response bias', 'Nonresponse bias', 'Response bias'], correct: 1, exp: 'Nobody was selected — people opted in themselves, which is volunteer response bias.' },
        { q: 'A researcher surveys only the shoppers standing closest to the store entrance because it is quick and easy. This is:', opts: ['Undercoverage bias', 'Nonresponse bias', 'Convenience sample bias', 'Response bias'], correct: 2, exp: 'Chosen purely for ease of access — a convenience sample.' },
        { q: 'A survey is mailed only to households with a listed landline number, leaving out every household that only has a cell phone. This is:', opts: ['Response bias', 'Nonresponse bias', 'Volunteer response bias', 'Undercoverage bias'], correct: 3, exp: 'Cell-phone-only households were never part of the sampling frame — undercoverage bias.' },
        { q: 'A school mails a randomly selected sample of 400 parents a survey, and 320 of them return it. Since the response rate is high, is nonresponse bias a concern?', opts: ['It could still be a concern if the 80 non-respondents differ meaningfully from the 320 who responded', 'No, any response rate above 50% eliminates nonresponse bias', 'No, nonresponse bias only applies to online surveys', 'Yes, but only if fewer than 10 people respond'], correct: 0, exp: 'Nonresponse bias depends on whether non-respondents differ from respondents, not on the response rate alone.' },
        { q: 'A survey asks, "Do you support increasing funding for our excellent local schools?" This wording is most likely to cause:', opts: ['Undercoverage bias', 'Response bias', 'Nonresponse bias', 'No bias at all'], correct: 1, exp: 'Loaded wording ("excellent") pressures a certain answer — response bias.' },
        { q: 'Which of these is NOT one of the five bias types discussed in this topic?', opts: ['Undercoverage bias', 'Response bias', 'Sampling frame bias', 'Volunteer response bias'], correct: 2, exp: '"Sampling frame bias" is not one of the five named types — undercoverage, nonresponse, response, volunteer, and convenience are.' },
        { q: 'A company wants feedback from all 5,000 employees, randomly emails all of them a survey, but only 400 reply — mostly employees who are unhappy. What kind of bias is this, and which direction does it push satisfaction results?', opts: ['Response bias; overestimates satisfaction', 'Undercoverage bias; underestimates satisfaction', 'Convenience bias; has no clear direction', 'Nonresponse bias; underestimates satisfaction, since unhappy employees were more motivated to respond'], correct: 3, exp: 'A random invitation with a skewed set of respondents is textbook nonresponse bias, pushing results toward the unhappy respondents.' },
        { q: 'A dentist asks patients, "You floss every day, right?" and most patients say yes even if they don’t. What kind of bias is this?', opts: ['Response bias, since patients may feel pressure to give a favorable answer to their dentist', 'Nonresponse bias, since some patients don’t answer at all', 'Undercoverage bias, since not all patients were surveyed', 'Volunteer response bias, since patients chose to see the dentist'], correct: 0, exp: 'Patients answering untruthfully due to who is asking is response bias.' },
        { q: 'A researcher wants opinions on a new highway project, but only surveys residents who live directly along the proposed route. This is:', opts: ['Response bias', 'Undercoverage bias, since residents elsewhere in the affected area are left out', 'Nonresponse bias', 'Volunteer response bias'], correct: 1, exp: 'Residents outside the immediate route but still affected were never part of the sampling frame.' },
        { q: 'Which fix best addresses volunteer response bias?', opts: ['Reword the survey questions to be neutral', 'Follow up with people who don’t respond', 'Select subjects yourself using a genuine random-selection mechanism, instead of asking for volunteers', 'Expand the sampling frame to include more locations'], correct: 2, exp: 'Volunteer bias is fixed by not relying on self-selection at all — select subjects randomly instead.' },
        { q: 'Which fix best addresses undercoverage bias?', opts: ['Offer an incentive for responding', 'Make survey questions anonymous', 'Have someone other than the researcher collect responses', 'Make sure the sampling frame actually includes every part of the population of interest'], correct: 3, exp: 'Undercoverage is a sampling-frame problem, so it’s fixed by making the frame complete.' },
        { q: 'A market research company sends field representatives to interview random shoppers face-to-face about their income. Some shoppers may not answer truthfully because they feel embarrassed discussing income with a stranger. This is:', opts: ['Response bias', 'Nonresponse bias', 'Undercoverage bias', 'Convenience sample bias'], correct: 0, exp: 'Untruthful answers due to discomfort with the topic and the interviewer’s presence is response bias.' },
        { q: 'A survey is sent to a random sample of 500 people, but 200 of them never open the email. Assuming those 200 differ from the 300 who did respond, what is this?', opts: ['Response bias', 'Nonresponse bias', 'Undercoverage bias', 'Volunteer response bias'], correct: 1, exp: 'Randomly selected people who simply don’t respond, differing from those who do, is nonresponse bias.' },
        { q: 'Bias is different from ordinary sample-to-sample variability because bias:', opts: ['Only happens with small sample sizes', 'Can never be reduced or fixed', 'Is systematic — it consistently pushes the statistic in one direction, not just randomly off target', 'Only occurs in experiments, never in surveys'], correct: 2, exp: 'The key distinction is systematic vs. random: bias always pushes the same direction.' },
        { q: 'A poorly calibrated bathroom scale weighs every person 3 lb too heavy. If used to collect data on a randomly selected sample, this is an example of:', opts: ['Nonresponse bias', 'Undercoverage bias', 'Volunteer response bias', 'Response bias, since the measurements themselves are systematically untruthful'], correct: 3, exp: 'A faulty measuring device that systematically distorts every reading is a form of response bias.' },
        { q: 'Which best describes the difference between undercoverage bias and nonresponse bias?', opts: ['Undercoverage happens before selection (part of the population can’t be reached); nonresponse happens after selection (selected people don’t answer)', 'They are two names for the exact same problem', 'Undercoverage only applies to phone surveys; nonresponse only applies to mail surveys', 'Nonresponse bias is not actually a real form of bias'], correct: 0, exp: 'Undercoverage is a flaw in the sampling frame itself; nonresponse happens after selection, when chosen people don’t respond.' },
        { q: 'A random sample of registered voters is called by phone during business hours on weekdays, when working adults are less likely to be home. Retired and unemployed people are overrepresented among respondents. This is closest to:', opts: ['Volunteer response bias', 'Nonresponse bias, since the working adults who were called didn’t answer', 'Response bias', 'Undercoverage bias'], correct: 1, exp: 'The sample selection was random, but a systematic pattern in who fails to respond skews the results — nonresponse bias.' },
        { q: 'Why is anonymity often used as a fix for response bias?', opts: ['It increases the response rate directly', 'It expands the sampling frame', 'It removes social pressure to answer a certain way, making truthful answers more likely', 'It eliminates the need for random selection'], correct: 2, exp: 'Anonymity reduces the social pressure that causes people to answer untruthfully.' },
        { q: 'A study finds that a sample’s reported rate of exercise is much higher than external health data suggests it should be for that population. Which type of bias most plausibly explains this, if respondents were randomly selected but may have exaggerated their activity?', opts: ['Undercoverage bias', 'Convenience sample bias', 'Volunteer response bias', 'Response bias, since people may over-report healthy behaviors to look good'], correct: 3, exp: 'Untruthful self-reporting to appear more favorable is a classic response-bias pattern.' }
      ]
    }
  }
});

/* ============================================
   Topic 1.13 — Designing Experiments
   Source: course transcript (Topic 1.13 lecture)
   ============================================ */

registerChapters({
  '1-13': {
    id: '1-13',
    code: 'Topic 1.13',
    unitName: 'Unit 1 — Exploring One-Variable Data',
    title: 'Designing Experiments',
    cardSummary: 'The four principles every well-designed experiment needs — comparison, randomization, replication, and direct control — plus three ways to structure one: completely randomized, randomized block, and matched pairs.',
    heroTitle: 'Four principles. <em>Three</em><br>designs.',
    heroSub: 'A good experiment isn’t just "give some people a treatment." It needs a comparison group, random assignment, enough subjects to matter, and control over anything else that might explain the result — then one of three structures to organize it all.',
    source: 'Topic 1.13 course video',
    estTime: '~35–45 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Four principles. <span class="underline sample">Three ways to structure them.</span>',
        body: 'Every well-designed experiment — no matter how it’s structured — rests on the same four non-negotiable principles.',
        cards: [
          { roman: 'I.', title: 'Four non-negotiable principles', body: '<strong>Comparison</strong> of at least two treatment groups, random <strong>assignment</strong> of who gets what, <strong>replication</strong> — more than one unit per treatment — and <strong>direct control</strong> of any extraneous variable the researcher can manage.', tags: ['Comparison','Randomization','Replication','Direct control'] },
          { roman: 'II.', title: 'People know they’re in a study', body: 'With human subjects, <strong>blinding</strong> and a <strong>placebo</strong> control for the fact that just knowing you got a treatment (or didn’t) can change your response.', tags: ['Single/double-blind','Placebo effect'], accent: 'sample' },
          { roman: 'III.', title: 'Three ways to structure it', body: '<strong>Completely randomized</strong>, <strong>randomized block</strong>, and <strong>matched pairs</strong> designs all still rest on the same four principles above — they just handle extraneous variables differently.', tags: ['Completely randomized','Randomized block','Matched pairs'] }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">ten words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'control-group', term: 'Control group', accent: 'population', body: 'A group in an experiment used purely for comparison — often given no treatment (or an inactive one) as a baseline.' },
          { id: 'extraneous-variable', term: 'Extraneous variable', accent: 'sample', body: 'A variable believed to affect the response, but not the explanatory variable being studied, and outside the researcher’s control — like age, diet, or genetics.' },
          { id: 'random-assignment', term: 'Random assignment', accent: 'population', body: 'Randomly deciding which experimental units get which treatment — the mechanism that scatters extraneous variables evenly across every treatment group.' },
          { id: 'replication', term: 'Replication', accent: 'sample', body: 'Assigning more than one experimental unit to each treatment. More units means natural person-to-person variability averages out, making a true treatment effect easier to detect.' },
          { id: 'direct-control', term: 'Direct control', accent: 'population', body: 'Deliberately holding a controllable extraneous variable — like water, sunlight, or dosage timing — constant across every treatment group.' },
          { id: 'blinding', term: 'Blinding (single / double)', accent: 'sample', body: 'In a single-blind experiment, subjects don’t know which treatment they’re getting. In a double-blind experiment, neither the subjects nor the researchers who interact with them know.' },
          { id: 'placebo', term: 'Placebo & placebo effect', accent: 'sample', body: 'A placebo is a fake, inactive treatment given to a control group so every subject feels like they’re receiving something — controlling for the placebo effect, the natural difference in response between knowing you got something vs. knowing you got nothing.' },
          { id: 'blocking-variable', term: 'Blocking variable', accent: 'population', body: 'An extraneous variable considered too important to leave to chance. Subjects are first grouped into blocks sharing a similar value of it, then randomly assigned to treatments within each block.' },
          { id: 'completely-randomized', term: 'Completely randomized design', accent: 'population', body: 'Treatments are assigned to all experimental units completely at random, with no blocking.' },
          { id: 'matched-pairs', term: 'Matched pairs design', accent: 'sample', body: 'A special case of blocking with only two treatments: experimental units are paired up by similarity (or each unit gets both treatments, in random order), and one treatment is randomly assigned to each member of the pair.' }
        ]
      },

      /* ---------------- 3. SEEING THE THREE DESIGNS ---------------- */
      {
        type: 'chart', id: 'designs', label: 'Section 03 — Seeing the Three Designs',
        heading: '18 volunteers. <span class="underline teal">Three ways to split them.</span>',
        body: 'A vitamin D study is testing 50 mg vs. 100 mg vs. a placebo for lowering blood pressure. Every circle below is a volunteer, colored by age — the extraneous variable this study is most worried about.',
        items: [
          { title: 'Completely randomized — Treatment (50 mg)', chartType: 'populationgrid', spec: { cols: 3, legend: [{label:'Young',group:0},{label:'Middle-aged',group:1},{label:'Older',group:2}], cells: [{group:0,selected:true},{group:0,selected:true},{group:0,selected:true},{group:1,selected:true},{group:1,selected:true},{group:2,selected:true}] }, caption: '3 young, 2 middle-aged, 1 older — purely by chance.' },
          { title: 'Completely randomized — Treatment (100 mg)', chartType: 'populationgrid', spec: { cols: 3, legend: [{label:'Young',group:0},{label:'Middle-aged',group:1},{label:'Older',group:2}], cells: [{group:0,selected:true},{group:1,selected:true},{group:1,selected:true},{group:1,selected:true},{group:2,selected:true},{group:2,selected:true}] }, caption: '1 young, 3 middle-aged, 2 older.' },
          { title: 'Completely randomized — Placebo', chartType: 'populationgrid', spec: { cols: 3, legend: [{label:'Young',group:0},{label:'Middle-aged',group:1},{label:'Older',group:2}], cells: [{group:0,selected:true},{group:1,selected:true},{group:2,selected:true},{group:2,selected:true},{group:2,selected:true},{group:0,selected:true}] }, caption: '2 young, 1 middle-aged, 3 older. Every group’s age mix is a little different — random chance, not a guarantee — even though it was assigned completely at random.' },
          { title: 'Randomized block — Treatment (50 mg)', chartType: 'populationgrid', spec: { cols: 3, legend: [{label:'Young',group:0},{label:'Middle-aged',group:1},{label:'Older',group:2}], cells: [{group:0,selected:true},{group:0,selected:true},{group:1,selected:true},{group:1,selected:true},{group:2,selected:true},{group:2,selected:true}] }, caption: '2 young, 2 middle-aged, 2 older — guaranteed.' },
          { title: 'Randomized block — Treatment (100 mg)', chartType: 'populationgrid', spec: { cols: 3, legend: [{label:'Young',group:0},{label:'Middle-aged',group:1},{label:'Older',group:2}], cells: [{group:0,selected:true},{group:0,selected:true},{group:1,selected:true},{group:1,selected:true},{group:2,selected:true},{group:2,selected:true}] }, caption: '2 young, 2 middle-aged, 2 older — guaranteed.' },
          { title: 'Randomized block — Placebo', chartType: 'populationgrid', spec: { cols: 3, legend: [{label:'Young',group:0},{label:'Middle-aged',group:1},{label:'Older',group:2}], cells: [{group:0,selected:true},{group:0,selected:true},{group:1,selected:true},{group:1,selected:true},{group:2,selected:true},{group:2,selected:true}] }, caption: '2 young, 2 middle-aged, 2 older — guaranteed. Blocking by age first, then randomly assigning within each age block, means every treatment group gets an identical age mix, every single time.' },
          { title: 'Matched pairs — a sunscreen study', chartType: 'matchedpairs', spec: { pairs: [
              { group: 0, note: 'Same age, same skin type, low stress' },
              { group: 1, note: 'Same gender, same age, dark hair & eyes' },
              { group: 2, note: 'Same age, same skin type, high stress' },
              { group: 3, note: 'Same age, fair skin, red hair' },
              { group: 0, note: 'Twin siblings, same skin type' }
            ] }, caption: 'Each row is one matched pair (colors just distinguish rows, not categories). Within a pair, A and B share every trait that most affects sunburn — then one randomly gets Sunscreen A, the other Sunscreen B.' }
        ]
      },

      /* ---------------- 4. THREE DESIGNS, SIDE BY SIDE ---------------- */
      {
        type: 'compare-table', id: 'compare', label: 'Section 04 — Three Designs, Side by Side',
        heading: 'Same four principles. <span class="underline sample">Three different structures.</span>',
        items: [
          {
            title: 'Completely randomized, randomized block, and matched pairs designs',
            headers: ['Design', 'Procedure', 'Best used when', 'This chapter’s example'],
            rows: [
              ['Completely randomized design', 'All experimental units are assigned to treatments completely at random — no blocking first', 'No extraneous variable is critical enough to guarantee evenly; pure randomization is trusted to mix things up', '18 volunteers randomly split into 50 mg / 100 mg / placebo groups'],
              ['Randomized block design', 'Units are first grouped into blocks sharing a similar value of one extraneous variable, then randomly assigned to treatments within each block', 'One extraneous variable (like age) is believed to matter so much that it can’t be left to chance', 'Same 18 volunteers, first blocked by age (young / middle-aged / older), then randomly assigned within each block'],
              ['Matched pairs design', 'A special case of blocking with only two treatments: units are paired by similarity, then one treatment is randomly assigned to each pair member', 'Only two treatments are being compared, and pairing by similarity (or having each unit try both treatments) is possible', 'Sunscreen A vs. B, tested on pairs matched by age, skin type, and stress level']
            ],
            caption: 'All three designs still rest on the same four principles — comparison, randomization, replication, and direct control. Blocking (and its extreme case, matched pairs) just adds a guarantee that one specific extraneous variable won’t accidentally pile up in one treatment group.'
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 05 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'Every well-designed experiment needs four things: comparison of at least two treatment groups, random ',
            { id:'b1', answer:'assignment', options:['assignment','selection','sampling'] },
            ' of those treatments, ',
            { id:'b2', answer:'replication', options:['replication','blinding','blocking'] },
            ' — more than one experimental unit per treatment — and direct control of extraneous variables the researcher can manage.'
          ]},
          { segments: [
            'All experimental units should be treated the ',
            { id:'b3', answer:'same', options:['same','differently','randomly'] },
            ' other than the treatment they are purposely given — any unplanned difference between groups can become a confounding variable.'
          ]},
          { segments: [
            'A variable that is believed to affect the response but is outside the researcher’s control, like age or genetics, is called an ',
            { id:'b4', answer:'extraneous variable', options:['extraneous variable','explanatory variable','control group'] },
            '; random assignment helps spread it evenly across every treatment group.'
          ]},
          { segments: [
            'In a ',
            { id:'b5', answer:'single-blind', options:['single-blind','double-blind','matched'] },
            ' experiment, subjects don’t know their treatment; in a double-blind experiment, neither the subjects nor the researchers measuring them know.'
          ]},
          { segments: [
            'A fake, inactive treatment given to a control group so that everyone feels like they received something is called a ',
            { id:'b6', answer:'placebo', options:['placebo','blocking variable','extraneous variable'] },
            ', and it controls for the ',
            { id:'b7', answer:'placebo effect', options:['placebo effect','confounding variable','direct control'] },
            '.'
          ]},
          { segments: [
            'A ',
            { id:'b8', answer:'randomized block design', options:['randomized block design','completely randomized design','matched pairs design'] },
            ' first groups experimental units by a shared value of an important extraneous variable, then randomly assigns treatments within each group.'
          ]},
          { segments: [
            'A matched pairs design is a special case of blocking that only works with exactly ',
            { id:'b9', answer:'two', options:['two','three','four'] },
            ' treatments, since each pair has exactly two members (or one member who tries both).'
          ]}
        ]
      },

      /* ---------------- 6. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 06 — Worked Examples',
        heading: 'Read the design. <span class="underline teal">Spot the principle.</span>',
        body: 'These reference the vitamin D and sunscreen studies in Sections 03–04 above. Click each one open, work it out, then check your answer.',
        items: [
          {
            q: 'The vitamin D study uses three groups: 50 mg, 100 mg, and a placebo, with 18 volunteers. Which of the four principles is at risk if only 1–2 people are in each group, and why does it matter?',
            fields: [
              { k: 'Principle at risk', v: 'Replication' },
              { k: 'Why it matters', v: 'With only 1–2 people per group, natural person-to-person differences (one person’s stress, diet, or genetics) could easily be mistaken for a treatment effect — more subjects per group let those individual differences average out' }
            ]
          },
          {
            q: 'In that same vitamin D study, why must every volunteer take their pill the exact same way (e.g. the same time of day, with the same amount of water)?',
            fields: [
              { k: 'Concept', v: 'Direct control' },
              { k: 'Why', v: 'If one group took their pill with food and another on an empty stomach, that difference — not the vitamin D dose — could explain any difference in blood pressure' }
            ]
          },
          {
            q: 'Why would a researcher choose a randomized block design over a completely randomized design for this same experiment?',
            fields: [
              { k: 'Reason', v: 'If age is believed to strongly affect blood pressure, leaving it to chance in a completely randomized design risks an uneven split — e.g. mostly older volunteers landing in one group by luck' },
              { k: 'What blocking guarantees', v: 'Blocking by age first, then randomly assigning within each age block, guarantees every treatment group gets the same age mix, every time' }
            ]
          },
          {
            q: 'Using the matched-pairs sunscreen study above, why can’t the researcher blame age, skin type, or stress for any difference between Sunscreen A and B?',
            fields: [
              { k: 'Reason', v: 'Within every pair, both people were matched to be identical on age, skin type, and stress — so those variables can’t differ systematically between everyone who used Sunscreen A and everyone who used Sunscreen B' },
              { k: 'What’s left', v: 'The only systematic difference across the whole study is which sunscreen each person used — exactly what a matched-pairs design is built to isolate' }
            ]
          },
          {
            q: 'A fertilizer study gives 30 plots of grass either Fertilizer A or Fertilizer B, with random assignment of which plot gets which. Can the researcher claim Fertilizer A causes better growth? Can the results be generalized to all grass everywhere?',
            fields: [
              { k: 'Cause-and-effect?', v: 'Yes — random assignment of the fertilizer treatment supports a cause-and-effect claim' },
              { k: 'Generalization', v: 'Only to grass similar to these 30 plots (same grass type, climate, etc.), unless the plots were also randomly selected from a larger, more diverse population of grass' }
            ]
          },
          {
            q: 'A blood-pressure study is single-blind: volunteers don’t know if they got the pill or the placebo, but the nurse recording their blood pressure knows which group each person is in. What upgrade would make this double-blind, and why would it matter?',
            fields: [
              { k: 'Upgrade', v: 'Also keep the nurse (or whoever measures blood pressure) unaware of which treatment each volunteer received' },
              { k: 'Why it matters', v: 'If the nurse knows who got the real pill, they might unconsciously measure or record blood pressure differently — double-blinding removes that source of bias from both sides' }
            ]
          }
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'An experiment has only one group, and everyone gets the same treatment. What principle is missing?', term: 'Comparison', detail: 'Without at least two treatment groups, there’s nothing to compare the result against.' },
          { prompt: 'Who gets which treatment must be decided this way, so extraneous variables get spread evenly across groups.', term: 'Random assignment', detail: 'The mechanism that makes groups similar in every way except the treatment.' },
          { prompt: 'Only 2 subjects are used per treatment group. Why is that a problem?', term: 'Not enough replication', detail: 'With too few subjects, ordinary person-to-person variability can look like a real treatment effect.' },
          { prompt: 'Every subject takes their pill with the same amount of water, at the same time of day.', term: 'Direct control', detail: 'Holding a controllable extraneous variable constant across every group.' },
          { prompt: 'Subjects don’t know their treatment, but the researchers measuring them do.', term: 'Single-blind', detail: 'Double-blind means neither subjects nor the researchers interacting with them know.' },
          { prompt: 'A fake, inactive treatment given to the control group so everyone feels like they’re getting something.', term: 'Placebo', detail: 'Controls for the placebo effect — the fact that just believing you got treatment can change your response.' },
          { prompt: 'Subjects are first grouped by age, then randomly assigned to treatments within each age group.', term: 'Randomized block design', detail: 'Guarantees every treatment group gets the same mix of the blocking variable.' },
          { prompt: 'Only two treatments exist, and subjects are paired up by similarity before one of each pair gets each treatment.', term: 'Matched pairs design', detail: 'A special case of blocking, limited to exactly two treatments.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Ten questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'Which of the four principles of good experimental design requires at least two treatment groups?', opts: ['Randomization', 'Comparison', 'Replication', 'Direct control'], correct: 1, exp: 'Comparison means having at least two treatment groups to compare against each other.' },
          { q: 'What does random assignment specifically accomplish?', opts: ['It guarantees every treatment group is exactly the same size', 'It eliminates the need for a control group', 'It spreads extraneous variables evenly across all treatment groups', 'It removes the need for replication'], correct: 2, exp: 'Random assignment scatters extraneous variables across groups so groups differ mainly in the treatment received.' },
          { q: 'Why does replication (multiple subjects per treatment) matter?', opts: ['It helps average out natural person-to-person variability, making a true treatment effect easier to detect', 'It guarantees a cause-and-effect conclusion by itself', 'It removes the need for random assignment', 'It is only useful in observational studies'], correct: 0, exp: 'More subjects per group let ordinary individual differences average out.' },
          { q: 'Making sure every subject takes their pill with the exact same amount of water at the same time of day is an example of:', opts: ['Blocking', 'Blinding', 'Replication', 'Direct control'], correct: 3, exp: 'Deliberately holding a controllable extraneous variable constant is direct control.' },
          { q: 'In a double-blind experiment:', opts: ['Only the subjects are unaware of their treatment', 'Neither the subjects nor the researchers who interact with them know who got which treatment', 'Only the researchers are unaware of the treatments', 'No one, including the lead investigator, is ever informed of the results'], correct: 1, exp: 'Double-blind means both subjects and the researchers interacting with them are kept unaware.' },
          { q: 'A placebo is used mainly to:', opts: ['Increase the sample size', 'Replace the need for random assignment', 'Control for the placebo effect by making every subject feel like they received a treatment', 'Guarantee a cause-and-effect conclusion'], correct: 2, exp: 'A placebo controls for the placebo effect — the response difference from simply believing you got treatment.' },
          { q: 'A randomized block design is chosen over a completely randomized design when:', opts: ['No extraneous variable is expected to matter', 'The experiment has only two treatments', 'Subjects can be matched into pairs', 'One extraneous variable is believed to matter so much it shouldn’t be left to chance'], correct: 3, exp: 'Blocking guarantees an even split of a specific extraneous variable, rather than trusting pure chance.' },
          { q: 'A matched pairs design is a special case of blocking that is limited to:', opts: ['Exactly two treatments', 'Exactly two blocking variables', 'Exactly two experimental units total', 'Exactly two researchers'], correct: 0, exp: 'Matched pairs only works when comparing exactly two treatments.' },
          { q: 'Eighteen volunteers are randomly split into three vitamin D dosage groups with no blocking at all. This is a:', opts: ['Randomized block design', 'Completely randomized design', 'Matched pairs design', 'Observational study'], correct: 1, exp: 'Randomly assigning treatments with no blocking first is a completely randomized design.' },
          { q: 'Eighteen volunteers are first grouped by age (young / middle / older), then randomly assigned to one of three vitamin D dosage groups within each age group. This is a:', opts: ['Completely randomized design', 'Matched pairs design', 'Randomized block design', 'A convenience sample'], correct: 2, exp: 'Grouping by an extraneous variable first, then randomizing within each group, is a randomized block design.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Four non-negotiable principles', body: 'Comparison, randomization, replication, and direct control — every well-designed experiment needs all four.' },
          { num: 'ii.', title: 'Treat every group the same, except the treatment', body: 'Any unplanned difference between groups can become a confounding variable that explains the result instead of the treatment.' },
          { num: 'iii.', title: 'Blinding and placebos control the mind', body: 'Only needed with human subjects — the placebo effect is real, and blinding keeps both subjects and researchers from unconsciously skewing results.' },
          { num: 'iv.', title: 'Block when one variable matters too much to risk', body: 'Blocking guarantees an even split of that one variable across every treatment group, instead of trusting pure chance.' },
          { num: 'v.', title: 'Matched pairs is blocking taken to the extreme', body: 'Pairs (or a subject matched with themselves) are made as similar as possible — but it only works with exactly two treatments.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'An experiment gives every single subject the identical treatment, with no comparison group. Which principle is violated?', opts: ['Comparison', 'Randomization', 'Replication', 'Direct control'], correct: 0, exp: 'Without at least two treatment groups, there is no comparison to draw a conclusion from.' },
        { q: 'Which of the following best describes what random assignment accomplishes in an experiment?', opts: ['It guarantees equal sample sizes in every group', 'It spreads extraneous variables evenly across treatment groups so groups differ mainly in the treatment received', 'It eliminates the placebo effect entirely', 'It replaces the need for a control group'], correct: 1, exp: 'Random assignment is the mechanism that scatters extraneous variables across groups.' },
        { q: 'A drug trial uses only 2 subjects per treatment group instead of 200. What principle is being shortchanged?', opts: ['Comparison', 'Direct control', 'Replication', 'Blinding'], correct: 2, exp: 'Too few subjects per group means individual variability isn’t averaged out — that’s a replication problem.' },
        { q: 'Giving every plant in a fertilizer study exactly 100 mL of water on the same schedule is an example of:', opts: ['Blocking', 'Blinding', 'Randomization', 'Direct control'], correct: 3, exp: 'Holding a controllable extraneous variable (watering) constant across all groups is direct control.' },
        { q: 'A single-blind experiment means:', opts: ['Subjects do not know which treatment they received', 'Neither subjects nor researchers know who got which treatment', 'Only the statistician is unaware of the results', 'The experiment has only one treatment group'], correct: 0, exp: 'Single-blind keeps only the subjects unaware of their treatment.' },
        { q: 'A double-blind experiment means:', opts: ['Only subjects are kept unaware of their treatment', 'Neither the subjects nor the researchers who interact with them know who got which treatment', 'The experiment must have exactly two treatment groups', 'The results are announced twice, for verification'], correct: 1, exp: 'Double-blind keeps both subjects and the researchers who interact with them unaware.' },
        { q: 'A control group that receives a fake, inactive treatment instead of nothing at all helps control for:', opts: ['Replication error', 'Random assignment bias', 'The placebo effect', 'Blocking variation'], correct: 2, exp: 'A placebo is used specifically to control for the placebo effect.' },
        { q: 'A weight-loss study gives 60 volunteers either a real supplement or a placebo, with random assignment and no blocking. This design is:', opts: ['Randomized block design', 'Matched pairs design', 'An observational study', 'A completely randomized design'], correct: 3, exp: 'Random assignment with no blocking is a completely randomized design.' },
        { q: 'Researchers believe stress level strongly affects the outcome of a study, so they first group subjects into low-stress and high-stress blocks, then randomly assign treatments within each block. This is:', opts: ['A randomized block design', 'A completely randomized design', 'A matched pairs design', 'A convenience sample'], correct: 0, exp: 'Grouping by an extraneous variable first, then randomizing within each group, is a randomized block design.' },
        { q: 'A matched pairs design can only be used when there are:', opts: ['Three or more treatments', 'Exactly two treatments', 'No extraneous variables at all', 'At least 100 subjects'], correct: 1, exp: 'Matched pairs is limited to comparing exactly two treatments.' },
        { q: 'Two subjects, matched because they are the same age, gender, and skin type, are randomly split so one gets Sunscreen A and the other Sunscreen B. This is an example of:', opts: ['A completely randomized design', 'A randomized block design with three blocks', 'A matched pairs design', 'An observational study'], correct: 2, exp: 'Pairing similar subjects and randomly assigning one of two treatments to each is a matched pairs design.' },
        { q: 'A study has each subject try both treatments — for example, one arm gets Sunscreen A and the other arm gets Sunscreen B, in random order. This is:', opts: ['A completely randomized design', 'An observational study', 'Not a valid experimental design', 'A matched pairs design, using each subject as their own match'], correct: 3, exp: 'When a subject serves as their own comparison, that’s still a valid matched pairs design.' },
        { q: 'Why is it a problem if one treatment group in an experiment happens to contain mostly older subjects, purely by chance?', opts: ['Age could become a confounding variable, making it unclear whether the treatment or age caused the result', 'It is never a problem, since randomization always produces perfectly equal groups', 'It only matters if the study is observational', 'It automatically invalidates any cause-and-effect claim, with no fix possible'], correct: 0, exp: 'An uneven age split risks age becoming a confounding variable.' },
        { q: 'What is the best fix for the risk described in the previous question, if age is believed to matter a lot?', opts: ['Only use volunteers of one specific age', 'Use a randomized block design, blocking on age before randomly assigning treatments', 'Remove random assignment entirely', 'Skip replication to save time'], correct: 1, exp: 'Blocking on the variable of concern guarantees it can’t pile up unevenly in one group.' },
        { q: 'Why must experimental units be treated identically other than the treatment they are given?', opts: ['To reduce the total sample size needed', 'Because it is required for a study to legally be called an experiment', 'Otherwise, any unplanned difference between groups could become a confounding variable that explains the result instead of the treatment', 'Because otherwise the study cannot be double-blind'], correct: 2, exp: 'Any unplanned difference between groups threatens to explain the result instead of the treatment.' },
        { q: 'A drug company tests a new medication using 500 volunteers randomly assigned to drug or placebo groups, both taking identical-looking pills, with neither subjects nor the nurses recording symptoms told who got what. Which principle(s) are most clearly present here?', opts: ['Comparison only', 'Replication only', 'Direct control only', 'Randomization, replication, and double-blinding all together'], correct: 3, exp: 'This description shows random assignment, a large sample (replication), and double-blinding all working together.' },
        { q: 'A study is described as testing "whether listening to music while studying improves test scores," using 3 groups: classical music, white noise, and silence. What role does the silence group play?', opts: ['It serves as a control group for comparison', 'It is the only group that matters', 'It eliminates the need for random assignment', 'It represents a blocking variable'], correct: 0, exp: 'The silence group is the baseline the other two groups get compared against.' },
        { q: 'Why might a researcher use a placebo instead of giving the control group nothing at all?', opts: ['A placebo increases the required sample size', 'Without a placebo, the control group might respond differently just from knowing they got nothing, muddying the comparison', 'A placebo guarantees a cause-and-effect conclusion', 'A placebo replaces the need for randomization'], correct: 1, exp: 'A placebo keeps the control group from responding differently simply because they know they got nothing.' },
        { q: 'A nutrition study wants to compare two diets, and can pair up siblings living in the same household for the comparison. Why might this make a matched pairs design attractive?', opts: ['Because it eliminates the need for any randomization at all', 'Because it guarantees a bigger sample size', 'Because siblings sharing a household are likely similar in many extraneous variables (diet history, environment), isolating the effect of which diet they’re assigned', 'Because pairs are always cheaper to recruit than individuals'], correct: 2, exp: 'Matching on shared household traits removes those traits as possible explanations for any difference found.' },
        { q: 'Which of the three experimental designs discussed in this topic still requires random assignment of treatments?', opts: ['Only the completely randomized design', 'Only the randomized block design', 'Only the matched pairs design', 'All three — comparison, randomization, replication, and direct control apply to every design'], correct: 3, exp: 'All three designs are built on the same four principles; they only differ in how they handle extraneous variables.' }
      ]
    }
  }
});

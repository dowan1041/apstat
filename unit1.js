/* ============================================
   Unit 1 — Exploring One-Variable Data
   Topic 1.1 — Introducing Statistics:
   What Can We Learn From Data?
   Source: course transcript (Topic 1.1 lecture)
   ============================================ */

registerUnit({
  code: 'Unit 1',
  name: 'Exploring One-Variable Data',
  chapterIds: ['1-1', '1-2', '1-3', '1-4']
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
    ]
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
    ]
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
    ]
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
    ]
  }
});

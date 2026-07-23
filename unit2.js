/* ============================================
   Unit 2 — Exploring Two-Variable Data
   Topic 2.1 — Representing Two Categorical
   Variables: Tables and Graphs
   Source: course transcript (Topic 2.1 lecture)
   ============================================ */

registerUnit({
  code: 'Unit 2',
  name: 'Exploring Two-Variable Data',
  chapterIds: ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9', '2-10', '2-11', '2-12', 'review-u2a', 'review-u2b']
});

registerChapters({
  '2-1': {
    id: '2-1',
    code: 'Topic 2.1',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Tables and Graphs for Two Categorical Variables',
    cardSummary: 'Two-way tables, side-by-side bars, segmented bars, and mosaic plots — and how to read association off of them.',
    heroTitle: 'Two variables, <em>one table</em><br>at a time.',
    heroSub: 'A two-way table crosses two categorical variables in one grid. Bar graphs and mosaic plots turn that grid into a picture — and the picture tells you whether the two variables are associated.',
    source: 'Topic 2.1 course video',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'One grid. <span class="underline teal">Two variables.</span>',
        body: 'A <strong>two-way table</strong> (also called a <strong>contingency table</strong>) crosses two categorical variables — one running down the rows, one running across the columns — so you can see every combination of the two at once.',
        cards: [
          { roman: 'I.', title: 'Read the table', body: 'Cells can hold <strong>frequencies</strong> (counts) or <strong>relative frequencies</strong> (proportions). Row/column totals sit in the margins.', tags: ['Frequency','Relative frequency','Margins'], accent: 'population' },
          { roman: 'II.', title: 'Picture the table', body: 'Side-by-side bars, segmented bars, and mosaic plots all turn the same table into a graph you can compare at a glance.', tags: ['Side-by-side bar','Segmented bar','Mosaic plot'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">eight words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'two-way-table', term: 'Two-way table', accent: 'population', body: 'A table that summarizes two categorical variables at once — also called a <strong>contingency table</strong>. One variable runs down the rows, the other across the columns.' },
          { id: 'frequency', term: 'Frequency', accent: 'population', body: 'A fancy word for <strong>count</strong> — how many individuals fall into a cell, row, or column.' },
          { id: 'relative-frequency', term: 'Relative frequency', accent: 'population', body: 'A fancy word for <strong>proportion</strong> — a frequency divided by a total, so it’s always between 0 and 1 (or 0% and 100%).' },
          { id: 'sbs-bar', term: 'Side-by-side bar graph', accent: 'sample', body: 'Bars for each category of one variable are placed next to each other, grouped by the levels of the other variable — good for comparing raw counts.' },
          { id: 'segmented-bar', term: 'Segmented bar graph', accent: 'sample', body: 'Each bar is stacked to 100% and sliced into segments showing the proportion of each category of the other variable — like a candy bar cut into pieces.' },
          { id: 'mosaic-plot', term: 'Mosaic plot', accent: 'sample', body: 'A segmented bar graph where each bar’s <strong>width</strong> is also proportional to how many individuals it represents — width shows group size, height shows proportion.' },
          { id: 'association', term: 'Association', accent: 'population', body: 'Two variables are associated if knowing the outcome of one changes what you’d expect for the other — the proportions shift when you add a condition.' },
          { id: 'independent', term: 'Independent (no association)', accent: 'sample', body: 'Two variables are independent if knowing one tells you nothing about the other — the proportions stay the same no matter the condition.' }
        ]
      },

      /* ---------------- 3. TWO-WAY TABLES ---------------- */
      {
        type: 'twowaytable', id: 'twt', label: 'Section 03 — Two-Way Tables',
        heading: 'Click a cell. <span class="underline sample">See the proportion.</span>',
        body: 'Toggle between counts and percentages, condition on a row or column, and click any cell or total to see exactly how that number was built.',
        items: [
          {
            title: 'How 188 students get to school, and whether they were tardy',
            sub: 'rows = mode of transportation · columns = tardy?',
            rowVar: 'Transportation', colVar: 'Tardy',
            rows: ['Bus', 'Parent drives', 'Drove self', 'Walk'],
            cols: ['Yes', 'No'],
            data: [[9, 26], [8, 21], [41, 49], [6, 28]],
            caption: 'Click any interior cell for a joint proportion, any margin total for a marginal proportion, or condition on a row/column to see conditional proportions — the same numbers used throughout this lesson and the next.'
          },
          {
            title: 'Gender and hair color (n = 150)',
            sub: 'rows = gender · columns = hair color',
            rowVar: 'Gender', colVar: 'Hair color',
            rows: ['Male', 'Female'],
            cols: ['Black', 'Blonde', 'Brown', 'Red'],
            data: [[18, 8, 40, 4], [10, 14, 50, 6]],
            caption: 'Brown is the most common color for both genders — but is it the *same* proportion for both? Try conditioning on each row and compare.'
          }
        ]
      },

      /* ---------------- 4. GRAPHS ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 04 — Graphing Two Categorical Variables',
        heading: 'The same table, <span class="underline sample">drawn three ways</span>.',
        body: 'Side-by-side bars are best for comparing raw counts. Segmented bars and mosaic plots are built for comparing proportions — and a mosaic plot adds one more piece of information: group size.',
        items: [
          {
            title: 'Hair color by gender — side-by-side bar graph',
            chartType: 'sidebysidebar', mode: 'count',
            categories: ['Black', 'Blonde', 'Brown', 'Red'],
            series: [
              { label: 'Male', values: [18, 8, 40, 4] },
              { label: 'Female', values: [10, 14, 50, 6] }
            ],
            caption: 'Bar height = raw count. More males than females have black hair (18 vs. 10) — but this graph can’t tell you about *proportions* within each gender, only head counts.'
          },
          {
            title: 'Do you like chocolate? — segmented bar graph',
            chartType: 'segmentedbar', orientation: 'vertical',
            bars: [
              { label: 'Male (n=75)', segments: [{ label: 'Yes', value: 6 }, { label: 'No', value: 69 }] },
              { label: 'Female (n=125)', segments: [{ label: 'Yes', value: 54 }, { label: 'No', value: 71 }] }
            ],
            caption: 'Every bar is stretched to 100%, so you can compare proportions directly: only 8% of males said yes, versus 43.2% of females. That gap is what association looks like.'
          },
          {
            title: 'Do you like Skittles? — segmented bar graph',
            chartType: 'segmentedbar', orientation: 'vertical',
            bars: [
              { label: 'Male (n=150)', segments: [{ label: 'Yes', value: 39 }, { label: 'No', value: 111 }] },
              { label: 'Female (n=150)', segments: [{ label: 'Yes', value: 39 }, { label: 'No', value: 111 }] }
            ],
            caption: 'Both bars split 26% / 74% — identical proportions. Gender tells you nothing about liking Skittles, so these two variables are independent.'
          },
          {
            title: 'Bottle size sold — elementary vs. middle school (horizontal, equal width)',
            chartType: 'segmentedbar', orientation: 'horizontal',
            bars: [
              { label: 'Elementary school', segments: [{ label: 'Small', value: 60 }, { label: 'Medium', value: 30 }, { label: 'Large', value: 10 }] },
              { label: 'Middle school', segments: [{ label: 'Small', value: 33.3 }, { label: 'Medium', value: 33.3 }, { label: 'Large', value: 33.4 }] }
            ],
            caption: 'Segmented bars can run left-to-right too. Both bars are the same width here, so you can only compare *proportions* — you can’t yet tell which school sold more bottles overall.'
          },
          {
            title: 'Same data as a mosaic plot — width now shows total bottles sold',
            chartType: 'mosaic', orientation: 'vertical',
            bars: [
              { label: 'Elementary', total: 100, segments: [{ label: 'Small', value: 60 }, { label: 'Medium', value: 30 }, { label: 'Large', value: 10 }] },
              { label: 'Middle school', total: 300, segments: [{ label: 'Small', value: 100 }, { label: 'Medium', value: 100 }, { label: 'Large', value: 100 }] }
            ],
            caption: 'Middle school sold 3× as many bottles total, so its bar is 3× as wide. A larger *proportion* of elementary’s bottles were small (60% vs. 33%) — but because middle school sold so many more bottles overall, it actually sold more small bottles in raw count (100 vs. 60).'
          }
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Read the graph. <span class="underline teal">Decide: associated or not?</span>',
        body: 'Click each one open, reason through it yourself first, then check your logic against the worked answer.',
        items: [
          {
            q: 'Of 200 people surveyed (75 male, 125 female), 6 males and 54 females said they like chocolate. Is there an association between gender and liking chocolate?',
            fields: [
              { k: 'Proportion of males who like chocolate', v: '6/75 = 8.0%' },
              { k: 'Proportion of females who like chocolate', v: '54/125 = 43.2%' },
              { k: 'Compare', v: '8.0% is nowhere close to 43.2% — the proportion changes a lot depending on gender.' },
              { k: 'Conclusion', v: 'Yes, there is an association: females in this sample are much more likely to like chocolate than males.' }
            ]
          },
          {
            q: 'Same 200 people, but this time 39 males and 39 females (out of 150 each) said they like Skittles. Is there an association between gender and liking Skittles?',
            fields: [
              { k: 'Proportion of males who like Skittles', v: '39/150 = 26.0%' },
              { k: 'Proportion of females who like Skittles', v: '39/150 = 26.0%' },
              { k: 'Compare', v: 'Exactly equal — knowing someone’s gender gives you zero extra information about whether they like Skittles.' },
              { k: 'Conclusion', v: 'No association — gender and liking Skittles are independent in this sample.' }
            ]
          },
          {
            q: 'Elementary school sold 100 bottles (60% small); middle school sold 300 bottles (33.3% small). Can we say the elementary school sold more small bottles than the middle school?',
            fields: [
              { k: 'Proportion check', v: 'Elementary: 60% small. Middle school: 33.3% small. Elementary’s proportion is higher.' },
              { k: 'Raw count check', v: 'Elementary: 60% of 100 = 60 small bottles. Middle school: 33.3% of 300 = 100 small bottles.' },
              { k: 'Answer', v: 'No — even though a larger *proportion* of elementary’s bottles were small, middle school actually sold more small bottles in total (100 vs. 60), because its total sales were 3× bigger.' },
              { k: 'Is there an association between school and bottle size?', v: 'Yes — the proportion of each size sold is not the same at both schools (60/30/10 vs. roughly 33/33/33), so bottle size and school are associated.' }
            ]
          }
        ]
      },

      /* ---------------- 6. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown. Submit to check; anything wrong turns red so you can try once more before the answer is revealed.',
        items: [
          { segments: [
            'A ', { id:'b1', answer:'two-way table', options:['two-way table','bar graph','mosaic plot'] },
            ', also called a contingency table, summarizes and compares data for ',
            { id:'b2', answer:'two categorical', options:['two categorical','one quantitative','three numerical'] },
            ' variables.'
          ]},
          { segments: [
            'The entries in the cells of a two-way table can be ',
            { id:'b3', answer:'frequencies', options:['frequencies','samples','populations'] },
            ' (counts) or ',
            { id:'b4', answer:'relative frequencies', options:['relative frequencies','investigative questions','data sets'] },
            ' (proportions).'
          ]},
          { segments: [
            'In a ', { id:'b5', answer:'segmented bar graph', options:['segmented bar graph','side-by-side bar graph','scatterplot'] },
            ', each bar is stretched to represent 100% and sliced into pieces showing the proportion of each category — like a candy bar cut into chunks.'
          ]},
          { segments: [
            'A mosaic plot is a segmented bar graph where the ',
            { id:'b6', answer:'width', options:['width','color','height'] },
            ' of each bar is also proportional to how many individuals that bar represents.'
          ]},
          { segments: [
            'If there is an ', { id:'b7', answer:'association', options:['association','independence','a datum'] },
            ' between two variables, the outcome of one variable has an impact on the other.'
          ]},
          { segments: [
            'If two variables are ', { id:'b8', answer:'independent', options:['independent','associated','joint'] },
            ', also called having no association, the two variables do not impact each other — the proportions stay the same across every condition.'
          ]},
          { segments: [
            'Just because a group has a smaller ',
            { id:'b9', answer:'proportion', options:['proportion','count','width'] },
            ' of some category doesn’t mean it has a smaller total ',
            { id:'b10', answer:'count', options:['count','percentage','width'] },
            ' — a mosaic plot’s width reminds you to check both.'
          ]}
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        body: 'Front shows a short scenario or definition clue. Flip to check yourself, then mark whether you knew it.',
        items: [
          { prompt: 'A table that crosses two categorical variables, with one in the rows and one in the columns.', term: 'Two-way table (contingency table)', detail: 'Cells hold frequencies or relative frequencies; totals sit in the margins.' },
          { prompt: 'The fancy statistical word for "count."', term: 'Frequency', detail: 'How many individuals fall into a cell, row, or column.' },
          { prompt: 'The fancy statistical word for "proportion."', term: 'Relative frequency', detail: 'A frequency divided by a total — always between 0 and 1.' },
          { prompt: 'Bars grouped side by side by category, best for comparing raw counts.', term: 'Side-by-side bar graph', detail: 'Good for "which group has more people," not for comparing proportions directly.' },
          { prompt: 'Each bar stretched to 100% and sliced into pieces — like a candy bar.', term: 'Segmented bar graph', detail: 'Built for comparing proportions across groups of different sizes.' },
          { prompt: 'A segmented bar graph where bar *width* also shows group size.', term: 'Mosaic plot', detail: 'Width = how many individuals; height (segments) = proportion breakdown.' },
          { prompt: 'Of males, 8% like chocolate; of females, 43.2% do. What does this gap show?', term: 'Association', detail: 'The proportion changes depending on the condition — the two variables affect each other.' },
          { prompt: 'Of males, 26% like Skittles; of females, also 26%. What does this show?', term: 'Independence (no association)', detail: 'The proportion stays the same no matter the condition — knowing one variable tells you nothing about the other.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        body: 'Questions pulled straight from the lesson’s examples. Your best score is saved.',
        questions: [
          { q: 'A two-way table is also known as a:', opts: ['Segmented bar graph', 'Contingency table', 'Mosaic plot', 'Frequency table'], correct: 1, exp: 'A two-way table is also called a contingency table — both names describe the same grid crossing two categorical variables.' },
          { q: 'In a two-way table, the cell entries can be:', opts: ['Frequencies or relative frequencies', 'Only frequencies', 'Only relative frequencies', 'Only percentages over 50%'], correct: 0, exp: 'Cells can hold either frequencies (counts) or relative frequencies (proportions) — both are valid ways to fill in a two-way table.' },
          { q: 'Which graph type is best for comparing raw counts between two groups (not proportions)?', opts: ['Segmented bar graph', 'Mosaic plot', 'Pie chart', 'Side-by-side bar graph'], correct: 3, exp: 'Side-by-side bar graphs show bar height as a raw count, making them best for comparing head counts directly.' },
          { q: 'In a segmented bar graph, every bar is stretched to reach:', opts: ['The grand total count', '100%', 'The largest category’s count', 'The same height as a side-by-side bar graph'], correct: 1, exp: 'Every bar in a segmented bar graph is scaled to 100%, so segments show the proportion of each category within that bar.' },
          { q: 'What does bar *width* represent in a mosaic plot that a segmented bar graph does not show?', opts: ['The color scheme', 'The number of categories', 'The relative group size (total count) of that bar', 'The order of the categories'], correct: 2, exp: 'A mosaic plot adds width proportional to group size on top of the segmented-bar idea, so you can see both proportion and total size at once.' },
          { q: 'Of 75 males, 8% like chocolate. Of 125 females, 43.2% like chocolate. This is evidence of:', opts: ['Independence', 'Nothing — the sample sizes are too different to compare', 'A calculation error', 'An association between gender and liking chocolate'], correct: 3, exp: 'The proportion who like chocolate changes a lot depending on gender (8% vs. 43.2%), which is exactly what an association looks like.' },
          { q: '26% of males and 26% of females like Skittles. This means gender and liking Skittles are:', opts: ['Impossible to compare', 'Associated', 'Independent (no association)', 'Both associated and independent'], correct: 2, exp: 'Equal proportions across groups means the condition (gender) doesn’t change the outcome — that’s the definition of independence.' },
          { q: 'Elementary school: 60% of 100 bottles sold were small (60 bottles). Middle school: 33.3% of 300 bottles sold were small (100 bottles). Which statement is correct?', opts: ['Middle school sold more small bottles in total, even though its proportion is lower', 'Proportion and total count always agree', 'Both schools sold the same number of small bottles', 'Elementary sold more small bottles because its proportion is higher'], correct: 0, exp: 'A higher proportion doesn’t mean a higher total — middle school’s much larger total sales (300 vs. 100) means its smaller proportion still adds up to more actual small bottles (100 vs. 60).' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Two-way table = contingency table', body: 'Same thing, two names. Rows and columns cross two categorical variables; cells hold frequencies or relative frequencies.' },
          { num: 'ii.', title: 'Side-by-side bars ≠ segmented bars', body: 'Side-by-side bars show <strong>counts</strong>. Segmented bars stretch every bar to 100% so you can compare <strong>proportions</strong> fairly, even across groups of very different sizes.' },
          { num: 'iii.', title: 'A mosaic plot adds width', body: 'It’s a segmented bar graph where bar <strong>width</strong> also encodes group size — height tells you the proportion breakdown, width tells you how many people that breakdown is based on.' },
          { num: 'iv.', title: 'Association = the proportion shifts', body: 'If adding a condition (like gender) changes the proportion you’re looking at (like liking chocolate), the two variables are <strong>associated</strong>. If the proportion stays the same, they’re <strong>independent</strong>.' },
          { num: 'v.', title: 'Higher proportion ≠ higher count', body: 'Never assume a bigger percentage means a bigger total. Always check whether the groups being compared are actually the same size — that’s exactly what a mosaic plot’s width is there to remind you.' }
        ]
      }
    ],

    homework: {
      estTime: '~25 min',
      questions: [
        { q: 'A two-way table crosses two categorical variables. What term describes a cell frequency in a specific row or column that is NOT divided by any total?', opts: ['A raw frequency (count)', 'A relative frequency', 'A percentage', 'A proportion'], correct: 0, exp: 'A frequency is just a count — no division involved. Dividing by a total is what turns a frequency into a relative frequency.' },
        { q: 'A two-way table of 250 people crosses "owns a pet" (yes/no) with "lives in an apartment" (yes/no). Which of the following is a valid way to fill the interior cells?', opts: ['Only percentages', 'Frequencies or relative frequencies', 'Only decimals between 0 and 1', 'Names of individual people'], correct: 1, exp: 'Two-way table cells can hold either frequencies (counts) or relative frequencies (proportions) — both are standard.' },
        { q: 'A researcher wants to compare the raw number of students who prefer math vs. science, separately for 9th and 10th graders. Which graph type is the most natural first choice?', opts: ['Pie chart', 'Side-by-side bar graph', 'Mosaic plot', 'Segmented bar graph'], correct: 1, exp: 'Side-by-side bar graphs display raw counts directly, which is exactly what’s needed to compare head counts between groups.' },
        { q: 'In a segmented bar graph comparing two groups of very different sizes (50 people vs. 500 people), why is it still a fair comparison?', opts: ['It isn’t fair — segmented bars can never be trusted', 'The smaller group is automatically excluded', 'Segmented bars only work when group sizes are equal', 'Every bar is scaled to 100%, so you’re comparing proportions, not raw counts'], correct: 3, exp: 'Because every bar is stretched to represent 100% regardless of its actual size, segmented bar graphs let you compare proportions fairly even when the underlying group sizes differ a lot.' },
        { q: 'A mosaic plot shows Bar A twice as wide as Bar B. What does that tell you?', opts: ['Bar A represents twice as many total individuals as Bar B', 'Bar A has twice as many categories', 'Bar A has a higher proportion in every segment', 'Nothing — width is purely decorative'], correct: 0, exp: 'In a mosaic plot, bar width is proportional to the total number of individuals that bar represents — Bar A being twice as wide means it has twice the total count of Bar B.' },
        { q: 'Of 60 dog owners, 45 said they exercise daily. Of 40 non-dog-owners, 12 said they exercise daily. What is the best next step to check for association?', opts: ['Add 45 and 12 together', 'Compare the proportions: 45/60 vs. 12/40', 'Compare 45 to 12 directly', 'Nothing can be determined from this data'], correct: 1, exp: 'Because the two groups have different sizes (60 vs. 40), you must compare proportions (75% vs. 30%), not raw counts, to fairly judge association.' },
        { q: 'Using the previous question’s data (75% of dog owners exercise daily vs. 30% of non-owners), is there an association between dog ownership and daily exercise?', opts: ['Yes, because the proportion changes a lot depending on dog ownership', 'No, because both groups have some people who exercise daily', 'Cannot be determined without a pie chart', 'No, because 45 is greater than 12'], correct: 0, exp: 'A large shift in proportion (75% vs. 30%) when you change the condition (dog ownership) is the definition of an association.' },
        { q: 'A survey finds that 40% of coffee drinkers and 40% of non-coffee-drinkers report trouble sleeping. What can you conclude?', opts: ['There is an association between coffee drinking and trouble sleeping', 'The sample size must be reported before any conclusion is possible', 'Coffee drinking and trouble sleeping appear to be independent in this sample', 'Coffee drinking causes trouble sleeping'], correct: 2, exp: 'Equal proportions (40% and 40%) across both groups means the condition doesn’t change the outcome — that’s the signature of independence, not association.' },
        { q: 'Store A sold 200 items, 25% of which were on clearance (50 items). Store B sold 800 items, 15% of which were on clearance (120 items). Which statement is true?', opts: ['Both stores sold the same number of clearance items', 'Store A sold more clearance items than Store B', 'Store B sold more clearance items than Store A, even though its clearance proportion is lower', 'Proportion and raw count must always match'], correct: 2, exp: 'Store B’s much larger total (800 vs. 200) means its lower percentage still produces a bigger raw count: 120 clearance items vs. Store A’s 50.' },
        { q: 'Why can a mosaic plot correct a mistake that a same-width segmented bar graph might lead you to make?', opts: ['It cannot — the two graphs always give the same information', 'It removes the need for proportions entirely', 'It adds bar width proportional to group size, showing when a higher proportion still doesn’t mean a higher total count', 'It only displays quantitative data'], correct: 2, exp: 'A same-width segmented bar graph shows proportions only, which can trick you into thinking a bigger percentage always means a bigger total. A mosaic plot’s width exposes the actual group sizes.' },
        { q: 'A two-way table has a grand total of 400. A specific cell has a count of 60. What is the relative frequency of that cell?', opts: ['15%', '6.0%', '150%', '60%'], correct: 0, exp: '60/400 = 0.15 = 15%. Relative frequency is always the cell count divided by the total being referenced.' },
        { q: 'A two-way table crosses "favorite season" (4 categories) with "grade level" (3 categories). How many interior cells does the table have (not counting margin totals)?', opts: ['12', '7', '3', '4'], correct: 0, exp: 'A two-way table has (number of row categories) × (number of column categories) interior cells — here, 4 × 3 = 12.' },
        { q: 'In a side-by-side bar graph comparing "prefers cats" vs. "prefers dogs" for two age groups, the "under 30" bars are visibly taller than the "30 and over" bars across every category. What is the most likely explanation?', opts: ['The graph is drawn incorrectly', 'Side-by-side bar graphs cannot show two age groups', 'There is definitely an association between age and pet preference', 'The "under 30" group simply has more total people surveyed than the "30 and over" group'], correct: 3, exp: 'Because side-by-side bar graphs show raw counts, one group having taller bars across the board often just means that group is larger overall — not necessarily that there’s an association. This is exactly why segmented bars or mosaic plots are used to check proportions instead.' },
        { q: 'A study of 500 people crosses "exercise regularly" (yes/no) with "drinks soda daily" (yes/no). If exercise and soda-drinking are independent, what would you expect to see in a segmented bar graph?', opts: ['Two bars with very different proportions of soda drinkers', 'Only one bar, since independent variables merge into one category', 'Two bars with the same proportion of soda drinkers', 'A pie chart instead of a bar graph'], correct: 2, exp: 'Independence means the proportion doesn’t change based on the condition — so both the "exercise" and "no exercise" bars would show the same percentage of soda drinkers.' },
        { q: 'Which of the following would make a mosaic plot most useful, compared to a plain segmented bar graph?', opts: ['When there is only one categorical variable', 'When the groups being compared have very different total sizes', 'When both groups being compared have exactly the same total size', 'When you only care about raw counts and not proportions at all'], correct: 1, exp: 'A mosaic plot’s extra width information matters most when group sizes differ a lot — otherwise, equal-width segmented bars already tell the full story.' },
        { q: 'A two-way table shows 30 out of 90 juniors and 45 out of 90 seniors play a sport. Is there an association between grade level and playing a sport?', opts: ['No, because both groups have 90 people', 'Cannot be determined without a graph', 'No, because 45 is only 15 more than 30', 'Yes, because 30/90 (33.3%) and 45/90 (50%) are different proportions'], correct: 3, exp: 'With equal group sizes, comparing proportions (33.3% vs. 50%) directly shows the outcome shifts with grade level — an association.' },
        { q: 'A mosaic plot shows Store X’s bar is much narrower than Store Y’s bar, but within Store X’s bar, the "returned item" segment is proportionally much larger. What can you conclude?', opts: ['Store X had a higher return *rate*, but you’d need the actual widths (totals) to know which store had more total returns', 'Narrow bars always mean fewer returns', 'Store X definitely had more total returns than Store Y', 'The mosaic plot cannot show this information'], correct: 0, exp: 'A larger segment shows a higher proportion (rate), but because Store X’s bar is narrower (smaller total sales), you cannot assume it has more total returns without comparing the actual counts.' },
        { q: 'What is the key visual difference between a segmented bar graph and a side-by-side bar graph?', opts: ['They are exactly the same graph with different names', 'Segmented bars are always taller', 'Side-by-side bars place category bars next to each other showing counts; segmented bars stack one bar to 100% showing proportions', 'Side-by-side bars can only be used with quantitative data'], correct: 2, exp: 'Side-by-side bars are separate bars per category (raw counts); segmented bars stack all categories into one 100% bar per group (proportions).' },
        { q: 'A survey of 120 cat owners and 80 dog owners asks whether the pet sleeps indoors. 108 of the cat owners say yes; 76 of the dog owners say yes. What are the two conditional proportions to compare?', opts: ['108 and 76 directly, no division needed', '108/120 and 76/80', '108/80 and 76/120', '108/200 and 76/200'], correct: 1, exp: 'To compare fairly across groups of different sizes, divide each "yes" count by its own group total: cat owners 108/120, dog owners 76/80.' },
        { q: 'Which of these correctly restates the definition of "association" between two categorical variables?', opts: ['The two variables always have equal sample sizes', 'The two-way table has more rows than columns', 'The two variables must both be quantitative', 'The proportion of one variable’s outcome changes depending on the level of the other variable'], correct: 3, exp: 'Association means the outcome proportion for one variable shifts depending on which category of the other variable you condition on.' },
        { q: 'A mosaic plot is best described as:', opts: ['A pie chart with more colors', 'A side-by-side bar graph turned sideways', 'A graph that only works for quantitative variables', 'A segmented bar graph with bar width also proportional to group size'], correct: 3, exp: 'A mosaic plot combines a segmented bar graph (proportions via segment height/length) with variable bar width (proportional to each group’s total size).' }
      ]
    }
  }
});

/* ============================================
   Topic 2.2 — Summary Statistics for Two
   Categorical Variables
   Source: course transcript (Topic 2.2 lecture)
   ============================================ */

registerChapters({
  '2-2': {
    id: '2-2',
    code: 'Topic 2.2',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Marginal, Joint, and Conditional Relative Frequency',
    cardSummary: 'Three proportions you can pull from any two-way table — and how comparing them proves (or disproves) an association.',
    heroTitle: 'One table. <em>Three questions</em><br>you can ask it.',
    heroSub: 'Marginal asks about one variable alone. Joint asks about two variables at once, with "and." Conditional restricts you to one slice of the table first. Compare marginal to conditional, and you can prove an association with numbers.',
    source: 'Topic 2.2 course video',
    estTime: '~35–45 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'A <span class="underline teal">statistic</span> is just a number from a sample.',
        body: 'Analyzing a two-way table can yield several different proportions — and since each one is a number that describes a sample, each one is a <strong>statistic</strong>. This topic covers the three kinds you can pull from any two-way table.',
        cards: [
          { roman: 'I.', title: 'Marginal — one thing', body: 'A row or column total divided by the grand total. Answers a question about <strong>one</strong> variable only.', tags: ['P(A)','Row total / grand total'], accent: 'population' },
          { roman: 'II.', title: 'Joint — two things, "and"', body: 'A single interior cell divided by the grand total. Answers a question about <strong>two</strong> variables happening together.', tags: ['P(A ∩ B)','Cell / grand total'], accent: 'sample' },
          { roman: 'III.', title: 'Conditional — a restriction', body: 'A cell divided by <strong>just its row or column total</strong> — you’ve restricted which group you’re even allowed to look at.', tags: ['P(A | B)','Cell / row or column total'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">notation</span> that carries this whole topic.',
        body: 'The three relative frequencies look similar in notation but come from dividing by three different totals. Tap a term you’ve got down.',
        items: [
          { id: 'statistic', term: 'Statistic', accent: 'population', body: 'Any numerical piece of information that comes from a <strong>sample</strong> — including every proportion pulled from a two-way table.' },
          { id: 'marginal', term: 'Marginal relative frequency', sym: 'P(A)', accent: 'population', body: 'A row total or column total divided by the grand total. Notation: <span class="mono">P(A)</span> — asks about only one variable.' },
          { id: 'joint', term: 'Joint relative frequency', sym: 'P(A∩B)', accent: 'sample', body: 'An interior cell divided by the grand total. Notation: <span class="mono">P(A ∩ B)</span> or "P(A and B)" — the ∩ symbol means "and."' },
          { id: 'conditional', term: 'Conditional relative frequency', sym: 'P(A|B)', accent: 'sample', body: 'A cell divided by just its row or column total. Notation: <span class="mono">P(A | B)</span> — the bar means "given," and whatever’s after it always restricts the denominator.' },
          { id: 'restriction', term: 'Condition / restriction', accent: 'sample', body: 'The "given" part of a conditional question — it can appear anywhere in the sentence, but in notation it always goes after the bar, and it always shrinks your denominator.' },
          { id: 'expected-count', term: 'Expected count under no association', accent: 'population', body: 'What a cell *would* be if the two variables had zero effect on each other — found by applying the overall marginal proportion to a row or column total.' }
        ]
      },

      /* ---------------- 3. TWO-WAY TABLES ---------------- */
      {
        type: 'twowaytable', id: 'twt', label: 'Section 03 — Practice the Three Types',
        heading: 'Toggle. <span class="underline sample">Condition. Click.</span>',
        body: 'Same tool as last topic. Click any interior cell with no condition set for a joint proportion, click a margin total for a marginal proportion, or set "Condition on" and click a cell for a conditional proportion — watch the notation in the callout change.',
        items: [
          {
            title: 'How 188 students get to school, and whether they were tardy',
            sub: 'Same data as Topic 2.1 — now dig into marginal, joint, and conditional.',
            rowVar: 'Transportation', colVar: 'Tardy',
            rows: ['Bus', 'Parent drives', 'Drove self', 'Walk'],
            cols: ['Yes', 'No'],
            data: [[9, 26], [8, 21], [41, 49], [6, 28]],
            caption: 'Try: click the grand total row for P(Tardy) — that’s marginal, 64/188 ≈ 34.0%. Then condition on "Drove self" and click its Yes cell — that’s conditional, 41/90 ≈ 45.6%. The gap between those two numbers is the whole story of this lesson.'
          },
          {
            title: '162 adults — fitness tracker use and fitness level',
            sub: 'rows = fitness level · columns = wears a tracker?',
            rowVar: 'Fitness level', colVar: 'Wears tracker',
            rows: ['High', 'Moderate', 'Low'],
            cols: ['Yes', 'No'],
            data: [[51, 33], [36, 15], [21, 6]],
            caption: 'Condition on each row in turn and watch the "Yes" proportion move: 60.7% (high), 70.6% (moderate), 77.8% (low) — the lower someone’s fitness level, the more likely they are to wear a tracker in this sample.'
          },
          {
            title: '207 wart-treatment patients — clinic and outcome',
            sub: 'rows = clinic · columns = treatment result',
            rowVar: 'Clinic', colVar: 'Result',
            rows: ['Clinic A', 'Clinic B'],
            cols: ['Success', 'Fail'],
            data: [[88, 51], [35, 33]],
            caption: 'The worked example below writes up this exact table as a full AP-style answer — try it yourself first: is there an association between clinic and success?'
          }
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 04 — Worked Examples',
        heading: 'Marginal first. <span class="underline teal">Then compare.</span>',
        body: 'Every association question starts the same way: find the marginal baseline, then see whether conditioning moves it. Click each one open.',
        items: [
          {
            q: 'Is there an association between how 188 students get to school and whether they were tardy?',
            fields: [
              { k: 'Marginal baseline', v: 'P(Tardy) = 64/188 ≈ 34.0% — this is what "no information" looks like.' },
              { k: 'Condition: rode the bus', v: 'P(Tardy | Bus) = 9/35 ≈ 25.7% — lower than the baseline.' },
              { k: 'Condition: drove self', v: 'P(Tardy | Drove self) = 41/90 ≈ 45.6% — higher than the baseline.' },
              { k: 'Written conclusion', v: 'There is an association between mode of transportation and being tardy. Overall, 34.0% of students were tardy, but of those who rode the bus, only 25.7% were tardy, while of those who drove themselves, 45.6% were tardy. Bus riders were less likely to be tardy, and self-drivers were more likely — so how a student gets to school does impact whether they’re tardy.' }
            ]
          },
          {
            q: 'If there were truly no association between transportation and tardiness, about how many of the 90 self-drivers would be expected to be tardy?',
            fields: [
              { k: 'Marginal baseline', v: 'P(Tardy) = 64/188 ≈ 34.0% — under no association, this rate should apply to every row equally.' },
              { k: 'Expected count', v: '90 × 0.34 ≈ 30.6, so about 31 self-drivers would be tardy if transportation had zero effect.' },
              { k: 'Actual count', v: '41 self-drivers were actually tardy — well above the expected 31.' },
              { k: 'What this confirms', v: 'The actual count (41) is far from the no-association expectation (≈31), which is exactly why Example 1 concluded there’s a real association here.' }
            ]
          },
          {
            q: 'A new wart treatment is used at two clinics. 207 patients: 139 went to Clinic A (88 successes), 68 went to Clinic B (35 successes). Is there an association between clinic and successful treatment?',
            fields: [
              { k: 'Marginal baseline', v: 'P(Success) = 123/207 ≈ 59.4%' },
              { k: 'Condition: Clinic A', v: 'P(Success | A) = 88/139 ≈ 63.3%' },
              { k: 'Condition: Clinic B', v: 'P(Success | B) = 35/68 ≈ 51.5%' },
              { k: 'Written conclusion', v: 'Yes, there is an association between clinic and successful treatment. Overall, 59.4% of patients had success, but of those at Clinic A, 63.3% had success, while of those at Clinic B, only 51.5% had success. Something about Clinic A raises a patient’s chance of success in this sample.' }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 05 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A ', { id:'b1', answer:'marginal', options:['marginal','joint','conditional'] },
            ' relative frequency is a row total or column total divided by the ',
            { id:'b2', answer:'grand total', options:['grand total','row total','smallest cell'] },
            ' for the entire table.'
          ]},
          { segments: [
            'A ', { id:'b3', answer:'joint', options:['joint','marginal','conditional'] },
            ' relative frequency is a cell frequency divided by the grand total — it always involves the word ',
            { id:'b4', answer:'and', options:['and','given','not'] },
            ' connecting two categories.'
          ]},
          { segments: [
            'A ', { id:'b5', answer:'conditional', options:['conditional','joint','marginal'] },
            ' relative frequency restricts you to one row or one column before dividing — the restriction always shrinks the ',
            { id:'b6', answer:'denominator', options:['denominator','numerator','sample size of the whole table'] },
            '.'
          ]},
          { segments: [
            'In the notation P(A | B), the vertical bar means ', { id:'b7', answer:'given', options:['given','and','not'] },
            ', and whatever comes after the bar is always the ',
            { id:'b8', answer:'condition', options:['condition','answer','joint event'] },
            ', no matter where it appeared in the original sentence.'
          ]},
          { segments: [
            'There is an ', { id:'b9', answer:'association', options:['association','independence','a marginal frequency'] },
            ' between two variables if adding a condition ',
            { id:'b10', answer:'changes', options:['changes','never changes','doubles'] },
            ' the proportion you get — compare the marginal proportion to each conditional proportion to check.'
          ]},
          { segments: [
            'If there were truly no association, the expected count in a cell can be found by multiplying the row (or column) total by the overall ',
            { id:'b11', answer:'marginal', options:['marginal','joint','conditional'] },
            ' proportion for the other variable.'
          ]}
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: '"What proportion of all 188 students rode the bus?" — only one thing is asked about.', term: 'Marginal relative frequency', detail: 'Row or column total ÷ grand total. Notation: P(A).' },
          { prompt: '"What proportion of all students both rode the bus AND were tardy?"', term: 'Joint relative frequency', detail: 'Interior cell ÷ grand total. Notation: P(A ∩ B).' },
          { prompt: '"Of the students who rode the bus, what proportion were tardy?" — restricted to one group first.', term: 'Conditional relative frequency', detail: 'Cell ÷ that row’s (or column’s) total. Notation: P(A | B).' },
          { prompt: 'In P(Tardy | Bus), which part restricts the denominator?', term: 'Whatever is after the bar ("Bus")', detail: 'The bar always means "given" — the condition goes after it in notation regardless of sentence order.' },
          { prompt: 'The overall tardy rate is 34%. Bus riders: 25.7% tardy. Self-drivers: 45.6% tardy. What does this prove?', term: 'Association', detail: 'The proportion shifts a lot depending on the condition — transportation and tardiness affect each other.' },
          { prompt: 'How many of 90 self-drivers "should" be tardy if transportation had zero effect on tardiness?', term: 'Expected count under no association ≈ 31', detail: '90 × the marginal rate (34%) ≈ 30.6 ≈ 31 — compare this to the actual count to judge association.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'A statistic is best defined as:', opts: ['A number that must come from a two-way table', 'Only the mean of a data set', 'Any numerical piece of information that comes from a sample', 'Any number describing an entire population'], correct: 2, exp: 'A statistic is any number that comes from a sample — including every marginal, joint, and conditional proportion pulled from a two-way table.' },
          { q: 'A marginal relative frequency is calculated as:', opts: ['Two cells added together', 'A cell divided by its row total', 'A cell divided by the grand total', 'A row or column total divided by the grand total'], correct: 3, exp: 'Marginal relative frequency comes from the margins — a row or column total over the grand total for the whole table.' },
          { q: 'Which phrase signals a joint relative frequency?', opts: ['"Of those who..."', '"...and..."', '"...given that..."', '"What proportion overall..."'], correct: 1, exp: '"And" connects two categories at once — that’s the signature of a joint question, answered by looking inside the table at one specific cell.' },
          { q: 'In the notation P(A | B), what does the vertical bar mean?', opts: ['"Given" — B is the restriction/condition', 'Multiplication', '"And"', '"Not"'], correct: 0, exp: 'The bar means "given." Whatever comes after it is the condition that restricts your denominator.' },
          { q: 'Of 188 students, 35 rode the bus and 9 of those were tardy. What is P(Tardy | Bus)?', opts: ['9/35', '9/64', '9/188', '35/188'], correct: 0, exp: 'Conditioning on "rode the bus" restricts the denominator to the 35 bus riders, not the full 188: 9/35 ≈ 25.7%.' },
          { q: 'Using the same data, what is P(Bus ∩ Tardy)?', opts: ['35/188', '64/188', '9/188', '9/35'], correct: 2, exp: 'Joint relative frequency always divides by the grand total: 9/188 ≈ 4.8%.' },
          { q: 'Overall, 34% of students are tardy. Of bus riders, 25.7% are tardy. Of self-drivers, 45.6% are tardy. What does this show?', opts: ['That bus riders and self-drivers are the same group', 'No association — the numbers are all similar', 'A calculation error, since they should all equal 34%', 'An association between transportation and tardiness'], correct: 3, exp: 'The proportion shifts noticeably depending on the condition (transportation mode), which is the definition of an association.' },
          { q: 'If transportation had zero effect on tardiness, about how many of the 90 self-drivers should be tardy, given an overall tardy rate of 34%?', opts: ['34', '≈31', '90', '64'], correct: 1, exp: 'Expected count under no association = row total × overall marginal rate = 90 × 0.34 ≈ 30.6 ≈ 31.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'One total, not three separate formulas', body: 'Marginal, joint, and conditional are the *same idea* — count ÷ total — the only thing that changes is which total: grand total, grand total again, or a single row/column total.' },
          { num: 'ii.', title: '"And" means joint, "given"/"of those" means conditional', body: 'Read the sentence for the connecting word. "And" keeps you looking at the whole table. "Given," "of those," or "restricted to" shrinks your denominator to one row or column.' },
          { num: 'iii.', title: 'The condition always goes after the bar', body: 'No matter where the restriction appears in the English sentence, in notation P(A | B) it always lands after the bar.' },
          { num: 'iv.', title: 'Association = marginal ≠ conditional', body: 'Find the marginal baseline first. If conditioning on a category moves that number a meaningful amount, the variables are associated. If it stays put, they’re independent.' },
          { num: 'v.', title: 'Expected count previews a bigger idea', body: 'Multiplying a row total by the overall marginal rate gives you what "no association" would look like — comparing that to the real count is the same logic behind the chi-square test later in the course.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A statistic is best defined as:', opts: ['A number describing an entire population', 'A numerical piece of information that comes from a sample', 'A number found only in two-way tables', 'Only a mean or an average'], correct: 1, exp: 'A statistic is any numerical value computed from sample data — proportions from a two-way table qualify.' },
        { q: 'A marginal relative frequency comes from dividing:', opts: ['A cell by its row total', 'A row or column total by the grand total', 'Two row totals by each other', 'A cell by the grand total'], correct: 1, exp: 'Marginal relative frequency uses only the margins: a row total or column total, divided by the grand total.' },
        { q: 'A two-way table of 300 people crosses "owns a car" with "lives in the city." 90 people both own a car and live in the city. What is the joint relative frequency of owning a car and living in the city?', opts: ['90 divided by the "owns a car" total', '90 divided by the "lives in the city" total', 'Cannot be determined', '90/300'], correct: 3, exp: 'Joint relative frequency is always the cell count divided by the grand total: 90/300.' },
        { q: 'In the same table, 180 people total own a car. What is P(owns a car)?', opts: ['300/180', '90/300', '180/90', '180/300'], correct: 3, exp: 'This is a marginal question — one variable, one margin total (180) divided by the grand total (300).' },
        { q: 'Of the 180 car owners, 90 live in the city. What is P(lives in the city | owns a car)?', opts: ['90/300', '180/300', '180/90', '90/180'], correct: 3, exp: 'Conditioning on "owns a car" restricts the denominator to the 180 car owners, not the full 300: 90/180.' },
        { q: 'Which of these is the correct notation for "the proportion of students who play soccer AND are freshmen"?', opts: ['P(Soccer | Freshman)', 'P(Freshman | Soccer)', 'P(Soccer ∩ Freshman)', 'P(Soccer) + P(Freshman)'], correct: 2, exp: '"And" signals a joint probability, notated with the intersection symbol ∩ (or the word "and").' },
        { q: 'Which of these is the correct notation for "of the students who play soccer, the proportion who are freshmen"?', opts: ['P(Soccer | Freshman)', 'P(Soccer)', 'P(Freshman ∩ Soccer)', 'P(Freshman | Soccer)'], correct: 3, exp: 'The restriction ("of the students who play soccer") goes after the bar. You want the freshman proportion, so freshman comes first: P(Freshman | Soccer).' },
        { q: 'A restriction/condition in a conditional relative frequency question can appear:', opts: ['Anywhere in the sentence — but always after the bar in notation', 'Only at the beginning of the sentence', 'Only if the word "given" is used', 'Only at the end of the sentence'], correct: 0, exp: 'The condition can be phrased anywhere in the English sentence, but when written in P(A | B) notation, it always goes after the bar.' },
        { q: 'A survey of 400 people finds P(likes jazz) = 25%. Among the 150 people over age 50, 60 like jazz. What does this tell you?', opts: ['The two variables must be independent since both numbers involve jazz', 'P(likes jazz | over 50) = 60/400, no different from marginal', 'Nothing can be concluded without a bar graph', 'P(likes jazz | over 50) = 60/150 = 40%, which is higher than the marginal 25% — evidence of association'], correct: 3, exp: 'Conditioning on "over 50" gives 60/150 = 40%, clearly higher than the overall 25% marginal rate — the shift signals an association between age and liking jazz.' },
        { q: 'If age and liking jazz were truly independent (no association) in a sample of 150 people over 50, with an overall jazz-liking rate of 25%, about how many of them would be expected to like jazz?', opts: ['25', '150', '≈37 or 38', '60'], correct: 2, exp: 'Expected count under no association = row total × marginal rate = 150 × 0.25 = 37.5 ≈ 38.' },
        { q: 'Comparing that expected count (≈38) to the actual count (60), what can you conclude?', opts: ['They are close enough to conclude independence', 'The comparison is meaningless without a p-value', 'The actual count is well above expected, supporting an association between age and liking jazz', 'Expected counts are never useful'], correct: 2, exp: 'When the actual count (60) is well above the no-association expectation (≈38), that is further evidence of an association — the same logic used later in chi-square tests.' },
        { q: 'A two-way table crosses "brand loyalty" (yes/no) with "age group" (young/old), with a grand total of 500. Which computation gives a marginal relative frequency?', opts: ['(loyal) / (old total)', '(young total) / 500', '(young AND loyal) / 500', '(loyal) / (young total)'], correct: 1, exp: 'A marginal relative frequency only involves one variable — a single row or column total divided by the grand total, like (young total) / 500.' },
        { q: 'Which computation from the same table gives a conditional relative frequency?', opts: ['(young AND loyal) / (young total)', '(loyal total) / 500', '(old total) / 500', '(young AND loyal) / 500'], correct: 0, exp: 'Dividing the joint cell by just one margin total (not the grand total) restricts the group — that’s conditional: (young AND loyal) / (young total).' },
        { q: 'A two-way table shows P(A) = 40% overall. When conditioned on B, P(A | B) = 41%. What is the most reasonable conclusion?', opts: ['A strong association between A and B', 'B causes A', 'Little to no meaningful association — the proportions are very close', 'The table must contain an error'], correct: 2, exp: 'A tiny shift (40% to 41%) suggests the condition barely changes the outcome — that looks like independence, not a meaningful association.' },
        { q: 'A restaurant survey of 250 diners crosses "ordered dessert" with "dined on a weekend." 150 dined on a weekend, and of those, 90 ordered dessert. What is P(dessert | weekend)?', opts: ['90/150', '150/90', '90/250', '150/250'], correct: 0, exp: 'Conditioning on "weekend" restricts the denominator to the 150 weekend diners: 90/150 = 60%.' },
        { q: 'In that same survey, 60 total diners ordered dessert (weekday + weekend combined). What is P(dessert)?', opts: ['60/250', '60/150', '150/250', '90/250'], correct: 0, exp: 'This is a marginal question (one variable, dessert), so it uses the grand total: 60/250.' },
        { q: 'Comparing P(dessert) = 24% overall to P(dessert | weekend) = 60%, what should you conclude?', opts: ['No association — the numbers are unrelated', 'There is an association between dining on a weekend and ordering dessert', 'The sample size is too small to say anything', 'This can only be a joint relative frequency question'], correct: 1, exp: 'A large shift from the marginal (24%) to the conditional (60%) is exactly what an association looks like.' },
        { q: 'A two-way table has a grand total of 600. Row "Group X" totals 200. Within Group X, 50 people said yes to some question. What is P(yes ∩ Group X)?', opts: ['50/600', '50/200', '200/600', '50/50'], correct: 0, exp: 'Joint relative frequency divides the cell (50) by the grand total (600), not the row total.' },
        { q: 'Using the same table, what is P(yes | Group X)?', opts: ['50/600', '200/600', '50/200', '600/200'], correct: 2, exp: 'Conditioning on Group X restricts the denominator to that row’s total: 50/200.' },
        { q: 'Why is comparing a marginal proportion to a conditional proportion the standard way to check for association?', opts: ['Because joint probabilities cannot be compared to anything', 'Because the marginal proportion shows the "no information" baseline, and a conditional proportion shows what happens once you know one variable — a big gap between them means that variable matters', 'Because they are always numerically identical', 'Because AP Statistics requires starting every answer with the word "marginal"'], correct: 1, exp: 'The marginal proportion is your baseline expectation with no extra information. If knowing one variable (the condition) shifts that baseline a lot, the variables are associated — that comparison is the whole logic of this topic.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.3 — Estimating Probabilities Using
   Simulation
   Source: course transcript (Topic 2.3 lecture)
   ============================================ */

registerChapters({
  '2-3': {
    id: '2-3',
    code: 'Topic 2.3',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Estimating Probabilities Using Simulation',
    cardSummary: 'Pretend to run a random process with numbers instead of the real thing — and watch the law of large numbers pull your estimate toward the truth.',
    heroTitle: 'Can’t run the <em>real thing</em>?<br>Fake it with numbers.',
    heroSub: 'A simulation assigns numbers to outcomes and uses a random number generator to imitate a real random process. Run it once, and the result means almost nothing. Run it thousands of times, and the law of large numbers takes over.',
    source: 'Topic 2.3 course video',
    estTime: '~35–45 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'A <span class="underline teal">random process</span> in three pieces.',
        body: 'Every probability question starts with a random process — a situation where you know the possible results but not which one will happen. Break it into three pieces before you do anything else.',
        cards: [
          { roman: 'I.', title: 'Outcome vs. event', body: 'An <strong>outcome</strong> is the result of one trial (heads, or a 4, or a make). An <strong>event</strong> is a collection of outcomes you care about (at least 3 heads out of 5 tosses).', tags: ['Random process','Outcome','Event'], accent: 'population' },
          { roman: 'II.', title: 'Simulation = pretend with numbers', body: 'Assign numbers to outcomes in the same proportions as reality, then use a random number generator to imitate the process — without actually tossing a thousand coins by hand.', tags: ['Assign numbers','Random number generator','Trial'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">seven words</span> this topic runs on.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'random-process', term: 'Random process', accent: 'population', body: 'A process that generates results determined by chance — you know the possible outcomes, but not which one will happen on any given trial.' },
          { id: 'outcome', term: 'Outcome', accent: 'population', body: 'The result of <strong>one</strong> trial of a random process — one coin toss, one free throw, one selected store.' },
          { id: 'event', term: 'Event', accent: 'population', body: 'A collection of outcomes — like "3, 4, or 5 heads" out of 5 tosses, or "all 8 stores are from the US."' },
          { id: 'probability', term: 'Probability', accent: 'sample', body: 'The <strong>long-run relative frequency</strong> of an outcome or event — the proportion of times it happens, but only after a very large number of trials.' },
          { id: 'simulation', term: 'Simulation', accent: 'sample', body: 'A way to model a random process with numbers so the simulated outcomes closely match what would happen in real life — used to estimate a probability without actually repeating the real process.' },
          { id: 'trial', term: 'Trial', accent: 'sample', body: 'One full repetition of the event being simulated — e.g., one full set of 5 simulated coin tosses counts as one trial.' },
          { id: 'law-of-large-numbers', term: 'Law of large numbers', accent: 'population', body: 'As the number of trials increases, the long-run relative frequency gets closer and closer to the true probability. Ten trials tell you almost nothing — thousands do.' }
        ]
      },

      /* ---------------- 3. SIMULATOR ---------------- */
      {
        type: 'simulator', id: 'sim', label: 'Section 03 — Run the Simulation Yourself',
        heading: 'Click run. <span class="underline sample">Watch it converge.</span>',
        body: 'These are the same three scenarios from the lecture. Each one follows the same five-step design shown above the controls. Run a handful of trials first — the estimate will jump around. Then run 100 at a time and watch the line settle toward the dashed "true probability" line. That settling *is* the law of large numbers.',
        scenarios: [
          {
            id: 'coin5',
            shortLabel: '🪙 5 coin tosses',
            title: 'Toss a coin 5 times — P(at least 3 heads)',
            description: 'Random process: toss a coin. Outcomes: heads (H) or tails (T). Event: 5 tosses. Success: 3, 4, or 5 heads.',
            steps: [
              'Numbers: let 1 = heads and 2 = tails.',
              'Random number generator: pick 5 numbers from 1–2, integers only, repeats allowed — one coin doesn’t remember what the last one did.',
              'Count how many of the 5 numbers came up 1 (heads).',
              'A trial is a success if there are 3, 4, or 5 heads.',
              'Run many trials and track the proportion of successful trials.'
            ],
            numberRange: [1, 2],
            drawCount: 5,
            allowRepeats: true,
            classify: n => n === 1 ? 'H' : 'T',
            isSuccess: outcomes => outcomes.filter(o => o === 'H').length >= 3,
            trueProb: 0.5
          },
          {
            id: 'stores8',
            shortLabel: '🏬 8 of 800 stores',
            title: '800 stores (500 US / 300 Europe) — select 8, P(all 8 are US)',
            description: 'Random process: randomly select a store from the company’s 800. Outcomes: US or Europe. Event: select 8 different stores. Success: all 8 are from the US.',
            steps: [
              'Numbers: let 1–500 represent the 500 US stores, and 501–800 represent the 300 European stores.',
              'Random number generator: pick 8 numbers from 1–800, integers only, no repeats — you can’t select the same store twice.',
              'Classify each of the 8 numbers as US (1–500) or Europe (501–800).',
              'A trial is a success only if all 8 numbers land in the US range.',
              'Run many trials and track the proportion of successful trials.'
            ],
            numberRange: [1, 800],
            drawCount: 8,
            allowRepeats: false,
            classify: n => n <= 500 ? 'US' : 'EU',
            isSuccess: outcomes => outcomes.every(o => o === 'US'),
            trueProb: 0.022795292007667403
          },
          {
            id: 'freethrows10',
            shortLabel: '🏀 10 free throws',
            title: "McKenzie's 10 free throws (72% shooter) — P(at least 8 makes)",
            description: 'Random process: McKenzie shoots a free throw. Outcomes: make or miss. Event: 10 shots. Success: 8, 9, or 10 makes.',
            steps: [
              'Numbers: use 00–99 (100 numbers, since McKenzie makes 72% of her shots). Let 00–71 represent a make (72 numbers) and 72–99 represent a miss (28 numbers).',
              'Random number generator: pick 10 numbers from 0–99, integers only, repeats allowed — each shot is independent of the last.',
              'Count how many of the 10 numbers landed in the "make" range (00–71).',
              'A trial is a success if there are 8, 9, or 10 makes.',
              'Run many trials and track the proportion of successful trials.'
            ],
            numberRange: [0, 99],
            drawCount: 10,
            allowRepeats: true,
            classify: n => n <= 71 ? 'Make' : 'Miss',
            isSuccess: outcomes => outcomes.filter(o => o === 'Make').length >= 8,
            trueProb: 0.437829035595808
          }
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 04 — Worked Examples',
        heading: 'Design one <span class="underline teal">from scratch</span>.',
        body: 'The AP exam won’t ask you to click a button — it’ll ask you to write out the five design steps yourself. Practice on two new scenarios, then think through what happens with a small number of trials.',
        items: [
          {
            q: 'A basketball player makes 60% of her free throws. Design a simulation to estimate the probability she makes at least 4 of her next 5 free throws.',
            fields: [
              { k: 'Step 1 — Numbers', v: 'Use 00–99 (100 numbers, since she makes 60%). Let 00–59 represent a make (60 numbers) and 60–99 represent a miss (40 numbers).' },
              { k: 'Step 2 — Random number generator', v: 'Pick 5 numbers from 0–99, integers only, repeats allowed — each shot doesn’t affect the next.' },
              { k: 'Step 3 — What to count', v: 'Count how many of the 5 numbers landed in the "make" range (00–59).' },
              { k: 'Step 4 — Success', v: 'A trial is a success if there are 4 or 5 makes.' },
              { k: 'Step 5 — Repeat', v: 'Run many trials and use the proportion of successful trials to estimate the probability.' }
            ]
          },
          {
            q: 'A vaccine is 85% effective at preventing infection. If 6 vaccinated people are exposed to a virus, design a simulation to estimate the probability that at least 5 of them do not get infected.',
            fields: [
              { k: 'Step 1 — Numbers', v: 'Use 001–1000 (or any range divisible cleanly by 100). Let 001–850 represent "not infected" (85% of the range) and 851–1000 represent "infected" (15%).' },
              { k: 'Step 2 — Random number generator', v: 'Pick 6 numbers from 1–1000, integers only, repeats allowed — whether one person gets infected doesn’t change another person’s odds.' },
              { k: 'Step 3 — What to count', v: 'Count how many of the 6 numbers landed in the "not infected" range (001–850).' },
              { k: 'Step 4 — Success', v: 'A trial is a success if 5 or 6 of the 6 people are not infected.' },
              { k: 'Step 5 — Repeat', v: 'Run many trials and use the proportion of successful trials to estimate the probability.' }
            ]
          },
          {
            q: 'A student simulates 5-coin-toss trials (true probability of "3+ heads" = 50%) but only runs 8 trials, getting 2 successes — a 25% estimate. Their friend says "so the real probability must be 25%." What went wrong?',
            fields: [
              { k: 'What the 25% actually is', v: 'It’s the result of only 8 trials — a short-run estimate, not the true probability.' },
              { k: 'Why this doesn’t reveal the true probability', v: 'Probability is a long-run relative frequency. With only 8 trials, random chance alone can easily push the estimate far from 50% — that’s expected, not an error.' },
              { k: 'What would fix it', v: 'Run far more trials — hundreds or thousands. By the law of large numbers, the estimate will settle closer and closer to the true 50% as the trial count grows.' }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 05 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A ', { id:'b1', answer:'random process', options:['random process','simulation','trial'] },
            ' generates results that are determined by chance — you know the possible outcomes, but not which one will occur.'
          ]},
          { segments: [
            'An ', { id:'b2', answer:'outcome', options:['outcome','event','trial'] },
            ' is the result of one trial of a random process, while an ',
            { id:'b3', answer:'event', options:['event','outcome','probability'] },
            ' is a collection of outcomes.'
          ]},
          { segments: [
            'The probability of an outcome or event is its ', { id:'b4', answer:'long-run relative frequency', options:['long-run relative frequency','short-run count','marginal frequency'] },
            ' — its relative frequency over a very large number of trials.'
          ]},
          { segments: [
            'A ', { id:'b5', answer:'simulation', options:['simulation','population','sample'] },
            ' models a random process with numbers so that the simulated outcomes closely match real-world outcomes.'
          ]},
          { segments: [
            'The first step of designing a simulation is stating what ',
            { id:'b6', answer:'numbers', options:['numbers','people','graphs'] },
            ' you will use and what each one represents.'
          ]},
          { segments: [
            'When outcomes are independent of each other (like separate coin tosses or separate free throws), repeats should be ',
            { id:'b7', answer:'allowed', options:['allowed','not allowed','impossible'] },
            ' in the random number generator. When individuals can’t be chosen twice (like selecting different stores), repeats must ',
            { id:'b8', answer:'not', options:['not','always','sometimes'] },
            ' be allowed.'
          ]},
          { segments: [
            'The ', { id:'b9', answer:'law of large numbers', options:['law of large numbers','central limit theorem','five-step method'] },
            ' states that as the number of trials increases, the long-run relative frequency gets closer and closer to the true probability.'
          ]}
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 06 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: 'Tossing a coin — you know it’ll be heads or tails, but not which.', term: 'Random process', detail: 'A process whose result is determined by chance; the possible results are known, the actual result isn’t.' },
          { prompt: 'One single coin toss lands on heads.', term: 'Outcome', detail: 'The result of one trial of a random process.' },
          { prompt: '"Getting 3, 4, or 5 heads" out of 5 tosses.', term: 'Event', detail: 'A collection of outcomes you care about.' },
          { prompt: 'The true long-run chance of an outcome, only ever revealed after many, many trials.', term: 'Probability', detail: 'Long-run relative frequency — the proportion of times something happens after a very large number of trials.' },
          { prompt: 'Using numbers 00–71 to stand for "makes a free throw" instead of actually shooting hundreds of shots.', term: 'Simulation', detail: 'Modeling a random process with numbers so simulated outcomes match real-world outcomes.' },
          { prompt: 'One full run of 5 simulated coin tosses, checked for 3+ heads.', term: 'Trial', detail: 'One repetition of the entire event being simulated.' },
          { prompt: 'Why 8 trials giving 25% doesn’t mean the true probability is 25%, when it’s actually 50%.', term: 'Law of large numbers', detail: 'The estimate only gets close to the true probability after a large number of trials — small trial counts can be far off just by chance.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 07 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'A random process is best described as:', opts: ['A process whose result is determined by chance, with known possible outcomes', 'A process with only one possible result', 'A process that always produces the same outcome', 'Any process involving a computer'], correct: 0, exp: 'A random process has known possible outcomes, but which one occurs on a given trial is determined by chance.' },
          { q: 'Rolling a single die and getting a 4 is an example of a(n):', opts: ['Simulation', 'Law of large numbers', 'Event', 'Outcome'], correct: 3, exp: 'One specific result of one trial (rolling a 4) is an outcome. "Rolling an even number" would be an event — a collection of outcomes.' },
          { q: 'Probability is formally defined as:', opts: ['Always exactly 50%', 'The result of a single trial', 'The long-run relative frequency of an outcome or event', 'A number that can exceed 1'], correct: 2, exp: 'Probability is the proportion of times an outcome or event occurs, but only over a very large number of trials — its long-run relative frequency.' },
          { q: 'A spinner lands on red 30% of the time. To simulate one spin using numbers 00–99, which range should represent "red"?', opts: ['00–99', '00–29', '30–99', '00–30'], correct: 1, exp: 'You need 30 numbers to represent a 30% chance out of 100 total numbers: 00–29 is exactly 30 numbers.' },
          { q: 'When simulating 5 independent coin tosses, should repeated numbers be allowed in the random number generator?', opts: ['No, because each toss must be different', 'It doesn’t matter either way', 'Only if the coin is unfair', 'Yes, because each toss is independent — one toss doesn’t affect the next'], correct: 3, exp: 'Coin tosses are independent, so repeats must be allowed — getting "heads" on one toss has zero effect on the next.' },
          { q: 'When simulating the random selection of 8 different stores out of 800 (no store can be picked twice), should repeats be allowed?', opts: ['Yes, always allow repeats in simulations', 'No — once a store is selected, it can’t be selected again', 'Only for the first 4 selections', 'Repeats don’t matter since all stores are identical'], correct: 1, exp: 'Selecting without replacement (you can’t pick the same store twice) means repeats must NOT be allowed in the simulation.' },
          { q: 'A simulation of 10 trials gives an estimated probability of 20%, but the true probability is 45%. What does the law of large numbers say about this gap?', opts: ['Probability estimates are always exactly correct after any number of trials', 'The simulation is broken and must be redesigned', 'With only 10 trials, a gap this large is expected — more trials would bring the estimate closer to 45%', 'The true probability must actually be 20%'], correct: 2, exp: 'Small numbers of trials can easily land far from the true probability just by chance. The law of large numbers says the estimate converges to the truth only as trials increase substantially.' },
          { q: 'Which of these is NOT one of the five steps in designing a simulation?', opts: ['Calculate the exact theoretical probability using a formula before simulating', 'State what numbers will be used and what they represent', 'Explain how the random number generator will be used (repeats, how many numbers)', 'Run many trials and use the proportion of successes to estimate the probability'], correct: 0, exp: 'A simulation is specifically used when you want to estimate a probability without a formula. The five steps are: assign numbers, describe the random number generator, state what to count, define success, and run many trials.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 08 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Random process → outcome → event', body: 'A random process has known possible <strong>outcomes</strong>. An <strong>event</strong> is whichever collection of those outcomes you’re actually trying to find the probability of.' },
          { num: 'ii.', title: 'Probability only reveals itself in the long run', body: 'A handful of trials can land anywhere. Probability is a <strong>long-run relative frequency</strong> — it only becomes trustworthy after a large number of trials.' },
          { num: 'iii.', title: 'A simulation is numbers standing in for reality', body: 'Assign numbers in the same proportion as the real probabilities, then use a random number generator to "pretend" — it’s faster than repeating the real process by hand.' },
          { num: 'iv.', title: 'Repeats depend on replacement', body: 'Independent events (coin tosses, free throws) allow repeats. Selecting distinct individuals without replacement (8 different stores) does not.' },
          { num: 'v.', title: 'The law of large numbers is why more trials matter', body: 'As trials increase, your estimate keeps getting closer to the one true probability. Ten trials prove very little — thousands get you close to the truth.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A random process is best defined as:', opts: ['A process that generates results determined by chance, with the possible outcomes known in advance', 'A process that can never be repeated', 'Any process that uses a computer program', 'A process with a single guaranteed outcome'], correct: 0, exp: 'A random process has known possible outcomes, but the specific result of any one trial is determined by chance.' },
        { q: 'Drawing one card from a shuffled deck and getting the Queen of Hearts is an example of a(n):', opts: ['Event', 'Simulation', 'Law of large numbers', 'Outcome'], correct: 3, exp: 'A single specific result of one trial is an outcome. "Drawing a face card" would be an event instead.' },
        { q: '"Rolling an odd number" on a fair six-sided die is an example of a(n):', opts: ['Outcome', 'Probability', 'Event', 'Trial'], correct: 2, exp: 'This is a collection of outcomes (1, 3, and 5), which makes it an event, not a single outcome.' },
        { q: 'Probability is defined as:', opts: ['The result of the very first trial', 'A number that can be greater than 1', 'Always exactly 50% for any random process', 'The long-run relative frequency of an outcome or event'], correct: 3, exp: 'Probability is the proportion of times an outcome or event happens, but only over a very large number of trials.' },
        { q: 'A weighted spinner lands on blue 15% of the time. To simulate one spin using numbers 00–99, which range should represent "blue"?', opts: ['00–14', '85–99', '00–99', '00–15'], correct: 0, exp: 'You need exactly 15 numbers out of 100 to represent a 15% chance: 00–14 is 15 numbers (00,01,...,14).' },
        { q: 'A survey shows 40% of customers return a product within 30 days. Using numbers 1–100 to simulate one customer, which range should represent "returns the product"?', opts: ['1–100', '1–40', '60–100', '1–39'], correct: 1, exp: '40% of 100 numbers is 40 numbers: 1–40 represents exactly a 40% chance.' },
        { q: 'When simulating 6 independent spins of a roulette wheel, should the random number generator allow repeats?', opts: ['Yes — each spin is independent of the others', 'Repeats are only allowed on a fair wheel', 'Only for the first 3 spins', 'No, because each spin must land somewhere new'], correct: 0, exp: 'Independent events like separate spins should allow repeats — one spin’s result has no effect on the next.' },
        { q: 'When simulating a raffle where 5 unique winners are drawn from 200 tickets (no ticket can win twice), should repeats be allowed?', opts: ['It does not matter for raffles', 'No — once a ticket is drawn, it can’t be drawn again', 'Only if there are more than 100 tickets', 'Yes, always'], correct: 1, exp: 'Selecting distinct winners without replacement means repeats must not be allowed in the simulation.' },
        { q: 'A simulation of a 50%-probability event run for only 6 trials produces 1 success (about 17%). What is the best explanation?', opts: ['The true probability must be 17%', 'With so few trials, a result far from 50% happens easily just by chance — more trials are needed', 'Six trials is always enough to find the true probability', 'The simulation is defective'], correct: 1, exp: 'Small trial counts are highly variable due to chance. The law of large numbers says you need far more trials before the estimate reliably approaches the true probability.' },
        { q: 'What is the correct order of the five simulation design steps?', opts: ['Assign numbers and what they represent → describe the random number generator (repeats, quantity) → state what to count → define a successful trial → run many trials', 'Define success → run one trial → done', 'Run trials, then assign numbers, then define success', 'Calculate the exact probability with a formula, then simulate to double-check'], correct: 0, exp: 'The five steps, in order: assign numbers and their meaning, describe how the random number generator will be used, state what you’re counting, define a successful trial, then run many trials.' },
        { q: 'A city bus is on time 80% of the time. To simulate 4 independent bus arrivals using numbers 00–99, which setup is correct?', opts: ['00–19 = on time, 20–99 = late; pick 4 numbers, repeats allowed', '00–80 = on time, 81–99 = late; pick 4 numbers, no repeats', '00–79 = on time (80 numbers), 80–99 = late (20 numbers); pick 4 numbers, repeats allowed', '00–79 = on time, 80–99 = late; pick 4 numbers, no repeats'], correct: 2, exp: '80% needs 80 numbers (00–79). Since bus arrivals are independent events, repeats should be allowed, not forbidden.' },
        { q: 'A teacher wants to estimate the probability that at least 2 of 4 randomly selected (with replacement) students in a class of 30 prefer online homework, given 25% of all students do. What range of numbers correctly represents "prefers online homework" out of 00–99?', opts: ['25–99 (75 numbers)', '00–25 (26 numbers)', '00–29 (30 numbers, matching class size)', '00–24 (25 numbers)'], correct: 3, exp: 'A 25% probability needs 25 numbers out of 100: 00–24 is exactly 25 numbers. The class size (30) is irrelevant to the number assignment here.' },
        { q: 'In a simulation of 10 free throws for a 65% shooter, what should be counted as a "trial"?', opts: ['Only the shots that were makes', 'All 10 simulated shots together, checked against the success condition', 'The random number generator itself', 'A single one of the 10 shots'], correct: 1, exp: 'A trial is one full repetition of the entire event — here, one full set of 10 simulated shots, evaluated against the success condition.' },
        { q: 'After running a simulation for 5,000 trials, the estimated probability is 43.9%, very close to the calculated true probability of 43.78%. What does this closeness demonstrate?', opts: ['Coincidence with no statistical explanation', 'That exactly 5,000 trials is always required', 'The law of large numbers — with enough trials, the estimate converges toward the true probability', 'That the simulation was designed incorrectly'], correct: 2, exp: 'This is exactly what the law of large numbers predicts: as trial count grows very large, the long-run relative frequency approaches the true probability.' },
        { q: 'Which scenario would require "no repeats allowed" in its simulation design?', opts: ['Rolling the same die 6 times', 'Flipping the same coin 10 times', 'Randomly selecting 5 different students from a class to form a committee (no student picked twice)', 'Shooting 8 free throws in a row'], correct: 2, exp: 'Selecting distinct individuals for a committee, where no one can be chosen twice, is sampling without replacement — repeats must not be allowed.' },
        { q: 'Which scenario would require "repeats allowed" in its simulation design?', opts: ['Randomly assigning 4 different people to 4 different prizes', 'Selecting 3 distinct winners from a raffle drum', 'Dealing the top 5 cards from a single shuffled deck (no card dealt twice)', 'Simulating whether each of 20 independent customers makes a purchase'], correct: 3, exp: 'Each customer’s purchase decision is independent of the others, so repeats should be allowed — unlike the other options, which involve selecting distinct individuals without replacement.' },
        { q: 'A single simulation trial for "at least 3 heads in 5 tosses" produces the sequence 2,1,2,1,1 (1=heads, 2=tails). Is this trial a success?', opts: ['Yes — there are 3 ones (heads)', 'No — there are only 2 ones (heads)', 'Cannot be determined without more trials', 'Yes, because the sequence contains a 1'], correct: 0, exp: 'The sequence 2,1,2,1,1 contains three 1s (heads: positions 2, 4, 5), which meets the "3 or more heads" success condition.' },
        { q: 'Why must you count how many numbers fall in each category BEFORE assigning number ranges in a simulation?', opts: ['You don’t — number ranges can be assigned in any order regardless of probability', 'It only matters if the probability is exactly 50%', 'The size of each number range must match that outcome’s real-world probability, or the simulation won’t reflect reality', 'Only the total count of numbers matters, not which numbers go where'], correct: 2, exp: 'The whole point of a simulation is that simulated outcomes mirror real-world probabilities — so each outcome’s range of numbers must be sized to match its actual probability.' },
        { q: 'A simulation design assigns 00–59 to "success" (60 numbers) for an event with a real-world probability of 55%. What is wrong with this design?', opts: ['Nothing — the numbers just need to add up to 100', 'The numbers should have been letters instead', 'This design is fine as long as enough trials are run', '60 numbers represents 60%, not 55%, so the simulation would overestimate the true probability'], correct: 3, exp: '60 out of 100 numbers represents a 60% chance, not the intended 55% — running more trials would not fix a probability that was set up incorrectly in the first place.' },
        { q: 'Why is running only one trial of a simulation almost meaningless on its own?', opts: ['Because a single trial can only ever show a success', 'Because one trial gives either 0% or 100%, neither of which reflects the true long-run probability except by coincidence', 'Because a single trial always matches the true probability exactly', 'Because simulations require a computer to run even one trial'], correct: 1, exp: 'One trial is binary — success or failure — so it can only produce 0% or 100%, which almost never equals the true long-run probability. Only repeated trials, per the law of large numbers, approach the truth.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.4 — Introduction to Probability
   Source: course transcript (Topic 2.4 lecture)
   ============================================ */

registerChapters({
  '2-4': {
    id: '2-4',
    code: 'Topic 2.4',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Introduction to Probability',
    cardSummary: 'The sample space, the equally-likely-outcomes formula, and the complement — probability without running a single simulation.',
    heroTitle: 'You don’t always <em>need</em><br>a simulation.',
    heroSub: 'List every possible outcome — that’s the sample space. If every outcome is equally likely, probability is just counting: favorable outcomes over total outcomes. And every probability you find gets you a second one for free — its complement.',
    source: 'Topic 2.4 course video',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'List everything. <span class="underline teal">Then count.</span>',
        body: 'A simulation estimates probability through repetition. This topic finds probability directly — as long as you can list every outcome and they’re all equally likely.',
        cards: [
          { roman: 'I.', title: 'The sample space', body: 'The set of <strong>all</strong> possible non-overlapping outcomes of a random process. Its total probability is always 1 (100%) — something in the sample space has to happen.', tags: ['P(sample space) = 1','Non-overlapping'], accent: 'population' },
          { roman: 'II.', title: 'Equally likely outcomes', body: 'If every outcome in the sample space is equally likely, P(E) = (outcomes favoring E) ÷ (total outcomes). Get one probability, and you get its complement for free: P(not E) = 1 − P(E).', tags: ['P(E) = favorable / total','Complement = 1 − P(E)'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'The <span class="underline teal">notation</span> that carries this topic.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'sample-space', term: 'Sample space', accent: 'population', body: 'The set of all possible non-overlapping outcomes of a random process. Conventionally written inside curly braces, like {1, 2, 3, 4, 5, 6}.' },
          { id: 'equally-likely', term: 'Equally likely outcomes', accent: 'population', body: 'Outcomes in the sample space that all have the exact same probability of occurring — the condition required to use P(E) = favorable ÷ total.' },
          { id: 'notation-pe', term: 'P(E)', accent: 'sample', body: 'Notation for "the probability of event E." The P stands for probability, percentage, or proportion — they’re all the same idea here. It is never multiplication.' },
          { id: 'probability-range', term: 'Probability range', accent: 'population', body: 'Every probability is a number from 0 to 1 inclusive (0% to 100%). Nothing can be negative or over 100%.' },
          { id: 'complement', term: 'Complement', accent: 'sample', body: 'The probability that an event does <em>not</em> happen: P(not E) = 1 − P(E). Written as P(Eᶜ), P(E′), or P(not E) — all mean the same thing.' },
          { id: 'unlikely-misconception', term: '"Unlikely" ≠ under 50%', accent: 'sample', body: 'A common misconception: 50% is NOT the cutoff between likely and unlikely. Statisticians usually don’t call something unlikely until it drops below 5%, sometimes even 1%.' }
        ]
      },

      /* ---------------- 3. TWO-WAY TABLE ---------------- */
      {
        type: 'twowaytable', id: 'twt', label: 'Section 03 — Practice with a Two-Way Table',
        heading: 'Same table. <span class="underline sample">New notation.</span>',
        body: 'This is the same kind of two-way table from 2.1/2.2 — but now every value in it is also a probability, written P(E). Try finding P(10th grade), then its complement, then a joint probability like P(Blue ∩ Senior).',
        items: [
          {
            title: '850 students — grade level and eye color',
            sub: 'rows = grade · columns = eye color',
            rowVar: 'Grade', colVar: 'Eye color',
            rows: ['9th', '10th', '11th', '12th'],
            cols: ['Blue', 'Brown', 'Green', 'Hazel', 'Other'],
            data: [[40, 85, 25, 35, 15], [45, 90, 25, 40, 20], [50, 80, 30, 40, 15], [45, 85, 30, 35, 20]],
            caption: 'Click the "10th" row total for a marginal P(10th grade) = 220/850 ≈ 25.9%. Then click the Blue×12th cell for the joint P(Blue ∩ Senior) = 45/850 ≈ 5.3%. The complement of P(10th grade) is just 1 − 0.259 = 74.1%, without touching the table again.'
          }
        ]
      },

      /* ---------------- 4. GRAPHS ---------------- */
      {
        type: 'chart', id: 'graphs', label: 'Section 04 — Sample Spaces You Can See',
        heading: 'Equally likely <span class="underline sample">outcomes</span> — not equally likely <span class="underline sample">sums</span>.',
        body: 'Roll two dice and every one of the 36 combinations is equally likely. But add them together, and the *sums* are not — there’s only one way to make 12, but six ways to make 7. The grid below is the entire sample space; the highlighted cells are the event.',
        items: [
          {
            title: 'P(sum = 7)',
            chartType: 'dicegrid',
            highlight: sum => sum === 7,
            caption: 'Six outcomes give a sum of 7 — more than any other sum. P(sum = 7) = 6/36 = 1/6 ≈ 16.7%.'
          },
          {
            title: 'P(sum = 12)',
            chartType: 'dicegrid',
            highlight: sum => sum === 12,
            caption: 'Only one combination (6 and 6) gives a sum of 12. P(sum = 12) = 1/36 ≈ 2.78% — low, but not "unlikely" by the statistician’s 5% cutoff.'
          },
          {
            title: 'P(sum ≤ 5) — "at most 5"',
            chartType: 'dicegrid',
            highlight: sum => sum <= 5,
            caption: '"At most 5" means 5 or less — sums of 2, 3, 4, and 5 all count. P(sum ≤ 5) = 10/36 ≈ 27.8%.'
          },
          {
            title: 'A jar of marbles: 3 yellow, 5 red, 7 green (n = 15)',
            chartType: 'pie',
            data: [{ label:'Yellow', value:3 }, { label:'Red', value:5 }, { label:'Green', value:7 }],
            caption: 'Every one of the 15 individual marbles is equally likely to be picked. P(red) = 5/15 = 1/3 ≈ 33.3%. P(not red) = 1 − 1/3 = 2/3 ≈ 66.7%, for free.'
          }
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Count the favorable. <span class="underline teal">Count the total.</span>',
        body: 'Every one of these follows the same two moves: count what’s in the sample space, then count what’s favorable. Click each one open.',
        items: [
          {
            q: 'Roll a fair six-sided die. Find P(rolling a 2), P(not rolling a 2), and P(rolling an odd number).',
            fields: [
              { k: 'Sample space', v: '{1, 2, 3, 4, 5, 6} — 6 equally likely outcomes' },
              { k: 'P(rolling a 2)', v: '1/6 ≈ 16.7% — only one outcome (the 2) is favorable' },
              { k: 'P(not rolling a 2)', v: '1 − 1/6 = 5/6 ≈ 83.3% — the complement, found without recounting' },
              { k: 'P(odd number)', v: '3/6 = 50% — favorable outcomes are 1, 3, and 5' }
            ]
          },
          {
            q: 'Roll two fair six-sided dice and add the results. Find P(sum = 7) and P(sum ≤ 5).',
            fields: [
              { k: 'Sample space', v: '36 equally likely (die 1, die 2) pairs — but the *sums* they produce are not equally likely' },
              { k: 'P(sum = 7)', v: '6/36 = 1/6 ≈ 16.7% — the pairs (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) all give 7' },
              { k: 'P(sum ≤ 5)', v: '10/36 ≈ 27.8% — every pair summing to 2, 3, 4, or 5' },
              { k: 'Key idea', v: 'The 36 (die 1, die 2) outcomes are equally likely; the 11 possible sums (2 through 12) are not — never apply the equally-likely formula to the sums directly.' }
            ]
          },
          {
            q: 'A jar has 3 yellow, 5 red, and 7 green marbles (15 total, one draw). Find P(red) and P(not red).',
            fields: [
              { k: 'Sample space', v: '15 equally likely marbles — each individual marble has the same 1/15 chance of being drawn' },
              { k: 'P(red)', v: '5/15 = 1/3 ≈ 33.3%' },
              { k: 'P(not red)', v: '1 − 1/3 = 2/3 ≈ 66.7% — everything that’s yellow or green' }
            ]
          },
          {
            q: 'Using the 850-student grade × eye color table, find P(10th grade), P(green eyes), and P(Blue ∩ Senior).',
            fields: [
              { k: 'P(10th grade)', v: '220/850 ≈ 25.9% — a marginal probability, using only the row total' },
              { k: 'P(green eyes)', v: '110/850 ≈ 12.9% — a marginal probability, using only the column total' },
              { k: 'P(Blue ∩ Senior)', v: '45/850 ≈ 5.3% — a joint probability, using one interior cell over the grand total' },
              { k: 'Same table, new label', v: 'These are the exact marginal/joint ideas from 2.1–2.2 — Topic 2.4 just formalizes them with P(E) notation and the sample-space framing.' }
            ]
          }
        ]
      },

      /* ---------------- 6. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'The ', { id:'b1', answer:'sample space', options:['sample space','event','complement'] },
            ' of a random process is the set of all possible non-overlapping outcomes, and its total probability is always ',
            { id:'b2', answer:'1', options:['1','0','undefined'] },
            '.'
          ]},
          { segments: [
            'If all outcomes in the sample space are ', { id:'b3', answer:'equally likely', options:['equally likely','independent','conditional'] },
            ', then P(E) equals the number of outcomes favoring E divided by the ',
            { id:'b4', answer:'total number of outcomes', options:['total number of outcomes','number of trials run','sample size'] },
            ' in the sample space.'
          ]},
          { segments: [
            'The notation P(E) does not mean multiplication — the P stands for probability, percentage, or ',
            { id:'b5', answer:'proportion', options:['proportion','population','parameter'] },
            ', and E in parentheses is the outcome or event you’re finding the probability of.'
          ]},
          { segments: [
            'Every probability is a number between ', { id:'b6', answer:'0 and 1', options:['0 and 1','−1 and 1','0 and 100'] },
            ' inclusive — probabilities closer to 1 are more likely, and probabilities closer to 0 are less likely.'
          ]},
          { segments: [
            'The complement of event E is found by computing ', { id:'b7', answer:'1 minus P(E)', options:['1 minus P(E)','P(E) minus 1','P(E) times 2'] },
            ' — every probability you find automatically gives you a second one for free.'
          ]},
          { segments: [
            'When you roll two dice, the 36 (die 1, die 2) pairs are equally likely, but the possible ',
            { id:'b8', answer:'sums', options:['sums','colors','trials'] },
            ' they produce are not — some sums, like 7, have far more favorable outcomes than others, like 12.'
          ]}
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: '{1, 2, 3, 4, 5, 6} for a fair die roll.', term: 'Sample space', detail: 'The set of all possible non-overlapping outcomes — its total probability is always 1.' },
          { prompt: 'Every one of the 6 faces of a fair die has exactly a 1/6 chance.', term: 'Equally likely outcomes', detail: 'Required condition for using P(E) = favorable outcomes ÷ total outcomes.' },
          { prompt: 'P(rolling a 2) = 1/6. What does the P stand for?', term: 'Probability / percentage / proportion', detail: 'All the same idea in this notation — and P(E) is never multiplication.' },
          { prompt: 'P(rolling a 2) = 1/6, so P(not rolling a 2) = ?', term: 'Complement = 5/6', detail: '1 − P(E). Every probability gets you a second one for free.' },
          { prompt: 'Can a probability ever be 1.3 or −0.2?', term: 'No — probabilities run 0 to 1 inclusive', detail: '0% to 100%. Nothing can be negative or over 100%.' },
          { prompt: 'There’s only 1 way to roll a sum of 12 with two dice, but 6 ways to roll a sum of 7.', term: 'Equally likely outcomes ≠ equally likely sums', detail: 'The 36 (die 1, die 2) pairs are equally likely; the sums they create are not.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'The sample space of a random process is:', opts: ['The set of all possible non-overlapping outcomes', 'The complement of the event', 'A number between 0 and 1', 'Only the most likely outcome'], correct: 0, exp: 'The sample space lists every possible non-overlapping outcome — its total probability always sums to 1.' },
          { q: 'What must be true about the outcomes in a sample space to use P(E) = favorable ÷ total?', opts: ['They must be independent', 'They must all be numbers', 'They must be equally likely', 'There must be exactly 2 of them'], correct: 2, exp: 'The equally-likely-outcomes formula only applies when every outcome in the sample space has the same probability.' },
          { q: 'A fair spinner has 8 equal sections, 3 of which are red. What is P(red)?', opts: ['1/3', '3/8', '8/3', '5/8'], correct: 1, exp: 'Favorable outcomes (3 red sections) over total outcomes (8 sections): 3/8.' },
          { q: 'If P(rain tomorrow) = 0.35, what is P(no rain tomorrow)?', opts: ['0.35', 'Cannot be determined', '1.35', '0.65'], correct: 3, exp: 'The complement is 1 − P(E): 1 − 0.35 = 0.65.' },
          { q: 'Which of these is a valid probability?', opts: ['1.15', '0.72', '−0.25', '150%'], correct: 1, exp: 'Probabilities must fall between 0 and 1 inclusive (0% to 100%). 0.72 is the only valid value listed.' },
          { q: 'When rolling two fair six-sided dice, which statement is true?', opts: ['The 36 (die 1, die 2) pairs are equally likely, but the possible sums are not', 'Neither the pairs nor the sums are equally likely', 'The 36 (die 1, die 2) pairs are equally likely, and so are the 11 possible sums', 'Only the sums are equally likely, not the pairs'], correct: 0, exp: 'Each of the 36 ordered pairs has the same 1/36 chance, but sums like 7 have far more ways to occur than sums like 2 or 12 — so the sums are not equally likely.' },
          { q: 'A probability of 3% is best described using the guidance from this lesson as:', opts: ['Impossible', 'Likely, since it’s a small positive number', 'Not necessarily "unlikely" — statisticians often reserve that word for probabilities under about 5%, so 3% would typically count as unlikely', 'Exactly at the likely/unlikely cutoff'], correct: 2, exp: 'The 50% mark is a common misconception for the likely/unlikely cutoff — many statisticians don’t call something unlikely until it drops below roughly 5%. A 3% probability would generally qualify as unlikely under that guidance.' },
          { q: 'A bag has 4 blue and 6 orange marbles (10 total). What is P(not blue)?', opts: ['1/10', '10/4', '4/10', '6/10'], correct: 3, exp: 'P(blue) = 4/10, so P(not blue) = 1 − 4/10 = 6/10 — which also equals the direct count of orange marbles, 6/10.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'List it all — that’s the sample space', body: 'Every possible non-overlapping outcome, together, sums to a probability of exactly 1.' },
          { num: 'ii.', title: 'Equally likely unlocks the shortcut', body: 'Only when every outcome has the same chance can you use P(E) = favorable ÷ total. Check this before you apply the formula.' },
          { num: 'iii.', title: 'Every probability comes with a free second one', body: 'The complement, P(not E) = 1 − P(E), never requires recounting anything.' },
          { num: 'iv.', title: '0 to 1, always', body: 'No probability is ever negative or over 100% — and closer to 1 means more likely, closer to 0 means less likely.' },
          { num: 'v.', title: 'Equally likely outcomes ≠ equally likely results', body: 'Two dice have 36 equally likely (die 1, die 2) pairs, but their sums are not equally likely — six ways to make 7, only one way to make 12. Count the actual sample space, not a shortcut version of it.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'The sample space of flipping a coin twice and recording the sequence of heads/tails is:', opts: ['{H, T}', '{2 heads, 2 tails}', '{0, 1, 2}', '{HH, HT, TH, TT}'], correct: 3, exp: 'Recording the sequence of two flips gives four distinct, non-overlapping outcomes: HH, HT, TH, TT.' },
        { q: 'What is required before you can use P(E) = (favorable outcomes) / (total outcomes)?', opts: ['The event must be a joint probability', 'The sample space must contain fewer than 10 outcomes', 'All outcomes in the sample space must be equally likely', 'The event must involve exactly two outcomes'], correct: 2, exp: 'This shortcut formula only works when every outcome in the sample space has an equal chance of occurring.' },
        { q: 'A spinner has 5 equal sections numbered 1–5. What is P(spinning a number greater than 3)?', opts: ['4/5', '1/5', '3/5', '2/5'], correct: 3, exp: 'Numbers greater than 3 are 4 and 5 — 2 favorable outcomes out of 5 total: 2/5.' },
        { q: 'If P(a randomly chosen student plays a sport) = 0.68, what is P(does not play a sport)?', opts: ['Cannot be determined without more information', '0.68', '0.32', '1.68'], correct: 2, exp: 'Complement: 1 − 0.68 = 0.32.' },
        { q: 'Which value could NOT be a valid probability?', opts: ['0', '0.999', '1.01', '1'], correct: 2, exp: 'Probabilities must be between 0 and 1 inclusive — 1.01 exceeds that range.' },
        { q: 'A jar has 6 red, 4 blue, and 10 green marbles (20 total). What is P(blue)?', opts: ['4/10', '4/20', '10/20', '6/20'], correct: 1, exp: 'Favorable (blue = 4) over total (20): 4/20 = 1/5 = 20%.' },
        { q: 'Using the same jar (6 red, 4 blue, 10 green), what is P(not green)?', opts: ['10/20', '1 − 10/20 = 10/20', '4/20 + 6/20 = 10/20', '6/20'], correct: 1, exp: 'P(green) = 10/20, so P(not green) = 1 − 10/20 = 10/20 — which also equals red + blue directly (6/20 + 4/20).' },
        { q: 'When you roll two fair six-sided dice and record the sum, how many total (die 1, die 2) outcomes are in the sample space, and are all sums equally likely?', opts: ['6 outcomes; no, the sums are not equally likely', '36 outcomes; yes, all sums are equally likely', '11 outcomes; yes, all sums are equally likely', '36 outcomes; no, the sums are not equally likely even though the individual pairs are'], correct: 3, exp: 'There are 36 equally likely (die 1, die 2) pairs, but because different sums can be made in different numbers of ways, the 11 possible sums (2–12) are not equally likely.' },
        { q: 'How many of the 36 (die 1, die 2) outcomes produce a sum of 8?', opts: ['6', '3', '4', '5'], correct: 3, exp: 'Sum of 8: (2,6),(3,5),(4,4),(5,3),(6,2) — 5 outcomes.' },
        { q: 'What is P(sum = 8) when rolling two fair dice?', opts: ['5/36', '1/6', '8/36', '5/11'], correct: 0, exp: 'There are 5 favorable (die 1, die 2) pairs that sum to 8, out of 36 total equally likely pairs: 5/36.' },
        { q: 'A two-way table of 500 people crosses "handedness" (left/right) with "sport played" (soccer/basketball/none). The "left-handed" row totals 60. What is P(left-handed)?', opts: ['60/500', 'Cannot be determined without more of the table', '500/60', '60%, without needing to divide'], correct: 0, exp: 'This is a marginal probability: the row total (60) divided by the grand total (500).' },
        { q: 'In the same table, 500 total people, 18 are both left-handed and play soccer. What is P(left-handed ∩ soccer)?', opts: ['60/500', '18/500', '18/60', '500/18'], correct: 1, exp: 'A joint probability always divides the interior cell by the grand total: 18/500.' },
        { q: 'Which of these correctly describes what P(E) notation means?', opts: ['The number of trials needed to observe E', 'The probability, percentage, or proportion of event E occurring', 'P multiplied by E', 'The population size of event E'], correct: 1, exp: 'P(E) is notation for "the probability of E" — the P stands for probability/percentage/proportion, and it is never multiplication.' },
        { q: 'A weather forecaster says there is a 4% chance of a tornado today. Based on the guidance that "unlikely" typically starts below about 5%, how should this probability be described?', opts: ['Impossible to categorize without more context', 'Right at the boundary between likely and unlikely, since it’s close to 50%', 'Unlikely, since it falls below the roughly 5% threshold many statisticians use', 'Likely, since any nonzero chance counts as likely'], correct: 2, exp: 'The common misconception is that 50% is the likely/unlikely cutoff — many statisticians instead reserve "unlikely" for probabilities under roughly 5%, which 4% falls under.' },
        { q: 'A six-sided die is rolled once. What is P(rolling a number less than 3)?', opts: ['4/6', '2/6', '3/6', '1/6'], correct: 1, exp: 'Numbers less than 3 are 1 and 2 — 2 favorable outcomes out of 6 total: 2/6 = 1/3.' },
        { q: 'What is the complement of "rolling a number less than 3" on a fair six-sided die?', opts: ['Rolling a number less than 3 again', 'There is no complement for this event', 'Rolling exactly a 3', 'Rolling a 3, 4, 5, or 6'], correct: 3, exp: 'The complement of "less than 3" (i.e., 1 or 2) is everything else in the sample space: 3, 4, 5, or 6.' },
        { q: 'P(sum ≤ 4) when rolling two fair six-sided dice equals:', opts: ['6/36', '1/36', '4/36', '3/36'], correct: 0, exp: 'Sums of 2, 3, and 4 come from (1,1); (1,2),(2,1); and (1,3),(2,2),(3,1) — that’s 1+2+3 = 6 outcomes out of 36.' },
        { q: 'A bag of 50 lottery tickets has 2 winning tickets. One ticket is drawn at random. What is P(winning) and is the equally-likely-outcomes formula valid here?', opts: ['2/48; yes', '2/50; no, tickets are never equally likely', '2/50; yes, each ticket has an equal chance of being drawn', '48/50; yes'], correct: 2, exp: 'Each of the 50 tickets has an equal 1/50 chance of being drawn, so the formula applies directly: 2 favorable out of 50 total.' },
        { q: 'Which pair of probabilities could both be correct for the same event E?', opts: ['P(E) = 0.3 and P(not E) = 0.7', 'P(E) = 1.3 and P(not E) = −0.3', 'P(E) = 0.3 and P(not E) = 0.4', 'P(E) = 0.3 and P(not E) = 0.3'], correct: 0, exp: 'P(E) and P(not E) must always sum to exactly 1: 0.3 + 0.7 = 1 is the only valid pair listed.' },
        { q: 'Why can’t you directly apply P(E) = favorable ÷ total to find P(sum = 7) by treating "7" as 1 outcome out of 11 possible sums (2 through 12)?', opts: ['Because the 11 possible sums are not equally likely — you must count the 36 equally likely (die 1, die 2) pairs instead', 'Because sums can only range from 2 to 11, not 12', 'Because 7 is always the most common sum by definition, so no calculation is needed', 'Because probability formulas never apply to two-dice problems'], correct: 0, exp: 'The equally-likely-outcomes formula requires equally likely outcomes — and the 11 sums are not equally likely, even though the 36 underlying (die 1, die 2) pairs are. You must count favorable pairs, not favorable sums.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.5 — Mutually Exclusive Events
   Source: course transcript (Topic 2.5 lecture)
   ============================================ */

registerChapters({
  '2-5': {
    id: '2-5',
    code: 'Topic 2.5',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Mutually Exclusive Events',
    cardSummary: 'Joint probability, disjoint events, and the box method for solving a 2×2 table from partial information — the capstone of Unit 2.',
    heroTitle: 'Some events <em>can’t</em><br>happen together.',
    heroSub: 'Joint probability asks whether two events happen at the same time. When the answer is always no — P(A ∩ B) = 0 — the events are mutually exclusive, or disjoint. A Venn diagram with zero overlap is the picture; a 2×2 table you can solve from partial clues is the proof.',
    source: 'Topic 2.5 course video',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Overlap, <span class="underline teal">or no overlap</span>.',
        body: 'This topic is really just one question, asked with a new picture: can events A and B ever happen at the same time?',
        cards: [
          { roman: 'I.', title: 'Joint probability, revisited', body: 'P(A ∩ B) is the probability A and B happen together — the same joint probability from 2.2, now drawn as the overlap of two circles.', tags: ['P(A ∩ B)','Venn diagram','Overlap'], accent: 'population' },
          { roman: 'II.', title: 'Mutually exclusive = zero overlap', body: 'If A and B can never happen at the same time, they’re mutually exclusive (disjoint), and P(A ∩ B) = 0 — no exceptions.', tags: ['Disjoint','P(A ∩ B) = 0','No overlap'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'Three ideas, <span class="underline teal">one Venn diagram</span>.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'joint-probability', term: 'Joint probability', accent: 'population', body: 'The probability that events A and B both occur at the same time — P(A ∩ B), also written P(A and B). Pictured as the region where two Venn diagram circles overlap.' },
          { id: 'intersection', term: 'Intersection (∩)', accent: 'population', body: 'The mathematical symbol for "and." P(A ∩ B) is read "the probability of A and B." You’re never required to use the symbol — the word "and" works too.' },
          { id: 'mutually-exclusive', term: 'Mutually exclusive (disjoint)', accent: 'sample', body: 'Two events that cannot occur at the same time. If A and B are mutually exclusive, P(A ∩ B) = 0 — there is zero overlap between them.' },
          { id: 'venn-diagram', term: 'Venn diagram', accent: 'sample', body: 'A picture of two (or more) events as circles. Overlapping circles show a joint probability greater than 0; circles with no overlap show mutually exclusive events.' }
        ]
      },

      /* ---------------- 3. VENN DIAGRAMS ---------------- */
      {
        type: 'chart', id: 'venn-diagrams', label: 'Section 03 — Seeing It as a Venn Diagram',
        heading: 'Overlap means <span class="underline sample">joint probability</span>.',
        body: 'The same 2×2 tables you’ve been reading all unit can be redrawn as circles. Overlap = events that can happen together. No overlap = mutually exclusive.',
        items: [
          {
            title: 'Event A and Event B — the general picture',
            chartType: 'venn', mode: 'overlap',
            labelA: 'Event A', labelB: 'Event B', overlapValue: 'A ∩ B',
            caption: 'The shaded overlap is the joint probability P(A ∩ B) — the region where both events are true at once.'
          },
          {
            title: '85 students — robotics club and drama club',
            chartType: 'venn', mode: 'overlap',
            labelA: 'Robotics (30)', labelB: 'Drama (45)', onlyA: 25, onlyB: 40, overlapValue: 5, outside: 15,
            caption: '5 students are in both clubs — the overlap isn’t empty, so robotics and drama club are NOT mutually exclusive.'
          },
          {
            title: '60 students — chose an extra recess or an extra library book',
            chartType: 'venn', mode: 'disjoint',
            labelA: 'Recess (43)', labelB: 'Book (17)', onlyA: 43, onlyB: 17, outside: 0,
            caption: 'No overlap at all — every student picked exactly one bonus, so recess and book are mutually exclusive: P(Recess ∩ Book) = 0.'
          }
        ]
      },

      /* ---------------- 4. TWO-WAY TABLES ---------------- */
      {
        type: 'twowaytable', id: 'twt', label: 'Section 04 — Two-Way Tables, One More Time',
        heading: 'Click the <span class="underline sample">overlap cell</span>.',
        body: 'The same tables from the Venn diagrams above, in grid form. Click the interior cell where both events meet — if it’s 0, the row and column events are mutually exclusive.',
        items: [
          {
            title: 'Robotics club × Drama club (85 students)',
            rowVar: 'Robotics club', colVar: 'Drama club',
            rows: ['Robotics', 'Not robotics'],
            cols: ['Drama', 'Not drama'],
            data: [[5, 25], [40, 15]],
            caption: 'P(Robotics ∩ Drama) = 5/85 ≈ 5.9% — not zero, so these two events are NOT mutually exclusive.'
          },
          {
            title: '150 coffee customers — gender and drink temperature',
            rowVar: 'Gender', colVar: 'Drink',
            rows: ['Male', 'Female'],
            cols: ['Hot', 'Iced'],
            data: [[48, 22], [28, 52]],
            caption: 'Click Female × Hot for P(Female ∩ Hot) = 28/150 ≈ 18.7%. Male and Female are mutually exclusive (nobody is both); Hot and Iced are mutually exclusive too — but "Female" and "Hot" are not, since 28 people are both.'
          }
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'The <span class="underline teal">box method</span>: solve first, decide second.',
        body: 'Most mutually-exclusive questions give you a few numbers and expect you to fill in the rest of a 2×2 table before you can answer. Click each one open to see the fill-in order.',
        items: [
          {
            q: 'A teacher has 85 students. 30 are in robotics club, 45 are in drama club, and 15 are in neither. Let R = robotics, D = drama. Are R and D mutually exclusive?',
            fields: [
              { k: 'Set up the box', v: 'Rows: Robotics / Not robotics. Columns: Drama / Not drama. Place the three known numbers: grand total 85, "not robotics ∩ not drama" = 15, robotics row total = 30, drama column total = 45.' },
              { k: 'Fill "not robotics" row total', v: '85 − 30 = 55 students are not in robotics.' },
              { k: 'Fill "robotics ∩ not drama"', v: 'The "not drama" column must total 85 − 45 = 40. Since "not robotics ∩ not drama" = 15, the remaining 40 − 15 = 25 is "robotics ∩ not drama."' },
              { k: 'Fill "not robotics ∩ drama"', v: 'The "not robotics" row totals 55, and 15 of those are "not drama," so 55 − 15 = 40 are "not robotics ∩ drama."' },
              { k: 'Fill "robotics ∩ drama"', v: 'The robotics row must total 30, and 25 are already "robotics ∩ not drama," so 30 − 25 = 5 are in both clubs.' },
              { k: 'Answer', v: 'Since "robotics ∩ drama" = 5 (not 0), R and D are NOT mutually exclusive — there is overlap.' }
            ]
          },
          {
            q: 'At an elementary school, the first 60 students to walk in chose one bonus: an extra 15 minutes of recess, or an extra library book. 43 chose recess, 17 chose the book. Let R = recess, B = book. Are R and B mutually exclusive?',
            fields: [
              { k: 'Read the constraint', v: 'Students could only choose ONE of the two bonuses — that constraint alone should make you suspect mutual exclusivity before doing any math.' },
              { k: 'Fill the box', v: 'Recess total = 43, book total = 17, and 43 + 17 = 60 = the grand total — every student is accounted for by exactly one choice.' },
              { k: 'Fill "recess ∩ book"', v: 'Since choosing both was never an option, "recess ∩ book" = 0, and "neither" = 0 too.' },
              { k: 'Answer', v: 'P(Recess ∩ Book) = 0, so recess and book ARE mutually exclusive — confirmed by the box, not just the wording.' }
            ]
          },
          {
            q: '200 students were asked their grade level (9th–12th) and favorite sport (basketball, football, or soccer). 23 students are both in 11th grade and prefer football. Find P(football ∩ 11th grade), then name a pair of mutually exclusive events and a pair that are not.',
            fields: [
              { k: 'P(football ∩ 11th grade)', v: '23/200 = 11.5% — a joint probability, no box needed since both numbers are already given directly.' },
              { k: 'A mutually exclusive pair', v: '9th grade and 12th grade — no student can be in two grade levels at once, so P(9th ∩ 12th) = 0. Same logic applies to any two grade levels, or any two favorite sports if each student picks only one.' },
              { k: 'A non-mutually-exclusive pair', v: '10th grade and basketball — 16 students in this survey are both 10th graders AND basketball fans, so P(10th ∩ basketball) = 16/200 ≠ 0.' }
            ]
          }
        ]
      },

      /* ---------------- 6. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'Joint probability is the probability that events A and B will ', { id:'b1', answer:'both occur at the same time', options:['both occur at the same time','never occur together','occur in sequence'] },
            ', written P(A ∩ B) or P(A and B).'
          ]},
          { segments: [
            'On a Venn diagram, joint probability is pictured as the ', { id:'b2', answer:'overlap', options:['overlap','total area','empty space'] },
            ' between circle A and circle B.'
          ]},
          { segments: [
            'Two events are ', { id:'b3', answer:'mutually exclusive', options:['mutually exclusive','joint','conditional'] },
            ', also called disjoint, if they cannot occur at the same time.'
          ]},
          { segments: [
            'If two events are mutually exclusive, then P(A ∩ B) = ', { id:'b4', answer:'0', options:['0','1','0.5'] },
            ' — there is no intersection between them on a Venn diagram.'
          ]},
          { segments: [
            'When solving a 2×2 table from partial information, always start by filling in whichever ',
            { id:'b5', answer:'row or column total', options:['row or column total','random cell','decimal value'] },
            ' you can compute directly, then use it to work out the remaining cells.'
          ]},
          { segments: [
            'If a scenario says individuals must choose exactly one of two options, that guarantees the "both" cell and the "neither" cell are both ',
            { id:'b6', answer:'0', options:['0','equal to the grand total','unknown'] },
            ', which proves the two options are mutually exclusive.'
          ]}
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: 'P(A ∩ B) — the probability that A and B both happen.', term: 'Joint probability', detail: 'Pictured as the overlap of two circles on a Venn diagram.' },
          { prompt: 'The math symbol that means "and."', term: '∩ (intersection)', detail: 'P(A ∩ B) is read "the probability of A and B" — the word "and" works just as well in notation.' },
          { prompt: '5 students are in both robotics and drama club — is this mutually exclusive?', term: 'No — P(A ∩ B) = 5/85 ≠ 0', detail: 'Any nonzero overlap means the events are NOT mutually exclusive.' },
          { prompt: 'Students could only pick recess OR a book, never both — 0 picked both.', term: 'Mutually exclusive (disjoint)', detail: 'P(A ∩ B) = 0 — zero overlap on the Venn diagram.' },
          { prompt: 'Given 3 of 4 cells in a 2×2 table, how do you find the 4th?', term: 'The box method', detail: 'Use each row and column total to solve for whichever cell is still unknown, one step at a time.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'Joint probability P(A ∩ B) refers to:', opts: ['The probability that A and B occur at the same time', 'The probability that neither A nor B occurs', 'The probability of A given B', 'The probability that A occurs, ignoring B entirely'], correct: 0, exp: 'Joint probability is specifically about A and B happening together — pictured as the overlap region on a Venn diagram.' },
          { q: 'On a Venn diagram, mutually exclusive events are shown as:', opts: ['Two circles with some overlap', 'A single circle', 'Two circles that overlap completely', 'Two circles with no overlap at all'], correct: 3, exp: 'Mutually exclusive (disjoint) events can never happen together, so their circles never touch — zero overlap.' },
          { q: 'If P(A ∩ B) = 0.08, are A and B mutually exclusive?', opts: ['Yes, because 0.08 is a small number', 'Yes, since it’s less than 0.5', 'No — mutually exclusive requires P(A ∩ B) to equal exactly 0', 'Cannot be determined'], correct: 2, exp: 'Mutual exclusivity requires zero overlap — any nonzero joint probability, even a small one, means the events are not mutually exclusive.' },
          { q: 'A 2×2 table has a grand total of 120, row totals 50 and 70, column totals 45 and 75, and a top-left cell of 30. What is the bottom-left cell?', opts: ['25', '35', '15', '20'], correct: 2, exp: 'The left column totals 45, and its top cell is 30, so the bottom-left cell is 45 − 30 = 15.' },
          { q: 'Two events, "rolling a 3" and "rolling an even number" on a single die roll, are:', opts: ['Not mutually exclusive, since a die could show both at once', 'Mutually exclusive, since 3 is odd and evens are different', 'Impossible to compare', 'The same event'], correct: 1, exp: 'A single roll can’t be both 3 (odd) and even at the same time — these two events are mutually exclusive, P(both) = 0.' },
          { q: 'Two events, "being a sophomore" and "playing varsity soccer," are most likely:', opts: ['Impossible to define', 'Not mutually exclusive — a student could easily be both', 'Mutually exclusive, since sophomores can’t play sports', 'Always independent'], correct: 1, exp: 'A student can absolutely be both a sophomore and a varsity soccer player at the same time — there’s no rule preventing overlap, so these are not mutually exclusive.' },
          { q: '150 customers: 70 male, 80 female. 22 males ordered iced coffee. What is P(Male ∩ Iced)?', opts: ['22/70', '22/80', '70/150', '22/150'], correct: 3, exp: 'Joint probability always divides by the grand total: 22/150 ≈ 14.7%.' },
          { q: 'In a 2×2 table, if the "both" cell and the "neither" cell are both 0, what can you conclude?', opts: ['The two row/column events must be mutually exclusive', 'The table has an error', 'The two events are independent, not mutually exclusive', 'Nothing can be concluded'], correct: 0, exp: 'A "both" cell of 0 directly means P(A ∩ B) = 0 — the definition of mutually exclusive.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Joint probability = the overlap', body: 'P(A ∩ B) is the chance A and B happen together — visually, the shaded region where two Venn diagram circles cross.' },
          { num: 'ii.', title: 'Mutually exclusive means exactly zero', body: 'Not "small," not "unlikely" — P(A ∩ B) must equal precisely 0 for two events to be mutually exclusive.' },
          { num: 'iii.', title: 'The box method fills a table from the outside in', body: 'Use whatever row or column total you can compute first, then work inward one cell at a time until every cell is known.' },
          { num: 'iv.', title: '"Choose exactly one" is a giveaway', body: 'If a scenario forces individuals to pick exactly one of two options, the "both" and "neither" cells are automatically 0 — mutually exclusive, guaranteed.' },
          { num: 'v.', title: 'This closes the loop on Unit 2', body: 'Two-way tables (2.1), marginal/joint/conditional frequency (2.2), simulation (2.3), the equally-likely formula (2.4), and mutually exclusive events (2.5) are all different lenses on the same object: two categorical variables, crossed in one table.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'Joint probability P(A ∩ B) is best described as:', opts: ['The probability of A given that B occurred', 'The probability that A and B occur at the same time', 'The probability of A or B, but not both', 'The probability that neither A nor B occurs'], correct: 1, exp: 'Joint probability specifically measures A and B happening together.' },
        { q: 'On a Venn diagram, the overlap between circle A and circle B represents:', opts: ['P(neither A nor B)', 'P(A) alone', 'P(B) alone', 'P(A ∩ B)'], correct: 3, exp: 'The overlapping region is exactly the joint probability P(A ∩ B).' },
        { q: 'Two events are mutually exclusive if and only if:', opts: ['P(A) = P(B)', 'P(A ∩ B) = 0.5', 'P(A ∩ B) = 1', 'P(A ∩ B) = 0'], correct: 3, exp: 'Mutually exclusive (disjoint) events have zero probability of occurring together: P(A ∩ B) = 0.' },
        { q: 'A die is rolled once. Are "rolling a 5" and "rolling an odd number" mutually exclusive?', opts: ['Yes, since they’re different phrases', 'No — 5 is itself an odd number, so both events happen together whenever you roll a 5', 'Cannot be determined', 'Yes, since 5 only comes up rarely'], correct: 1, exp: 'Since 5 is odd, rolling a 5 automatically satisfies "rolling an odd number" too — these events overlap, so they are NOT mutually exclusive.' },
        { q: 'A die is rolled once. Are "rolling a 2" and "rolling a 5" mutually exclusive?', opts: ['No, both are possible outcomes', 'Cannot be determined without more rolls', 'Yes — a single roll can’t show both a 2 and a 5 at the same time', 'Only if the die is unfair'], correct: 2, exp: 'A single die roll produces exactly one number, so it’s impossible to roll both a 2 and a 5 simultaneously — these events are mutually exclusive.' },
        { q: 'A survey of 100 people crosses "owns a cat" with "owns a dog." 12 people own both. Are "owns a cat" and "owns a dog" mutually exclusive?', opts: ['No — 12 people own both, so P(cat ∩ dog) = 12/100 ≠ 0', 'Yes, because cats and dogs are different animals', 'Yes, since most pet owners choose one type', 'Cannot be determined from this information'], correct: 0, exp: 'Since 12 people own both, the joint probability is nonzero, which means the events are NOT mutually exclusive.' },
        { q: 'A 2×2 table has grand total 200, row totals 90 and 110, column totals 75 and 125. The top-left cell (row 1, column 1) is 40. What is the top-right cell?', opts: ['75', '50', '35', '90'], correct: 1, exp: 'Row 1 totals 90, and its first cell is 40, so the second cell in row 1 is 90 − 40 = 50.' },
        { q: 'Using the same table (grand total 200, row totals 90/110, column totals 75/125, top-left = 40), what is the bottom-left cell?', opts: ['85', '50', '35', '70'], correct: 2, exp: 'Column 1 totals 75, and its top cell is 40, so the bottom cell in column 1 is 75 − 40 = 35.' },
        { q: 'Continuing the same table, what is the bottom-right cell?', opts: ['110', '85', '75', '65'], correct: 2, exp: 'Row 2 totals 110, and its first (bottom-left) cell is 35, so the bottom-right cell is 110 − 35 = 75. Column 2 totals 125 minus the top-right cell (50) also gives 75 — both methods must agree, and they do.' },
        { q: 'A school has 150 students. 60 play an instrument, 40 are on a sports team, and 65 do neither. Using the box method, how many students both play an instrument AND are on a sports team?', opts: ['25', '20', '15', '10'], correct: 2, exp: 'Not-instrument total = 150 − 60 = 90. Of those, 65 do neither, so not-instrument-and-sports = 90 − 65 = 25. The sports total is 40, so instrument-and-sports = 40 − 25 = 15.' },
        { q: 'A 2×2 table shows "both" = 0 for events C and D. What can you immediately conclude?', opts: ['C and D have equal probability', 'C and D are independent', 'C and D are mutually exclusive', 'The table must contain an error'], correct: 2, exp: 'A "both" cell of exactly 0 is the defining property of mutually exclusive events.' },
        { q: 'A survey asks students to pick exactly one favorite season (never more than one). Are "prefers summer" and "prefers winter" mutually exclusive?', opts: ['Only if fewer than 50 students were surveyed', 'Cannot be determined without survey data', 'No, many students like both seasons equally', 'Yes — since each student picks only one favorite, nobody can be counted under both'], correct: 3, exp: 'The "pick exactly one" constraint guarantees zero overlap between any two different favorite-season categories — they are mutually exclusive by design.' },
        { q: 'A raffle has 3 possible prize tiers (gold, silver, bronze), and each ticket wins at most one tier. Are "wins gold" and "wins silver" mutually exclusive?', opts: ['Cannot be determined', 'Yes — a single ticket can win at most one tier, so winning both is impossible', 'No, tickets can win multiple tiers', 'Only for tickets purchased early'], correct: 1, exp: 'Since each ticket wins at most one tier, it’s impossible for the same ticket to win both gold and silver — these events are mutually exclusive.' },
        { q: '200 people were asked about owning a car and owning a bike. 140 own a car, 90 own a bike, and 30 own neither. How many own both?', opts: ['60', '40', '30', '70'], correct: 0, exp: 'At least one = 200 − 30 = 170. Both = car total + bike total − at least one = 140 + 90 − 170 = 60.' },
        { q: 'Which pair of events is most clearly NOT mutually exclusive?', opts: ['"Drawing a heart" and "drawing a spade" from one card', '"Rolling a 1" and "rolling a 6" on one die roll', '"Being born in January" and "being born in July"', '"Owns a smartphone" and "owns a laptop"'], correct: 3, exp: 'Owning a smartphone and owning a laptop can easily happen for the same person — these are not mutually exclusive, unlike the other options, which are all genuinely impossible to have both at once.' },
        { q: 'On a Venn diagram, if circle A and circle B are drawn with zero overlap, what does that tell you about P(A ∩ B)?', opts: ['P(A ∩ B) = 0', 'P(A ∩ B) = 1', 'P(A ∩ B) equals P(A) + P(B)', 'P(A ∩ B) is undefined'], correct: 0, exp: 'Zero overlap on a Venn diagram directly represents P(A ∩ B) = 0 — the visual definition of mutually exclusive events.' },
        { q: 'A 2×2 table has one row totaling 50, with its two interior cells being 18 and an unknown value. What is the unknown value?', opts: ['32', '50', '68', '18'], correct: 0, exp: 'The row total (50) minus the known cell (18) gives the unknown cell: 50 − 18 = 32.' },
        { q: 'Given P(A) = 0.4 and P(B) = 0.3, and A and B are mutually exclusive, what is P(A ∩ B)?', opts: ['0.1', '0.7', '0.12', '0'], correct: 3, exp: 'Mutual exclusivity means P(A ∩ B) = 0 regardless of the individual probabilities of A and B.' },
        { q: 'A study finds P(likes coffee ∩ likes tea) = 0.15 among 300 people surveyed. Are "likes coffee" and "likes tea" mutually exclusive?', opts: ['No — any joint probability other than exactly 0 means the events are not mutually exclusive', 'Yes, since 0.15 is fairly small', 'Cannot be determined without more data', 'Yes, because most people prefer one drink over the other'], correct: 0, exp: 'A joint probability of 0.15 is nonzero, so by definition, these events are not mutually exclusive — no matter how small the overlap is.' },
        { q: 'Why is it useful to build a full 2×2 table (the box method) instead of just reasoning about mutual exclusivity from a written description?', opts: ['It’s never useful — reading the description is always sufficient', 'It lets you calculate the exact joint probability (not just yes/no) and verify your reasoning with numbers that must add up consistently across every row and column', 'It replaces the need to know row and column totals', 'The box method only works for exactly two categories'], correct: 1, exp: 'The box method gives you the exact numeric joint probability, not just a yes/no answer, and every row and column must be internally consistent, which catches errors that pure verbal reasoning could miss.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.6 — Conditional Probability
   Source: course transcript (Topic 2.6 lecture)
   ============================================ */

registerChapters({
  '2-6': {
    id: '2-6',
    code: 'Topic 2.6',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Conditional Probability',
    cardSummary: 'The formula P(A|B) = P(A ∩ B) / P(B), the general multiplication rule, and probability trees for multi-stage problems.',
    heroTitle: 'Given that <em>B</em> happened,<br>what about A?',
    heroSub: 'Conditional probability restricts your denominator to whatever already happened. Flip the formula around and you get the general multiplication rule — the tool for finding the probability of a chain of events, one branch of a tree at a time.',
    source: 'Topic 2.6 course video',
    estTime: '~40–50 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: '"Given that" <span class="underline teal">restricts everything</span>.',
        body: 'A conditional probability finds P(A), but only within the world where B has already happened. That one idea powers a formula, and the formula flips into a second one.',
        cards: [
          { roman: 'I.', title: 'The conditional formula', body: 'P(A | B) = P(A ∩ B) ÷ P(B). Whatever comes after the bar shrinks your denominator — no matter where it appeared in the English sentence.', tags: ['P(A | B)','Condition shrinks denominator'], accent: 'population' },
          { roman: 'II.', title: 'Flip it: the multiplication rule', body: 'Rearranging the same formula gives P(A ∩ B) = P(A) × P(B | A) — the tool for chaining events together, one tree branch at a time.', tags: ['P(A ∩ B) = P(A) × P(B|A)','Tree diagrams'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'One formula, <span class="underline teal">two directions</span>.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'conditional-probability', term: 'Conditional probability', accent: 'population', body: 'The probability that event A occurs, taking into account that event B has already occurred. Written P(A | B), read "the probability of A given B."' },
          { id: 'conditional-formula', term: 'Conditional probability formula', sym: 'P(A|B)', accent: 'population', body: 'P(A | B) = P(A ∩ B) ÷ P(B). The numerator is the joint probability; the denominator is only the condition.' },
          { id: 'general-mult-rule', term: 'General multiplication rule', accent: 'sample', body: 'Rearranging the conditional formula: P(A ∩ B) = P(A) × P(B | A). Use this to find the probability of a chain of events — the first event, then the second, adjusted for the first having occurred.' },
          { id: 'tree-diagram', term: 'Tree diagram', accent: 'sample', body: 'A branching diagram where each branch is labeled with a conditional probability, and each endpoint (leaf) represents a joint probability — the product of the branches leading to it.' }
        ]
      },

      /* ---------------- 3. TWO-WAY TABLES ---------------- */
      {
        type: 'twowaytable', id: 'twt', label: 'Section 03 — Practice with Two-Way Tables',
        heading: 'The condition <span class="underline sample">shrinks the denominator</span>.',
        body: 'Condition on a row or column and watch the table restrict itself to just that slice — that restriction *is* conditional probability.',
        items: [
          {
            title: '250 fans at a basketball game — team and concession purchase',
            rowVar: 'Rooting for', colVar: 'Purchased food',
            rows: ['Home team', 'Away team'],
            cols: ['Yes', 'No'],
            data: [[120, 60], [40, 30]],
            caption: 'Condition on "Yes" (purchased food) and click the Home-team cell: P(Home | Food) = 120/160 = 75%. That’s the exact same answer the video reaches without ever writing the formula down.'
          },
          {
            title: 'Thanksgiving dinner (per 1,000 households) — turkey and ham',
            sub: 'Same 72% / 21% / 11% data from the lecture, scaled to whole households so you can explore it here.',
            rowVar: 'Turkey', colVar: 'Ham',
            rows: ['Turkey', 'No turkey'],
            cols: ['Ham', 'No ham'],
            data: [[40, 680], [170, 110]],
            caption: 'Condition on "Turkey" and click the Ham cell: P(Ham | Turkey) = 40/720 ≈ 5.6% — matches the video’s box-method answer exactly.'
          },
          {
            title: 'A high school (per 1,000 students) — math club and science club',
            sub: 'Same 30% / 25% / 12% data from the lecture, scaled to whole students.',
            rowVar: 'Math club', colVar: 'Science club',
            rows: ['Math club', 'Not math club'],
            cols: ['Science club', 'Not science club'],
            data: [[120, 180], [130, 570]],
            caption: 'Condition on "Math club" and click the Science-club cell: P(Science | Math) = 120/300 = 40% — higher than the marginal 25%, so being in math club really does raise your odds of also being in science club.'
          }
        ]
      },

      /* ---------------- 4. TREE DIAGRAMS ---------------- */
      {
        type: 'chart', id: 'trees', label: 'Section 04 — Tree Diagrams',
        heading: 'Multiply <span class="underline sample">down each branch</span>.',
        body: 'Every branch is a conditional probability. Every endpoint is a joint probability — found by multiplying every branch you passed through to get there.',
        items: [
          {
            title: 'A light bulb factory — Machine A/B and defect rate',
            chartType: 'probtree',
            rootLabel: 'Light bulb',
            stage1: { branches: [{ label: 'Machine A', prob: 0.60 }, { label: 'Machine B', prob: 0.40 }] },
            stage2: { branchesByStage1: [
              [{ label: 'Defective', prob: 0.04 }, { label: 'Good', prob: 0.96 }],
              [{ label: 'Defective', prob: 0.10 }, { label: 'Good', prob: 0.90 }]
            ]},
            caption: 'P(defective) = P(A ∩ Defective) + P(B ∩ Defective) = 2.4% + 4.0% = 6.4%. Never add the branch probabilities (4% + 10%) directly — a defect can’t happen without first knowing the machine.'
          },
          {
            title: 'A medical test — disease rate 1%, true positive 95%, false positive 8%',
            chartType: 'probtree',
            rootLabel: 'Patient',
            stage1: { branches: [{ label: 'Has disease', prob: 0.01 }, { label: 'No disease', prob: 0.99 }] },
            stage2: { branchesByStage1: [
              [{ label: 'Tests +', prob: 0.95 }, { label: 'Tests −', prob: 0.05 }],
              [{ label: 'Tests +', prob: 0.08 }, { label: 'Tests −', prob: 0.92 }]
            ]},
            caption: 'P(tests positive) = 0.95% + 7.92% = 8.87%. P(has disease | tests positive) = 0.95% ÷ 8.87% ≈ 10.7% — a positive result is far from a guarantee, because so few people have the disease to begin with.'
          }
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Box the table. <span class="underline teal">Then divide.</span>',
        body: 'Most conditional probability problems that don’t hand you a two-way table still hide one inside the wording. Click each one open.',
        items: [
          {
            q: 'On Thanksgiving, 72% of households have turkey, 21% have ham, and 11% have neither. Given that a house has turkey, what is the probability it also has ham?',
            fields: [
              { k: 'Box the table', v: 'Turkey = 72%, not turkey = 28%. Ham = 21%, not ham = 79%. Given: not turkey ∩ not ham = 11%.' },
              { k: 'Solve the missing cells', v: 'Not turkey ∩ ham = 28 − 11 = 17%. Turkey ∩ not ham = 79 − 11 = 68%. Turkey ∩ ham = 72 − 68 = 4% (equivalently 21 − 17 = 4%).' },
              { k: 'Apply the formula', v: 'P(Ham | Turkey) = P(Turkey ∩ Ham) ÷ P(Turkey) = 0.04 ÷ 0.72 ≈ 5.6%.' }
            ]
          },
          {
            q: 'A jar has 20 marbles: 10 blue, 4 green, 6 red. You draw one marble, don’t replace it, then draw another. What is the probability both are green?',
            fields: [
              { k: 'First draw', v: 'P(1st green) = 4/20 — 4 green marbles out of 20 total.' },
              { k: 'Second draw — think conditionally', v: 'Without replacement, only 19 marbles remain, and only 3 are green (one was already removed): P(2nd green | 1st green) = 3/19.' },
              { k: 'General multiplication rule', v: 'P(both green) = P(1st green) × P(2nd green | 1st green) = 4/20 × 3/19 = 12/380 ≈ 3.2%.' }
            ]
          },
          {
            q: '300 students were asked about Netflix and Disney+ subscriptions. 180 subscribe to Netflix; of those, 120 also subscribe to Disney+. Find P(Disney+ | Netflix).',
            fields: [
              { k: 'Condition restricts the denominator', v: 'The condition is "subscribes to Netflix," so the denominator is only the 180 Netflix subscribers — not all 300 students.' },
              { k: 'Count the numerator', v: 'Of those 180 Netflix subscribers, 120 also have Disney+.' },
              { k: 'Answer', v: 'P(Disney+ | Netflix) = 120/180 ≈ 66.7% — no formula needed once you see the restriction, though P(both)/P(Netflix) = (120/300)/(180/300) gives the identical answer.' }
            ]
          },
          {
            q: '200 students were asked their grade and favorite sport to watch. 50 are 10th graders, and 10 of them prefer soccer. Separately, 60 students prefer basketball, and 16 of them are 10th graders. Find P(soccer | 10th grade) and P(10th grade | basketball).',
            fields: [
              { k: 'P(soccer | 10th grade)', v: 'Condition = 10th grade (50 students). Of those, 10 prefer soccer: 10/50 = 20%.' },
              { k: 'P(10th grade | basketball)', v: 'Condition = basketball (60 students). Of those, 16 are 10th graders: 16/60 ≈ 26.7%.' },
              { k: 'Notice the direction matters', v: 'These two conditionals use completely different denominators (50 vs. 60) even though they involve the same two facts — always check which event is the condition before dividing.' }
            ]
          }
        ]
      },

      /* ---------------- 6. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A conditional probability finds the probability of an event occurring, taking into account that ',
            { id:'b1', answer:'another event has already occurred', options:['another event has already occurred','the sample space is infinite','the event is mutually exclusive'] },
            '.'
          ]},
          { segments: [
            'In the notation P(A | B), no matter where the condition appears in the English sentence, it always goes ',
            { id:'b2', answer:'after the bar', options:['after the bar','before the P','in the numerator'] },
            ' when written in proper statistical notation.'
          ]},
          { segments: [
            'The conditional probability formula is P(A | B) = ', { id:'b3', answer:'P(A ∩ B) ÷ P(B)', options:['P(A ∩ B) ÷ P(B)','P(A) ÷ P(B)','P(A) × P(B)'] },
            ' — the joint probability divided by just the probability of the condition.'
          ]},
          { segments: [
            'Rearranging the conditional formula algebraically gives the ', { id:'b4', answer:'general multiplication rule', options:['general multiplication rule','law of large numbers','equally likely formula'] },
            ': P(A ∩ B) = P(A) × P(B | A).'
          ]},
          { segments: [
            'On a tree diagram, each branch is labeled with a ', { id:'b5', answer:'conditional', options:['conditional','marginal','complementary'] },
            ' probability, and each endpoint represents a ',
            { id:'b6', answer:'joint', options:['joint','marginal','complementary'] },
            ' probability found by multiplying down the branches.'
          ]},
          { segments: [
            'To find the total probability of an outcome that can be reached by more than one branch (like "defective" from either machine), you must ',
            { id:'b7', answer:'add', options:['add','subtract','divide'] },
            ' the joint probabilities of each path that leads there.'
          ]}
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: '"Given that a girl has been selected, what is the probability she wears glasses?"', term: 'Conditional probability', detail: 'Finding P(A) restricted to a world where B has already occurred.' },
          { prompt: 'P(A ∩ B) ÷ P(B)', term: 'The conditional probability formula', detail: 'Joint probability over just the condition — P(A | B).' },
          { prompt: 'P(A) × P(B | A)', term: 'The general multiplication rule', detail: 'Rearranged from the conditional formula — used to find P(A ∩ B) when you know the branches.' },
          { prompt: 'A branching picture where each branch is a conditional probability and each endpoint is a joint probability.', term: 'Tree diagram', detail: 'Multiply down the branches to reach any endpoint’s joint probability.' },
          { prompt: '4% of Machine A’s bulbs and 10% of Machine B’s bulbs are defective — why can’t you just add 4% + 10% to find P(defective)?', term: 'Because each defect rate is conditional on the machine', detail: 'You must multiply each branch probability by P(that machine) first, then add the two joint probabilities together.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'P(A | B) is read as:', opts: ['The probability of A given B', 'The probability of A or B', 'The probability of A and B', 'The probability of B given A'], correct: 0, exp: 'The bar means "given" — P(A | B) is "the probability of A, given that B has occurred."' },
          { q: 'The conditional probability formula is:', opts: ['P(A | B) = P(A) × P(B)', 'P(A | B) = P(B) ÷ P(A ∩ B)', 'P(A | B) = P(A ∩ B) ÷ P(B)', 'P(A | B) = P(A) ÷ P(A ∩ B)'], correct: 2, exp: 'The numerator is the joint probability P(A ∩ B); the denominator is only the condition, P(B).' },
          { q: 'In a two-way table, "given that a person purchased food, what is the probability they root for the home team?" means your denominator should be:', opts: ['The grand total of everyone surveyed', 'The number of people who did NOT purchase food', 'Only the people rooting for the home team', 'Only the people who purchased food'], correct: 3, exp: 'The condition (purchased food) restricts your denominator to only that group.' },
          { q: 'The general multiplication rule states:', opts: ['P(A ∩ B) = P(A) + P(B)', 'P(A ∩ B) = P(A | B) × P(B | A)', 'P(A ∩ B) = P(A) ÷ P(B)', 'P(A ∩ B) = P(A) × P(B | A)'], correct: 3, exp: 'To find the probability of A and B both happening, multiply P(A) by the conditional probability of B given that A already happened.' },
          { q: 'A jar has 8 red and 12 blue marbles (20 total). Two are drawn without replacement. What is P(2nd is blue | 1st was blue)?', opts: ['12/20', '12/19', '11/19', '11/20'], correct: 2, exp: 'After removing one blue marble, 11 blue marbles remain out of 19 total remaining marbles.' },
          { q: 'On a tree diagram, if Branch 1 has probability 0.3 and the sub-branch after it has probability 0.5, what is the joint probability at that endpoint?', opts: ['0.15', '0.8', '0.5', '0.3'], correct: 0, exp: 'Multiply down the branches: 0.3 × 0.5 = 0.15.' },
          { q: 'A factory’s Machine A makes 70% of products with a 2% defect rate; Machine B makes 30% with a 5% defect rate. What is the overall probability a random product is defective?', opts: ['0.02 + 0.05 = 0.07', '0.014 + 0.015 = 0.029', '0.07', '0.7 × 0.3 = 0.21'], correct: 1, exp: 'Add the two joint probabilities: (0.70 × 0.02) + (0.30 × 0.05) = 0.014 + 0.015 = 0.029, or 2.9%.' },
          { q: 'Why can’t you just add the two conditional defect rates (4% and 10%) directly to find the overall defect probability in the light bulb example?', opts: ['Because 4% and 10% are already the final answer', 'Because each rate is conditional on a specific machine, and you must weight it by the chance of coming from that machine first', 'Because defect rates are never conditional', 'Because percentages can never be added'], correct: 1, exp: 'A defect happening at a 4% rate only applies within the branch where the bulb already came from Machine A — you must multiply by P(Machine A) first, then add the two resulting joint probabilities.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'The condition always shrinks the denominator', body: 'Whatever comes after "given" — no matter where it sits in the sentence — restricts which group you’re even allowed to look at.' },
          { num: 'ii.', title: 'P(A | B) = P(A ∩ B) ÷ P(B)', body: 'Joint probability on top, condition alone on the bottom. With a two-way table, you often don’t even need the formula — just restrict and divide.' },
          { num: 'iii.', title: 'Flip it for the multiplication rule', body: 'P(A ∩ B) = P(A) × P(B | A) — this is how you find the probability of a chain of events, one step conditioned on the last.' },
          { num: 'iv.', title: 'Trees turn conditionals into a picture', body: 'Every branch is a conditional probability. Every endpoint is a joint probability — the product of every branch you passed through.' },
          { num: 'v.', title: 'Multiple paths to the same outcome? Add them.', body: 'If an outcome (like "defective") can be reached from more than one branch, find the joint probability of each path separately, then add.' }
        ]
      }
    ],

    homework: {
      estTime: '~35 min',
      questions: [
        { q: 'P(A | B) is best translated into words as:', opts: ['The probability of A, given that B has already happened', 'The probability that neither A nor B happens', 'The probability of A and B happening together', 'The probability of B, given that A has already happened'], correct: 0, exp: 'The bar means "given" — whatever follows it (B) is the condition that has already occurred.' },
        { q: 'The correct conditional probability formula is:', opts: ['P(A | B) = P(A ∩ B) ÷ P(A)', 'P(A | B) = P(A ∩ B) ÷ P(B)', 'P(A | B) = P(A) × P(B)', 'P(A | B) = P(B) ÷ P(A ∩ B)'], correct: 1, exp: 'Joint probability divided by the probability of the condition alone.' },
        { q: 'A two-way table crosses "plays chess" with "plays checkers" for 400 people. 150 play chess, and of those, 90 also play checkers. What is P(checkers | chess)?', opts: ['150/90', '90/150', '150/400', '90/400'], correct: 1, exp: 'The condition (plays chess) restricts the denominator to the 150 chess players.' },
        { q: 'Using the same data, what is P(chess ∩ checkers)?', opts: ['90/150', '90/400', '400/90', '150/400'], correct: 1, exp: 'Joint probability always divides by the grand total: 90/400.' },
        { q: '68% of drivers have insurance. Of insured drivers, 95% pass inspection. What is P(insured ∩ passes inspection)?', opts: ['0.68 ÷ 0.95 = 0.716', '0.68 × 0.95 = 0.646', '0.95 ÷ 0.68 = 1.397', '0.68 + 0.95 = 1.63'], correct: 1, exp: 'General multiplication rule: P(insured ∩ passes) = P(insured) × P(passes | insured) = 0.68 × 0.95 = 0.646.' },
        { q: 'A bag has 5 red and 7 white balls (12 total). Two are drawn without replacement. What is P(both red)?', opts: ['5/12 × 4/11', '5/12 × 4/12', '5/12 + 4/11', '5/12 × 5/12'], correct: 0, exp: 'First draw: 5/12. Second draw (without replacement, one red already removed): 4/11. Multiply using the general multiplication rule.' },
        { q: 'On a probability tree, the first branch has probability 0.4, and the branch after it has probability 0.25. What is the joint probability at that endpoint?', opts: ['0.65', '0.1', '0.4', '0.0625'], correct: 1, exp: 'Multiply down the branches: 0.4 × 0.25 = 0.1.' },
        { q: 'A factory has two machines. Machine X makes 55% of products with a 3% defect rate. Machine Y makes 45% with a 6% defect rate. What is the overall probability a random product is defective?', opts: ['0.09', '0.55 × 0.45', '0.0165 + 0.027 = 0.0435', '0.03 + 0.06 = 0.09'], correct: 2, exp: '(0.55 × 0.03) + (0.45 × 0.06) = 0.0165 + 0.027 = 0.0435, or 4.35%.' },
        { q: 'Using the same factory (Machine X: 55%, 3% defective; Machine Y: 45%, 6% defective; overall defect rate 4.35%), what is P(came from Machine Y | defective)?', opts: ['0.45', '0.06 ÷ 0.0435 ≈ 1.379', '0.0165 ÷ 0.0435 ≈ 0.379', '0.027 ÷ 0.0435 ≈ 0.621'], correct: 3, exp: 'P(Y | defective) = P(Y ∩ defective) ÷ P(defective) = 0.027 ÷ 0.0435 ≈ 62.1%.' },
        { q: 'A disease affects 2% of a population. A test is 90% accurate for those with the disease (true positive) and gives a false positive 5% of the time. What is P(tests positive)?', opts: ['0.02 × 0.90 + 0.98 × 0.05 = 0.067', '0.95', '0.90 + 0.05 = 0.95', '0.02 + 0.05 = 0.07'], correct: 0, exp: 'Add the two joint probabilities: (0.02 × 0.90) + (0.98 × 0.05) = 0.018 + 0.049 = 0.067.' },
        { q: 'Using the same disease-testing data (P(tests positive) = 0.067), what is P(has the disease | tests positive)?', opts: ['0.02', '0.90 ÷ 0.067 ≈ 13.4', '0.90', '0.018 ÷ 0.067 ≈ 0.269'], correct: 3, exp: 'P(disease | positive) = P(disease ∩ positive) ÷ P(positive) = 0.018 ÷ 0.067 ≈ 26.9%.' },
        { q: 'A survey of 500 people: 40% own a car, 25% own a motorcycle, and 10% own both. What is P(motorcycle | car)?', opts: ['0.40 ÷ 0.10 = 4.0', '0.10 ÷ 0.25 = 0.40', '0.25', '0.10 ÷ 0.40 = 0.25'], correct: 3, exp: 'P(motorcycle | car) = P(car ∩ motorcycle) ÷ P(car) = 0.10 ÷ 0.40 = 25%.' },
        { q: 'Using the same survey (40% car, 25% motorcycle, 10% both), what percent of people own neither a car nor a motorcycle?', opts: ['35%', '65%', '55%', '45%'], correct: 3, exp: 'P(at least one) = 0.40 + 0.25 − 0.10 = 0.55, so P(neither) = 1 − 0.55 = 0.45, or 45%.' },
        { q: 'A weather station finds 30% of days are cloudy. Of cloudy days, 40% have rain. What is P(cloudy ∩ rain)?', opts: ['0.40', '0.70', '0.12', '0.30'], correct: 2, exp: 'P(cloudy ∩ rain) = P(cloudy) × P(rain | cloudy) = 0.30 × 0.40 = 0.12.' },
        { q: 'A deck-like game has 15 tokens: 6 gold, 5 silver, 4 bronze. Two tokens are drawn without replacement. What is P(both gold)?', opts: ['6/15 × 5/14', '6/15 × 6/14', '6/15 × 6/15', '6/15 + 5/14'], correct: 0, exp: 'First draw: 6/15. Second draw (one gold token already removed): 5 gold left out of 14 total remaining: 6/15 × 5/14.' },
        { q: 'In a two-way table, if you are asked "of the students who play an instrument, what proportion also play a sport," which number is your denominator?', opts: ['The total number of students surveyed', 'The number of students who play a sport', 'The number of students who play an instrument', 'The number of students who play both'], correct: 2, exp: 'The condition is "play an instrument," so that group’s total becomes the denominator.' },
        { q: 'Given P(A) = 0.5 and P(A ∩ B) = 0.2, what is P(B | A)?', opts: ['0.2 × 0.5 = 0.1', '0.5 ÷ 0.2 = 2.5', '0.2 ÷ 0.5 = 0.4', '0.5 − 0.2 = 0.3'], correct: 2, exp: 'P(B | A) = P(A ∩ B) ÷ P(A) = 0.2 ÷ 0.5 = 0.4.' },
        { q: 'A tree diagram has 2 first-stage branches and 2 second-stage branches under each, for 4 total endpoints. What must the 4 endpoint (joint) probabilities sum to?', opts: ['0', 'It depends on the specific probabilities', '1', '0.5'], correct: 2, exp: 'The 4 endpoints cover every possible outcome of the two-stage process, so their joint probabilities must sum to exactly 1.' },
        { q: 'Why is a tree diagram especially useful for a problem like "1% of a population has a disease, and a test has different accuracy for sick vs. healthy people"?', opts: ['Tree diagrams only work for exactly 1% probabilities', 'It avoids the need for any percentages', 'It replaces the need for the general multiplication rule entirely', 'It organizes each conditional probability (test accuracy) under the correct starting branch (disease status), preventing you from mixing up which rate applies to which group'], correct: 3, exp: 'The tree keeps each conditional test-accuracy rate attached to the correct disease-status branch, which is exactly what prevents the common error of just adding the accuracy rates together.' },
        { q: 'A store finds 80% of customers who enter make a purchase. Of those who purchase, 30% use a coupon. What is P(purchase ∩ uses coupon)?', opts: ['0.80 × 0.30 = 0.24', '0.80 + 0.30 = 1.10', '0.80 ÷ 0.30 = 2.67', '0.30 ÷ 0.80 = 0.375'], correct: 0, exp: 'General multiplication rule: P(purchase ∩ coupon) = P(purchase) × P(coupon | purchase) = 0.80 × 0.30 = 0.24.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.7 — Independent Events and Unions of Events
   Source: course transcript (Topic 2.7 lecture)
   ============================================ */

registerChapters({
  '2-7': {
    id: '2-7',
    code: 'Topic 2.7',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Independent Events and Unions of Events',
    cardSummary: 'Two ways to test independence, the shortcut P(A ∩ B) = P(A) × P(B) it unlocks, and the addition rule for "or."',
    heroTitle: 'Does knowing A <em>change</em><br>anything about B?',
    heroSub: 'If P(A | B) = P(A), the condition changed nothing — the events are independent, and P(A ∩ B) collapses to a simple multiplication. And when the question says "or" instead of "and," you need a different formula entirely: the union.',
    source: 'Topic 2.7 course video',
    estTime: '~40–50 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Two events, <span class="underline teal">two questions</span>.',
        body: 'This topic answers two separate questions about two events: do they affect each other, and what’s the probability that at least one of them happens?',
        cards: [
          { roman: 'I.', title: 'Independence — does B change A?', body: 'A and B are independent if and only if P(A | B) = P(A). If adding the condition changes nothing, the events don’t affect each other — and P(A ∩ B) = P(A) × P(B) becomes valid.', tags: ['P(A | B) = P(A)','P(A ∩ B) = P(A) × P(B)'], accent: 'population' },
          { roman: 'II.', title: 'Union — "or," not "and"', body: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). "Or" means A, or B, or both — and the overlap has to be subtracted once so it isn’t double-counted.', tags: ['P(A ∪ B)','Addition rule','Neither = 1 − P(A ∪ B)'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'One check. <span class="underline teal">One formula.</span>',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'independent-events', term: 'Independent events', accent: 'population', body: 'Events A and B are independent if and only if knowing A occurred does not change the probability of B — formally, P(A | B) = P(A) (equivalently, P(B | A) = P(B)).' },
          { id: 'independence-shortcut', term: 'P(A ∩ B) = P(A) × P(B)', accent: 'population', body: 'Valid ONLY when A and B are known to be independent — it’s the general multiplication rule simplified, since P(B | A) just becomes P(B) when nothing changes.' },
          { id: 'union', term: 'Union — P(A ∪ B)', accent: 'sample', body: 'The probability that A occurs, or B occurs, or both occur. The ∪ symbol means "or," never "and" — that’s a very common mix-up.' },
          { id: 'addition-rule', term: 'Addition rule (union formula)', sym: 'P(A∪B)', accent: 'sample', body: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Subtracting the overlap once stops it from being double-counted — not to erase it.' },
          { id: 'neither', term: '"Neither" = the complement of the union', accent: 'sample', body: 'P(neither A nor B) = 1 − P(A ∪ B). Knowing a union probability gives you this one for free, the same way any probability gives you its complement.' }
        ]
      },

      /* ---------------- 3. TWO-WAY TABLE ---------------- */
      {
        type: 'twowaytable', id: 'twt', label: 'Section 03 — Testing for Independence',
        heading: 'Add the condition. <span class="underline sample">Did anything change?</span>',
        body: 'Find the marginal probability, then condition on a row or column. If the number moves, you’ve just proven the two variables are NOT independent.',
        items: [
          {
            title: '150 coffee shop customers — gender and drink order',
            rowVar: 'Gender', colVar: 'Drink',
            rows: ['Male', 'Female'],
            cols: ['Hot', 'Iced', 'Neither'],
            data: [[35, 22, 13], [28, 36, 16]],
            caption: 'Marginal P(Hot) = 63/150 = 42%. Condition on Female and click Hot: P(Hot | Female) = 28/80 = 35%. Since 42% ≠ 35%, gender and drink choice are NOT independent.'
          }
        ]
      },

      /* ---------------- 4. SEEING THE UNION ---------------- */
      {
        type: 'chart', id: 'venn-union', label: 'Section 04 — Seeing the Union',
        heading: 'Everything shaded <span class="underline sample">is the union</span>.',
        body: 'Both circles together — including the overlap — make up P(A ∪ B). The only unshaded region is "neither."',
        items: [
          {
            title: 'The general picture: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
            chartType: 'venn', mode: 'overlap',
            labelA: 'Event A', labelB: 'Event B', overlapValue: 'A ∩ B',
            caption: 'Adding the full circle A to the full circle B counts the overlap twice — so the formula subtracts P(A ∩ B) back out once.'
          },
          {
            title: 'Female (80) ∪ Iced coffee (58), from the table above',
            chartType: 'venn', mode: 'overlap',
            labelA: 'Female (80)', labelB: 'Iced coffee (58)', onlyA: 44, onlyB: 22, overlapValue: 36, outside: 48,
            caption: 'P(Female ∪ Iced) = 80 + 58 − 36 = 102, so 102/150 = 68%. The 48 people outside both circles (male, and ordered hot or neither) are exactly the "neither" complement: 1 − 68% = 32%.'
          }
        ]
      },

      /* ---------------- 5. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Same two questions, <span class="underline teal">every time</span>.',
        body: 'Independence: does the conditional equal the marginal? Union: add, then subtract the overlap once. Click each one open.',
        items: [
          {
            q: 'On Thanksgiving, 72% of households have turkey, 21% have ham, 11% have neither. Are having turkey and having ham independent?',
            fields: [
              { k: 'Box the table (same as 2.6)', v: 'Turkey ∩ Ham = 4%, Turkey ∩ not Ham = 68%, not Turkey ∩ Ham = 17%, neither = 11%.' },
              { k: 'Compare', v: 'P(Turkey) = 72%. P(Turkey | Ham) = 0.04/0.21 ≈ 19%.' },
              { k: 'Answer', v: '72% ≠ 19% — NOT independent. Having ham on the table dramatically lowers the chance of also having turkey.' }
            ]
          },
          {
            q: '207 adults were categorized by age and income. 46.4% make over $50,000 overall. Of the 89 adults aged 31–45, 35 make over $50,000. Is income independent of age?',
            fields: [
              { k: 'Marginal', v: 'P(over $50k) = 96/207 ≈ 46.4%.' },
              { k: 'Conditional', v: 'P(over $50k | age 31–45) = 35/89 ≈ 39.3%.' },
              { k: 'Answer', v: '46.4% ≠ 39.3% — NOT independent. Being 31–45 actually lowers the chance of earning over $50,000 in this sample.' }
            ]
          },
          {
            q: 'P(E) = 0.27, P(D) = 0.51, P(E ∩ D) = 0.07. Find P(E ∪ D), find P(E | D), and determine whether E and D are independent.',
            fields: [
              { k: 'P(E ∪ D)', v: '0.27 + 0.51 − 0.07 = 0.71, or 71%.' },
              { k: 'P(E | D)', v: '0.07 / 0.51 ≈ 0.137, or 13.7%.' },
              { k: 'Independent?', v: 'P(E) = 27% but P(E | D) ≈ 13.7% — not equal, so NOT independent. Event D occurring roughly cuts E’s probability in half.' }
            ]
          },
          {
            q: 'P(A) = 0.25 and P(A ∪ B) = 0.62. Find P(B) under three different extra conditions: (i) P(A ∩ B) = 0.07, (ii) A and B are mutually exclusive, (iii) A and B are independent.',
            fields: [
              { k: '(i) Given P(A ∩ B) = 0.07', v: '0.62 = 0.25 + P(B) − 0.07  →  P(B) = 0.62 − 0.25 + 0.07 = 0.44.' },
              { k: '(ii) Given mutually exclusive', v: 'Mutually exclusive means P(A ∩ B) = 0, so 0.62 = 0.25 + P(B) − 0  →  P(B) = 0.37.' },
              { k: '(iii) Given independent', v: 'Independent means P(A ∩ B) = 0.25 × P(B). So 0.62 = 0.25 + P(B) − 0.25P(B) = 0.25 + 0.75P(B)  →  P(B) = 0.37/0.75 ≈ 0.493.' },
              { k: 'Same starting numbers, three different answers', v: 'The extra piece of information (a joint probability, mutual exclusivity, or independence) is what turns an unsolvable equation into a solvable one — always identify which one you’ve been given first.' }
            ]
          },
          {
            q: 'At a high school, 30% of students are in math club, 25% in science club, 12% in both. Find P(at least one club), P(math ∩ not science), P(neither), P(science | math), and check independence.',
            fields: [
              { k: 'P(at least one club)', v: 'This is the union: 0.30 + 0.25 − 0.12 = 0.43, or 43%.' },
              { k: 'P(math ∩ not science)', v: 'Straight from the box method: 30% − 12% = 18%.' },
              { k: 'P(neither)', v: 'The complement of the union: 1 − 0.43 = 0.57, or 57%.' },
              { k: 'P(science | math)', v: '0.12 / 0.30 = 0.40, or 40%.' },
              { k: 'Independent?', v: 'P(science) = 25% but P(science | math) = 40% — not equal, so NOT independent (and since 12% ≠ 0, also not mutually exclusive).' }
            ]
          }
        ]
      },

      /* ---------------- 6. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'Events A and B are independent if and only if P(A | B) = ', { id:'b1', answer:'P(A)', options:['P(A)','P(B)','P(A ∩ B)'] },
            ' — knowing that B occurred does not change the probability of A.'
          ]},
          { segments: [
            'If two events are known to be independent, then P(A ∩ B) = ', { id:'b2', answer:'P(A) × P(B)', options:['P(A) × P(B)','P(A) + P(B)','P(A) − P(B)'] },
            ' — but this shortcut is only valid once independence has been established.'
          ]},
          { segments: [
            'The union symbol ∪ means ', { id:'b3', answer:'or', options:['or','and','given'] },
            ', not "and" — P(A ∪ B) includes A alone, B alone, and both together.'
          ]},
          { segments: [
            'The addition rule states P(A ∪ B) = P(A) + P(B) − ', { id:'b4', answer:'P(A ∩ B)', options:['P(A ∩ B)','P(A | B)','1'] },
            ' — the overlap is subtracted once so it isn’t double-counted.'
          ]},
          { segments: [
            'The complement of a union — everything not in A and not in B — is called ', { id:'b5', answer:'neither', options:['neither','the intersection','the condition'] },
            ', and it equals 1 minus the union probability.'
          ]},
          { segments: [
            'If A and B are mutually exclusive, the addition rule simplifies because P(A ∩ B) = ', { id:'b6', answer:'0', options:['0','1','P(A)'] },
            ', so P(A ∪ B) is just P(A) + P(B).'
          ]}
        ]
      },

      /* ---------------- 7. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: 'P(hot coffee) = 42%. P(hot coffee | female) = 35%. Are gender and drink choice independent?', term: 'No — the condition changed the probability', detail: 'Independence requires P(A | B) = P(A) exactly. 42% ≠ 35%.' },
          { prompt: 'The formula P(A ∩ B) = P(A) × P(B) — when is this valid?', term: 'Only when A and B are known to be independent', detail: 'It’s a simplified case of the general multiplication rule, valid only once independence is confirmed.' },
          { prompt: 'The symbol ∪.', term: '"Or" (union)', detail: 'P(A ∪ B) means A, or B, or both — not "and."' },
          { prompt: 'P(A) + P(B) − P(A ∩ B)', term: 'The addition rule (union formula)', detail: 'Subtracts the overlap once so it isn’t double-counted.' },
          { prompt: 'If P(A ∪ B) = 0.68, what is P(neither A nor B)?', term: '0.32 (the complement of the union)', detail: '1 − P(A ∪ B) — free once you know the union.' }
        ]
      },

      /* ---------------- 8. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'Events A and B are independent if and only if:', opts: ['P(A | B) = P(A)', 'P(A ∪ B) = 1', 'P(A ∩ B) = 0', 'P(A) = P(B)'], correct: 0, exp: 'Independence means the condition changes nothing: P(A | B) equals the plain marginal P(A).' },
          { q: 'P(A ∩ B) = P(A) × P(B) is valid:', opts: ['Only when A and B are mutually exclusive', 'Always, for any two events', 'Only when A and B are known to be independent', 'Only when P(A) = P(B)'], correct: 2, exp: 'This shortcut only holds once independence has been established — otherwise you need the general multiplication rule.' },
          { q: 'The union symbol ∪ means:', opts: ['And', 'Or', 'Given', 'Not'], correct: 1, exp: '∪ means "or" — A, or B, or both.' },
          { q: 'The addition rule for P(A ∪ B) is:', opts: ['P(A) + P(B)', 'P(A) − P(B)', 'P(A) × P(B)', 'P(A) + P(B) − P(A ∩ B)'], correct: 3, exp: 'You must subtract the overlap once so it isn’t counted twice.' },
          { q: 'P(A) = 0.4, P(B) = 0.5, and A, B are independent. What is P(A ∩ B)?', opts: ['0.45', '0.2', '0.9', '0.1'], correct: 1, exp: 'Since they’re independent: P(A ∩ B) = P(A) × P(B) = 0.4 × 0.5 = 0.2.' },
          { q: 'P(A) = 0.3, P(B) = 0.4, P(A ∩ B) = 0.1. What is P(A ∪ B)?', opts: ['0.7', '0.8', '0.5', '0.6'], correct: 3, exp: 'P(A ∪ B) = 0.3 + 0.4 − 0.1 = 0.6.' },
          { q: 'P(A) = 0.3, P(B) = 0.45, and A, B are mutually exclusive. What is P(A ∪ B)?', opts: ['0.75', '0.15', '0.135', '1.0'], correct: 0, exp: 'Mutually exclusive means P(A ∩ B) = 0, so P(A ∪ B) = 0.3 + 0.45 − 0 = 0.75.' },
          { q: 'P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. Are A and B independent?', opts: ['Cannot be determined', 'No, because 0.3 is too small', 'Yes, because 0.6 × 0.5 = 0.3 exactly', 'Yes, because P(A) and P(B) are both over 0.5'], correct: 2, exp: 'Check the shortcut: P(A) × P(B) = 0.6 × 0.5 = 0.3, which exactly matches the given P(A ∩ B) — so A and B ARE independent here.' }
        ]
      },

      /* ---------------- 9. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Independence is a comparison, not a guess', body: 'Never assume two events are independent. Compute P(A | B) and P(A) separately and check if they match — that’s the only proof.' },
          { num: 'ii.', title: 'The multiplication shortcut needs independence first', body: 'P(A ∩ B) = P(A) × P(B) is a simplification of the general multiplication rule — it only works after independence is confirmed, never before.' },
          { num: 'iii.', title: '∪ means "or," and "or" means three things', body: 'A alone, B alone, or both. Forgetting the "both" case is the most common mistake with union problems.' },
          { num: 'iv.', title: 'Subtract the overlap once, not to erase it', body: 'P(A) + P(B) counts the intersection twice. Subtracting P(A ∩ B) corrects the double-count — it doesn’t remove those people from the answer.' },
          { num: 'v.', title: 'A union probability comes with "neither" for free', body: 'P(neither) = 1 − P(A ∪ B), the same complement logic from every earlier topic in this unit.' }
        ]
      }
    ],

    homework: {
      estTime: '~35 min',
      questions: [
        { q: 'Two events A and B are independent when:', opts: ['P(A ∩ B) = 0', 'Knowing B occurred does not change the probability of A', 'A and B always occur together', 'P(A) + P(B) = 1'], correct: 1, exp: 'Independence means the condition has zero effect on the other event’s probability.' },
        { q: 'Which formula is valid ONLY when A and B are already known to be independent?', opts: ['P(A | B) = P(A ∩ B) / P(B)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'P(A ∩ B) = P(A) × P(B)', 'P(not A) = 1 − P(A)'], correct: 2, exp: 'This multiplication shortcut requires independence — otherwise you must use the general multiplication rule with a conditional probability.' },
        { q: 'A two-way table shows P(likes hiking) = 55% overall, and P(likes hiking | owns a dog) = 55%. What does this tell you?', opts: ['Owning a dog and liking hiking are not independent', 'The table must contain an error', 'Owning a dog and liking hiking are independent', 'Owning a dog causes a dislike of hiking'], correct: 2, exp: 'Since the conditional probability exactly equals the marginal probability, adding the condition changed nothing — the events are independent.' },
        { q: 'P(A) = 0.5, P(B) = 0.2, A and B independent. What is P(A ∩ B)?', opts: ['0.7', '0.1', '2.5', '0.3'], correct: 1, exp: 'P(A ∩ B) = P(A) × P(B) = 0.5 × 0.2 = 0.1, valid since they’re independent.' },
        { q: 'What does the symbol ∪ represent in probability notation?', opts: ['And', 'Given', 'Not', 'Or'], correct: 3, exp: '∪ is the union symbol, meaning "or."' },
        { q: 'P(A) = 0.35, P(B) = 0.5, P(A ∩ B) = 0.15. What is P(A ∪ B)?', opts: ['0.7', '0.85', '0.5', '1.0'], correct: 0, exp: 'P(A ∪ B) = 0.35 + 0.5 − 0.15 = 0.7.' },
        { q: 'P(A) = 0.2, P(B) = 0.6, and A, B are mutually exclusive. What is P(A ∪ B)?', opts: ['0.68', '0.12', '0.8', '1.0'], correct: 2, exp: 'Mutually exclusive means P(A ∩ B) = 0, so P(A ∪ B) = 0.2 + 0.6 − 0 = 0.8.' },
        { q: 'P(A) = 0.2, P(A ∪ B) = 0.5, P(A ∩ B) = 0.05. What is P(B)?', opts: ['0.25', '0.3', '0.45', '0.35'], correct: 3, exp: 'Rearranging the addition rule: P(B) = P(A ∪ B) − P(A) + P(A ∩ B) = 0.5 − 0.2 + 0.05 = 0.35.' },
        { q: 'P(A) = 0.3, P(A ∪ B) = 0.75, and A, B are mutually exclusive. What is P(B)?', opts: ['0.45', '0.75', '1.05', '0.25'], correct: 0, exp: 'Mutually exclusive means P(A ∩ B) = 0, so 0.75 = 0.3 + P(B) − 0, giving P(B) = 0.45.' },
        { q: 'P(A) = 0.4, P(A ∪ B) = 0.7, and A, B are independent. What is P(B)?', opts: ['0.6', '0.5', '0.3', '0.42'], correct: 1, exp: 'Since independent, P(A ∩ B) = 0.4 × P(B). So 0.7 = 0.4 + P(B) − 0.4P(B) = 0.4 + 0.6P(B), giving P(B) = 0.3/0.6 = 0.5.' },
        { q: 'If P(A ∪ B) = 0.82, what is P(neither A nor B)?', opts: ['0.18', 'Cannot be determined', '0.5', '0.82'], correct: 0, exp: '"Neither" is the complement of the union: 1 − 0.82 = 0.18.' },
        { q: 'A survey of 400 people: P(owns a tablet) = 45%, P(owns a laptop) = 70%, P(owns both) = 35%. What proportion own at least one of the two devices?', opts: ['1.15 (115%)', '35%', '80%', '10%'], correct: 2, exp: 'P(tablet ∪ laptop) = 0.45 + 0.70 − 0.35 = 0.80, or 80%.' },
        { q: 'Using the same survey, what proportion own neither a tablet nor a laptop?', opts: ['80%', '35%', '65%', '20%'], correct: 3, exp: 'P(neither) = 1 − P(at least one) = 1 − 0.80 = 0.20, or 20%.' },
        { q: 'A two-way table: P(has a pet) = 60%. P(has a pet | lives in a house) = 60%. P(has a pet | lives in an apartment) = 60%. What can you conclude?', opts: ['Having a pet is associated with housing type', 'Having a pet is independent of housing type, since the conditional probabilities all match the marginal', 'The table contains a calculation error', 'Cannot be determined without raw counts'], correct: 1, exp: 'Since every conditional probability equals the marginal 60%, housing type has zero effect on pet ownership — independence confirmed.' },
        { q: 'P(rolls a 6) = 1/6 on a single fair die. Two dice are rolled. Are "first die shows 6" and "second die shows 6" independent events?', opts: ['Yes — the outcome of one die has no effect on the other', 'Cannot be determined without rolling many times', 'No, because dice influence each other', 'Only if both dice are the same color'], correct: 0, exp: 'Separate dice rolls are physically independent — one die’s result has no bearing on the other’s.' },
        { q: 'Using independence, what is P(both dice show 6) when rolling two fair six-sided dice?', opts: ['1/6', '2/6', '1/12', '1/36'], correct: 3, exp: 'Since the rolls are independent: P(both 6) = P(die 1 = 6) × P(die 2 = 6) = 1/6 × 1/6 = 1/36.' },
        { q: 'A store finds P(customer buys milk) = 0.4 and P(customer buys bread) = 0.3, with P(buys both) = 0.12. Are milk-buying and bread-buying independent?', opts: ['No, because 0.12 is less than both 0.4 and 0.3', 'Yes, because 0.4 × 0.3 = 0.12 exactly matches the given P(both)', 'Cannot be determined', 'No, because milk and bread are unrelated products'], correct: 1, exp: 'Check the shortcut: 0.4 × 0.3 = 0.12, which exactly equals the given joint probability — confirming independence.' },
        { q: 'A different store finds P(buys milk) = 0.5, P(buys eggs) = 0.4, P(buys both) = 0.25. Are these independent?', opts: ['Yes, because both probabilities are positive', 'Yes, since 0.25 is close to both 0.5 and 0.4', 'No — 0.5 × 0.4 = 0.20, which does not equal the given 0.25', 'Cannot be determined without more data'], correct: 2, exp: 'The independence shortcut predicts P(both) = 0.5 × 0.4 = 0.20, but the actual value is 0.25 — since these don’t match, the events are NOT independent.' },
        { q: 'P(A) = 0.6, P(B) = 0.35, P(A ∪ B) = 0.83. What is P(A ∩ B)?', opts: ['0.12', '0.48', '0.95', '0.23'], correct: 0, exp: 'Rearranging the addition rule: P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0.6 + 0.35 − 0.83 = 0.12.' },
        { q: 'Why is it a mistake to assume two events are independent just because they seem unrelated in real life (like "likes pizza" and "owns a car")?', opts: ['Independence only applies to events involving dice or coins', 'It’s never a mistake — unrelated-sounding events are always independent', 'Real-world events can never be independent', 'Independence must be verified numerically (checking P(A | B) = P(A) or P(A ∩ B) = P(A) × P(B)), not assumed from intuition alone'], correct: 3, exp: 'Independence is a precise numerical claim about a specific data set — it has to be checked with the actual probabilities, never assumed just because two events sound unconnected.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.8 — Introduction to Random Variables
   and Probability Distributions
   Source: course transcript (Topic 2.8 lecture)
   ============================================ */

registerChapters({
  '2-8': {
    id: '2-8',
    code: 'Topic 2.8',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Random Variables and Probability Distributions',
    cardSummary: 'Discrete vs. continuous random variables, and building a full probability distribution from tree-diagram reasoning.',
    heroTitle: 'A variable whose value<br><em>comes from chance</em>.',
    heroSub: 'A random variable turns the outcome of a random process into a number. List every outcome, find every probability, and you’ve built a probability distribution — one that always, without exception, sums to 1.',
    source: 'Topic 2.8 course video',
    estTime: '~45–55 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Numbers <span class="underline teal">from chance</span>.',
        body: 'A random variable is only a random variable if its outcomes are numbers — heads/tails doesn’t count, but "number of heads" does.',
        cards: [
          { roman: 'I.', title: 'Discrete vs. continuous', body: 'Discrete outcomes are listable and finite — usually whole numbers you could count. Continuous outcomes fall anywhere on an interval — usually something you’d measure.', tags: ['Discrete = countable','Continuous = measured'], accent: 'population' },
          { roman: 'II.', title: 'Every distribution sums to 1', body: 'A probability distribution lists every possible value of a discrete random variable alongside its probability. Those probabilities always add up to exactly 1 — no exceptions.', tags: ['P(X = x)','Σ P(x) = 1'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'One variable. <span class="underline teal">Two flavors.</span>',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'random-variable', term: 'Random variable', sym: 'X', accent: 'population', body: 'A variable whose value is a numerical outcome of a random process. Written with a capital letter (X, W, T...) — if the outcome isn’t a number, it isn’t a random variable.' },
          { id: 'discrete-rv', term: 'Discrete random variable', accent: 'population', body: 'Outcomes are listable and finite — usually whole numbers you could count, like the number of races a horse wins.' },
          { id: 'continuous-rv', term: 'Continuous random variable', accent: 'population', body: 'Outcomes fall anywhere on an interval — infinite and unlistable, since decimals go on forever. Usually something measured, like height or time.' },
          { id: 'probability-distribution', term: 'Probability distribution', accent: 'sample', body: 'A table, graph, or function that shows the probability associated with every possible value of a discrete random variable.' },
          { id: 'notation-pxx', term: 'P(X = x)', accent: 'sample', body: 'Notation for "the probability that random variable X takes the specific value x." Capital X is the variable; lowercase x is one specific outcome.' },
          { id: 'sum-to-one', term: 'Sum-to-one rule', accent: 'sample', body: 'The probabilities in a discrete probability distribution must add up to exactly 1 (100%) — if they don’t, something was built incorrectly.' }
        ]
      },

      /* ---------------- 3. PROBABILITY DISTRIBUTIONS ---------------- */
      {
        type: 'chart', id: 'distributions', label: 'Section 03 — Building Distributions',
        heading: 'Every bar is a probability. <span class="underline sample">They sum to 100%.</span>',
        body: 'The first is given directly. The rest are built with a probability tree, then turned into a distribution — check that every set of bars adds up to 100%.',
        items: [
          {
            title: 'Rolling a fair die — given directly',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'1', value:1/6 }, { label:'2', value:1/6 }, { label:'3', value:1/6 }, { label:'4', value:1/6 }, { label:'5', value:1/6 }, { label:'6', value:1/6 }],
            caption: 'The simplest possible probability distribution — every outcome equally likely at 1/6 ≈ 16.7%.'
          },
          {
            title: 'A horse enters two races — W = number of wins',
            chartType: 'probtree',
            rootLabel: 'Horse',
            stage1: { branches: [{ label: 'Wins race 1', prob: 0.70 }, { label: 'Loses race 1', prob: 0.30 }] },
            stage2: { branchesByStage1: [
              [{ label: 'Wins race 2', prob: 0.85 }, { label: 'Loses race 2', prob: 0.15 }],
              [{ label: 'Wins race 2', prob: 0.40 }, { label: 'Loses race 2', prob: 0.60 }]
            ]},
            caption: 'P(W=2) = 0.70×0.85 = 0.595. P(W=0) = 0.30×0.60 = 0.18. P(W=1) has two paths — win-then-lose (0.70×0.15=0.105) or lose-then-win (0.30×0.40=0.12) — added together: 0.225.'
          },
          {
            title: 'The resulting distribution for W',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'0', value:0.18 }, { label:'1', value:0.225 }, { label:'2', value:0.595 }],
            caption: 'Built entirely from the tree diagram above. 0.18 + 0.225 + 0.595 = 1.00 ✓'
          },
          {
            title: 'Number of t-shirts Sarah sells at a craft show',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'0', value:0.05 }, { label:'1', value:0.15 }, { label:'2', value:0.26 }, { label:'3', value:0.38 }, { label:'4', value:0.10 }, { label:'5', value:0.06 }],
            caption: 'This one is simply given — built from Sarah’s own sales history over many, many craft shows. P(sells 4 or more) = 0.10 + 0.06 = 16%.'
          },
          {
            title: 'A game (0.3 / 0.5 / 0.2 for 0 / 1 / 2 points) played twice — T = total points',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'0', value:0.09 }, { label:'1', value:0.30 }, { label:'2', value:0.37 }, { label:'3', value:0.20 }, { label:'4', value:0.04 }],
            caption: 'T=2 has THREE paths to total 2 points: (0,2), (2,0), and (1,1) — their probabilities (0.06+0.06+0.25) sum to 0.37. Easy to forget one path, as the lecture itself demonstrates.'
          }
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'List the paths. <span class="underline teal">Multiply, then add.</span>',
        body: 'Building a distribution from scratch always follows the same two moves: multiply down each tree branch, then add together every branch that lands on the same outcome.',
        items: [
          {
            q: 'Students get up to 3 attempts on a question: 50% correct on attempt 1; if needed, 70% on attempt 2; if needed, 90% on attempt 3. Let A = number of attempts needed. Build the distribution for A.',
            fields: [
              { k: 'A = 1', v: 'Correct right away: P = 0.50.' },
              { k: 'A = 2', v: 'Wrong, then correct: P = 0.50 × 0.70 = 0.35.' },
              { k: 'A = 3 — two paths', v: 'Wrong, wrong, then correct (0.5 × 0.3 × 0.9 = 0.135), OR wrong all three times and out of attempts (0.5 × 0.3 × 0.1 = 0.015). Add them: 0.135 + 0.015 = 0.15.' },
              { k: 'Check', v: '0.50 + 0.35 + 0.15 = 1.00 ✓' }
            ]
          },
          {
            q: 'A lion’s first cub survives with 75% probability. If the first survives, the second survives with 45% probability; if the first doesn’t, the second survives with 65% probability. Let S = number of cubs that survive. Build the distribution for S.',
            fields: [
              { k: 'S = 2 (both survive)', v: '0.75 × 0.45 = 0.3375.' },
              { k: 'S = 0 (neither survives)', v: '0.25 × 0.35 = 0.0875.' },
              { k: 'S = 1 — two paths', v: 'First survives, second doesn’t (0.75 × 0.55 = 0.4125), OR first doesn’t, second does (0.25 × 0.65 = 0.1625). Add them: 0.4125 + 0.1625 = 0.575.' },
              { k: 'Check', v: '0.3375 + 0.575 + 0.0875 = 1.00 ✓' }
            ]
          },
          {
            q: 'A $5-per-throw carnival game: 65% chance to hit the target on any throw. A player with $20 throws until he wins or runs out of money (max 4 throws). Let N = number of throws. Build the distribution for N.',
            fields: [
              { k: 'N = 1', v: 'Wins on the first throw: P = 0.65.' },
              { k: 'N = 2', v: 'Misses, then wins: 0.35 × 0.65 = 0.2275.' },
              { k: 'N = 3', v: 'Misses twice, then wins: 0.35 × 0.35 × 0.65 = 0.079625.' },
              { k: 'N = 4 — two paths', v: 'Misses 3 times then wins (0.35³ × 0.65 ≈ 0.02787), OR misses all 4 and runs out of money (0.35⁴ ≈ 0.01501). Add them: ≈ 0.042875.' },
              { k: 'Check', v: '0.65 + 0.2275 + 0.079625 + 0.042875 = 1.00 ✓' }
            ]
          },
          {
            q: 'Sasha scores 10/9/8 points with probabilities 0.2/0.5/0.3. Penny scores 11/10/9 with probabilities 0.1/0.55/0.35. Build the distribution for D = Sasha’s score minus Penny’s score.',
            fields: [
              { k: 'List every (Sasha, Penny) pair and its difference', v: '9 total pairs, since Sasha has 3 possible scores and Penny has 3 — each pair’s probability is the product of the two individual probabilities.' },
              { k: 'Group by difference', v: 'D = −3: only (8,11). D = −2: (9,11) and (8,10). D = −1: (10,11), (9,10), and (8,9) — three paths. D = 0: (10,10) and (9,9). D = 1: only (10,9).' },
              { k: 'D = −1 (three paths)', v: '0.2×0.1 + 0.5×0.55 + 0.3×0.35 = 0.02 + 0.275 + 0.105 = 0.40.' },
              { k: 'Full distribution', v: 'P(−3)=0.03, P(−2)=0.215, P(−1)=0.40, P(0)=0.285, P(1)=0.07. Check: 0.03+0.215+0.40+0.285+0.07 = 1.00 ✓' }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A random variable is a variable whose values have a ', { id:'b1', answer:'numerical', options:['numerical','categorical','conditional'] },
            ' outcome that results from a random process.'
          ]},
          { segments: [
            'A ', { id:'b2', answer:'discrete', options:['discrete','continuous','conditional'] },
            ' random variable has outcomes that are listable and finite, while a ',
            { id:'b3', answer:'continuous', options:['continuous','discrete','joint'] },
            ' random variable has outcomes that fall anywhere on an interval.'
          ]},
          { segments: [
            'A probability distribution shows the probability associated with ', { id:'b4', answer:'every possible value', options:['every possible value','only the most likely value','the mean value'] },
            ' of the random variable.'
          ]},
          { segments: [
            'The sum of the probabilities over all possible values of a discrete random variable must equal ',
            { id:'b5', answer:'1 (100%)', options:['1 (100%)','0','the sample size'] },
            '.'
          ]},
          { segments: [
            'When two different tree-diagram branches lead to the same value of the random variable, their probabilities must be ',
            { id:'b6', answer:'added together', options:['added together','multiplied together','ignored'] },
            ', since either path produces the same outcome.'
          ]},
          { segments: [
            'A probability distribution can be represented in three ways: a table, a graph, or a ', { id:'b7', answer:'function', options:['function','sample','variable'] },
            '.'
          ]}
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: 'Letting W represent the number of races a horse wins out of two — why is this a random variable?', term: 'Random variable', detail: 'Its outcomes (0, 1, or 2) are numbers that result from a random process.' },
          { prompt: 'Outcomes: 0, 1, 2, or 3 wins — listable, finite, whole numbers.', term: 'Discrete random variable', detail: 'You could make a complete list of every possible outcome.' },
          { prompt: 'The height of a randomly selected adult, measured in inches (with decimals).', term: 'Continuous random variable', detail: 'Infinite possible values on an interval — unlistable.' },
          { prompt: 'A table pairing every possible outcome of X with its probability.', term: 'Probability distribution', detail: 'Can also be shown as a graph or a function — all three represent the same information.' },
          { prompt: 'Two different tree branches both result in "1 win." What do you do with their probabilities?', term: 'Add them together', detail: 'Different paths, same random-variable outcome — their probabilities combine by addition.' },
          { prompt: 'A distribution lists P(0)=0.2, P(1)=0.3, P(2)=0.5. What must be true?', term: 'They must sum to exactly 1', detail: '0.2 + 0.3 + 0.5 = 1.0 — the defining check of any valid probability distribution.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'A random variable must have outcomes that are:', opts: ['Words or categories', 'Always between 0 and 1', 'Always whole numbers only', 'Numbers'], correct: 3, exp: 'A random variable is only defined when the outcomes of a random process are numerical.' },
          { q: 'The number of text messages a person sends in a day is best classified as:', opts: ['Not a random variable', 'A continuous random variable', 'A probability distribution', 'A discrete random variable'], correct: 3, exp: 'The count of messages is listable and finite (0, 1, 2, 3...) — a discrete random variable.' },
          { q: 'The exact weight of a randomly selected apple, measured with a precise scale, is best classified as:', opts: ['A joint probability', 'A continuous random variable', 'A discrete random variable', 'Not a random variable'], correct: 1, exp: 'Weight is measured, not counted, and can take any value on an interval, including decimals — continuous.' },
          { q: 'A discrete probability distribution lists P(0)=0.1, P(1)=0.4, P(2)=x, P(3)=0.2. What must x equal?', opts: ['0.7', '1.0', '0.3', '0.1'], correct: 2, exp: 'All probabilities must sum to 1: x = 1 − 0.1 − 0.4 − 0.2 = 0.3.' },
          { q: 'On a probability tree, two different branches both end with the random variable equal to 3. To find P(X=3), you should:', opts: ['Add the two branch probabilities together', 'Use only the larger of the two probabilities', 'Subtract one from the other', 'Multiply the two branch probabilities together'], correct: 0, exp: 'Different paths that lead to the same outcome value get added together.' },
          { q: 'Within a single tree branch (e.g., "wins race 1, then wins race 2"), how do you combine the probabilities along that one path?', opts: ['Multiply them', 'Divide them', 'Average them', 'Add them'], correct: 0, exp: 'Multiply down a single path — that’s the general multiplication rule, chained across each stage.' },
          { q: 'A horse wins race 1 with probability 0.7. If it wins race 1, it wins race 2 with probability 0.8. What is P(wins both races)?', opts: ['0.7 + 0.8 = 1.5', '0.7 ÷ 0.8 = 0.875', '0.7 × 0.8 = 0.56', '0.8 − 0.7 = 0.1'], correct: 2, exp: 'Multiply down the branch: P(win 1 ∩ win 2) = 0.7 × 0.8 = 0.56.' },
          { q: 'A distribution shows P(0)=0.15, P(1)=0.35, P(2)=0.30, P(3)=0.20. What is P(X ≥ 2)?', opts: ['0.70', '0.50', '0.20', '0.30'], correct: 1, exp: 'P(X ≥ 2) = P(2) + P(3) = 0.30 + 0.20 = 0.50.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Numbers only', body: 'If the outcomes of a random process aren’t numbers, you don’t have a random variable — you just have a random process.' },
          { num: 'ii.', title: 'Discrete = count, continuous = measure', body: 'Discrete outcomes are listable, finite, usually whole numbers. Continuous outcomes fill an interval, unlistable, usually decimals from a measurement.' },
          { num: 'iii.', title: 'Every distribution sums to 1', body: 'No exceptions. If your probabilities don’t add up to exactly 1, you made an arithmetic mistake somewhere.' },
          { num: 'iv.', title: 'Multiply down a branch, add across branches', body: 'A single tree path: multiply. Multiple paths landing on the same outcome: add those products together.' },
          { num: 'v.', title: 'It’s easy to forget a path', body: 'The lecture’s own worked example forgot an entire outcome (T=4) the first time through — always double-check that your final probabilities sum to 1 before calling it done.' }
        ]
      }
    ],

    homework: {
      estTime: '~35 min',
      questions: [
        { q: 'Which of these is a valid random variable?', opts: ['The color of a randomly selected car', 'The brand name of a randomly selected car', 'Whether a car is a sedan or an SUV', 'The number of doors on a randomly selected car'], correct: 3, exp: 'The number of doors is a numerical outcome of a random process — the other options are all categories, not numbers.' },
        { q: 'The number of goals scored in a randomly selected soccer match is best classified as:', opts: ['Not a random variable', 'Discrete', 'A probability', 'Continuous'], correct: 1, exp: 'Goals are counted in whole numbers and are listable — discrete.' },
        { q: 'The exact time (in seconds) it takes a runner to finish a race, measured with a stopwatch, is best classified as:', opts: ['Discrete', 'Continuous', 'Not a random variable', 'A probability distribution'], correct: 1, exp: 'Time is measured and can take any value on an interval, including many decimal places — continuous.' },
        { q: 'A discrete probability distribution has P(1)=0.25, P(2)=0.40, P(3)=x. What must x equal?', opts: ['1.0', '0.65', '0.35', '0.15'], correct: 2, exp: 'x = 1 − 0.25 − 0.40 = 0.35.' },
        { q: 'A distribution shows P(0)=0.4, P(1)=0.6. If two independent plays are combined into a total, what is P(total = 0)?', opts: ['0.16', '0.24', '0.4', '1.0'], correct: 0, exp: 'Both plays must be 0: 0.4 × 0.4 = 0.16.' },
        { q: 'Using the same distribution (P(0)=0.4, P(1)=0.6) played twice, what is P(total = 1)?', opts: ['0.24', '0.6', '0.48', '0.36'], correct: 2, exp: 'Two paths: (0 then 1) or (1 then 0): 0.4×0.6 + 0.6×0.4 = 0.24 + 0.24 = 0.48.' },
        { q: 'Using the same distribution played twice, what is P(total = 2)?', opts: ['0.6', '0.48', '0.16', '0.36'], correct: 3, exp: 'Both plays must be 1: 0.6 × 0.6 = 0.36. Check: 0.16 + 0.48 + 0.36 = 1.00 ✓' },
        { q: 'A horse wins race 1 with probability 0.7; if it loses race 1, it wins race 2 with probability 0.3. What is P(loses race 1 AND wins race 2)?', opts: ['0.3 + 0.3 = 0.6', '0.3 × 0.7 = 0.21', '0.3 × 0.3 = 0.09', '(1 − 0.7) × 0.3 = 0.09'], correct: 3, exp: 'P(loses race 1) = 1 − 0.7 = 0.3, then multiply by P(wins race 2 | lost race 1) = 0.3: 0.3 × 0.3 = 0.09.' },
        { q: 'On a probability tree, why do you sometimes need to ADD probabilities from two different branches to find P(X = some value)?', opts: ['Because multiplication only works for the first branch', 'Because addition is always required in probability', 'Because two different paths through the tree can result in the same value of the random variable', 'You never need to add branch probabilities'], correct: 2, exp: 'When two distinct tree paths both produce the same outcome for the random variable, their probabilities must be combined by addition, since either path counts.' },
        { q: 'A student takes an exam with up to 2 attempts: 40% chance of passing on attempt 1; if needed, 60% chance of passing on attempt 2. Let A = number of attempts needed to pass OR run out of attempts. What is P(A = 1)?', opts: ['1.0', '0.60', '0.24', '0.40'], correct: 3, exp: 'Passing right away on the first attempt: P = 0.40.' },
        { q: 'Using the same exam scenario, what is P(A = 2)?', opts: ['0.24', '0.60', '1.0', '0.36'], correct: 1, exp: 'Since there’s no third attempt, A = 2 simply means "failed attempt 1" — it doesn’t matter whether attempt 2 itself succeeds, because either way the student needed exactly 2 attempts. P(A = 2) = 1 − P(A = 1) = 1 − 0.40 = 0.60. (The 60% pass rate on attempt 2 would matter for a different question, like "did the student ultimately pass," but not for counting attempts here.)' },
        { q: 'A student takes a quiz with up to 3 attempts: 40% correct on attempt 1; if needed, 60% correct on attempt 2; if needed, 80% correct on attempt 3. Let A = number of attempts needed (max 3). What is P(A = 1)?', opts: ['0.36', '0.40', '0.60', '0.24'], correct: 1, exp: 'Correct right away: P = 0.40.' },
        { q: 'Using the same quiz scenario, what is P(A = 2)?', opts: ['0.60', '0.36', '0.24', '0.40'], correct: 1, exp: 'Wrong on attempt 1, then correct on attempt 2: 0.60 × 0.60 = 0.36.' },
        { q: 'Using the same quiz scenario, what is P(A = 3)?', opts: ['0.24', '0.36', '0.04', '0.48'], correct: 0, exp: 'Wrong, wrong, then attempt 3 (correct or not, either way it took 3 attempts): 0.60 × 0.40 = 0.24. Check: 0.40 + 0.36 + 0.24 = 1.00 ✓' },
        { q: 'A discrete distribution shows P(0)=0.18, P(1)=0.225, P(2)=0.595 for a horse’s wins in two races. What is P(at least 1 win)?', opts: ['0.82', '0.225', '0.595', '0.18'], correct: 0, exp: 'P(at least 1 win) = P(1) + P(2) = 0.225 + 0.595 = 0.82, or equivalently 1 − P(0) = 1 − 0.18 = 0.82.' },
        { q: 'A carnival game distribution shows P(1)=0.65, P(2)=0.2275, P(3)=0.079625, P(4)=0.042875 for number of throws needed. What is P(more than 2 throws)?', opts: ['0.1225', '0.79625', '0.2275', '0.65'], correct: 0, exp: 'P(N > 2) = P(3) + P(4) = 0.079625 + 0.042875 = 0.1225.' },
        { q: 'Why must a valid discrete probability distribution’s probabilities always sum to exactly 1?', opts: ['Because probabilities can be greater than 1 if needed', 'It’s just a convention with no real meaning', 'Because the distribution covers every possible outcome of the random variable, and something must happen', 'Only distributions with fewer than 5 outcomes must sum to 1'], correct: 2, exp: 'Since the distribution lists every possible outcome, one of them is guaranteed to occur — so the total probability across all outcomes must be 1 (100%).' },
        { q: 'Sasha scores 10/9/8 with probabilities 0.2/0.5/0.3. Penny scores 11/10/9 with probabilities 0.1/0.55/0.35. What is P(Sasha − Penny = 1)?', opts: ['0.55', '0.20', '0.07', '0.02'], correct: 2, exp: 'Only one pair gives a difference of 1: Sasha=10, Penny=9. P = 0.2 × 0.35 = 0.07.' },
        { q: 'Which of the following would make a probability distribution table INVALID?', opts: ['One of the listed probabilities is negative', 'The probabilities sum to 1', 'The random variable has exactly 4 possible outcomes', 'All probabilities are between 0 and 1'], correct: 0, exp: 'Every individual probability must be between 0 and 1 inclusive — a negative probability is never valid, no matter what the rest of the table looks like.' },
        { q: 'A game show distribution has outcomes $0, $100, $500, $1000 with probabilities 0.5, 0.3, 0.15, and 0.05. Verify this is a valid distribution and find P(wins at least $500).', opts: ['Sums to 1.0; P(at least $500) = 0.15', 'Sums to 1.1; invalid distribution', 'Sums to 0.9; invalid distribution', 'Sums to 1.0; P(at least $500) = 0.20'], correct: 3, exp: '0.5+0.3+0.15+0.05 = 1.0, so it’s valid. P(at least $500) = P($500) + P($1000) = 0.15 + 0.05 = 0.20.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.9 — Parameters of Random Variables
   Source: course transcript (Topic 2.9 lecture)
   ============================================ */

registerChapters({
  '2-9': {
    id: '2-9',
    code: 'Topic 2.9',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Parameters of Random Variables',
    cardSummary: 'The mean (expected value) and standard deviation of a random variable — how to calculate them, interpret them, and transform them.',
    heroTitle: 'What do you <em>expect</em><br>to happen?',
    heroSub: 'Every random variable has a mean — its expected value in the long run — and a standard deviation — how much any single outcome typically strays from that expectation. Multiply or shift the variable, and both parameters transform in their own, very different, ways.',
    source: 'Topic 2.9 course video',
    estTime: '~40–50 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'The long-run <span class="underline teal">average</span>, and how much it <span class="underline sample">varies</span>.',
        body: 'A parameter is a numerical value that describes a probability distribution. A random variable has exactly two you need to know: its mean and its standard deviation.',
        cards: [
          { roman: 'I.', title: 'Mean = expected value', body: 'μ_X or E(X) — the long-run average outcome if the random process repeated forever. For a discrete random variable: μ_X = Σ x·P(x).', tags: ['μ_X = E(X)','Σ x·P(x)'], accent: 'population' },
          { roman: 'II.', title: 'Standard deviation = typical spread', body: 'σ_X or SD(X) — how far a typical outcome strays from the mean. For a discrete random variable: σ_X = √[Σ(x−μ)²·P(x)].', tags: ['σ_X = SD(X)','√[Σ(x−μ)²·P(x)]'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'Two parameters. <span class="underline teal">Two transformation rules.</span>',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'parameter', term: 'Parameter', accent: 'population', body: 'A numerical value measuring a characteristic of a probability distribution (or a population) — a single fixed value, like the mean weight of every giraffe on Earth.' },
          { id: 'mean-rv', term: 'Mean of a random variable', sym: 'μ_X, E(X)', accent: 'population', body: 'Also called the expected value — the long-run average outcome after a huge number of repetitions. For discrete X: μ_X = Σ x·P(x) — multiply every outcome by its probability, then add.' },
          { id: 'sd-rv', term: 'Standard deviation of a random variable', sym: 'σ_X, SD(X)', accent: 'sample', body: 'The typical amount a single outcome deviates from the mean, in the long run. For discrete X: σ_X = √[Σ(x−μ)²·P(x)].' },
          { id: 'continuous-given', term: 'Continuous RVs: no formula', accent: 'population', body: 'You cannot list every outcome of a continuous random variable, so μ and σ can’t be computed from a table — they’re measured from many, many repetitions and simply given to you.' },
          { id: 'linear-transform', term: 'Linear transformation rules', accent: 'sample', body: 'For Y = a + bX: the mean transforms as μ_Y = a + b·μ_X (both addition and multiplication matter). The standard deviation transforms as σ_Y = |b|·σ_X — addition/subtraction of a constant does NOT affect spread.' }
        ]
      },

      /* ---------------- 3. PROBABILITY DISTRIBUTIONS ---------------- */
      {
        type: 'chart', id: 'distributions', label: 'Section 03 — Mean and Standard Deviation, Visually',
        heading: 'The balance point, <span class="underline sample">and the spread around it</span>.',
        body: 'The mean is where the distribution "balances." The standard deviation measures how far outcomes typically sit from that balance point.',
        items: [
          {
            title: 'Grace’s t-shirt sales — S',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'0', value:0.08 }, { label:'1', value:0.15 }, { label:'2', value:0.26 }, { label:'3', value:0.35 }, { label:'4', value:0.10 }, { label:'5', value:0.06 }],
            caption: 'μ_S = 0(.08)+1(.15)+2(.26)+3(.35)+4(.10)+5(.06) = 2.42 shirts. σ_S = 1.258 shirts. On any given day, Grace expects to sell 2.42 shirts, give or take about 1.258.'
          },
          {
            title: 'Points scored in one play of a game — P',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'0', value:0.10 }, { label:'1', value:0.25 }, { label:'2', value:0.30 }, { label:'3', value:0.35 }],
            caption: 'μ_P = 0(.10)+1(.25)+2(.30)+3(.35) = 1.9 points. σ_P ≈ 0.995 points. A player expects 1.9 points per play, typically varying by about 1.'
          }
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples',
        heading: 'Multiply by probability. <span class="underline teal">Then add.</span>',
        body: 'The discrete formulas look intimidating, but they’re both "multiply then add" — just with an extra subtract-and-square step for standard deviation. Click each one open.',
        items: [
          {
            q: 'A horse enters two races. From its tree-diagram distribution, W = 0/1/2 wins with P(0)=0.18, P(1)=0.225, P(2)=0.595. Find μ_W and σ_W.',
            fields: [
              { k: 'μ_W = Σ w·P(w)', v: '0(.18) + 1(.225) + 2(.595) = 0 + 0.225 + 1.19 = 1.415 wins.' },
              { k: 'σ_W = √[Σ(w−μ)²·P(w)]', v: '(0−1.415)²(.18) + (1−1.415)²(.225) + (2−1.415)²(.595) = 0.3604 + 0.0388 + 0.2036 = 0.6028. √0.6028 ≈ 0.776 wins.' },
              { k: 'Interpretation', v: 'Over many pairs of races, this horse averages 1.415 wins, typically varying by about 0.776 wins from race-pair to race-pair.' }
            ]
          },
          {
            q: 'A hippopotamus’s weight is a continuous random variable H, given as μ_H = 6,700 lb and σ_H = 1,200 lb. Why can’t these be calculated from a formula the way the horse example was?',
            fields: [
              { k: 'Discrete vs. continuous', v: 'A hippo’s weight can take on infinitely many decimal values — there’s no way to list "every outcome" the way you can list 0, 1, or 2 wins.' },
              { k: 'How these numbers actually come from', v: 'Someone weighed a huge number of hippos and averaged the results — the law of large numbers, not a formula.' },
              { k: 'What this means for you', v: 'For any continuous random variable, μ and σ will always be given directly in a problem — you’re never expected to derive them by hand.' }
            ]
          },
          {
            q: 'A lion’s weight has μ_L = 450 lb, σ_L = 40 lb. Convert both to kilograms (1 kg = 2.2 lb).',
            fields: [
              { k: 'This is a pure unit conversion', v: 'Converting units is just multiplying (or dividing) by a conversion factor — the same rule as multiplying by any constant.' },
              { k: 'μ in kilograms', v: '450 ÷ 2.2 ≈ 204.545 kg.' },
              { k: 'σ in kilograms', v: '40 ÷ 2.2 ≈ 18.182 kg — the standard deviation gets divided by the same factor as the mean, since this is pure multiplication (by 1/2.2), not addition.' }
            ]
          },
          {
            q: 'Grace sells t-shirts for $28 each (μ_S = 2.42, σ_S = 1.258 shirts). Find the mean and SD of her revenue. Then suppose she also pays a flat $8 booth fee — find the mean and SD of her profit.',
            fields: [
              { k: 'Revenue = 28 × S (pure multiplication)', v: 'μ = 28 × 2.42 = $67.76. σ = 28 × 1.258 ≈ $35.22 — both mean and SD scale by 28.' },
              { k: 'Profit = 28 × S − 8 (multiplication AND subtraction)', v: 'μ = 67.76 − 8 = $59.76 — subtracting a constant shifts the mean.' },
              { k: 'But σ for profit is UNCHANGED: still ≈ $35.22', v: 'Subtracting a flat $8 fee shifts every possible outcome down by exactly the same amount — it doesn’t change how spread out they are from each other. Only the ×28 affects spread; the −8 doesn’t.' }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A ', { id:'b1', answer:'parameter', options:['parameter','statistic','random variable'] },
            ' is a numerical value measuring a characteristic of a probability distribution or a population.'
          ]},
          { segments: [
            'The mean of a random variable, also called the ', { id:'b2', answer:'expected value', options:['expected value','sample size','standard deviation'] },
            ', is the long-run average outcome after a large number of repetitions.'
          ]},
          { segments: [
            'For a discrete random variable, μ_X = ', { id:'b3', answer:'Σ x·P(x)', options:['Σ x·P(x)','Σ P(x)','x ÷ P(x)'] },
            ' — multiply each outcome by its probability, then add all the products together.'
          ]},
          { segments: [
            'For a continuous random variable, there is no formula for the mean or standard deviation — they must simply be ',
            { id:'b4', answer:'given', options:['given','assumed to be zero','ignored'] },
            ', since the outcomes can’t be listed.'
          ]},
          { segments: [
            'When transforming a random variable with Y = a + bX, the mean transforms as μ_Y = ', { id:'b5', answer:'a + b·μ_X', options:['a + b·μ_X','b·μ_X','a·μ_X'] },
            ', since both addition and multiplication shift the average.'
          ]},
          { segments: [
            'But the standard deviation transforms as σ_Y = ', { id:'b6', answer:'|b|·σ_X', options:['|b|·σ_X','a + b·σ_X','a·σ_X'] },
            ' — adding or subtracting a constant does not change how spread out the values are.'
          ]}
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: 'The mean weight of every giraffe on Earth.', term: 'Parameter', detail: 'A single fixed number describing a population or probability distribution.' },
          { prompt: 'LeBron James is expected to score 27.2 points tomorrow night, based on his career average.', term: 'Mean / expected value, μ_X or E(X)', detail: 'The long-run average outcome of a random variable.' },
          { prompt: 'μ_X = Σ x·P(x)', term: 'The formula for the mean of a discrete random variable', detail: 'Multiply each outcome by its probability, then sum.' },
          { prompt: 'σ_X = √[Σ(x−μ)²·P(x)]', term: 'The formula for the standard deviation of a discrete random variable', detail: 'Subtract the mean, square it, weight by probability, sum, then square-root.' },
          { prompt: 'The average weight of a giraffe, measured across thousands of giraffes — since you can’t list every possible weight.', term: 'A continuous random variable’s mean — always given, never derived', detail: 'No formula exists for continuous random variables; μ and σ come from real-world measurement.' },
          { prompt: 'Converting a lion’s weight from pounds to kilograms — does this change the standard deviation?', term: 'Yes — multiplication by a constant scales σ too', detail: 'σ_Y = |b|·σ_X for Y = bX. Both μ and σ get divided by 2.2 in this conversion.' },
          { prompt: 'Grace’s revenue mean shifts down after subtracting a flat $8 fee — but does her standard deviation change?', term: 'No — subtracting a constant never affects σ', detail: 'Only the multiplication (×28) affected spread. The −8 shifted every outcome equally, so nothing spread out more or less.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'The mean of a random variable is also known as its:', opts: ['Standard deviation', 'Expected value', 'Complement', 'Parameter range'], correct: 1, exp: 'Mean and expected value are interchangeable terms — both refer to μ_X or E(X).' },
          { q: 'For a discrete random variable, the formula for the mean is:', opts: ['Σ (x − μ)²', '√[Σ P(x)]', 'Σ P(x) ÷ n', 'Σ x·P(x)'], correct: 3, exp: 'Multiply each outcome by its probability, then add all the products.' },
          { q: 'A random variable X has P(0)=0.4, P(1)=0.6. What is μ_X?', opts: ['0.6', '0.5', '0.4', '1.0'], correct: 0, exp: 'μ_X = 0(0.4) + 1(0.6) = 0.6.' },
          { q: 'Why is there no formula for the mean of a continuous random variable?', opts: ['Continuous random variables never have a mean', 'The mean of a continuous variable is always 0', 'The outcomes can’t be listed, so you can’t multiply each one by its probability and sum', 'Continuous random variables are always symmetric'], correct: 2, exp: 'The discrete formula requires listing every outcome — impossible for a continuous variable with infinitely many possible values on an interval.' },
          { q: 'If Y = 4X (a pure multiplication, no added constant), and μ_X = 10, what is μ_Y?', opts: ['40', '4', '10', '14'], correct: 0, exp: 'μ_Y = 4 × μ_X = 4 × 10 = 40.' },
          { q: 'Using the same transformation Y = 4X, if σ_X = 3, what is σ_Y?', opts: ['7', '4', '3', '12'], correct: 3, exp: 'σ_Y = |4| × σ_X = 4 × 3 = 12 — multiplication scales the standard deviation too.' },
          { q: 'If Y = X + 10 (pure addition, no multiplication), and σ_X = 5, what is σ_Y?', opts: ['10', '50', '5', '15'], correct: 2, exp: 'Adding a constant shifts every value equally but does not change the spread: σ_Y = σ_X = 5.' },
          { q: 'A vending machine’s daily sales have μ = $85, σ = $12. After subtracting a flat $20 daily restocking cost, what are the new mean and standard deviation of profit?', opts: ['μ = $65, σ = $32', 'μ = $65, σ = $12', 'μ = $85, σ = $12', 'μ = $105, σ = $12'], correct: 1, exp: 'Subtracting a constant ($20) shifts the mean down (85 − 20 = 65) but leaves the standard deviation unchanged at $12.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Mean = multiply, then add', body: 'μ_X = Σ x·P(x). Every outcome, weighted by how likely it is, summed together — the "balance point" of the distribution.' },
          { num: 'ii.', title: 'SD = the same idea, one layer deeper', body: 'σ_X = √[Σ(x−μ)²·P(x)]. Subtract the mean, square it, weight by probability, sum, square-root. Technology (Desmos, a graphing calculator) does this instantly — know what it means, not just how to grind through it.' },
          { num: 'iii.', title: 'Continuous means "just given"', body: 'You can never derive μ or σ for a continuous random variable from a formula — they come from real-world measurement and are always handed to you in the problem.' },
          { num: 'iv.', title: 'Multiplication changes both parameters', body: 'Scale a random variable by a constant, and BOTH the mean and the standard deviation scale by that same amount.' },
          { num: 'v.', title: 'Addition/subtraction only shifts the mean', body: 'Add or subtract a constant, and only the mean moves. The standard deviation — a measure of spread — stays exactly the same, since every value shifted by the same fixed amount.' }
        ]
      }
    ],

    homework: {
      estTime: '~35 min',
      questions: [
        { q: 'A parameter is best defined as:', opts: ['Always the mean of a data set', 'A numerical value measuring a characteristic of a population or probability distribution', 'A number describing a sample', 'A value that only applies to continuous random variables'], correct: 1, exp: 'A parameter describes a population or distribution — a single fixed value, unlike a statistic (which comes from a sample).' },
        { q: 'The mean of a random variable is also called its:', opts: ['Interquartile range', 'Standard score', 'Range', 'Expected value'], correct: 3, exp: 'Mean and expected value (E(X)) are the same thing for a random variable.' },
        { q: 'A random variable X has P(1)=0.3, P(2)=0.5, P(3)=0.2. What is μ_X?', opts: ['2.0', '1.9', '2.1', '1.7'], correct: 1, exp: 'μ_X = 1(0.3) + 2(0.5) + 3(0.2) = 0.3 + 1.0 + 0.6 = 1.9.' },
        { q: 'A random variable X has values 0, 1, 2 with probabilities 0.2, 0.5, 0.3. What is μ_X?', opts: ['1.0', '1.2', '1.1', '0.9'], correct: 2, exp: 'μ_X = 0(0.2) + 1(0.5) + 2(0.3) = 0 + 0.5 + 0.6 = 1.1.' },
        { q: 'Using the same distribution (values 0/1/2, probabilities 0.2/0.5/0.3, μ = 1.1), what is σ_X?', opts: ['0.7', '0.49', '0.3', '1.1'], correct: 0, exp: 'σ_X = √[(0−1.1)²(.2) + (1−1.1)²(.5) + (2−1.1)²(.3)] = √[0.242+0.005+0.243] = √0.49 = 0.7.' },
        { q: 'Why can’t you use the formula μ_X = Σ x·P(x) to find the mean height of a randomly selected adult?', opts: ['Height is not a random variable', 'Mean height is always exactly the same for everyone', 'The formula only works for negative numbers', 'Height is continuous — its outcomes can’t be listed, so you can’t sum over every individual value'], correct: 3, exp: 'Height is a continuous random variable — the sum formula requires a finite, listable set of outcomes, which continuous variables don’t have.' },
        { q: 'A shipping company’s package weight has μ = 12 lb, σ = 3 lb. If Y = 2X (weight doubled, no constant added), what is μ_Y?', opts: ['14', '24', '12', '6'], correct: 1, exp: 'μ_Y = 2 × 12 = 24.' },
        { q: 'Using the same transformation Y = 2X, what is σ_Y?', opts: ['6', '3', '9', '1.5'], correct: 0, exp: 'σ_Y = |2| × 3 = 6 — multiplication scales the standard deviation.' },
        { q: 'A random variable has μ = 40, σ = 6. If Y = X − 15 (pure subtraction, no multiplication), what is μ_Y?', opts: ['55', '6', '25', '40'], correct: 2, exp: 'μ_Y = 40 − 15 = 25 — subtraction shifts the mean.' },
        { q: 'Using the same transformation Y = X − 15, what is σ_Y?', opts: ['6', '−9', '21', '0'], correct: 0, exp: 'σ_Y = 6, unchanged — subtracting a constant never affects the standard deviation.' },
        { q: 'A car dealership sells an average of μ = 8 cars per week with σ = 2 cars. Each car generates $2,000 in profit, and there’s also a fixed $500 weekly overhead cost. What is the mean weekly net profit?', opts: ['$16,500', '$16,000', '$8,000', '$15,500'], correct: 3, exp: 'μ = 2000 × 8 − 500 = 16,000 − 500 = $15,500.' },
        { q: 'Using the same dealership scenario, what is the standard deviation of weekly net profit?', opts: ['$2,000', '$1,500', '$4,000', '$3,500'], correct: 2, exp: 'σ = 2000 × 2 = $4,000. The $500 overhead is a constant subtraction and does not affect the standard deviation.' },
        { q: 'A distance measured in miles has μ = 26.2, σ = 3.1. Convert both to kilometers (1 mile = 1.609 km).', opts: ['μ ≈ 42.16 km, σ ≈ 3.1 km', 'μ ≈ 42.16 km, σ ≈ 4.99 km', 'μ ≈ 16.29 km, σ ≈ 1.93 km', 'μ ≈ 27.81 km, σ ≈ 3.1 km'], correct: 1, exp: 'This is pure multiplication by the conversion factor: μ = 26.2 × 1.609 ≈ 42.16 km, σ = 3.1 × 1.609 ≈ 4.99 km — both scale by the same factor.' },
        { q: 'A temperature random variable has μ = 20°C, σ = 4°C. Convert to Fahrenheit using °F = 1.8×°C + 32. What is μ in °F?', opts: ['20', '52', '68', '36'], correct: 2, exp: 'μ_F = 1.8 × 20 + 32 = 36 + 32 = 68°F.' },
        { q: 'Using the same conversion (°F = 1.8×°C + 32), what is σ in °F?', opts: ['7.2', '32', '39.2', '4'], correct: 0, exp: 'σ_F = |1.8| × 4 = 7.2°F. The "+32" is a constant shift and does not affect the standard deviation.' },
        { q: 'A raffle ticket costs $10, and a random variable X represents the number of winning tickets (out of many) a buyer holds, with μ_X = 0.3, σ_X = 0.5. Each winning ticket pays $200. What is the mean payout?', opts: ['$60', '$200', '$30', '$2,000'], correct: 0, exp: 'μ_payout = 200 × 0.3 = $60.' },
        { q: 'Using the same raffle scenario, what is the standard deviation of the payout?', opts: ['$0.5', '$50', '$200', '$100'], correct: 3, exp: 'σ_payout = 200 × 0.5 = $100.' },
        { q: 'A distribution has outcomes −2, 0, 3 with probabilities 0.25, 0.5, 0.25. What is μ_X?', opts: ['1.0', '0.25', '0.5', '0.75'], correct: 1, exp: 'μ_X = (−2)(0.25) + 0(0.5) + 3(0.25) = −0.5 + 0 + 0.75 = 0.25.' },
        { q: 'A weather station reports that daily high temperatures have μ = 75°F with σ = 6°F — no formula was used to find these. Why not?', opts: ['Temperature is a discrete random variable', 'σ is never calculable for temperature', 'The weather station made an error', 'Temperature is continuous — you can’t list every possible decimal value, so these had to come from real measurement over many days'], correct: 3, exp: 'Temperature can take any value on a continuous interval (including many decimal places), so μ and σ must be measured directly rather than computed from a discrete formula.' },
        { q: 'Which transformation would change BOTH the mean and standard deviation of a random variable?', opts: ['Y = X + 5', 'Y = X (no change at all)', 'Y = 3X', 'Y = X − 12'], correct: 2, exp: 'Multiplying by a constant (Y = 3X) changes both the mean (scales by 3) and the standard deviation (scales by 3). Pure addition or subtraction only changes the mean.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.10 — The Binomial Distribution
   Source: course transcript (Topic 2.10 lecture)
   ============================================ */

registerChapters({
  '2-10': {
    id: '2-10',
    code: 'Topic 2.10',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'The Binomial Distribution',
    cardSummary: 'B.I.T.S. — the four conditions for a binomial random variable — plus the formula, the mean/SD shortcuts, and cumulative probability.',
    heroTitle: 'Count the <em>successes</em>,<br>not the outcomes.',
    heroSub: 'A binomial random variable counts how many successes happen in a fixed number of independent, same-probability trials. Once you confirm B.I.T.S., one formula unlocks every probability in the distribution — and two more give you its mean and standard deviation for free.',
    source: 'Topic 2.10 course video',
    estTime: '~45–55 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Check <span class="underline teal">B.I.T.S.</span> first.',
        body: 'A binomial random variable is a special, very common kind of discrete random variable — but it only applies when four specific conditions hold.',
        cards: [
          { roman: 'I.', title: 'B.I.T.S.', body: '<strong>B</strong>inary (success/failure only), <strong>I</strong>ndependent trials, fixed number of <strong>T</strong>rials, and probability of <strong>S</strong>uccess stays the same every trial. All four, or it isn’t binomial.', tags: ['Binary','Independent','Trials fixed','Same probability'], accent: 'population' },
          { roman: 'II.', title: 'One formula, every probability', body: 'P(X = x) = ₙCₓ · pˣ · (1−p)ⁿ⁻ˣ — combinations tell you how many ways, then multiply by the probability of any one of those ways.', tags: ['P(X=x) = nCx·pˣ·qⁿ⁻ˣ','μ = np','σ = √(npq)'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'Four checks. <span class="underline teal">One formula.</span>',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'binomial-rv', term: 'Binomial random variable', accent: 'population', body: 'A discrete random variable that counts the number of successes in n repeated independent trials, each with only two outcomes (success/failure) and a constant probability of success p.' },
          { id: 'bits', term: 'B.I.T.S.', accent: 'population', body: 'The four conditions to check: Binary outcomes, Independent trials, fixed number of Trials (n), and probability of Success stays the same every trial.' },
          { id: 'ten-percent', term: '10% condition', accent: 'sample', body: 'Sampling without replacement technically breaks independence — but if your sample is less than 10% of the population, the probability barely changes, and treating it as binomial is still fine.' },
          { id: 'combinations', term: 'Combinations, ₙCₓ', accent: 'sample', body: 'The number of ways to choose x successes out of n trials, order not mattering. Never compute the factorial formula by hand — Desmos or a calculator’s nCr function does it instantly.' },
          { id: 'binomial-formula', term: 'Binomial probability formula', sym: 'P(X=x)', accent: 'population', body: 'P(X = x) = ₙCₓ · pˣ · (1−p)ⁿ⁻ˣ. Combinations (how many ways) × probability of x successes × probability of the remaining failures.' },
          { id: 'binomial-mean-sd', term: 'Binomial mean and SD', sym: 'μ=np, σ=√(npq)', accent: 'sample', body: 'μ_X = np and σ_X = √[np(1−p)] — but only for a confirmed binomial random variable. These shortcuts don’t apply to any other discrete random variable.' }
        ]
      },

      /* ---------------- 3. BINOMIAL DISTRIBUTIONS ---------------- */
      {
        type: 'chart', id: 'distributions', label: 'Section 03 — Two Full Distributions', label2: '',
        heading: 'Every probability, <span class="underline sample">built from one formula</span>.',
        body: 'Both of these are fully binomial (B.I.T.S. confirmed) — every single bar comes from P(X=x) = ₙCₓ·pˣ·(1−p)ⁿ⁻ˣ.',
        items: [
          {
            title: 'McKenzie’s free throws — n = 8, p = 0.78',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'0', value:0.0000055 }, { label:'1', value:0.000156 }, { label:'2', value:0.001931 }, { label:'3', value:0.013696 }, { label:'4', value:0.060697 }, { label:'5', value:0.172159 }, { label:'6', value:0.305190 }, { label:'7', value:0.309154 }, { label:'8', value:0.137011 }],
            caption: 'μ = np = 8(.78) = 6.24 makes. σ = √(npq) = √(8×.78×.22) ≈ 1.172. She’s most likely to make 6 or 7 out of 8 — missing all 8 is almost impossible (≈0.0006%).'
          },
          {
            title: 'Left-handed people in a group of 20 — n = 20, p = 0.13',
            chartType: 'bar', mode: 'relative',
            data: [{ label:'0', value:0.0617 }, { label:'1', value:0.1844 }, { label:'2', value:0.2618 }, { label:'3', value:0.2347 }, { label:'4', value:0.1491 }, { label:'5', value:0.0713 }, { label:'6', value:0.0266 }, { label:'7', value:0.0080 }, { label:'8+', value:0.0024 }],
            caption: 'μ = np = 20(.13) = 2.6 lefties. σ = √(20×.13×.87) ≈ 1.504. P(exactly 6) = 0.0266. P(at least 1) = 1 − P(0) = 1 − 0.0617 = 0.9383.'
          }
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples', label2: '',
        heading: 'Check B.I.T.S. <span class="underline teal">before you compute anything.</span>',
        body: 'The most common AP mistake is applying the binomial formula when one of the four conditions secretly fails. Click each one open.',
        items: [
          {
            q: 'McKenzie makes 78% of her free throws and shoots 8 of them. Let M = how many she makes. Is M binomial?',
            fields: [
              { k: 'Binary?', v: 'Yes — every shot is a make or a miss.' },
              { k: 'Independent?', v: 'Yes — her shooting percentage doesn’t change based on previous makes or misses.' },
              { k: 'Trials fixed?', v: 'Yes — n = 8, given directly.' },
              { k: 'Same probability?', v: 'Yes — 78% every single shot, no hot streaks.' },
              { k: 'Verdict', v: 'All four hold — M is binomial with n=8, p=0.78.' }
            ]
          },
          {
            q: 'Kayla makes 80% of her free throws, but a make raises her next shot’s probability by 2% and a miss lowers it by 10%. She shoots 10. Let K = how many she makes. Is K binomial?',
            fields: [
              { k: 'Binary?', v: 'Yes — still make or miss.' },
              { k: 'Independent?', v: 'NO — each shot’s outcome changes the probability of the next shot. This directly violates independence.' },
              { k: 'Same probability?', v: 'Also fails — the probability explicitly changes shot to shot.' },
              { k: 'Verdict', v: 'K is a random variable, but NOT a binomial random variable — two of the four B.I.T.S. checks fail.' }
            ]
          },
          {
            q: 'A small bag has 20 candies, 25% red. 5 are selected WITHOUT replacement. Let R = number of red candies selected. Is R binomial?',
            fields: [
              { k: 'Binary?', v: 'Yes — red or not red.' },
              { k: 'Independent?', v: 'NO. After removing one red candy, the probability drops from 5/20 (25%) to 4/19 (≈21.1%) — a large, noticeable shift.' },
              { k: 'Verdict', v: 'NOT binomial — sampling without replacement from a small population changes the probability too much to ignore.' }
            ]
          },
          {
            q: 'The same setup, but now from a candy FACTORY with millions of candies, 25% red, and 5 are selected without replacement. Is R binomial now?',
            fields: [
              { k: 'Independent? (technically)', v: 'Still technically no — removing candies without replacement always changes the exact proportion slightly.' },
              { k: 'But apply the 10% condition', v: 'Since 5 candies is a minuscule fraction of "millions," the probability barely budges (25% → about 24.99999996%) — negligible.' },
              { k: 'Verdict', v: 'Close enough to independent that R can be treated as binomial, with n=5, p=0.25 — this is exactly what the 10% condition is for.' }
            ]
          },
          {
            q: 'Worldwide, 13% of people are left-handed. In a random group of 20, let H = number of left-handed people. Find P(at least 1), P(at most 4), and P(at least 3).',
            fields: [
              { k: 'P(at least 1) = 1 − P(0)', v: 'P(0) = ₂₀C₀(.13)⁰(.87)²⁰ ≈ 0.0617. So P(at least 1) = 1 − 0.0617 = 0.9383.' },
              { k: 'P(at most 4) = P(0)+P(1)+P(2)+P(3)+P(4)', v: 'Adding the cumulative probabilities from 0 through 4 gives ≈ 0.8917.' },
              { k: 'P(at least 3) = 1 − P(at most 2)', v: 'Equivalently, sum P(3) through P(20) directly: ≈ 0.4920.' },
              { k: 'Reading the phrasing', v: '"At least" means that value or more (≥). "At most" means that value or less (≤). Getting this backwards is the single most common error on this topic.' }
            ]
          },
          {
            q: 'Find the mean and standard deviation of H (left-handed people in a group of 20, p = 0.13), and interpret them.',
            fields: [
              { k: 'μ_H = np', v: '20 × 0.13 = 2.6 people.' },
              { k: 'σ_H = √(npq)', v: '√(20 × 0.13 × 0.87) ≈ 1.504 people.' },
              { k: 'Interpretation', v: 'In a group of 20 people, we’d expect an average of 2.6 to be left-handed, typically varying by about 1.5 people from group to group.' }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes', label2: '',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A binomial random variable counts the number of ', { id:'b1', answer:'successes', options:['successes','trials','failures'] },
            ' in a fixed number of independent trials, each with the same probability of success.'
          ]},
          { segments: [
            'The four conditions to check are B.I.T.S.: Binary, Independent, ', { id:'b2', answer:'Trials fixed', options:['Trials fixed','Total probability','Two-tailed'] },
            ', and probability of Success stays the same.'
          ]},
          { segments: [
            'The ', { id:'b3', answer:'10% condition', options:['10% condition','general multiplication rule','law of large numbers'] },
            ' allows sampling without replacement to be treated as independent, as long as the sample is less than 10% of the population.'
          ]},
          { segments: [
            'The binomial probability formula is P(X=x) = ', { id:'b4', answer:'ₙCₓ · pˣ · (1−p)ⁿ⁻ˣ', options:['ₙCₓ · pˣ · (1−p)ⁿ⁻ˣ','n · p · x','ₙCₓ ÷ p'] },
            ' — combinations times the probability of the successes times the probability of the failures.'
          ]},
          { segments: [
            'For a binomial random variable, the mean is μ = ', { id:'b5', answer:'np', options:['np','n+p','n/p'] },
            ' and the standard deviation is σ = ',
            { id:'b6', answer:'√[np(1−p)]', options:['√[np(1−p)]','np(1−p)','√n · p'] },
            ' — but these shortcuts only work for a confirmed binomial random variable.'
          ]},
          { segments: [
            '"At least x" means x or ', { id:'b7', answer:'more', options:['more','less','exactly'] },
            ', while "at most x" means x or ',
            { id:'b8', answer:'less', options:['less','more','exactly'] },
            '.'
          ]}
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards', label2: '',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: 'Doug shoots 5 darts, each with an independent 15% chance of a bullseye. X = number of bullseyes.', term: 'Binomial random variable', detail: 'Binary (hit/miss), independent, n=5 fixed, p=0.15 constant — all four B.I.T.S. checks pass.' },
          { prompt: 'A shooter’s hit probability rises after each make and drops after each miss.', term: 'NOT binomial — independence fails', detail: 'The probability changing trial-to-trial breaks both "independent" and "same probability."' },
          { prompt: '5 candies drawn without replacement from a bag of just 20.', term: 'NOT binomial — the 10% condition fails', detail: 'Removing candies from such a small population changes the probability too much to ignore.' },
          { prompt: '5 candies drawn without replacement from a factory batch of millions.', term: 'Binomial (close enough) — the 10% condition holds', detail: 'The sample is far less than 10% of the population, so the tiny probability shift is negligible.' },
          { prompt: 'How many different ways can exactly 2 of 8 free throws be makes?', term: '₈C₂ = 28 combinations', detail: 'Use the nCr function on a calculator or Desmos — never the factorial formula by hand.' },
          { prompt: 'P(X = x) = ₙCₓ · pˣ · (1−p)ⁿ⁻ˣ', term: 'The binomial probability formula', detail: 'Combinations × probability of the successes × probability of the failures.' },
          { prompt: 'μ = np, σ = √[np(1−p)]', term: 'Binomial mean and standard deviation', detail: 'Shortcuts that only work once a random variable is confirmed binomial.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz', label2: '',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'Which of these is NOT one of the B.I.T.S. conditions for a binomial random variable?', opts: ['Binary outcomes', 'Trials are normally distributed', 'Same probability of success every trial', 'Independent trials'], correct: 1, exp: 'B.I.T.S. stands for Binary, Independent, Trials (fixed number), and Same probability — normality is never a requirement.' },
          { q: 'A basketball player shoots free throws where each make increases the probability of the next make. This scenario fails which B.I.T.S. condition?', opts: ['Binary', 'Independent (and same probability)', 'Trials fixed', 'None — it’s still binomial'], correct: 1, exp: 'Since the probability changes based on previous outcomes, both independence and "same probability" are violated.' },
          { q: 'The 10% condition allows you to treat sampling WITHOUT replacement as approximately binomial when:', opts: ['The sample is more than 50% of the population', 'The population is smaller than the sample', 'The sample is less than 10% of the population', 'p is exactly 0.10'], correct: 2, exp: 'If the sample size is under 10% of the population, removing individuals barely changes the probability — close enough to independent.' },
          { q: 'The binomial probability formula P(X=x) = ₙCₓ·pˣ·(1−p)ⁿ⁻ˣ — what does the ₙCₓ part represent?', opts: ['The number of different ways to arrange x successes among n trials', 'The probability of the failures', 'The probability of x successes', 'The mean of the distribution'], correct: 0, exp: 'Combinations count how many different orderings produce exactly x successes — every one of those orderings has the same probability, so you multiply by how many there are.' },
          { q: 'A binomial random variable has n=6, p=0.5. What is ₆C₂ (the number of ways to get exactly 2 successes)?', opts: ['12', '30', '6', '15'], correct: 3, exp: '₆C₂ = 15.' },
          { q: 'For a binomial random variable with n=10, p=0.3, what is the mean?', opts: ['10', '0.3', '3', '7'], correct: 2, exp: 'μ = np = 10 × 0.3 = 3.' },
          { q: 'For the same distribution (n=10, p=0.3), what is the standard deviation?', opts: ['2.1', '0.21', '3', '1.449'], correct: 3, exp: 'σ = √[np(1−p)] = √(10×0.3×0.7) = √2.1 ≈ 1.449.' },
          { q: '"At least 3 successes" means:', opts: ['3 or more', '3 or fewer', 'Exactly 3', 'More than 3, not including 3'], correct: 0, exp: '"At least" always means that value or greater — ≥.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways', label2: '',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Always check B.I.T.S. first', body: 'Binary, Independent, Trials fixed, Same probability. Skip this check and you risk applying a formula that doesn’t actually apply.' },
          { num: 'ii.', title: 'The 10% condition is a safety valve', body: 'Sampling without replacement technically breaks independence — but if the sample is under 10% of a large population, the effect is negligible and binomial still applies.' },
          { num: 'iii.', title: 'One formula, every probability', body: 'P(X=x) = ₙCₓ·pˣ·(1−p)ⁿ⁻ˣ. Know what each piece means — but let a calculator’s binompdf/Desmos do the arithmetic.' },
          { num: 'iv.', title: 'μ = np and σ = √[np(1−p)] — binomial only', body: 'These shortcuts are much faster than the general discrete-random-variable formulas, but they ONLY work once you’ve confirmed B.I.T.S.' },
          { num: 'v.', title: '"At least" and "at most" are opposite directions', body: '"At least x" = x or more (≥x). "At most x" = x or less (≤x). Misreading this phrasing is the single most common error on this topic.' }
        ]
      }
    ],

    homework: {
      estTime: '~35 min',
      questions: [
        { q: 'A binomial random variable requires all of the following EXCEPT:', opts: ['A fixed number of trials', 'A large sample size (n > 30)', 'Independent trials', 'The same probability of success on every trial'], correct: 1, exp: 'There is no minimum sample size requirement for a binomial random variable — B.I.T.S. never mentions sample size.' },
        { q: 'A quality control inspector checks 15 items from an assembly line, where each item has a 5% chance of being defective, independent of the others. Let D = number of defective items. Is D binomial?', opts: ['No, because 5% is too small a probability', 'Cannot be determined without more information', 'No, because defects usually cluster together', 'Yes — binary (defective/not), independent, n=15 fixed, p=0.05 constant'], correct: 3, exp: 'All four B.I.T.S. conditions are explicitly satisfied here.' },
        { q: 'A gambler plays a game where winning increases the odds of winning the next round. He plays 10 rounds. Is the number of wins binomial?', opts: ['No — independence and "same probability" both fail, since one round affects the next', 'Yes, since there are only two outcomes each round', 'Yes, as long as n is fixed', 'Cannot be determined'], correct: 0, exp: 'A changing probability based on previous outcomes breaks both independence and the constant-probability requirement.' },
        { q: 'A jar has 8 marbles, 3 red. 4 are drawn without replacement. Is the number of red marbles drawn binomial?', opts: ['Yes, since red/not-red is binary', 'Cannot be determined without knowing the exact probability', 'No — removing marbles from such a small jar changes the probability too much to be treated as independent', 'Yes, by the 10% condition'], correct: 2, exp: 'With only 8 marbles total, drawing 4 without replacement is a huge fraction of the population — the 10% condition does NOT apply here.' },
        { q: 'A factory produces millions of light bulbs, 2% defective. An inspector samples 30 without replacement. Is the number of defective bulbs approximately binomial?', opts: ['No, since sampling is always without replacement', 'Yes, but only if the sample is replaced after each draw', 'No, because 2% is too low a probability', 'Yes — 30 bulbs is a tiny fraction of "millions," so the 10% condition allows treating it as binomial'], correct: 3, exp: '30 out of millions is far less than 10% of the population, so the probability barely shifts — binomial applies.' },
        { q: 'For a binomial random variable with n=7, p=0.4, what is ₇C₃ (ways to get exactly 3 successes)?', opts: ['7', '35', '21', '28'], correct: 1, exp: '₇C₃ = 35.' },
        { q: 'Using the binomial formula, find P(X=3) for n=5, p=0.6.', opts: ['0.3456', '0.2304', '0.6000', '0.0778'], correct: 0, exp: 'P(3) = ₅C₃(0.6)³(0.4)² = 10 × 0.216 × 0.16 = 0.3456.' },
        { q: 'For n=5, p=0.6, what is the mean of the distribution?', opts: ['2', '3', '0.6', '5'], correct: 1, exp: 'μ = np = 5 × 0.6 = 3.' },
        { q: 'For the same distribution (n=5, p=0.6), what is the standard deviation?', opts: ['0.49', '1.095', '3', '1.2'], correct: 1, exp: 'σ = √[np(1−p)] = √(5×0.6×0.4) = √1.2 ≈ 1.095.' },
        { q: 'A binomial random variable has n=10, p=0.4. What is P(X=0)?', opts: ['0.4', '0.04', '0.0001', '0.006047'], correct: 3, exp: 'P(0) = ₁₀C₀(0.4)⁰(0.6)¹⁰ = 0.6¹⁰ ≈ 0.006047.' },
        { q: 'Using the same distribution (n=10, p=0.4), what is P(at least 1)?', opts: ['0.006047', '0.4', '0.6', '0.993953'], correct: 3, exp: 'P(at least 1) = 1 − P(0) = 1 − 0.006047 ≈ 0.993953.' },
        { q: 'A binomial random variable has n=6, p=0.5. What is P(at most 2)?', opts: ['0.6875', '0.1563', '0.5', '0.3438'], correct: 3, exp: 'P(at most 2) = P(0)+P(1)+P(2) = 0.0156+0.0938+0.2344 ≈ 0.3438.' },
        { q: 'A binomial random variable has n=15, p=0.3. What is P(exactly 4)?', opts: ['0.2186', '0.3', '0.15', '0.4'], correct: 0, exp: 'P(4) = ₁₅C₄(0.3)⁴(0.7)¹¹ ≈ 0.2186.' },
        { q: 'A binomial random variable has n=12, p=0.25. What is the mean?', opts: ['9', '12', '3', '0.25'], correct: 2, exp: 'μ = np = 12 × 0.25 = 3.' },
        { q: 'Using the same distribution (n=12, p=0.25), what is the standard deviation?', opts: ['2.25', '3', '1.5', '0.19'], correct: 2, exp: 'σ = √[np(1−p)] = √(12×0.25×0.75) = √2.25 = 1.5.' },
        { q: 'A survey finds 60% of students prefer online homework. In a random sample of 8 students, what is P(exactly 5 prefer online homework)?', opts: ['0.124', '0.279', '0.6', '0.5'], correct: 1, exp: 'P(5) = ₈C₅(0.6)⁵(0.4)³ = 56 × 0.07776 × 0.064 ≈ 0.279.' },
        { q: 'A basketball player makes 70% of free throws and shoots 6. What is P(makes all 6)?', opts: ['0.1176', '0.0007', '0.7', '0.42'], correct: 0, exp: 'P(6) = ₆C₆(0.7)⁶(0.3)⁰ = 0.7⁶ ≈ 0.1176.' },
        { q: 'Which phrase corresponds to P(X ≤ 5)?', opts: ['At most 5', 'Exactly 5', 'More than 5', 'At least 5'], correct: 0, exp: '"At most 5" means 5 or fewer, which is P(X ≤ 5).' },
        { q: 'Which phrase corresponds to P(X ≥ 2)?', opts: ['Fewer than 2', 'Exactly 2', 'At least 2', 'At most 2'], correct: 2, exp: '"At least 2" means 2 or more, which is P(X ≥ 2).' },
        { q: 'Why do the binomial mean/SD formulas (μ=np, σ=√[np(1−p)]) fail for a discrete random variable that is NOT binomial, like the number of t-shirts Grace sells?', opts: ['They never fail — these formulas work for every discrete random variable', 'Because t-shirts can’t be counted', 'Because Grace’s t-shirt sales don’t have a fixed number of "trials" each with the same two possible outcomes and constant probability — the B.I.T.S. structure isn’t there', 'Because the formulas only work when p = 0.5'], correct: 2, exp: 'The np and √[np(1−p)] shortcuts are derived specifically from the binomial structure — without a fixed number of binary, independent, constant-probability trials, there’s no "n" or "p" for the formula to use.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.11 — The Normal Distribution (Parts 1 & 2)
   Source: course transcript (Topic 2.11 Part 1 + Part 2 lectures)
   ============================================ */

registerChapters({
  '2-11': {
    id: '2-11',
    code: 'Topic 2.11',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'The Normal Distribution',
    cardSummary: 'Density curves, the empirical rule, finding probabilities from area under the normal curve, and working backward with inverse normal.',
    heroTitle: 'The most famous <em>curve</em><br>in statistics.',
    heroSub: 'A normal distribution is fully described by just two numbers — its mean and standard deviation. From there, area under the curve gives you any probability, and working backward from a percentage gets you back to a value. This is the single most-used distribution in the entire course.',
    source: 'Topic 2.11 Part 1 + Part 2 course videos',
    estTime: '~55–70 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'Area under the curve <span class="underline teal">is probability</span>.',
        body: 'A continuous random variable can’t have a probability for one exact value — only for an interval. A density curve shows where those probabilities live, and the normal curve is the most important density curve there is.',
        cards: [
          { roman: 'I.', title: 'Forward: value → probability', body: 'Given the mean and SD, find a z-score, then find the area under the curve — that area IS the probability.', tags: ['z = (x−μ)/σ','Area = probability'], accent: 'population' },
          { roman: 'II.', title: 'Backward: probability → value', body: 'Given a percentage, find the z-score that produces it (inverse normal), then solve the z-score formula for the missing value, mean, or standard deviation.', tags: ['Inverse normal','Solve for x, μ, or σ'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'One curve. <span class="underline teal">Two directions.</span>',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'density-curve', term: 'Density curve', accent: 'population', body: 'A curve modeling the probability distribution of a continuous random variable. The total area underneath is always 1 (100%); the area over any interval is that interval’s probability.' },
          { id: 'normal-distribution', term: 'Normal distribution', accent: 'population', body: 'A continuous, unimodal, bell-shaped, symmetric density curve, fully described by just its mean (center) and standard deviation (spread). Heights, weights, test scores, and manufacturing measurements are all commonly modeled by it.' },
          { id: 'standard-normal', term: 'Standard normal distribution', accent: 'sample', body: 'A normal distribution with mean 0 and standard deviation 1 — the version built purely from z-scores, usable for any normal random variable once converted.' },
          { id: 'empirical-rule', term: 'Empirical rule (68–95–99.7)', accent: 'population', body: 'For any normal distribution: about 68% of data is within 1 SD of the mean, 95% within 2 SD, and 99.7% within 3 SD.' },
          { id: 'inverse-normal', term: 'Inverse normal', accent: 'sample', body: 'Working backward: given an area (percentile), find the corresponding z-score or value — the opposite direction of finding a probability from a value.' },
          { id: 'percentile', term: 'Percentile', accent: 'sample', body: 'The value with a given percentage of the distribution below it. The 90th percentile has 90% of values below it, 10% above.' }
        ]
      },

      /* ---------------- 3. SEEING THE AREA ---------------- */
      {
        type: 'chart', id: 'curves', label: 'Section 03 — Reading the Normal Curve', label2: '',
        heading: 'Shade the region. <span class="underline sample">That’s the probability.</span>',
        body: 'Adult male lion weight: N(450, 40) — normally distributed with mean 450 lb, standard deviation 40 lb.',
        items: [
          {
            title: 'P(weight > 462) = 0.382',
            chartType: 'normalcurve',
            mean: 450, sd: 40, lower: 462, decimals: 0, label: 'Weight (lb)',
            caption: 'z = (462−450)/40 = 0.3. The shaded area to the right of z=0.3 is 38.2%.'
          },
          {
            title: 'P(weight < 335) = 0.00202',
            chartType: 'normalcurve',
            mean: 450, sd: 40, upper: 335, decimals: 0, label: 'Weight (lb)',
            caption: 'z = (335−450)/40 = −2.875 — nearly 3 SD below the mean, so barely any area is shaded.'
          },
          {
            title: 'P(394 < weight < 534) = 0.901',
            chartType: 'normalcurve',
            mean: 450, sd: 40, lower: 394, upper: 534, decimals: 0, label: 'Weight (lb)',
            caption: 'z = −1.4 to z = 2.1 — a wide slice of the curve, so 90.1% of lions fall in this range.'
          },
          {
            title: 'Empirical rule: within 1 SD ≈ 68%',
            chartType: 'normalcurve',
            mean: 450, sd: 40, lower: 410, upper: 490, decimals: 0, label: 'Weight (lb)',
            caption: '410 and 490 are exactly mean ± 1 SD — the empirical rule’s middle 68%, no z-score calculation needed.'
          },
          {
            title: 'Empirical rule: within 2 SD ≈ 95%',
            chartType: 'normalcurve',
            mean: 450, sd: 40, lower: 370, upper: 530, decimals: 0, label: 'Weight (lb)',
            caption: '370 and 530 are mean ± 2 SD — notice how much more of the curve is shaded than the ±1 SD version above.'
          }
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples', label2: '',
        heading: 'Forward finds a probability. <span class="underline teal">Backward finds a value.</span>',
        body: 'The hardest normal-distribution problems give you a percentage and ask you to solve for the mean, the standard deviation, or both. Click each one open.',
        items: [
          {
            q: 'Lion weights follow N(450, 40). What weight marks the 90th percentile? What weights mark the middle 60%? What weights mark the most extreme 5%?',
            fields: [
              { k: '90th percentile', v: 'z with 90% below it ≈ 1.282. Solve 1.282 = (x−450)/40 → x ≈ 501.26 lb.' },
              { k: 'Middle 60%', v: '60% in the middle leaves 20% in each tail, so z ≈ ±0.842. Solving both directions gives 416.3 lb and 483.7 lb.' },
              { k: 'Most extreme 5%', v: '"Extreme" means either tail — 2.5% in each. z ≈ ±1.96, giving 371.6 lb and 528.4 lb.' },
              { k: 'The pattern', v: 'Every backward problem is the same two steps: (1) use inverse normal to find the z-score for the given percentage, (2) plug that z-score into z=(x−μ)/σ and solve for x.' }
            ]
          },
          {
            q: 'Quiz scores are N(μ, 6) — normal with an unknown mean and SD = 6. 84% of students score below 78. Find μ.',
            fields: [
              { k: 'Find the z-score for "84% below"', v: 'Inverse normal: z with 84% below it ≈ 0.994.' },
              { k: 'Set up z = (x−μ)/σ', v: '0.994 = (78 − μ) / 6.' },
              { k: 'Solve for μ', v: '0.994 × 6 = 78 − μ → 5.966 = 78 − μ → μ ≈ 72.03.' }
            ]
          },
          {
            q: 'Package weights are N(μ, 1.5). 2.5% of packages weigh more than 18.5 lb. Find μ, then find P(weight < 15).',
            fields: [
              { k: 'Find the z-score', v: '2.5% ABOVE 18.5 means 97.5% below it: z ≈ 1.96.' },
              { k: 'Solve for μ', v: '1.96 = (18.5 − μ)/1.5 → μ ≈ 15.56 lb.' },
              { k: 'Follow-up: P(weight < 15)', v: 'Now that μ is known: z = (15 − 15.56)/1.5 ≈ −0.373. P(Z < −0.373) ≈ 0.354, or 35.4%.' }
            ]
          },
          {
            q: 'Test completion time is N(70, σ) — mean 70 minutes, unknown SD. About 3% of students finish in under 58 minutes. Find σ.',
            fields: [
              { k: 'Find the z-score', v: '3% below 58: z ≈ −1.881.' },
              { k: 'Set up and solve', v: '−1.881 = (58 − 70)/σ → σ = −12 / −1.881 ≈ 6.38 minutes.' }
            ]
          },
          {
            q: 'Tire lifetime is N(45000, σ) — mean 45,000 miles, unknown SD. 16% of tires last longer than 50,000 miles. Find σ, then find P(40,000 < X < 55,000).',
            fields: [
              { k: 'Find the z-score', v: '16% ABOVE 50,000: z ≈ 0.994.' },
              { k: 'Solve for σ', v: '0.994 = (50000 − 45000)/σ → σ ≈ 5,028 miles.' },
              { k: 'Follow-up: P(40,000 < X < 55,000)', v: 'z for 40,000 ≈ −0.994, z for 55,000 ≈ 1.989. Area between those z-scores ≈ 0.817, or 81.7%.' }
            ]
          },
          {
            q: 'SAT scores at a school are approximately normal. A score of 600 is the 50th percentile; a score of 700 is the 84th percentile. Find μ and σ, then find P(score > 750).',
            fields: [
              { k: 'μ is a freebie', v: 'The 50th percentile IS the mean in a normal distribution (by symmetry) — so μ = 600 immediately.' },
              { k: 'Solve for σ using the second point', v: 'z for the 84th percentile ≈ 0.994. So 0.994 = (700 − 600)/σ → σ ≈ 100.56.' },
              { k: 'Follow-up: P(score > 750)', v: 'z = (750−600)/100.56 ≈ 1.49. P(Z > 1.49) ≈ 0.068, or 6.8%.' }
            ]
          },
          {
            q: 'Commute times are approximately normal, with BOTH μ and σ unknown. 6% of commutes are under 20 minutes; 95% are under 42 minutes. Find μ and σ, then find P(25 < X < 40).',
            fields: [
              { k: 'Two z-scores, two equations', v: 'z for 6% below ≈ −1.555; z for 95% below ≈ 1.645. This gives two equations: −1.555 = (20−μ)/σ and 1.645 = (42−μ)/σ.' },
              { k: 'Solve both for μ, then set equal', v: 'μ = 1.555σ + 20 and μ = −1.645σ + 42. Setting them equal: 1.555σ + 20 = −1.645σ + 42 → 3.2σ = 22 → σ ≈ 6.876.' },
              { k: 'Back-substitute for μ', v: 'μ = 1.555(6.876) + 20 ≈ 30.69 minutes.' },
              { k: 'Follow-up: P(25 < X < 40)', v: 'z for 25 ≈ −0.828, z for 40 ≈ 1.354. Area between ≈ 0.708, or 70.8%.' }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes', label2: '',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A continuous random variable can only have a probability associated with an ', { id:'b1', answer:'interval', options:['interval','exact value','integer'] },
            ', never one exact value.'
          ]},
          { segments: [
            'A normal distribution is fully described by just two parameters: the ', { id:'b2', answer:'mean and standard deviation', options:['mean and standard deviation','median and range','minimum and maximum'] },
            '.'
          ]},
          { segments: [
            'The empirical rule states that about ', { id:'b3', answer:'68%', options:['68%','50%','75%'] },
            ' of data falls within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3.'
          ]},
          { segments: [
            'To find the probability associated with a specific value, first convert it to a ', { id:'b4', answer:'z-score', options:['z-score','percentile','parameter'] },
            ', then find the corresponding area under the standard normal curve.'
          ]},
          { segments: [
            'To work backward from a percentage to a value, you use the ', { id:'b5', answer:'inverse normal', options:['inverse normal','empirical rule','general multiplication rule'] },
            ' function to find the z-score first, then solve the z-score formula for the unknown.'
          ]},
          { segments: [
            'If a problem gives you two percentiles and BOTH the mean and standard deviation are unknown, you must set up ',
            { id:'b6', answer:'two equations', options:['two equations','one equation','no equations'] },
            ' and solve them as a system.'
          ]}
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards', label2: '',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: 'A curve that models the probability distribution of a continuous random variable; the total area underneath equals 1.', term: 'Density curve', detail: 'Area over any interval = the probability of that interval.' },
          { prompt: 'A continuous, symmetric, bell-shaped, unimodal density curve defined by just its mean and SD.', term: 'Normal distribution', detail: 'Heights, weights, test scores, and manufacturing measurements are commonly modeled this way.' },
          { prompt: 'The normal distribution with mean 0 and SD 1, built entirely from z-scores.', term: 'Standard normal distribution', detail: 'Any normal random variable can be converted to this using z = (x−μ)/σ.' },
          { prompt: '68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD.', term: 'The empirical rule (68-95-99.7 rule)', detail: 'Only applies to normal distributions.' },
          { prompt: 'Given a percentage, find the z-score or value it corresponds to.', term: 'Inverse normal', detail: 'The reverse of finding a probability from a known value — you start from the area instead.' },
          { prompt: 'The value with 90% of a distribution below it.', term: '90th percentile', detail: 'z ≈ 1.282 on any normal distribution.' },
          { prompt: 'A problem gives two percentiles, and both μ and σ are unknown.', term: 'Solve as a system of two equations', detail: 'Write z = (x−μ)/σ for each known point, then solve for μ and σ simultaneously.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz', label2: '',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'A continuous random variable can have a probability associated with:', opts: ['Nothing — continuous variables have no probabilities', 'Only its mean', 'Only one exact value at a time', 'An interval of values'], correct: 3, exp: 'Continuous random variables only have probabilities over intervals — never for one exact value.' },
          { q: 'A normal distribution is fully described by:', opts: ['Its five-number summary', 'Its minimum and maximum', 'Its median and range', 'Its mean and standard deviation'], correct: 3, exp: 'Just two parameters — mean (center) and standard deviation (spread) — define the entire curve.' },
          { q: 'By the empirical rule, approximately what percent of data falls within 2 standard deviations of the mean?', opts: ['95%', '68%', '99.7%', '50%'], correct: 0, exp: 'The 68-95-99.7 rule: 95% falls within 2 SD.' },
          { q: 'A normal distribution has mean 80, SD 5. What is the z-score for a value of 92?', opts: ['12', '2.4', '0.4', '87'], correct: 1, exp: 'z = (92−80)/5 = 12/5 = 2.4.' },
          { q: 'To find what value marks the 25th percentile of a normal distribution, you would use:', opts: ['The empirical rule only', 'The general multiplication rule', 'Inverse normal', 'The binomial formula'], correct: 2, exp: 'Working backward from a percentage to a value requires inverse normal.' },
          { q: 'A problem states "60% of values are below 45" for a normal distribution with unknown mean and known SD. What is your first step?', opts: ['Use the empirical rule directly', 'Assume the mean is 45', 'Find the z-score with 60% below it using inverse normal', 'Find the 60th value in a list'], correct: 2, exp: 'You need the z-score for that percentage first, before you can solve the z-score equation for the mean.' },
          { q: 'A distribution has mean 500, SD 100. What is P(X > 700)?', opts: ['Cannot be determined', 'z=2, P(Z>2)≈0.0228', 'z=2, P(Z>2)≈0.9772', 'z=7, P(Z>7)≈0'], correct: 1, exp: 'z = (700−500)/100 = 2. The area to the right of z=2 is about 2.28%.' },
          { q: 'A problem gives two different percentiles for a normal distribution where BOTH the mean and SD are unknown. What must you do?', opts: ['Set up and solve a system of two equations using both z-score equations', 'Assume SD = 1', 'It’s unsolvable with only two percentiles', 'Use the empirical rule to guess'], correct: 0, exp: 'Two unknowns require two equations — one z-score equation from each given percentile, solved simultaneously.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways', label2: '',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Continuous = intervals only', body: 'A continuous random variable never has a probability for one exact value — only for a range, found as area under its density curve.' },
          { num: 'ii.', title: 'Normal = just mean and SD', body: 'Two numbers fully describe the entire bell curve. Change either one, and the whole shape shifts or stretches.' },
          { num: 'iii.', title: 'Forward: z-score, then area', body: 'Given a value, find its z-score, then look up (or calculate) the area under the curve — that area is your probability.' },
          { num: 'iv.', title: 'Backward: area, then algebra', body: 'Given a percentage, use inverse normal to get a z-score, then plug it into z=(x−μ)/σ and solve for whatever’s missing — x, μ, or σ.' },
          { num: 'v.', title: 'Two unknowns need two equations', body: 'When both the mean and standard deviation are missing, one percentile isn’t enough — you need two, turned into a system of equations.' }
        ]
      }
    ],

    homework: {
      estTime: '~40 min',
      questions: [
        { q: 'A continuous random variable differs from a discrete one because:', opts: ['Its outcomes fall on an interval and can’t all be listed — probability only applies to intervals, not exact values', 'It can only take on whole number values', 'It never has a mean or standard deviation', 'Its outcomes can be listed'], correct: 0, exp: 'Continuous random variables have infinitely many possible values on an interval, so only interval probabilities make sense.' },
        { q: 'A normal distribution is described as:', opts: ['Skewed and bimodal', 'Discrete and uniform', 'Continuous, unimodal, bell-shaped, and symmetric', 'Always centered at zero'], correct: 2, exp: 'These four properties define the shape of a normal distribution.' },
        { q: 'Adult heights are approximately N(66, 3) — mean 66 inches, SD 3 inches. What is the z-score for a height of 72 inches?', opts: ['18', '6', '0.5', '2'], correct: 3, exp: 'z = (72−66)/3 = 6/3 = 2.' },
        { q: 'IQ scores are N(100, 15). What is P(IQ > 130)?', opts: ['z=−2, P≈0.9772', 'z=2, P≈0.9772', 'z=30, P≈0', 'z=2, P≈0.0228'], correct: 3, exp: 'z = (130−100)/15 = 2. P(Z>2) ≈ 0.0228, or 2.28%.' },
        { q: 'SAT section scores are N(500, 100). What is P(score < 650)?', opts: ['z=6.5, P≈1', 'z=1.5, P≈0.0668', 'z=−1.5, P≈0.9332', 'z=1.5, P≈0.9332'], correct: 3, exp: 'z = (650−500)/100 = 1.5. P(Z<1.5) ≈ 0.9332, or 93.3%.' },
        { q: 'Using the empirical rule, adult heights N(66,3): approximately what percent of adults are between 63 and 69 inches?', opts: ['95%', '68%', '50%', '99.7%'], correct: 1, exp: '63 and 69 are exactly mean ± 1 SD, which the empirical rule says contains about 68% of data.' },
        { q: 'Using the same distribution N(66,3), approximately what percent of adults are between 60 and 72 inches?', opts: ['68%', '99.7%', '50%', '95%'], correct: 3, exp: '60 and 72 are exactly mean ± 2 SD, which contains about 95% of data.' },
        { q: 'A normal distribution has mean 50, SD 8. What value marks the 95th percentile?', opts: ['z≈1.282, x≈60.26', 'z≈1.96, x≈65.68', 'z≈1.645, x≈63.16', 'z=2, x=66'], correct: 2, exp: 'The z-score with 95% below it is about 1.645. x = 50 + 1.645(8) ≈ 63.16.' },
        { q: 'A normal distribution has unknown mean μ, SD = 5. 30% of values are below 42. Find μ.', opts: ['z≈0.842, μ≈37.79', 'z≈0.524, μ≈39.38', 'z≈−0.524, μ≈39.38', 'z≈−0.524, μ≈44.62'], correct: 3, exp: 'The z-score with 30% below it is about −0.524. Solving −0.524 = (42−μ)/5 gives μ ≈ 44.62.' },
        { q: 'A normal distribution has mean 200, unknown SD. 10% of values are above 230. Find σ.', opts: ['z≈1.645, σ≈18.24', 'z≈0.10, σ≈300', 'z≈1.282, σ≈23.41', 'z≈1.96, σ≈15.31'], correct: 2, exp: '10% above 230 means 90% below it: z ≈ 1.282. Solving 1.282 = (230−200)/σ gives σ ≈ 23.41.' },
        { q: 'A manufacturing process produces bolts with length N(μ, 0.2 cm). 5% of bolts are longer than 10.4 cm. Find μ.', opts: ['z≈−1.645, μ≈10.73', 'z≈1.645, μ≈10.07', 'z≈1.282, μ≈10.14', 'z≈1.96, μ≈10.01'], correct: 1, exp: '5% above 10.4 means 95% below it: z ≈ 1.645. Solving 1.645 = (10.4−μ)/0.2 gives μ ≈ 10.07.' },
        { q: 'A light bulb lifetime is N(1200, σ) hours. 20% of bulbs last less than 1000 hours. Find σ.', opts: ['z≈−0.842, σ≈237.5', 'z≈0.842, σ≈237.5', 'z≈−0.842, σ≈168.4', 'z≈0.20, σ≈1000'], correct: 0, exp: 'The z-score with 20% below it is about −0.842. Solving −0.842 = (1000−1200)/σ gives σ ≈ 237.5.' },
        { q: 'A standardized test score is N(75, σ). The 90th percentile is a score of 92. Find σ.', opts: ['z≈1.282, σ≈13.26', 'z≈1.645, σ≈10.33', 'z≈0.90, σ≈18.9', 'z≈1.96, σ≈8.67'], correct: 0, exp: 'The z-score for the 90th percentile is about 1.282. Solving 1.282 = (92−75)/σ gives σ ≈ 13.26.' },
        { q: 'A distribution has both μ and σ unknown. The 40th percentile is 55, and the 70th percentile is 68. Which approach is correct?', opts: ['Assume σ=1 and solve for μ only', 'It cannot be solved without a third percentile', 'Set up z=(55−μ)/σ and z=(68−μ)/σ using the two corresponding z-scores, then solve the system', 'Use the empirical rule directly since two points are given'], correct: 2, exp: 'With two unknowns, you need the two equations formed from the two given percentiles, solved as a system.' },
        { q: 'Continuing the same scenario (40th percentile = 55, 70th percentile = 68): the z-scores are approximately −0.253 and 0.524. What is the approximate standard deviation?', opts: ['≈25.09', '≈16.71', '≈8.36', '≈13.0'], correct: 1, exp: 'From z=(x−μ)/σ: 55 = μ − 0.253σ and 68 = μ + 0.524σ. Subtracting the first from the second eliminates μ: 68 − 55 = 0.524σ − (−0.253σ) → 13 = 0.777σ → σ ≈ 16.71.' },
        { q: 'A normal distribution has mean 45, SD 6. What is P(39 < X < 57)?', opts: ['z=−1 to z=2, P≈0.8186', 'z=1 to z=2, P≈0.1359', 'z=−2 to z=1, P≈0.8186', 'z=−1 to z=1, P≈0.6827'], correct: 0, exp: 'z for 39 = (39−45)/6 = −1. z for 57 = (57−45)/6 = 2. P(−1<Z<2) ≈ 0.8186.' },
        { q: 'A quality control process rejects any part more than 2.5 SD from the mean. Approximately what percent of parts are rejected?', opts: ['About 5%', 'About 1.24%', 'About 0.3%', 'About 32%'], correct: 1, exp: 'P(|Z|>2.5) = 2 × P(Z>2.5) ≈ 2 × 0.0062 ≈ 0.0124, or about 1.24%.' },
        { q: 'Why can’t you calculate P(X = exactly 100) for a continuous random variable X?', opts: ['Because 100 is too large a number', 'Because a single exact value has zero width, so it corresponds to zero area under the density curve', 'Because continuous random variables don’t have means', 'Because probabilities can only be calculated for discrete variables'], correct: 1, exp: 'Probability for a continuous random variable is area under the curve — a single point has no width, so its "area" (and probability) is exactly 0.' },
        { q: 'A normal distribution has mean 60. A value of 60 corresponds to which percentile?', opts: ['50th', '0th', '100th', 'Cannot be determined without the SD'], correct: 0, exp: 'By symmetry, the mean is always exactly the median — the 50th percentile — for any normal distribution, regardless of the standard deviation.' },
        { q: 'Two normal distributions have the same mean but different standard deviations. How do their curves compare?', opts: ['They are identical', 'The one with the larger SD is taller and narrower', 'The one with the larger SD is shorter and more spread out; the one with the smaller SD is taller and more concentrated', 'Standard deviation does not affect the shape of a normal curve'], correct: 2, exp: 'A larger SD spreads the data out more, flattening and widening the curve; a smaller SD concentrates data near the mean, making the curve taller and narrower.' },
        { q: 'A problem states a value is at the "1st percentile" of a normal distribution. What does this mean?', opts: ['1% of values are below it, 99% are above it', '1% of values are above it', '99% of values are below it', 'The value equals the mean minus 1'], correct: 0, exp: 'The 1st percentile has exactly 1% of the distribution below it (and 99% above) — an extremely low value.' }
      ]
    }
  }
});

/* ============================================
   Topic 2.12 — Sampling Distributions
   Source: course transcript (Topic 2.12 lecture)
   ============================================ */

registerChapters({
  '2-12': {
    id: '2-12',
    code: 'Topic 2.12',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Sampling Distributions',
    cardSummary: 'A statistic is itself a random variable — draw the same size sample from a population over and over, and watch its own distribution take shape.',
    heroTitle: 'Even a <em>statistic</em><br>has a distribution.',
    heroSub: 'One sample gives you one number — a proportion, a mean. Take that same-size sample again and again, plot every result, and a whole new distribution appears: centered on the truth, and almost always approximately normal.',
    source: 'Topic 2.12 course video',
    estTime: '~35–45 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — Overview',
        heading: 'One truth. <span class="underline sample">Many samples.</span>',
        body: 'There is exactly one true population proportion or population mean. But every sample you could possibly draw gives its own statistic — and those statistics have a distribution all their own.',
        cards: [
          { roman: 'I.', title: 'A statistic is a random variable', body: 'Before you draw a sample, its statistic (p̂ or x̄) is unknown — a numerical outcome of a random process, exactly like any other random variable.', tags: ['p̂ = sample proportion','x̄ = sample mean'], accent: 'population' },
          { roman: 'II.', title: 'Simulate it to see it', body: 'Draw a sample, record the statistic, draw another, record it — repeat many times, and the accumulated dots reveal the sampling distribution’s center and shape.', tags: ['Centered at the truth','Approximately normal'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Vocabulary',
        heading: 'Every dot is <span class="underline teal">one whole sample</span>.',
        body: 'Tap a term you’ve got down — your checkmarks are saved so you can see what still needs review.',
        items: [
          { id: 'statistic-recap', term: 'Statistic', accent: 'population', body: 'Any numerical value that describes a sample — a sample proportion, a sample mean, a sample median, and more.' },
          { id: 'sampling-distribution', term: 'Sampling distribution', accent: 'population', body: 'The distribution of values of a statistic across ALL possible samples of a given size drawn from a given population.' },
          { id: 'sample-proportion', term: 'Sample proportion, p̂', accent: 'sample', body: 'The proportion of successes in one sample. Before that sample is drawn, p̂ is a random variable — it could come out higher or lower than the true population proportion p.' },
          { id: 'sample-mean', term: 'Sample mean, x̄', accent: 'sample', body: 'The mean of one sample. Before that sample is drawn, x̄ is a random variable — it could come out higher or lower than the true population mean μ.' },
          { id: 'sim-approx', term: 'Simulating a sampling distribution', accent: 'population', body: 'Since checking literally every possible sample is impossible, repeatedly drawing random samples and recording each statistic approximates what the true sampling distribution looks like.' },
          { id: 'shape-center', term: 'Shape and center (the big observation)', accent: 'sample', body: 'A sampling distribution is centered at the true population parameter, and its shape is approximately normal — even when the population itself is skewed.' }
        ]
      },

      /* ---------------- 3. SAMPLING DISTRIBUTION SIMULATOR ---------------- */
      {
        type: 'samplingsim', id: 'sim', label: 'Section 03 — Build One Yourself', label2: '',
        heading: 'Draw a sample. <span class="underline sample">Plot the dot. Repeat.</span>',
        body: 'Each "draw" below simulates one entire sample (of the stated size) from a population, computes that sample’s own statistic, and adds one dot to the growing sampling distribution. Draw a few one at a time, then try 100 at once and watch the shape emerge.',
        scenarios: [
          {
            id: 'bike', shortLabel: '🚲 Bike ownership (p̂)',
            title: '27% of Texas high schoolers own a bike — samples of 120',
            description: 'Population: 27% of Texas high school students own a bike (p = 0.27). Each draw simulates asking 120 random students and records the sample proportion p̂ who own one.',
            populationType: 'bernoulli', populationParam: { p: 0.27 }, n: 120,
            trueValue: 0.27, statLabel: 'Sample proportion', unit: '', decimals: 3, binWidth: 0.01
          },
          {
            id: 'squirrel', shortLabel: '🐿️ Squirrel weight (x̄)',
            title: 'Mean squirrel weight is 565 g — samples of 40 (population roughly normal)',
            description: 'Population: Pennsylvania squirrel weights average 565 g (roughly symmetric). Each draw simulates weighing 40 random squirrels and records the sample mean x̄.',
            populationType: 'normal', populationParam: { mean: 565, sd: 45 }, n: 40,
            trueValue: 565, statLabel: 'Sample mean', unit: ' g', decimals: 1, binWidth: 4
          },
          {
            id: 'teeth', shortLabel: '🪥 Teeth-brushing time (x̄)',
            title: 'Mean brushing time is 185 seconds — samples of 50 (population skewed right)',
            description: 'Population: teenagers brush their teeth for a mean of 185 seconds — but individual times are skewed right (a few very long outliers). Each draw simulates 50 teenagers and records the sample mean x̄.',
            populationType: 'exponential', populationParam: { mean: 185 }, n: 50,
            trueValue: 185, statLabel: 'Sample mean', unit: ' sec', decimals: 1, binWidth: 6
          }
        ]
      },

      /* ---------------- 4. WORKED EXAMPLES ---------------- */
      {
        type: 'examples', id: 'examples', label: 'Section 05 — Worked Examples', label2: '',
        heading: 'What does one dot <span class="underline teal">actually mean?</span>',
        body: 'The AP exam loves asking you to describe a sampling distribution in words — center, shape, and what one point on it represents. Click each one open.',
        items: [
          {
            q: 'Researchers know the true mean brushing time for teenagers is 185 seconds. 100 samples of size 50 were simulated, and each sample mean was plotted as a dot. Explain what each dot represents, then describe the resulting distribution and justify its shape.',
            fields: [
              { k: 'What each dot represents', v: 'Each dot is the sample mean (x̄) from ONE simulated sample of 50 teenagers — not one teenager’s time, but the average of 50 of them.' },
              { k: 'Center', v: 'The dots are centered around 185 seconds — which makes sense, since 185 is the true population mean, and most samples of 50 people should land close to the truth.' },
              { k: 'Shape', v: 'Approximately normal. Sample means far above or far below 185 are possible but unlikely, so they thin out symmetrically on both sides, producing that bell shape.' },
              { k: 'Important distinction', v: 'This picture is NOT the full sampling distribution — it’s only 100 simulated samples. The true sampling distribution would include every possible sample of size 50, but 100 simulations already approximate its shape well.' }
            ]
          },
          {
            q: 'A streaming company claims 60% of teenagers use their platform daily. If 200 samples of 150 teenagers each were simulated, describe what the resulting sampling distribution of p̂ would look like.',
            fields: [
              { k: 'Center', v: 'Centered around 0.60 (60%), since that’s the claimed true population proportion — most samples of 150 should land close to it.' },
              { k: 'Shape', v: 'Approximately normal — proportions far from 60% (like 10% or 90%) are technically possible from a random sample, but extremely unlikely, so they’d appear only rarely at the thin edges.' },
              { k: 'Common misconception to avoid', v: 'Every value from 0% to 100% is technically possible in a single sample — but "possible" does not mean "equally likely." A sample proportion of 90% is possible but would be a huge outlier if the truth is really 60%.' }
            ]
          },
          {
            q: 'Why can a sampling distribution be simulated (by drawing many samples) but never fully constructed by hand?',
            fields: [
              { k: 'What "fully constructed" would require', v: 'Literally every possible sample of that exact size would need to be drawn from the population and have its statistic recorded — for most real populations, an astronomically large (often technically infinite) number of possible samples.' },
              { k: 'Why simulation works as a substitute', v: 'A large number of simulated samples (100, 300, 1000...) already reveals the sampling distribution’s center and approximate shape clearly, even without drawing literally every possible sample.' },
              { k: 'The payoff', v: 'This is exactly why simulation — and eventually, formulas that skip simulation entirely — become such powerful tools in the units that follow.' }
            ]
          }
        ]
      },

      /* ---------------- 5. GUIDED NOTES (fill in the blank) ---------------- */
      {
        type: 'fill-blank', id: 'guided-notes', label: 'Section 06 — Guided Notes', label2: '',
        heading: 'Fill in the <span class="underline sample">guided notes</span>.',
        body: 'Same idea as the printable guided notes — but pick each answer from a dropdown.',
        items: [
          { segments: [
            'A sampling distribution of a statistic is the distribution of values of that statistic for ', { id:'b1', answer:'all possible samples', options:['all possible samples','one specific sample','the entire population'] },
            ' of a given size from a given population.'
          ]},
          { segments: [
            'Before a sample is actually drawn, its sample proportion or sample mean is considered a ', { id:'b2', answer:'random variable', options:['random variable','fixed parameter','statistic that never changes'] },
            ', because its exact value is not yet known.'
          ]},
          { segments: [
            'A sampling distribution can be approximated by ', { id:'b3', answer:'simulation', options:['simulation','guessing','surveying the entire population once'] },
            ' — repeatedly drawing random samples, recording each one’s statistic, and observing the resulting pattern.'
          ]},
          { segments: [
            'A sampling distribution tends to be centered at the ', { id:'b4', answer:'true population parameter', options:['true population parameter','sample size','largest observed value'] },
            ' — most samples land close to the truth, with fewer landing far away.'
          ]},
          { segments: [
            'Even when the population itself is skewed, the sampling distribution of a sample statistic tends to be approximately ', { id:'b5', answer:'normal', options:['normal','skewed the same direction as the population','uniform'] },
            ' in shape.'
          ]},
          { segments: [
            'A single dot on a simulated sampling distribution represents the statistic from ', { id:'b6', answer:'one entire sample', options:['one entire sample','one individual from the population','the whole population at once'] },
            ', not from a single individual.'
          ]}
        ]
      },

      /* ---------------- 6. FLASHCARDS ---------------- */
      {
        type: 'flashcards', id: 'flashcards', label: 'Section 07 — Flashcards', label2: '',
        heading: 'See the clue. <span class="underline sample">Name the term.</span>',
        items: [
          { prompt: '27% of Texas students own a bike — this exact number, one fixed value for the whole population.', term: 'Population parameter (p)', detail: 'The one true value — never changes, and is usually unknown in real research.' },
          { prompt: 'A researcher samples 120 students and finds 30 own a bike — this varies sample to sample.', term: 'Sample statistic (p̂)', detail: 'A random variable before the sample is drawn — its value depends on which 120 students happened to get picked.' },
          { prompt: 'A picture built by drawing hundreds of samples of size 120 and plotting each one’s p̂.', term: 'Sampling distribution (or its simulated approximation)', detail: 'Shows every possible value of the statistic, and which ones are more likely.' },
          { prompt: 'Why does a histogram of many simulated p̂ values cluster around 0.27 instead of being spread evenly from 0 to 1?', term: 'Because the sampling distribution is centered at the true population parameter', detail: 'Samples close to the truth are far more common than samples far from it.' },
          { prompt: 'A population of tree diameters is skewed right — but the histogram of 1,000 simulated sample means still looks like a bell curve.', term: 'The sampling distribution is approximately normal, even from a skewed population', detail: 'One of the most surprising and powerful facts in this topic.' },
          { prompt: 'One dot on a sampling-distribution histogram — what does it represent?', term: 'The statistic (p̂ or x̄) from one entire sample', detail: 'Never one individual — always a summary of a whole sample.' }
        ]
      },

      /* ---------------- 7. QUIZ ---------------- */
      {
        type: 'quiz', id: 'quiz', label: 'Section 08 — Quiz', label2: '',
        heading: 'Test yourself. <span class="underline">No pressure.</span>',
        questions: [
          { q: 'A sampling distribution shows:', opts: ['Only the mean and standard deviation of the population', 'The value of one specific sample', 'The entire population, one individual at a time', 'The distribution of a statistic across all possible samples of a given size'], correct: 3, exp: 'A sampling distribution captures every possible value the statistic could take across all possible samples of that size.' },
          { q: 'Before a random sample is drawn, its sample proportion p̂ is best described as:', opts: ['A fixed parameter', 'Always equal to the population proportion', 'A number that never changes between samples', 'A random variable — its value is unknown until the sample is drawn'], correct: 3, exp: 'p̂ is a random variable because its exact value depends on which individuals happen to end up in the sample.' },
          { q: 'Why can a sampling distribution typically only be approximated through simulation rather than built exactly by hand?', opts: ['Because computers cannot do statistics', 'Because the number of all possible samples of a given size from a real population is far too large to draw them all', 'Because sampling distributions do not really exist', 'Because simulation is required by the AP exam rules'], correct: 1, exp: 'Actually drawing literally every possible sample is generally not feasible, so a large number of simulated samples is used to approximate the true sampling distribution.' },
          { q: 'A population proportion is p = 0.45. Which sample proportion from a large sample would be the LEAST surprising?', opts: ['p̂ = 0.44', 'p̂ = 0.90', 'p̂ = 0.05', 'p̂ = 0.99'], correct: 0, exp: 'Sample proportions close to the true population proportion (0.45) are the most common outcomes — 0.44 is barely different from 0.45.' },
          { q: 'A sampling distribution of sample means is built from a population that is heavily skewed right. What shape would you expect the sampling distribution itself to have?', opts: ['Also heavily skewed right, matching the population', 'Uniform, since skewness cancels out', 'Approximately normal, even though the population is skewed', 'Impossible to determine without more information'], correct: 2, exp: 'One of the most important facts about sampling distributions: they tend toward an approximately normal shape, even when the underlying population is skewed.' },
          { q: 'On a simulated sampling distribution of sample means, what does each individual dot represent?', opts: ['One individual measurement from the population', 'The standard deviation of one sample', 'The mean of one entire sample', 'The true population mean'], correct: 2, exp: 'Each dot summarizes one whole sample — its sample mean — not a single individual’s value.' },
          { q: 'A sampling distribution of a statistic will be centered at:', opts: ['The sample size, n', 'The true population parameter', 'Zero, always', 'Whatever the first sample happened to produce'], correct: 1, exp: 'Sampling distributions are centered at the true population parameter — the value the statistic is estimating.' },
          { q: 'A researcher draws only 5 samples and looks at the resulting 5 dots. Is this the sampling distribution?', opts: ['No — 5 samples is far too few to represent all possible samples; it only begins to approximate the true sampling distribution', 'Yes, but only if the population is normal', 'Yes, any number of samples gives the exact sampling distribution', 'No — sampling distributions cannot be simulated at all'], correct: 0, exp: 'The true sampling distribution includes every possible sample. Just 5 simulated samples is nowhere near enough to reveal its full shape — many more are needed for a good approximation.' }
        ]
      },

      /* ---------------- 8. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 09 — Takeaways', label2: '',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'A statistic is a random variable, too', body: 'Before you draw a sample, you don’t know what p̂ or x̄ will be — exactly like any other random variable, its value comes from a random process.' },
          { num: 'ii.', title: 'The sampling distribution ≠ one sample', body: 'It’s the distribution of the statistic across every possible sample of that size — a single sample only gives you one dot on that much bigger picture.' },
          { num: 'iii.', title: 'Simulation approximates what you can’t build by hand', body: 'Drawing hundreds or thousands of simulated samples reveals the sampling distribution’s center and shape well, without needing literally every possible sample.' },
          { num: 'iv.', title: 'Centered at the truth', body: 'Sampling distributions cluster around the true population parameter — values far from the truth are possible, but increasingly rare the farther out you go.' },
          { num: 'v.', title: 'Normal-shaped, even from a skewed population', body: 'This is the big surprise: even if individual values in the population are skewed, the distribution of sample statistics tends to be approximately normal.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A sampling distribution is the distribution of:', opts: ['One individual’s data value', 'A statistic across all possible samples of a given size', 'The entire population', 'Only the largest possible sample'], correct: 1, exp: 'It captures every possible value a statistic could take across all samples of that size.' },
        { q: 'The true proportion of adults who exercise daily is p = 0.35. This value is called a:', opts: ['Statistic', 'Sample proportion', 'Population parameter', 'Sampling distribution'], correct: 2, exp: 'A single fixed value describing the entire population is a parameter, not a statistic.' },
        { q: 'A researcher samples 200 adults and finds 78 exercise daily. This value (78/200 = 0.39) is called a:', opts: ['Sample statistic (specifically, a sample proportion)', 'A random process', 'A sampling distribution', 'Population parameter'], correct: 0, exp: 'A number computed from a sample — like this sample proportion — is a statistic.' },
        { q: 'Before a specific sample of 200 adults is actually collected, its resulting sample proportion is best described as:', opts: ['A known, fixed number', 'A random variable, since its value is not yet known', 'Always exactly equal to 0.35', 'Not a meaningful quantity'], correct: 1, exp: 'Until the sample is actually drawn, the resulting statistic is unknown — a random variable.' },
        { q: 'Why is it typically impossible to construct a sampling distribution by listing literally every possible sample?', opts: ['Because the number of possible samples of a given size is generally far too large to enumerate', 'Because populations never have a fixed size', 'Because sample statistics are always identical', 'Because computers cannot generate random numbers'], correct: 0, exp: 'For most real populations, the number of distinct possible samples of a given size is enormous — simulation approximates the result instead.' },
        { q: 'A sampling distribution is simulated by:', opts: ['Randomly guessing the shape of the distribution', 'Surveying the entire population exactly once', 'Calculating the population parameter directly with a formula', 'Repeatedly drawing random samples of the same size, recording each one’s statistic, and observing the resulting pattern'], correct: 3, exp: 'Each simulated sample contributes one data point (its statistic) to the growing picture of the sampling distribution.' },
        { q: 'A sampling distribution of sample means, built from many samples of size 60, will be centered at approximately:', opts: ['Zero', 'The sample size, 60', 'The true population mean', 'The largest sample mean observed'], correct: 2, exp: 'Sampling distributions are centered at the true population parameter they are estimating.' },
        { q: 'A population of home sale prices is heavily skewed right (a few very expensive homes). A sampling distribution of sample means from this population will most likely be:', opts: ['Also heavily skewed right, matching the population exactly', 'Impossible to simulate', 'Uniform across all possible values', 'Approximately normal in shape'], correct: 3, exp: 'Sampling distributions of sample means tend toward an approximately normal shape, even when the underlying population is skewed.' },
        { q: 'On a simulated sampling distribution of sample proportions, one specific dot sits far to the right, near 0.95, while the true population proportion is 0.40. What does this suggest?', opts: ['The true population proportion must actually be 0.95', 'The simulation is broken', 'This particular sample happened to be an unusual, low-probability outcome, but it is still possible', 'All samples must produce exactly 0.40'], correct: 2, exp: 'Values far from the true parameter are possible in any individual sample — just increasingly unlikely the farther they are from the truth.' },
        { q: 'A teacher draws 500 simulated samples of size 40 from a population with known mean 72. Roughly where would you expect most of the 500 sample-mean dots to cluster?', opts: ['Spread perfectly evenly from the lowest to highest possible value', 'Clustered near 40, the sample size', 'Clustered near 0', 'Clustered closely around 72, thinning out on both sides'], correct: 3, exp: 'Sample means cluster around the true population mean, with fewer and fewer samples landing farther from it.' },
        { q: 'Which of these correctly distinguishes a "statistic" from a "parameter"?', opts: ['They are exactly the same thing', 'A statistic describes a population; a parameter describes a sample', 'A parameter can change, but a statistic never does', 'A statistic describes a sample; a parameter describes a population'], correct: 3, exp: 'Statistic = from a sample (varies sample to sample). Parameter = the one true, fixed value for the population.' },
        { q: 'A single simulated sample of size 30 produces a sample mean of x̄ = 118, while the true population mean is μ = 120. What does this small difference suggest?', opts: ['The population mean must actually be 118', 'This is a completely normal, unsurprising result — sample means vary somewhat from the true mean by chance', 'The sample must have been collected incorrectly', 'This proves the population is not normally distributed'], correct: 1, exp: 'Sample means naturally vary from sample to sample — landing close to (but not exactly on) the true mean is exactly what’s expected.' },
        { q: 'Why does simulating 1,000 samples give a better approximation of a sampling distribution than simulating just 10 samples?', opts: ['It doesn’t — 10 samples is always just as good', 'More simulated samples more closely approximate the full range and pattern of all possible samples, revealing the true center and shape more clearly', 'Simulating more samples changes the true population parameter', '1,000 samples guarantees a perfectly uniform distribution'], correct: 1, exp: 'The true sampling distribution includes every possible sample; more simulated samples get closer to representing that complete picture.' },
        { q: 'A claim states that 55% of voters support a proposal. In a simulated sampling distribution of sample proportions from many samples of size 300, which outcome would be most common?', opts: ['Sample proportions very close to 0% or 100%', 'Sample proportions very close to 55%', 'Sample proportions uniformly spread across every possible value', 'Sample proportions exactly equal to 55% every single time'], correct: 1, exp: 'Most samples should land close to the true population proportion; extreme values become increasingly rare.' },
        { q: 'What is the key difference between "the sampling distribution" and "a simulation of 300 samples used to approximate it"?', opts: ['The true sampling distribution includes every possible sample; the simulation is only an approximation built from a limited number of them', 'The simulation is always more accurate than the true sampling distribution', 'There is no difference — they are always identical', 'A simulation cannot approximate a sampling distribution at all'], correct: 0, exp: 'A simulation is a practical stand-in that approximates the true (and often impossible to fully construct) sampling distribution.' },
        { q: 'A population of test-taking times is symmetric and bell-shaped already. What shape would you expect the sampling distribution of sample means to have?', opts: ['Also approximately normal', 'Skewed, since sampling always introduces skew', 'Uniform', 'Impossible to determine'], correct: 0, exp: 'If the population is already approximately normal, the sampling distribution of the mean will be approximately normal too — this holds regardless of the population’s original shape.' },
        { q: 'A sample of size 500 is drawn from a population where the true proportion is p = 0.5. Which sample proportion would be considered surprising?', opts: ['p̂ = 0.49', 'p̂ = 0.52', 'p̂ = 0.85', 'p̂ = 0.51'], correct: 2, exp: 'A sample proportion of 0.85 is far from the true 0.5 — a large, surprising deviation, unlike the other options which are all very close to 0.5.' },
        { q: 'What does it mean to say a sample statistic is an unbiased indicator of the population parameter, based on what this topic demonstrated?', opts: ['The sampling distribution is centered at the true parameter, so on average, samples tend to estimate it correctly even though any one sample may be off', 'The statistic and the parameter are always numerically identical', 'Every single sample will produce exactly the parameter value', 'Bias has nothing to do with sampling distributions'], correct: 0, exp: 'While no single sample is guaranteed to match the parameter exactly, the sampling distribution being centered at the true value means samples tend to estimate it correctly "on average."' },
        { q: 'A quality control team wants to estimate the true defect rate in a factory. Why would examining the sampling distribution of sample proportions (from repeated samples) be more informative than looking at just one sample?', opts: ['It would not be more informative — one sample is always sufficient', 'It changes the true defect rate', 'Sampling distributions only apply to sample means, never proportions', 'It reveals how much sample proportions naturally vary from sample to sample, showing how much a single sample result could be trusted'], correct: 3, exp: 'Seeing the spread and pattern of many possible sample results shows how reliable — or how variable — any single sample’s result is likely to be.' },
        { q: 'A histogram of 1,000 simulated sample means is unimodal, roughly symmetric, and centered near the known population mean. What does this confirm about the sampling distribution?', opts: ['That the population must also be exactly this shape', 'That an error occurred in the simulation', 'That it behaves as expected for a sampling distribution — centered at the true parameter with an approximately normal shape', 'That the sample size must have been too small'], correct: 2, exp: 'This is precisely the expected behavior of a sampling distribution: centered at the population parameter, with an approximately normal shape.' }
      ]
    }
  }
});

/* ============================================
   Unit 2 Review, Part 1 — Two Categorical Variables
   and Probability
   Source: Unit 2 Review (Part 1) course video — a
   cumulative recap of Topics 2.1-2.7, not a new topic.
   Vocabulary is pulled directly from the verified
   Topic 2.1-2.7 definitions; the homework is freshly
   written to span all seven topics.
   ============================================ */

registerChapters({
  'review-u2a': {
    id: 'review-u2a',
    code: 'Review',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Unit 2 Review, Part 1 — Categorical Data & Probability',
    cardSummary: 'Two-way tables through independent events, all in one glossary — plus a cumulative homework mixing all seven topics.',
    heroTitle: 'From one table<br>to <em>every rule</em>.',
    heroSub: 'Everything from a single two-way table (2.1) to conditional and independent events (2.6-2.7) builds on the same idea: count, divide, and compare. This page pulls every term into one list and mixes Topics 2.1-2.7 into one homework set.',
    source: 'Unit 2 Review, Part 1 course video',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — The Big Picture',
        heading: 'One table. <span class="underline teal">Every rule comes from it.</span>',
        body: 'Topics 2.1 through 2.7 are really one long build: start with a two-way table, and every later rule is just a new way of dividing its numbers.',
        cards: [
          { roman: 'I.', title: 'Read the table (2.1–2.2)', body: 'Two-way tables, side-by-side/segmented bars, and mosaic plots show association. Marginal, joint, and conditional relative frequency are all just "which total do I divide by."', tags: ['Two-way tables','Marginal / joint / conditional'], accent: 'population' },
          { roman: 'II.', title: 'Turn it into probability (2.3–2.7)', body: 'Simulation estimates probability by repetition; the equally-likely formula calculates it directly. Mutually exclusive, conditional, independent, and union rules are all built on the same P(A ∩ B) foundation.', tags: ['P(E) = favorable/total','P(A|B)','Independent & union rules'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Every Term, One List',
        heading: 'Topics <span class="underline teal">2.1–2.7</span>, one glossary.',
        body: 'Every term from Topics 2.1–2.7, pulled from the verified definitions you’ve already studied. Tap any you’ve got locked in.',
        items: [
          { id: "2-1-two-way-table", term: "Topic 2.1 — Two-way table", accent: "population", body: "A table that summarizes two categorical variables at once — also called a <strong>contingency table</strong>. One variable runs down the rows, the other across the columns." },
          { id: "2-1-frequency", term: "Topic 2.1 — Frequency", accent: "sample", body: "A fancy word for <strong>count</strong> — how many individuals fall into a cell, row, or column." },
          { id: "2-1-relative-frequency", term: "Topic 2.1 — Relative frequency", accent: "population", body: "A fancy word for <strong>proportion</strong> — a frequency divided by a total, so it’s always between 0 and 1 (or 0% and 100%)." },
          { id: "2-1-side-by-side-bar-graph", term: "Topic 2.1 — Side-by-side bar graph", accent: "sample", body: "Bars for each category of one variable are placed next to each other, grouped by the levels of the other variable — good for comparing raw counts." },
          { id: "2-1-segmented-bar-graph", term: "Topic 2.1 — Segmented bar graph", accent: "population", body: "Each bar is stacked to 100% and sliced into segments showing the proportion of each category of the other variable — like a candy bar cut into pieces." },
          { id: "2-1-mosaic-plot", term: "Topic 2.1 — Mosaic plot", accent: "sample", body: "A segmented bar graph where each bar’s <strong>width</strong> is also proportional to how many individuals it represents — width shows group size, height shows proportion." },
          { id: "2-1-association", term: "Topic 2.1 — Association", accent: "population", body: "Two variables are associated if knowing the outcome of one changes what you’d expect for the other — the proportions shift when you add a condition." },
          { id: "2-1-independent-no-association", term: "Topic 2.1 — Independent (no association)", accent: "sample", body: "Two variables are independent if knowing one tells you nothing about the other — the proportions stay the same no matter the condition." },
          { id: "2-2-statistic", term: "Topic 2.2 — Statistic", accent: "population", body: "Any numerical piece of information that comes from a <strong>sample</strong> — including every proportion pulled from a two-way table." },
          { id: "2-2-marginal-relative-frequency", term: "Topic 2.2 — Marginal relative frequency", sym: "P(A)", accent: "sample", body: "A row total or column total divided by the grand total. Notation: <span class=\"mono\">P(A)</span> — asks about only one variable." },
          { id: "2-2-joint-relative-frequency", term: "Topic 2.2 — Joint relative frequency", sym: "P(A∩B)", accent: "population", body: "An interior cell divided by the grand total. Notation: <span class=\"mono\">P(A ∩ B)</span> or \"P(A and B)\" — the ∩ symbol means \"and.\"" },
          { id: "2-2-conditional-relative-frequency", term: "Topic 2.2 — Conditional relative frequency", sym: "P(A|B)", accent: "sample", body: "A cell divided by just its row or column total. Notation: <span class=\"mono\">P(A | B)</span> — the bar means \"given,\" and whatever’s after it always restricts the denominator." },
          { id: "2-2-condition-restriction", term: "Topic 2.2 — Condition / restriction", accent: "population", body: "The \"given\" part of a conditional question — it can appear anywhere in the sentence, but in notation it always goes after the bar, and it always shrinks your denominator." },
          { id: "2-2-expected-count-under-no-association", term: "Topic 2.2 — Expected count under no association", accent: "sample", body: "What a cell *would* be if the two variables had zero effect on each other — found by applying the overall marginal proportion to a row or column total." },
          { id: "2-3-random-process", term: "Topic 2.3 — Random process", accent: "population", body: "A process that generates results determined by chance — you know the possible outcomes, but not which one will happen on any given trial." },
          { id: "2-3-outcome", term: "Topic 2.3 — Outcome", accent: "sample", body: "The result of <strong>one</strong> trial of a random process — one coin toss, one free throw, one selected store." },
          { id: "2-3-event", term: "Topic 2.3 — Event", accent: "population", body: "A collection of outcomes — like \"3, 4, or 5 heads\" out of 5 tosses, or \"all 8 stores are from the US.\"" },
          { id: "2-3-probability", term: "Topic 2.3 — Probability", accent: "sample", body: "The <strong>long-run relative frequency</strong> of an outcome or event — the proportion of times it happens, but only after a very large number of trials." },
          { id: "2-3-simulation", term: "Topic 2.3 — Simulation", accent: "population", body: "A way to model a random process with numbers so the simulated outcomes closely match what would happen in real life — used to estimate a probability without actually repeating the real process." },
          { id: "2-3-trial", term: "Topic 2.3 — Trial", accent: "sample", body: "One full repetition of the event being simulated — e.g., one full set of 5 simulated coin tosses counts as one trial." },
          { id: "2-3-law-of-large-numbers", term: "Topic 2.3 — Law of large numbers", accent: "population", body: "As the number of trials increases, the long-run relative frequency gets closer and closer to the true probability. Ten trials tell you almost nothing — thousands do." },
          { id: "2-4-sample-space", term: "Topic 2.4 — Sample space", accent: "sample", body: "The set of all possible non-overlapping outcomes of a random process. Conventionally written inside curly braces, like {1, 2, 3, 4, 5, 6}." },
          { id: "2-4-equally-likely-outcomes", term: "Topic 2.4 — Equally likely outcomes", accent: "population", body: "Outcomes in the sample space that all have the exact same probability of occurring — the condition required to use P(E) = favorable ÷ total." },
          { id: "2-4-p-e", term: "Topic 2.4 — P(E)", accent: "sample", body: "Notation for \"the probability of event E.\" The P stands for probability, percentage, or proportion — they’re all the same idea here. It is never multiplication." },
          { id: "2-4-probability-range", term: "Topic 2.4 — Probability range", accent: "population", body: "Every probability is a number from 0 to 1 inclusive (0% to 100%). Nothing can be negative or over 100%." },
          { id: "2-4-complement", term: "Topic 2.4 — Complement", accent: "sample", body: "The probability that an event does <em>not</em> happen: P(not E) = 1 − P(E). Written as P(Eᶜ), P(E′), or P(not E) — all mean the same thing." },
          { id: "2-4-unlikely-under-50", term: "Topic 2.4 — \"Unlikely\" ≠ under 50%", accent: "population", body: "A common misconception: 50% is NOT the cutoff between likely and unlikely. Statisticians usually don’t call something unlikely until it drops below 5%, sometimes even 1%." },
          { id: "2-5-joint-probability", term: "Topic 2.5 — Joint probability", accent: "sample", body: "The probability that events A and B both occur at the same time — P(A ∩ B), also written P(A and B). Pictured as the region where two Venn diagram circles overlap." },
          { id: "2-5-intersection", term: "Topic 2.5 — Intersection (∩)", accent: "population", body: "The mathematical symbol for \"and.\" P(A ∩ B) is read \"the probability of A and B.\" You’re never required to use the symbol — the word \"and\" works too." },
          { id: "2-5-mutually-exclusive-disjoint", term: "Topic 2.5 — Mutually exclusive (disjoint)", accent: "sample", body: "Two events that cannot occur at the same time. If A and B are mutually exclusive, P(A ∩ B) = 0 — there is zero overlap between them." },
          { id: "2-5-venn-diagram", term: "Topic 2.5 — Venn diagram", accent: "population", body: "A picture of two (or more) events as circles. Overlapping circles show a joint probability greater than 0; circles with no overlap show mutually exclusive events." },
          { id: "2-6-conditional-probability", term: "Topic 2.6 — Conditional probability", accent: "sample", body: "The probability that event A occurs, taking into account that event B has already occurred. Written P(A | B), read \"the probability of A given B.\"" },
          { id: "2-6-conditional-probability-formula", term: "Topic 2.6 — Conditional probability formula", sym: "P(A|B)", accent: "population", body: "P(A | B) = P(A ∩ B) ÷ P(B). The numerator is the joint probability; the denominator is only the condition." },
          { id: "2-6-general-multiplication-rule", term: "Topic 2.6 — General multiplication rule", accent: "sample", body: "Rearranging the conditional formula: P(A ∩ B) = P(A) × P(B | A). Use this to find the probability of a chain of events — the first event, then the second, adjusted for the first having occurred." },
          { id: "2-6-tree-diagram", term: "Topic 2.6 — Tree diagram", accent: "population", body: "A branching diagram where each branch is labeled with a conditional probability, and each endpoint (leaf) represents a joint probability — the product of the branches leading to it." },
          { id: "2-7-independent-events", term: "Topic 2.7 — Independent events", accent: "sample", body: "Events A and B are independent if and only if knowing A occurred does not change the probability of B — formally, P(A | B) = P(A) (equivalently, P(B | A) = P(B))." },
          { id: "2-7-p-a-b-p-a-p-b", term: "Topic 2.7 — P(A ∩ B) = P(A) × P(B)", accent: "population", body: "Valid ONLY when A and B are known to be independent — it’s the general multiplication rule simplified, since P(B | A) just becomes P(B) when nothing changes." },
          { id: "2-7-union-p-a-b", term: "Topic 2.7 — Union — P(A ∪ B)", accent: "sample", body: "The probability that A occurs, or B occurs, or both occur. The ∪ symbol means \"or,\" never \"and\" — that’s a very common mix-up." },
          { id: "2-7-addition-rule-union-formula", term: "Topic 2.7 — Addition rule (union formula)", sym: "P(A∪B)", accent: "population", body: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Subtracting the overlap once stops it from being double-counted — not to erase it." },
          { id: "2-7-neither-the-complement-of-the-union", term: "Topic 2.7 — \"Neither\" = the complement of the union", accent: "sample", body: "P(neither A nor B) = 1 − P(A ∪ B). Knowing a union probability gives you this one for free, the same way any probability gives you its complement." }
        ]
      },

      /* ---------------- 3. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 03 — Walk In Knowing This',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Marginal, joint, conditional = which total', body: 'Marginal divides by the grand total for one variable. Joint divides by the grand total for "and." Conditional divides by just one row or column total — the restriction always shrinks the denominator.' },
          { num: 'ii.', title: 'Association = the proportion shifts', body: 'Compare a marginal proportion to a conditional one. If adding the condition changes the number, the variables are associated. If it doesn’t, they’re independent.' },
          { num: 'iii.', title: 'Simulation estimates; the formula calculates', body: 'When outcomes are equally likely, P(E) = favorable ÷ total gives an exact answer. Simulation is for when there’s no clean formula — and it only gets accurate after many, many trials (the law of large numbers).' },
          { num: 'iv.', title: 'Mutually exclusive means P(A ∩ B) = 0, exactly', body: 'Not "unlikely," not "rare" — exactly zero. The box method (fill a 2×2 table from partial information) is the fastest way to check.' },
          { num: 'v.', title: 'Independent unlocks the shortcut; union always subtracts the overlap', body: 'P(A ∩ B) = P(A) × P(B) only works once independence is confirmed. P(A ∪ B) = P(A) + P(B) − P(A ∩ B) always subtracts the overlap once, so it isn’t double-counted.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A two-way table crosses two categorical variables. A cell in the interior of the table (not a margin) represents:', opts: ['A marginal frequency', 'A conditional probability, always', 'The grand total', 'A joint frequency — the count for one specific combination of both variables'], correct: 3, exp: 'Interior cells show the combination ("and") of one row category and one column category — a joint frequency.' },
        { q: 'A mosaic plot differs from a plain segmented bar graph because it adds:', opts: ['Bar width proportional to group size', 'Color', 'A third categorical variable', 'Exact percentages only'], correct: 0, exp: 'A mosaic plot is a segmented bar graph with width also encoding how many individuals each bar represents.' },
        { q: '250 people were surveyed: 150 rooted for the home team, and of those, 90 bought food. What is P(bought food | home team)?', opts: ['90/150', '90/250', '150/250', '150/90'], correct: 0, exp: 'The condition "home team" restricts the denominator to the 150 home-team fans, not all 250.' },
        { q: 'Using the same data, what is P(home team ∩ bought food)?', opts: ['90/150', '250/90', '150/250', '90/250'], correct: 3, exp: 'A joint probability always divides by the grand total: 90/250.' },
        { q: 'A two-way table shows P(tardy) = 34% overall, but P(tardy | bus) = 25%. Since conditioning on "bus" changed the proportion, mode of transportation and tardiness are:', opts: ['Associated', 'Independent', 'Mutually exclusive', 'Impossible to compare'], correct: 0, exp: 'A shift between the marginal (34%) and conditional (25%) proportions is exactly what an association looks like — if the numbers had stayed the same instead, that would signal independence.' },
        { q: 'A simulation is used to estimate a probability when:', opts: ['The outcomes are equally likely and a formula is available', 'There is no clean formula, or the situation is too complex to calculate directly', 'You want an instantly exact answer', 'The random process only needs one trial'], correct: 1, exp: 'Simulation is a substitute for a formula — useful specifically when no clean formula applies.' },
        { q: 'The law of large numbers states that as the number of trials increases:', opts: ['The result of the very next trial becomes predictable', 'Probabilities stop being random', 'The long-run relative frequency gets closer and closer to the true probability', 'Ten trials become sufficient for any estimate'], correct: 2, exp: 'More trials bring the estimated (simulated) probability closer to the true theoretical probability — but no small number of trials guarantees accuracy.' },
        { q: 'A jar has 4 yellow, 5 red, and 6 green marbles. If all outcomes are equally likely, what is P(red)?', opts: ['5/11', '5/15', '4/15', '6/15'], correct: 1, exp: 'Favorable (5 red) over total (4+5+6=15 marbles): 5/15.' },
        { q: 'If P(rain) = 0.3, what is the complement, P(no rain)?', opts: ['0.3', '0', '1.3', '0.7'], correct: 3, exp: 'Complement = 1 − P(E) = 1 − 0.3 = 0.7.' },
        { q: 'Two events A and B are mutually exclusive. What must be true?', opts: ['P(A ∩ B) = 0', 'P(A ∩ B) = 1', 'P(A) = P(B)', 'P(A ∪ B) = 0'], correct: 0, exp: 'Mutually exclusive (disjoint) events have zero probability of occurring together.' },
        { q: 'A 2×2 table has grand total 100, row totals 40 and 60, column totals 55 and 45, and a top-left cell of 25. What is the bottom-left cell?', opts: ['35', '15', '30', '20'], correct: 2, exp: 'The left column totals 55, and its top cell is 25, so the bottom-left cell is 55 − 25 = 30.' },
        { q: 'The conditional probability formula P(A | B) equals:', opts: ['P(A) × P(B)', 'P(B) ÷ P(A ∩ B)', 'P(A ∪ B) ÷ P(B)', 'P(A ∩ B) ÷ P(B)'], correct: 3, exp: 'Joint probability divided by just the probability of the condition.' },
        { q: 'The general multiplication rule states P(A ∩ B) equals:', opts: ['P(A) × P(B | A)', 'P(A) + P(B)', 'P(A | B) × P(B | A)', 'P(A) ÷ P(B)'], correct: 0, exp: 'Multiply the first event’s probability by the second event’s probability, conditioned on the first having happened.' },
        { q: 'On a probability tree, two different branches both end in the same outcome. To find that outcome’s total probability, you should:', opts: ['Multiply the two branch probabilities together', 'Add the two branch (joint) probabilities together', 'Use only the larger branch', 'Ignore one of the branches'], correct: 1, exp: 'Different paths landing on the same outcome get added; a single path’s probabilities get multiplied.' },
        { q: 'Events A and B are independent if and only if:', opts: ['P(A ∩ B) = 0', 'P(A | B) = P(A)', 'P(A ∪ B) = 1', 'P(A) = P(B)'], correct: 1, exp: 'Independence means the condition changes nothing — P(A | B) equals the plain marginal P(A).' },
        { q: 'P(A ∩ B) = P(A) × P(B) is valid:', opts: ['Always, for any two events', 'Only if P(A) = P(B)', 'Only if A and B are mutually exclusive', 'Only once A and B are known to be independent'], correct: 3, exp: 'This shortcut is a simplified case of the general multiplication rule, valid only once independence is confirmed.' },
        { q: 'The union symbol ∪ means:', opts: ['Or', 'Given', 'And', 'Not'], correct: 0, exp: '∪ means "or" — A, or B, or both.' },
        { q: 'P(A) = 0.4, P(B) = 0.3, P(A ∩ B) = 0.1. What is P(A ∪ B)?', opts: ['0.7', '0.5', '0.6', '0.8'], correct: 2, exp: 'P(A ∪ B) = 0.4 + 0.3 − 0.1 = 0.6.' },
        { q: 'If P(A ∪ B) = 0.75, what is P(neither A nor B)?', opts: ['0.75', '0.25', '0.5', 'Cannot be determined'], correct: 1, exp: '"Neither" is the complement of the union: 1 − 0.75 = 0.25.' },
        { q: 'A survey of 150 people: 70 male, 80 female. 22 males ordered iced coffee. What is P(male ∩ iced coffee)?', opts: ['22/70', '70/150', '22/150', '22/80'], correct: 2, exp: 'Joint probability divides by the grand total: 22/150.' },
        { q: 'A disease affects 1% of a population. A test is 95% accurate for those with the disease and gives a false positive 8% of the time. What is P(tests positive)?', opts: ['0.95', '0.01 + 0.08 = 0.09', '0.01×0.95 + 0.99×0.08 = 0.0887', '0.95 − 0.08 = 0.87'], correct: 2, exp: 'Add the two joint probabilities (has disease ∩ positive) and (no disease ∩ positive): 0.0095 + 0.0792 = 0.0887.' },
        { q: 'Using the same disease-testing scenario (P(positive) = 0.0887), what is P(has disease | tests positive)?', opts: ['0.0095 ÷ 0.0887 ≈ 0.107', '0.01', '0.95', '0.08'], correct: 0, exp: 'P(disease | positive) = P(disease ∩ positive) ÷ P(positive) = 0.0095 / 0.0887 ≈ 10.7%.' },
        { q: 'At a school, 30% of students are in math club, 25% in science club, 12% in both. What is P(at least one club)?', opts: ['55%', '30%', '43%', '12%'], correct: 2, exp: 'Union formula: 0.30 + 0.25 − 0.12 = 0.43, or 43%.' },
        { q: 'Using the same club data, are math club and science club membership independent?', opts: ['Yes, since 12% is a small number', 'No — P(science) = 25% but P(science | math) = 12/30 = 40%, which is different', 'Yes, because they are mutually exclusive', 'Cannot be determined'], correct: 1, exp: 'The conditional (40%) does not equal the marginal (25%), so the two are not independent.' },
        { q: 'Why is a Venn diagram with two circles that do not touch used to represent mutually exclusive events?', opts: ['Because it looks nicer', 'Venn diagrams cannot represent mutually exclusive events', 'Because independent events are always drawn this way', 'Because zero overlap visually represents P(A ∩ B) = 0'], correct: 3, exp: 'No overlapping area between the circles is the visual equivalent of a zero joint probability.' }
      ]
    }
  }
});

/* ============================================
   Unit 2 Review, Part 2 — Random Variables and
   Distributions
   NOTE: unlike every other review chapter, no original
   review video exists for this portion (the source
   material only included a "Part 1" covering Topics
   2.1-2.7). This chapter is synthesized directly from
   the verified Topic 2.8-2.12 content above — same
   vocabulary, same formulas, freshly written homework —
   rather than transcribed from a video.
   ============================================ */

registerChapters({
  'review-u2b': {
    id: 'review-u2b',
    code: 'Review',
    unitName: 'Unit 2 — Exploring Two-Variable Data',
    title: 'Unit 2 Review, Part 2 — Random Variables & Distributions',
    cardSummary: 'Random variables through sampling distributions, all in one glossary — plus a cumulative homework mixing all five topics.',
    heroTitle: 'From one variable<br>to <em>every sample</em>.',
    heroSub: 'A random variable has a mean and an SD (2.8-2.9). Two special cases — binomial (2.10) and normal (2.11) — get their own shortcut formulas. And a statistic drawn from a sample turns out to have a distribution all its own (2.12). This page pulls every term into one list and mixes Topics 2.8-2.12 into one homework set.',
    source: 'Synthesized from Topics 2.8–2.12 — no original review video covers this portion',
    estTime: '~30–40 min',

    sections: [
      /* ---------------- 1. OVERVIEW ---------------- */
      {
        type: 'overview', id: 'overview', label: 'Section 01 — The Big Picture',
        heading: 'Every distribution here <span class="underline teal">has a mean and an SD</span>.',
        body: 'Topics 2.8 through 2.12 build upward: a general random variable, two special formula-driven cases, and then a distribution built from a statistic instead of an individual.',
        cards: [
          { roman: 'I.', title: 'Any random variable (2.8–2.9)', body: 'μ_X = Σx·P(x) and σ_X = √[Σ(x−μ)²·P(x)] work for any discrete random variable. Transform it with Y = a + bX: both addition and multiplication shift the mean, but only multiplication changes the spread.', tags: ['μ = Σx·P(x)','σ_Y = |b|·σ_X'], accent: 'population' },
          { roman: 'II.', title: 'Two special formulas, then one big idea (2.10–2.12)', body: 'Binomial (B.I.T.S.) and normal (mean + SD alone) each get their own shortcut formulas. Then the biggest twist of the unit: a sample statistic is itself a random variable, with its own sampling distribution — centered at the truth, and approximately normal.', tags: ['Binomial: μ=np','Normal: 68-95-99.7','Sampling distributions'], accent: 'sample' }
        ]
      },

      /* ---------------- 2. VOCAB ---------------- */
      {
        type: 'vocab', id: 'vocab', label: 'Section 02 — Every Term, One List',
        heading: 'Topics <span class="underline teal">2.8–2.12</span>, one glossary.',
        body: 'Every term from Topics 2.8–2.12, pulled from the verified definitions you’ve already studied. Tap any you’ve got locked in.',
        items: [
          { id: "2-8-random-variable", term: "Topic 2.8 — Random variable", sym: "X", accent: "population", body: "A variable whose value is a numerical outcome of a random process. Written with a capital letter (X, W, T...) — if the outcome isn’t a number, it isn’t a random variable." },
          { id: "2-8-discrete-random-variable", term: "Topic 2.8 — Discrete random variable", accent: "sample", body: "Outcomes are listable and finite — usually whole numbers you could count, like the number of races a horse wins." },
          { id: "2-8-continuous-random-variable", term: "Topic 2.8 — Continuous random variable", accent: "population", body: "Outcomes fall anywhere on an interval — infinite and unlistable, since decimals go on forever. Usually something measured, like height or time." },
          { id: "2-8-probability-distribution", term: "Topic 2.8 — Probability distribution", accent: "sample", body: "A table, graph, or function that shows the probability associated with every possible value of a discrete random variable." },
          { id: "2-8-p-x-x", term: "Topic 2.8 — P(X = x)", accent: "population", body: "Notation for \"the probability that random variable X takes the specific value x.\" Capital X is the variable; lowercase x is one specific outcome." },
          { id: "2-8-sum-to-one-rule", term: "Topic 2.8 — Sum-to-one rule", accent: "sample", body: "The probabilities in a discrete probability distribution must add up to exactly 1 (100%) — if they don’t, something was built incorrectly." },
          { id: "2-9-parameter", term: "Topic 2.9 — Parameter", accent: "population", body: "A numerical value measuring a characteristic of a probability distribution (or a population) — a single fixed value, like the mean weight of every giraffe on Earth." },
          { id: "2-9-mean-of-a-random-variable", term: "Topic 2.9 — Mean of a random variable", sym: "μ_X, E(X)", accent: "sample", body: "Also called the expected value — the long-run average outcome after a huge number of repetitions. For discrete X: μ_X = Σ x·P(x) — multiply every outcome by its probability, then add." },
          { id: "2-9-standard-deviation-of-a-random-variable", term: "Topic 2.9 — Standard deviation of a random variable", sym: "σ_X, SD(X)", accent: "population", body: "The typical amount a single outcome deviates from the mean, in the long run. For discrete X: σ_X = √[Σ(x−μ)²·P(x)]." },
          { id: "2-9-continuous-rvs-no-formula", term: "Topic 2.9 — Continuous RVs: no formula", accent: "sample", body: "You cannot list every outcome of a continuous random variable, so μ and σ can’t be computed from a table — they’re measured from many, many repetitions and simply given to you." },
          { id: "2-9-linear-transformation-rules", term: "Topic 2.9 — Linear transformation rules", accent: "population", body: "For Y = a + bX: the mean transforms as μ_Y = a + b·μ_X (both addition and multiplication matter). The standard deviation transforms as σ_Y = |b|·σ_X — addition/subtraction of a constant does NOT affect spread." },
          { id: "2-10-binomial-random-variable", term: "Topic 2.10 — Binomial random variable", accent: "sample", body: "A discrete random variable that counts the number of successes in n repeated independent trials, each with only two outcomes (success/failure) and a constant probability of success p." },
          { id: "2-10-b-i-t-s", term: "Topic 2.10 — B.I.T.S.", accent: "population", body: "The four conditions to check: Binary outcomes, Independent trials, fixed number of Trials (n), and probability of Success stays the same every trial." },
          { id: "2-10-10-condition", term: "Topic 2.10 — 10% condition", accent: "sample", body: "Sampling without replacement technically breaks independence — but if your sample is less than 10% of the population, the probability barely changes, and treating it as binomial is still fine." },
          { id: "2-10-combinations-c", term: "Topic 2.10 — Combinations, ₙCₓ", accent: "population", body: "The number of ways to choose x successes out of n trials, order not mattering. Never compute the factorial formula by hand — Desmos or a calculator’s nCr function does it instantly." },
          { id: "2-10-binomial-probability-formula", term: "Topic 2.10 — Binomial probability formula", sym: "P(X=x)", accent: "sample", body: "P(X = x) = ₙCₓ · pˣ · (1−p)ⁿ⁻ˣ. Combinations (how many ways) × probability of x successes × probability of the remaining failures." },
          { id: "2-10-binomial-mean-and-sd", term: "Topic 2.10 — Binomial mean and SD", sym: "μ=np, σ=√(npq)", accent: "population", body: "μ_X = np and σ_X = √[np(1−p)] — but only for a confirmed binomial random variable. These shortcuts don’t apply to any other discrete random variable." },
          { id: "2-11-density-curve", term: "Topic 2.11 — Density curve", accent: "sample", body: "A curve modeling the probability distribution of a continuous random variable. The total area underneath is always 1 (100%); the area over any interval is that interval’s probability." },
          { id: "2-11-normal-distribution", term: "Topic 2.11 — Normal distribution", accent: "population", body: "A continuous, unimodal, bell-shaped, symmetric density curve, fully described by just its mean (center) and standard deviation (spread). Heights, weights, test scores, and manufacturing measurements are all commonly modeled by it." },
          { id: "2-11-standard-normal-distribution", term: "Topic 2.11 — Standard normal distribution", accent: "sample", body: "A normal distribution with mean 0 and standard deviation 1 — the version built purely from z-scores, usable for any normal random variable once converted." },
          { id: "2-11-empirical-rule-68-95-99-7", term: "Topic 2.11 — Empirical rule (68–95–99.7)", accent: "population", body: "For any normal distribution: about 68% of data is within 1 SD of the mean, 95% within 2 SD, and 99.7% within 3 SD." },
          { id: "2-11-inverse-normal", term: "Topic 2.11 — Inverse normal", accent: "sample", body: "Working backward: given an area (percentile), find the corresponding z-score or value — the opposite direction of finding a probability from a value." },
          { id: "2-11-percentile", term: "Topic 2.11 — Percentile", accent: "population", body: "The value with a given percentage of the distribution below it. The 90th percentile has 90% of values below it, 10% above." },
          { id: "2-12-statistic", term: "Topic 2.12 — Statistic", accent: "sample", body: "Any numerical value that describes a sample — a sample proportion, a sample mean, a sample median, and more." },
          { id: "2-12-sampling-distribution", term: "Topic 2.12 — Sampling distribution", accent: "population", body: "The distribution of values of a statistic across ALL possible samples of a given size drawn from a given population." },
          { id: "2-12-sample-proportion-p", term: "Topic 2.12 — Sample proportion, p̂", accent: "sample", body: "The proportion of successes in one sample. Before that sample is drawn, p̂ is a random variable — it could come out higher or lower than the true population proportion p." },
          { id: "2-12-sample-mean-x", term: "Topic 2.12 — Sample mean, x̄", accent: "population", body: "The mean of one sample. Before that sample is drawn, x̄ is a random variable — it could come out higher or lower than the true population mean μ." },
          { id: "2-12-simulating-a-sampling-distribution", term: "Topic 2.12 — Simulating a sampling distribution", accent: "sample", body: "Since checking literally every possible sample is impossible, repeatedly drawing random samples and recording each statistic approximates what the true sampling distribution looks like." },
          { id: "2-12-shape-and-center-the-big-observation", term: "Topic 2.12 — Shape and center (the big observation)", accent: "population", body: "A sampling distribution is centered at the true population parameter, and its shape is approximately normal — even when the population itself is skewed." }
        ]
      },

      /* ---------------- 3. TAKEAWAYS ---------------- */
      {
        type: 'takeaways', id: 'takeaways', label: 'Section 03 — Walk In Knowing This',
        heading: 'Five things to <span class="underline gold">actually remember</span>.',
        items: [
          { num: 'i.', title: 'Mean = multiply then add; SD = the same, one layer deeper', body: 'μ_X = Σx·P(x). σ_X = √[Σ(x−μ)²·P(x)]. Every discrete random variable works this way — binomial just gives you a faster shortcut once B.I.T.S. is confirmed.' },
          { num: 'ii.', title: 'Multiplication changes spread; addition/subtraction never does', body: 'For Y = a + bX: μ_Y = a + b·μ_X always, but σ_Y = |b|·σ_X — a constant shift moves the center without changing how spread out the values are.' },
          { num: 'iii.', title: 'B.I.T.S. before you use np and √[np(1−p)]', body: 'Binary, Independent, fixed Trials, Same probability — all four, confirmed, before those shortcut formulas are valid.' },
          { num: 'iv.', title: 'Normal = just mean and SD, plus 68-95-99.7', body: 'Two numbers define the whole curve. Forward: value → z-score → area (probability). Backward: percentage → z-score (inverse normal) → value.' },
          { num: 'v.', title: 'A statistic has its own distribution', body: 'A sampling distribution is centered at the true population parameter and is approximately normal — even when the population itself is skewed. This idea is the foundation for everything in the units that follow.' }
        ]
      }
    ],

    homework: {
      estTime: '~30 min',
      questions: [
        { q: 'A random variable is only a random variable if its outcomes are:', opts: ['Categories or words', 'Always between 0 and 1', 'Always whole numbers', 'Numbers'], correct: 3, exp: 'A random variable turns the outcome of a random process into a number — categorical outcomes don’t qualify.' },
        { q: 'A discrete probability distribution has P(0)=0.3, P(1)=0.5, P(2)=x. What must x equal?', opts: ['0.2', '0.5', '0.8', '1.0'], correct: 0, exp: 'All probabilities must sum to 1: x = 1 − 0.3 − 0.5 = 0.2.' },
        { q: 'A random variable X has values 1, 2, 3 with probabilities 0.2, 0.5, 0.3. What is μ_X?', opts: ['2.0', '2.1', '2.2', '1.9'], correct: 1, exp: 'μ_X = 1(0.2) + 2(0.5) + 3(0.3) = 0.2 + 1.0 + 0.9 = 2.1.' },
        { q: 'For a continuous random variable, μ and σ are typically:', opts: ['Calculated with Σx·P(x)', 'Given directly, since the outcomes can’t be listed', 'Always equal to 0 and 1', 'Impossible to know'], correct: 1, exp: 'Continuous random variables have infinitely many possible values, so μ and σ come from measurement, not a sum formula.' },
        { q: 'A random variable has μ = 8, σ = 2. If Y = 5X (pure multiplication), what is μ_Y?', opts: ['13', '10', '40', '8'], correct: 2, exp: 'μ_Y = 5 × 8 = 40.' },
        { q: 'Using the same transformation Y = 5X, what is σ_Y?', opts: ['2', '40', '7', '10'], correct: 3, exp: 'σ_Y = |5| × 2 = 10 — multiplication scales the standard deviation.' },
        { q: 'A random variable has σ = 6. If Y = X + 20 (pure addition, no multiplication), what is σ_Y?', opts: ['26', '6', '20', '120'], correct: 1, exp: 'Adding a constant shifts every value equally but never changes the spread: σ_Y = σ_X = 6.' },
        { q: 'Which of B.I.T.S. is violated if a shooter’s free-throw probability increases after every made shot?', opts: ['Binary', 'Fixed number of trials', 'Independent trials and same probability', 'None — it’s still binomial'], correct: 2, exp: 'A probability that changes based on prior outcomes breaks both independence and the constant-probability requirement.' },
        { q: 'For a binomial random variable with n=6, p=0.5, how many ways can exactly 2 successes occur?', opts: ['12', '15', '30', '6'], correct: 1, exp: '₆C₂ = 15.' },
        { q: 'A binomial random variable has n=5, p=0.4. What is P(X=3)?', opts: ['0.6000', '0.4000', '0.0640', '0.2304'], correct: 3, exp: 'P(3) = ₅C₃(0.4)³(0.6)² = 10 × 0.064 × 0.36 = 0.2304.' },
        { q: 'For a binomial random variable with n=10, p=0.4, what is the mean?', opts: ['0.4', '4', '10', '6'], correct: 1, exp: 'μ = np = 10 × 0.4 = 4.' },
        { q: 'Using the same distribution (n=10, p=0.4), what is the standard deviation?', opts: ['1.549', '2.4', '0.24', '4'], correct: 0, exp: 'σ = √[np(1−p)] = √(10×0.4×0.6) = √2.4 ≈ 1.549.' },
        { q: 'A normal distribution has mean 70, SD 10. What is the z-score for a value of 85?', opts: ['8.5', '15', '0.15', '1.5'], correct: 3, exp: 'z = (85−70)/10 = 1.5.' },
        { q: 'By the empirical rule, approximately what percent of a normal distribution falls within 1 standard deviation of the mean?', opts: ['68%', '50%', '95%', '99.7%'], correct: 0, exp: 'The 68-95-99.7 rule: about 68% falls within 1 SD.' },
        { q: 'A normal distribution has mean 500, SD 50. What is P(X > 560)?', opts: ['z=1.2, P≈0.885', 'z=1.2, P≈0.115', 'z=0.6, P≈0.274', 'z=12, P≈0'], correct: 1, exp: 'z = (560−500)/50 = 1.2. The area to the right of z=1.2 is about 11.5%.' },
        { q: 'To find the value marking the 95th percentile of a normal distribution, you would use:', opts: ['The binomial formula', 'The general multiplication rule', 'The empirical rule only', 'Inverse normal'], correct: 3, exp: 'Working backward from a percentage to a value requires inverse normal — the z-score for the 95th percentile is about 1.645.' },
        { q: 'A sampling distribution is the distribution of:', opts: ['One individual data value', 'Only the population parameter', 'The entire population', 'A statistic across all possible samples of a given size'], correct: 3, exp: 'It captures every possible value a statistic could take across all samples of that size.' },
        { q: 'A sampling distribution will be centered at approximately:', opts: ['The true population parameter', 'The sample size', 'Zero', 'Whatever the first sample happened to produce'], correct: 0, exp: 'Sampling distributions cluster around the true population parameter they’re estimating.' },
        { q: 'A population is heavily skewed. What shape would the sampling distribution of the sample mean most likely have?', opts: ['Approximately normal', 'Also heavily skewed, matching the population', 'Uniform', 'Impossible to determine'], correct: 0, exp: 'One of the most important results in this unit: sampling distributions tend toward approximately normal, even from a skewed population.' },
        { q: 'Before a sample is drawn, its sample proportion p̂ is best described as:', opts: ['A fixed, known parameter', 'Always exactly equal to the population proportion', 'A random variable, since its value is not yet known', 'Impossible to compute'], correct: 2, exp: 'Until a sample is actually collected, p̂’s value is unknown — a random variable, exactly like any other.' },
        { q: 'Why are μ=np and σ=√[np(1−p)] invalid for a random variable that is not confirmed binomial?', opts: ['They are never valid for any distribution', 'They only work when p=0.5', 'These shortcuts are derived specifically from the fixed-trials, binary, independent, constant-probability structure of a binomial random variable', 'They require a continuous random variable'], correct: 2, exp: 'Without the B.I.T.S. structure, there is no valid "n" or "p" for these formulas to use — the general discrete random variable formulas would be needed instead.' },
        { q: 'A quiz score distribution is N(75, 8). What is P(score < 67)?', opts: ['z=−1, P≈0.841', 'z=1, P≈0.841', 'z=−1, P≈0.159', 'z=8, P≈0'], correct: 2, exp: 'z = (67−75)/8 = −1. P(Z < −1) ≈ 0.159, or 15.9%.' },
        { q: 'A random variable has μ = 12, σ = 3. If Y = 2X − 5 (both multiplication and subtraction), what are μ_Y and σ_Y?', opts: ['μ_Y=19, σ_Y=6', 'μ_Y=19, σ_Y=1', 'μ_Y=24, σ_Y=6', 'μ_Y=19, σ_Y=−1'], correct: 0, exp: 'μ_Y = 2(12) − 5 = 19. σ_Y = |2| × 3 = 6 — the −5 shifts the mean but never affects the spread.' },
        { q: 'A researcher simulates 1,000 samples from a population with known proportion p = 0.45 and plots each sample’s p̂. What shape and center should the resulting histogram have?', opts: ['Skewed, centered near 0', 'Uniform across 0 to 1', 'Approximately normal, centered near 0.45', 'Bimodal, centered at 0 and 1'], correct: 2, exp: 'Sampling distributions of a sample proportion are centered at the true population proportion and approximately normal in shape.' }
      ]
    }
  }
});

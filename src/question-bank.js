export const legacyExam = {
  "date": "2026-11-29T08:30:00+05:30",
  "target": 150,
  "maxScore": 204,
  "sectionMinutes": 40,
  "sections": [
    {
      "id": "VARC",
      "name": "Verbal Ability & Reading Comprehension",
      "questions": 24,
      "max": 72
    },
    {
      "id": "DILR",
      "name": "Data Interpretation & Logical Reasoning",
      "questions": 22,
      "max": 66
    },
    {
      "id": "QA",
      "name": "Quantitative Ability",
      "questions": 22,
      "max": 66
    }
  ]
};
export const legacySyllabus = {
  "VARC": [
    [
      "RC: Central idea & structure",
      "rc-main"
    ],
    [
      "RC: Inference",
      "rc-inference"
    ],
    [
      "RC: Author tone & stance",
      "rc-tone"
    ],
    [
      "RC: Detail / evidence",
      "rc-detail"
    ],
    [
      "RC: Argument & assumption",
      "rc-argument"
    ],
    [
      "RC: Application / implication",
      "rc-application"
    ],
    [
      "RC: Philosophy & abstract",
      "rc-philosophy"
    ],
    [
      "RC: Economics / society",
      "rc-econ"
    ],
    [
      "RC: Science / technology",
      "rc-science"
    ],
    [
      "RC: History / culture",
      "rc-history"
    ],
    [
      "Para summary",
      "va-summary"
    ],
    [
      "Paragraph completion",
      "va-completion"
    ],
    [
      "Odd sentence out",
      "va-odd"
    ],
    [
      "Para jumbles / ordering",
      "va-order"
    ]
  ],
  "DILR": [
    [
      "Arrangements & ordering",
      "lr-arrange"
    ],
    [
      "Scheduling",
      "lr-schedule"
    ],
    [
      "Selection & distribution",
      "lr-distribution"
    ],
    [
      "Games & tournaments",
      "lr-games"
    ],
    [
      "Routes, networks & graphs",
      "lr-network"
    ],
    [
      "Binary logic / truth-lie",
      "lr-binary"
    ],
    [
      "Venn / set logic",
      "lr-sets"
    ],
    [
      "Tables & missing data",
      "di-tables"
    ],
    [
      "Bar / line / mixed charts",
      "di-charts"
    ],
    [
      "Caselets",
      "di-caselets"
    ],
    [
      "Ratios, shares & growth",
      "di-ratios"
    ],
    [
      "Optimization / constraints",
      "lr-optimize"
    ]
  ],
  "QA": [
    [
      "Percentages",
      "qa-percent"
    ],
    [
      "Profit, loss & discount",
      "qa-pl"
    ],
    [
      "Ratio & proportion",
      "qa-ratio"
    ],
    [
      "Averages",
      "qa-average"
    ],
    [
      "Mixtures & alligation",
      "qa-mixture"
    ],
    [
      "Time, speed & distance",
      "qa-tsd"
    ],
    [
      "Time & work / pipes",
      "qa-work"
    ],
    [
      "Simple & compound interest",
      "qa-interest"
    ],
    [
      "Linear equations",
      "qa-linear"
    ],
    [
      "Quadratics",
      "qa-quadratic"
    ],
    [
      "Inequalities & modulus",
      "qa-ineq"
    ],
    [
      "Functions",
      "qa-functions"
    ],
    [
      "Logarithms",
      "qa-logs"
    ],
    [
      "Sequences / progressions",
      "qa-series"
    ],
    [
      "Number systems",
      "qa-numbers"
    ],
    [
      "Remainders / divisibility",
      "qa-remainder"
    ],
    [
      "Geometry: triangles & circles",
      "qa-geometry"
    ],
    [
      "Mensuration",
      "qa-mensuration"
    ],
    [
      "Coordinate geometry",
      "qa-coordinate"
    ],
    [
      "Permutations & combinations",
      "qa-pnc"
    ],
    [
      "Probability",
      "qa-probability"
    ],
    [
      "Set theory",
      "qa-sets"
    ]
  ]
};
export const questionBank = [
  {
    "id": "v1",
    "section": "VARC",
    "topic": "rc-main",
    "type": "MCQ",
    "passage": "Recommendation systems are often criticized for narrowing attention: if a platform learns that a reader likes economic history, it may keep supplying more of the same. Yet the older alternative was not pure serendipity. Newspaper editors, booksellers and teachers also filtered what people encountered. The distinction is not between filtered and unfiltered worlds, but between different filtering rules. Algorithmic systems can, in principle, be designed to reserve some attention for novelty, disagreement or low-probability material. The deeper issue is that optimization requires an objective. A system optimized only for immediate engagement will treat surprise as useful only when it prolongs attention. A system optimized for intellectual range would need to value encounters whose benefit may be delayed and difficult to measure. Thus, the debate about recommendation is partly a debate about measurement: what can be counted quickly tends to become what systems learn to maximize.",
    "q": "Which statement best captures the central argument?",
    "options": [
      "Algorithms uniquely destroyed a previously unfiltered information environment.",
      "Recommendation quality depends less on whether filtering exists than on what objective the filtering system optimizes.",
      "Immediate engagement is always incompatible with intellectual discovery.",
      "Human editors are more objective than algorithmic systems."
    ],
    "answer": 1,
    "solution": "The passage contrasts filtering rules and argues that the key issue is the objective being optimized."
  },
  {
    "id": "v2",
    "section": "VARC",
    "topic": "rc-inference",
    "type": "MCQ",
    "passage": "Recommendation systems are often criticized for narrowing attention: if a platform learns that a reader likes economic history, it may keep supplying more of the same. Yet the older alternative was not pure serendipity. Newspaper editors, booksellers and teachers also filtered what people encountered. The distinction is not between filtered and unfiltered worlds, but between different filtering rules. Algorithmic systems can, in principle, be designed to reserve some attention for novelty, disagreement or low-probability material. The deeper issue is that optimization requires an objective. A system optimized only for immediate engagement will treat surprise as useful only when it prolongs attention. A system optimized for intellectual range would need to value encounters whose benefit may be delayed and difficult to measure. Thus, the debate about recommendation is partly a debate about measurement: what can be counted quickly tends to become what systems learn to maximize.",
    "q": "Which inference follows most strongly?",
    "options": [
      "A metric that is easy to measure can disproportionately shape system behavior.",
      "Novel content always lowers engagement.",
      "Serendipity cannot be engineered.",
      "Recommendation systems should remove personalization."
    ],
    "answer": 0,
    "solution": "The final sentence explicitly links quick measurability with what systems learn to maximize."
  },
  {
    "id": "v3",
    "section": "VARC",
    "topic": "rc-detail",
    "type": "MCQ",
    "passage": "Recommendation systems are often criticized for narrowing attention: if a platform learns that a reader likes economic history, it may keep supplying more of the same. Yet the older alternative was not pure serendipity. Newspaper editors, booksellers and teachers also filtered what people encountered. The distinction is not between filtered and unfiltered worlds, but between different filtering rules. Algorithmic systems can, in principle, be designed to reserve some attention for novelty, disagreement or low-probability material. The deeper issue is that optimization requires an objective. A system optimized only for immediate engagement will treat surprise as useful only when it prolongs attention. A system optimized for intellectual range would need to value encounters whose benefit may be delayed and difficult to measure. Thus, the debate about recommendation is partly a debate about measurement: what can be counted quickly tends to become what systems learn to maximize.",
    "q": "The reference to newspapers, booksellers and teachers primarily serves to:",
    "options": [
      "argue that older media had superior objectives",
      "show that filtering predates algorithms",
      "prove human curation is random",
      "claim education is a recommendation system"
    ],
    "answer": 1,
    "solution": "Those examples undermine the filtered-versus-unfiltered framing by showing older systems also filtered exposure."
  },
  {
    "id": "v4",
    "section": "VARC",
    "topic": "rc-application",
    "type": "MCQ",
    "passage": "Recommendation systems are often criticized for narrowing attention: if a platform learns that a reader likes economic history, it may keep supplying more of the same. Yet the older alternative was not pure serendipity. Newspaper editors, booksellers and teachers also filtered what people encountered. The distinction is not between filtered and unfiltered worlds, but between different filtering rules. Algorithmic systems can, in principle, be designed to reserve some attention for novelty, disagreement or low-probability material. The deeper issue is that optimization requires an objective. A system optimized only for immediate engagement will treat surprise as useful only when it prolongs attention. A system optimized for intellectual range would need to value encounters whose benefit may be delayed and difficult to measure. Thus, the debate about recommendation is partly a debate about measurement: what can be counted quickly tends to become what systems learn to maximize.",
    "q": "Which design choice best reflects the author’s preferred framing?",
    "options": [
      "Maximize click-through rate only.",
      "Disable all personalization.",
      "Reserve a measured share of recommendations for useful novelty and evaluate longer-term outcomes.",
      "Show only content the user has already liked."
    ],
    "answer": 2,
    "solution": "The passage argues for objectives that include novelty and delayed intellectual benefit."
  },
  {
    "id": "v5",
    "section": "VARC",
    "topic": "rc-main",
    "type": "MCQ",
    "passage": "Cities are commonly warmer than nearby rural areas because asphalt, concrete and dark roofs absorb solar energy and release it slowly, while vegetation that would otherwise cool the air through evapotranspiration is sparse. This “urban heat island” effect is often discussed as if the remedy were simply to plant more trees. Trees are valuable, but the geometry of streets, the reflectivity of roofs, building density, wind corridors and nighttime heat release also matter. A dense canopy can cool pedestrians during the day yet, in some configurations, reduce nighttime ventilation. Effective heat policy therefore requires neighborhood-scale measurement rather than a citywide average. The hottest blocks are frequently those where heat exposure overlaps with poor housing, limited shade and outdoor work, making heat not only a meteorological problem but also an infrastructure and equity problem.",
    "q": "The passage mainly argues that urban heat mitigation should:",
    "options": [
      "focus exclusively on planting trees",
      "use citywide temperature averages",
      "treat heat as a neighborhood-scale systems problem involving design and equity",
      "prioritize nighttime temperature only"
    ],
    "answer": 2,
    "solution": "The author expands the problem beyond trees to geometry, materials, ventilation, local measurement and equity."
  },
  {
    "id": "v6",
    "section": "VARC",
    "topic": "rc-inference",
    "type": "MCQ",
    "passage": "Cities are commonly warmer than nearby rural areas because asphalt, concrete and dark roofs absorb solar energy and release it slowly, while vegetation that would otherwise cool the air through evapotranspiration is sparse. This “urban heat island” effect is often discussed as if the remedy were simply to plant more trees. Trees are valuable, but the geometry of streets, the reflectivity of roofs, building density, wind corridors and nighttime heat release also matter. A dense canopy can cool pedestrians during the day yet, in some configurations, reduce nighttime ventilation. Effective heat policy therefore requires neighborhood-scale measurement rather than a citywide average. The hottest blocks are frequently those where heat exposure overlaps with poor housing, limited shade and outdoor work, making heat not only a meteorological problem but also an infrastructure and equity problem.",
    "q": "Why might a dense tree canopy have mixed effects?",
    "options": [
      "Trees absorb no solar radiation.",
      "It can provide daytime shade while sometimes reducing nighttime ventilation.",
      "It increases roof reflectivity.",
      "It eliminates outdoor work."
    ],
    "answer": 1,
    "solution": "This daytime/nighttime trade-off is stated directly."
  },
  {
    "id": "v7",
    "section": "VARC",
    "topic": "rc-argument",
    "type": "MCQ",
    "passage": "Cities are commonly warmer than nearby rural areas because asphalt, concrete and dark roofs absorb solar energy and release it slowly, while vegetation that would otherwise cool the air through evapotranspiration is sparse. This “urban heat island” effect is often discussed as if the remedy were simply to plant more trees. Trees are valuable, but the geometry of streets, the reflectivity of roofs, building density, wind corridors and nighttime heat release also matter. A dense canopy can cool pedestrians during the day yet, in some configurations, reduce nighttime ventilation. Effective heat policy therefore requires neighborhood-scale measurement rather than a citywide average. The hottest blocks are frequently those where heat exposure overlaps with poor housing, limited shade and outdoor work, making heat not only a meteorological problem but also an infrastructure and equity problem.",
    "q": "Which finding would most strengthen the author’s policy recommendation?",
    "options": [
      "Two neighborhoods with the same citywide average show sharply different nighttime heat and vulnerability.",
      "Rural areas are cooler than cities.",
      "Trees require water.",
      "Concrete is widely used in construction."
    ],
    "answer": 0,
    "solution": "Neighborhood variation directly supports neighborhood-scale measurement and intervention."
  },
  {
    "id": "v8",
    "section": "VARC",
    "topic": "rc-tone",
    "type": "MCQ",
    "passage": "Cities are commonly warmer than nearby rural areas because asphalt, concrete and dark roofs absorb solar energy and release it slowly, while vegetation that would otherwise cool the air through evapotranspiration is sparse. This “urban heat island” effect is often discussed as if the remedy were simply to plant more trees. Trees are valuable, but the geometry of streets, the reflectivity of roofs, building density, wind corridors and nighttime heat release also matter. A dense canopy can cool pedestrians during the day yet, in some configurations, reduce nighttime ventilation. Effective heat policy therefore requires neighborhood-scale measurement rather than a citywide average. The hottest blocks are frequently those where heat exposure overlaps with poor housing, limited shade and outdoor work, making heat not only a meteorological problem but also an infrastructure and equity problem.",
    "q": "The author’s tone is best described as:",
    "options": [
      "dismissive and sarcastic",
      "qualified and analytical",
      "nostalgic",
      "celebratory"
    ],
    "answer": 1,
    "solution": "The author acknowledges trees are valuable but qualifies simplistic policy claims with interacting factors."
  },
  {
    "id": "v9",
    "section": "VARC",
    "topic": "rc-main",
    "type": "MCQ",
    "passage": "Scientific models are sometimes judged by whether they are “true,” but this language can obscure how models function. A subway map is not true in the sense of reproducing geography: it distorts distance and direction. Its value lies in preserving relations needed for navigation. Likewise, a scientific model may deliberately omit mechanisms to isolate a variable or make prediction tractable. This does not mean that every useful model is equally good. A model can fail because the simplification deletes a mechanism that becomes decisive under new conditions. The practical question is therefore not whether a model mirrors reality in every respect, but which features it preserves, which it suppresses, and whether those choices remain adequate for the task at hand.",
    "q": "What is the passage’s main claim?",
    "options": [
      "Scientific models must reproduce all features of reality.",
      "Useful models are exempt from criticism.",
      "Models should be judged by what they preserve or suppress relative to their task.",
      "Scientific prediction is impossible without geographical accuracy."
    ],
    "answer": 2,
    "solution": "The subway analogy supports task-relative evaluation of abstraction."
  },
  {
    "id": "v10",
    "section": "VARC",
    "topic": "rc-detail",
    "type": "MCQ",
    "passage": "Scientific models are sometimes judged by whether they are “true,” but this language can obscure how models function. A subway map is not true in the sense of reproducing geography: it distorts distance and direction. Its value lies in preserving relations needed for navigation. Likewise, a scientific model may deliberately omit mechanisms to isolate a variable or make prediction tractable. This does not mean that every useful model is equally good. A model can fail because the simplification deletes a mechanism that becomes decisive under new conditions. The practical question is therefore not whether a model mirrors reality in every respect, but which features it preserves, which it suppresses, and whether those choices remain adequate for the task at hand.",
    "q": "The subway map analogy illustrates that:",
    "options": [
      "distortion can be useful when task-relevant relations are preserved",
      "all maps are scientifically false",
      "distance never matters",
      "models should avoid simplification"
    ],
    "answer": 0,
    "solution": "The map distorts geography while preserving relations needed for navigation."
  },
  {
    "id": "v11",
    "section": "VARC",
    "topic": "rc-inference",
    "type": "MCQ",
    "passage": "Scientific models are sometimes judged by whether they are “true,” but this language can obscure how models function. A subway map is not true in the sense of reproducing geography: it distorts distance and direction. Its value lies in preserving relations needed for navigation. Likewise, a scientific model may deliberately omit mechanisms to isolate a variable or make prediction tractable. This does not mean that every useful model is equally good. A model can fail because the simplification deletes a mechanism that becomes decisive under new conditions. The practical question is therefore not whether a model mirrors reality in every respect, but which features it preserves, which it suppresses, and whether those choices remain adequate for the task at hand.",
    "q": "A model that worked well in one regime may fail in another because:",
    "options": [
      "all simplification is invalid",
      "an omitted mechanism may become important under changed conditions",
      "prediction is unrelated to modeling",
      "models cannot be revised"
    ],
    "answer": 1,
    "solution": "The passage explicitly identifies this failure mode."
  },
  {
    "id": "v12",
    "section": "VARC",
    "topic": "rc-tone",
    "type": "MCQ",
    "passage": "Scientific models are sometimes judged by whether they are “true,” but this language can obscure how models function. A subway map is not true in the sense of reproducing geography: it distorts distance and direction. Its value lies in preserving relations needed for navigation. Likewise, a scientific model may deliberately omit mechanisms to isolate a variable or make prediction tractable. This does not mean that every useful model is equally good. A model can fail because the simplification deletes a mechanism that becomes decisive under new conditions. The practical question is therefore not whether a model mirrors reality in every respect, but which features it preserves, which it suppresses, and whether those choices remain adequate for the task at hand.",
    "q": "The author’s attitude toward simplified models is:",
    "options": [
      "unconditionally supportive",
      "categorically hostile",
      "conditionally supportive",
      "indifferent"
    ],
    "answer": 2,
    "solution": "Simplification is accepted when adequate for the task, but can cause failure when conditions change."
  },
  {
    "id": "v13",
    "section": "VARC",
    "topic": "rc-main",
    "type": "MCQ",
    "passage": "Restoring an old building appears to involve a simple goal: return it to its original state. But “original” can refer to the moment of construction, a famous later redesign, or the accumulated fabric produced by decades of use. Removing every later alteration may erase evidence of how the building lived. Preserving every alteration, however, can conceal the intentions that made the work historically significant. Contemporary conservation increasingly treats restoration as an argument rather than a reset. The restorer selects which historical layers to foreground, and those choices should be documented so that future viewers can distinguish inherited material from modern intervention. Authenticity, on this view, is not achieved by pretending that no restoration occurred, but by making the intervention intellectually honest.",
    "q": "Which is the best summary?",
    "options": [
      "Restoration should always recreate the moment of construction.",
      "Authentic restoration requires preserving every later alteration.",
      "Restoration inevitably selects among historical layers, so its interventions should be transparent and documented.",
      "Modern materials should never be used in old buildings."
    ],
    "answer": 2,
    "solution": "The passage treats restoration as an explicit, documented argument about historical layers."
  },
  {
    "id": "v14",
    "section": "VARC",
    "topic": "rc-inference",
    "type": "MCQ",
    "passage": "Restoring an old building appears to involve a simple goal: return it to its original state. But “original” can refer to the moment of construction, a famous later redesign, or the accumulated fabric produced by decades of use. Removing every later alteration may erase evidence of how the building lived. Preserving every alteration, however, can conceal the intentions that made the work historically significant. Contemporary conservation increasingly treats restoration as an argument rather than a reset. The restorer selects which historical layers to foreground, and those choices should be documented so that future viewers can distinguish inherited material from modern intervention. Authenticity, on this view, is not achieved by pretending that no restoration occurred, but by making the intervention intellectually honest.",
    "q": "The author would most likely agree that:",
    "options": [
      "later alterations have no historical value",
      "concealing modern intervention can create a misleading impression of authenticity",
      "restoration is purely technical",
      "the first design is always the most significant"
    ],
    "answer": 1,
    "solution": "The final sentence defines authenticity through intellectual honesty about intervention."
  },
  {
    "id": "v15",
    "section": "VARC",
    "topic": "rc-argument",
    "type": "MCQ",
    "passage": "Restoring an old building appears to involve a simple goal: return it to its original state. But “original” can refer to the moment of construction, a famous later redesign, or the accumulated fabric produced by decades of use. Removing every later alteration may erase evidence of how the building lived. Preserving every alteration, however, can conceal the intentions that made the work historically significant. Contemporary conservation increasingly treats restoration as an argument rather than a reset. The restorer selects which historical layers to foreground, and those choices should be documented so that future viewers can distinguish inherited material from modern intervention. Authenticity, on this view, is not achieved by pretending that no restoration occurred, but by making the intervention intellectually honest.",
    "q": "The tension in restoration arises mainly because:",
    "options": [
      "buildings cannot be photographed",
      "different historical layers can carry competing kinds of significance",
      "modern architects dislike old buildings",
      "documentation is expensive"
    ],
    "answer": 1,
    "solution": "The passage contrasts original design, later redesign and accumulated use as competing historical layers."
  },
  {
    "id": "v16",
    "section": "VARC",
    "topic": "rc-tone",
    "type": "MCQ",
    "passage": "Restoring an old building appears to involve a simple goal: return it to its original state. But “original” can refer to the moment of construction, a famous later redesign, or the accumulated fabric produced by decades of use. Removing every later alteration may erase evidence of how the building lived. Preserving every alteration, however, can conceal the intentions that made the work historically significant. Contemporary conservation increasingly treats restoration as an argument rather than a reset. The restorer selects which historical layers to foreground, and those choices should be documented so that future viewers can distinguish inherited material from modern intervention. Authenticity, on this view, is not achieved by pretending that no restoration occurred, but by making the intervention intellectually honest.",
    "q": "The tone is best described as:",
    "options": [
      "prescriptive but nuanced",
      "angry and accusatory",
      "comic",
      "fatalistic"
    ],
    "answer": 0,
    "solution": "The author offers a nuanced prescription: document choices rather than pretend restoration is neutral."
  },
  {
    "id": "v17",
    "section": "VARC",
    "topic": "va-summary",
    "type": "MCQ",
    "q": "Summary: Remote work does not eliminate offices; it changes what offices are for. When individual focus can happen elsewhere, office value shifts toward coordination, trust-building and access to shared equipment. Firms that merely recreate rows of desks may therefore spend on space without recreating the interactions that justify gathering.",
    "options": [
      "Remote work will end offices.",
      "Offices remain useful, but their design should shift from individual desk work toward activities that benefit from co-presence.",
      "Shared equipment is the only reason to maintain offices.",
      "Employees are less productive outside offices."
    ],
    "answer": 1,
    "solution": "Option B retains both the persistence of offices and the change in their function."
  },
  {
    "id": "v18",
    "section": "VARC",
    "topic": "va-summary",
    "type": "MCQ",
    "q": "Summary: A forecast can be accurate for the wrong reason. If a model predicts sales correctly because two errors cancel each other, its success may disappear when conditions change. Evaluation should therefore inspect causal assumptions and error structure, not only headline accuracy.",
    "options": [
      "Accuracy is irrelevant.",
      "Forecasting should avoid quantitative models.",
      "Observed accuracy alone may hide fragile reasoning, so model evaluation should inspect why predictions work.",
      "Two errors always improve forecasts."
    ],
    "answer": 2,
    "solution": "The core contrast is outcome accuracy versus robustness of underlying reasoning."
  },
  {
    "id": "v19",
    "section": "VARC",
    "topic": "va-completion",
    "type": "MCQ",
    "q": "Complete the paragraph: A city may widen a road to reduce congestion. Initially traffic moves faster. But lower travel time can attract drivers who previously used other routes, travelled at different times, or chose other modes. ____",
    "options": [
      "Therefore road capacity is unrelated to traffic.",
      "The initial gain can partly disappear as demand responds to the added capacity.",
      "Public transport is always slower.",
      "Wider roads are cheaper to build."
    ],
    "answer": 1,
    "solution": "The paragraph describes induced demand; the completion should state its consequence."
  },
  {
    "id": "v20",
    "section": "VARC",
    "topic": "va-completion",
    "type": "MCQ",
    "q": "Complete the paragraph: Expertise often makes performance look effortless. The expert no longer verbalizes every intermediate step because many patterns have become compressed into rapid recognition. This creates a teaching problem: ____",
    "options": [
      "experts cannot learn new skills",
      "beginners may need steps that experts no longer consciously notice",
      "all knowledge is innate",
      "rapid recognition is always inaccurate"
    ],
    "answer": 1,
    "solution": "The teaching difficulty follows from tacit, compressed expert processing."
  },
  {
    "id": "v21",
    "section": "VARC",
    "topic": "va-odd",
    "type": "MCQ",
    "q": "Choose the odd sentence out. 1) Coral reefs support dense ecological networks. 2) Many reef species depend on narrow temperature ranges. 3) Satellite navigation has transformed long-distance trucking. 4) Repeated marine heat waves can trigger coral bleaching.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "solution": "Sentence 3 is unrelated to coral reefs and marine heat."
  },
  {
    "id": "v22",
    "section": "VARC",
    "topic": "va-odd",
    "type": "MCQ",
    "q": "Choose the odd sentence out. 1) Memory is reconstructive rather than a perfect recording. 2) Later information can alter recollection. 3) Witness confidence can rise even when accuracy does not. 4) Digital cameras use image sensors to capture light.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 3,
    "solution": "Sentence 4 breaks the memory/eyewitness theme."
  },
  {
    "id": "v23",
    "section": "VARC",
    "topic": "va-order",
    "type": "TITA",
    "q": "Arrange the sentences into a coherent paragraph; enter the order as four digits. 1) This makes the archive appear neutral. 2) Yet every archive is shaped by what was collected, classified and preserved. 3) Researchers often treat surviving records as the available past. 4) Absence in the archive can therefore reflect historical power rather than historical insignificance.",
    "answer": "3124",
    "solution": "3 introduces the practice; 1 states its effect; 2 challenges neutrality; 4 draws the implication."
  },
  {
    "id": "v24",
    "section": "VARC",
    "topic": "va-order",
    "type": "TITA",
    "q": "Arrange the sentences; enter four digits. 1) Once a standard becomes widespread, complementary products are built around it. 2) Technical superiority alone may not dislodge an established standard. 3) Those complements increase the cost of switching. 4) Standards can therefore persist through ecosystem lock-in.",
    "answer": "2134",
    "solution": "2 states the puzzle; 1 introduces complements; 3 gives switching cost; 4 concludes lock-in."
  },
  {
    "id": "d1",
    "section": "DILR",
    "topic": "lr-schedule",
    "type": "MCQ",
    "set": "Four talks A, B, C and D occupy slots 1–4, one each. A is before C. B is not in slot 1. D is immediately after B.",
    "q": "Which schedule is possible?",
    "options": [
      "B-D-A-C",
      "A-B-D-C",
      "A-D-B-C",
      "D-A-B-C"
    ],
    "answer": 1,
    "solution": "A-B-D-C satisfies A before C, B not first, and D immediately after B."
  },
  {
    "id": "d2",
    "section": "DILR",
    "topic": "lr-schedule",
    "type": "MCQ",
    "set": "Four talks A, B, C and D occupy slots 1–4, one each. A is before C. B is not in slot 1. D is immediately after B.",
    "q": "If A is in slot 1, which pair must occupy consecutive slots in that order?",
    "options": [
      "A,C",
      "B,D",
      "C,A",
      "D,B"
    ],
    "answer": 1,
    "solution": "B and D are required to be consecutive with D immediately after B."
  },
  {
    "id": "d3",
    "section": "DILR",
    "topic": "lr-schedule",
    "type": "TITA",
    "set": "Four talks A, B, C and D occupy slots 1–4, one each. A is before C. B is not in slot 1. D is immediately after B.",
    "q": "If B is in slot 2, what slot contains D?",
    "answer": "3",
    "solution": "D must immediately follow B."
  },
  {
    "id": "d4",
    "section": "DILR",
    "topic": "lr-schedule",
    "type": "MCQ",
    "set": "Four talks A, B, C and D occupy slots 1–4, one each. A is before C. B is not in slot 1. D is immediately after B.",
    "q": "Which talk can never be in slot 1?",
    "options": [
      "A only",
      "B only",
      "C only",
      "B and C"
    ],
    "answer": 3,
    "solution": "B is explicitly excluded; C cannot be first because A must be before C."
  },
  {
    "id": "d5",
    "section": "DILR",
    "topic": "lr-games",
    "type": "MCQ",
    "set": "Teams P, Q, R and S play a round-robin once. Win=3, draw=1 each, loss=0. P beats Q and draws R. Q beats R. S beats P and loses to Q. R beats S.",
    "q": "How many points does P finish with?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "solution": "P: win vs Q =3, draw vs R =1, loss vs S=0 =>4."
  },
  {
    "id": "d6",
    "section": "DILR",
    "topic": "lr-games",
    "type": "MCQ",
    "set": "Teams P, Q, R and S play a round-robin once. Win=3, draw=1 each, loss=0. P beats Q and draws R. Q beats R. S beats P and loses to Q. R beats S.",
    "q": "Which team has the highest points?",
    "options": [
      "P",
      "Q",
      "R",
      "S"
    ],
    "answer": 1,
    "solution": "Q has wins over R and S =6, despite losing to P."
  },
  {
    "id": "d7",
    "section": "DILR",
    "topic": "lr-games",
    "type": "TITA",
    "set": "Teams P, Q, R and S play a round-robin once. Win=3, draw=1 each, loss=0. P beats Q and draws R. Q beats R. S beats P and loses to Q. R beats S.",
    "q": "How many total points are awarded across all six matches?",
    "answer": "17",
    "solution": "Five decisive matches award 3 each =15; one draw awards 2 total =>17."
  },
  {
    "id": "d8",
    "section": "DILR",
    "topic": "lr-games",
    "type": "MCQ",
    "set": "Teams P, Q, R and S play a round-robin once. Win=3, draw=1 each, loss=0. P beats Q and draws R. Q beats R. S beats P and loses to Q. R beats S.",
    "q": "What is R’s total?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "solution": "R draws P (1), loses Q (0), beats S (3) =>4."
  },
  {
    "id": "d9",
    "section": "DILR",
    "topic": "di-tables",
    "type": "MCQ",
    "set": "A café sells tea and coffee. Mon: tea 80, coffee 120. Tue: tea 100, coffee 100. Wed: tea 120, coffee 90. Thu: tea 90, coffee 150.",
    "q": "On which day is the total highest?",
    "options": [
      "Mon",
      "Tue",
      "Wed",
      "Thu"
    ],
    "answer": 3,
    "solution": "Totals are 200, 200, 210, 240."
  },
  {
    "id": "d10",
    "section": "DILR",
    "topic": "di-ratios",
    "type": "TITA",
    "set": "A café sells tea and coffee. Mon: tea 80, coffee 120. Tue: tea 100, coffee 100. Wed: tea 120, coffee 90. Thu: tea 90, coffee 150.",
    "q": "What is the ratio of total tea to total coffee over four days? Enter tea:coffee in simplest form as digits separated by colon.",
    "answer": "39:46",
    "solution": "Tea=390 and coffee=460; 390:460 simplifies to 39:46."
  },
  {
    "id": "d11",
    "section": "DILR",
    "topic": "di-tables",
    "type": "TITA",
    "set": "A café sells tea and coffee. Mon: tea 80, coffee 120. Tue: tea 100, coffee 100. Wed: tea 120, coffee 90. Thu: tea 90, coffee 150.",
    "q": "How many more drinks were sold on Thu than Tue?",
    "answer": "40",
    "solution": "Thu=240 and Tue=200, difference=40."
  },
  {
    "id": "d12",
    "section": "DILR",
    "topic": "di-ratios",
    "type": "MCQ",
    "set": "A café sells tea and coffee. Mon: tea 80, coffee 120. Tue: tea 100, coffee 100. Wed: tea 120, coffee 90. Thu: tea 90, coffee 150.",
    "q": "Tea forms the largest share of daily sales on:",
    "options": [
      "Mon",
      "Tue",
      "Wed",
      "Thu"
    ],
    "answer": 2,
    "solution": "Tea shares: 40%, 50%, about 57.1%, 37.5%; Wed is highest."
  },
  {
    "id": "d13",
    "section": "DILR",
    "topic": "lr-arrange",
    "type": "MCQ",
    "set": "Five people J, K, L, M, N sit in a row facing north. L is in the middle. J sits somewhere left of K. N is at an end. M is not next to N.",
    "q": "Which arrangement is possible?",
    "options": [
      "N M L J K",
      "N J L M K",
      "M K L J N",
      "J K L M N"
    ],
    "answer": 1,
    "solution": "N-J-L-M-K satisfies L in the middle, J left of K, N at an end, and M not next to N."
  },
  {
    "id": "d14",
    "section": "DILR",
    "topic": "lr-arrange",
    "type": "MCQ",
    "set": "Five people J, K, L, M, N sit in a row facing north. L is in the middle. J sits somewhere left of K. N is at an end. M is not next to N.",
    "q": "If N is at the left end, who must be second?",
    "options": [
      "J",
      "K",
      "M",
      "Cannot be determined"
    ],
    "answer": 0,
    "solution": "The valid left-end arrangements are N-J-L-K-M and N-J-L-M-K, so J must be second."
  },
  {
    "id": "d15",
    "section": "DILR",
    "topic": "lr-arrange",
    "type": "MCQ",
    "set": "Five people J, K, L, M, N sit in a row facing north. L is in the middle. J sits somewhere left of K. N is at an end. M is not next to N.",
    "q": "If N is at the right end, who can be first?",
    "options": [
      "J only",
      "M only",
      "J or M",
      "K or M"
    ],
    "answer": 2,
    "solution": "The two valid right-end arrangements begin J-M-L-K-N and M-J-L-K-N."
  },
  {
    "id": "d16",
    "section": "DILR",
    "topic": "lr-arrange",
    "type": "MCQ",
    "set": "Five people J, K, L, M, N sit in a row facing north. L is in the middle. J sits somewhere left of K. N is at an end. M is not next to N.",
    "q": "If N is at the right end, who must be fourth?",
    "options": [
      "J",
      "K",
      "L",
      "M"
    ],
    "answer": 1,
    "solution": "Both valid right-end arrangements have K in position 4."
  },
  {
    "id": "d17",
    "section": "DILR",
    "topic": "lr-arrange",
    "type": "TITA",
    "set": "Five people J, K, L, M, N sit in a row facing north. L is in the middle. J sits somewhere left of K. N is at an end. M is not next to N.",
    "q": "How many complete arrangements satisfy all the conditions?",
    "answer": "4",
    "solution": "There are four valid arrangements after applying all constraints."
  },
  {
    "id": "d18",
    "section": "DILR",
    "topic": "lr-distribution",
    "type": "MCQ",
    "set": "P, Q and R receive 12 identical tokens. Each receives at least 2. P receives more than Q. R receives exactly twice Q.",
    "q": "What can Q be?",
    "options": [
      "2 only",
      "3 only",
      "2 or 3",
      "2, 3 or 4"
    ],
    "answer": 0,
    "solution": "Let Q=q, R=2q, P=12-3q. P>q and P≥2. q=2 gives P=6,R=4 valid; q=3 gives P=3, not >Q. So Q=2 only."
  },
  {
    "id": "d19",
    "section": "DILR",
    "topic": "lr-distribution",
    "type": "TITA",
    "set": "P, Q and R receive 12 identical tokens. Each receives at least 2. P receives more than Q. R receives exactly twice Q.",
    "q": "How many tokens does P receive?",
    "answer": "6",
    "solution": "Q=2, R=4, so P=6."
  },
  {
    "id": "d20",
    "section": "DILR",
    "topic": "lr-distribution",
    "type": "TITA",
    "set": "P, Q and R receive 12 identical tokens. Each receives at least 2. P receives more than Q. R receives exactly twice Q.",
    "q": "How many tokens does R receive?",
    "answer": "4",
    "solution": "Q=2, so R=4."
  },
  {
    "id": "d21",
    "section": "DILR",
    "topic": "lr-distribution",
    "type": "MCQ",
    "set": "P, Q and R receive 12 identical tokens. Each receives at least 2. P receives more than Q. R receives exactly twice Q.",
    "q": "Which ordering is true?",
    "options": [
      "P>R>Q",
      "R>P>Q",
      "P>Q>R",
      "Q>R>P"
    ],
    "answer": 0,
    "solution": "Values are P=6,R=4,Q=2."
  },
  {
    "id": "d22",
    "section": "DILR",
    "topic": "lr-distribution",
    "type": "MCQ",
    "set": "P, Q and R receive 12 identical tokens. Each receives at least 2. P receives more than Q. R receives exactly twice Q.",
    "q": "What fraction of all tokens goes to R?",
    "options": [
      "1/6",
      "1/4",
      "1/3",
      "1/2"
    ],
    "answer": 2,
    "solution": "R=4 out of 12 =1/3."
  },
  {
    "id": "q1",
    "section": "QA",
    "topic": "qa-percent",
    "type": "MCQ",
    "q": "A price is increased by 20% and then reduced by 20%. Relative to the original price, the final price is:",
    "options": [
      "4% lower",
      "unchanged",
      "4% higher",
      "8% lower"
    ],
    "answer": 0,
    "solution": "1.2 × 0.8 = 0.96, so final price is 4% lower."
  },
  {
    "id": "q2",
    "section": "QA",
    "topic": "qa-pl",
    "type": "TITA",
    "q": "An article marked at ₹1500 is sold at a 20% discount. If its cost price is ₹1000, what is the profit percentage?",
    "answer": "20",
    "solution": "SP=1200; profit=200; profit%=20."
  },
  {
    "id": "q3",
    "section": "QA",
    "topic": "qa-ratio",
    "type": "MCQ",
    "q": "If A:B=3:5 and B:C=10:7, then A:C is:",
    "options": [
      "3:7",
      "6:7",
      "5:7",
      "6:5"
    ],
    "answer": 1,
    "solution": "Scale A:B to 6:10, so A:C=6:7."
  },
  {
    "id": "q4",
    "section": "QA",
    "topic": "qa-average",
    "type": "TITA",
    "q": "The average of 8 numbers is 15. If one number 23 is replaced by 31, what is the new average?",
    "answer": "16",
    "solution": "Total increases by 8; average increases by 1."
  },
  {
    "id": "q5",
    "section": "QA",
    "topic": "qa-mixture",
    "type": "MCQ",
    "q": "A 30 L mixture contains milk and water in ratio 2:1. How much water must be added to make the ratio 1:1?",
    "options": [
      "5 L",
      "10 L",
      "15 L",
      "20 L"
    ],
    "answer": 1,
    "solution": "Milk=20, water=10. Add 10 L water to reach 20:20."
  },
  {
    "id": "q6",
    "section": "QA",
    "topic": "qa-tsd",
    "type": "TITA",
    "q": "A train covers 180 km at 60 km/h and returns the same distance at 90 km/h. What is the average speed for the whole trip?",
    "answer": "72",
    "solution": "Equal-distance average speed = 2ab/(a+b)=2×60×90/150=72."
  },
  {
    "id": "q7",
    "section": "QA",
    "topic": "qa-work",
    "type": "MCQ",
    "q": "A can finish a job in 12 days and B in 18 days. Working together, they finish it in:",
    "options": [
      "6.2 days",
      "7.2 days",
      "8 days",
      "9 days"
    ],
    "answer": 1,
    "solution": "Rate=1/12+1/18=5/36; time=36/5=7.2 days."
  },
  {
    "id": "q8",
    "section": "QA",
    "topic": "qa-interest",
    "type": "TITA",
    "q": "₹10,000 is invested at 10% compound interest annually for 2 years. What is the interest earned?",
    "answer": "2100",
    "solution": "Amount=10000×1.1²=12100; interest=2100."
  },
  {
    "id": "q9",
    "section": "QA",
    "topic": "qa-linear",
    "type": "TITA",
    "q": "If 3x + 5 = 2x + 17, find x.",
    "answer": "12",
    "solution": "x=12."
  },
  {
    "id": "q10",
    "section": "QA",
    "topic": "qa-quadratic",
    "type": "MCQ",
    "q": "The larger root of x² − 7x + 12 = 0 is:",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "solution": "(x−3)(x−4)=0, larger root 4."
  },
  {
    "id": "q11",
    "section": "QA",
    "topic": "qa-ineq",
    "type": "MCQ",
    "q": "How many integers satisfy |x−2| < 4?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 2,
    "solution": "−2 < x < 6, integers −1,0,1,2,3,4,5: seven."
  },
  {
    "id": "q12",
    "section": "QA",
    "topic": "qa-functions",
    "type": "TITA",
    "q": "If f(x)=2x²−3 and f(a)=15 for positive a, find a.",
    "answer": "3",
    "solution": "2a²−3=15 => a²=9; positive a=3."
  },
  {
    "id": "q13",
    "section": "QA",
    "topic": "qa-logs",
    "type": "MCQ",
    "q": "If log₂(x)=5, x equals:",
    "options": [
      "10",
      "16",
      "25",
      "32"
    ],
    "answer": 3,
    "solution": "x=2⁵=32."
  },
  {
    "id": "q14",
    "section": "QA",
    "topic": "qa-series",
    "type": "TITA",
    "q": "In an arithmetic progression, the first term is 7 and common difference is 3. What is the 12th term?",
    "answer": "40",
    "solution": "a₁₂=7+11×3=40."
  },
  {
    "id": "q15",
    "section": "QA",
    "topic": "qa-numbers",
    "type": "MCQ",
    "q": "How many positive divisors does 360 have?",
    "options": [
      "18",
      "20",
      "24",
      "30"
    ],
    "answer": 2,
    "solution": "360=2³×3²×5; divisors=(3+1)(2+1)(1+1)=24."
  },
  {
    "id": "q16",
    "section": "QA",
    "topic": "qa-remainder",
    "type": "TITA",
    "q": "What is the remainder when 2¹⁰ is divided by 7?",
    "answer": "2",
    "solution": "2³≡1 (mod 7), 2¹⁰=2^(9+1)≡2."
  },
  {
    "id": "q17",
    "section": "QA",
    "topic": "qa-geometry",
    "type": "MCQ",
    "q": "A right triangle has legs 6 and 8. Its inradius is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "solution": "Hypotenuse=10; r=(a+b−c)/2=(6+8−10)/2=2."
  },
  {
    "id": "q18",
    "section": "QA",
    "topic": "qa-mensuration",
    "type": "TITA",
    "q": "A cylinder has radius 3 and height 5. Enter its volume divided by π.",
    "answer": "45",
    "solution": "V=πr²h=45π."
  },
  {
    "id": "q19",
    "section": "QA",
    "topic": "qa-coordinate",
    "type": "MCQ",
    "q": "Distance between (1,2) and (4,6) is:",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "solution": "√(3²+4²)=5."
  },
  {
    "id": "q20",
    "section": "QA",
    "topic": "qa-pnc",
    "type": "TITA",
    "q": "How many 3-person committees can be chosen from 7 people?",
    "answer": "35",
    "solution": "C(7,3)=35."
  },
  {
    "id": "q21",
    "section": "QA",
    "topic": "qa-probability",
    "type": "MCQ",
    "q": "Two fair dice are rolled. Probability that their sum is 8 is:",
    "options": [
      "1/6",
      "5/36",
      "1/9",
      "1/12"
    ],
    "answer": 1,
    "solution": "Favorable ordered pairs: (2,6),(3,5),(4,4),(5,3),(6,2): 5/36."
  },
  {
    "id": "q22",
    "section": "QA",
    "topic": "qa-sets",
    "type": "TITA",
    "q": "In a group of 80, 45 like tea, 40 like coffee, and 20 like both. How many like neither?",
    "answer": "15",
    "solution": "Union=45+40−20=65; neither=80−65=15."
  }
];
export const mistakeTypes = [
  [
    "concept",
    "Concept gap"
  ],
  [
    "read",
    "Read / interpretation"
  ],
  [
    "selection",
    "Should have skipped"
  ],
  [
    "calculation",
    "Calculation"
  ],
  [
    "time",
    "Too slow"
  ],
  [
    "guess",
    "Bad guess / confidence"
  ]
];
export const strategy = {
  "VARC": {
    "target": "48–54+",
    "rule": "Protect accuracy. Read for structure, not memory. Abandon an RC question when evidence does not converge in ~90 sec.",
    "scan": "First 2–3 min: assess passage readability and question style; then commit."
  },
  "DILR": {
    "target": "42–48+",
    "rule": "Set selection is the section. Spend the opening 5–7 min sampling all sets; solve the most constrained / information-rich first.",
    "scan": "Do not “half solve” five sets. Build 3–4 complete sets with high accuracy."
  },
  "QA": {
    "target": "48–54+",
    "rule": "Round 1 = direct wins, Round 2 = medium, Round 3 = remaining TITA/high-value items. Protect against algebraic rabbit holes.",
    "scan": "If a clean setup is not visible within ~45–60 sec, mark and move."
  }
};

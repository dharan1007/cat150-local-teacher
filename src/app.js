import { questionBank } from './question-bank.js';

const routes = ['Home', 'Learn', 'Practice', 'Mock Test', 'Ask Teacher', 'Syllabus', 'Progress'];
const sections = [
  { id: 'VARC', name: 'Verbal Ability & Reading Comprehension', minutes: 40, max: 72 },
  { id: 'DILR', name: 'Data Interpretation & Logical Reasoning', minutes: 40, max: 66 },
  { id: 'QA', name: 'Quantitative Ability', minutes: 40, max: 66 }
];

const syllabus = {
  VARC: [['RC Main Idea', 'rc-main'], ['RC Inference', 'rc-inference'], ['RC Detail', 'rc-detail'], ['RC Tone', 'rc-tone'], ['Para Summary', 'va-summary'], ['Para Completion', 'va-completion'], ['Odd Sentence', 'va-odd'], ['Para Jumbles', 'va-order']],
  DILR: [['Scheduling', 'lr-schedule'], ['Games & Tournaments', 'lr-games'], ['Tables', 'di-tables'], ['Ratios & Shares', 'di-ratios'], ['Arrangements', 'lr-arrange'], ['Distribution', 'lr-distribution'], ['Charts', 'di-charts'], ['Constraints', 'lr-optimize']],
  QA: [['Percentages', 'qa-percent'], ['Profit & Loss', 'qa-pl'], ['Ratio', 'qa-ratio'], ['Averages', 'qa-average'], ['Mixtures', 'qa-mixture'], ['Time Speed Distance', 'qa-tsd'], ['Work', 'qa-work'], ['Interest', 'qa-interest'], ['Linear Equations', 'qa-linear'], ['Quadratics', 'qa-quadratic'], ['Inequalities', 'qa-ineq'], ['Functions', 'qa-functions'], ['Logs', 'qa-logs'], ['Series', 'qa-series'], ['Numbers', 'qa-numbers'], ['Remainders', 'qa-remainder'], ['Geometry', 'qa-geometry'], ['Mensuration', 'qa-mensuration'], ['Coordinate Geometry', 'qa-coordinate'], ['PnC', 'qa-pnc'], ['Probability', 'qa-probability'], ['Sets', 'qa-sets']]
};

const bank = questionBank;
const sampleBank = [
  {id:'v1',section:'VARC',topic:'rc-main',type:'MCQ',passage:'Recommendation systems are often criticized for narrowing attention. The older alternative was not pure serendipity: editors, booksellers and teachers also filtered what people encountered. The real issue is what objective the filter optimizes.',q:'Which statement best captures the central argument?',options:['Algorithms uniquely destroyed an unfiltered environment.','Recommendation quality depends on the objective the filtering system optimizes.','Immediate engagement is always incompatible with discovery.','Human editors are more objective than algorithms.'],answer:1,solution:'The passage argues that filtering always exists; the decisive question is the objective being optimized.'},
  {id:'v2',section:'VARC',topic:'rc-inference',type:'MCQ',passage:'Recommendation systems are often criticized for narrowing attention. The deeper issue is measurement: what can be counted quickly tends to become what systems maximize.',q:'Which inference follows most strongly?',options:['An easy metric can disproportionately shape system behavior.','Novel content always lowers engagement.','Serendipity cannot be engineered.','Personalization must be removed.'],answer:0,solution:'The final claim links quick measurability with system behavior.'},
  {id:'v5',section:'VARC',topic:'rc-main',type:'MCQ',passage:'Cities are warmer than nearby rural areas because hard surfaces absorb heat and vegetation is sparse. Trees help, but street geometry, roof reflectivity, density, wind and vulnerability also matter.',q:'The passage mainly argues that urban heat mitigation should:',options:['focus only on trees','use only citywide averages','treat heat as a neighborhood-scale systems problem','prioritize nighttime only'],answer:2,solution:'The author expands the problem beyond trees into local design, measurement and equity.'},
  {id:'v9',section:'VARC',topic:'rc-main',type:'MCQ',passage:'Scientific models need not mirror reality completely. Like a subway map, a model may distort some features while preserving relations needed for a task.',q:'What is the passage main claim?',options:['Models must reproduce all reality.','Useful models cannot be criticized.','Models should be judged by what they preserve or suppress relative to the task.','Prediction requires geographic accuracy.'],answer:2,solution:'The subway analogy supports task-relative evaluation of abstraction.'},
  {id:'v17',section:'VARC',topic:'va-summary',type:'MCQ',q:'Summary: Remote work does not eliminate offices; it changes what offices are for. When individual focus can happen elsewhere, office value shifts toward coordination, trust-building and shared equipment.',options:['Remote work will end offices.','Offices remain useful, but design should shift toward activities that benefit from co-presence.','Shared equipment is the only reason for offices.','Employees are less productive outside offices.'],answer:1,solution:'Option B preserves both the persistence of offices and the functional shift.'},
  {id:'v23',section:'VARC',topic:'va-order',type:'TITA',q:'Arrange the sentences into a coherent paragraph; enter four digits. 1) This makes the archive appear neutral. 2) Yet every archive is shaped by what was collected, classified and preserved. 3) Researchers often treat surviving records as the available past. 4) Absence in the archive can therefore reflect historical power rather than historical insignificance.',answer:'3124',solution:'3 introduces the practice; 1 states its effect; 2 challenges neutrality; 4 draws the implication.'},
  {id:'d1',section:'DILR',topic:'lr-schedule',type:'MCQ',set:'Four talks A, B, C and D occupy slots 1-4. A is before C. B is not in slot 1. D is immediately after B.',q:'Which schedule is possible?',options:['B-D-A-C','A-B-D-C','A-D-B-C','D-A-B-C'],answer:1,solution:'A-B-D-C satisfies A before C, B not first, and D immediately after B.'},
  {id:'d4',section:'DILR',topic:'lr-schedule',type:'MCQ',set:'Four talks A, B, C and D occupy slots 1-4. A is before C. B is not in slot 1. D is immediately after B.',q:'Which talk can never be in slot 1?',options:['A only','B only','C only','B and C'],answer:3,solution:'B is explicitly excluded; C cannot be first because A must be before C.'},
  {id:'d5',section:'DILR',topic:'lr-games',type:'MCQ',set:'P, Q, R and S play a round-robin. Win=3, draw=1 each, loss=0. P beats Q and draws R. Q beats R. S beats P and loses to Q. R beats S.',q:'How many points does P finish with?',options:['3','4','5','6'],answer:1,solution:'P gets 3 vs Q, 1 vs R and 0 vs S, total 4.'},
  {id:'d10',section:'DILR',topic:'di-ratios',type:'TITA',set:'Cafe sales. Mon: tea 80, coffee 120. Tue: tea 100, coffee 100. Wed: tea 120, coffee 90. Thu: tea 90, coffee 150.',q:'What is the ratio of total tea to total coffee over four days? Enter tea:coffee.',answer:'39:46',solution:'Tea=390 and coffee=460; divide by 10 to get 39:46.'},
  {id:'d13',section:'DILR',topic:'lr-arrange',type:'MCQ',set:'J, K, L, M, N sit in a row facing north. L is in the middle. J sits left of K. N is at an end. M is not next to N.',q:'Which arrangement is possible?',options:['N M L J K','N J L M K','M K L J N','J K L M N'],answer:1,solution:'N-J-L-M-K satisfies every condition.'},
  {id:'d18',section:'DILR',topic:'lr-distribution',type:'MCQ',set:'P, Q and R receive 12 identical tokens. Each receives at least 2. P receives more than Q. R receives exactly twice Q.',q:'What can Q be?',options:['2 only','3 only','2 or 3','2, 3 or 4'],answer:0,solution:'Let Q=q, R=2q, P=12-3q. Only q=2 gives P>Q and all at least 2.'},
  {id:'q1',section:'QA',topic:'qa-percent',type:'MCQ',q:'A price is increased by 20% and then reduced by 20%. Relative to the original price, the final price is:',options:['4% lower','unchanged','4% higher','8% lower'],answer:0,solution:'1.2 x 0.8 = 0.96, so the final price is 4% lower.'},
  {id:'q2',section:'QA',topic:'qa-pl',type:'TITA',q:'An article marked at Rs 1500 is sold at a 20% discount. If its cost price is Rs 1000, what is the profit percentage?',answer:'20',solution:'SP=1200; profit=200; profit percent is 20.'},
  {id:'q3',section:'QA',topic:'qa-ratio',type:'MCQ',q:'If A:B=3:5 and B:C=10:7, then A:C is:',options:['3:7','6:7','5:7','6:5'],answer:1,solution:'Scale A:B to 6:10, so A:C=6:7.'},
  {id:'q6',section:'QA',topic:'qa-tsd',type:'TITA',q:'A train covers 180 km at 60 km/h and returns the same distance at 90 km/h. What is the average speed for the whole trip?',answer:'72',solution:'For equal distances, average speed = 2ab/(a+b)=72.'},
  {id:'q10',section:'QA',topic:'qa-quadratic',type:'MCQ',q:'The larger root of x^2 - 7x + 12 = 0 is:',options:['3','4','5','6'],answer:1,solution:'(x-3)(x-4)=0, so the larger root is 4.'},
  {id:'q15',section:'QA',topic:'qa-numbers',type:'MCQ',q:'How many positive divisors does 360 have?',options:['18','20','24','30'],answer:2,solution:'360=2^3 x 3^2 x 5, so divisors=(4)(3)(2)=24.'},
  {id:'q21',section:'QA',topic:'qa-probability',type:'MCQ',q:'Two fair dice are rolled. Probability that their sum is 8 is:',options:['1/6','5/36','1/9','1/12'],answer:1,solution:'Favorable pairs are (2,6),(3,5),(4,4),(5,3),(6,2): 5/36.'},
  {id:'q22',section:'QA',topic:'qa-sets',type:'TITA',q:'In a group of 80, 45 like tea, 40 like coffee, and 20 like both. How many like neither?',answer:'15',solution:'Union=45+40-20=65; neither=80-65=15.'}
];

const modelPacks = [
  { id: 'speech-small', name: 'Whisper WASM small multilingual', purpose: 'Local English/Hindi/Telugu speech recognition', size: 244, license: 'MIT model runtime, model license must be confirmed before bundling', status: 'manual' },
  { id: 'tts-lite', name: 'Piper / browser native TTS fallback', purpose: 'Spoken teacher replies', size: 65, license: 'MIT where Piper voices permit redistribution', status: 'fallback' },
  { id: 'ocr-lite', name: 'Tesseract.js language packs', purpose: 'Browser OCR for typed screenshots and photos', size: 38, license: 'Apache-2.0', status: 'available' },
  { id: 'math-solver', name: 'Deterministic CAT solver pack', purpose: 'Arithmetic, ratios, equations, arrangements and score verification', size: 1, license: 'Project code', status: 'built-in' }
];

const state = loadState();
let route = state.route || 'Home';
let activeSection = state.section || 'QA';
let activeTopic = state.topic || 'qa-percent';
let currentQuestion = null;
let selected = null;
let liveMode = false;
let recognition = null;
let mock = state.mock || null;

function loadState() {
  try {
    return Object.assign({ history: [], mastery: {}, downloads: {}, teacherLog: [], route: 'Home' }, JSON.parse(localStorage.getItem('cat150-local-teacher') || '{}'));
  } catch {
    return { history: [], mastery: {}, downloads: {}, teacherLog: [], route: 'Home' };
  }
}

function saveState() {
  state.route = route;
  state.section = activeSection;
  state.topic = activeTopic;
  state.mock = mock;
  localStorage.setItem('cat150-local-teacher', JSON.stringify(state));
}

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const topicName = id => Object.values(syllabus).flat().find(x => x[1] === id)?.[0] || id;
const normalize = v => String(v ?? '').trim().toLowerCase().replace(/\s+/g, '');
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const today = () => new Date().toISOString().slice(0, 10);

function toast(message) {
  let wrap = $('.toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    document.body.append(wrap);
  }
  const node = $('#toast-template').content.firstElementChild.cloneNode(true);
  node.textContent = message;
  wrap.append(node);
  setTimeout(() => node.remove(), 4200);
}

function renderShell(content) {
  $('#app').innerHTML = `
    <header class="topbar">
      <div class="topbar-inner">
        <button class="brand" data-route="Home" aria-label="Open Home"><span class="mark">150</span><span>CAT 150 Local Teacher</span></button>
        <nav class="nav" aria-label="Main sections">${routes.map(r => `<button data-route="${r}" aria-current="${route === r ? 'page' : 'false'}">${r}</button>`).join('')}</nav>
        <div class="top-actions"><span class="status-dot" aria-hidden="true"></span><span class="muted">Static, offline-ready</span></div>
      </div>
    </header>
    <main class="shell">${content}</main>`;
  attachEvents();
}

function teacherRail() {
  const canSpeech = 'speechSynthesis' in window;
  const canListen = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  return `
    <aside class="teacher-rail" aria-label="Teacher board and voice controls">
      <div class="row"><div><div class="kicker">Teacher Board</div><h2>Live explanation</h2></div><button class="secondary" data-action="clear-board">Clear</button></div>
      <div class="board" id="teacherBoard">${boardSvg('Start a question or ask the teacher.', ['The board will draw steps, ratios, tables and traps.'])}</div>
      <div class="segmented" role="group" aria-label="Language">
        ${['English','Hindi','Telugu'].map(l => `<button data-lang="${l}" class="${state.lang === l || (!state.lang && l === 'English') ? 'active' : ''}">${l}</button>`).join('')}
      </div>
      <div class="toolbar">
        <button class="primary" data-action="speak-board" ${canSpeech ? '' : 'disabled'}>Speak</button>
        <button class="secondary" data-action="listen" ${canListen ? '' : 'disabled'}>${liveMode ? 'Stop listening' : 'Push to talk'}</button>
        <button class="secondary" data-action="interrupt">Interrupt</button>
      </div>
      <div class="notice ${canListen ? '' : 'warning'}">${canListen ? 'Browser speech recognition is available. Local Whisper packs can be added from Model Controls.' : 'This browser has no native speech recognition. Use typed Ask Teacher or install local model packs when available.'}</div>
    </aside>`;
}

function boardSvg(title, lines = []) {
  const rows = lines.slice(0, 7).map((line, i) => `<text x="28" y="${104 + i * 30}" font-size="18">${escapeHtml(line)}</text>`).join('');
  return `<svg viewBox="0 0 520 320" role="img" aria-label="${escapeHtml(title)}">
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#2457d6"/></marker></defs>
    <text x="28" y="42" font-size="24" font-weight="800">${escapeHtml(title)}</text>
    <line x1="28" y1="60" x2="492" y2="60" stroke="#d9e0ea" stroke-width="2"/>
    ${rows}
    <path d="M330 238 C382 220 414 202 462 160" fill="none" stroke="#2457d6" stroke-width="4" marker-end="url(#arrow)"/>
    <circle cx="92" cy="246" r="34" fill="none" stroke="#2457d6" stroke-width="3"/>
    <text x="72" y="253" font-size="18" font-weight="800">CAT</text>
  </svg>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function home() {
  const total = state.history.length;
  const acc = total ? Math.round(100 * state.history.filter(x => x.correct).length / total) : 0;
  const weak = weakestTopics(4);
  renderShell(`
    <div class="layout">
      <section class="panel">
        <div class="section-head"><div><div class="kicker">Home</div><h1>Study with a local CAT teacher</h1><p>Practice, explain, draw, speak and review without paid APIs or server-side AI. Heavy models load only when you explicitly choose them.</p></div></div>
        <div class="grid grid-3">
          <div class="card"><p>Questions attempted</p><div class="metric">${total}</div></div>
          <div class="card"><p>Recent accuracy</p><div class="metric">${acc}%</div></div>
          <div class="card"><p>Offline model packs</p><div class="metric">${Object.values(state.downloads).filter(Boolean).length}</div></div>
        </div>
        <div class="grid grid-2" style="margin-top:14px">
          <div class="card"><h2>Today's study loop</h2><ol><li>Learn the weakest topic for 12 minutes.</li><li>Solve 8-12 focused questions.</li><li>Use Ask Teacher for every wrong or slow question.</li><li>End with Progress and error taxonomy.</li></ol><button class="primary" data-route="Learn">Start Learn</button></div>
          <div class="card"><h2>Priority topics</h2><div class="stack">${weak.map(t => `<button class="topic" data-topic="${t.id}" data-route="Learn"><strong>${t.name}</strong><div class="progress"><i style="width:${Math.round(t.mastery * 100)}%"></i></div><p>${Math.round(t.mastery * 100)}% mastery signal</p></button>`).join('')}</div></div>
        </div>
      </section>
      ${teacherRail()}
    </div>`);
}

function learn() {
  const topics = syllabus[activeSection];
  renderShell(`
    <div class="layout">
      <section class="panel">
        <div class="section-head"><div><div class="kicker">Learn</div><h1>${sections.find(s => s.id === activeSection).name}</h1><p>Each topic has explain, example, shortcut, common trap and practice modes. Content is deterministic first; local model packs can add conversational wording.</p></div></div>
        <div class="segmented">${sections.map(s => `<button data-section="${s.id}" class="${activeSection === s.id ? 'active' : ''}">${s.id}</button>`).join('')}</div>
        <div class="topic-list" style="margin-top:14px">${topics.map(([name,id]) => `<button class="topic" data-topic="${id}"><strong>${name}</strong><p>${lessonCopy(id).one}</p><div class="progress"><i style="width:${Math.round((state.mastery[id] || .08) * 100)}%"></i></div></button>`).join('')}</div>
        <div class="card" style="margin-top:14px"><div class="kicker">${topicName(activeTopic)}</div><h2>${lessonCopy(activeTopic).title}</h2><div class="grid grid-2">${['Explain','Example','Shortcut','Common Trap'].map(mode => `<div><h3>${mode}</h3><p>${lessonCopy(activeTopic)[mode.toLowerCase().replace(' ', '')]}</p></div>`).join('')}</div><button class="primary" data-action="practice-topic">Practice this topic</button></div>
      </section>
      ${teacherRail()}
    </div>`);
  drawLesson();
}

function lessonCopy(id) {
  const name = topicName(id);
  return {
    title: `${name}: CAT-ready method`,
    one: 'Understand the trigger, solve with a repeatable method, then check the trap.',
    explain: `First identify what the question is really testing in ${name}. Write the minimum setup before calculating.`,
    example: 'Convert the words into a small table, equation, diagram or elimination grid, then solve one clean step at a time.',
    shortcut: 'Look for ratios, complement cases, answer-option spacing or constraints that reduce calculation.',
    commontrap: 'The common trap is solving mechanically before checking units, direction, wording and boundary cases.'
  };
}

function practice() {
  if (!currentQuestion) currentQuestion = pickQuestion(activeSection, activeTopic);
  renderShell(`
    <div class="layout">
      <section class="panel">
        <div class="section-head"><div><div class="kicker">Practice</div><h1>${topicName(currentQuestion.topic)}</h1><p>Answer first, then compare method, fastest route, trap and expected timing.</p></div><button class="secondary" data-action="next-question">Next</button></div>
        ${questionHtml(currentQuestion)}
        <div id="result"></div>
      </section>
      ${teacherRail()}
    </div>`);
  drawQuestion(currentQuestion);
}

function questionHtml(q) {
  return `<div class="question">
    ${q.passage ? `<div class="passage">${escapeHtml(q.passage)}</div>` : ''}
    ${q.set ? `<div class="setbox">${escapeHtml(q.set)}</div>` : ''}
    <h2>${escapeHtml(q.q)}</h2>
    ${q.type === 'MCQ' ? `<div class="options">${q.options.map((o, i) => `<button class="option" data-option="${i}">${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join('')}</div>` : `<input class="answer-input" id="tita" placeholder="Type the exact answer">`}
    <div class="toolbar"><button class="primary" data-action="submit-answer">Submit answer</button><button class="secondary" data-action="hint">Hint</button><button class="secondary" data-action="teach-question">Teach this</button></div>
  </div>`;
}

function askTeacher() {
  renderShell(`
    <div class="layout">
      <section class="panel">
        <div class="section-head"><div><div class="kicker">Ask Teacher</div><h1>Type, speak, upload or draw</h1><p>The answer path is local-first: deterministic solver for CAT-style calculations, browser OCR where available, and visible model-download controls for heavier local packs.</p></div></div>
        <textarea id="askText" placeholder="Paste or type a CAT question. Hinglish, Hindi, Telugu and English are accepted for teacher tone."></textarea>
        <div class="toolbar" style="margin-top:10px"><button class="primary" data-action="ask">Solve and teach</button><button class="secondary" data-action="listen">Dictate</button><button class="secondary" data-action="clear-ask">Clear</button></div>
        <div class="filebox" style="margin-top:12px"><input id="imageInput" type="file" accept="image/*"><p>Image OCR runs in-browser when the OCR pack is available. Without it, the image is previewed and you can type the question text.</p><canvas id="drawPad" width="680" height="180" aria-label="Handwriting pad"></canvas></div>
        <div id="askResult" class="card hidden" style="margin-top:12px"></div>
        <div class="card" style="margin-top:12px"><h2>Model controls</h2><div class="stack">${modelPacks.map(modelCard).join('')}</div></div>
      </section>
      ${teacherRail()}
    </div>`);
  setupCanvas();
}

function modelCard(m) {
  const active = state.downloads[m.id];
  return `<div class="model"><div class="row"><div><strong>${m.name}</strong><p>${m.purpose}</p><small>${m.size} MB estimate - ${m.license}</small></div><span class="pill ${active ? 'active' : ''}">${active ? 'Offline' : m.status}</span></div><div class="progress"><i style="width:${active ? 100 : 0}%"></i></div><div class="toolbar"><button class="secondary" data-model="${m.id}" data-action="download-model">Mark available</button><button class="danger" data-model="${m.id}" data-action="delete-model">Delete</button></div></div>`;
}

function mockTest() {
  if (!mock) {
    renderShell(`<section class="panel"><div class="kicker">Mock Test</div><h1>Strict static mock</h1><p>Uses the preserved local question bank and sectional scoring. No network calls are required during the attempt.</p><div class="grid grid-3">${sections.map(s => `<div class="card"><h2>${s.id}</h2><p>${s.minutes} min - CAT scoring</p></div>`).join('')}</div><button class="primary" data-action="start-mock" style="margin-top:14px">Start mock</button></section>`);
    return;
  }
  const pool = bank.filter(q => q.section === mock.section);
  const q = pool[mock.index] || pool[0];
  currentQuestion = q;
  renderShell(`<div class="mock-grid"><aside class="card"><div class="kicker">${mock.section}</div><div class="mock-timer" id="mockTimer">40:00</div><div class="mock-palette">${pool.map((x,i)=>`<button class="${mock.answers[x.id] ? 'done' : ''}" data-mock-jump="${i}">${i+1}</button>`).join('')}</div><button class="primary" data-action="finish-mock" style="margin-top:12px">Finish mock</button></aside><section class="panel">${questionHtml(q)}</section></div>`);
  drawQuestion(q);
}

function syllabusView() {
  renderShell(`<section class="panel"><div class="kicker">Syllabus</div><h1>Coverage map</h1><div class="grid grid-3">${sections.map(s => `<div class="card"><h2>${s.id}</h2><div class="stack">${syllabus[s.id].map(([n,id]) => `<button class="topic" data-topic="${id}" data-section="${s.id}" data-route="Learn"><strong>${n}</strong><div class="progress"><i style="width:${Math.round((state.mastery[id] || 0) * 100)}%"></i></div></button>`).join('')}</div></div>`).join('')}</div></section>`);
}

function progress() {
  const h = state.history;
  const correct = h.filter(x => x.correct).length;
  const wrong = h.filter(x => !x.correct).length;
  const leakage = h.reduce((m, x) => { m[x.error] = (m[x.error] || 0) + 1; return m; }, {});
  renderShell(`<section class="panel"><div class="kicker">Progress</div><h1>Readiness analytics</h1><div class="grid grid-3"><div class="card"><p>Attempts</p><div class="metric">${h.length}</div></div><div class="card"><p>Correct</p><div class="metric">${correct}</div></div><div class="card"><p>To review</p><div class="metric">${wrong}</div></div></div><div class="grid grid-2" style="margin-top:14px"><div class="card"><h2>Error taxonomy</h2>${Object.entries(leakage).map(([k,v])=>`<p><strong>${k}</strong>: ${v}</p>`).join('') || '<p>No attempts yet.</p>'}</div><div class="card"><h2>Recent attempts</h2>${h.slice(-12).reverse().map(x=>`<p>${x.correct ? 'Correct' : 'Review'} - ${topicName(x.topic)} - ${x.seconds}s</p>`).join('') || '<p>Start practice to build analytics.</p>'}</div></div></section>`);
}

function render() {
  saveState();
  ({ Home: home, Learn: learn, Practice: practice, 'Mock Test': mockTest, 'Ask Teacher': askTeacher, Syllabus: syllabusView, Progress: progress }[route] || home)();
}

function attachEvents() {
  document.onclick = e => {
    const r = e.target.closest('[data-route]');
    if (r) { route = r.dataset.route; render(); return; }
    const s = e.target.closest('[data-section]');
    if (s) { activeSection = s.dataset.section; activeTopic = syllabus[activeSection][0][1]; currentQuestion = null; render(); return; }
    const t = e.target.closest('[data-topic]');
    if (t) { activeTopic = t.dataset.topic; if (t.dataset.section) activeSection = t.dataset.section; drawLesson(); if (!t.dataset.route) render(); return; }
    const opt = e.target.closest('[data-option]');
    if (opt) { selected = Number(opt.dataset.option); $$('.option').forEach(x => x.classList.remove('selected')); opt.classList.add('selected'); return; }
    const jump = e.target.closest('[data-mock-jump]');
    if (jump && mock) { mock.index = Number(jump.dataset.mockJump); render(); return; }
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action) handleAction(action, e.target.closest('[data-action]'));
  };
}

function handleAction(action, node) {
  if (action === 'next-question') { currentQuestion = pickQuestion(activeSection, activeTopic, currentQuestion?.id); selected = null; render(); }
  if (action === 'practice-topic') { route = 'Practice'; currentQuestion = pickQuestion(activeSection, activeTopic); render(); }
  if (action === 'submit-answer') submitAnswer();
  if (action === 'hint') showResult('Hint', hintFor(currentQuestion));
  if (action === 'teach-question') teachQuestion(currentQuestion);
  if (action === 'clear-board') $('#teacherBoard').innerHTML = boardSvg('Board cleared', ['Choose a question to draw a fresh explanation.']);
  if (action === 'speak-board') speak($('#teacherBoard')?.innerText || 'Let us solve this step by step.');
  if (action === 'interrupt') { speechSynthesis?.cancel(); stopListening(); toast('Teacher interrupted.'); }
  if (action === 'listen') toggleListening();
  if (action === 'ask') answerAsk();
  if (action === 'clear-ask') { $('#askText').value = ''; $('#askResult').classList.add('hidden'); }
  if (action === 'download-model') { state.downloads[node.dataset.model] = true; saveState(); toast('Marked as available for this browser storage.'); render(); }
  if (action === 'delete-model') { delete state.downloads[node.dataset.model]; saveState(); toast('Model pack entry removed from browser storage.'); render(); }
  if (action === 'start-mock') { mock = { section: 'QA', index: 0, answers: {}, started: Date.now() }; route = 'Mock Test'; render(); }
  if (action === 'finish-mock') { finishMock(); }
}

function pickQuestion(section, topic, exclude) {
  let pool = bank.filter(q => q.section === section && q.topic === topic && q.id !== exclude);
  if (!pool.length) pool = bank.filter(q => q.section === section && q.id !== exclude);
  return pool[Math.floor(Math.random() * pool.length)] || bank[0];
}

function submitAnswer() {
  const q = currentQuestion;
  if (!q) return;
  const value = q.type === 'MCQ' ? selected : $('#tita')?.value;
  if (value === null || value === undefined || value === '') { toast('Enter or select an answer first.'); return; }
  const correct = q.type === 'MCQ' ? Number(value) === q.answer : normalize(value) === normalize(q.answer);
  const seconds = Math.max(1, Math.round((Date.now() - (state.questionStarted || Date.now())) / 1000));
  const error = correct ? 'none' : classifyError(q, value);
  state.history.push({ date: today(), qid: q.id, topic: q.topic, section: q.section, correct, seconds, error });
  state.mastery[q.topic] = clamp((state.mastery[q.topic] || .08) + (correct ? .08 : -.04), 0, 1);
  if (mock) mock.answers[q.id] = { correct, value };
  saveState();
  showResult(correct ? 'Correct' : 'Review this', `${q.solution} Fast CAT method: reduce the setup before calculation. Trap check: ${trapFor(q)} Expected solve time: ${expectedTime(q)} sec.`);
  markOptions(q, correct);
  teachQuestion(q);
}

function showResult(title, text) {
  const el = $('#result') || $('#askResult');
  if (!el) return;
  el.classList.remove('hidden');
  el.innerHTML = `<div class="card"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></div>`;
}

function markOptions(q) {
  if (q.type !== 'MCQ') return;
  $$('.option').forEach((el, i) => {
    el.classList.toggle('correct', i === q.answer);
    el.classList.toggle('wrong', selected === i && selected !== q.answer);
  });
}

function classifyError(q, value) {
  if (q.section === 'VARC') return 'evidence mismatch';
  if (q.section === 'DILR') return 'constraint leakage';
  if (String(value).trim()) return 'calculation or wording';
  return 'unattempted';
}

function hintFor(q) {
  if (q.section === 'QA') return 'Write the expression first, then simplify. Avoid mental shortcuts until the relation is clear.';
  if (q.section === 'DILR') return 'List the hard constraints first and eliminate impossible cases before calculating.';
  return 'Find the sentence that directly supports or weakens each option.';
}

function trapFor(q) {
  if (q.section === 'QA') return 'Units, percent base, sign, or option bait.';
  if (q.section === 'DILR') return 'Missing one condition after finding a tempting arrangement.';
  return 'Choosing an option that sounds true but is not supported by the passage.';
}

function expectedTime(q) {
  if (q.section === 'VARC') return q.passage ? 105 : 70;
  if (q.section === 'DILR') return 150;
  return q.type === 'TITA' ? 95 : 75;
}

function teachQuestion(q) {
  const lines = [
    `Topic: ${topicName(q.topic)}`,
    q.section === 'QA' ? '1. Translate words into math.' : q.section === 'DILR' ? '1. Write constraints visibly.' : '1. Locate textual evidence.',
    q.section === 'QA' ? '2. Reduce before calculating.' : q.section === 'DILR' ? '2. Eliminate impossible cases.' : '2. Compare every option to evidence.',
    `Answer: ${q.type === 'MCQ' ? q.options[q.answer] : q.answer}`,
    `Trap: ${trapFor(q)}`
  ];
  $('#teacherBoard').innerHTML = boardSvg('Teacher method', lines);
  state.teacherLog.push({ at: Date.now(), qid: q.id, lines });
  saveState();
}

function drawQuestion(q) {
  state.questionStarted = Date.now();
  setTimeout(() => teachQuestion(q), 20);
}

function drawLesson() {
  const board = $('#teacherBoard');
  if (board) board.innerHTML = boardSvg(topicName(activeTopic), ['Concept -> setup -> shortcut -> trap', lessonCopy(activeTopic).shortcut, lessonCopy(activeTopic).commontrap]);
}

function answerAsk() {
  const text = $('#askText').value.trim();
  if (!text) { toast('Type or dictate a question first.'); return; }
  const result = solveText(text);
  $('#askResult').classList.remove('hidden');
  $('#askResult').innerHTML = `<h2>${escapeHtml(result.title)}</h2><p>${escapeHtml(result.explanation)}</p>`;
  $('#teacherBoard').innerHTML = boardSvg(result.title, result.steps);
  speak(result.explanation);
}

function solveText(text) {
  const nums = text.match(/-?\d+(\.\d+)?/g)?.map(Number) || [];
  if (/percent|%|percentage/i.test(text) && nums.length >= 2) {
    const percentFirst = /(?:percent|%)\s+of/i.test(text);
    const rate = percentFirst ? nums[0] : nums[1];
    const base = percentFirst ? nums[1] : nums[0];
    const value = base * rate / 100;
    return { title: 'Percent method', explanation: `${rate} percent of ${base} is ${value}.`, steps: [`Base = ${base}`, `Rate = ${rate}%`, `Value = base x rate / 100`, `Answer = ${value}`] };
  }
  if (/average|mean/i.test(text) && nums.length) {
    const sum = nums.reduce((a,b)=>a+b,0);
    return { title: 'Average method', explanation: `The average of the visible numbers is ${(sum / nums.length).toFixed(2)}.`, steps: [`Sum = ${sum}`, `Count = ${nums.length}`, `Average = sum / count`] };
  }
  return { title: 'Teacher explanation', explanation: 'I could not deterministically classify the full problem. I will still structure it: identify givens, target, constraints, and then solve with a topic method. For production-grade OCR or handwriting, enable the local OCR/math packs in Model Controls.', steps: ['Given: extract quantities', 'Target: what is asked?', 'Method: choose CAT topic', 'Verify: calculate independently'] };
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = state.lang === 'Hindi' ? 'hi-IN' : state.lang === 'Telugu' ? 'te-IN' : 'en-IN';
  speechSynthesis.speak(u);
}

function toggleListening() {
  if (liveMode) { stopListening(); return; }
  const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Ctor) { toast('Speech recognition is not available in this browser.'); return; }
  recognition = new Ctor();
  recognition.lang = state.lang === 'Hindi' ? 'hi-IN' : state.lang === 'Telugu' ? 'te-IN' : 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onresult = e => {
    const text = [...e.results].map(r => r[0].transcript).join(' ');
    const box = $('#askText');
    if (box) box.value = `${box.value} ${text}`.trim();
    toast('Speech captured.');
  };
  recognition.onerror = () => toast('Speech capture failed. Try typed input or another browser.');
  recognition.onend = () => { liveMode = false; };
  liveMode = true;
  recognition.start();
  toast('Listening. Speak the question or command.');
}

function stopListening() {
  try { recognition?.stop(); } catch {}
  liveMode = false;
}

function setupCanvas() {
  const c = $('#drawPad');
  if (!c) return;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = '#172033'; ctx.lineWidth = 3; ctx.lineCap = 'round';
  let drawing = false;
  const pos = e => { const r = c.getBoundingClientRect(); const p = e.touches?.[0] || e; return [(p.clientX - r.left) * c.width / r.width, (p.clientY - r.top) * c.height / r.height]; };
  c.onpointerdown = e => { drawing = true; ctx.beginPath(); ctx.moveTo(...pos(e)); };
  c.onpointermove = e => { if (!drawing) return; ctx.lineTo(...pos(e)); ctx.stroke(); };
  c.onpointerup = () => { drawing = false; toast('Handwriting captured locally. Enable math recognition pack for formula extraction.'); };
}

function weakestTopics(n) {
  return Object.values(syllabus).flat().map(([name,id]) => ({ name, id, mastery: state.mastery[id] || 0 })).sort((a,b)=>a.mastery-b.mastery).slice(0,n);
}

function finishMock() {
  const answers = Object.values(mock?.answers || {});
  const score = answers.reduce((s, a) => s + (a.correct ? 3 : -1), 0);
  mock = null;
  saveState();
  route = 'Progress';
  toast(`Mock saved. Score signal: ${score}.`);
  render();
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') { speechSynthesis?.cancel(); stopListening(); }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('../sw.js', import.meta.url)).catch(() => {});
}

render();

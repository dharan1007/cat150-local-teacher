import { questionBank } from './question-bank.js';
import { challengeBank } from './challenge-bank.js';
import { lessons } from './lessons.js';
import { createTeacherSpeech } from './speech.js';
import { createVoiceInput } from './voice.js';

const routes = ['Home', 'Learn', 'Practice', 'Mock Test', 'Ask Teacher', 'Syllabus', 'Progress'];
const sections = [
  { id: 'VARC', name: 'Verbal Ability & Reading Comprehension', minutes: 40, max: 72 },
  { id: 'DILR', name: 'Data Interpretation & Logical Reasoning', minutes: 40, max: 66 },
  { id: 'QA', name: 'Quantitative Ability', minutes: 40, max: 66 }
];

const syllabus = {
  VARC: [['RC Main Idea', 'rc-main'], ['RC Inference', 'rc-inference'], ['RC Detail', 'rc-detail'], ['RC Application', 'rc-application'], ['RC Argument', 'rc-argument'], ['RC Tone', 'rc-tone'], ['Para Summary', 'va-summary'], ['Para Completion', 'va-completion'], ['Odd Sentence', 'va-odd'], ['Para Jumbles', 'va-order']],
  DILR: [['Scheduling', 'lr-schedule'], ['Games & Tournaments', 'lr-games'], ['Tables', 'di-tables'], ['Ratios & Shares', 'di-ratios'], ['Arrangements', 'lr-arrange'], ['Distribution', 'lr-distribution'], ['Charts', 'di-charts'], ['Constraints', 'lr-optimize']],
  QA: [['Percentages', 'qa-percent'], ['Profit & Loss', 'qa-pl'], ['Ratio', 'qa-ratio'], ['Averages', 'qa-average'], ['Mixtures', 'qa-mixture'], ['Time Speed Distance', 'qa-tsd'], ['Work', 'qa-work'], ['Interest', 'qa-interest'], ['Linear Equations', 'qa-linear'], ['Quadratics', 'qa-quadratic'], ['Inequalities', 'qa-ineq'], ['Functions', 'qa-functions'], ['Logs', 'qa-logs'], ['Series', 'qa-series'], ['Numbers', 'qa-numbers'], ['Remainders', 'qa-remainder'], ['Geometry', 'qa-geometry'], ['Mensuration', 'qa-mensuration'], ['Coordinate Geometry', 'qa-coordinate'], ['PnC', 'qa-pnc'], ['Probability', 'qa-probability'], ['Sets', 'qa-sets']]
};

const bank = [...questionBank.map(q => ({ ...q, difficulty: 'Easy' })), ...challengeBank];

const state = loadState();
let route = state.route || 'Home';
let activeSection = state.section || 'QA';
let activeTopic = state.topic || 'qa-percent';
let currentQuestion = null;
let selected = null;
let mock = state.mock || null;
let boardSteps = [];
let boardTitle = 'Teacher board';
let voiceStatus = 'Ready to teach';
let voiceProgress = 0;
let voiceFile = '';
let mockTimerId = null;
let selectedImageFile = null;
const teacherSpeech = createTeacherSpeech(
  index => $$('.board-step').forEach((step, i) => step.classList.toggle('speaking', i === index)),
  message => { voiceStatus = message; updateVoiceStatus(); }
);
const voiceInput = createVoiceInput({
  onStatus: message => { voiceStatus = message; updateVoiceStatus(); },
  onProgress: (progress, file) => {
    voiceProgress = progress;
    voiceFile = file || '';
    updateVoiceStatus();
  },
  onReady: () => { updateVoiceStatus(); updateStorageEstimate(); },
  onText: handleSpokenText
});

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
  try { localStorage.setItem('cat150-local-teacher', JSON.stringify(state)); } catch {}
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
  state.boardWidth = clamp(Number(state.boardWidth) || 480, 340, 650);
  document.documentElement.style.setProperty('--board-width', `${state.boardWidth}px`);
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
  return `
    <aside class="teacher-rail ${state.boardExpanded ? 'expanded' : ''}" aria-label="Teacher board and voice controls">
      <div class="row"><div><div class="kicker">Teacher Board</div><h2>${escapeHtml(boardTitle)}</h2></div><button class="secondary" data-action="expand-board" aria-pressed="${!!state.boardExpanded}">${state.boardExpanded ? 'Close' : 'Expand'}</button></div>
      <div class="segmented" role="group" aria-label="Language">
        ${['English','Hindi','Telugu'].map(l => `<button data-lang="${l}" class="${state.lang === l || (!state.lang && l === 'English') ? 'active' : ''}">${l}</button>`).join('')}
      </div>
      <div class="toolbar">
        <button class="primary" data-action="speak-board">Speak lesson</button>
        <button class="secondary" data-action="load-voice">Load local voice input</button>
        <button class="secondary" data-action="listen">${voiceInput.recording ? 'Stop recording' : 'Talk'}</button>
        <button class="secondary" data-action="interrupt">Interrupt</button>
      </div>
      <div class="voice-status" id="voiceStatus" role="status">${escapeHtml(voiceStatus)}</div>
      <progress id="voiceProgress" max="100" value="${voiceProgress}" ${voiceProgress ? '' : 'hidden'}></progress>
      <small id="voiceFile" class="muted">${escapeHtml(voiceFile)}</small>
      <div class="board" id="teacherBoard">${boardMarkup(boardTitle, boardSteps.length ? boardSteps : ['Choose a topic or question to begin.'])}</div>
      <label class="board-size-label">Board width <input id="boardWidth" type="range" min="340" max="650" step="10" value="${Math.min(state.boardWidth || 480, 650)}"></label>
    </aside>`;
}

function boardMarkup(title, steps) {
  const diagram = boardVisual() || (activeSection === 'QA'
    ? `<div class="board-diagram" aria-hidden="true"><span>Given</span><b>→</b><span>Model</span><b>→</b><span>Solve</span><b>→</b><span>Check</span></div>`
    : activeSection === 'DILR'
      ? `<div class="board-diagram" aria-hidden="true"><span>Clues</span><b>→</b><span>Grid</span><b>→</b><span>Cases</span><b>→</b><span>Verify</span></div>`
      : `<div class="board-diagram" aria-hidden="true"><span>Claim</span><b>→</b><span>Evidence</span><b>→</b><span>Options</span></div>`);
  return `<div class="board-title">${escapeHtml(title)}</div>${diagram}<ol class="board-steps">${steps.map((step, i) => `<li class="board-step" data-step="${i}">${escapeHtml(step)}</li>`).join('')}</ol>`;
}

function boardVisual() {
  if (activeTopic === 'qa-percent') return `<svg class="board-visual" viewBox="0 0 340 130" role="img" aria-label="Successive percent change: 100 becomes 120, then 96"><text x="8" y="22">Start 100</text><rect x="100" y="9" width="200" height="18" fill="#dbe6fb"/><text x="8" y="62">+20% 120</text><rect x="100" y="49" width="240" height="18" fill="#9bb9ef"/><text x="8" y="102">-20% 96</text><rect x="100" y="89" width="192" height="18" fill="#2457d6"/></svg>`;
  if (activeTopic === 'qa-ratio' || activeTopic === 'di-ratios') return `<svg class="board-visual" viewBox="0 0 340 120" role="img" aria-label="Ratio 3 to 5 shown as equal parts"><text x="8" y="25">A</text>${[0,1,2].map(i => `<rect x="${42+i*44}" y="8" width="38" height="28" fill="#2457d6"/>`).join('')}<text x="8" y="82">B</text>${[0,1,2,3,4].map(i => `<rect x="${42+i*44}" y="65" width="38" height="28" fill="#9bb9ef"/>`).join('')}</svg>`;
  if (activeTopic === 'qa-geometry' || activeTopic === 'qa-mensuration') return `<svg class="board-visual" viewBox="0 0 340 160" role="img" aria-label="Right triangle with perpendicular sides 9 and 12 and hypotenuse 15"><path d="M42 133 L42 25 L250 133 Z" fill="#e8efff" stroke="#2457d6" stroke-width="3"/><path d="M42 119 h14 v14" fill="none" stroke="#172033" stroke-width="2"/><text x="10" y="82">9</text><text x="139" y="153">12</text><text x="143" y="68">15</text></svg>`;
  if (activeTopic === 'qa-sets') return `<svg class="board-visual" viewBox="0 0 340 170" role="img" aria-label="Venn diagram with two overlapping sets"><circle cx="135" cy="85" r="62" fill="#dbe6fb" fill-opacity=".8" stroke="#2457d6" stroke-width="2"/><circle cx="205" cy="85" r="62" fill="#b9d0f7" fill-opacity=".7" stroke="#2457d6" stroke-width="2"/><text x="80" y="88">A only</text><text x="155" y="88">Both</text><text x="218" y="88">B only</text></svg>`;
  if (activeTopic === 'qa-probability') return `<svg class="board-visual" viewBox="0 0 340 160" role="img" aria-label="Two-stage probability tree"><path d="M30 80 L130 35 M30 80 L130 125 M150 35 L265 15 M150 35 L265 65 M150 125 L265 100 M150 125 L265 150" fill="none" stroke="#2457d6" stroke-width="2"/><text x="8" y="82">Start</text><text x="134" y="39">R</text><text x="134" y="129">B</text><text x="275" y="20">RR</text><text x="275" y="70">RB</text><text x="275" y="105">BR</text><text x="275" y="155">BB</text></svg>`;
  if (['lr-arrange','lr-schedule','lr-distribution'].includes(activeTopic)) return `<div class="board-slots" role="img" aria-label="Six ordered positions for constraints">${[1,2,3,4,5,6].map(i => `<span>${i}</span>`).join('')}</div>`;
  if (['di-tables','di-charts'].includes(activeTopic)) return `<table class="board-table" aria-label="Example tea and coffee data"><thead><tr><th></th><th>Tea</th><th>Coffee</th></tr></thead><tbody><tr><th>Mon</th><td>80</td><td>120</td></tr><tr><th>Tue</th><td>100</td><td>100</td></tr></tbody></table>`;
  return '';
}

function setBoard(title, steps) {
  boardTitle = title;
  boardSteps = steps.filter(Boolean).map(String);
  const board = $('#teacherBoard');
  if (board) board.innerHTML = boardMarkup(title, boardSteps);
  const heading = $('.teacher-rail h2');
  if (heading) heading.textContent = title;
}

function updateVoiceStatus() {
  const status = $('#voiceStatus');
  if (status) status.textContent = voiceStatus;
  const progress = $('#voiceProgress');
  if (progress) { progress.value = voiceProgress; progress.hidden = !voiceProgress || voiceProgress >= 100; }
  const file = $('#voiceFile');
  if (file) file.textContent = voiceFile;
  const talk = $('[data-action="listen"]');
  if (talk) talk.textContent = voiceInput.recording ? 'Stop recording' : 'Talk';
  const modelButton = $('[data-action="download-model"]');
  if (modelButton) modelButton.textContent = voiceInput.ready ? 'Loaded' : 'Load model';
  const railButton = $('[data-action="load-voice"]');
  if (railButton) railButton.textContent = voiceInput.ready ? 'Voice ready' : 'Load local voice input';
}

async function updateStorageEstimate() {
  const label = $('#storageUsage');
  if (!label || !navigator.storage?.estimate) return;
  try {
    const estimate = await navigator.storage.estimate();
    label.textContent = `Browser storage used by this site: ${Math.round((estimate.usage || 0) / 1048576)} MB`;
  } catch {
    label.textContent = 'Storage estimate unavailable in this browser.';
  }
}

async function deleteModelCache() {
  await voiceInput.unload();
  try {
    const cache = await caches.open('transformers-cache');
    const requests = await cache.keys();
    const modelFiles = requests.filter(request => new URL(request.url).pathname.startsWith('/onnx-community/whisper-tiny/resolve/'));
    await Promise.all(modelFiles.map(request => cache.delete(request)));
    voiceProgress = 0;
    voiceFile = '';
    voiceStatus = modelFiles.length ? 'Downloaded Whisper model files deleted' : 'No downloaded Whisper model found';
    updateVoiceStatus();
    updateStorageEstimate();
  } catch (error) {
    voiceStatus = `Could not delete model: ${error.message}`;
    updateVoiceStatus();
  }
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
          <div class="card"><p>Local voice</p><div class="metric">${voiceInput.ready ? 'Ready' : 'Off'}</div></div>
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
  if (!topics.some(([, id]) => id === activeTopic)) activeTopic = topics[0][1];
  const entry = lessons[activeTopic];
  const mode = state.learnMode || 'Explain';
  const lessonBody = mode === 'Example'
    ? `<p class="example-prompt">${escapeHtml(entry.example)}</p><ol class="method-list">${entry.worked.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>`
    : mode === 'Shortcut'
      ? `<p>${escapeHtml(entry.shortcut)}</p><p class="muted">Use the shortcut only after checking its conditions.</p>`
      : mode === 'Common Trap'
        ? `<p>${escapeHtml(entry.trap)}</p><p class="muted">Check this before submitting your answer.</p>`
        : `<p class="lesson-concept">${escapeHtml(entry.concept)}</p><ol class="method-list">${entry.method.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>`;
  renderShell(`
    <div class="layout">
      <section class="panel">
        <div class="section-head"><div><div class="kicker">Learn</div><h1>${sections.find(s => s.id === activeSection).name}</h1></div></div>
        <div class="segmented">${sections.map(s => `<button data-section="${s.id}" class="${activeSection === s.id ? 'active' : ''}">${s.id}</button>`).join('')}</div>
        <div class="learn-workspace">
        <div class="topic-list" aria-label="Topics">${topics.map(([name,id]) => `<button class="topic ${activeTopic === id ? 'active' : ''}" data-topic="${id}"><strong>${name}</strong></button>`).join('')}</div>
        <section class="lesson-detail" aria-label="${escapeHtml(topicName(activeTopic))} lesson">
          <div class="kicker">${topicName(activeTopic)}</div>
          <h2>${topicName(activeTopic)}</h2>
          <div class="segmented lesson-modes" role="group" aria-label="Teaching mode">${['Explain','Example','Shortcut','Common Trap'].map(value => `<button data-learn-mode="${value}" class="${mode === value ? 'active' : ''}">${value}</button>`).join('')}</div>
          <div class="lesson-body"><h3>${mode}</h3>${lessonBody}</div>
          <div class="toolbar"><button class="primary" data-action="teach-lesson">Teach aloud</button><button class="secondary" data-action="practice-topic">Practice this topic</button></div>
        </section>
        </div>
      </section>
      ${teacherRail()}
    </div>`);
  drawLesson();
}

function practice() {
  if (!currentQuestion) currentQuestion = pickQuestion(activeSection, activeTopic);
  renderShell(`
    <div class="layout">
      <section class="panel">
        <div class="section-head"><div><div class="kicker">Practice</div><h1>${currentQuestion ? topicName(currentQuestion.topic) : topicName(activeTopic)}</h1><p>Choose a difficulty, then solve and review a verified question.</p></div><button class="secondary" data-action="next-question">Next</button></div>
        <div class="segmented" role="group" aria-label="Difficulty">${['All','Easy','Medium','Hard'].map(d => `<button data-difficulty="${d}" class="${(state.difficulty || 'All') === d ? 'active' : ''}">${d}</button>`).join('')}</div>
        ${currentQuestion ? questionHtml(currentQuestion) : `<div class="notice">No ${escapeHtml(state.difficulty)} question is available for ${escapeHtml(topicName(activeTopic))}. Change difficulty or choose another topic.</div>`}
        <div id="result"></div>
      </section>
      ${teacherRail()}
    </div>`);
  if (currentQuestion) drawQuestion(currentQuestion);
}

function questionHtml(q) {
  return `<div class="question">
    ${q.passage ? `<div class="passage">${escapeHtml(q.passage)}</div>` : ''}
    ${q.set ? `<div class="setbox">${escapeHtml(q.set)}</div>` : ''}
    <div class="question-meta"><span>${escapeHtml(q.section)}</span><span>${escapeHtml(q.difficulty)}</span></div>
    <h2>${escapeHtml(q.q)}</h2>
    ${q.type === 'MCQ' ? `<div class="options">${q.options.map((o, i) => `<button class="option ${selected === i ? 'selected' : ''}" data-option="${i}">${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join('')}</div>` : `<input class="answer-input" id="tita" placeholder="Type the exact answer" value="${mock && route === 'Mock Test' ? escapeHtml(mock.answers[q.id] ?? '') : ''}">`}
    <div class="toolbar"><button class="primary" data-action="submit-answer">${mock && route === 'Mock Test' ? 'Save answer' : 'Submit answer'}</button>${mock && route === 'Mock Test' ? '' : '<button class="secondary" data-action="hint">Hint</button><button class="secondary" data-action="teach-question">Teach this</button>'}</div>
  </div>`;
}

function askTeacher() {
  renderShell(`
    <div class="layout">
      <section class="panel">
        <div class="section-head"><div><div class="kicker">Ask Teacher</div><h1>Ask a question</h1><p>Ask for a topic lesson, dictate a question, or solve a supported calculation. Speech recognition runs on your device after the model is loaded. Detailed lessons are currently written in English.</p></div></div>
        <textarea id="askText" placeholder="Type a topic name, a percentage-of question, or an average calculation. You can also dictate or scan text."></textarea>
        <div class="toolbar" style="margin-top:10px"><button class="primary" data-action="ask">Solve and teach</button><button class="secondary" data-action="listen">Record question</button><button class="secondary" data-action="clear-ask">Clear</button></div>
        <div class="filebox" style="margin-top:12px"><label for="imageInput">Question image</label><input id="imageInput" type="file" accept="image/*"><p id="imageStatus" role="status">Choose or paste a photo or screenshot, then select Read image.</p><img id="imagePreview" alt="Uploaded question preview" hidden><div class="toolbar"><button class="secondary" data-action="read-image">Read image locally</button></div><label for="drawPad">Handwriting pad</label><canvas id="drawPad" width="680" height="180" aria-label="Handwriting pad"></canvas><div class="toolbar"><button class="secondary" data-action="read-handwriting">Read handwriting locally</button><button class="secondary" data-action="clear-handwriting">Clear drawing</button></div></div>
        <div id="askResult" class="card hidden" style="margin-top:12px"></div>
        <section class="model" style="margin-top:12px"><h2>Local voice model</h2><p>Whisper tiny multilingual runs speech recognition in this browser. The first download is approximately 45 MB plus runtime files; it is cached by the browser. No recorded audio is sent to an inference service.</p><p id="storageUsage" class="muted"></p><div class="toolbar"><button class="secondary" data-action="download-model">${voiceInput.ready ? 'Loaded' : 'Load model'}</button><button class="secondary" data-action="unload-model">Unload memory</button><button class="danger" data-action="delete-model">Delete downloaded model</button></div></section>
      </section>
      ${teacherRail()}
    </div>`);
  setupCanvas();
  updateStorageEstimate();
  $('#imageInput').onchange = event => {
    const file = event.target.files?.[0];
    if (!file) return;
    selectedImageFile = file;
    const preview = $('#imagePreview');
    preview.src = URL.createObjectURL(file);
    preview.hidden = false;
    $('#imageStatus').textContent = `${file.name} selected. Read it locally or type the question.`;
  };
  $('#askText').onpaste = event => {
    const file = [...(event.clipboardData?.files || [])].find(item => item.type.startsWith('image/'));
    if (!file) return;
    selectedImageFile = file;
    const preview = $('#imagePreview');
    preview.src = URL.createObjectURL(file);
    preview.hidden = false;
    $('#imageStatus').textContent = 'Pasted image ready for local reading.';
  };
}

function mockTest() {
  if (mock && !Array.isArray(mock.questions)) mock = null;
  if (!mock) {
    renderShell(`<section class="panel"><div class="kicker">Mock Test</div><h1>CAT-style diagnostic</h1><p>24 questions across VARC, DILR and QA. Each section includes easy, medium and hard questions. The 60-minute timer runs locally on your device; solutions appear after finishing.</p><div class="grid grid-3">${sections.map(s => `<div class="card"><h2>${s.id}</h2><p>8 questions</p></div>`).join('')}</div><button class="primary" data-action="start-mock" style="margin-top:14px">Start mock</button></section>`);
    return;
  }
  const pool = mock.questions.map(id => bank.find(q => q.id === id)).filter(Boolean);
  const q = pool[mock.index] || pool[0];
  if (!q) { mock = null; render(); return; }
  currentQuestion = q;
  selected = q.type === 'MCQ' && mock.answers[q.id] !== undefined ? Number(mock.answers[q.id]) : null;
  renderShell(`<div class="mock-grid"><aside class="card"><div class="kicker">CAT-style diagnostic</div><div class="mock-timer" id="mockTimer">60:00</div><p>${mock.index + 1} of ${pool.length} / ${q.section}</p><div class="mock-palette">${pool.map((x,i)=>`<button class="${mock.answers[x.id] !== undefined ? 'done' : ''}" data-mock-jump="${i}" aria-label="Question ${i+1}">${i+1}</button>`).join('')}</div><button class="primary" data-action="finish-mock" style="margin-top:12px">Finish mock</button></aside><section class="panel">${questionHtml(q)}<div class="toolbar" style="margin-top:14px"><button class="secondary" data-action="mock-prev" ${mock.index === 0 ? 'disabled' : ''}>Previous</button><button class="secondary" data-action="mock-next" ${mock.index === pool.length - 1 ? 'disabled' : ''}>Next</button></div></section></div>`);
  updateMockTimer();
  if (!mockTimerId) mockTimerId = setInterval(updateMockTimer, 1000);
}

function syllabusView() {
  renderShell(`<section class="panel"><div class="kicker">Syllabus</div><h1>Coverage map</h1><div class="grid grid-3">${sections.map(s => `<div class="card"><h2>${s.id}</h2><div class="stack">${syllabus[s.id].map(([n,id]) => `<button class="topic" data-topic="${id}" data-section="${s.id}" data-route="Learn"><strong>${n}</strong><div class="progress"><i style="width:${Math.round((state.mastery[id] || 0) * 100)}%"></i></div></button>`).join('')}</div></div>`).join('')}</div></section>`);
}

function progress() {
  const h = state.history;
  const correct = h.filter(x => x.correct).length;
  const wrong = h.filter(x => !x.correct).length;
  const leakage = h.reduce((m, x) => { m[x.error] = (m[x.error] || 0) + 1; return m; }, {});
  const lastMock = state.mocks?.at(-1);
  const reviews = lastMock?.questions?.map((id, index) => {
    const q = bank.find(item => item.id === id);
    if (!q) return '';
    const value = lastMock.answers?.[id];
    const attempted = value !== undefined && value !== '';
    const ok = attempted && (q.type === 'MCQ' ? Number(value) === q.answer : normalize(value) === normalize(q.answer));
    const yourAnswer = attempted ? q.type === 'MCQ' ? q.options[Number(value)] : value : 'Not attempted';
    const answer = q.type === 'MCQ' ? q.options[q.answer] : q.answer;
    return `<details class="review-item"><summary>Q${index + 1} / ${escapeHtml(q.section)} / ${ok ? 'Correct' : attempted ? 'Review' : 'Skipped'}</summary>${q.passage ? `<p>${escapeHtml(q.passage)}</p>` : ''}${q.set ? `<p>${escapeHtml(q.set)}</p>` : ''}<p><strong>${escapeHtml(q.q)}</strong></p><p>Your answer: ${escapeHtml(yourAnswer)}</p><p>Correct answer: ${escapeHtml(answer)}</p><p>${escapeHtml(q.solution)}</p></details>`;
  }).join('') || '';
  renderShell(`<section class="panel"><div class="kicker">Progress</div><h1>Readiness analytics</h1><div class="grid grid-3"><div class="card"><p>Attempts</p><div class="metric">${h.length}</div></div><div class="card"><p>Correct</p><div class="metric">${correct}</div></div><div class="card"><p>Latest mock</p><div class="metric">${lastMock ? `${lastMock.score}/72` : '-'}</div></div></div><div class="grid grid-2" style="margin-top:14px"><div class="card"><h2>Error taxonomy</h2>${Object.entries(leakage).filter(([k]) => k !== 'none').map(([k,v])=>`<p><strong>${k}</strong>: ${v}</p>`).join('') || '<p>No errors recorded.</p>'}</div><div class="card"><h2>Recent attempts</h2>${h.slice(-12).reverse().map(x=>`<p>${x.correct ? 'Correct' : 'Review'} - ${topicName(x.topic)}${x.seconds ? ` - ${x.seconds}s` : ''}</p>`).join('') || '<p>Start practice to build analytics.</p>'}</div></div>${lastMock ? `<section class="lesson-detail"><h2>Latest mock</h2><p>${lastMock.correct} correct from ${lastMock.attempted} attempted; score ${lastMock.score} of 72 possible points.</p><div class="review-list">${reviews}</div></section>` : ''}</section>`);
}

function render() {
  saveState();
  ({ Home: home, Learn: learn, Practice: practice, 'Mock Test': mockTest, 'Ask Teacher': askTeacher, Syllabus: syllabusView, Progress: progress }[route] || home)();
}

function attachEvents() {
  document.onclick = e => {
    const lang = e.target.closest('[data-lang]');
    if (lang) {
      state.lang = lang.dataset.lang;
      teacherSpeech.stop();
      saveState();
      $$('[data-lang]').forEach(button => button.classList.toggle('active', button.dataset.lang === state.lang));
      voiceStatus = `${state.lang} selected`;
      updateVoiceStatus();
      return;
    }
    const mode = e.target.closest('[data-learn-mode]');
    if (mode) { state.learnMode = mode.dataset.learnMode; teacherSpeech.stop(); render(); return; }
    const difficulty = e.target.closest('[data-difficulty]');
    if (difficulty) { state.difficulty = difficulty.dataset.difficulty; currentQuestion = null; selected = null; teacherSpeech.stop(); render(); return; }
    const t = e.target.closest('[data-topic]');
    if (t) {
      activeTopic = t.dataset.topic;
      activeSection = Object.keys(syllabus).find(section => syllabus[section].some(([, id]) => id === activeTopic)) || activeSection;
      currentQuestion = null;
      teacherSpeech.stop();
      if (t.dataset.route) route = t.dataset.route;
      render();
      if (route === 'Learn') teacherSpeech.speak(boardSteps, state.lang);
      return;
    }
    const s = e.target.closest('[data-section]');
    if (s) { activeSection = s.dataset.section; activeTopic = syllabus[activeSection][0][1]; currentQuestion = null; teacherSpeech.stop(); if (s.dataset.route) route = s.dataset.route; render(); return; }
    const r = e.target.closest('[data-route]');
    if (r) { route = r.dataset.route; teacherSpeech.stop(); render(); return; }
    const opt = e.target.closest('[data-option]');
    if (opt) {
      selected = Number(opt.dataset.option);
      $$('.option').forEach(x => x.classList.remove('selected'));
      opt.classList.add('selected');
      if (route === 'Mock Test' && mock && currentQuestion) { mock.answers[currentQuestion.id] = selected; saveState(); }
      return;
    }
    const jump = e.target.closest('[data-mock-jump]');
    if (jump && mock) { mock.index = Number(jump.dataset.mockJump); render(); return; }
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action) handleAction(action, e.target.closest('[data-action]'));
  };
  document.oninput = e => {
    if (e.target.id === 'boardWidth') {
      state.boardWidth = Number(e.target.value);
      document.documentElement.style.setProperty('--board-width', `${state.boardWidth}px`);
      saveState();
    }
    if (e.target.id === 'tita' && route === 'Mock Test' && mock && currentQuestion) {
      mock.answers[currentQuestion.id] = e.target.value.trim();
      saveState();
    }
  };
}

function handleAction(action, node) {
  if (action === 'next-question') { currentQuestion = pickQuestion(activeSection, activeTopic, currentQuestion?.id); selected = null; render(); }
  if (action === 'practice-topic') { route = 'Practice'; state.difficulty = 'All'; currentQuestion = pickQuestion(activeSection, activeTopic); render(); }
  if (action === 'submit-answer') submitAnswer();
  if (action === 'hint') showResult('Hint', hintFor(currentQuestion));
  if (action === 'teach-question') teachQuestion(currentQuestion, true);
  if (action === 'teach-lesson') { drawLesson(); teacherSpeech.speak(boardSteps, state.lang); }
  if (action === 'clear-board') { teacherSpeech.stop(); setBoard('Board cleared', ['Choose a topic or question.']); }
  if (action === 'speak-board') teacherSpeech.speak(boardSteps, state.lang);
  if (action === 'expand-board') { state.boardExpanded = !state.boardExpanded; saveState(); $('.teacher-rail')?.classList.toggle('expanded', state.boardExpanded); node.textContent = state.boardExpanded ? 'Close' : 'Expand'; node.setAttribute('aria-pressed', String(state.boardExpanded)); }
  if (action === 'interrupt') { teacherSpeech.stop(); voiceInput.stop(); }
  if (action === 'load-voice') voiceInput.load().catch(error => { voiceStatus = `Local voice unavailable: ${error.message}`; updateVoiceStatus(); });
  if (action === 'listen') voiceInput.toggle();
  if (action === 'ask') answerAsk();
  if (action === 'read-image') recognizeImage(selectedImageFile);
  if (action === 'read-handwriting') $('#drawPad')?.toBlob(blob => recognizeImage(blob));
  if (action === 'clear-handwriting') setupCanvas();
  if (action === 'clear-ask') { $('#askText').value = ''; $('#askResult').classList.add('hidden'); }
  if (action === 'download-model') voiceInput.load().catch(error => { voiceStatus = `Local voice unavailable: ${error.message}`; updateVoiceStatus(); });
  if (action === 'unload-model') voiceInput.unload();
  if (action === 'delete-model') deleteModelCache();
  if (action === 'start-mock') { mock = buildMock(); route = 'Mock Test'; render(); }
  if (action === 'finish-mock') { finishMock(); }
  if (action === 'mock-prev' && mock) { mock.index = Math.max(0, mock.index - 1); render(); }
  if (action === 'mock-next' && mock) { mock.index = Math.min(mock.questions.length - 1, mock.index + 1); render(); }
}

function pickQuestion(section, topic, exclude) {
  const difficulty = state.difficulty || 'All';
  let pool = bank.filter(q => q.section === section && q.topic === topic && (difficulty === 'All' || q.difficulty === difficulty) && q.id !== exclude);
  if (!pool.length && exclude) pool = bank.filter(q => q.section === section && q.topic === topic && (difficulty === 'All' || q.difficulty === difficulty));
  return pool[Math.floor(Math.random() * pool.length)] || null;
}

function submitAnswer() {
  const q = currentQuestion;
  if (!q) return;
  const value = q.type === 'MCQ' ? selected : $('#tita')?.value;
  if (value === null || value === undefined || value === '') { toast('Enter or select an answer first.'); return; }
  if (route === 'Mock Test' && mock) {
    mock.answers[q.id] = value;
    mock.index = Math.min(mock.questions.length - 1, mock.index + 1);
    saveState();
    render();
    return;
  }
  const correct = q.type === 'MCQ' ? Number(value) === q.answer : normalize(value) === normalize(q.answer);
  const seconds = Math.max(1, Math.round((Date.now() - (state.questionStarted || Date.now())) / 1000));
  const error = correct ? 'none' : classifyError(q, value);
  state.history.push({ date: today(), qid: q.id, topic: q.topic, section: q.section, correct, seconds, error });
  state.mastery[q.topic] = clamp((state.mastery[q.topic] || .08) + (correct ? .08 : -.04), 0, 1);
  saveState();
  showResult(correct ? 'Correct' : 'Review this', `${q.solution} Shortcut: ${lessons[q.topic]?.shortcut || ''} Trap: ${lessons[q.topic]?.trap || trapFor(q)}`);
  markOptions(q, correct);
  teachQuestion(q, true);
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
  if (lessons[q.topic]?.method?.[0]) return lessons[q.topic].method[0];
  if (q.section === 'QA') return 'Write the expression first, then simplify. Avoid mental shortcuts until the relation is clear.';
  if (q.section === 'DILR') return 'List the hard constraints first and eliminate impossible cases before calculating.';
  return 'Find the sentence that directly supports or weakens each option.';
}

function trapFor(q) {
  if (q.section === 'QA') return 'Units, percent base, sign, or option bait.';
  if (q.section === 'DILR') return 'Missing one condition after finding a tempting arrangement.';
  return 'Choosing an option that sounds true but is not supported by the passage.';
}

function teachQuestion(q, aloud = false) {
  if (!q) return;
  const entry = lessons[q.topic];
  const lines = [
    entry?.concept || hintFor(q),
    ...(entry?.method || []),
    q.solution,
    `Answer: ${q.type === 'MCQ' ? q.options[q.answer] : q.answer}`,
    `Trap: ${entry?.trap || trapFor(q)}`
  ];
  setBoard(`${topicName(q.topic)} solution`, lines);
  state.teacherLog.push({ at: Date.now(), qid: q.id });
  saveState();
  if (aloud) teacherSpeech.speak(lines, state.lang);
}

function drawQuestion(q) {
  state.questionStarted = Date.now();
  if ($('#teacherBoard')) setBoard(`${topicName(q.topic)} question`, [
    'Read the question and identify what is being asked.',
    hintFor(q),
    'Submit an answer or choose Teach this for the full worked method.'
  ]);
}

function drawLesson() {
  const entry = lessons[activeTopic];
  if (!entry) return;
  const mode = state.learnMode || 'Explain';
  const steps = mode === 'Example' ? [entry.example, ...entry.worked]
    : mode === 'Shortcut' ? [entry.shortcut, 'Check the stated conditions before using this shortcut.']
    : mode === 'Common Trap' ? [entry.trap, 'Pause and verify this before submitting.']
    : [entry.concept, ...entry.method];
  setBoard(`${topicName(activeTopic)}: ${mode}`, steps);
}

function answerAsk() {
  const text = $('#askText')?.value.trim();
  if (!text) { toast('Type or dictate a question first.'); return; }
  const topic = Object.values(syllabus).flat().find(([name]) => text.toLowerCase().includes(name.toLowerCase()));
  if (topic && /teach|explain|learn|concept|method|trick|shortcut/i.test(text)) {
    activeTopic = topic[1];
    activeSection = Object.keys(syllabus).find(section => syllabus[section].some(([, id]) => id === activeTopic));
    route = 'Learn';
    state.learnMode = /example/i.test(text) ? 'Example' : /shortcut|trick/i.test(text) ? 'Shortcut' : 'Explain';
    render();
    teacherSpeech.speak(boardSteps, state.lang);
    return;
  }
  const result = solveText(text);
  $('#askResult').classList.remove('hidden');
  $('#askResult').innerHTML = `<h2>${escapeHtml(result.title)}</h2><p>${escapeHtml(result.explanation)}</p>`;
  setBoard(result.title, result.steps);
  teacherSpeech.speak(result.steps, state.lang);
}

function solveText(text) {
  const nums = text.match(/-?\d+(\.\d+)?/g)?.map(Number) || [];
  const percentOf = text.match(/(-?\d+(?:\.\d+)?)\s*(?:%|percent|percentage|प्रतिशत|శాతం)\s*(?:of|का|की|के|లో|యొక్క)\s*(-?\d+(?:\.\d+)?)/i);
  if (percentOf) {
    const rate = Number(percentOf[1]);
    const base = Number(percentOf[2]);
    const value = base * rate / 100;
    return { title: 'Percent method', explanation: `${rate} percent of ${base} is ${value}.`, steps: [`Base = ${base}`, `Rate = ${rate}%`, `Value = base x rate / 100`, `Answer = ${value}`] };
  }
  if (/\b(?:average|mean)\b|औसत|సగటు/i.test(text) && nums.length >= 2 && /(?:of|for|का|की|के|యొక్క|లో)/i.test(text)) {
    const sum = nums.reduce((a,b)=>a+b,0);
    return { title: 'Average method', explanation: `The average of the visible numbers is ${(sum / nums.length).toFixed(2)}.`, steps: [`Sum = ${sum}`, `Count = ${nums.length}`, `Average = sum / count`] };
  }
  return { title: 'Question needs a topic', explanation: 'I cannot verify this answer from the text alone. Choose its topic in Learn or ask a percentage or average calculation. I will not invent a solution.', steps: ['Identify the given information.', 'Choose the CAT topic.', 'Work through the matching lesson and its practice question.'] };
}

function handleSpokenText(text) {
  if (!text) return;
  if (/^(stop|interrupt|pause|ruko|aapu)/i.test(text)) { teacherSpeech.stop(); return; }
  if (route !== 'Ask Teacher') { route = 'Ask Teacher'; render(); }
  const box = $('#askText');
  if (!box) return;
  box.value = `${box.value} ${text}`.trim();
  answerAsk();
}

async function recognizeImage(image) {
  if (!image) { toast('Choose an image or draw a question first.'); return; }
  const status = $('#imageStatus');
  if (status) status.textContent = 'Loading local text recognition...';
  let worker;
  try {
    const { default: Tesseract } = await import('https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/tesseract.esm.min.js');
    const languages = state.lang === 'Hindi' ? ['eng', 'hin'] : state.lang === 'Telugu' ? ['eng', 'tel'] : ['eng'];
    worker = await Tesseract.createWorker(languages, 1, {
      logger: message => {
        const percent = Math.round((message.progress || 0) * 100);
        if (status) status.textContent = `${message.status || 'Reading'} ${percent}%`;
      }
    });
    const result = await worker.recognize(image);
    const text = result.data.text?.trim();
    if (!text) { if (status) status.textContent = 'No text detected. Try a sharper image or type the question.'; return; }
    const box = $('#askText');
    if (box) box.value = `${box.value} ${text}`.trim();
    if (status) status.textContent = `Text detected (${Math.round(result.data.confidence || 0)}% confidence). Check the transcript before solving.`;
    box?.focus();
  } catch (error) {
    if (status) status.textContent = `Local text recognition failed: ${error.message}`;
  } finally {
    await worker?.terminate();
  }
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
  c.onpointerup = () => { drawing = false; };
  c.onpointercancel = () => { drawing = false; };
}

function weakestTopics(n) {
  return Object.values(syllabus).flat().map(([name,id]) => ({ name, id, mastery: state.mastery[id] || 0 })).sort((a,b)=>a.mastery-b.mastery).slice(0,n);
}

function buildMock() {
  const choose = (items, count) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count);
  };
  const questions = sections.flatMap(section =>
    [['Easy', 2], ['Medium', 4], ['Hard', 2]].flatMap(([difficulty, count]) =>
      choose(bank.filter(q => q.section === section.id && q.difficulty === difficulty), count)
    ).map(q => q.id)
  );
  if (questions.length !== 24 || new Set(questions).size !== 24) throw new Error('Mock bank is incomplete.');
  return { questions, index: 0, answers: {}, started: Date.now(), durationMs: 60 * 60 * 1000 };
}

function updateMockTimer() {
  if (!mock) return;
  const remaining = Math.max(0, mock.durationMs - (Date.now() - mock.started));
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const timer = $('#mockTimer');
  if (timer) timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (remaining === 0) finishMock();
}

function finishMock() {
  if (!mock) return;
  clearInterval(mockTimerId);
  mockTimerId = null;
  let score = 0;
  let correctCount = 0;
  let attempted = 0;
  for (const id of mock.questions) {
    const q = bank.find(item => item.id === id);
    const value = mock.answers[id];
    if (value === undefined || value === '') continue;
    attempted += 1;
    const correct = q.type === 'MCQ' ? Number(value) === q.answer : normalize(value) === normalize(q.answer);
    if (correct) { score += 3; correctCount += 1; }
    else if (q.type === 'MCQ') score -= 1;
    state.history.push({ date: today(), qid: q.id, topic: q.topic, section: q.section, correct, seconds: null, error: correct ? 'none' : classifyError(q, value), mock: true });
    state.mastery[q.topic] = clamp((state.mastery[q.topic] || .08) + (correct ? .06 : -.03), 0, 1);
  }
  state.mocks ||= [];
  state.mocks.push({ date: today(), score, attempted, correct: correctCount, total: mock.questions.length, questions: mock.questions, answers: mock.answers });
  mock = null;
  route = 'Progress';
  saveState();
  render();
  toast(`Mock complete. Score: ${score}; correct: ${correctCount}/${attempted} attempted.`);
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') { teacherSpeech.stop(); voiceInput.stop(); if (state.boardExpanded) { state.boardExpanded = false; render(); } }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('../sw.js', import.meta.url)).catch(() => {});
}

render();

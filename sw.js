const CACHE = 'cat150-local-teacher-v8';
const BASE = self.registration.scope;
const CORE = [
  '',
  'index.html',
  'styles.css?v=8',
  'src/app.js?v=8',
  'src/question-bank.js',
  'src/challenge-bank.js',
  'src/lessons.js',
  'src/speech.js',
  'src/voice.js',
  'src/voice-worker.js',
  'manifest.webmanifest',
  'icon.svg'
].map(path => new URL(path, BASE).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => Promise.all(CORE.map(async url => {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Could not cache ${url}: ${response.status}`);
    await cache.put(url, response);
  }))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('cat150-local-teacher-v') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(new URL('index.html', BASE).href)));
    return;
  }
  event.respondWith(fetch(event.request, { cache: 'no-store' }).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match(event.request)));
});

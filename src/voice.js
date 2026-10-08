export function createVoiceInput({ onStatus, onProgress, onText, onReady }) {
  let worker;
  let loading;
  let ready = false;
  let recorder;
  let stream;
  let chunks = [];
  let cancelled = false;
  let requestId = 0;

  function getWorker() {
    if (!worker) {
      worker = new Worker(new URL('./voice-worker.js', import.meta.url), { type: 'module' });
      worker.onmessage = event => {
        const message = event.data;
        if (message.type === 'status') onStatus(message.message);
        if (message.type === 'progress') onProgress(message.progress, message.file);
        if (message.type === 'ready') {
          ready = true;
          loading?.resolve();
          loading = null;
          onReady(true);
          onStatus('Local microphone model ready');
        }
        if (message.type === 'transcript') {
          onText(message.text);
          onStatus(message.text ? 'Speech captured' : 'No words detected. Try again.');
        }
        if (message.type === 'error') {
          loading?.reject(new Error(message.message));
          loading = null;
          onStatus(`Voice error: ${message.message}`);
        }
      };
      worker.onerror = event => {
        loading?.reject(new Error(event.message || 'Voice worker failed'));
        loading = null;
        onStatus('Local voice could not start on this device.');
      };
    }
    return worker;
  }

  function load() {
    if (ready) return Promise.resolve();
    if (loading) return loading.promise;
    let resolve, reject;
    const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
    loading = { promise, resolve, reject };
    getWorker().postMessage({ type: 'load' });
    return promise;
  }

  async function toggle() {
    if (recorder?.state === 'recording') {
      recorder.stop();
      onStatus('Transcribing on this device');
      return;
    }
    if (!ready) {
      onStatus('Load the local speech model first.');
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      onStatus('Microphone recording is unavailable in this browser.');
      return;
    }
    try {
      const currentRequest = ++requestId;
      onStatus('Waiting for microphone permission...');
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (currentRequest !== requestId) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        return;
      }
      const recordedStream = stream;
      cancelled = false;
      chunks = [];
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onstop = async () => {
        recordedStream.getTracks().forEach(track => track.stop());
        stream = null;
        if (cancelled) { onStatus('Recording cancelled'); return; }
        try {
          const blob = new Blob(chunks, { type: recorder.mimeType });
          const context = new AudioContext();
          const decoded = await context.decodeAudioData(await blob.arrayBuffer());
          const targetLength = Math.ceil(decoded.duration * 16000);
          const offline = new OfflineAudioContext(1, targetLength, 16000);
          const source = offline.createBufferSource();
          source.buffer = decoded;
          source.connect(offline.destination);
          source.start();
          const resampled = await offline.startRendering();
          await context.close();
          const samples = resampled.getChannelData(0).slice();
          getWorker().postMessage({ type: 'transcribe', audio: samples.buffer }, [samples.buffer]);
        } catch (error) {
          onStatus(`Could not decode recording: ${error.message}`);
        }
      };
      recorder.start();
      onStatus('Listening. Press Stop to transcribe.');
    } catch (error) {
      onStatus(error.name === 'NotAllowedError' ? 'Microphone permission denied.' : `Microphone unavailable: ${error.message}`);
    }
  }

  function stop() {
    requestId += 1;
    cancelled = true;
    if (recorder?.state === 'recording') recorder.stop();
    if (stream) stream.getTracks().forEach(track => track.stop());
    stream = null;
  }

  async function unload() {
    stop();
    if (worker) {
      worker.terminate();
      worker = null;
    }
    ready = false;
    onReady(false);
    onStatus('Voice model unloaded from memory');
  }

  return { load, toggle, stop, unload, get ready() { return ready; }, get recording() { return recorder?.state === 'recording'; } };
}

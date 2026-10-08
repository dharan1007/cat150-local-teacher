const locales = { English: 'en-IN', Hindi: 'hi-IN', Telugu: 'te-IN' };

export function createTeacherSpeech(onStep, onStatus) {
  let generation = 0;

  function stop() {
    generation += 1;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    onStep(-1);
    onStatus('Stopped');
  }

  function speak(steps, language = 'English') {
    if (!('speechSynthesis' in window)) {
      onStatus('Speech output is unavailable in this browser.');
      return false;
    }
    const items = steps.map(String).filter(Boolean);
    if (!items.length) return false;
    stop();
    const run = generation;
    const synth = window.speechSynthesis;
    const locale = locales[language] || locales.English;
    const voices = synth.getVoices();
    const voice = voices.find(v => v.lang.toLowerCase() === locale.toLowerCase())
      || voices.find(v => v.lang.toLowerCase().startsWith(locale.slice(0, 2).toLowerCase()));
    if (language !== 'English' && !voice) onStatus(`No ${language} voice is installed. Using the default voice for the English lesson text.`);
    let index = 0;
    function next() {
      if (run !== generation || index >= items.length) {
        if (run === generation) {
          onStep(-1);
          onStatus('Teaching complete');
        }
        return;
      }
      const current = index++;
      const utterance = new SpeechSynthesisUtterance(items[current]);
      utterance.lang = locale;
      if (voice) utterance.voice = voice;
      else utterance.lang = locales.English;
      utterance.volume = 1;
      utterance.rate = 0.92;
      utterance.onstart = () => {
        if (run !== generation) return;
        onStep(current);
        onStatus(`Speaking step ${current + 1} of ${items.length}`);
      };
      utterance.onend = next;
      utterance.onerror = event => {
        if (run !== generation) return;
        onStep(-1);
        onStatus(`Speech stopped: ${event.error || 'voice unavailable'}`);
      };
      synth.speak(utterance);
      synth.resume();
    }
    next();
    return true;
  }

  return { speak, stop };
}

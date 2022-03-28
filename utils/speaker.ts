export const speakHandler = (
  text: string,
  window: Window,
  lang: string = 'fr-FR'
): void => {
  const synth =
    window.speechSynthesis || (window as any)?.webkitSpeechSynthesis;

  const utterThis = new SpeechSynthesisUtterance(purifyText(text));
  const selectedOption = lang;
  const voices = synth.getVoices();

  // Find language
  Array(voices.length)
    .fill(0)
    .forEach((_, index: number) => {
      if (voices[index]?.lang.replace('_', '-') === selectedOption) {
        utterThis.voice = voices[index];
      }
    });

  // Redundant language for Android
  utterThis.lang = utterThis?.voice?.lang || lang;

  // Speak
  synth.speak(utterThis);
};

export const purifyText = (text: string): string => text?.split(' -')?.join('');

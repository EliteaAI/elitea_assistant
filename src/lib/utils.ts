export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const playPopupSound = async () => {
  try {
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') await ctx.resume();
    if (ctx.state !== 'running') {
      ctx.close();
      return;
    }

    const t = ctx.currentTime;

    const note1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    note1.connect(gain1);
    gain1.connect(ctx.destination);
    note1.type = 'sine';
    note1.frequency.value = 784;
    gain1.gain.setValueAtTime(0, t);
    gain1.gain.linearRampToValueAtTime(0.12, t + 0.02);
    gain1.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
    note1.start(t);
    note1.stop(t + 0.2);

    const note2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    note2.connect(gain2);
    gain2.connect(ctx.destination);
    note2.type = 'sine';
    note2.frequency.value = 1047;
    gain2.gain.setValueAtTime(0, t + 0.12);
    gain2.gain.linearRampToValueAtTime(0.12, t + 0.14);
    gain2.gain.exponentialRampToValueAtTime(0.01, t + 0.37);
    note2.start(t + 0.12);
    note2.stop(t + 0.37);

    note2.onended = () => ctx.close();
  } catch {
    // Audio not supported — silent fallback
  }
};

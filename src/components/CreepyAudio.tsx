import { useEffect, useRef, useState } from "react";

export const CreepyAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playCreepySound = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    const now = ctx.currentTime;

    // Create oscillators for eerie ambient sound
    const oscillator1 = ctx.createOscillator();
    const oscillator2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator1.type = "sine";
    oscillator2.type = "triangle";
    oscillator1.frequency.setValueAtTime(110, now);
    oscillator2.frequency.setValueAtTime(55, now);

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(ctx.destination);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.03, now + 0.3);
    gainNode.gain.linearRampToValueAtTime(0, now + 2);

    oscillator1.start(now);
    oscillator2.start(now);
    oscillator1.stop(now + 2);
    oscillator2.stop(now + 2);
  };

  const playScream = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    const now = ctx.currentTime;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(800, now);
    oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.1, now + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, now + 0.5);

    oscillator.start(now);
    oscillator.stop(now + 0.5);
  };

  useEffect(() => {
    const handleInteraction = () => {
      if (!isPlaying) {
        setIsPlaying(true);
        playCreepySound();

        // Random ambient sounds
        const ambientInterval = setInterval(() => {
          if (Math.random() > 0.7) {
            playCreepySound();
          }
        }, 8000);

        // Random screams
        const screamInterval = setInterval(() => {
          if (Math.random() > 0.85) {
            playScream();
          }
        }, 15000);

        return () => {
          clearInterval(ambientInterval);
          clearInterval(screamInterval);
        };
      }
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [isPlaying]);

  return null;
};

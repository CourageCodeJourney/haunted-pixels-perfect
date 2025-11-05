import { useEffect, useState } from "react";

export const ScreenGlitch = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    };

    const scheduleGlitch = () => {
      const delay = Math.random() * 15000 + 10000;
      setTimeout(() => {
        triggerGlitch();
        scheduleGlitch();
      }, delay);
    };

    scheduleGlitch();
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity ${
        glitch ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 animate-glitch-1" style={{
        background: "linear-gradient(90deg, transparent 0%, hsl(0 100% 50% / 0.1) 50%, transparent 100%)",
        clipPath: "polygon(0 0, 100% 0, 100% 33%, 0 33%)",
      }} />
      <div className="absolute inset-0 animate-glitch-2" style={{
        background: "linear-gradient(90deg, transparent 0%, hsl(280 100% 50% / 0.1) 50%, transparent 100%)",
        clipPath: "polygon(0 33%, 100% 33%, 100% 66%, 0 66%)",
      }} />
      <div className="absolute inset-0 animate-glitch-3" style={{
        background: "linear-gradient(90deg, transparent 0%, hsl(120 100% 50% / 0.1) 50%, transparent 100%)",
        clipPath: "polygon(0 66%, 100% 66%, 100% 100%, 0 100%)",
      }} />
    </div>
  );
};

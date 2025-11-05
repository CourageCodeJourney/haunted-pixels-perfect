import { useEffect, useState } from "react";

interface EyePair {
  id: number;
  x: number;
  y: number;
  blinkDelay: number;
  glowColor: string;
}

export const SpookyEyes = () => {
  const [eyes, setEyes] = useState<EyePair[]>([]);

  useEffect(() => {
    const newEyes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      blinkDelay: Math.random() * 5,
      glowColor: i % 2 === 0 ? "hsl(25 100% 50%)" : "hsl(280 70% 45%)",
    }));
    setEyes(newEyes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {eyes.map((eye) => (
        <div
          key={eye.id}
          className="absolute flex gap-3"
          style={{
            left: `${eye.x}%`,
            top: `${eye.y}%`,
          }}
        >
          <div
            className="w-3 h-4 rounded-full animate-spooky-blink"
            style={{
              background: `radial-gradient(circle, ${eye.glowColor}, transparent)`,
              boxShadow: `0 0 20px ${eye.glowColor}`,
              animationDelay: `${eye.blinkDelay}s`,
            }}
          />
          <div
            className="w-3 h-4 rounded-full animate-spooky-blink"
            style={{
              background: `radial-gradient(circle, ${eye.glowColor}, transparent)`,
              boxShadow: `0 0 20px ${eye.glowColor}`,
              animationDelay: `${eye.blinkDelay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

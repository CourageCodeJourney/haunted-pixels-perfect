import { useEffect, useState } from "react";

interface Shadow {
  id: number;
  side: "left" | "right";
  y: number;
  delay: number;
  duration: number;
  height: number;
}

export const ShadowFigures = () => {
  const [shadows, setShadows] = useState<Shadow[]>([]);

  useEffect(() => {
    const newShadows = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      side: Math.random() > 0.5 ? "left" : "right" as "left" | "right",
      y: Math.random() * 80,
      delay: Math.random() * 20 + 5,
      duration: Math.random() * 2 + 1.5,
      height: Math.random() * 200 + 150,
    }));
    setShadows(newShadows);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-22 overflow-hidden">
      {shadows.map((shadow) => (
        <div
          key={shadow.id}
          className={`absolute ${shadow.side === "left" ? "animate-shadow-peek-left" : "animate-shadow-peek-right"}`}
          style={{
            [shadow.side]: "-100px",
            top: `${shadow.y}%`,
            width: "150px",
            height: `${shadow.height}px`,
            animationDuration: `${shadow.duration}s`,
            animationDelay: `${shadow.delay}s`,
          }}
        >
          <div
            className="w-full h-full blur-md opacity-90"
            style={{
              background: "radial-gradient(ellipse at center, hsl(280 60% 4%), transparent 70%)",
              clipPath: "polygon(30% 0, 70% 0, 100% 100%, 0 100%)",
            }}
          />
          <div
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-8 h-8 blur-sm animate-pulse"
            style={{
              background: "radial-gradient(circle, hsl(0 100% 50% / 0.8), transparent)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

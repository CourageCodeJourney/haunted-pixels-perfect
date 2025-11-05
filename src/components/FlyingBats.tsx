import { useEffect, useState } from "react";

interface Bat {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
  size: number;
  direction: number;
}

export const FlyingBats = () => {
  const [bats, setBats] = useState<Bat[]>([]);

  useEffect(() => {
    const newBats = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      startX: Math.random() > 0.5 ? -10 : 110,
      startY: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 15,
      size: Math.random() * 25 + 15,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
    setBats(newBats);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-28 overflow-hidden">
      {bats.map((bat) => (
        <div
          key={bat.id}
          className="absolute animate-bat-fly"
          style={{
            left: `${bat.startX}%`,
            top: `${bat.startY}%`,
            width: `${bat.size}px`,
            height: `${bat.size * 0.5}px`,
            animationDuration: `${bat.duration}s`,
            animationDelay: `${bat.delay}s`,
            transform: `scaleX(${bat.direction})`,
          }}
        >
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <path
              d="M50 25 Q30 10, 10 20 T5 30 Q20 35, 30 25 Q40 30, 50 35 Q60 30, 70 25 Q80 35, 95 30 T90 20 Q70 10, 50 25Z"
              fill="hsl(280 60% 4%)"
              stroke="hsl(280 40% 20%)"
              strokeWidth="1"
              className="animate-wing-flap"
            />
            <circle cx="45" cy="22" r="2" fill="hsl(0 84% 60%)" className="animate-pulse" />
            <circle cx="55" cy="22" r="2" fill="hsl(0 84% 60%)" className="animate-pulse" />
          </svg>
        </div>
      ))}
    </div>
  );
};

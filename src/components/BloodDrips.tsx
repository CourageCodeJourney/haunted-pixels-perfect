import { useEffect, useState } from "react";

interface Drip {
  id: number;
  x: number;
  delay: number;
  duration: number;
  length: number;
}

export const BloodDrips = () => {
  const [drips, setDrips] = useState<Drip[]>([]);

  useEffect(() => {
    const newDrips = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 3 + 2,
      length: Math.random() * 150 + 50,
    }));
    setDrips(newDrips);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-35 overflow-hidden">
      {drips.map((drip) => (
        <div
          key={drip.id}
          className="absolute top-0 w-1 animate-blood-drip opacity-70"
          style={{
            left: `${drip.x}%`,
            height: `${drip.length}px`,
            background: 'linear-gradient(180deg, hsl(0 84% 40%) 0%, hsl(0 84% 20%) 50%, transparent 100%)',
            animationDuration: `${drip.duration}s`,
            animationDelay: `${drip.delay}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
};

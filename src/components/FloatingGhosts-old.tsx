import { useEffect, useState } from "react";

interface Ghost {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const FloatingGhosts = () => {
  const [ghosts, setGhosts] = useState<Ghost[]>([]);

  useEffect(() => {
    const newGhosts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setGhosts(newGhosts);
  }, []);

  return (
    // ✅ Put your patch here inside the component, not on top of the file
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-visible">
      {ghosts.map((ghost) => (
        <div
          key={ghost.id}
          className="absolute animate-ghost-float opacity-70 hover:opacity-100 transition-opacity"
          style={{
            left: `${ghost.x}%`,
            top: `${ghost.y}%`,
            width: `${ghost.size}px`,
            height: `${ghost.size * 1.3}px`,
            animationDuration: `${ghost.duration}s`,
            animationDelay: `${ghost.delay}s`,
          }}
        >
          <div className="relative w-full h-full">
            {/* Ghost head */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full blur-sm"
              style={{
                width: "60%",
                height: "45%",
                background:
                  "radial-gradient(circle, hsl(0 0% 100% / 0.8), hsl(0 0% 100% / 0.3))",
                boxShadow: "0 0 30px hsl(280 70% 45% / 0.6)",
              }}
            />
            {/* Eyes */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <div
                className="w-2 h-3 bg-background rounded-full animate-blink"
                style={{ animationDelay: `${Math.random() * 3}s` }}
              />
              <div
                className="w-2 h-3 bg-background rounded-full animate-blink"
                style={{ animationDelay: `${Math.random() * 3}s` }}
              />
            </div>
            {/* Mouth */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background/80" />
            {/* Wavy bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 blur-sm"
              style={{
                width: "70%",
                height: "60%",
                background:
                  "radial-gradient(ellipse at top, hsl(0 0% 100% / 0.7), hsl(0 0% 100% / 0.2))",
                clipPath:
                  "polygon(0 0, 20% 30%, 40% 0, 60% 30%, 80% 0, 100% 30%, 100% 100%, 0 100%)",
                boxShadow: "0 10px 40px hsl(280 70% 45% / 0.5)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

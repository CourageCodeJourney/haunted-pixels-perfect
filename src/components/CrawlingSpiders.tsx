import { useEffect, useState } from "react";

interface Spider {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  size: number;
}

export const CrawlingSpiders = () => {
  const [spiders, setSpiders] = useState<Spider[]>([]);

  useEffect(() => {
    const newSpiders = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: -10,
      endX: Math.random() * 100,
      endY: Math.random() * 120,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 8,
      size: Math.random() * 20 + 15,
    }));
    setSpiders(newSpiders);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-25 overflow-hidden">
      {spiders.map((spider) => (
        <div key={spider.id}>
          {/* Spider web thread */}
          <div
            className="absolute w-px bg-gradient-to-b from-muted-foreground/30 to-transparent animate-creep-in"
            style={{
              left: `${spider.startX}%`,
              top: `${spider.startY}%`,
              height: `${spider.endY - spider.startY}%`,
              animationDuration: `${spider.duration}s`,
              animationDelay: `${spider.delay}s`,
            }}
          />
          {/* Spider body */}
          <div
            className="absolute animate-creep-in"
            style={{
              left: `${spider.startX}%`,
              top: `${spider.startY}%`,
              width: `${spider.size}px`,
              height: `${spider.size}px`,
              animationDuration: `${spider.duration}s`,
              animationDelay: `${spider.delay}s`,
              transform: 'translate(-50%, 0)',
            }}
          >
            {/* Spider body circle */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-background rounded-full border-2 border-foreground/80" />
              {/* Spider legs */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-3 bg-foreground/60 origin-top"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 45}deg) translateX(-50%)`,
                  }}
                />
              ))}
              {/* Red eyes */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-destructive animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-destructive animate-pulse" style={{ animationDelay: '0.1s' }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

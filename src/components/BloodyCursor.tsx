import { useEffect, useState } from "react";

interface BloodDrop {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export const BloodyCursor = () => {
  const [bloodDrops, setBloodDrops] = useState<BloodDrop[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dropCounter, setDropCounter] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastDropTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create blood drops more frequently when moving
      if (currentTime - lastDropTime > 50) {
        const newDrop: BloodDrop = {
          id: dropCounter,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 0.2,
          duration: Math.random() * 1 + 1.5,
        };

        setBloodDrops((prev) => [...prev.slice(-15), newDrop]);
        setDropCounter((prev) => prev + 1);
        lastDropTime = currentTime;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [dropCounter]);

  // Clean up old drops
  useEffect(() => {
    const cleanup = setInterval(() => {
      setBloodDrops((prev) => prev.slice(-20));
    }, 2000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed w-3 h-3 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.05s ease-out",
        }}
      >
        <div
          className="w-full h-full rounded-full animate-pulse"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            boxShadow: "0 0 15px hsl(var(--primary) / 0.8)",
          }}
        />
      </div>

      {/* Blood drops */}
      {bloodDrops.map((drop) => (
        <div
          key={drop.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            width: `${drop.size}px`,
            height: `${drop.size}px`,
            animation: `cursor-blood-drip ${drop.duration}s ease-in forwards`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {/* Main blood drop */}
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.9), hsl(0 80% 30% / 0.7))`,
              boxShadow: `0 2px 4px hsl(var(--primary) / 0.5), inset 0 -2px 3px hsl(0 0% 0% / 0.3)`,
            }}
          />
          
          {/* Drip trail */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 opacity-60"
            style={{
              height: `${drop.size * 2}px`,
              background: `linear-gradient(to bottom, hsl(var(--primary) / 0.6), transparent)`,
              animation: `stretch-drip ${drop.duration * 0.5}s ease-out forwards`,
            }}
          />
        </div>
      ))}
    </>
  );
};

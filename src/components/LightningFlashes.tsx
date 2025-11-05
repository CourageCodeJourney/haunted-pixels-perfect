import { useEffect, useState } from "react";

export const LightningFlashes = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerFlash = () => {
      setFlash(true);
      setTimeout(() => setFlash(false), 150);
      
      // Sometimes double flash
      if (Math.random() > 0.6) {
        setTimeout(() => {
          setFlash(true);
          setTimeout(() => setFlash(false), 100);
        }, 250);
      }
    };

    const scheduleNextFlash = () => {
      const delay = Math.random() * 8000 + 4000; // 4-12 seconds
      setTimeout(() => {
        triggerFlash();
        scheduleNextFlash();
      }, delay);
    };

    scheduleNextFlash();
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 pointer-events-none z-40 transition-opacity duration-100 ${
          flash ? "opacity-30" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle at 30% 20%, hsl(280 70% 90%), transparent 50%)",
        }}
      />
      <div
        className={`fixed inset-0 pointer-events-none z-40 transition-opacity duration-75 ${
          flash ? "opacity-20" : "opacity-0"
        }`}
        style={{
          backgroundColor: "hsl(0 0% 100%)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
};

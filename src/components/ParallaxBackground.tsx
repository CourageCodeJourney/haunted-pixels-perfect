import { useEffect, useState } from "react";

export const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated fog layers */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${parallaxOffset}px) translateX(${mouseParallaxX}px)`,
          background: "radial-gradient(ellipse at 30% 50%, hsl(280 60% 15% / 0.4), transparent 60%)",
          animation: "fog-drift 40s linear infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${parallaxOffset * 0.7}px) translateX(${-mouseParallaxX}px)`,
          background: "radial-gradient(ellipse at 70% 40%, hsl(25 100% 20% / 0.3), transparent 60%)",
          animation: "fog-drift 50s linear infinite reverse",
          animationDelay: "5s",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${parallaxOffset * (0.3 + i * 0.05)}px) translateX(${mouseParallaxX * (i % 3)}px)`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Radial glow effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(25 100% 60%), transparent 70%)",
          transform: `translate(${mouseParallaxX * 2}px, ${mouseParallaxY * 2}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(280 70% 45%), transparent 70%)",
          transform: `translate(${-mouseParallaxX * 2}px, ${-mouseParallaxY * 2}px)`,
        }}
      />
    </div>
  );
};

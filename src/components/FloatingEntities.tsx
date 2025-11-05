import { useEffect, useState } from "react";

interface Entity {
  id: number;
  top: number;
  left: number;
  size: number;
  type: "ghost" | "bat" | "spider";
}

const entityImages = {
  ghost: "https://i.imgur.com/YV3cFqB.png", // 👻 Ghost PNG (transparent)
  bat: "https://i.imgur.com/XkD1EZD.png",   // 🦇 Bat PNG (transparent)
  spider: "https://i.imgur.com/Bg6J8Mw.png" // 🕷️ Spider PNG (transparent)
};

const FloatingEntities = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  // Randomly generate floating entities
  useEffect(() => {
    const temp: Entity[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: Math.random() * 80,
      left: Math.random() * 90,
      size: 40 + Math.random() * 60,
      type: ["ghost", "bat", "spider"][Math.floor(Math.random() * 3)] as Entity["type"]
    }));
    setEntities(temp);
  }, []);

  // Make them move smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setEntities((prev) =>
        prev.map((e) => ({
          ...e,
          top: (e.top + Math.random() * 10 - 5 + 100) % 100,
          left: (e.left + Math.random() * 10 - 5 + 100) % 100
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 5
      }}
    >
      {entities.map((e) => (
        <img
          key={e.id}
          src={entityImages[e.type]}
          alt={e.type}
          style={{
            position: "absolute",
            top: `${e.top}%`,
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: "auto",
            opacity: 0.8,
            transition: "top 2s ease-in-out, left 2s ease-in-out, transform 2s ease-in-out",
            transform: `rotate(${Math.random() * 20 - 10}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingEntities;

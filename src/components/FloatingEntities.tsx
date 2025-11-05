import { useEffect, useState } from "react";

// ✅ Import your local GIFs
import batGif from "../assets/bat.gif";
import spiderGif from "../assets/spider.gif";

interface Entity {
  id: number;
  top: number;
  left: number;
  size: number;
  type: "bat" | "spider";
}

// ✅ Only use bats and spiders
const entityImages = {
  bat: batGif,
  spider: spiderGif,
};

const FloatingEntities = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    // 🎯 Control total number and ratio of each type
    const total = 7; // total entities on screen
    const types: Entity["type"][] = [];

    // 🦇 3 bats, 🕷 4 spiders
    for (let i = 0; i < 3; i++) types.push("bat");
    for (let i = 0; i < 4; i++) types.push("spider");

    const temp: Entity[] = types.map((type, i) => ({
      id: i,
      top: Math.random() * 100, // full viewport
      left: Math.random() * 100,
      size: 80 + Math.random() * 80, // varied sizes
      type,
    }));

    setEntities(temp);
  }, []);

  // 🌀 Animate smooth random movement
  useEffect(() => {
    const interval = setInterval(() => {
      setEntities((prev) =>
        prev.map((e) => ({
          ...e,
          top: (e.top + Math.random() * 10 - 5 + 100) % 100,
          left: (e.left + Math.random() * 10 - 5 + 100) % 100,
        }))
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-visible"
      style={{
        zIndex: 20,
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
            opacity: 0.85,
            transition: "top 2.5s ease-in-out, left 2.5s ease-in-out, transform 2.5s ease-in-out",
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingEntities;

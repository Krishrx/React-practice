import React, { useState } from 'react';

function Main() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    setPosition({ x: newX, y: newY });
  };

  return (
        <div
        className="random-div relative w-[100px] p-2 bg-pink-700 text-white cursor-pointer"
        onMouseOver={handleMouseOver}
        style={{ left: position.x, top: position.y }}
        >
        Hover me!
        </div>
  );
}

export default Main;

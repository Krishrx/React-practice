import React, { useState } from 'react';

function Main() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = () => {
    const newX = Math.random() * 500;
    const newY = Math.random() * 500;
    setPosition({ x: newX, y: newY });
  };

  const handleYes = () => {
    alert('I know :)')
  }

  return (
    <div>
      <div className='text-center p-5 font-medium'>
        Are U an Idiot?
      </div>
      <div className='flex gap-4 justify-center text-center'>
        <div className="rounded-lg w-[100px] p-2 bg-pink-700 text-white cursor-pointer"
        onClick={handleYes}
        >
        Yes
      </div>
        <div
        className="rounded-lg random-div relative w-[100px] p-2 bg-pink-700 text-white cursor-pointer"
        onMouseOver={handleMouseOver}
        style={{ left: position.x, top: position.y }}
        >
        No
      </div>
      </div>
    </div>
  );
}

export default Main;

import React from 'react';
import "../component/snowfall.css"

const SnowfallEffect = () => {
  const snowflakes = new Array(150).fill(""); // Generate 20 snowflakes

  return (
    <div className="snowfall-container">
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            width: `${Math.random() * 8 + 5}px`, // Random snowflake size
            height: `${Math.random() * 8 + 5}px`,
            left: `${Math.random() * 100}%`, // Random horizontal position
            animationDuration: `${Math.random() * 10 + 5}s`, // Random fall speed
            animationDelay: `${Math.random() * 10}s`, // Random delay for snowflakes
          }}
        />
      ))}
    </div>
  );
};

export default SnowfallEffect;

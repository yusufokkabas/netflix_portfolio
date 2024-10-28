import React, { useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';

const NetflixTitle = () => {
  const title = "Sumanth Samala";
  const [isClicked, setIsClicked] = useState(false);

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
  };

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <h1 className={`netflix-title ${isClicked ? 'animate' : ''}`}>
        {title.split("").map((letter, index) => (
          <span
            key={index}
            className="letter"
            style={{
              animationDelay: `${index * 0.04}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default NetflixTitle;

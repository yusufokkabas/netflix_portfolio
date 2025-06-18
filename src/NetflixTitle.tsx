import React, { useEffect, useState } from "react";
import "./NetflixTitle.css";
import netflixSound from "./netflix-sound.mp3";
import { useNavigate } from "react-router-dom";
import logoImage from "../src/images/netflix-logo.png"; // Update with the path to your logo

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    if (isClicked) return;
    const audio = new Audio(netflixSound);
    audio.play().catch((error) => console.error("Audio play error:", error));
    setIsFadingOut(true);
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate("/browse");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img
        src={logoImage}
        alt="Custom Logo"
        className={`netflix-logo ${isClicked ? "animate" : ""}`}
      />
      <div className={`click-instruction ${isFadingOut ? "fade-out" : ""}`}>
        Click Anywhere To Continue
      </div>
    </div>
  );
};

export default NetflixTitle;

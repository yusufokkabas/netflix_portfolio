import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useBackNavigation } from "../hooks/useBackNavigation";
import "./BackButton.css";

interface BackButtonProps {
  className?: string;
  showText?: boolean;
  fallbackPath?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  className = "",
  showText = true,
  fallbackPath,
}) => {
  const { goBack } = useBackNavigation();

  const handleBackClick = () => {
    goBack(fallbackPath);
  };

  return (
    <button
      onClick={handleBackClick}
      className={`back-button ${className}`}
      aria-label="Go back"
    >
      <FaArrowLeft />
      {showText && <span>Back</span>}
    </button>
  );
};

export default BackButton;

import React from 'react';
import './ProfileBanner.css';

interface ProfileBannerProps {
  backgroundImage: string;
  headline: string;
  resumeLink: string;
  linkedinLink: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ backgroundImage, headline, resumeLink, linkedinLink }) => {
  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline">{headline}</h1>
        <p className="banner-description">
          A seasoned professional with expertise in software development, system design, and cross-functional team leadership.
        </p>
        <div className="banner-buttons">
          <a href={resumeLink} className="banner-button play-button" target="_blank" rel="noopener noreferrer">
            ▶️ Resume
          </a>
          <a href={linkedinLink} className="banner-button info-button" target="_blank" rel="noopener noreferrer">
            ℹ️ LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

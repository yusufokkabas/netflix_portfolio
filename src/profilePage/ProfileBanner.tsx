import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

interface ProfileBannerProps {
  backgroundImage: string;
  headline: string;
  resumeLink: string;
  linkedinLink: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ backgroundImage, headline, resumeLink, linkedinLink }) => {
  const handlePlayClick = () => {
    console.log("Play button clicked!");
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{headline}</h1>
        <p className="banner-description">
          Dynamic and results-driven Senior Software Engineer with 5+ years in full-stack development across high-impact, large-scale applications. I bring expertise in Ruby on Rails, React, Node, AWS, Kubernetes, and Docker, with a passion for optimizing systems to scale. I’ve led initiatives serving 10,000+ users and managing 50 million+ bookings, driving feature-rich integrations like chat, video consultations, and API linkups.
    <br/>
          A recent achievement was implementing robust security measures across four NHSPS products, including XSS script validation in both frontend and backend, advanced password policies with the Devise gem, and stringent password resets every six months. Additionally, I transformed a legacy reporting engine into a high-speed microservices architecture, reducing report generation from 5 minutes to 5 seconds and delivering real-time insights for users.
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handlePlayClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

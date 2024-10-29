import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';
import Navbar from '../components/NavBar';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF

  return (
    <>
      <Navbar />
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
          backgroundImage={backgroundGif}
          headline="Senior Software Engineer"
          resumeLink="https://www.yourresume.com"
          linkedinLink="https://www.linkedin.com/in/yourprofile"
        />
      </div>
      <TopPicksRow />
      <ContinueWatching />
    </>
  );
};

export default ProfilePage;

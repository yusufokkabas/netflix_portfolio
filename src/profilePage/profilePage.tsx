import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';
import Navbar from '../components/NavBar';

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
        <h1>Welcome, {location.state?.profileName || "User"}!</h1>
        <p>This is the dashboard for {location.state?.profileName || "User"}.</p>
      </div>
    </>
  );
};

export default ProfilePage;

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  return (
    <div className="profile-page">
      <h1>Welcome, {profileName}!</h1>
      <p>This is the dashboard for {profileName}. Here you can add unique content for each profile.</p>
    </div>
  );
};

export default ProfilePage;

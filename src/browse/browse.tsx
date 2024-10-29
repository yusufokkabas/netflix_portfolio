import React from 'react';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import { useNavigate } from 'react-router-dom';

import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    { name: "Recruiter", image: blueImage },
    { name: "Developer", image: greyImage },
    { name: "Stalker", image: redImage },
    { name: "Adventurer", image: yellowImage },
  ];

  return (
    <div className="browse-container">
      <h2>Who's Watching?</h2>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => navigate(`/profile/${profile.name}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;

import React from 'react';
import './WorkPermit.css';

const WorkPermit: React.FC = () => {
  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>PSW graduate visa</strong> 🛂, which allows me to work in the UK! 🇬🇧 My visa is valid until <strong>May 2025</strong> 📅, giving me the opportunity to build valuable experience and grow my career here. 🌟
        </p>
        <p className="additional-info">Feel free to reach out if you have any questions! 🤝</p>
      </div>
    </div>
  );
};

export default WorkPermit;

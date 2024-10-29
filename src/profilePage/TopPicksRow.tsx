import React from 'react';
import './TopPicksRow.css';

const topPicks = [
  { title: "Meiyazhagan", imgSrc: "/path/to/image1.jpg" },
  { title: "The Big Bang Theory", imgSrc: "/path/to/image2.jpg" },
  { title: "Do Patti", imgSrc: "/path/to/image3.jpg" },
  { title: "Fabulous Lives of Bollywood Wives", imgSrc: "/path/to/image4.jpg" },
  { title: "Superstore", imgSrc: "/path/to/image5.jpg" },
  { title: "Psych", imgSrc: "/path/to/image6.jpg" },
];

const TopPicksRow: React.FC = () => {
  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for You</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="pick-label">{pick.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;

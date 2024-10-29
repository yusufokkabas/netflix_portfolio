import React from 'react';
import './TopPicksRow.css';

const topPicks = [
  { title: "Work Permit", imgSrc: "https://picsum.photos/id/1019/250/200" },
  { title: "Work Experience", imgSrc: "https://picsum.photos/id/1015/250/200" },
  { title: "Recommendations", imgSrc: "https://picsum.photos/id/1020/250/200" },
  { title: "Skills", imgSrc: "https://picsum.photos/id/1016/250/200" },
  { title: "Projects", imgSrc: "https://picsum.photos/id/1018/250/200" },
  { title: "Contact Me", imgSrc: "https://picsum.photos/id/1021/250/200" },
];

const TopPicksRow: React.FC = () => {
  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for You</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;

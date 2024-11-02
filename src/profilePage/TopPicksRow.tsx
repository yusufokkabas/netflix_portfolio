import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';

const topPicks = [
  { title: "Work Permit", imgSrc: "https://picsum.photos/id/1019/250/200", route: "/work-permit" },
  { title: "Work Experience", imgSrc: "https://picsum.photos/id/1015/250/200", route: "/work-experience" },
  { title: "Recommendations", imgSrc: "https://picsum.photos/id/1020/250/200", route: "/recommendations" },
  { title: "Skills", imgSrc: "https://picsum.photos/id/1016/250/200", route: "/skills" },
  { title: "Projects", imgSrc: "https://picsum.photos/id/1018/250/200", route: "/projects" },
  { title: "Contact Me", imgSrc: "https://picsum.photos/id/1021/250/200", route: "/contact-me" },
];

const TopPicksRow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for You</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
          >
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

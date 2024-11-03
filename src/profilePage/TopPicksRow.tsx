import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: "https://picsum.photos/id/1019/250/200", route: "/work-permit" },
    { title: "Skills", imgSrc: "https://picsum.photos/id/1016/250/200", route: "/skills" },
    { title: "Work Experience", imgSrc: "https://picsum.photos/id/1015/250/200", route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/250/200", route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/id/1020/250/200", route: "/recommendations" },
    { title: "Projects", imgSrc: "https://picsum.photos/id/1018/250/200", route: "/projects" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1021/250/200", route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://picsum.photos/id/1016/250/200", route: "/skills" },
    { title: "Projects", imgSrc: "https://picsum.photos/id/1018/250/200", route: "/projects" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/250/200", route: "/certifications" },
    { title: "Work Experience", imgSrc: "https://picsum.photos/id/1015/250/200", route: "/work-experience" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/id/1020/250/200", route: "/recommendations" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1021/250/200", route: "/contact-me" }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: "https://picsum.photos/id/1020/250/200", route: "/recommendations" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1021/250/200", route: "/contact-me" },
    { title: "Projects", imgSrc: "https://picsum.photos/id/1018/250/200", route: "/projects" },
    { title: "Work Experience", imgSrc: "https://picsum.photos/id/1015/250/200", route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/250/200", route: "/certifications" }
  ],
  adventure: [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/250/200", route: "/music" },
    { title: "Projects", imgSrc: "https://picsum.photos/id/1018/250/200", route: "/projects" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/250/200", route: "/reading" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1021/250/200", route: "/contact-me" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/250/200", route: "/certifications" },
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
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

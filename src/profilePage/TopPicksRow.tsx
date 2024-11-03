import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: "https://picsum.photos/seed/workpermit/250/200", route: "/work-permit" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", route: "/skills" },
    { title: "Work Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/recommendations/250/200", route: "/recommendations" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", route: "/projects" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications" },
    { title: "Work Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me" }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/call/250/200", route: "/contact-me" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/projects" },
    { title: "Work Experience", imgSrc: "https://picsum.photos/seed/resume/250/200", route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/achievements/250/200", route: "/certifications" }
  ],
  adventure: [
    { title: "Music", imgSrc: "https://picsum.photos/seed/music/250/200", route: "/music" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: "/projects" },
    { title: "Reading", imgSrc: "https://picsum.photos/seed/books/250/200", route: "/reading" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/medal/250/200", route: "/certifications" }
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
            style={{ animationDelay: `${index * 0.1}s` }}
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

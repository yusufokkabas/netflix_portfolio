import React, { useEffect, useState } from "react";
import "./Skills.css";
import { getSkills } from "../queries/getSkills";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaAngular,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaSitemap,
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiGooglecloud,
  SiSpringboot,
  SiPhp,
  SiNetlify,
  SiHeroku,
  SiHtml5,
  SiCss3,
  SiRabbitmq,
  SiImessage,
  SiAngular,
  SiOracle,
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import { Skill } from "../types";

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaAngular: <FaAngular />,
  SiOracle: <SiOracle />,
  SiMongodb: <SiMongodb />,
  SiNextdotjs: <SiNextdotjs />,
  FaUsers: <FaUsers />,
  FaGlobe: <FaGlobe />,
  FaLightbulb: <FaLightbulb />,
  FaSitemap: <FaSitemap />,
  SiJavascript: <SiJavascript />,
  SiAngular: <SiAngular />,
};

// Define the priority order for categories
const categoryPriority = [
  "Frontend Frameworks",
  "Backend Frameworks",
  "Cloud & DevOps",
  "Databases",
  "Programming Languages",
  "Professional Skills",
];

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills();
  }, []);
  console.log(
    "🚀 ~ Skills ~ skillsData:",
    skillsData.map((skill) => skill.name)
  );

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Sort categories according to priority order
  const sortedCategories = Object.keys(skillsByCategory).sort((a, b) => {
    const indexA = categoryPriority.indexOf(a);
    const indexB = categoryPriority.indexOf(b);

    // If both categories are in the priority list, sort by their index
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If only one category is in the priority list, prioritize it
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    // If neither category is in the priority list, sort alphabetically
    return a.localeCompare(b);
  });

  return (
    <div className="skills-container">
      {sortedCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

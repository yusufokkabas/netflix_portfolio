import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify } from 'react-icons/si';
import utilisation from '../images/utilisation.png';
import letsxchange from '../images/letsxchange.png';
import avataar from '../images/avataar.png';
import vaack from '../images/vaack.png';
import mystartupequity from '../images/mystartupequity.png';
import startups from '../images/startups.png';
import crm from '../images/crm.png';

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
};

const projects = [
  {
    title: "Corporate Dashboard for Ekincare",
    description: "Revamped the UI of Ekincare's corporate dashboard, enhancing user experience for end customers. Managed both frontend and backend, creating RESTful APIs.",
    techUsed: ["Ruby On Rails", "ReactJS", "PostgreSQL", "AWS"],
    imgSrc: utilisation,
  },
  {
    title: "Secondary Investment Platform",
    description: "Developed a platform for investment analysts to generate comprehensive startup reports with visualizations like pie charts and bar charts for investors.",
    techUsed: ["NodeJS", "ReactJS", "MongoDB", "AWS - Cognito", "ECS", "Lambda"],
    imgSrc: letsxchange,
  },
  {
    title: "Avataar Ventures Website",
    description: "Built the frontend of Avataar Ventures' website from scratch, contributing to the brand's online presence and showcasing their services.",
    techUsed: ["HTML5", "CSS3", "jQuery", "AWS-ECS"],
    imgSrc: avataar,
  },
  {
    title: "Customer Relationship Management Tool",
    description: "Developed a CRM tool for managing investor details, handling both frontend and backend, building it from scratch.",
    techUsed: ["NodeJS", "ReactJS", "MongoDB", "AWS (DevOps)", "Material UI"],
    imgSrc: crm,
  },
  {
    title: "ESOP & Cap Table Management",
    description: "As a frontend developer, created structured code for ESOP and cap table management. Worked with a team of 3 developers.",
    techUsed: ["NodeJS", "ReactJS", "MongoDB", "AWS - Cognito", "ECS", "Lambda"],
    imgSrc: mystartupequity,
  },
  {
    title: "Angular to React Migration",
    description: "Participated in the migration from Angular to React, focusing on complex components and Formik for validations.",
    techUsed: ["ReactJS (Frontend)", "Ruby on Rails (Backend)"],
    imgSrc: startups,
  },
  {
    title: "E-Commerce Website for Natural Products",
    description: "Built an e-commerce website for self-manufactured natural products, handling the full MERN stack and DevOps as a freelancer.",
    techUsed: ["ReactJS (Frontend)", "Ruby on Rails (Backend)"],
    imgSrc: vaack,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

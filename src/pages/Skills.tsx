import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Ruby on Rails", icon: <SiRubyonrails />, description: "Backend Framework" },
      { name: "Node.js", icon: <FaNodeJs />, description: "Backend Runtime" },
      { name: "Spring Boot", icon: <SiSpringboot />, description: "Java Framework" },
      { name: "Java", icon: <FaJava />, description: "Object-Oriented Programming Language" },
      { name: "PHP", icon: <SiPhp />, description: "Backend Language" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, description: "Frontend Framework" },
      { name: "TypeScript", icon: <SiTypescript />, description: "Type-safe JavaScript" },
      { name: "JavaScript", icon: <FaNodeJs />, description: "Scripting Language" },
      { name: "HTML & CSS", icon: <SiHtml5 />, description: "Web Markup and Styling" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, description: "Relational Database" },
      { name: "MySQL", icon: <SiMysql />, description: "Relational Database" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws />, description: "Cloud Platform" },
      { name: "GCP", icon: <SiGooglecloud />, description: "Google Cloud Platform" },
      { name: "Docker", icon: <FaDocker />, description: "Containerization" },
      { name: "Kubernetes", icon: <SiKubernetes />, description: "Container Orchestration" },
      { name: "Heroku", icon: <SiHeroku />, description: "Cloud Platform for Apps" },
      { name: "Netlify", icon: <SiNetlify />, description: "Frontend Deployment Platform" },
      { name: "CI/CD", icon: <FaGitAlt />, description: "Continuous Integration & Delivery" },
    ],
  },
  {
    category: "Other Tools & Practices",
    skills: [
      { name: "Git", icon: <FaGitAlt />, description: "Version Control" },
      { name: "RabbitMQ", icon: <SiRabbitmq />, description: "Message Broker" },
      { name: "Kafka", icon: <SiImessage />, description: "Event Streaming" },
      { name: "Agile", icon: <FaGitAlt />, description: "Development Methodology" },
      { name: "Dockerization", icon: <FaDocker />, description: "Container Management" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
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

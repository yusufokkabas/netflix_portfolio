import React, { useEffect, useState } from "react";
import "./Projects.css";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaAngular,
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaJava,
  FaJenkins,
  FaMicrosoft,
  FaPython,
  FaVuejs,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiAwsamplify,
  SiFirebase,
  SiTerraform,
  SiArgo,
} from "react-icons/si";
import { Project } from "../types";
import { getProjects } from "../queries/getProjects";
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  ReactJS: <FaReact />,
  NodeJS: <FaNodeJs />,
  AWS: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  jQuery: <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  Cognito: <FaAws />,
  Lambda: <FaAws />,
  ECS: <FaAws />,
  Jenkins: <FaJenkins />,
  Docker: <FaDocker />,
  GraphQL: <FaDatabase />,
  "CI/CD": <FaGitlab />,
  GitLab: <FaGitlab />,
  GitHub: <FaGithub />,
  Heroku: <GrDeploy />,
  Netlify: <GrDeploy />,
  Firebase: <SiFirebase />,
  GCP: <FaGoogle />,
  Azure: <FaMicrosoft />,
  Kubernetes: <GrKubernetes />,
  Terraform: <SiTerraform />,
  ArgoCD: <SiArgo />,
  Java: <FaJava />,
  "Spring Boot": <FaJava />,
  Python: <FaPython />,
  "Node.js": <FaNodeJs />,
  "Express.js": <FaNodeJs />,
  Hibernate: <FaJava />,
  Maven: <FaJava />,
  Gradle: <FaJava />,
  JUnit: <FaJava />,
  Mockito: <FaJava />,
  Jest: <FaReact />,
  React: <FaReact />,
  Angular: <FaAngular />,
  "Vue.js": <FaVuejs />,
  "Next.js": <FaReact />,
  Gatsby: <FaReact />,
  "Nuxt.js": <FaVuejs />,
  Redux: <FaReact />,
  Vuex: <FaVuejs />,
  "Tailwind CSS": <SiCss3 />,
  Bootstrap: <SiCss3 />,
  JQuery: <SiJquery />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  console.log("🚀 ~ Projects ~ projects:", projects);
  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            <div className="project-image-container">
              <img
                src={project.image.url}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="go-to-link">
                  <FaExternalLinkAlt className="link-icon" />
                  <span>Go To Project</span>
                </div>
              </div>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p className="project-short-description">
                {project.shortdescription}
              </p>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techused.split(", ").map((tech, i) => (
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

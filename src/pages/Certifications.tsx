import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';

const certifications = [
  {
    title: "Typescript: The Complete Developer's Guide",
    issuer: "Udemy",
    issuedDate: "Dec 2020",
    link: "https://www.udemy.com/certificate/UC-H5ZL8A4E/",
    icon: <SiUdemy />
  },
  {
    title: "Hosting Websites with Amazon Lightsail",
    issuer: "Udemy",
    issuedDate: "Jan 2020",
    link: "https://www.udemy.com/certificate/UC-H5ZL8A4E/",
    icon: <SiUdemy />
  },
  {
    title: "Multiutility Robot Journal",
    issuer: "International Journal of Mechanical Engineering and Technology",
    issuedDate: "Jul 2018",
    link: "https://iaeme.com/MasterAdmin/Journal_uploads/IJMET/VOLUME_9_ISSUE_7/IJMET_09_07_122.pdf",
    icon: <SiIeee />
  },
  {
    title: "Programming with Everyone with Python",
    issuer: "University of Michigan",
    issuedDate: "",
    link: "https://www.coursera.org/account/accomplishments/verify/WZ4MF9CUCXHR",
    icon: <SiCoursera />
  },
  {
    title: "Verified Certificate of IITBombayX",
    issuer: "Indian Institute of Technology, Bombay",
    issuedDate: "",
    link: "https://verify.iitbombayx.in/cert/8a029adbd4a243439bf28f6edae62237",
    icon: <FaUniversity />
  },
  {
    title: "C++ for C Programmers",
    issuer: "University of California, Santa Cruz",
    issuedDate: "",
    link: "https://www.coursera.org/account/accomplishments/verify/RFCDHMUZ4E7B",
    icon: <SiCoursera />
  }
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

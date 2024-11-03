import React from 'react';
import './ContactMe.css';
import profilePic from '../images/sumanth.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Sumanth Samala" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">Sumanth Samala</h3>
          <p className="badge-title">Senior Software Engineer</p>
          <p className="badge-description">
            With 5+ years in full-stack development, skilled in Ruby on Rails, Java Spring Boot, React, Node, AWS, Kubernetes, and Docker.
          </p>
          <p className="badge-company">Kajima Community | Swansea University</p>
          <a
            href="https://uk.linkedin.com/in/sumanth-samala-82431161"
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:chintusamala96@gmail.com" className="contact-link">
            chintusamala96@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+447442796769" className="contact-link">
            +44 7442 796769
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

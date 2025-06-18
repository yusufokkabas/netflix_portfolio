import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa"; // Import icons
import "./Navbar.css";
import netflixLogo from "../images/netflix-logo.png";
import blueImage from "../images/blue.png";
import { useProfile } from "../contexts/ProfileContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentProfile } = useProfile();

  // Use cached profile image or fallback to location state or default
  const profileImage =
    currentProfile?.image || location.state?.profileImage || blueImage;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleHomeClick = () => {
    if (currentProfile) {
      navigate(`/profile/${currentProfile.name}`);
    } else {
      navigate("/browse");
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={netflixLogo} alt="Netflix" />
          </Link>
          <ul className="navbar-links">
            <li>
              <button onClick={handleHomeClick} className="nav-button">
                Home
              </button>
            </li>
            <li>
              <Link to="/work-experience">Professional</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact-me">Hire Me</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img
            src={profileImage}
            alt="Profile"
            className="profile-icon"
            onClick={() => {
              navigate("/browse");
            }}
          />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <ul>
          <li>
            <button
              onClick={() => {
                handleHomeClick();
                closeSidebar();
              }}
              className="nav-button"
            >
              <FaHome /> Home
            </button>
          </li>
          <li>
            <Link to="/work-experience" onClick={closeSidebar}>
              <FaBriefcase /> Professional
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeSidebar}>
              <FaTools /> Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeSidebar}>
              <FaProjectDiagram /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact-me" onClick={closeSidebar}>
              <FaEnvelope /> Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import netflixLogo from '../images/logo-2.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const profileImage = location.state?.profileImage || '/path/to/default-profile.png';

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80); // Adjust the scroll threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const redirectToBrowse = () => {
    navigate('/browse');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={netflixLogo} alt="Netflix" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="#headline">Home</Link></li>
          <li><Link to="/tv-shows">Headline</Link></li>
          <li><Link to="/movies">Work Experience</Link></li>
          <li><Link to="/new-popular">Skills</Link></li>
          <li><Link to="/my-list">Achievements</Link></li>
          <li><Link to="/browse-by-language">Projects</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="profile-dropdown" onClick={redirectToBrowse}>
          <img src={profileImage} alt="Profile" className="profile-icon" />
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

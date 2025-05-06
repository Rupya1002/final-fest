import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
  <div className="mobile-header">
    <div className="logo"><img src="Image.png" alt="Logo" /></div>

    <div className="hamburger" onClick={toggleMenu}>
      <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
    </div>
  </div>

  <div className={`nav-links ${isMenuOpen ? 'mobile-show' : ''}`}>
    <Link to="/" className="name">Home</Link>
    <Link to="/schedule" className="name">Schedule</Link>
    <Link to="/login" className="name">Login</Link>
    <Link to="/profile" className="name">Profile</Link>
    <Link to="/teams" className="name">Teams</Link>
  </div>
</div>

    </nav>
  );
};

export default Navbar;

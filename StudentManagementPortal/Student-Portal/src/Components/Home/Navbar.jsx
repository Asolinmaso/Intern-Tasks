// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/iit-b-logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-content">
        <div className="logo-section">
          <img src={logo} alt="IIT Bhagalpur" className="logo" />
          <span className="brand-name">IIT Bhagalpur</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Instructions</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

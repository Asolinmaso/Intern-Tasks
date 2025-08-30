import React, { useEffect } from 'react';
import logo from '../../assets/iit-b-logo.png';
import './Header.css';

const Header = () => {
  useEffect(() => {
    document.body.setAttribute("data-bs-spy", "scroll");
    document.body.setAttribute("data-bs-target", "#navbarNav");
    document.body.setAttribute("data-bs-offset", "70");
    document.body.classList.add("scrollspy-example");
  }, []);

  return (
    <>
      {/* Top header */}
      <div className="header-top bg-white shadow-sm d-flex align-items-center p-3 border-bottom">
        <img src={logo} alt="IIT Bhagalpur" className="logo me-3" />
        <div>
          <h5 className="mb-1 institute-name">Indian Institute of Information Technology Bhagalpur</h5>
          <small className="text-muted">An Institute of National Importance</small>
        </div>
      </div>

      {/* Sticky Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 sticky-top" id="mainNavbar">
        <div className="container-fluid">
          <a className="navbar-brand d-lg-none" href="#">IIITBH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#departments">Departments</a></li>
              <li className="nav-item"><a className="nav-link" href="#academics">Academics</a></li>
              <li className="nav-item"><a className="nav-link" href="#notices">Notices</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

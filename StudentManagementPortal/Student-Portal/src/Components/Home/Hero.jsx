import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      {/* White overlay below the navbar */}
      <div className="hero-header-white"></div>

      <section className="hero-section text-center">
        <div className="container">
          <h1 className="hero-title">Welcome to IIIT Bhagalpur</h1>
          <p className="hero-subtitle">
            Fostering Innovation & Excellence in Technical Education
          </p>
          <a href="#about" className="btn btn-primary mt-3 px-4">
            Login
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

// src/components/LandingPage.js
import React from 'react';
import './Landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Trailblazer Engineering Services</h1>
          <p>Innovating the future, delivering excellence.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          At Trailblazer Engineering Services, we are committed to providing top-quality engineering solutions 
          that meet your needs. Our team of professionals specializes in construction, project management, and 
          cutting-edge technology.
        </p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Construction</h3>
            <p>We build with precision and deliver world-class construction projects.</p>
          </div>
          <div className="service-item">
            <h3>Project Management</h3>
            <p>Managing projects from conception to completion with quality assurance.</p>
          </div>
          <div className="service-item">
            <h3>Electro-Mechanical Engineering</h3>
            <p>Expert in Electrical and solar installation.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Our Projects</h2>
        <p>
          Explore our portfolio of successful projects ranging from infrastructure development to high-tech 
          engineering solutions.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;

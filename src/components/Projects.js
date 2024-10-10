// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-header">Our Projects</h2>
      <div className="projects-gallery">
        <div className="project-item">
          <img src="/assets/completedprojects.png" alt="Project 1" className="project-image" />
          <h4>Procument and installation </h4>
          <p>This project involved the procurement and installation and service after sales of power Generating set for our client at Abeokuta,Ogun state.</p>
        </div>
        <div className="project-item">
          <img src="/assets/PowerDistributionchanel.jpeg" alt="Project 2" className="project-image" />
          <h4>Power Distribution chanel</h4>
          <p>: This project involved the installation of power distribution chanel for one of customers in Ikoyi,Lagos.</p>
        </div>
        <div className="project-item">
          <img src="/assets/dc.png" alt="Project 3" className="project-image" />
          <h4>Installation of Solar inverters</h4>
          <p> This project involved the installation of Solar inverters for one of our clients at Lekki, Lagos.</p>
        </div>
        <div className="project-item">
          <img src="/assets/team.png" alt="Project 4" className="project-image" />
          <h4>Installation of Solar Panel</h4>
          <p> This project involved the installation and Solar Panel and inverter for some of our clients in Benin city, Edo.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

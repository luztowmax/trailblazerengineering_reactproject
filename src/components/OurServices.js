// src/components/Services.js
import React from 'react';
import { FaServicestack } from 'react-icons/fa';
import './OurServices.css';

const OurServices = () => {
  return (
    <section id="ourservices" className="ourservices-container">
      <h2><FaServicestack /> OurServices</h2>

      <div className="ourservice-item">
        <h4>Solar Solutions</h4>
        <img src="/assets/SolarPanel.jpg" alt="solar solutions" className="service-image" />
        <p>
          TRAILBLAZER ENGINEERING SERVICES LTD delivers sustainable energy solutions. Solar power remains the most secure form of energy for the future. 
          Solar power is the conversion of sunlight into electricity either directly using Photovoltaics (PV), or indirectly using Concentrated Solar Power (CSP). 
          As the cost of solar electricity has fallen, the number of grid-connected solar PV systems has grown into the millions. 
          Our competent installers will gladly advise you on all solar technology matters and help you choose the right system.
        </p>
      </div>

      <div className="ourservices-item">
        <h4>Electrical Installations</h4>
        <img src="/assets/Solarpower.webp" alt="Power distribution" className="service-image" />
        <p>
          The fixed electrical installation includes the electrical wiring, machinery, and components that are fixed to a building. 
          Installations include, for instance, fuse boxes, solar or generator installations, ceiling lights, and power sockets.
        </p>
      </div>

      <div className="ourservices-item">
        <h4>Engineering Services</h4>
        <img src="/assets/Lithiumbattery.webp" alt="lithium-ion-battery" className="service-image" />
        <p>
          TRAILBLAZER ENGINEERING SERVICES LTD will plan, design, select, install, commission, test, report, maintain, fault find, and repair systems to a high standard. 
          Our electricians have excellent problem-solving skills, flexibility, and a deep body of knowledge.
        </p>
      </div>

      <div className="ourservices-item">
        <h4>Logistics Operations</h4>
        <img src="/assets/MikanoGenerator.jpeg" alt="Mikano generator" className="service-image" />
        <p>
          At TRAILBLAZER ENGINEERING SERVICES LTD, we pride ourselves on putting our customers first. 
          Whether you require hire for one day, one week, or one year, we will work closely with you to provide the exact service you require.
        </p>
      </div>
    </section>
  );
};

export default OurServices;

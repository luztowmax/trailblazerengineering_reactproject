// src/components/Aboutus.js
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <section id="aboutus" className="aboutus-section">
      <h2><FaInfoCircle /> About Us</h2>
      <h4>Welcome To Trailblazer Engineering Services Ltd</h4>
      <p>
        Trailblazer Engineering Services Limited is a company incorporated under the Laws of the Federal Republic of Nigeria to carry out Project Management in the power, Telecommunications, Oil & Gas (Upstream & Downstream) sectors, including complex Engineering, Procurement and Construction as well as installations in any industry.
      </p>
      <p>
      Since 2019 we have been a family owned and operated business committed to being a service provider of choice to owners, developers and clients throghout the region. Our first and foremost commitment is to our local community, using a local workforce. as we continued to experience service demands from the local community our small business expanded into what it is today, a 'multi-faceted' engineering company. From our original scope of repairsand maintenance we now provide a full range of engineering services.

      Our diverse client base now includes: factories and power generation industries, transport, construction angricultural industries. We will continue to work with our local community and these industries and provide innovative and effective solutions in our provision of service.

      </p>
      <h4>Our Keys to Success</h4>
      <p>Providing a professional quality service on time and on budget
        Working honestly by developing a follow-up strategy to guage performance and build trust with all our clients.
        Developing an end to end engineering product and services capability
        Working closely with our customers and providing a transparent line of communication.
      </p>
      <h4>Our Staff</h4>
      <p>Over the years we have built a stable workforce with a large number of our employees being 'long term employees' Loyalty and commitment are values we promote amogst all our employees,from apprentices and trainees through to senior management. I am committed to building a sustainable future for our company and staff we employ by continuing to work with in our local community to achieve success in all we do. Thank you for considering Trailblazer Engineering Services Ltd as a
      business partner and a provider of engineering services
      </p>

      {/* MD Section */}
      <div className="md-section">
        <img src="/assets/blessed 2.jpg" alt="MD of Trailblazer Engineering" className="md-image" />
        <div className="md-info">
          <h4>Engr. Omosumen Blessed Osalobo (MNSE)</h4>
          <p>Managing Director, Trailblazer Engineering Services Ltd</p>
        </div>
      </div>

    
    </section>
  );
};

export default Aboutus;

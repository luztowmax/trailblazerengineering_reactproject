import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+234 8038576955">+234 8038576955</a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:info@example.com">support@trailblazerengineeringservices.com</a>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>9A, Susan Orji Street, Royal View Estate,Ikota ,Lekki, Lagos. Nigeria.</p>
        </div>
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <a href="https://wa.me/2348038576955" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

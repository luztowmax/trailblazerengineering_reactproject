// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Create a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#contact-us" className="footer-link">Contact Us</a>
        <a href="#about-us" className="footer-link">About Us</a>
        <a href="https://www.facebook.com/shareja7KcZgSAhLSk6dd/?mibextid=oFDknk" className="footer-link"><FaFacebook /></a>
        <a href="https://twitter.com" className="footer-link"><FaTwitter /></a>
        <a href="https://www.instagram.com/trailblazer_engineeringltd?igsh=cThsN3hkZ3dxODVw" className="footer-link"><FaInstagram /></a>
        <a href="https://www.linkedin.com" className="footer-link"><FaLinkedin /></a>
        <a href="https://www.tiktok.com" className="footer-link"><FaTiktok /></a>
        <a href="mailto:support@trailblazerengineeringservices.com" className="footer-link"><FaEnvelope /></a>
        <a href="https://wa.me/+2348038576955" className="footer-link"><FaWhatsapp /></a>
      </div>
      <p className="footer-text">© 2024 Trailblazer Engineering Services Ltd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

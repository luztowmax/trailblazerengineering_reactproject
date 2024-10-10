import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import './Navbar.css'; // Style for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/TESLOGO.PNG" alt="Trailblazer Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}> Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}> About Us</Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}> Our Services</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}> Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}> Contact Us</Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}> Testimonials</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

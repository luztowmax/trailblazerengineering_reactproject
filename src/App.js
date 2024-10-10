// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage'
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import OurServices from './components/OurServices';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <Hero />
      <Aboutus />
      <OurServices />
      <Projects />
      <Contact />
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default App;

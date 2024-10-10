// src/components/Hero.js
import React from 'react';
import './Hero.css';

const slides = [
  {
    title: "Welcome to Trailblazer Engineering Services",
    description: "We provide innovative engineering solutions.",
    image: "/assets/Solarpanel.jpg"
  },
  {
    title: "Professional and Reliable",
    description: "Delivering projects on time and within budget.",
    image: "/assets/Solarpower.webp"
  },
  {
    title: "Engineering the Future",
    description: "Shaping the world with sustainable solutions.",
    image: "/assets/Lithiumbattery.webp"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
      </div>
    </section>
  );
};

export default Hero;

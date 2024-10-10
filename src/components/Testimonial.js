import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Mr. Joe",
    role: "World Health Organization",
    image: "/assets/imageswho.png", // replace with the correct image path
    feedback: "Trailblazer Engineering Services provided exceptional service. Their commitment to delivering top-notch quality on time was beyond impressive."
  },
  {
    name: "Jane Smith",
    role: "MTN",
    image: "/assets/mtn.png", // replace with the correct image path
    feedback: "We are more than satisfied with the professionalism and expertise that Trailblazer demonstrated on our project."
  },
  {
    name: "Michael Brown",
    role: "Nigeria Military Hospital",
    image: "/assets/NigeriaMilitaryHospital.jpeg", // replace with the correct image path
    feedback: "The team at Trailblazer handled every challenge with creativity and expertise. I couldn't be happier with the outcome."
  },
  {
    name: "Sarah Johnson",
    role: "Apata Memorial School,Isolo.Lagos.",
    image: "/assets/Apatamemorialschool.jpeg", // replace with the correct image path
    feedback: "From start to finish, the team was attentive, professional, and delivered great results. I highly recommend them."
  }
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testifier, index) => (
          <div key={index} className="testimonial-item">
            <img src={testifier.image} alt={testifier.name} className="testifier-image" />
            <blockquote>
              <p>{testifier.feedback}</p>
              <footer>
                <strong>{testifier.name}</strong>, <em>{testifier.role}</em>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

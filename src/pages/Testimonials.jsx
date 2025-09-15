import React from 'react';
import testimonial1 from '../assets/testimonial1.jpg'; // Add testimonial images
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      img: testimonial1,
      name: "John Smith",
      role: "CEO, TechNova Inc.",
      quote: "WinScale Consultancy helped us launch our startup in record time. Their team is professional, responsive, and truly understands business growth."
    },
    {
      img: testimonial2,
      name: "Priya Patel",
      role: "Founder, GreenLeaf Solutions",
      quote: "From legal setup to marketing, WinScale handled everything seamlessly. Highly recommended for international clients!"
    },
    {
      img: testimonial3,
      name: "Alex Chen",
      role: "Director, Global Ventures",
      quote: "Their technical and recruitment support is top-notch. We scaled our team and digital presence with their help."
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.img} alt={t.name} />
            <div className="name">{t.name}</div>
            <div className="role">{t.role}</div>
            <div className="quote">"{t.quote}"</div>
          </div>
        ))}
      </div>
    </section>
  );
}
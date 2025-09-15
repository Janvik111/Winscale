import React from 'react';
import aboutImg from '../assets/about.jpg'; // Add an about.jpg image in src/assets

export default function About() {
  return (
    <section className="section">
      <h2 className="section-title">About Us</h2>
      <img src={aboutImg} alt="About WinScale" className="about-img" />
      <p>
        WinScale Consultancy is a global business consulting firm dedicated to helping entrepreneurs and companies achieve their dreams. 
        Our team brings years of experience in business strategy, legal setup, funding, recruitment, technology, and marketing.
      </p>
      <p>
        We believe in building long-term relationships and delivering measurable results. Whether you are a startup or an established enterprise, we provide tailored solutions to help you scale and succeed.
      </p>
    </section>
  );
}
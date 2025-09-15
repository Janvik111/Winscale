import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.webp'; // Add a hero.jpg image in src/assets

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <img src={heroImg} alt="Business Success" />
      <div className="hero-content">
        <h1>WinScale Consultancy</h1>
        <p>
          Your Trusted Partner in Building Successful Businesses.<br />
          We help individuals, entrepreneurs, and companies bring their business dreams to life — the hassle-free way.
        </p>
        <button className="cta-btn" onClick={() => navigate('/contact')}>
          Get Started
        </button>
      </div>
    </section>
  );
}
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>🌟 WinScale Consultancy 🌟</div>
      <div>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/international">International</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
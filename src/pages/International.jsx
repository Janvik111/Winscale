import React from 'react';
import intl1 from '../assets/intl1.jpg'; // Add images for each international service
import intl2 from '../assets/intl2.jpg';
import intl3 from '../assets/intl3.jpg';
import intl4 from '../assets/intl4.jpg';
import intl5 from '../assets/intl5.jpg';
import intl6 from '../assets/intl6.jpg';
import intl7 from '../assets/intl7.jpg';
import intl8 from '../assets/intl8.jpg';
import intl9 from '../assets/intl9.jpg';

export default function International() {
  const intlServices = [
    { img: intl1, title: "Website Development", desc: "Modern, responsive websites for global businesses." },
    { img: intl2, title: "Technical Support", desc: "Ongoing technical help for your digital needs." },
    { img: intl3, title: "Digital Marketing", desc: "Meta ads, Google ads, and campaign management." },
    { img: intl4, title: "Graphic Designing", desc: "Creative graphics for branding and marketing." },
    { img: intl5, title: "Video Editing", desc: "Professional video editing for promotions and ads." },
    { img: intl6, title: "Social Media Handling", desc: "Grow and engage your audience on all platforms." },
    { img: intl7, title: "SEO", desc: "Improve your website’s visibility and ranking." },
    { img: intl8, title: "Business Consulting", desc: "Expert advice for international business growth." },
    { img: intl9, title: "Planning & Strategy", desc: "Strategic planning for global expansion." },
  ];

  return (
    <section className="section">
      <h2 className="section-title">International Clients</h2>
      <div className="card-grid">
        {intlServices.map((s, i) => (
          <div className="card" key={i}>
            <img src={s.img} alt={s.title} />
            <div className="card-title">{s.title}</div>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <p style={{ fontWeight: 'bold', color: '#457b9d', fontSize: '1.1rem', marginTop: '2rem' }}>
        All these services for just <span style={{ color: '#e63946' }}>$2,000/month Subscription</span>
      </p>
    </section>
  );
}
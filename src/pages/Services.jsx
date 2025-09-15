import React from 'react';
import service1 from '../assets/service1.jpg'; // Add images for each service
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.jpg';
import service6 from '../assets/service6.jpg';
import service7 from '../assets/service7.jpg';

export default function Services() {
  const services = [
    { img: service1, title: "Business Planning & Strategy", desc: "Expert guidance to shape your business vision and strategy." },
    { img: service2, title: "Company Registration & Legal Setup", desc: "Complete support for legal formalities and company setup." },
    { img: service3, title: "Funding Support", desc: "Access government grants and investor connections." },
    { img: service4, title: "Hiring & Recruitment", desc: "Find the right talent, from interns to full-time employees." },
    { img: service5, title: "Technical Support", desc: "Mobile app and website development for your business." },
    { img: service6, title: "Marketing Solutions", desc: "Social Media, Meta Ads & Google Ads to boost your reach." },
    { img: service7, title: "DPR Preparation", desc: "Detailed Project Report for business planning and funding." },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Our Services</h2>
      <div className="card-grid">
        {services.map((s, i) => (
          <div className="card" key={i}>
            <img src={s.img} alt={s.title} />
            <div className="card-title">{s.title}</div>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
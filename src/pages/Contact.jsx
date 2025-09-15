import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add actual form submission logic (API call)
  }

  return (
    <section className="section">
      <h2 className="section-title">Contact Us</h2>
      <p>
        💡 Let’s make your entrepreneurial journey smooth, fast, and hassle-free.<br />
        📞 Connect with us today and take the first confident step toward your business goals!
      </p>
      <p>
        <strong>Email:</strong> info@winscaleconsultancy.com<br />
        <strong>Phone:</strong> +91-XXXXXXXXXX
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
        {submitted && <div style={{ color: '#457b9d', marginTop: '1rem' }}>Thank you! We will contact you soon.</div>}
      </form>
    </section>
  );
}
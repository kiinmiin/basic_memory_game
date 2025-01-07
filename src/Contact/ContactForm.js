import React, { useState } from 'react';
import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';   

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {submitted && <p style={{ color: 'green' }}>Thank you! Your message has been sent.</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
        <div class="contact-icons">
          <a href="mailto:rasmo.kiin@voco.ee"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="https://github.com/kiinmiin" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

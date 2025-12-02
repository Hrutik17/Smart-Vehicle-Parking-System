
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Message disappears after 3 seconds
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us 📞</h2>
        <div className="contact-info">
          <p>
            For support or inquiries, please reach out to us at:<br/>
            <span className="contact-email">khrutik2001@gmail.com</span>
          </p>
          <p>📲 <b>Phone:</b> +91 7022349038</p>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4" placeholder="Write your message here..." required></textarea>

            <button type="submit">Submit</button>
          </form>
          {submitted && <p className="success-message">✅ Message submitted successfully!</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;




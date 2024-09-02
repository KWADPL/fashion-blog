import React from "react";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Get in touch with us for more information, inquires, or just to say
        hello
      </p>

      <div className="contact-info">
        <div className="contact-details">
          <h2>Our Contact Details</h2>
          <p>
            <strong>Email:</strong> didi@fashionblog.com
          </p>
          <p>
            <strong>Phone:</strong> +123 456 789
          </p>
          <p>
            <strong>Adress:</strong>123 Fashion St, Dog Town, youGay 12345
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

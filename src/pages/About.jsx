import React from 'react';
import '../styles/About.css'
import teamPhoto from '../assets/20240817_170835.jpg'

function About() {
    return (
        <div className="about-container">
          <h1>About Us</h1>
          <p>Welcome to our fashion blog! We are dedicated to bringing you the latest trends, tips, and insights from the world of fashion.</p>
          
          <div className="mission-vision">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>Our mission is to inspire fashion enthusiasts by providing high-quality content that reflects the latest trends and timeless styles. We strive to create a community where fashion lovers can connect and share their passion.</p>
            </div>
            <div className="vision">
              <h2>Our Vision</h2>
              <p>We envision a world where fashion is accessible to everyone and where creativity and individuality are celebrated. We aim to be the go-to source for fashion inspiration, advice, and community engagement.</p>
            </div>
          </div>
    
          <div className="team-section">
            <h2>Meet Our Team</h2>
            <img src={teamPhoto} alt="Our Team" className="team-photo" />
            <p>My team is me and My dog! My dog is more stylish than me so she rocks! Didi and Me will provide good content!</p>
          </div>
    
          <div className="testimonials">
            <h2>What Our Readers Say</h2>
            <div className="testimonial">
              <p>"This blog has completely transformed the way I approach fashion. The tips and trends are always spot-on!"</p>
              <p className="author">- Your mom</p>
            </div>
            <div className="testimonial">
              <p>"I love how this blog combines practical advice with high-fashion inspiration. It's my go-to source for all things fashion!"</p>
              <p className="author">- <em>Daddy</em></p>
            </div>
          </div>
    
          <div className="cta">
            <h2>Join Our Community</h2>
            <p>Stay updated with the latest trends and tips by subscribing to our newsletter. Follow us on social media and be part of our fashion journey!</p>
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        </div>
      );
    }

export default About;

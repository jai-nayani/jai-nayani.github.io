import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";

const About = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header */}
        <div className="page-header">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <h1 className="page-title">
            <span className="section-prefix">/about</span>
          </h1>
        </div>

        {/* About Content */}
        <div className="page-content">
          <div className="about-content">
            <div className="profile-image-container small">
              <div className="profile-image">
                <div className="profile-placeholder">
                  JA
                </div>
              </div>
            </div>
            
            <div className="about-text">
              <h2 className="content-title">Hello, I'm {mockData.name}</h2>
              <p className="content-description">
                {mockData.about}
              </p>
              
              <div className="contact-info">
                <h3>Get in touch</h3>
                <div className="contact-links">
                  <a href="tel:+14122249552" className="contact-link">
                    📞 +1 (412) 224-9552
                  </a>
                  <a href="mailto:adi.nayani1427@gmail.com" className="contact-link">
                    ✉️ adi.nayani1427@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/jai-adithya-ram-nayaniyani-20363b1a0/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    💼 LinkedIn Profile
                  </a>
                  <a href="https://github.com/jai-nayani" target="_blank" rel="noopener noreferrer" className="contact-link">
                    🐙 GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-signature" style={{ textAlign: 'center', width: '100%' }}>
            Jai Adithya Ram
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
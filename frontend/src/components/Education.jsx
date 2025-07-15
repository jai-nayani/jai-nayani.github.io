import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";

const Education = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header */}
        <div className="page-header">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <h1 className="page-title">
            <span className="section-prefix">/education</span>
          </h1>
        </div>

        {/* Education Content */}
        <div className="page-content">
          <div className="education-content">
            {mockData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <span className="education-duration">{edu.duration}</span>
                </div>
                <div className="education-details">
                  <h4 className="school-name">{edu.school}</h4>
                  <div className="gpa-info">
                    <span className="gpa">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="education-summary">
              <h3>Academic Highlights</h3>
              <p>
                Pursuing advanced studies in Computer Science with focus on software engineering, 
                cloud computing, and full-stack development. Consistently maintained high academic 
                performance while gaining practical experience through internships and projects.
              </p>
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

export default Education;
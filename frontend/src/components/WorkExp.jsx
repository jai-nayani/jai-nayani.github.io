import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";

const WorkExp = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header */}
        <div className="page-header">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <h1 className="page-title">
            <span className="section-prefix">/work exp</span>
          </h1>
        </div>

        {/* Work Experience Content */}
        <div className="page-content">
          <div className="work-experience">
            {mockData.workExperience.map((job, index) => (
              <div key={index} className="work-item">
                <div className="work-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-duration">{job.duration}</span>
                </div>
                <div className="work-details">
                  <h4 className="company-name">{job.company}</h4>
                  <div className="job-description">
                    {job.description.split('•').filter(point => point.trim()).map((point, pointIndex) => (
                      <div key={pointIndex} className="job-point">
                        • {point.trim()}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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

export default WorkExp;
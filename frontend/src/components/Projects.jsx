import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";

const Projects = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header */}
        <div className="page-header">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <h1 className="page-title">
            <span className="section-prefix">/projects</span>
          </h1>
        </div>

        {/* Projects Content - Bento Box Layout */}
        <div className="page-content">
          <div className="projects-content">
            <div className="bento-grid">
              {mockData.projects.map((project, index) => (
                <div key={index} className={`bento-item ${project.category}`}>
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-description">
                    {project.description.split('•').filter(point => point.trim()).map((point, pointIndex) => (
                      <div key={pointIndex} className="project-point">
                        • {point.trim()}
                      </div>
                    ))}
                  </div>

                  <div className="project-footer">
                    <div className="project-category-badge">
                      {project.category}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Additional Bento Items for Visual Interest */}
              <div className="bento-item small info-card">
                <div className="info-content">
                  <h4>Technical Expertise</h4>
                  <p>Specializing in full-stack development with modern technologies</p>
                </div>
              </div>
              
              <div className="bento-item small stats-card">
                <div className="stats-content">
                  <div className="stat">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
              
              <div className="bento-item medium contact-card">
                <div className="contact-content">
                  <h4>Let's Collaborate</h4>
                  <p>Always interested in discussing new opportunities and innovative projects.</p>
                  <div className="contact-buttons">
                    <a href="mailto:adi.nayani1427@gmail.com" className="contact-btn">
                      Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/jai-adithya-ram-nayaniyani-20363b1a0/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                      LinkedIn
                    </a>
                  </div>
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

export default Projects;
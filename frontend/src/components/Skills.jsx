import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";

const Skills = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header */}
        <div className="page-header">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <h1 className="page-title">
            <span className="section-prefix">/skills</span>
          </h1>
        </div>

        {/* Skills Content */}
        <div className="page-content">
          <div className="skills-content">
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="category-title">Languages</h3>
                <div className="skill-tags">
                  {mockData.skills.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Frameworks & Libraries</h3>
                <div className="skill-tags">
                  {mockData.skills.frameworks.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">J2EE Technologies</h3>
                <div className="skill-tags">
                  {mockData.skills.j2ee.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Web Technologies</h3>
                <div className="skill-tags">
                  {mockData.skills.web.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Databases</h3>
                <div className="skill-tags">
                  {mockData.skills.databases.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Cloud Platforms</h3>
                <div className="skill-tags">
                  {mockData.skills.cloud.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Development Tools</h3>
                <div className="skill-tags">
                  {mockData.skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">IDEs</h3>
                <div className="skill-tags">
                  {mockData.skills.ides.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Application Servers</h3>
                <div className="skill-tags">
                  {mockData.skills.servers.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Version Control</h3>
                <div className="skill-tags">
                  {mockData.skills.versionControl.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Project Management</h3>
                <div className="skill-tags">
                  {mockData.skills.projectManagement.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Methodologies</h3>
                <div className="skill-tags">
                  {mockData.skills.methodologies.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
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

export default Skills;
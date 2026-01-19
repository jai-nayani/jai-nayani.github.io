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
                <h3 className="category-title">Programming Languages</h3>
                <div className="skill-tags">
                  {mockData.skills.languages?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">AI/LLM Ecosystem</h3>
                <div className="skill-tags">
                  {mockData.skills.aiLLM?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">ML Frameworks</h3>
                <div className="skill-tags">
                  {mockData.skills.mlFrameworks?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Vector Databases</h3>
                <div className="skill-tags">
                  {mockData.skills.vectorDatabases?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Backend & APIs</h3>
                <div className="skill-tags">
                  {mockData.skills.backendAPIs?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Frontend</h3>
                <div className="skill-tags">
                  {mockData.skills.frontend?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Cloud Platforms</h3>
                <div className="skill-tags">
                  {mockData.skills.cloudPlatform?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">AWS Services</h3>
                <div className="skill-tags">
                  {mockData.skills.awsServices?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Databases</h3>
                <div className="skill-tags">
                  {mockData.skills.databases?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Data & Workflow</h3>
                <div className="skill-tags">
                  {mockData.skills.dataWorkflow?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">DevOps & Observability</h3>
                <div className="skill-tags">
                  {mockData.skills.devopsObservability?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Product Integrations</h3>
                <div className="skill-tags">
                  {mockData.skills.productIntegrations?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Project Management</h3>
                <div className="skill-tags">
                  {mockData.skills.projectManagement?.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Methodologies</h3>
                <div className="skill-tags">
                  {mockData.skills.methodologies?.map((skill, index) => (
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
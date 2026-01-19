import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";
import PhotoStack3D from "./PhotoStack3D";
import ProfileImage3D from './ProfileImage3D';

const Modal = ({ open, onClose, children }) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(30,30,40,0.25)', backdropFilter: 'blur(6px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }} onClick={onClose}>
      <div style={{
        background: 'rgba(255,255,255,0.95)', borderRadius: 18, boxShadow: '0 8px 32px rgba(0,0,0,0.18)', padding: '3rem 2.5rem', maxWidth: 720, width: '95%', position: 'relative',
        maxHeight: '85vh', overflowY: 'auto',
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isPhotoStackOpen, setIsPhotoStackOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isCertificationsModalOpen, setIsCertificationsModalOpen] = useState(false);
  // Magnifier state
  const [magPos, setMagPos] = useState({ x: 0, y: 0, show: false });
  const nameRef = React.useRef(null);

  const handleProfileClick = () => {
    setIsPhotoStackOpen(true);
  };

  // Magnifier mouse handlers
  const handleNameMouseMove = (e) => {
    const rect = nameRef.current.getBoundingClientRect();
    setMagPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      width: rect.width,
      height: rect.height,
      show: true
    });
  };
  const handleNameMouseLeave = () => {
    setMagPos((pos) => ({ ...pos, show: false }));
  };

  return (
    <div className="portfolio-content">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image-container">
          <ProfileImage3D 
            size="large"
            onClick={handleProfileClick}
            imageSrc="/images/profile/profile-photo.jpg?v=3&cache=false" // Strong cache-busting for new image
            alt="Jai Adithya Ram Nayani"
          />
        </div>
        <div
          className="profile-name-magnifier-wrapper"
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <h1
            className="profile-name"
            ref={nameRef}
            onMouseMove={handleNameMouseMove}
            onMouseLeave={handleNameMouseLeave}
            style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}
          >
            Jai Adithya Ram Nayani
            {magPos.show && (
              <span
                className="profile-name-mask"
                style={{
                  position: 'absolute',
                  left: magPos.x - 50,
                  top: magPos.y - 50,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: '#fff',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />
            )}
          </h1>
          {magPos.show && (
            <span
              className="profile-name-magnifier"
              style={{
                position: 'absolute',
                left: magPos.x - 50,
                top: magPos.y - 50,
                width: 100,
                height: 100,
                pointerEvents: 'none',
                borderRadius: '50%',
                overflow: 'hidden',
                zIndex: 3,
                boxShadow: '0 2px 16px 0 #0002',
                transition: 'opacity 0.2s',
                opacity: magPos.show ? 1 : 0,
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  position: 'absolute',
                  left: -magPos.x * 1.5 + 50,
                  top: -magPos.y * 1.5 + 50,
                  transform: 'scale(1.5)',
                  transformOrigin: 'top left',
                  color: '#1a1a1a',
                  fontWeight: 700,
                  fontSize: '2.5rem',
                  letterSpacing: '-0.02em',
                  fontFamily: 'inherit',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                }}
              >
                Jai Adithya Ram Nayani
              </span>
            </span>
          )}
        </div>
        <p className="profile-title">{mockData.title}</p>
      </div>

        {/* Navigation Sections */}
        <div className="navigation-sections">
          {/* About Section with modal trigger */}
          <div className="section-item section-link modern-section-card" style={{ cursor: 'pointer' }} onClick={() => setIsAboutModalOpen(true)}>
            <div className="section-accent accent-blue"></div>
            <div className="section-main">
              <div className="section-title">About</div>
              <div className="section-content">
                <p className="section-preview">
                  Software engineer by day, meme curator by night.<br/>
                  <span className="about-teaser-link">Click here to discover my real superpowers.</span>
                </p>
              </div>
            </div>
          </div>
          {/* Work Experience Section with modal trigger */}
          <div className="section-item section-link modern-section-card" style={{ cursor: 'pointer' }} onClick={() => setIsWorkModalOpen(true)}>
            <div className="section-accent accent-emerald"></div>
            <div className="section-main">
              <div className="section-title">Work Experience</div>
              <div className="section-content">
                <p className="section-preview">
                  Building, breaking, and fixing things since 2021.<br/>
                  <span className="about-teaser-link">See my work journey.</span>
                </p>
              </div>
            </div>
          </div>
          {/* Education Section with modal trigger */}
          <div className="section-item section-link modern-section-card" style={{ cursor: 'pointer' }} onClick={() => setIsEducationModalOpen(true)}>
            <div className="section-accent accent-amber"></div>
            <div className="section-main">
              <div className="section-title">Education</div>
              <div className="section-content">
                <p className="section-preview">
                  Degrees, grades, and a lot of coffee.<br/>
                  <span className="about-teaser-link">View my academic path.</span>
                </p>
              </div>
            </div>
          </div>
          {/* Skills Section with modal trigger */}
          <div className="section-item section-link modern-section-card" style={{ cursor: 'pointer' }} onClick={() => setIsSkillsModalOpen(true)}>
            <div className="section-accent accent-teal"></div>
            <div className="section-main">
              <div className="section-title">Skills</div>
              <div className="section-content">
                <p className="section-preview">
                  Code, cloud, caffeine.<br/>
                  <span className="about-teaser-link">Check out my toolkit.</span>
                </p>
              </div>
            </div>
          </div>
          {/* Projects Section with modal trigger */}
          <div className="section-item section-link modern-section-card" style={{ cursor: 'pointer' }} onClick={() => setIsProjectsModalOpen(true)}>
            <div className="section-accent accent-coral"></div>
            <div className="section-main">
              <div className="section-title">Projects</div>
              <div className="section-content">
                <p className="section-preview">
                  From chatbots to cloud platforms.<br/>
                  <span className="about-teaser-link">Explore my builds.</span>
                </p>
              </div>
            </div>
          </div>
          {/* Certifications Section with modal trigger */}
          <div className="section-item section-link modern-section-card" style={{ cursor: 'pointer' }} onClick={() => setIsCertificationsModalOpen(true)}>
            <div className="section-accent accent-indigo"></div>
            <div className="section-main">
              <div className="section-title">Certifications</div>
              <div className="section-content">
                <p className="section-preview">
                  Achievements and credentials.<br/>
                  <span className="about-teaser-link">View my accomplishments.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="tel:+14122249552" className="social-btn">
            <span className="social-icon">📞</span>
            phone
          </a>
          <a href="mailto:adi.nayani1427@gmail.com" className="social-btn">
            <span className="social-icon">✉️</span>
            email
          </a>
          <a href="https://www.linkedin.com/in/jai-adithya-ram-nayaniyani-20363b1a0/" target="_blank" rel="noopener noreferrer" className="social-btn">
            <span className="social-icon">💼</span>
            linkedin
          </a>
          <a href="https://github.com/jai-nayani" target="_blank" rel="noopener noreferrer" className="social-btn">
            <span className="social-icon">🐙</span>
            github
          </a>
        </div>

        {/* Footer */}
        <div className="footer" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className="footer-signature">
            Jai Adithya Ram
          </div>
        </div>

        {/* 3D Photo Stack Modal */}
        <PhotoStack3D 
          isOpen={isPhotoStackOpen}
          onClose={() => setIsPhotoStackOpen(false)}
          photos={[]} // Add your photo URLs here
        />

        {/* About Modal Popup */}
        <Modal open={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)}>
          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>About Me</h2>
          <p style={{ color: '#444', lineHeight: 1.7, fontSize: '1.08rem' }}>{mockData.about}</p>
        </Modal>
        {/* Work Experience Modal Popup */}
        <Modal open={isWorkModalOpen} onClose={() => setIsWorkModalOpen(false)}>
          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Work Experience</h2>
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
        </Modal>
        {/* Education Modal Popup */}
        <Modal open={isEducationModalOpen} onClose={() => setIsEducationModalOpen(false)}>
          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Education</h2>
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
            <div className="education-summary" style={{ marginTop: 24 }}>
              <h3>Academic Highlights</h3>
              <p>
                Pursuing advanced studies in Computer Science with focus on software engineering, 
                cloud computing, and full-stack development. Consistently maintained high academic 
                performance while gaining practical experience through internships and projects.
              </p>
            </div>
          </div>
        </Modal>
        {/* Skills Modal Popup */}
        <Modal open={isSkillsModalOpen} onClose={() => setIsSkillsModalOpen(false)}>
          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Skills</h2>
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
        </Modal>
        {/* Projects Modal Popup */}
        <Modal open={isProjectsModalOpen} onClose={() => setIsProjectsModalOpen(false)}>
          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Projects</h2>
          <div className="projects-content">
            <div className="bento-grid">
              {mockData.projects.map((project, index) => (
                <div key={index} className={`bento-item ${project.category}`} style={{ marginBottom: 16 }}>
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.date && <span className="project-date" style={{ fontSize: '0.875rem', color: '#666', marginLeft: '8px' }}>{project.date}</span>}
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
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1.5rem',
                          backgroundColor: '#6366f1',
                          color: 'white',
                          borderRadius: '0.375rem',
                          textDecoration: 'none',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          transition: 'all 0.3s ease',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#059669';
                          e.target.style.transform = 'scale(1.05)';
                          e.target.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#6366f1';
                          e.target.style.transform = 'scale(1)';
                          e.target.style.boxShadow = '0 2px 4px rgba(99, 102, 241, 0.2)';
                        }}
                      >
                        Link
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
        {/* Certifications Modal Popup */}
        <Modal open={isCertificationsModalOpen} onClose={() => setIsCertificationsModalOpen(false)}>
          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Certifications & Achievements</h2>
          <div className="certifications-content">
            {mockData.certifications?.filter(c => c.type === "achievement").length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#333' }}>Achievements</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {mockData.certifications.filter(c => c.type === "achievement").map((item, index) => (
                    <div key={index} className="certification-card-hover" style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #10b981', transition: 'all 0.3s ease' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                      <p style={{ color: '#666', margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {mockData.certifications?.filter(c => c.type === "certification").length > 0 && (
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#333' }}>Certifications</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {mockData.certifications.filter(c => c.type === "certification").map((item, index) => (
                    <div key={index} className="certification-card-hover" style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #3b82f6', transition: 'all 0.3s ease' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1a1a1a' }}>{item.title}</h4>
                      <p style={{ color: '#666', margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
    </div>
  );
};

export default Portfolio;
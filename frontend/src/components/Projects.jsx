import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
                <Card key={index} className={`bento-item ${project.category} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.date && <Badge variant="outline" className="text-xs">{project.date}</Badge>}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description.split('•').filter(point => point.trim()).map((point, pointIndex) => (
                        <div key={pointIndex} className="mb-2">
                          • {point.trim()}
                        </div>
                      ))}
                    </CardDescription>
                  </CardContent>

                  <CardFooter>
                    {project.githubUrl && (
                      <Button 
                        asChild 
                        variant="default"
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg"
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
              
              {/* Additional Bento Items for Visual Interest */}
              <Card className="bento-item small info-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Technical Expertise</CardTitle>
                  <CardDescription>Specializing in full-stack AI development with modern technologies</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bento-item small stats-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="stats-content">
                    <div className="stat">
                      <span className="stat-number">4+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Technologies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bento-item medium contact-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Let's Collaborate</CardTitle>
                  <CardDescription>Always interested in discussing new opportunities and innovative projects.</CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <a href="mailto:adi.nayani1427@gmail.com" className="contact-btn">
                    Email Me
                  </a>
                  <a href="https://www.linkedin.com/in/jai-adithya-ram-nayaniyani-20363b1a0/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                    LinkedIn
                  </a>
                </CardFooter>
              </Card>
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
import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mockData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Certifications = () => {
  const achievements = mockData.certifications?.filter(c => c.type === "achievement") || [];
  const certifications = mockData.certifications?.filter(c => c.type === "certification") || [];

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header */}
        <div className="page-header">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <h1 className="page-title">
            <span className="section-prefix">/certifications</span>
          </h1>
        </div>

        {/* Certifications Content */}
        <div className="page-content">
          <div className="certifications-content">
            {achievements.length > 0 && (
              <div className="certifications-section">
                <h2 className="section-heading mb-6">Achievements</h2>
                <div className="certifications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {achievements.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                        <Badge variant="secondary" className="mt-3">Achievement</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {certifications.length > 0 && (
              <div className="certifications-section" style={{ marginTop: achievements.length > 0 ? '3rem' : '0' }}>
                <h2 className="section-heading mb-6">Certifications</h2>
                <div className="certifications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {certifications.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                        <Badge variant="outline" className="mt-3">Certification</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
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

export default Certifications;

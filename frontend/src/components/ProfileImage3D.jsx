import React, { useEffect, useRef } from 'react';
import './ProfileImage3D.css';

const ProfileImage3D = ({ 
  imageSrc, 
  alt = "Profile Image", 
  size = "large", 
  onClick,
  className = ""
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / (rect.height / 2)) * -10;
      const rotateY = (mouseX / (rect.width / 2)) * 10;
      
      wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };
    
    const handleMouseLeave = () => {
      wrapper.style.transform = '';
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const sizeClasses = {
    small: 'profile-image-3d-small',
    medium: 'profile-image-3d-medium',
    large: 'profile-image-3d-large'
  };

  return (
    <div 
      className={`profile-image-3d-container ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="image-wrapper" ref={wrapperRef}>
        <div className="frame"></div>
        <div className="depth-layer-2"></div>
        <div className="depth-layer"></div>
        <img 
          src={imageSrc} 
          alt={alt} 
          className="main-image"
          onLoad={(e) => {
            console.log('Image loaded successfully:', imageSrc);
            e.target.style.display = 'block';
            const placeholder = e.target.parentElement.querySelector('.profile-placeholder');
            if (placeholder) {
              placeholder.style.display = 'none';
            }
          }}
          onError={(e) => {
            console.error('Image failed to load:', imageSrc);
            // Fallback to placeholder if image fails to load
            e.target.style.display = 'none';
            const placeholder = e.target.parentElement.querySelector('.profile-placeholder');
            if (placeholder) {
              placeholder.style.display = 'flex';
            }
          }}
        />
        <div className="profile-placeholder" style={{ display: imageSrc ? 'none' : 'flex' }}>
          JA
        </div>
        <div className="highlight"></div>
      </div>
    </div>
  );
};

export default ProfileImage3D; 
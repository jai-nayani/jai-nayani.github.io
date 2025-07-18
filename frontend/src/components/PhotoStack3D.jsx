import React, { useState, useEffect } from 'react';
import './PhotoStack3D.css';

const SUPPORTED_EXTENSIONS = [
  '.jpg', '.jpeg', '.png', '.gif', '.JPG', '.JPEG', '.PNG', '.GIF'
];

const PhotoStack3D = ({ isOpen, onClose, photos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dynamicPhotos, setDynamicPhotos] = useState([]);
  const [isFading, setIsFading] = useState(false);

  // Fetch images from backend API
  useEffect(() => {
    if (photos.length === 0 && isOpen) {
      fetch('https://jai-adithya.up.railway.app/api/images')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.images)) {
            // Only include supported image formats
            const filtered = data.images.filter(filename =>
              SUPPORTED_EXTENSIONS.some(ext => filename.endsWith(ext))
            );
            setDynamicPhotos(
              filtered.map((filename, idx) => ({
                id: idx + 1,
                src: `https://jai-adithya.up.railway.app/images/${filename}`,
                alt: filename
              }))
            );
          }
        });
    }
  }, [photos.length, isOpen]);

  const displayPhotos = photos.length > 0 ? photos : dynamicPhotos;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  const handlePrevious = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prev =>
        prev === 0 ? displayPhotos.length - 1 : prev - 1
      );
      setIsFading(false);
    }, 200);
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prev =>
        prev === displayPhotos.length - 1 ? 0 : prev + 1
      );
      setIsFading(false);
    }, 200);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`photo-stack-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="photo-stack-modal">
        <div className="photo-stack-header">
          <div className="photo-stack-title">Photo Gallery</div>
          <div className="photo-stack-counter">
            {displayPhotos.length > 0 ? `${currentIndex + 1} / ${displayPhotos.length}` : 'No images'}
          </div>
          <button
            className="photo-stack-close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            ×
          </button>
        </div>
        <div
          className="photo-stack-content"
          onWheel={handleWheel}
        >
          <div className="photo-stack-single">
            {displayPhotos.length > 0 ? (
              <div
                className={`photo-item-single${isFading ? ' fade' : ''}`}
                key={displayPhotos[currentIndex].id || currentIndex}
              >
                <img
                  src={displayPhotos[currentIndex].src}
                  alt={displayPhotos[currentIndex].alt || `Photo ${currentIndex + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '15px', background: '#f5f7fa' }}
                />
              </div>
            ) : (
              <div style={{color:'#888',textAlign:'center',width:'100%'}}>No images found.</div>
            )}
          </div>
        </div>
        <div className="photo-stack-nav">
          <button
            onClick={handlePrevious}
            disabled={displayPhotos.length <= 1}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            disabled={displayPhotos.length <= 1}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoStack3D; 
# Profile Image Setup

## How to Add Your Profile Image

1. **Add your image file** to this directory (`frontend/public/images/`)
2. **Rename it to** `profile-photo.jpg` (or update the path in the components)
3. **Recommended format**: JPG or PNG
4. **Recommended size**: At least 800x1000 pixels for high quality
5. **Aspect ratio**: Portrait (taller than wide) works best

## Supported Formats
- JPG/JPEG
- PNG
- WebP

## Image Requirements
- **High quality**: At least 800x1000 pixels
- **Portrait orientation**: Works best with the 3D effect
- **Good lighting**: Well-lit face for best results
- **Professional appearance**: Suitable for portfolio

## Current Image Path
The components are configured to look for: `/images/profile-photo.jpg`

## Alternative Setup
If you want to use a different filename or path, update these files:
- `frontend/src/components/Portfolio.jsx` (line with `imageSrc`)
- `frontend/src/components/About.jsx` (line with `imageSrc`)

## 3D Effect Features
- ✅ Hover effects with 3D rotation
- ✅ Mouse tracking for realistic movement
- ✅ Depth layers and shadows
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Fallback to "JA" placeholder if image fails to load 
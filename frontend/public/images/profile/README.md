# Profile Images Directory

## 📸 How to Add Your Profile Image

1. **Add your image file** to this directory (`frontend/public/images/profile/`)
2. **Rename it to** `profile-photo.jpg` (or update the path in the components)
3. **Recommended format**: JPG or PNG
4. **Recommended size**: At least 800x1000 pixels for high quality
5. **Aspect ratio**: Portrait (taller than wide) works best

## 🎯 Image Requirements

### Technical Specifications
- **Format**: JPG, PNG, or WebP
- **Minimum size**: 800x1000 pixels
- **Aspect ratio**: Portrait (3:4 or 4:5 recommended)
- **File size**: Under 2MB for fast loading

### Visual Requirements
- **High quality**: Sharp, clear image
- **Good lighting**: Well-lit face
- **Professional appearance**: Suitable for portfolio
- **Background**: Clean, uncluttered background
- **Expression**: Professional, approachable

## 📁 File Structure
```
frontend/public/images/
├── profile/
│   ├── profile-photo.jpg    ← Your main profile image
│   ├── profile-photo-alt.jpg ← Alternative version (optional)
│   └── README.md           ← This file
└── [other images...]
```

## 🔧 Current Configuration

The components are configured to look for: `/images/profile/profile-photo.jpg`

### Components Using This Image:
- **Portfolio.jsx** - Main profile section (large size)
- **About.jsx** - About page (small size)

## 🔄 How to Update Image Path

If you want to use a different filename, update these files:

### Portfolio.jsx
```jsx
<ProfileImage3D 
  imageSrc="/images/profile/your-new-filename.jpg"
  // ... other props
/>
```

### About.jsx
```jsx
<ProfileImage3D 
  imageSrc="/images/profile/your-new-filename.jpg"
  // ... other props
/>
```

## ✨ 3D Effect Features

Your profile image will automatically have:
- ✅ **3D Hover Effects** - Rotation and scaling on hover
- ✅ **Mouse Tracking** - Realistic movement following cursor
- ✅ **Depth Layers** - Multiple shadow layers for 3D depth
- ✅ **Smooth Animations** - 6-second floating animation
- ✅ **Responsive Design** - Adapts to all screen sizes
- ✅ **Fallback System** - Shows "JA" placeholder if image fails

## 🚀 Quick Start

1. **Add your image** to this folder
2. **Rename to** `profile-photo.jpg`
3. **Deploy** with `yarn deploy` from the frontend directory
4. **View** at https://jai-nayani.github.io/

## 📱 Responsive Sizes

The 3D component automatically adjusts:
- **Desktop**: 400x500px (large)
- **Tablet**: 300x375px (medium)
- **Mobile**: 250x312px (small)

## 🎨 Styling Notes

- **Border radius**: 20px for modern rounded corners
- **Shadows**: Multiple layers for depth effect
- **Gradient**: Purple gradient fallback for placeholder
- **Animation**: Subtle floating effect 
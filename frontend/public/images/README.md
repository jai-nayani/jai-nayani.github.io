# Images Directory

## 📁 Directory Structure

```
frontend/public/images/
├── profile/           ← Profile images (see profile/README.md)
│   ├── profile-photo.jpg
│   └── README.md
├── [other images...]  ← Gallery and other images
└── README.md         ← This file
```

## 📸 Profile Images

For profile images, see: [profile/README.md](./profile/README.md)

## 🖼️ Gallery Images

For photo gallery images, add them to this directory. The backend API will automatically detect and serve them.

## 🔧 Backend Integration

The backend automatically serves images from this directory via the `/api/images` endpoint.

## 📝 Supported Formats

- JPG/JPEG
- PNG
- WebP
- HEIC (on supported browsers) 
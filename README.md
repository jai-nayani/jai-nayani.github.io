# Portfolio Website - Jai Adithya Ramnayani

A modern, responsive portfolio website built with React frontend, featuring a 3D photo gallery and dynamic content management.

## 🌐 Live Demo

- **Portfolio**: [https://jai-nayani.github.io/](https://jai-nayani.github.io/)

## 🚀 Features

- **Modern React Frontend** with Tailwind CSS and shadcn UI components
- **3D Photo Gallery** with local image management
- **Responsive Design** optimized for all devices
- **Static Site** deployment on GitHub Pages
- **Modern Typography** with Plus Jakarta Sans font

## 🛠️ Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Radix UI Components
- CRACO (Create React App Configuration Override)
- React Router DOM

### Deployment
- GitHub Pages (Static Site Hosting)

## 📁 Project Structure

```
Portfolio-main/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   └── utils/          # Helper functions
│   ├── public/             # Static assets
│   │   └── images/
│   │       └── gallery/    # Photo gallery images
│   └── package.json        # Frontend dependencies
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Development
```bash
cd frontend
yarn install
yarn start
```
Portfolio will be available at `http://localhost:3000`

## 🚀 Deployment

### GitHub Pages Deployment
```bash
cd frontend
yarn deploy
```
The portfolio is automatically deployed to GitHub Pages on push to main branch.

### Photo Gallery Setup
1. Add images to `frontend/public/images/gallery/` folder
2. Update `frontend/public/images/gallery/gallery.json` with image filenames:
```json
{
  "images": ["photo1.jpg", "photo2.png", "photo3.jpg"]
}
```

## 🔧 Development Commands

```bash
# Install dependencies
cd frontend && yarn install

# Start development server
cd frontend && yarn start

# Build for production
cd frontend && yarn build

# Deploy to GitHub Pages
cd frontend && yarn deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jai Adithya Ramnayani**
- GitHub: [@jai-nayani](https://github.com/jai-nayani)
- Portfolio: [https://jai-nayani.github.io/](https://jai-nayani.github.io/)

## 🙏 Acknowledgments

- React team for the amazing framework
- FastAPI for the high-performance backend
- Railway for seamless deployment
- GitHub Pages for static hosting
- Tailwind CSS for the utility-first CSS framework

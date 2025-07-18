# Portfolio Website - Jai Adithya Ramnayani

A modern, responsive portfolio website built with React frontend and FastAPI backend, featuring a 3D photo gallery and dynamic content management.

## 🌐 Live Demo

- **Frontend**: [https://jai-nayani.github.io/](https://jai-nayani.github.io/)
- **Backend API**: [https://jai-adithya.up.railway.app](https://jai-adithya.up.railway.app)

## 🚀 Features

- **Modern React Frontend** with Tailwind CSS and Radix UI components
- **FastAPI Backend** with MongoDB integration
- **3D Photo Gallery** with dynamic image loading
- **Responsive Design** optimized for all devices
- **Real-time API** for dynamic content
- **GitHub Pages** hosting for frontend
- **Railway** hosting for backend

## 🛠️ Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Radix UI Components
- CRACO (Create React App Configuration Override)
- React Router DOM

### Backend
- FastAPI
- Uvicorn
- Motor (Async MongoDB driver)
- Pydantic
- Python-dotenv

### Deployment
- GitHub Pages (Frontend)
- Railway (Backend)
- MongoDB Atlas (Database)

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
│   └── package.json        # Frontend dependencies
├── backend/                # FastAPI server
│   ├── server.py          # Main server file
│   ├── requirements.txt   # Python dependencies
│   ├── Procfile          # Railway deployment config
│   └── railway.json      # Railway configuration
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Yarn package manager
- MongoDB database

### Frontend Development
```bash
cd frontend
yarn install
yarn start
```
Frontend will be available at `http://localhost:3000`

### Backend Development
```bash
cd backend
pip install -r requirements.txt
python server.py
```
Backend will be available at `http://localhost:8000`

### Environment Variables
Create a `.env` file in the backend directory:
```env
MONGO_URL=your_mongodb_connection_string
DB_NAME=your_database_name
```

## 🚀 Deployment

### Frontend Deployment (GitHub Pages)
```bash
cd frontend
yarn deploy
```
The frontend is automatically deployed to GitHub Pages.

### Backend Deployment (Railway)
1. Connect your GitHub repository to Railway
2. Set the root directory to `backend`
3. Configure environment variables in Railway dashboard
4. Deploy automatically on push to main branch

## 📝 API Endpoints

- `GET /api/` - Health check
- `GET /api/images` - List available images
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

## 🔧 Development Commands

```bash
# Install frontend dependencies
cd frontend && yarn install

# Start frontend development server
cd frontend && yarn start

# Build frontend for production
cd frontend && yarn build

# Deploy frontend to GitHub Pages
cd frontend && yarn deploy

# Install backend dependencies
cd backend && pip install -r requirements.txt

# Start backend development server
cd backend && python server.py

# Run backend tests
cd backend && python -m pytest
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

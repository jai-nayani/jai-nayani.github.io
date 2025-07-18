# Deployment Guide - Portfolio Website

This guide covers the deployment process for both the frontend (GitHub Pages) and backend (Railway) components of the portfolio website.

## 🌐 Live URLs

- **Frontend**: https://jai-nayani.github.io/
- **Backend API**: https://jai-adithya.up.railway.app

## 📋 Prerequisites

- GitHub account
- Railway account
- MongoDB Atlas account (for database)
- Node.js and Yarn installed locally

## 🚀 Frontend Deployment (GitHub Pages)

### Step 1: Prepare Frontend for Deployment

1. **Install gh-pages package** (if not already installed):
   ```bash
   cd frontend
   yarn add gh-pages --dev
   ```

2. **Update package.json**:
   - Set `homepage` to your GitHub Pages URL
   - Add deployment scripts:
   ```json
   {
     "homepage": "https://jai-nayani.github.io",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Update API endpoints** to use production backend URL:
   - Replace localhost URLs with Railway backend URL
   - Example: `https://jai-adithya.up.railway.app/api/images`

### Step 2: Deploy to GitHub Pages

```bash
cd frontend
yarn deploy
```

### Step 3: Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch
5. Save configuration

## 🔧 Backend Deployment (Railway)

### Step 1: Prepare Backend for Deployment

1. **Ensure backend files are ready**:
   - `server.py` - Main FastAPI application
   - `requirements.txt` - Python dependencies
   - `Procfile` - Railway start command
   - `railway.json` - Railway configuration

2. **Environment Variables** (set in Railway dashboard):
   ```
   MONGO_URL=your_mongodb_connection_string
   DB_NAME=your_database_name
   PORT=8000
   ```

### Step 2: Deploy to Railway

1. **Create Railway Account**:
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Service**:
   - Set root directory to `backend`
   - Railway will auto-detect Python/FastAPI

4. **Set Environment Variables**:
   - Go to service settings
   - Add required environment variables
   - Save changes

5. **Deploy**:
   - Railway will automatically deploy on push to main branch
   - Monitor deployment logs for any issues

### Step 3: Get Public URL

- Railway will provide a public URL (e.g., `https://jai-adithya.up.railway.app`)
- Use this URL in your frontend API calls

## 🔄 Continuous Deployment

### Frontend Updates
```bash
# Make changes to frontend code
cd frontend
yarn deploy  # Deploy to GitHub Pages
```

### Backend Updates
```bash
# Make changes to backend code
git add .
git commit -m "Update backend"
git push origin main  # Railway auto-deploys
```

## 🐛 Troubleshooting

### Frontend Issues
- **Build fails**: Check for syntax errors in React components
- **API calls fail**: Verify backend URL is correct
- **Images not loading**: Check image paths and backend `/api/images` endpoint

### Backend Issues
- **Deployment fails**: Check Railway logs for Python errors
- **Database connection fails**: Verify MongoDB connection string
- **CORS errors**: Ensure CORS middleware is configured correctly

### Common Commands
```bash
# Check Railway logs
railway logs

# Restart Railway service
railway service restart

# Check GitHub Pages deployment
# Go to repository > Actions tab
```

## 📊 Monitoring

### Frontend Monitoring
- GitHub Pages deployment status
- Browser console errors
- Network requests to backend

### Backend Monitoring
- Railway deployment logs
- API endpoint health checks
- Database connection status

## 🔒 Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **CORS**: Configure allowed origins properly
3. **API Keys**: Store securely in Railway environment variables
4. **Database**: Use MongoDB Atlas with proper authentication

## 📝 Deployment Checklist

### Before Deployment
- [ ] All tests pass
- [ ] Environment variables configured
- [ ] API endpoints updated to production URLs
- [ ] Database connection tested
- [ ] Images and assets properly linked

### After Deployment
- [ ] Frontend loads correctly
- [ ] Backend API responds
- [ ] Photo gallery works
- [ ] All features functional
- [ ] Performance acceptable

## 🆘 Support

If you encounter deployment issues:

1. Check Railway logs for backend errors
2. Verify GitHub Pages deployment status
3. Test API endpoints manually
4. Review environment variable configuration
5. Check database connectivity

For additional help, refer to:
- [Railway Documentation](https://docs.railway.app/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)

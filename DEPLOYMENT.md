# Portfolio Deployment Guide

## Deploy Both Frontend & Backend for Free on Railway

### Prerequisites
- GitHub account
- Railway account (free at railway.app)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio-main.git
git push -u origin main
```

### Step 2: Deploy Backend on Railway

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login with GitHub**
3. **Click "New Project" → "Deploy from GitHub repo"**
4. **Select your repository**
5. **Choose the `backend` folder**
6. **Add Environment Variables:**
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Your database name (e.g., `portfolio`)
7. **Railway will auto-deploy your FastAPI backend**

### Step 3: Deploy Frontend on Railway

1. **In Railway dashboard, click "New Service"**
2. **Select "GitHub Repo"**
3. **Choose the same repository but select `frontend` folder**
4. **Add Environment Variables:**
   - `REACT_APP_API_URL`: Your backend URL (from Step 2)
5. **Railway will auto-deploy your React frontend**

### Step 4: Configure Domains

1. **Backend Domain:** Railway provides a URL like `https://your-backend-name.railway.app`
2. **Frontend Domain:** Railway provides a URL like `https://your-frontend-name.railway.app`
3. **Custom Domain (Optional):** Add your own domain in Railway settings

### Step 5: Update Frontend API Calls

Update your frontend to use the production backend URL:

```javascript
// In your frontend code, replace localhost:8000 with your Railway backend URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-backend-name.railway.app';
```

### Step 6: Test Your Deployment

1. **Visit your frontend URL**
2. **Test all features (modals, photo gallery, etc.)**
3. **Check that backend API calls work**

### Free Tier Limits

**Railway Free Tier:**
- $5 credit monthly
- Sufficient for portfolio hosting
- Auto-sleep after inactivity (wakes up on request)

### Alternative: Vercel + Railway

If you prefer:
- **Frontend:** Deploy on Vercel (better for React)
- **Backend:** Deploy on Railway
- **Connect them:** Update frontend API calls to Railway backend URL

### Troubleshooting

1. **Build fails:** Check Railway logs
2. **API calls fail:** Verify environment variables
3. **CORS issues:** Backend already configured for CORS

### Cost: $0/month (Free tier) 
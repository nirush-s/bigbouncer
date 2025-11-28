# Deploy via GitHub (Recommended)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `bigbouncer` (or your choice)
3. Make it **Public** (or Private if you prefer)
4. **Don't** initialize with README (we already have files)
5. Click "Create repository"

## Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd "/Users/nirushs/Desktop/Work Related/Projects/BigBouncer"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bigbouncer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**OR** if you prefer SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/bigbouncer.git
git branch -M main
git push -u origin main
```

## Step 3: Connect to Vercel

1. Go back to Vercel (https://vercel.com/new)
2. You should see your GitHub repositories listed
3. Click **"Import"** next to your `bigbouncer` repository
4. Vercel will auto-detect it's a static site
5. Click **"Deploy"**
6. Done! 🎉

## Alternative: Direct File Upload

If you prefer not to use Git:

1. On Vercel's "Add New Project" page
2. Look for **"Browse"** or **"Upload"** button (usually at the bottom)
3. Or click **"Deploy"** tab and look for file upload option
4. Drag and drop your `BigBouncer` folder

## After Deployment

- Your site will be live at: `https://bigbouncer-xxxxx.vercel.app`
- Admin password: `BigBouncer2025!` (change in app.js)
- Future updates: Just push to GitHub, Vercel auto-deploys!


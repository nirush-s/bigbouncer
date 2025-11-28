# Deploy to Vercel - Quick Guide

## Option 1: Deploy via Vercel Website (Easiest - Recommended)

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up or log in (you can use GitHub, GitLab, or email)

2. **Click "Add New Project"**

3. **Upload your project:**
   - Click "Browse" or drag and drop the `BigBouncer` folder
   - OR if you have it in GitHub, import from there

4. **Configure (usually auto-detected):**
   - Framework Preset: "Other" or "Static Site"
   - Root Directory: `./` (current directory)
   - Build Command: Leave empty (no build needed)
   - Output Directory: Leave empty or set to `.`

5. **Click "Deploy"**
   - Your site will be live in seconds!
   - You'll get a URL like: `https://bigbouncer-xxxxx.vercel.app`

6. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain

## Option 2: Deploy via Vercel CLI

If you have Node.js/npm installed:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project folder
cd /Users/nirushs/Desktop/Work\ Related/Projects/BigBouncer

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? bigbouncer (or your choice)
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

## Files Ready for Deployment

✅ `index.html` - Main page
✅ `app.js` - Application logic
✅ `styles.css` - Styling
✅ `vercel.json` - Vercel configuration (already created)

## After Deployment

1. **Test the site:**
   - Visit your Vercel URL
   - Test as public user (view schedules, slots, results)
   - Test admin login (click "Admin Login", enter password)

2. **Change Admin Password:**
   - Edit `app.js` locally
   - Change `ADMIN_PASSWORD` constant
   - Redeploy to Vercel

3. **Update Site:**
   - Make changes locally
   - Drag & drop folder again to Vercel dashboard
   - OR use `vercel --prod` if using CLI

## Important Notes

- ⚠️ **Change the admin password** in `app.js` before deploying to production!
- The site is fully static - no backend needed
- All data is stored in browser localStorage (per user/device)
- CSV import works entirely in the browser

## Troubleshooting

**Site not loading?**
- Check that `index.html` is in the root directory
- Verify all files (app.js, styles.css) are uploaded

**Admin login not working?**
- Check browser console for errors
- Verify password in app.js matches what you're entering

**Need help?**
- Vercel docs: https://vercel.com/docs
- Check browser console (F12) for errors


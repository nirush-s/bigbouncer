# BigBouncer - Deployment Guide

## Overview
BigBouncer is a cricket ground management web application that allows users to view match schedules, check empty slots, and see past results. Admin users can import CSV files and manage matches.

## Admin Access

**Default Admin Password:** `BigBouncer2025!`

⚠️ **IMPORTANT:** Change the admin password before deploying to production!

To change the password, edit `app.js` and update the `ADMIN_PASSWORD` constant on line 4:

```javascript
const ADMIN_PASSWORD = "YourNewSecurePassword123!";
```

## Features

### Public Users (No Login Required)
- ✅ View match schedules by weekend
- ✅ Check empty slots for weekends
- ✅ Filter and view past match results
- ❌ Cannot add/edit/delete matches
- ❌ Cannot import CSV files

### Admin Users (Login Required)
- ✅ All public user features
- ✅ Import CSV files to populate schedule
- ✅ Add new matches
- ✅ Edit existing matches
- ✅ Delete matches

## Deployment Options

### Option 1: Static Hosting (Recommended)

The application is a static website (HTML, CSS, JavaScript) and can be deployed to any static hosting service:

#### GitHub Pages
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select the main branch and `/` (root) folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

#### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `BigBouncer` folder to Netlify
3. Your site will be live immediately with a URL like `https://random-name-123.netlify.app`

#### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your Git repository or upload the folder
3. Deploy with zero configuration

#### Cloudflare Pages
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository or upload files
3. Deploy automatically

### Option 2: Traditional Web Hosting

Upload all files to your web server's `public_html` or `www` directory:
- `index.html`
- `app.js`
- `styles.css`
- `README.md` (optional)

### Option 3: Local Server (Development)

For testing locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
BigBouncer/
├── index.html          # Main HTML file
├── app.js             # Application logic (contains admin password)
├── styles.css         # Styling
├── README.md          # User documentation
├── DEPLOYMENT.md      # This file
├── DataToFeedCSV.csv  # Sample CSV (optional, for admin use)
└── package.json       # Optional, for npm scripts
```

## Security Notes

1. **Admin Password**: The password is stored in plain text in `app.js`. For production:
   - Use a strong, unique password
   - Consider implementing server-side authentication for better security
   - The current implementation uses browser localStorage for session management

2. **Data Storage**: All match data is stored in the browser's localStorage. This means:
   - Data is per-browser/device
   - Clearing browser data will delete matches
   - For multi-user scenarios, consider a backend database

3. **CSV Import**: CSV files are processed entirely in the browser - no data is sent to any server.

## Customization

### Change Admin Password
Edit `app.js`, line 4:
```javascript
const ADMIN_PASSWORD = "YourNewPassword";
```

### Change App Title
Edit `index.html`, line 6:
```html
<title>Your Custom Title</title>
```

### Change Header Text
Edit `index.html`, lines 12-13:
```html
<h1>🏏 Your Title</h1>
<p>Your Subtitle</p>
```

## Troubleshooting

### Admin login not working
- Check that the password in `app.js` matches what you're entering
- Clear browser cache and localStorage
- Check browser console for errors

### CSV import not working
- Ensure you're logged in as admin
- Check CSV file format matches the expected structure
- Verify the year input matches the dates in your CSV

### Matches not showing
- Check browser console for JavaScript errors
- Verify data exists in localStorage (open DevTools → Application → Local Storage)
- Try importing CSV again or adding a match manually

## Support

For issues or questions, check the browser console (F12) for error messages.

## License

This application is provided as-is for cricket ground management purposes.


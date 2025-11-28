#!/bin/bash
# Quick deployment script for BigBouncer to GitHub + Vercel

echo "🚀 BigBouncer Deployment Helper"
echo ""
echo "Step 1: Create a GitHub repository"
echo "   → Go to: https://github.com/new"
echo "   → Name: bigbouncer"
echo "   → Make it Public"
echo "   → Don't initialize with README"
echo "   → Click 'Create repository'"
echo ""
read -p "Press Enter after you've created the GitHub repo..."

echo ""
echo "Step 2: Enter your GitHub username:"
read -p "GitHub Username: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ GitHub username required!"
    exit 1
fi

echo ""
echo "Step 3: Pushing to GitHub..."
git remote add origin https://github.com/$GITHUB_USER/bigbouncer.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USER/bigbouncer.git
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "Step 4: Connect to Vercel"
    echo "   → Go to: https://vercel.com/new"
    echo "   → Click 'Import' next to your bigbouncer repository"
    echo "   → Click 'Deploy'"
    echo ""
    open "https://vercel.com/new" 2>/dev/null
else
    echo ""
    echo "❌ Failed to push. Make sure:"
    echo "   1. GitHub repo exists"
    echo "   2. You're logged into GitHub CLI, or"
    echo "   3. Use GitHub Desktop or manual push"
fi


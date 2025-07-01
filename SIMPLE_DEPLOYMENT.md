# Simple Azure Deployment with GitHub Actions

After trying 20+ different methods, here's the **simplest and most reliable way** to deploy your Next.js app to Azure.

## Prerequisites
- Your code in a GitHub repository
- Azure Web App already created (moss-mom)

## Steps

### 1. Get your Azure Publish Profile
1. Go to https://portal.azure.com
2. Navigate to your web app: `moss-mom`
3. Click "Download publish profile" (in the Overview section)
4. Save the downloaded file

### 2. Add to GitHub Secrets
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
5. Value: Copy and paste the ENTIRE content of the publish profile file
6. Click "Add secret"

### 3. Push the workflow file
The `.github/workflows/azure-deploy.yml` file is already created. Just:
```bash
git add .github/workflows/azure-deploy.yml
git commit -m "Add Azure deployment workflow"
git push
```

### 4. Deploy
- The deployment will start automatically when you push
- Or manually trigger it from GitHub Actions tab → "Deploy to Azure Web App" → "Run workflow"

## That's it!

No more:
- ❌ Kudu timeouts
- ❌ 504 Gateway errors
- ❌ Complex Azure CLI commands
- ❌ Zip deployment issues

Just:
- ✅ Push to GitHub
- ✅ GitHub Actions handles everything
- ✅ Reliable deployment every time

Your app will be at: https://moss-mom.azurewebsites.net 
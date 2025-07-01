# Azure Deployment Guide for MOM Web Application

This guide will help you deploy your Next.js MOM application to Azure App Service.

## Prerequisites

1. **Azure CLI** installed on your machine
2. **Node.js 20** (as specified in your project)
3. **Git** for version control
4. **Azure subscription** with appropriate permissions

## Deployment Steps

### 1. Install Azure CLI (if not already installed)

```bash
# For macOS
brew install azure-cli

# For Windows
# Download from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows

# For Linux
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

### 2. Login to Azure

```bash
az login
```

### 3. Set your subscription (if you have multiple)

```bash
az account set --subscription "your-subscription-id"
```

### 4. Create a Resource Group

```bash
az group create --name momweb-rg --location "East US"
```

### 5. Create an App Service Plan

```bash
az appservice plan create --name momweb-plan --resource-group momweb-rg --sku B1 --is-linux
```

### 6. Create the Web App

```bash
az webapp create --resource-group momweb-rg --plan momweb-plan --name moss-mom --runtime "NODE|20-lts"
```

### 7. Configure the Web App

```bash
# Set the startup command
az webapp config set --resource-group momweb-rg --name moss-mom --startup-file "node server.js"

# Set Node.js version
az webapp config appsettings set --resource-group momweb-rg --name moss-mom --settings WEBSITE_NODE_DEFAULT_VERSION=20-lts

# Enable logging
az webapp log config --resource-group momweb-rg --name moss-mom --web-server-logging filesystem
```

### 8. Deploy your application

```bash
# Navigate to your project directory
cd /path/to/your/momweb_backup

# Build the application
npm run build

# Deploy to Azure
az webapp deployment source config-zip --resource-group momweb-rg --name moss-mom --src .next/standalone.zip
```

### 9. Alternative: Deploy using Git

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit for Azure deployment"

# Add Azure as remote
az webapp deployment source config-local-git --resource-group momweb-rg --name moss-mom

# Deploy
git remote add azure <git-url-from-previous-command>
git push azure main
```

## Configuration Files

The following files have been created for Azure deployment:

- `web.config`: IIS configuration for proper routing
- `.azure/deploy.sh`: Deployment script
- `.azure/startup.sh`: Startup script for the application

## Environment Variables

If you need to set environment variables, use:

```bash
az webapp config appsettings set --resource-group momweb-rg --name moss-mom --settings NODE_ENV=production
```

## Monitoring and Logs

To view application logs:

```bash
az webapp log tail --resource-group momweb-rg --name moss-mom
```

## Accessing your application

Once deployed, your application will be available at:
- **URL**: https://moss-mom.azurewebsites.net
- **Custom Domain**: You can configure custom domains in the Azure portal

## Troubleshooting

1. **Check application logs**: Use the log command above
2. **Verify Node.js version**: Ensure it's set to 20-lts
3. **Check startup command**: Should be `node server.js`
4. **Verify build output**: Ensure `.next/standalone` directory exists after build

## Cost Optimization

- Use B1 (Basic) tier for development
- Consider scaling down to F1 (Free) for testing
- Monitor usage in Azure portal

## Security Considerations

1. Enable HTTPS only
2. Configure authentication if needed
3. Set up proper CORS policies
4. Use environment variables for sensitive data 
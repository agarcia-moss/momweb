#!/bin/bash

# Azure Deployment Script for MOM Web Application
# This script will help you deploy your Next.js app to Azure App Service

set -e

echo "🚀 Starting Azure deployment for MOM Web Application"
echo "=================================================="

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first:"
    echo "   macOS: brew install azure-cli"
    echo "   Windows: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows"
    echo "   Linux: curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash"
    exit 1
fi

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo "🔐 Please log in to Azure first:"
    az login
fi

# Set variables
RESOURCE_GROUP="momweb-rg"
APP_SERVICE_PLAN="momweb-plan"
WEB_APP_NAME="moss-mom"
LOCATION="East US"

echo "📋 Deployment Configuration:"
echo "   Resource Group: $RESOURCE_GROUP"
echo "   App Service Plan: $APP_SERVICE_PLAN"
echo "   Web App Name: $WEB_APP_NAME"
echo "   Location: $LOCATION"
echo ""

# Ask for confirmation
read -p "Do you want to proceed with this configuration? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled."
    exit 1
fi

echo "🔧 Creating Resource Group..."
az group create --name $RESOURCE_GROUP --location "$LOCATION" --output none

echo "📦 Creating App Service Plan..."
az appservice plan create --name $APP_SERVICE_PLAN --resource-group $RESOURCE_GROUP --sku B1 --is-linux --output none

echo "🌐 Creating Web App..."
az webapp create --resource-group $RESOURCE_GROUP --plan $APP_SERVICE_PLAN --name $WEB_APP_NAME --runtime "NODE|20-lts" --deployment-local-git --output none

echo "⚙️ Configuring Web App..."
az webapp config set --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --startup-file "node server.js" --output none
az webapp config appsettings set --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --settings WEBSITE_NODE_DEFAULT_VERSION=20-lts --output none
az webapp log config --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --web-server-logging filesystem --output none

echo "🔨 Building application..."
npm run build

echo "📤 Deploying to Azure..."
# Create a temporary deployment directory
mkdir -p .azure/temp-deploy
cp -r .next .azure/temp-deploy/
cp -r public .azure/temp-deploy/
cp package.json .azure/temp-deploy/
cp next.config.js .azure/temp-deploy/
cp web.config .azure/temp-deploy/

# Copy server.js from standalone output
if [ -f ".next/standalone/server.js" ]; then
    cp .next/standalone/server.js .azure/temp-deploy/
else
    echo "⚠️ Warning: server.js not found in standalone output"
fi

# Create zip file
cd .azure/temp-deploy
zip -r ../deployment.zip .
cd ../..

# Deploy the zip file
az webapp deployment source config-zip --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --src .azure/deployment.zip --output none

# Clean up
rm -rf .azure/temp-deploy .azure/deployment.zip

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Your application is now available at: https://$WEB_APP_NAME.azurewebsites.net"
echo ""
echo "📊 To monitor your application:"
echo "   View logs: az webapp log tail --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME"
echo "   Open in browser: az webapp browse --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME"
echo ""
echo "🔧 To update your application in the future, run this script again." 
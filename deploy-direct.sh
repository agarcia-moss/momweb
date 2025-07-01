#!/bin/bash

# Direct Azure Deployment Script for MOM Web Application
# Uses traditional zip deployment with better error handling

set -e

echo "🚀 Direct Azure Deployment for MOM Web Application"
echo "=================================================="

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first:"
    echo "   macOS: brew install azure-cli"
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

# Delete existing web app if it exists
echo "🗑️ Checking for existing web app..."
if az webapp show --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME &> /dev/null; then
    echo "   Deleting existing web app..."
    az webapp delete --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME
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

echo "📤 Creating deployment package..."
# Create deployment directory
mkdir -p .azure/deploy
cp -r .next/standalone/* .azure/deploy/
cp -r public .azure/deploy/
cp package.json .azure/deploy/
cp next.config.js .azure/deploy/
cp web.config .azure/deploy/

# Create zip file
cd .azure/deploy
zip -r ../deployment.zip .
cd ../..

echo "🚀 Deploying to Azure (this may take a few minutes)..."
# Use the traditional zip deployment with timeout
timeout 600 az webapp deployment source config-zip --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --src .azure/deployment.zip || {
    echo "⚠️ Deployment timed out or failed. Trying alternative method..."
    echo "🔄 Attempting deployment with different approach..."
    
    # Try alternative deployment method
    az webapp deployment source config-zip --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --src .azure/deployment.zip --timeout 300
}

# Clean up
rm -rf .azure/deploy .azure/deployment.zip

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Your application is now available at: https://$WEB_APP_NAME.azurewebsites.net"
echo ""
echo "📊 To monitor your application:"
echo "   View logs: az webapp log tail --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME"
echo "   Open in browser: az webapp browse --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME" 
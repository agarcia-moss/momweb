#!/bin/bash

# Simple Azure Deployment Script for MOM Web Application
# Uses newer Azure CLI commands and handles deployment more reliably

set -e

echo "🚀 Simple Azure Deployment for MOM Web Application"
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

echo "📤 Deploying to Azure using newer command..."
# Create deployment package
echo "   Creating deployment package..."
mkdir -p .azure/temp-deploy
cp -r .next/standalone/* .azure/temp-deploy/
cp -r public .azure/temp-deploy/
cp package.json .azure/temp-deploy/
cp next.config.js .azure/temp-deploy/
cp web.config .azure/temp-deploy/

# Create zip file
cd .azure/temp-deploy
zip -r ../deployment.zip .
cd ../..

# Deploy the zip file
az webapp deploy --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --src-path .azure/deployment.zip --type zip

# Clean up
rm -rf .azure/temp-deploy .azure/deployment.zip

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Your application is now available at: https://$WEB_APP_NAME.azurewebsites.net"
echo ""
echo "📊 To monitor your application:"
echo "   View logs: az webapp log tail --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME"
echo "   Open in browser: az webapp browse --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME" 
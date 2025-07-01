#!/bin/bash

# Standalone Azure Deployment Script for MOM Web Application
# Only deploys the necessary standalone files to avoid large Git pushes

set -e

echo "🚀 Standalone Azure Deployment for MOM Web Application"
echo "======================================================"

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

echo "📤 Creating minimal deployment package..."
# Create a clean deployment directory with only necessary files
mkdir -p .azure/standalone-deploy

# Copy only the standalone files
cp -r .next/standalone/* .azure/standalone-deploy/
cp -r public .azure/standalone-deploy/
cp package.json .azure/standalone-deploy/
cp next.config.js .azure/standalone-deploy/
cp web.config .azure/standalone-deploy/

# Create a minimal .gitignore for the deployment
echo "node_modules/" > .azure/standalone-deploy/.gitignore
echo ".git/" >> .azure/standalone-deploy/.gitignore

echo "🚀 Deploying using zip method (faster than Git)..."
# Create zip file
cd .azure/standalone-deploy
zip -r ../standalone-deployment.zip .
cd ../..

# Deploy using zip method
echo "📦 Uploading deployment package..."
az webapp deployment source config-zip --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME --src .azure/standalone-deployment.zip

# Clean up
rm -rf .azure/standalone-deploy .azure/standalone-deployment.zip

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Your application is now available at: https://$WEB_APP_NAME.azurewebsites.net"
echo ""
echo "📊 To monitor your application:"
echo "   View logs: az webapp log tail --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME"
echo "   Open in browser: az webapp browse --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME" 
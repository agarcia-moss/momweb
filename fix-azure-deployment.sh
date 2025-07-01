#!/bin/bash

# Fix Azure Deployment Script
# This script recreates the web app with correct Linux configuration

set -e

echo "🔧 Fixing Azure deployment configuration..."
echo "=========================================="

RESOURCE_GROUP="momweb-rg"
APP_SERVICE_PLAN="momweb-plan"
WEB_APP_NAME="moss-mom"
LOCATION="East US"

# Delete the existing web app
echo "🗑️ Deleting existing web app..."
az webapp delete --resource-group $RESOURCE_GROUP --name $WEB_APP_NAME

# Create new web app with Linux configuration
echo "🌐 Creating new web app with Linux configuration..."
az webapp create \
  --resource-group $RESOURCE_GROUP \
  --plan $APP_SERVICE_PLAN \
  --name $WEB_APP_NAME \
  --runtime "NODE|20-lts" \
  --deployment-local-git

# Configure the web app
echo "⚙️ Configuring web app..."
az webapp config set \
  --resource-group $RESOURCE_GROUP \
  --name $WEB_APP_NAME \
  --startup-file "node server.js"

# Set Node.js version
az webapp config appsettings set \
  --resource-group $RESOURCE_GROUP \
  --name $WEB_APP_NAME \
  --settings WEBSITE_NODE_DEFAULT_VERSION=20-lts

# Enable logging
az webapp log config \
  --resource-group $RESOURCE_GROUP \
  --name $WEB_APP_NAME \
  --web-server-logging filesystem

echo "✅ Web app recreated with correct configuration!"
echo "🌐 Your app will be available at: https://$WEB_APP_NAME.azurewebsites.net"
echo ""
echo "📤 Now you can redeploy your application using:"
echo "   ./deploy-to-azure.sh" 
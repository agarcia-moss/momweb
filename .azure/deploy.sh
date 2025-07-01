#!/bin/bash

# Exit on any error
set -e

echo "Starting deployment..."

# Install dependencies
echo "Installing dependencies..."
npm ci --only=production

# Build the application
echo "Building the application..."
npm run build

# Create the deployment directory
echo "Preparing deployment..."
mkdir -p .azure/deployment

# Copy the built application
cp -r .next .azure/deployment/
cp -r public .azure/deployment/
cp package.json .azure/deployment/
cp next.config.js .azure/deployment/
cp web.config .azure/deployment/

# Copy server.js from standalone output
if [ -f ".next/standalone/server.js" ]; then
    cp .next/standalone/server.js .azure/deployment/
else
    echo "Warning: server.js not found in standalone output"
fi

echo "Deployment package prepared successfully!" 
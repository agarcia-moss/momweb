#!/bin/bash

# Exit on any error
set -e

echo "Starting MOM application..."

# Check if we're in the standalone directory
if [ -f "server.js" ]; then
    echo "Starting standalone server..."
    node server.js
else
    echo "Starting development server..."
    npm start
fi 
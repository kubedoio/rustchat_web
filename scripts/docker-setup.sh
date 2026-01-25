#!/bin/bash

# RustChat Docker Setup Script
# Use this to build and run the marketing site container

set -e

echo "🚀 Starting RustChat Web Docker Setup..."

# Check if docker is installed
if ! command -v docker &> /dev/null
then
    echo "❌ Error: docker is not installed."
    exit 1
fi

# Build the image
echo "📦 Building Docker image..."
docker build -t rustchat-web:latest .

# Run with docker-compose
echo "🚢 Launching containers with Docker Compose..."
docker-compose up -d

echo "✅ Success! RustChat marketing site is running at http://localhost:3000"
echo "🔍 Monitor logs with: docker-compose logs -f"

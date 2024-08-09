#! /bin/bash

# Get the environment from the first argument, default to 'development'
environment=${1:-development}

# Log the environment
echo "Building for environment: $environment"



cd packages/directus-extension-candidate-contest

if [ "$environment" = "production" ]; then
    directus-extension build
else
    directus-extension build --no-minify
fi

# Check if the build command was successful
if [ $? -ne 0 ]; then
    echo "Build command failed. Exiting..."
    exit 1
fi


DIST_DIR=../../dist/packages/directus-extension-candidate-contest

# Check if the dist directory exists and remove it if it does
if [ -d "$DIST_DIR" ]; then
    echo "Removing existing dist directory"
    rm -rf "$DIST_DIR"
fi

mkdir -p $DIST_DIR
mv dist $DIST_DIR
cp package.json $DIST_DIR

cp -r $DIST_DIR ../../packages/data/directus/extensions

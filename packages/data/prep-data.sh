#! /bin/bash

echo "Prepping data..."

sudo chown -R $(id -un):$(id -gn) packages/data

find packages/data -type d -empty -exec touch {}/.gitkeep \;

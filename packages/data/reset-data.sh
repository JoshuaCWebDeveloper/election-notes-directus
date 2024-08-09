#! /bin/bash

echo "Warning: this will delete all user data and reset back to the initial state. This action cannot be undone. Continue? (y/N)"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo "Proceeding with data reset..."
else
    echo "Data reset cancelled."
    exit 0
fi

docker compose cp packages/data/reset-data.sql postgresql:/reset-data.sql

docker compose exec postgresql psql postgres://db-ui-user:db-ui-password@localhost:5432/db-ui -a -f /reset-data.sql

echo "Data reset complete."

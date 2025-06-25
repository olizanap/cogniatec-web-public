#!/bin/bash

# Set default port if not provided
export PORT=${PORT:-8080}

# Replace the PORT placeholder in nginx.conf
envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start nginx
nginx -g 'daemon off;' 
# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Install envsubst
RUN apk add --no-cache bash

# Copy the start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Copy the nginx config template
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Copy the built app
COPY --from=build /app/build /usr/share/nginx/html

# Expose port (will be overridden by PORT env var)
EXPOSE 8080

# Use the start script
CMD ["/start.sh"] 
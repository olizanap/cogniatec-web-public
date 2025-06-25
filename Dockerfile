# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

# Copy the built app
COPY --from=build /app/build /app/build

WORKDIR /app

# Expose port
EXPOSE 8080

# Start serve
CMD ["serve", "-s", "build", "-l", "8080"] 
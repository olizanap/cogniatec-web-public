# Build stage para el frontend
FROM node:18-alpine as build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar código fuente
COPY . .

# Construir la aplicación React
RUN npm run build

# Production stage
FROM node:18-alpine

# Instalar dependencias del servidor
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production

# Copiar el servidor y el build del frontend
COPY server.js ./
COPY --from=build /app/build ./build

# Crear directorio para logs
RUN mkdir -p logs

# Exponer puerto
EXPOSE 8080

# Variables de entorno por defecto
ENV PORT=8080
ENV NODE_ENV=production

# Comando para ejecutar el servidor
CMD ["node", "server.js"] 
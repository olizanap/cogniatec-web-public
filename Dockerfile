# Usar Node.js 18 Alpine
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias
RUN npm ci --legacy-peer-deps

# Copiar todo el código fuente
COPY . .

# Construir la aplicación React
RUN npm run build

# Limpiar dependencias de desarrollo
RUN npm prune --production

# Crear directorio para logs
RUN mkdir -p logs

# Exponer puerto
EXPOSE 8080

# Variables de entorno
ENV PORT=8080
ENV NODE_ENV=production

# Comando para ejecutar el servidor
CMD ["node", "server.js"] 
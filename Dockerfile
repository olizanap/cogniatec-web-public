FROM nginx:alpine

# Copiar archivos de configuración
COPY nginx.conf /etc/nginx/nginx.conf

# Construir la aplicación React
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Copiar el build a nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"] 
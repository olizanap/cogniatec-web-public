# CogniaTec Web

Este proyecto contiene el frontend (React) y el backend (Express/Nodemailer) en la raíz.

## 🚀 ¿Cómo ejecutar todo?

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura tus variables de entorno:
   - Crea un archivo `.env` en la raíz (usa el ejemplo de abajo)

3. Ejecuta todo con un solo comando:
   ```bash
   npm start
   ```
   Esto lanzará el backend (API de contacto) y el frontend (React) al mismo tiempo.

## 🌐 Estructura

- `src/` → Código del frontend React
- `server.js` → Servidor Express para el formulario de contacto
- `.env` → Variables de entorno para el backend

## 📧 Variables de entorno ejemplo

```
PORT=5000
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicacion
```

## 📝 Notas
- El backend corre en el puerto 5000 y el frontend en el 3000 (por defecto)
- El formulario de contacto envía correos a contacto@cogniatec.com usando Nodemailer
- Puedes modificar el backend en `server.js`

# CogniaTec Web

Este proyecto es una **aplicación híbrida** que combina frontend (React) y backend (Express/Nodemailer) en un solo repositorio.

## 🏗️ Estructura del proyecto

```
cogniatec-web-public-main/
├── server.js              # Backend (Express + Nodemailer)
├── src/                   # Frontend React
│   ├── components/        # Componentes React
│   └── App.js
├── public/                # Archivos estáticos
└── Dockerfile             # Construye TODO junto
```

## 🚀 ¿Cómo ejecutar?

### Opción 1: Todo con un comando (recomendado)
```bash
npm start
```
Esto ejecuta backend y frontend simultáneamente.

### Opción 2: Solo frontend
```bash
npm run frontend
```

### Opción 3: Solo backend
```bash
npm run server
```

### Opción 4: Desarrollo separado
```bash
# Terminal 1: Backend
npm run backend

# Terminal 2: Frontend  
npm run frontend
```

## 🌐 Puertos y URLs

### Desarrollo:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **API**: http://localhost:5000/api/contact
- **Health**: http://localhost:5000/api/health

### Producción (Cloud Run):
- **Todo junto**: https://cogniatec-web-public-772001390230.us-east1.run.app

## 📧 Variables de entorno

Copia `env.example` a `.env` y configura:

```
PORT=5000
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicacion
```

### 🔑 Configuración de Gmail

1. Ve a tu cuenta de Google
2. Activa la verificación en 2 pasos
3. Genera una contraseña de aplicación:
   - Ve a "Seguridad" → "Contraseñas de aplicación"
   - Selecciona "Correo" y "Otro (nombre personalizado)"
   - Usa esa contraseña en `EMAIL_PASS`

## 📝 Scripts disponibles

- `npm start` → Backend y frontend simultáneamente
- `npm run frontend` → Solo frontend (puerto 3000)
- `npm run server` → Solo backend (puerto 5000)
- `npm run backend` → Backend simple (sin nodemon)
- `npm run dev` → Frontend y backend simultáneamente (alternativo)
- `npm run build` → Construye para producción

## 🧪 Pruebas

### Probar configuración de correo:
```bash
node test-email.js
```

### Probar sistema completo:
```bash
node test-complete.js
```

### Probar backend local:
```bash
node test-backend.js
```

### Probar API local:
```bash
node test-local.js
```

### Probar API de producción:
```bash
node test-api.js
```

🚀 Para usar el sistema:
1. npm start (ejecuta todo)
2. Ve a http://localhost:3000 y prueba el formulario

## 🔧 Características

- ✅ **Aplicación híbrida**: Frontend + Backend en un repo
- ✅ **Desarrollo flexible**: Puedes ejecutar por separado o junto
- ✅ **Proxy automático**: En desarrollo, `/api/*` va al backend
- ✅ **Producción unificada**: En Cloud Run, todo corre junto
- ✅ **Validación robusta** de formularios
- ✅ **Manejo de errores** detallado
- ✅ **CORS configurado** para desarrollo y producción
- ✅ **Sanitización de datos**
- ✅ **Logging detallado**
- ✅ **Health check endpoint**
- ✅ **MUI Grid** (advertencias suprimidas)
- ✅ **Headers optimizados** para evitar errores 431
- ✅ **Envío de correos** configurado para desarrollo y producción

## 🛠️ Troubleshooting

### Problemas de correo
Si los correos no se envían:
1. **Ejecuta**: `node test-email.js`
2. **Verifica** que EMAIL_USER y EMAIL_PASS estén correctos
3. **Asegúrate** de usar una contraseña de aplicación de Gmail
4. **Revisa** que la verificación en 2 pasos esté activada

### Problemas de CORS
Si ves errores de CORS en desarrollo:
- El frontend usa URL relativa `/api/contact`
- El proxy redirige automáticamente a `http://localhost:5000`
- Verifica que el backend esté corriendo en puerto 5000

### Error 431 (Request Header Fields Too Large)
Si ves este error:
- El servidor está configurado para aceptar headers más grandes
- Se simplificó la petición fetch para evitar headers innecesarios
- Prueba reiniciando el servidor: `npm run server`

### Logs útiles
- Backend: `npm run server` para ver logs detallados
- Frontend: Abre DevTools para ver logs de la consola
- Correo: `node test-email.js` para probar configuración

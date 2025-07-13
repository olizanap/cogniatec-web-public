const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Configuración básica
app.use(express.json());
app.use(cors());

console.log('🚀 Iniciando servidor...');
console.log('📁 Directorio actual:', __dirname);
console.log('🌍 Puerto:', PORT);
console.log('🌍 Entorno:', process.env.NODE_ENV);

// Ruta de health check
app.get('/api/health', (req, res) => {
  console.log('✅ Health check solicitado');
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  console.log('✅ Test endpoint solicitado');
  res.json({ 
    message: 'Backend funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// API de contacto simplificada
app.post('/api/contact', async (req, res) => {
  console.log('📧 Contacto solicitado:', req.body);
  
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      });
    }

    console.log('✅ Contacto procesado correctamente');
    res.json({ 
      success: true, 
      message: 'Mensaje recibido correctamente (modo de prueba)'
    });

  } catch (error) {
    console.error('❌ Error en contacto:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error procesando el mensaje'
    });
  }
});

// Servir archivos estáticos en producción
if (process.env.NODE_ENV === 'production') {
  console.log('🌐 Configurando modo producción...');
  
  const buildPath = path.join(__dirname, 'build');
  console.log('📁 Buscando build en:', buildPath);
  
  const fs = require('fs');
  if (fs.existsSync(buildPath)) {
    console.log('✅ Build encontrado, sirviendo archivos estáticos');
    app.use(express.static(buildPath));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(buildPath, 'index.html'));
    });
  } else {
    console.log('⚠️  Build no encontrado, solo API disponible');
  }
} else {
  console.log('🔧 Modo desarrollo: Solo API disponible');
}

// Iniciar servidor
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📧 Endpoint de contacto: http://localhost:${PORT}/api/contact`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`✅ Servidor listo para recibir conexiones`);
});

// Manejo de errores
process.on('uncaughtException', (err) => {
  console.error('❌ Error no capturado:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Promesa rechazada no manejada:', reason);
});

// Manejo de señales para cierre limpio
process.on('SIGTERM', () => {
  console.log('🛑 Recibida señal SIGTERM, cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 Recibida señal SIGINT, cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
}); 
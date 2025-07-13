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

// Ruta de health check
app.get('/api/health', (req, res) => {
  console.log('✅ Health check solicitado');
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// API de contacto
app.post('/api/contact', (req, res) => {
  console.log('📧 Contacto solicitado:', req.body);
  
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
    message: 'Mensaje recibido correctamente'
  });
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
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`✅ Servidor listo para recibir conexiones`);
}); 
const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuración para producción...');

// Verificar que existe el build
const buildPath = path.join(__dirname, 'build');
if (!fs.existsSync(buildPath)) {
  console.error('❌ Error: No existe la carpeta build');
  console.log('💡 Ejecuta: npm run build');
  process.exit(1);
}

// Verificar archivos críticos del build
const requiredFiles = ['index.html', 'static'];
requiredFiles.forEach(file => {
  const filePath = path.join(buildPath, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Error: No existe ${file} en build`);
    process.exit(1);
  }
});

// Verificar variables de entorno
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.warn('⚠️  Advertencia: No existe archivo .env');
  console.log('💡 Crea un archivo .env con las variables necesarias');
} else {
  console.log('✅ Archivo .env encontrado');
}

// Verificar servidor
try {
  require('./server.js');
  console.log('✅ Servidor se puede cargar correctamente');
} catch (error) {
  console.error('❌ Error cargando servidor:', error.message);
  process.exit(1);
}

console.log('✅ Todo listo para producción!');
console.log('🚀 Puedes desplegar en GCP Cloud Run'); 
// Script simple para desarrollo
const { spawn } = require('child_process');

console.log('🚀 Iniciando servidor backend para desarrollo...');
console.log('📧 API disponible en: http://localhost:5000/api/contact');
console.log('🔍 Health check en: http://localhost:5000/api/health');
console.log('');
console.log('🌐 Para el frontend, ejecuta en otra terminal: npm start');
console.log('');

const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  cwd: __dirname,
  env: { ...process.env, NODE_ENV: 'development' }
});

// Manejar cierre de procesos
process.on('SIGINT', () => {
  server.kill();
  process.exit();
}); 
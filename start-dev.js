const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Iniciando desarrollo...');

// Iniciar el servidor backend
const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

// Esperar un poco y luego iniciar el frontend
setTimeout(() => {
  console.log('🌐 Iniciando frontend...');
  const client = spawn('npm', ['start'], {
    stdio: 'inherit',
    cwd: __dirname,
    env: { ...process.env, PORT: '3000' }
  });

  // Manejar cierre de procesos
  process.on('SIGINT', () => {
    server.kill();
    client.kill();
    process.exit();
  });
}, 2000); 
const { spawn } = require('child_process');
const http = require('http');

console.log('🧪 Probando servidor localmente...');

// Ejecutar el servidor
const server = spawn('node', ['server.js'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, PORT: 8080, NODE_ENV: 'production' }
});

let serverReady = false;

// Capturar logs del servidor
server.stdout.on('data', (data) => {
  const output = data.toString();
  console.log('📝 Servidor:', output);
  
  if (output.includes('Servidor listo para recibir conexiones')) {
    serverReady = true;
    testServer();
  }
});

server.stderr.on('data', (data) => {
  console.error('❌ Error del servidor:', data.toString());
});

// Función para probar el servidor
function testServer() {
  console.log('🔍 Probando endpoints...');
  
  // Probar health check
  const healthReq = http.request({
    hostname: 'localhost',
    port: 8080,
    path: '/api/health',
    method: 'GET'
  }, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('✅ Health check:', res.statusCode, data);
      
      // Probar contacto
      testContact();
    });
  });
  
  healthReq.on('error', (err) => {
    console.error('❌ Error en health check:', err.message);
  });
  
  healthReq.end();
}

function testContact() {
  const contactData = JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'Test message'
  });
  
  const contactReq = http.request({
    hostname: 'localhost',
    port: 8080,
    path: '/api/contact',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(contactData)
    }
  }, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('✅ Contact endpoint:', res.statusCode, data);
      
      // Terminar el servidor
      setTimeout(() => {
        console.log('🛑 Terminando servidor...');
        server.kill('SIGTERM');
        process.exit(0);
      }, 1000);
    });
  });
  
  contactReq.on('error', (err) => {
    console.error('❌ Error en contact:', err.message);
  });
  
  contactReq.write(contactData);
  contactReq.end();
}

// Timeout de seguridad
setTimeout(() => {
  if (!serverReady) {
    console.error('❌ Servidor no inició en 10 segundos');
    server.kill('SIGTERM');
    process.exit(1);
  }
}, 10000); 
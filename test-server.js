const http = require('http');

function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const jsonBody = JSON.parse(body);
          resolve({ status: res.statusCode, data: jsonBody });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (data) {
      req.write(data);
    }
    req.end();
  });
}

async function testServer() {
  console.log('🔍 Probando conexión con el servidor...');
  
  try {
    // Probar health check
    const healthOptions = {
      hostname: 'localhost',
      port: 5000,
      path: '/api/health',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    const healthResponse = await makeRequest(healthOptions);
    console.log('📊 Health check status:', healthResponse.status);
    
    if (healthResponse.status === 200) {
      console.log('✅ Servidor funcionando:', healthResponse.data);
    } else {
      console.log('❌ Health check falló:', healthResponse.data);
    }
    
    // Probar endpoint de contacto
    const contactOptions = {
      hostname: 'localhost',
      port: 5000,
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    const contactData = JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message'
    });
    
    const contactResponse = await makeRequest(contactOptions, contactData);
    console.log('📧 Contact endpoint status:', contactResponse.status);
    
    if (contactResponse.status === 200) {
      console.log('✅ Contact endpoint funcionando:', contactResponse.data);
    } else {
      console.log('❌ Contact endpoint error:', contactResponse.data);
    }
    
  } catch (error) {
    console.error('❌ Error conectando con el servidor:', error.message);
    console.log('💡 Verifica que:');
    console.log('   1. El servidor esté ejecutándose en puerto 5000');
    console.log('   2. El archivo .env esté configurado correctamente');
    console.log('   3. Las credenciales de Gmail sean válidas');
  }
}

testServer(); 
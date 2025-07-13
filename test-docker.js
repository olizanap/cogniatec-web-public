const { exec } = require('child_process');
const fs = require('fs');

console.log('🐳 Probando contenedor Docker...');

// Verificar que Docker esté disponible
exec('docker --version', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Docker no está disponible:', error.message);
    process.exit(1);
  }
  
  console.log('✅ Docker disponible:', stdout.trim());
  
  // Construir la imagen
  console.log('🔨 Construyendo imagen Docker...');
  exec('docker build -t cogniatec-test .', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error construyendo imagen:', error.message);
      process.exit(1);
    }
    
    console.log('✅ Imagen construida exitosamente');
    
    // Ejecutar el contenedor
    console.log('🚀 Ejecutando contenedor...');
    const container = exec('docker run -p 8080:8080 --env-file .env cogniatec-test', (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Error ejecutando contenedor:', error.message);
        process.exit(1);
      }
    });
    
    // Esperar un poco y probar la conexión
    setTimeout(() => {
      console.log('🔍 Probando conexión al contenedor...');
      exec('curl -f http://localhost:8080/api/health', (error, stdout, stderr) => {
        if (error) {
          console.error('❌ Error conectando al contenedor:', error.message);
        } else {
          console.log('✅ Contenedor funcionando correctamente');
          console.log('📊 Respuesta:', stdout);
        }
        
        // Detener el contenedor
        exec('docker ps -q --filter ancestor=cogniatec-test | xargs docker stop', () => {
          console.log('🛑 Contenedor detenido');
          process.exit(0);
        });
      });
    }, 5000);
    
    // Mostrar logs del contenedor
    container.stdout.on('data', (data) => {
      console.log('📝 Logs:', data.toString());
    });
    
    container.stderr.on('data', (data) => {
      console.error('❌ Error:', data.toString());
    });
  });
}); 
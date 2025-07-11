// Script para probar el backend local
const testBackend = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'Este es un mensaje de prueba para verificar que el backend funciona correctamente.'
  };

  try {
    console.log('🧪 Probando backend local...');
    
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📥 Status:', response.status);
    console.log('📥 Status Text:', response.statusText);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Backend funcionando correctamente:', data);
    } else {
      const errorData = await response.text();
      console.log('❌ Error en backend:', errorData);
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
  }
};

// Ejecutar prueba
testBackend(); 
// Script de prueba para verificar el API
const testAPI = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'Este es un mensaje de prueba para verificar que el API funciona correctamente.'
  };

  try {
    console.log('🧪 Probando API de contacto...');
    
    const response = await fetch('https://cogniatec-web-public-772001390230.us-east1.run.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📥 Status:', response.status);
    console.log('📥 Headers:', Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      const data = await response.json();
      console.log('✅ API funcionando correctamente:', data);
    } else {
      const errorData = await response.text();
      console.log('❌ Error en API:', errorData);
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
  }
};

// Ejecutar prueba
testAPI(); 
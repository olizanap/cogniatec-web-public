// Script de prueba para verificar el API local
const testLocalAPI = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'Este es un mensaje de prueba para verificar que el API local funciona correctamente.'
  };

  try {
    console.log('🧪 Probando API local...');
    
    const response = await fetch('http://localhost:5000/api/contact', {
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
      console.log('✅ API local funcionando correctamente:', data);
    } else {
      const errorData = await response.text();
      console.log('❌ Error en API local:', errorData);
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
  }
};

// Ejecutar prueba
testLocalAPI(); 
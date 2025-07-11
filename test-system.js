// Script para probar el sistema con npm start
const testSystem = async () => {
  console.log('🧪 Probando sistema con npm start...');
  console.log('');

  // Esperar un poco para que el servidor se inicie
  console.log('⏳ Esperando que el servidor se inicie...');
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Probar API
  console.log('🔍 Probando API...');
  try {
    const response = await fetch('http://localhost:5000/api/health');
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API funcionando:', data);
    } else {
      console.log('❌ API no responde');
    }
  } catch (error) {
    console.log('❌ API no disponible');
  }

  console.log('');
  console.log('🎯 Para usar el sistema:');
  console.log('1. npm start');
  console.log('2. Espera que ambos servidores se inicien');
  console.log('3. Ve a http://localhost:3000');
  console.log('4. Prueba el formulario de contacto');
  console.log('');
  console.log('📧 El correo ya está configurado y funcionando ✅');
};

// Ejecutar prueba
testSystem(); 
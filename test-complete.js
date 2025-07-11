// Script para probar el sistema completo
const testCompleteSystem = async () => {
  console.log('🧪 Probando sistema completo...');
  console.log('');

  // 1. Probar configuración de correo
  console.log('1️⃣ Probando configuración de correo...');
  try {
    const emailTest = require('./test-email.js');
  } catch (error) {
    console.log('❌ Error en prueba de correo');
  }
  console.log('');

  // 2. Probar API local
  console.log('2️⃣ Probando API local...');
  try {
    const response = await fetch('http://localhost:5000/api/health');
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API local funcionando:', data);
    } else {
      console.log('❌ API local no responde');
    }
  } catch (error) {
    console.log('❌ API local no disponible (backend no corriendo)');
  }
  console.log('');

  // 3. Probar envío de formulario
  console.log('3️⃣ Probando envío de formulario...');
  try {
    const testData = {
      name: 'Usuario de Prueba',
      email: 'test@example.com',
      message: 'Este es un mensaje de prueba para verificar que el sistema funciona correctamente.'
    };

    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Formulario enviado exitosamente:', data);
    } else {
      const errorData = await response.text();
      console.log('❌ Error enviando formulario:', errorData);
    }
  } catch (error) {
    console.log('❌ Error de conexión:', error.message);
  }
  console.log('');

  console.log('🎯 Resumen:');
  console.log('- Si ves ✅ en todas las pruebas, el sistema está funcionando');
  console.log('- Si ves ❌, revisa los logs anteriores');
  console.log('');
  console.log('🚀 Para usar el sistema:');
  console.log('1. npm run backend (en una terminal)');
  console.log('2. npm start (en otra terminal)');
  console.log('3. Ve a http://localhost:3000 y prueba el formulario');
};

// Ejecutar prueba
testCompleteSystem(); 
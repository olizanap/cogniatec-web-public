// Script para probar el envío de correos
require('dotenv').config();

const nodemailer = require('nodemailer');

const testEmail = async () => {
  console.log('🧪 Probando configuración de correo...');
  console.log('📧 EMAIL_USER:', process.env.EMAIL_USER ? '✅ Configurado' : '❌ No configurado');
  console.log('🔑 EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Configurado' : '❌ No configurado');
  console.log('');

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ ERROR: Variables EMAIL_USER y EMAIL_PASS son requeridas');
    return;
  }

  try {
    // Configurar transportador
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    console.log('🔍 Verificando conexión con Gmail...');
    
    // Verificar conexión
    await transporter.verify();
    console.log('✅ Conexión con Gmail exitosa');
    
    // Enviar correo de prueba
    const mailOptions = {
      from: `"Test CogniaTEC" <${process.env.EMAIL_USER}>`,
      to: 'contacto@cogniatec.com',
      subject: 'Prueba de configuración - CogniaTEC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0077B6;">Prueba de configuración</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> Usuario de Prueba</p>
            <p><strong>Email:</strong> test@example.com</p>
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #00FFAA;">
              Este es un mensaje de prueba para verificar que la configuración de correo funciona correctamente.
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Prueba enviada desde el servidor de desarrollo.
            <br>Timestamp: ${new Date().toLocaleString('es-ES')}
          </p>
        </div>
      `
    };

    console.log('📤 Enviando correo de prueba...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Correo enviado exitosamente!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📧 Response:', info.response);
    
  } catch (error) {
    console.error('❌ Error enviando correo:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('🔑 Error de autenticación. Verifica:');
      console.error('   - Que la contraseña de aplicación sea correcta');
      console.error('   - Que la verificación en 2 pasos esté activada');
      console.error('   - Que la contraseña no tenga espacios extra');
    } else if (error.code === 'ECONNECTION') {
      console.error('🌐 Error de conexión. Verifica tu conexión a internet');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('⏰ Timeout. El servidor tardó demasiado en responder');
    }
  }
};

// Ejecutar prueba
testEmail(); 
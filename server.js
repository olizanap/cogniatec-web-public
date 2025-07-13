const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Configurar límites para evitar errores 431
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// CORS simple y funcional
app.use(cors());

// Verificar variables de entorno críticas
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('⚠️  ADVERTENCIA: Variables EMAIL_USER y EMAIL_PASS no están configuradas');
  console.warn('Para que el envío de correos funcione, crea un archivo .env con:');
  console.warn('EMAIL_USER=tu-correo@gmail.com');
  console.warn('EMAIL_PASS=tu-contraseña-de-aplicacion');
  console.warn('');
  console.warn('El servidor iniciará pero el envío de correos fallará.');
  console.warn('');
}

// Configurar el transportador de correo con verificación
let transporter = null;

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Verificar conexión del transportador
  transporter.verify(function(error, success) {
    if (error) {
      console.error('❌ Error verificando transportador de correo:', error.message);
      if (error.code === 'EAUTH') {
        console.error('🔑 Error de autenticación. Verifica:');
        console.error('   - Que la contraseña de aplicación sea correcta');
        console.error('   - Que la verificación en 2 pasos esté activada');
        console.error('   - Que la contraseña no tenga espacios extra');
      }
    } else {
      console.log('✅ Transportador de correo verificado correctamente');
      console.log('📧 Email configurado:', process.env.EMAIL_USER);
    }
  });
} else {
  console.log('⚠️  Transportador de correo no configurado');
  console.log('📝 Crea un archivo .env con EMAIL_USER y EMAIL_PASS');
}

// Función para validar email
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Función para sanitizar texto
const sanitizeText = (text) => {
  return text.replace(/[<>]/g, '').trim();
};

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Recibida solicitud de contacto:', { 
      timestamp: new Date().toISOString(),
      origin: req.get('origin'),
      userAgent: req.get('user-agent')
    });

    const { name, email, message } = req.body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      console.log('❌ Campos faltantes en solicitud de contacto');
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      });
    }

    // Sanitizar y validar datos
    const sanitizedName = sanitizeText(name);
    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedMessage = sanitizeText(message);

    if (sanitizedName.length < 2) {
      return res.status(400).json({ 
        success: false, 
        message: 'El nombre debe tener al menos 2 caracteres' 
      });
    }

    if (sanitizedMessage.length < 10) {
      return res.status(400).json({ 
        success: false, 
        message: 'El mensaje debe tener al menos 10 caracteres' 
      });
    }

    // Validar formato de email
    if (!validateEmail(sanitizedEmail)) {
      console.log('❌ Email inválido:', sanitizedEmail);
      return res.status(400).json({ 
        success: false, 
        message: 'El formato del correo electrónico no es válido' 
      });
    }

    // Verificar si el transportador está configurado
    if (!transporter) {
      console.log('❌ Transportador de correo no configurado');
      return res.status(500).json({ 
        success: false, 
        message: 'Servicio de correo no configurado. Contacta al administrador.' 
      });
    }

    // Verificar que el transportador esté funcionando
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('❌ Error verificando transportador:', verifyError.message);
      return res.status(500).json({ 
        success: false, 
        message: 'Error de configuración del servidor de correo. Contacta al administrador.' 
      });
    }

    // Configurar el correo
    const mailOptions = {
      from: `"Contacto CogniaTEC" <${process.env.EMAIL_USER}>`,
      to: 'contacto@cogniatec.com',
      subject: 'Nuevo Contacto por medio de la Página Web CogniaTEC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0077B6;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #00FFAA;">
              ${sanitizedMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de CogniaTec.
            <br>Timestamp: ${new Date().toLocaleString('es-ES')}
          </p>
        </div>
      `
    };

    console.log('📤 Enviando correo...');
    
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Correo enviado exitosamente:', info.messageId);

    res.json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error enviando correo:', error);
    
    // Determinar el tipo de error para dar respuesta más específica
    let errorMessage = 'Error al enviar el mensaje';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación del servidor de correo';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Error de conexión con el servidor de correo';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Timeout en el envío del correo';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend funcionando correctamente',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Ruta de health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
    transporterConfigured: !!transporter
  });
});

// Servir archivos estáticos del frontend en producción
if (process.env.NODE_ENV === 'production') {
  console.log('🚀 Modo producción: Sirviendo frontend y API');
  
  // Servir archivos estáticos desde la carpeta build
  app.use(express.static(path.join(__dirname, 'build')));

  // Manejar todas las rutas del frontend (SPA routing)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else {
  // En desarrollo, solo servir la API
  console.log('🔧 Modo desarrollo: Solo API disponible');
  console.log('🌐 Frontend debe ejecutarse por separado en puerto 3000');
}

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📧 Endpoint de contacto: http://localhost:${PORT}/api/contact`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`✅ CORS configurado correctamente`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  if (process.env.NODE_ENV === 'production') {
    console.log(`🌐 Serviendo frontend desde: ${path.join(__dirname, 'build')}`);
    console.log(`🔒 Modo producción activado`);
  }
});

// Manejo de errores no capturados
process.on('uncaughtException', (err) => {
  console.error('❌ Error no capturado:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Promesa rechazada no manejada:', reason);
  process.exit(1);
}); 
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- CORS robusto para producción y desarrollo ---
const allowedOrigins = [
  'https://www.cogniatec.com',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir solicitudes sin origin (como Postman) o de los orígenes permitidos
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Responder explícitamente a todas las OPTIONS
app.options('*', cors());

// Middleware para JSON
app.use(express.json());

// Configurar el transportador de correo
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes cambiar a 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Tu correo
    pass: process.env.EMAIL_PASS  // Tu contraseña de aplicación
  }
});

// Función para validar email
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Ruta para enviar correos
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      });
    }

    // Validar formato de email
    if (!validateEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'El formato del correo electrónico no es válido' 
      });
    }

    // Configurar el correo
    const mailOptions = {
      from: 'Contacto CogniaTEC <contacto@cogniatec.com>',
      to: 'Contacto CogniaTEC <contacto@cogniatec.com>',
      subject: 'Nuevo Contacto por medio de la Página Web CogniaTEC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0077B6;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #00FFAA;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de CogniaTec.
          </p>
        </div>
      `
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Mensaje enviado correctamente' 
    });

  } catch (error) {
    console.error('Error enviando correo:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje' 
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📧 Endpoint de contacto: http://localhost:${PORT}/api/contact`);
}); 
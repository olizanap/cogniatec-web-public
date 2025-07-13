import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Paper, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Función para validar email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Limpiar errores al escribir
    setError('');
    setSuccess(false);
    
    // Validar email en tiempo real
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Por favor, ingresa un correo electrónico válido');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    // Validar campos requeridos
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validar longitud mínima
    if (form.name.trim().length < 2) {
      setError('El nombre debe tener al menos 2 caracteres.');
      return;
    }

    if (form.message.trim().length < 10) {
      setError('El mensaje debe tener al menos 10 caracteres.');
      return;
    }

    // Validar formato de email
    if (!validateEmail(form.email.trim())) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setLoading(true);

    try {
      // Usar URL externa para el backend (puedes cambiar esto por tu backend real)
      const endpoint = 'https://cogniatec-backend.onrender.com/api/contact';
      
      console.log('📤 Enviando formulario a:', endpoint);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          message: form.message.trim()
        }),
      });

      console.log('📥 Respuesta recibida:', response.status, response.statusText);

      if (!response.ok) {
        // Intentar obtener mensaje de error del servidor
        let errorMessage = 'Error en la respuesta del servidor';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          console.error('Error parseando respuesta de error:', parseError);
        }
        
        throw new Error(errorMessage);
      }
      
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        console.log('✅ Mensaje enviado exitosamente:', data.messageId);
      } else {
        throw new Error(data.message || 'Error en el envío');
      }
    } catch (error) {
      console.error('❌ Error sending email:', error);
      
      // Determinar el tipo de error para mostrar mensaje más específico
      let errorMessage = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
      
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage = 'Error de conexión. Verifica tu conexión a internet e intenta nuevamente.';
      } else if (error.message.includes('CORS')) {
        errorMessage = 'Error de configuración del servidor. Por favor, contacta al administrador.';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'La solicitud tardó demasiado. Por favor, intenta nuevamente.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          sx={{
            fontWeight: 900,
            textAlign: 'center',
            mb: 2,
            background: isDark
              ? 'linear-gradient(135deg, #ffffff 0%, #00FFAA 100%)'
              : 'linear-gradient(135deg, #1a202c 0%, #00FFAA 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.7rem', md: '3.7rem' },
            letterSpacing: '-0.02em',
            textShadow: isDark ? '0 4px 32px #00FFAA' : '0 4px 32px #00FFAA',
          }}
        >
          Contáctanos
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mb: 6,
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            fontWeight: 400,
            fontSize: { xs: '1.15rem', md: '1.25rem' },
            lineHeight: 1.5,
          }}
        >
          ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 5, md: 7 },
            borderRadius: 6,
            background: isDark
              ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(42, 42, 42, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
            backdropFilter: 'blur(30px)',
            border: `2px solid ${isDark ? 'rgba(0, 255, 170, 0.15)' : 'rgba(0, 119, 182, 0.15)'}`,
            maxWidth: 520,
            mx: 'auto',
            position: 'relative',
            boxShadow: isDark
              ? '0 12px 40px rgba(0,255,170,0.10)'
              : '0 12px 40px rgba(0,119,182,0.10)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: isDark
                ? 'radial-gradient(circle at 30% 70%, rgba(0, 255, 170, 0.10) 0%, transparent 60%)'
                : 'radial-gradient(circle at 30% 70%, rgba(0, 119, 182, 0.07) 0%, transparent 60%)',
              borderRadius: 6,
              pointerEvents: 'none',
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <motion.div
              animate={{ scale: [1, 1.12, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop' }}
            >
              <MarkEmailReadRoundedIcon sx={{ fontSize: 54, color: isDark ? '#00FFAA' : '#0077B6', filter: isDark ? 'drop-shadow(0 0 16px #00FFAA)' : 'drop-shadow(0 0 12px #00FFAA)' }} />
            </motion.div>
          </Box>
          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            <TextField
              label="Nombre completo"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  fontSize: '1.08rem',
                  background: isDark ? 'rgba(0,255,170,0.03)' : 'rgba(0,119,182,0.03)',
                  '&:hover fieldset': {
                    borderColor: isDark ? 'rgba(0, 255, 170, 0.3)' : 'rgba(0, 119, 182, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: isDark ? 'rgba(0, 255, 170, 0.5)' : 'rgba(0, 119, 182, 0.5)',
                  },
                },
              }}
            />
            <TextField
              label="Correo electrónico"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              fullWidth
              variant="outlined"
              sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  fontSize: '1.08rem',
                  background: isDark ? 'rgba(0,255,170,0.03)' : 'rgba(0,119,182,0.03)',
                  '&:hover fieldset': {
                    borderColor: isDark ? 'rgba(0, 255, 170, 0.3)' : 'rgba(0, 119, 182, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: isDark ? 'rgba(0, 255, 170, 0.5)' : 'rgba(0, 119, 182, 0.5)',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: isDark ? '#ff6b6b' : '#d32f2f',
                  fontSize: '0.875rem',
                  marginTop: 0.5,
                },
              }}
            />
            <TextField
              label="Mensaje"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  fontSize: '1.08rem',
                  background: isDark ? 'rgba(0,255,170,0.03)' : 'rgba(0,119,182,0.03)',
                  '&:hover fieldset': {
                    borderColor: isDark ? 'rgba(0, 255, 170, 0.3)' : 'rgba(0, 119, 182, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: isDark ? 'rgba(0, 255, 170, 0.5)' : 'rgba(0, 119, 182, 0.5)',
                  },
                },
              }}
            />
            {error && <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</Alert>}
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              disabled={loading}
              sx={{ 
                fontWeight: 800, 
                py: 2.1,
                borderRadius: 3,
                fontSize: '1.15rem',
                background: isDark
                  ? 'linear-gradient(135deg, #00FFAA 0%, #00CC88 100%)'
                  : 'linear-gradient(135deg, #0077B6 0%, #00FFAA 100%)',
                color: isDark ? '#000' : '#fff',
                boxShadow: isDark 
                  ? '0 4px 15px rgba(0, 255, 170, 0.3)'
                  : '0 4px 15px rgba(0, 119, 182, 0.3)',
                transition: 'all 0.3s',
                '&:hover': {
                  background: isDark
                    ? 'linear-gradient(135deg, #00CC88 0%, #009966 100%)'
                    : 'linear-gradient(135deg, #00FFAA 0%, #0077B6 100%)',
                  boxShadow: isDark 
                    ? '0 6px 20px rgba(0, 255, 170, 0.4)'
                    : '0 6px 20px rgba(0, 119, 182, 0.4)',
                  transform: 'scale(1.03)',
                },
                '&:disabled': {
                  background: isDark ? 'rgba(0, 255, 170, 0.3)' : 'rgba(0, 119, 182, 0.3)',
                  color: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                }
              }}
            >
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  Enviando...
                </Box>
              ) : (
                'Enviar mensaje'
              )}
            </Button>
          </form>
        </Paper>
      </motion.div>

      {/* Sección de correo directo después del formulario */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Box sx={{ 
          textAlign: 'center', 
          mt: 6,
          p: 4,
          borderRadius: 3,
          background: isDark 
            ? 'linear-gradient(135deg, rgba(0, 255, 170, 0.1) 0%, rgba(0, 204, 136, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(0, 119, 182, 0.1) 0%, rgba(0, 255, 170, 0.05) 100%)',
          border: `1px solid ${isDark ? 'rgba(0, 255, 170, 0.2)' : 'rgba(0, 119, 182, 0.2)'}`,
          maxWidth: '500px',
          mx: 'auto'
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.primary',
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1.3rem', md: '1.5rem' }
            }}
          >
            ¿Prefieres escribirnos directamente?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              fontWeight: 500,
              mb: 2,
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Envíanos un correo a:
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: isDark ? '#00FFAA' : '#0077B6',
              fontWeight: 700,
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: isDark ? '#00CC88' : '#00FFAA',
                transform: 'scale(1.05)',
              }
            }}
            onClick={() => window.open('mailto:contacto@cogniatec.com', '_blank')}
          >
            contacto@cogniatec.com
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};
export default ContactForm; 
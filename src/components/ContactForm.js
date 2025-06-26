import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.message) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    // Aquí se conectará con el backend
    setSuccess(true);
    setForm({ name: '', email: '', message: '' });
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
                }
              }}
            >
              Enviar mensaje
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ContactForm; 
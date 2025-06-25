import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

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
    <Box sx={{ py: 6, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h3" fontWeight={700} color="primary.main" gutterBottom align="center">
        Contacto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mensaje"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          multiline
          minRows={4}
          sx={{ mb: 2 }}
        />
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>¡Mensaje enviado con éxito!</Alert>}
        <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ fontWeight: 700, py: 1.5 }}>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm; 
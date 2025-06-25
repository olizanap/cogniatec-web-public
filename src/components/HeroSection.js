import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const HeroSection = ({ onCTAClick }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: { xs: 300, md: 400 },
      py: 2,
      mt: -4,
      textAlign: 'center',
    }}
  >
    <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main">
      Soluciones inteligentes, crecimiento sostenible
    </Typography>
    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
      Impulsamos la transformación digital con IA y tecnología de vanguardia.
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      onClick={onCTAClick}
      component={motion.button}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      sx={{ fontWeight: 700, fontSize: '1.1rem', px: 4, py: 1.5 }}
    >
      Solicita una reunión inicial sin compromiso
    </Button>
  </Box>
);

export default HeroSection; 
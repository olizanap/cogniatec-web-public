import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => (
  <Box sx={{ py: 6, maxWidth: 800, mx: 'auto' }}>
    <Typography variant="h3" fontWeight={700} color="primary.main" gutterBottom align="center">
      Nosotros
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }} align="center">
    CogniaTEC es una empresa especializada en el desarrollo y consultoría de soluciones inteligentes que integran software de vanguardia con inteligencia artificial. Diseñamos e implementamos sistemas que aprenden, automatizan y optimizan procesos críticos, generando valor real en la operación y toma de decisiones. Acompañamos a las organizaciones en su camino hacia la transformación digital, con una visión estratégica, enfoque personalizado y altos estándares de calidad tecnológica. Nuestro compromiso es impulsar la innovación, la eficiencia y la competitividad a través de soluciones tecnológicas integrales y sostenibles.
    </Typography>
  </Box>
);

export default About; 
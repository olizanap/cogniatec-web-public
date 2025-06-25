import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const services = [
  {
    icon: <PsychologyAltIcon color="primary" sx={{ fontSize: 48 }} />, 
    title: 'Desarrollo de software con IA',
    desc: 'Creamos soluciones inteligentes y personalizadas que aprenden y automatizan procesos.'
  },
  {
    icon: <AutoAwesomeIcon color="secondary" sx={{ fontSize: 48 }} />, 
    title: 'Consultoría en transformación digital',
    desc: 'Acompañamos a tu empresa en la adopción de tecnología y estrategias digitales.'
  },
  {
    icon: <IntegrationInstructionsIcon color="primary" sx={{ fontSize: 48 }} />, 
    title: 'Integración de plataformas inteligentes',
    desc: 'Conectamos sistemas y plataformas para optimizar la eficiencia y el crecimiento.'
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } })
};

const Services = () => (
  <Box sx={{ py: 6 }}>
    <Typography variant="h3" fontWeight={700} align="center" gutterBottom color="primary.main">
      Servicios
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {services.map((service, i) => (
        <Grid item xs={12} md={4} key={service.title}>
          <motion.div
            custom={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <Card sx={{ minHeight: 260, borderRadius: 4, boxShadow: 6, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                {service.icon}
                <Typography variant="h6" fontWeight={700} sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Services; 
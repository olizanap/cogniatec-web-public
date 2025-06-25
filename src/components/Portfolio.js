import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InsightsIcon from '@mui/icons-material/Insights';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const projects = [
  {
    icon: <AutoGraphIcon color="primary" sx={{ fontSize: 44 }} />, 
    title: 'AutoMov',
    desc: 'AutoMov es una *plataforma digital que simplifica y digitaliza el proceso de transferencia de vehículos en Chile*, eliminando la necesidad de hacer filas en el Registro Civil y reduciendo significativamente los tiempos de tramitación.'
  },
  {
    icon: <InsightsIcon color="secondary" sx={{ fontSize: 44 }} />, 
    title: 'SuComunidad',
    desc: 'SuComunidad es una plataforma digital con georreferenciación que permite a cualquier persona ofrecer y encontrar servicios, facilitando una interacción segura, rápida y personalizada entre oferentes y clientes. Promueve el desarrollo local, el emprendimiento y la confianza en la economía colaborativa digital.'
  },
  {
    icon: <SmartToyIcon color="primary" sx={{ fontSize: 44 }} />, 
    title: 'SmartBotX',
    desc: 'Asistente virtual para automatización de atención al cliente en tiempo real.'
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } })
};

const Portfolio = () => (
  <Box sx={{ py: 6 }}>
    <Typography variant="h3" fontWeight={700} align="center" gutterBottom color="primary.main">
      Portafolio
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, i) => (
        <Grid item xs={12} md={4} key={project.title}>
          <motion.div
            custom={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <Card sx={{ minHeight: 220, borderRadius: 4, boxShadow: 6, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                {project.icon}
                <Typography variant="h6" fontWeight={700} sx={{ mt: 2 }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  {project.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Portfolio; 
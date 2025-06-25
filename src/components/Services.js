import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const services = [
  {
    icon: <PsychologyAltIcon sx={{ fontSize: 48 }} />, 
    title: 'Desarrollo de software con IA',
    desc: 'Creamos soluciones inteligentes y personalizadas que aprenden y automatizan procesos complejos para optimizar tu negocio.',
    color: 'primary'
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 48 }} />, 
    title: 'Consultoría en transformación digital',
    desc: 'Acompañamos a tu empresa en la adopción de tecnología y estrategias digitales para maximizar el crecimiento y la eficiencia.',
    color: 'secondary'
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 48 }} />, 
    title: 'Integración de plataformas inteligentes',
    desc: 'Conectamos sistemas y plataformas para optimizar la eficiencia operativa y crear flujos de trabajo automatizados.',
    color: 'primary'
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    } 
  })
};

const Services = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #00FFAA 100%)'
                : 'linear-gradient(135deg, #1a202c 0%, #0077B6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Nuestros Servicios
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
            }}
          >
            Soluciones tecnológicas integrales para impulsar tu transformación digital
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, i) => (
            <Grid item xs={12} md={4} key={service.title}>
              <motion.div
                custom={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 4,
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.8) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': { 
                      transform: 'translateY(-12px)',
                      boxShadow: isDark
                        ? '0 20px 40px rgba(0, 255, 170, 0.2)'
                        : '0 20px 40px rgba(0, 119, 182, 0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, width: '100%' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        background: isDark
                          ? `linear-gradient(135deg, ${service.color === 'primary' ? 'rgba(0, 119, 182, 0.2)' : 'rgba(0, 255, 170, 0.2)'} 0%, ${service.color === 'primary' ? 'rgba(0, 119, 182, 0.1)' : 'rgba(0, 255, 170, 0.1)'} 100%)`
                          : `linear-gradient(135deg, ${service.color === 'primary' ? 'rgba(0, 119, 182, 0.1)' : 'rgba(0, 255, 170, 0.1)'} 0%, ${service.color === 'primary' ? 'rgba(0, 119, 182, 0.05)' : 'rgba(0, 255, 170, 0.05)'} 100%)`,
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box sx={{ 
                        color: service.color === 'primary' ? 'primary.main' : 'secondary.main',
                        filter: isDark ? 'drop-shadow(0 4px 8px rgba(0, 255, 170, 0.3))' : 'drop-shadow(0 4px 8px rgba(0, 119, 182, 0.2))',
                      }}>
                        {service.icon}
                      </Box>
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services; 
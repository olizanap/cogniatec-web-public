import React from 'react';
import { Box, Typography, Card, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const services = [
  {
    icon: <PsychologyAltIcon sx={{ fontSize: 44 }} />, 
    title: 'Desarrollo de software con IA',
    desc: 'Creamos soluciones inteligentes y personalizadas que aprenden y automatizan procesos complejos para optimizar tu negocio.',
    color: 'primary'
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 44 }} />, 
    title: 'Consultoría en transformación digital',
    desc: 'Acompañamos a tu empresa en la adopción de tecnología y estrategias digitales para maximizar el crecimiento y la eficiencia.',
    color: 'secondary'
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 44 }} />, 
    title: 'Integración de plataformas',
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
      duration: 0.8,
      ease: 'easeOut'
    } 
  })
};

const Services = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{
            fontWeight: 800,
              textAlign: 'center',
            mb: 3,
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #00FFAA 100%)'
                : 'linear-gradient(135deg, #1a202c 0%, #0077B6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.02em',
            textShadow: isDark ? '0 4px 20px rgba(0, 255, 170, 0.3)' : '0 4px 20px rgba(0, 119, 182, 0.3)',
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center', 
            mb: 8,
              color: 'text.secondary',
            maxWidth: '700px',
              mx: 'auto',
              fontWeight: 400,
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            lineHeight: 1.5,
            }}
          >
            Soluciones tecnológicas integrales para impulsar tu transformación digital
          </Typography>
        </motion.div>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ maxWidth: 1200, mx: 'auto' }}>
          {services.map((service, i) => (
          <Grid item xs={12} md={4} key={service.title} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                custom={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card 
                  sx={{ 
                  height: 360,
                  width: 360,
                  minWidth: 320,
                  maxWidth: 360,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  justifyContent: 'center',
                    textAlign: 'center',
                  borderRadius: 6,
                  p: 4,
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(42, 42, 42, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(25px)',
                  border: `2px solid ${isDark ? 'rgba(0, 255, 170, 0.15)' : 'rgba(0, 119, 182, 0.15)'}`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isDark
                    ? '0 8px 32px rgba(0,255,170,0.08)'
                    : '0 8px 32px rgba(0,119,182,0.08)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: isDark
                      ? `radial-gradient(circle at 30% 70%, ${service.color === 'primary' ? 'rgba(0, 255, 170, 0.08)' : 'rgba(0, 119, 182, 0.08)'} 0%, transparent 60%)`
                      : `radial-gradient(circle at 30% 70%, ${service.color === 'primary' ? 'rgba(0, 255, 170, 0.05)' : 'rgba(0, 119, 182, 0.05)'} 0%, transparent 60%)`,
                    borderRadius: 6,
                    pointerEvents: 'none',
                  },
                    '&:hover': { 
                    transform: 'translateY(-12px) scale(1.03)',
                      boxShadow: isDark
                      ? '0 20px 40px rgba(0, 255, 170, 0.18)'
                      : '0 20px 40px rgba(0, 119, 182, 0.13)',
                    }
                  }}
                >
                    <Box
                      sx={{
                    mb: 3, 
                        display: 'flex',
                    alignItems: 'center', 
                        justifyContent: 'center',
                    width: 70, 
                    height: 70, 
                        borderRadius: '50%',
                        background: isDark
                      ? `linear-gradient(135deg, ${service.color === 'primary' ? 'rgba(0, 255, 170, 0.13)' : 'rgba(0, 119, 182, 0.13)'} 0%, transparent 100%)`
                      : `linear-gradient(135deg, ${service.color === 'primary' ? 'rgba(0, 255, 170, 0.09)' : 'rgba(0, 119, 182, 0.09)'} 0%, transparent 100%)`,
                    boxShadow: isDark
                      ? `0 0 16px 2px ${service.color === 'primary' ? 'rgba(0,255,170,0.18)' : 'rgba(0,119,182,0.18)'}`
                      : `0 0 12px 2px ${service.color === 'primary' ? 'rgba(0,255,170,0.10)' : 'rgba(0,119,182,0.10)'}`,
                      }}
                    >
                  <Box 
                    sx={{ 
                      color: service.color === 'primary' ? '#00FFAA' : '#0077B6',
                      filter: isDark 
                        ? `drop-shadow(0 2px 8px ${service.color === 'primary' ? 'rgba(0,255,170,0.18)' : 'rgba(0,119,182,0.18)'})` 
                        : `drop-shadow(0 2px 8px ${service.color === 'primary' ? 'rgba(0,255,170,0.10)' : 'rgba(0,119,182,0.10)'})`,
                      transition: 'all 0.3s',
                    }}
                  >
                        {service.icon}
                      </Box>
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                    fontWeight: 800, 
                        mb: 2,
                        color: 'text.primary',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.7,
                    fontSize: { xs: '1rem', md: '1.08rem' }, 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    display: '-webkit-box', 
                    WebkitLineClamp: 4, 
                    WebkitBoxOrient: 'vertical', 
                    width: '100%',
                    fontWeight: 400,
                      }}
                    >
                      {service.desc}
                    </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default Services; 
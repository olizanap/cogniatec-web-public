import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
            mb: 1.5,
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
          Nosotros CogniaTEC
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 5,
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
            fontWeight: 400,
            fontSize: { xs: '1.15rem', md: '1.25rem' },
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          Tecnología, IA y transformación digital para tu empresa
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
            p: { xs: 5, md: 8 },
            borderRadius: 6,
            background: isDark
              ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(42, 42, 42, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
            backdropFilter: 'blur(30px)',
            border: `2px solid ${isDark ? 'rgba(0, 255, 170, 0.15)' : 'rgba(0, 119, 182, 0.15)'}`,
            maxWidth: 1000,
            mx: 'auto',
            textAlign: 'left',
            position: 'relative',
            boxShadow: isDark
              ? '0 12px 40px rgba(0,255,170,0.10)'
              : '0 12px 40px rgba(0,119,182,0.10)',
            overflow: 'hidden',
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
            },
          }}
        >
          {/* Icono decorativo IA */}
          <Box sx={{ position: 'absolute', top: 24, right: 32, opacity: 0.18, zIndex: 2 }}>
            <motion.div
              animate={{ scale: [1, 1.13, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
            >
              <PsychologyAltIcon sx={{ fontSize: 64, color: isDark ? '#00FFAA' : '#0077B6', filter: isDark ? 'drop-shadow(0 0 16px #00FFAA)' : 'drop-shadow(0 0 12px #00FFAA)' }} />
            </motion.div>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 2.1,
              fontSize: { xs: '1.18rem', md: '1.28rem' },
              fontWeight: 400,
              position: 'relative',
              zIndex: 3,
              textAlign: 'left',
              letterSpacing: '-0.01em',
              '& strong': {
                color: isDark ? '#00FFAA' : '#0077B6',
                fontWeight: 700,
                fontSize: '1.1em',
                textShadow: isDark ? '0 2px 8px #00FFAA' : '0 2px 8px #0077B6',
              },
              '& em': {
                color: isDark ? '#00FFAA' : '#0077B6',
                fontStyle: 'normal',
                fontWeight: 600,
              },
              '& br': {
                display: 'block',
                content: '""',
                marginTop: '1.5rem',
              }
            }}
          >
            <strong>CogniaTEC</strong> es una empresa especializada en el desarrollo y consultoría de soluciones inteligentes que integran software de vanguardia con <em>inteligencia artificial</em>.<br />
            Diseñamos e implementamos sistemas que aprenden, automatizan y optimizan procesos críticos, generando valor real en la operación y toma de decisiones.<br />
            Acompañamos a las organizaciones en su camino hacia la transformación digital, con una visión estratégica, enfoque personalizado y altos estándares de calidad tecnológica.<br />
            Nuestro compromiso es impulsar la <em>innovación</em>, la eficiencia y la competitividad a través de soluciones tecnológicas integrales y sostenibles.
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};
export default About; 
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const HeroSection = ({ onCTAClick }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: 400, md: 500 },
          py: { xs: 4, md: 8 },
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: isDark
              ? 'radial-gradient(circle at center, rgba(0, 255, 170, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(0, 119, 182, 0.05) 0%, transparent 70%)',
            zIndex: 0,
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography 
              variant="h1" 
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                lineHeight: 1.1,
                mb: 3,
                background: isDark
                  ? 'linear-gradient(135deg, #ffffff 0%, #00FFAA 50%, #0077B6 100%)'
                  : 'linear-gradient(135deg, #1a202c 0%, #0077B6 50%, #00FFAA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isDark 
                  ? '0 4px 8px rgba(0, 255, 170, 0.3)'
                  : '0 4px 8px rgba(0, 119, 182, 0.2)',
              }}
            >
              Soluciones inteligentes,
              <br />
              crecimiento sostenible
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 6,
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Impulsamos la transformación digital con IA y tecnología de vanguardia.
              <br />
              Creamos soluciones que aprenden, evolucionan y generan valor real.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={onCTAClick}
              component={motion.button}
              whileHover={{ 
                scale: 1.05,
                boxShadow: isDark 
                  ? '0 8px 25px rgba(0, 255, 170, 0.4)'
                  : '0 8px 25px rgba(0, 119, 182, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                borderRadius: 3,
                fontWeight: 700,
                textTransform: 'none',
                background: isDark
                  ? 'linear-gradient(135deg, #00FFAA 0%, #00CC88 100%)'
                  : 'linear-gradient(135deg, #0077B6 0%, #005A8A 100%)',
                color: isDark ? '#000' : '#fff',
                boxShadow: isDark 
                  ? '0 4px 15px rgba(0, 255, 170, 0.3)'
                  : '0 4px 15px rgba(0, 119, 182, 0.3)',
                '&:hover': {
                  background: isDark
                    ? 'linear-gradient(135deg, #00CC88 0%, #009966 100%)'
                    : 'linear-gradient(135deg, #005A8A 0%, #004466 100%)',
                }
              }}
            >
              Solicita una reunión inicial sin compromiso
            </Button>
          </motion.div>

          {/* Floating elements for visual appeal */}
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: isDark ? 'rgba(0, 255, 170, 0.3)' : 'rgba(0, 119, 182, 0.2)',
              animation: 'float 6s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
              }
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '60%',
              right: '15%',
              width: 15,
              height: 15,
              borderRadius: '50%',
              background: isDark ? 'rgba(0, 119, 182, 0.3)' : 'rgba(0, 255, 170, 0.2)',
              animation: 'float 8s ease-in-out infinite reverse',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-15px)' },
              }
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection; 
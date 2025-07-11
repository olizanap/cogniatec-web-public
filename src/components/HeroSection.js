import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const heroPhrases = [
  'Soluciones inteligentes,\ncrecimiento sostenible',
  'Automatiza tu futuro con IA y tecnología digital',
  'Tramitación electrónica sin límites, sin filas, sin papeles',
  'Transforma tu empresa con innovación y eficiencia',
  'Digitaliza, automatiza, crece: CogniaTec lo hace posible',
  'IA aplicada a procesos reales, resultados extraordinarios',
];

const HeroSection = ({ onCTAClick, resetKey }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    setPhraseIndex(0);
  }, [resetKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [resetKey]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        position: 'relative',
        mt: { xs: -4, md: -6 },
        pt: { xs: 2, md: 3 },
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
      {/* Partículas/destellos */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #00FFAA 0%, transparent 80%)',
              opacity: 0.25 + Math.random() * 0.4,
              animation: `twinkle 2.5s ${i * 0.5}s infinite alternate`,
              '@keyframes twinkle': {
                '0%': { opacity: 0.2 },
                '100%': { opacity: 0.7 },
              },
            }}
          />
        ))}
      </Box>
      <Box sx={{ position: 'relative', zIndex: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
          {/* Onda animada */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,255,170,0.35) 0%, rgba(0,255,170,0.15) 60%, transparent 100%)',
                filter: 'blur(2px)',
                animation: 'waveMove 3.5s linear infinite',
                '@keyframes waveMove': {
                  '0%': { left: 0 },
                  '100%': { left: '100%' },
                },
              }}
            />
          </Box>
          {/* Texto principal animado */}
          <motion.div
            key={phraseIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'relative', zIndex: 1 }}
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
                position: 'relative',
                zIndex: 1,
                transition: 'background 0.8s',
              }}
            >
              {heroPhrases[phraseIndex].split('\n').map((line, idx) => (
                <span key={idx} style={{ display: 'block' }}>{line}</span>
              ))}
              {/* Subrayado animado */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  bottom: -8,
                  width: '100%',
                  height: 6,
                  borderRadius: 3,
                  background: 'linear-gradient(90deg, #00FFAA 0%, #0077B6 100%)',
                  animation: 'underlineGrow 2.5s cubic-bezier(0.4,0,0.2,1) infinite alternate',
                  '@keyframes underlineGrow': {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                  },
                }}
              />
            </Typography>
          </motion.div>
        </Box>

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
            sx={{
              fontWeight: 800,
              px: 5,
              py: 1.7,
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
              },
              '&:disabled': {
                background: isDark ? 'rgba(0, 255, 170, 0.3)' : 'rgba(0, 119, 182, 0.3)',
                color: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
              }
            }}
          >
            ¡Quiero transformar mi empresa!
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection; 
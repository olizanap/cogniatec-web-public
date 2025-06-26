import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import logo from '../assets/logo.png';

const slides = [
  {
    img: logo,
    alt: 'Logo CogniaTec',
    keyword: '',
    isLogo: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    alt: 'Cerebro digital IA',
    keyword: 'Inteligencia Artificial',
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    alt: 'Documento digital aprobado',
    keyword: 'Tramitación Electrónica',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
    alt: 'Ciudad inteligente',
    keyword: 'Innovación',
  },
  {
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    alt: 'Robot asistente IA',
    keyword: 'Automatización',
  },
];

const BannerCarousel = () => (
  <Box sx={{ width: '100%', height: { xs: 220, md: 320 }, position: 'relative', overflow: 'hidden', borderRadius: '0 0 32px 32px', mb: 2 }}>
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop
      style={{ width: '100%', height: '100%' }}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 220, md: 320 },
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: slide.isLogo
                ? (theme) => theme.palette.mode === 'dark'
                  ? 'linear-gradient(120deg, #0a1929 0%, #0077b6 100%)'
                  : 'linear-gradient(120deg, #e0f7fa 0%, #b2ebf2 100%)'
                : `linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(0,119,182,0.3) 100%), url(${slide.img}) center/cover no-repeat`,
              overflow: 'hidden',
            }}
          >
            {/* Partículas flotando */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
              {[...Array(7)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    top: `${10 + Math.random() * 80}%`,
                    left: `${5 + Math.random() * 90}%`,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #00FFAA 0%, transparent 80%)',
                    opacity: 0.18 + Math.random() * 0.3,
                    animation: `twinkle 2.5s ${i * 0.7}s infinite alternate`,
                    '@keyframes twinkle': {
                      '0%': { opacity: 0.15 },
                      '100%': { opacity: 0.5 },
                    },
                  }}
                />
              ))}
            </Box>
            {slide.isLogo ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3 }}>
                <Box
                  sx={{
                    height: { xs: 120, md: 180 },
                    width: { xs: 120, md: 180 },
                    borderRadius: '50%',
                    background: 'rgba(0,255,170,0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 32px 8px rgba(0,255,170,0.25)',
                    mb: 2,
                    animation: 'spinGlow 7s linear infinite',
                    '@keyframes spinGlow': {
                      '0%': { transform: 'rotate(0deg) scale(1)' },
                      '50%': { transform: 'rotate(180deg) scale(1.07)' },
                      '100%': { transform: 'rotate(360deg) scale(1)' },
                    },
                  }}
                >
                  <Box component="img" src={logo} alt="CogniaTec Logo" sx={{ height: { xs: 70, md: 110 }, width: 'auto', filter: 'drop-shadow(0 4px 24px rgba(0,255,170,0.25))' }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#00FFAA',
                    fontWeight: 800,
                    textShadow: '0 4px 24px rgba(0,0,0,0.7)',
                    px: 3,
                    textAlign: 'center',
                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                    letterSpacing: 1,
                    borderRadius: 2,
                    bgcolor: 'rgba(0,0,0,0.15)',
                    py: 1,
                    mt: 1,
                  }}
                >
                  CogniaTec
                </Typography>
              </Box>
            ) : (
              <Box sx={{
                zIndex: 3,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'zoomIn 7s linear infinite',
                '@keyframes zoomIn': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.07)' },
                  '100%': { transform: 'scale(1)' },
                },
              }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#fff',
                    fontWeight: 900,
                    textShadow: '0 4px 24px rgba(0,0,0,0.7)',
                    px: 3,
                    textAlign: 'center',
                    fontSize: { xs: '1.3rem', md: '2.2rem' },
                    letterSpacing: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(0,0,0,0.18)',
                    py: 1.5,
                    textTransform: 'uppercase',
                  }}
                >
                  {slide.keyword}
                </Typography>
              </Box>
            )}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default BannerCarousel; 
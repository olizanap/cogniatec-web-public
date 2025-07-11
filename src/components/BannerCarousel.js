import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import logo from '../assets/logo.png';
import Glaxia1 from '../assets/Glaxia1.jpg';
import Glaxia2 from '../assets/Glaxia2.jpg';
<<<<<<< HEAD
=======
import IA3 from '../assets/IA3.png';
>>>>>>> eb8817f (Optimización SEO y accesibilidad)

const slides = [
  {
    img: Glaxia2,
    alt: 'Logo CogniaTec sobre galaxia',
    keyword: '',
    isLogo: true,
  },
  {
    img: Glaxia1,
    alt: 'Galaxia observatorio Chile',
    keyword: 'Innovación',
  },
  {
<<<<<<< HEAD
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
=======
    img: IA3,
>>>>>>> eb8817f (Optimización SEO y accesibilidad)
    alt: 'Cerebro digital IA',
    keyword: 'Inteligencia Artificial',
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    alt: 'Documento digital aprobado',
    keyword: 'Tramitación Electrónica',
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
                ? `linear-gradient(120deg, rgba(0,0,0,0.35) 0%, rgba(0,255,170,0.08) 100%), url(${slide.img}) center/cover no-repeat`
                : `linear-gradient(120deg, rgba(0,0,0,0.35) 0%, rgba(0,255,170,0.10) 100%), url(${slide.img}) center/cover no-repeat`,
              boxShadow: slide.isLogo ? undefined : '0 0 80px 10px #00ffaa44',
              filter: slide.isLogo ? undefined : 'brightness(1.15) saturate(1.35)',
              overflow: 'hidden',
            }}
          >
            {/* Overlay de estrellas más marcado */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
              {[...Array(14)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    top: `${5 + Math.random() * 90}%`,
                    left: `${2 + Math.random() * 96}%`,
                    width: 8 + Math.random() * 10,
                    height: 8 + Math.random() * 10,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #00FFAA 0%, transparent 80%)',
                    opacity: 0.12 + Math.random() * 0.25,
                    animation: `twinkle 2.5s ${i * 0.5}s infinite alternate`,
                    '@keyframes twinkle': {
                      '0%': { opacity: 0.10 },
                      '100%': { opacity: 0.45 },
                    },
                  }}
                />
              ))}
            </Box>
            {slide.isLogo ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3 }}>
                <Box
                  sx={{
                    height: { xs: 220, md: 320 },
                    width: { xs: 220, md: 320 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Box component="img" src={logo} alt="CogniaTec Logo"
                    sx={{
                      height: { xs: 180, md: 260 },
                      width: 'auto',
<<<<<<< HEAD
                      filter: 'brightness(0.85) drop-shadow(0 4px 32px #00ffaa) drop-shadow(0 0 16px #00ffaa88)',
                      animation: 'floatLogo 3.5s ease-in-out infinite, spinLogo 12s linear infinite',
                      '@keyframes floatLogo': {
                        '0%': { transform: 'translateY(0) scale(1)' },
                        '50%': { transform: 'translateY(-18px) scale(1.04)' },
                        '100%': { transform: 'translateY(0) scale(1)' },
                      },
                      '@keyframes spinLogo': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
=======
                      position: 'relative',
                      zIndex: 4,
                      filter: 'brightness(0.95) drop-shadow(0 4px 32px #00ffaa) drop-shadow(0 0 16px #00ffaa88)',
                      animation: 'floatLogo 3.5s ease-in-out infinite',
                      '@keyframes floatLogo': {
                        '0%': { transform: 'translateY(0) scale(1)' },
                        '50%': { transform: 'translateY(-18px) scale(1.08)' },
                        '100%': { transform: 'translateY(0) scale(1)' },
                      },
                    }}
                  />
                  {/* Efecto de resplandor animado */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: 220, md: 320 },
                      height: { xs: 220, md: 320 },
                      borderRadius: '50%',
                      zIndex: 3,
                      pointerEvents: 'none',
                      background: 'radial-gradient(circle, rgba(0,255,170,0.22) 0%, rgba(0,255,170,0.09) 60%, transparent 80%)',
                      boxShadow: '0 0 64px 24px #00ffaa55',
                      animation: 'glowPulse 3.5s ease-in-out infinite',
                      '@keyframes glowPulse': {
                        '0%': { opacity: 0.7, boxShadow: '0 0 64px 24px #00ffaa55' },
                        '50%': { opacity: 1, boxShadow: '0 0 96px 36px #00ffaa99' },
                        '100%': { opacity: 0.7, boxShadow: '0 0 64px 24px #00ffaa55' },
>>>>>>> eb8817f (Optimización SEO y accesibilidad)
                      },
                    }}
                  />
                </Box>
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
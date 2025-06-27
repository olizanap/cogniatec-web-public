import React, { useMemo, useState, useRef } from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { getTheme } from './theme';
import logo from './assets/logo.png';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';

function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => getTheme(mode), [mode]);
  const contactRef = useRef(null);
  const [heroResetKey, setHeroResetKey] = useState(0);

  const handleThemeChange = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleCTAClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroReset = () => {
    setHeroResetKey((prev) => prev + 1);
  };

  // Estilo común para todas las secciones
  const sectionStyle = {
    minHeight: { xs: '80vh', md: '100vh' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh', 
          background: theme.palette.background.gradient,
          color: 'text.primary',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: mode === 'dark' 
              ? 'radial-gradient(circle at 20% 80%, rgba(0, 255, 170, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 119, 182, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 80%, rgba(0, 119, 182, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 170, 0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
            zIndex: 0,
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Navbar mode={mode} onThemeChange={handleThemeChange} onHeroReset={handleHeroReset} />
          
          {/* Banner Carrusel */}
          <BannerCarousel />

          {/* Hero Section */}
          <Box id="hero-section" sx={{ pt: { xs: 3, md: 4 } }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
              <HeroSection onCTAClick={handleCTAClick} resetKey={heroResetKey} />
            </Container>
          </Box>

          {/* Services Section */}
          <Box sx={sectionStyle} id="services-section">
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Services />
            </Container>
          </Box>

          {/* About Section */}
          <Box sx={sectionStyle} id="about-section">
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
              <About />
            </Container>
            </Box>

          {/* Portfolio Section */}
          <Box sx={sectionStyle} id="portfolio-section">
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
              <Portfolio />
            </Container>
            </Box>

          {/* Contact Section */}
          <Box sx={sectionStyle} id="contact-section" ref={contactRef}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
              <ContactForm />
            </Container>
            </Box>
          
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

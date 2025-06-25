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

function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => getTheme(mode), [mode]);
  const contactRef = useRef(null);

  const handleThemeChange = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleCTAClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
          <Navbar mode={mode} onThemeChange={handleThemeChange} />
          
          {/* Logo Section with improved styling */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              py: 4,
              background: mode === 'dark'
                ? 'linear-gradient(135deg, rgba(0, 255, 170, 0.1) 0%, rgba(0, 119, 182, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(0, 119, 182, 0.05) 0%, rgba(0, 255, 170, 0.05) 100%)',
              borderRadius: '0 0 32px 32px',
              mx: 2,
              mb: 4,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="CogniaTec Logo"
              sx={{
                height: { xs: 180, sm: 220, md: 253 },
                width: { xs: 180, sm: 220, md: 253 },
                objectFit: 'contain',
                filter: mode === 'dark' ? 'drop-shadow(0 8px 16px rgba(0, 255, 170, 0.3))' : 'drop-shadow(0 8px 16px rgba(0, 119, 182, 0.2))',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  filter: mode === 'dark' ? 'drop-shadow(0 12px 24px rgba(0, 255, 170, 0.4))' : 'drop-shadow(0 12px 24px rgba(0, 119, 182, 0.3))',
                }
              }}
            />
          </Box>

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <HeroSection onCTAClick={handleCTAClick} />
            <Services />
            <Box id="about-section" sx={{ scrollMarginTop: 90, py: 2 }}>
              <About />
            </Box>
            <Box id="portfolio-section" sx={{ scrollMarginTop: 90, py: 2 }}>
              <Portfolio />
            </Box>
            <Box id="contact-section" ref={contactRef} sx={{ scrollMarginTop: 90, py: 2 }}>
              <ContactForm />
            </Box>
          </Container>
          
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

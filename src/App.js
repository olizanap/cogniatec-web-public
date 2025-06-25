import React, { useMemo, useState, useRef } from 'react';
import { ThemeProvider, CssBaseline, Container, Box, IconButton, Typography, Switch } from '@mui/material';
import { getTheme } from './theme';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
        <Navbar mode={mode} onThemeChange={handleThemeChange} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
          <img src={logo} alt="CogniaTec Logo" style={{ height: 253, width: 253, objectFit: 'contain' }} />
        </Box>
        <Container maxWidth="md">
          <HeroSection onCTAClick={handleCTAClick} />
          <Services />
          <div id="about-section" style={{ scrollMarginTop: 90 }}><About /></div>
          <div id="portfolio-section" style={{ scrollMarginTop: 90 }}><Portfolio /></div>
          <div id="contact-section" ref={contactRef} style={{ scrollMarginTop: 90 }}><ContactForm /></div>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

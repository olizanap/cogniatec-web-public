import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Switch,
  Fab,
  Zoom
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';

const sections = [
  { label: 'Inicio', id: 'hero-section' },
  { label: 'Servicios', id: 'services-section' },
  { label: 'Nosotros', id: 'about-section' },
  { label: 'Portafolio', id: 'portfolio-section' },
  { label: 'Contacto', id: 'contact-section' },
];

const Navbar = ({ mode, onThemeChange, onHeroReset }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Detectar scroll para mostrar/ocultar botón de volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    if (id === 'hero-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setDrawerOpen(false);
      if (typeof onHeroReset === 'function') {
        onHeroReset();
      }
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: isDark 
            ? 'rgba(18, 18, 18, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 70 } }}>
          {/* Logo/Nombre de la empresa */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #00FFAA 100%)'
                : 'linear-gradient(135deg, #1a202c 0%, #0077B6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              }
            }}
            onClick={scrollToTop}
          >
            CogniaTec
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          
          {/* Menú de navegación desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                sx={{ 
                  fontWeight: 600,
                  color: 'text.primary',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: isDark ? 'rgba(0, 255, 170, 0.1)' : 'rgba(0, 119, 182, 0.1)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: 2,
                      bgcolor: isDark ? 'primary.main' : 'secondary.main',
                      borderRadius: 1,
                    }
                  }
                }}
              >
                {section.label}
              </Button>
            ))}
          </Box>

          {/* Controles de tema */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, gap: 1 }}>
            <IconButton 
              onClick={onThemeChange} 
              sx={{ 
                color: 'text.primary',
                '&:hover': {
                  bgcolor: isDark ? 'rgba(0, 255, 170, 0.1)' : 'rgba(0, 119, 182, 0.1)',
                }
              }}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <Switch 
              checked={mode === 'dark'} 
              onChange={onThemeChange} 
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: isDark ? '#00FFAA' : '#0077B6',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  bgcolor: isDark ? 'rgba(0, 255, 170, 0.5)' : 'rgba(0, 119, 182, 0.5)',
                },
              }}
            />
          </Box>

          {/* Menú móvil */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
            <IconButton 
              edge="end" 
              onClick={() => setDrawerOpen(true)}
              sx={{ 
                color: 'text.primary',
                '&:hover': {
                  bgcolor: isDark ? 'rgba(0, 255, 170, 0.1)' : 'rgba(0, 119, 182, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: isDark ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            width: 250,
          }
        }}
      >
        <List>
          {sections.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton onClick={() => handleScroll(section.id)}>
                <ListItemText primary={section.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Botón de volver arriba */}
      <Zoom in={showScrollTop} unmountOnExit>
        <Fab 
          color={isDark ? 'secondary' : 'primary'} 
          size="medium" 
          onClick={scrollToTop}
          sx={{ 
            position: 'fixed', 
            bottom: { xs: 24, md: 32 }, 
            right: { xs: 24, md: 32 }, 
            zIndex: 1300,
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            fontWeight: 700,
            letterSpacing: 1,
            transition: 'all 0.3s',
            '&:hover': {
              transform: 'scale(1.08)',
              boxShadow: isDark 
                ? '0 8px 32px rgba(0,255,170,0.18)'
                : '0 8px 32px rgba(0,119,182,0.13)',
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default Navbar; 
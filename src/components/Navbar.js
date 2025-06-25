import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const sections = [
  { label: 'Nosotros', id: 'about-section' },
  { label: 'Portafolio', id: 'portfolio-section' },
  { label: 'Contacto', id: 'contact-section' },
];

const Navbar = ({ mode, onThemeChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={2} sx={{ bgcolor: 'background.paper', zIndex: 1201 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              color="primary"
              sx={{ fontWeight: 700 }}
              onClick={() => handleScroll(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <IconButton onClick={onThemeChange} color="inherit">
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <Switch checked={mode === 'dark'} onChange={onThemeChange} color="secondary" />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 220 }}>
            <List>
              {sections.map((section) => (
                <ListItem key={section.id} disablePadding>
                  <ListItemButton onClick={() => handleScroll(section.id)}>
                    <ListItemText primary={section.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
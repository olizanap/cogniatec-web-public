import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#0077B6', // Azul CogniaTec
      light: '#4DA3D4',
      dark: '#005A8A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00FFAA', // Verde neón
      light: '#66FFCC',
      dark: '#00CC88',
      contrastText: '#000000',
    },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#0a0a0a',
      paper: mode === 'light' ? '#ffffff' : '#1a1a1a',
      gradient: mode === 'light' 
        ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
        : 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    },
    text: {
      primary: mode === 'light' ? '#1a202c' : '#ffffff',
      secondary: mode === 'light' ? '#4a5568' : '#a0aec0',
      accent: mode === 'light' ? '#0077B6' : '#00FFAA',
    },
    divider: mode === 'light' ? '#e2e8f0' : '#2d3748',
    action: {
      hover: mode === 'light' ? 'rgba(0, 119, 182, 0.08)' : 'rgba(0, 255, 170, 0.08)',
      selected: mode === 'light' ? 'rgba(0, 119, 182, 0.12)' : 'rgba(0, 255, 170, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { 
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: { 
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: { 
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: { 
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: { 
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: { 
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    body1: { 
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: { 
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: { 
      textTransform: 'none', 
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    mode === 'light' 
      ? '0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)'
      : '0px 2px 4px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.4)',
    mode === 'light'
      ? '0px 4px 8px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.12)'
      : '0px 4px 8px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.5)',
    mode === 'light'
      ? '0px 8px 16px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.15)'
      : '0px 8px 16px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.6)',
    mode === 'light'
      ? '0px 16px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.18)'
      : '0px 16px 32px rgba(0, 0, 0, 0.6), 0px 8px 16px rgba(0, 0, 0, 0.7)',
    ...Array(20).fill('none'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: mode === 'light' 
              ? '0px 4px 12px rgba(0, 119, 182, 0.3)'
              : '0px 4px 12px rgba(0, 255, 170, 0.3)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          background: mode === 'light'
            ? 'linear-gradient(135deg, #0077B6 0%, #005A8A 100%)'
            : 'linear-gradient(135deg, #00FFAA 0%, #00CC88 100%)',
          '&:hover': {
            background: mode === 'light'
              ? 'linear-gradient(135deg, #005A8A 0%, #004466 100%)'
              : 'linear-gradient(135deg, #00CC88 0%, #009966 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'light'
            ? '0px 8px 32px rgba(0, 0, 0, 0.08)'
            : '0px 8px 32px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: mode === 'light'
              ? '0px 16px 48px rgba(0, 0, 0, 0.12)'
              : '0px 16px 48px rgba(0, 0, 0, 0.5)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: mode === 'light' 
            ? 'rgba(255, 255, 255, 0.8)'
            : 'rgba(26, 26, 26, 0.8)',
          borderBottom: `1px solid ${mode === 'light' ? '#e2e8f0' : '#2d3748'}`,
        },
      },
    },
  },
});

export const getTheme = (mode = 'light') => createTheme(getDesignTokens(mode)); 
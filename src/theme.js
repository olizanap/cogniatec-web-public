import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#0077B6', // Azul CogniaTec
    },
    secondary: {
      main: '#00FFAA', // Verde neón
    },
    background: {
      default: mode === 'light' ? '#f4f6fb' : '#181c20',
      paper: mode === 'light' ? '#fff' : '#23272b',
    },
    text: {
      primary: mode === 'light' ? '#333333' : '#ffffff',
      secondary: mode === 'light' ? '#0077B6' : '#00FFAA',
    },
  },
  typography: {
    fontFamily: 'Roboto, Poppins, Inter, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
});

export const getTheme = (mode = 'light') => createTheme(getDesignTokens(mode)); 
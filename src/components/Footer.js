import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'background.paper', mt: 6 }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} CogniaTec. Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer; 
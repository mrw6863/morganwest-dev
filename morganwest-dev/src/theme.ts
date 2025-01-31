import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E91E63', // Pink
    },
    secondary: {
      main: '#9C27B0', // Purple
    },
    background: {
      default: '#FCE4EC', // Light pink background
      paper: '#F8BBD0',  // Softer pink for paper elements
    },
  },
});

export default theme;

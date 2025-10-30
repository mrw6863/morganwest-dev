import { createTheme } from '@mui/material/styles';

export const galleryTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#666666',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 200,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 200,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 300,
      letterSpacing: '0.02em',
    },
    h4: {
      fontWeight: 300,
      letterSpacing: '0.02em',
    },
    h5: {
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    h6: {
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.8,
    },
    body2: {
      fontWeight: 300,
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});
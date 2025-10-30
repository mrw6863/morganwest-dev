import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#36465d', // Main blue
      light: '#46556a', // Lighter blue (border accent)
      dark: '#2c3847', // Darker blue
      contrastText: '#fff', // White text for contrast
    },
    secondary: {
      main: '#55bc8a', // Green accent
      light: '#529ecc', // Light blue accent
      dark: '#a77dc2', // Purple accent
      contrastText: '#fff', // White text for contrast 
    },
    background: {
      default: 'rgba(54, 70, 93, 1)', // Main blue background
      paper: '#46556a', // Border accent for paper elements
    },
    error: {
      main: '#d95e40', // Red accent
    },
    warning: {
      main: '#f2992e', // Orange accent
    },
    info: {
      main: '#529ecc', // Light blue accent
    },
    success: {
      main: '#55bc8a', // Green accent
    },
    text: {
      primary: '#ffffff', // White text on dark background
      secondary: '#737e8e', // Grey text on blue background
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h1: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h2: {
      fontWeight: 600,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h3: {
      fontWeight: 600,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h4: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h5: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
    },
    h6: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
    },
    body1: {
      fontWeight: 400,
      color: '#737e8e',
    },
    body2: {
      fontWeight: 400,
      color: '#737e8e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: '#9ba2ae',
          color: '#ffffff',
          // '&:hover': {
          //   backgroundColor: '#748089',
          // },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#46556a',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#46556a',
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#55bc8a',
          color: '#ffffff',
          fontWeight: 500,
          margin: '0.25rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(54, 70, 93, 1)',
          borderBottom: '1px solid #46556a',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#36465d', // Main blue
      light: '#46556a', // Lighter blue (border accent)
      dark: '#2c3847', // Darker blue
      contrastText: '#fff', // White text for contrast
    },
    secondary: {
      main: '#55bc8a', // Green accent
      light: '#529ecc', // Light blue accent
      dark: '#a77dc2', // Purple accent
      contrastText: '#fff', // White text for contrast 
    },
    background: {
      default: 'rgba(54, 70, 93, 1)', // Main blue background
      paper: '#46556a', // Border accent for paper elements
    },
    error: {
      main: '#d95e40', // Red accent
    },
    warning: {
      main: '#f2992e', // Orange accent
    },
    info: {
      main: '#529ecc', // Light blue accent
    },
    success: {
      main: '#55bc8a', // Green accent
    },
    text: {
      primary: '#ffffff', // White text on dark background
      secondary: '#737e8e', // Grey text on blue background
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h1: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h2: {
      fontWeight: 600,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h3: {
      fontWeight: 600,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h4: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h5: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
    },
    h6: {
      fontWeight: 700,
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
    },
    body1: {
      fontWeight: 400,
      color: '#737e8e',
    },
    body2: {
      fontWeight: 400,
      color: '#737e8e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: '#9ba2ae',
          color: '#ffffff',
          // '&:hover': {
          //   backgroundColor: '#748089',
          // },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#46556a',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#46556a',
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#55bc8a',
          color: '#ffffff',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(54, 70, 93, 1)',
          borderBottom: '1px solid #46556a',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
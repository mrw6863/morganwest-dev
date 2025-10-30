import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E91E63', // Pink
      light: '#F06292', // Lighter pink
      dark: '#C2185B', // Darker pink
      contrastText: '#fff', // White text for contrast
    },
    secondary: {
      main: '#9C27B0', // Purple
      light: '#D500F9', // Lighter purple
      dark: '#7B1FA2', // Darker purple
      contrastText: '#fff', // White text for contrast 
    },
    background: {
      default: '#FCE4EC', // Soft pink background
      paper: '#F8BBD0', // Softer pink for paper elements
    },
    error: {
      main: '#D32F2F', // Red for error states
    },
    text: {
      primary: '#212121', // Dark text for readability
      secondary: '#757575', // Lighter text for less emphasis
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#E91E63', // Pink for headings
    },
    h2: {
      fontWeight: 600,
      color: '#9C27B0', // Purple for subheadings
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // More rounded buttons
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E91E63', // Pink
      light: '#F06292', // Lighter pink
      dark: '#C2185B', // Darker pink
      contrastText: '#fff', // White text for contrast
    },
    secondary: {
      main: '#9C27B0', // Purple
      light: '#D500F9', // Lighter purple
      dark: '#7B1FA2', // Darker purple
      contrastText: '#fff', // White text for contrast 
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1F1F1F', // Darker paper elements
    },
    error: {
      main: '#D32F2F', // Red for error states
    },
    text: {
      primary: '#E0E0E0', // Light text for dark mode
      secondary: '#B0BEC5', // Lighter text for less emphasis
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#E91E63', // Pink for headings in dark mode
    },
    h2: {
      fontWeight: 600,
      color: '#9C27B0', // Purple for subheadings
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // More rounded buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 50
        }
      }
    }
  },
});

export { lightTheme, darkTheme };

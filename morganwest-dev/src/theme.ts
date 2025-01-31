import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E91E63', // Strong pink
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
      primary: '#212121', // Dark text for better readability
      secondary: '#757575', // Lighter text for less emphasis
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#9C27B0', // Purple color for headings
    },
    h2: {
      fontWeight: 600,
      color: '#E91E63', // Pink color for subheadings
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

export default theme;

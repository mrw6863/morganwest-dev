import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import CareerPage from './components/CareerPage';

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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
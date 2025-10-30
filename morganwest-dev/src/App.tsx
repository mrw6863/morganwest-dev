import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import CareerPage from './pages/CareerPage';
import { lightTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? darkTheme : lightTheme);
  }, []);
  
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
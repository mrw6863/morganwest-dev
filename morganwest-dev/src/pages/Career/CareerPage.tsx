import React from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalWindow from './TerminalWindow/TerminalWindow';
import ExperienceContent from './ExperienceContent/ExperienceContent';

const CareerPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    // Map navigation targets to routes
    const routeMap: { [key: string]: string } = {
      'home': '/',
      'projects': '/projects',
      'contact': '/contact',
      'about': '/about',
      'skills': '/skills'
    };

    const route = routeMap[page.toLowerCase()];
    if (route) {
      navigate(route);
    }
  };

  return (
    <TerminalWindow onNavigate={handleNavigate}>
      <ExperienceContent />
    </TerminalWindow>
  );
};

export default CareerPage;
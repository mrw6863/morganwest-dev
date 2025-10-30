import React from 'react';
import { Typography, Container, Chip } from '@mui/material';

const Skills: React.FC = () => {
  const skills: string[] = ["React", "TypeScript", "Material-UI"];

  return (
    <Container>
      <Typography variant="h4">Skills</Typography>
      {skills.map((skill, index) => (
        <Chip label={skill} key={index} style={{ margin: '0.5rem' }} />
      ))}
    </Container>
  );
};

export default Skills;
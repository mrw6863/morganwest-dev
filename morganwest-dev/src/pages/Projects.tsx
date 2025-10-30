import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

interface Project {
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { title: "Project 1", description: "Project description" },
    // Add more projects here
  ];

  return (
    <Container>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
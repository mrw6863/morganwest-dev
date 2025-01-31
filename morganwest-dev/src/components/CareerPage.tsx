import React from 'react';
import { 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Chip 
} from '@mui/material';

interface CareerExperience {
  company: string;
  title: string;
  duration: string;
  location: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
}

const CareerPage: React.FC = () => {
  const experiences: CareerExperience[] = [
    {
      company: "WeTheHobby",
      title: "Full Stack Software Engineer",
      duration: "June 2022 - Present",
      location: "Remote",
      responsibilities: [
        "Lead development of internal software solutions",
        "Design and implement complex web applications",
        "Manage full software development lifecycle",
        "Collaborate with cross-functional teams"
      ],
      keyAchievements: [
        "Developed centralized dashboard and streaming platform",
        "Implemented repack system with advanced builder and validation",
        "Optimized application performance and user experience"
      ],
      technologies: [
        "TypeScript", "React", ".NET", "C#", 
        "SQL", "Postgres", "Azure DevOps", 
        "Git", "CSS", "vMix", "Bitfocus Companion"
      ]
    },
    {
      company: "Blackbaud",
      title: "Software Engineer",
      duration: "January 2022 - June 2022",
      location: "Charleston, SC",
      responsibilities: [
        "Develop grant management web applications",
        "Implement frontend and backend solutions",
        "Ensure high-quality code and performance"
      ],
      keyAchievements: [
        "Created sophisticated CRM system for nonprofit grant applications",
        "Implemented robust testing strategies",
        "Improved application scalability and user experience"
      ],
      technologies: [
        "TypeScript", "HTML", "SCSS", "ADO", 
        "Confluence", "Git", "Postgres", "SQL", "Playwright"
      ]
    }
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Professional Experience</Typography>
      
      {experiences.map((exp, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">{exp.company}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.title} | {exp.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.location}
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>Responsibilities</Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.responsibilities.map((resp, i) => (
                    <Typography key={i} component="li" variant="body2">
                      {resp}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>Key Achievements</Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.keyAchievements.map((achievement, i) => (
                    <Typography key={i} component="li" variant="body2">
                      {achievement}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Technologies</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.technologies.map((tech, i) => (
                    <Chip 
                      key={i} 
                      label={tech}  
                      size="small" 
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default CareerPage;

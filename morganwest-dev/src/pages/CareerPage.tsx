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
  skills: string[];
}

interface Education {
  institution: string;
  degree: string;
  date: string;
}

interface Certification {
  name: string;
  organization: string;
  date: string;
}

const CareerPage: React.FC = () => {
  const experiences: CareerExperience[] = [
    {
      company: "WeTheHobby",
      title: "Software Engineer",
      duration: "June 2023 - Present",
      location: "Rochester, NY",
      responsibilities: [
        "Led multiple products (Dashboard, Stream App) as Project Manager while contributing as a developer within a 4-member Agile team",
        "Spearheaded development of innovative repack system with builder, viewer, validation, and prize functionality",
        "Drove technical excellence as a full-stack developer by leading TypeScript migration initiatives",
        "Transformed Agile workflows through planning poker and retrospectives, managing 699+ work items with 72% completion rate",
        "Established robust documentation systems including ADO wiki and Notion dashboard",
        "Led development of streaming capabilities including face camera integration and ticker systems"
      ],
      skills: [
        "TypeScript", "JavaScript", "React", ".NET", "C#", 
        "SQL", "Postgres", "Azure DevOps", "Git", "CSS", 
        "vMix", "Bitfocus Companion", "Agile Project Management"
      ]
    },
    {
      company: "Blackbaud",
      title: "Software Engineer",
      duration: "May 2021 - September 2022",
      location: "Remote (Rochester, NY)",
      responsibilities: [
        "Developed grant application and management portals using TypeScript",
        "Engineered a sophisticated CRM system for nonprofit grant applications",
        "Drove implementation of automated testing infrastructure using Playwright",
        "Collaborated within a high-performing Agile team of five",
        "Mentored new interns for successful team integration"
      ],
      skills: [
        "TypeScript", "HTML", "SCSS", "ADO", 
        "Confluence", "Git", "Postgres", "SQL", "Playwright"
      ]
    }
  ];

  const education: Education[] = [
    {
      institution: "Rochester Institute of Technology",
      degree: "Software Engineering BS",
      date: "May 2023"
    }
  ];

  const certifications: Certification[] = [
    {
      name: "CAPM Certification Course",
      organization: "Project Management Institute",
      date: "Present"
    },
    {
      name: "SAFe Certification",
      organization: "Agile certified",
      date: "February 2022"
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
              
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Responsibilities</Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.responsibilities.map((resp, i) => (
                    <Typography key={i} component="li" variant="body2">
                      {resp}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Skills</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.skills.map((skill, i) => (
                    <Chip 
                      key={i} 
                      label={skill}  
                      size="small" 
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      <Typography variant="h3" gutterBottom>Education & Certifications</Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            {education.map((edu, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="h6">{edu.institution}</Typography>
                <Typography variant="body1">{edu.degree}</Typography>
                <Typography variant="body2" color="text.secondary">{edu.date}</Typography>
              </Grid>
            ))}
            
            {certifications.map((cert, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="h6">{cert.name}</Typography>
                <Typography variant="body1">{cert.organization}</Typography>
                <Typography variant="body2" color="text.secondary">{cert.date}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CareerPage;
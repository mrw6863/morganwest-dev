import React from 'react';
import { Box, Container, Typography, Grid, Paper, styled, ThemeProvider } from '@mui/material';
import { Person, Code, Palette, LocalCafe } from '@mui/icons-material';
import Header from './Header';
import { galleryTheme } from '../../galleryTheme';
import { experiences, education, certifications } from '../../info/experienceData';

const PageContainer = styled(Box)({
  minHeight: '100vh',
  backgroundColor: '#fafafa',
});

const HeroSection = styled(Box)(({ theme }) => ({
  paddingTop: '128px',
  paddingBottom: '80px',
  textAlign: 'center',
}));

const ExhibitCard = styled(Paper)(({ theme }) => ({
  padding: '48px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: 'none',
  transition: 'all 0.3s',
  height: '100%',
  '&:hover': {
    borderColor: '#000',
    '& .icon': {
      color: '#000',
    },
  },
}));

const QuoteSection = styled(Box)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '64px 48px',
});

const TimelineItem = styled(Box)({
  display: 'flex',
  gap: '32px',
  alignItems: 'flex-start',
  marginBottom: '48px',
});

const About: React.FC = () => {
  const exhibits = [
    {
      icon: <Person sx={{ fontSize: 32 }} />,
      title: 'Who I Am',
      description: 'A passionate developer crafting digital experiences that blend functionality with aesthetics. Based in the intersection of technology and creativity.',
    },
    {
      icon: <Code sx={{ fontSize: 32 }} />,
      title: 'What I Do',
      description: 'I build modern web applications with clean architecture and intuitive interfaces. Specializing in React, TypeScript, and contemporary design patterns.',
    },
    {
      icon: <Palette sx={{ fontSize: 32 }} />,
      title: 'My Approach',
      description: 'Every project is a canvas. I believe in minimal design, maximum impact, and code that reads like poetry.',
    },
    {
      icon: <LocalCafe sx={{ fontSize: 32 }} />,
      title: 'Beyond Code',
      description: "When not coding, you'll find me exploring art galleries, experimenting with new technologies, and continuously learning.",
    },
  ];

  return (
    <ThemeProvider theme={galleryTheme}>
      <PageContainer>
        <Header />
        
        {/* Hero Section */}
        <HeroSection>
          <Container maxWidth="lg">
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                color: '#666',
                mb: 2,
              }}
            >
              EXHIBITION
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4.5rem' },
                fontWeight: 200,
                letterSpacing: '-0.02em',
                mb: 3,
              }}
            >
              About Me
            </Typography>
            <Box
              sx={{
                width: '96px',
                height: '1px',
                backgroundColor: '#000',
                mx: 'auto',
              }}
            />
          </Container>
        </HeroSection>

        {/* Gallery Grid */}
        <Box sx={{ pb: 10 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {exhibits.map((exhibit, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ExhibitCard>
                    <Box
                      className="icon"
                      sx={{
                        color: '#999',
                        mb: 3,
                        transition: 'color 0.3s',
                      }}
                    >
                      {exhibit.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                        mb: 2,
                      }}
                    >
                      {exhibit.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#666',
                        fontWeight: 300,
                        lineHeight: 1.8,
                      }}
                    >
                      {exhibit.description}
                    </Typography>
                  </ExhibitCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Statement Section */}
        <Box sx={{ pb: 16 }}>
          <Container maxWidth="md">
            <QuoteSection>
              <Typography
                component="blockquote"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.875rem' },
                  fontWeight: 200,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  mb: 3,
                }}
              >
                "Design is not just what it looks like and feels like. Design is how it works."
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: '#999',
                }}
              >
                — STEVE JOBS
              </Typography>
            </QuoteSection>
          </Container>
        </Box>

        {/* Professional Journey Timeline */}
        <Box sx={{ pb: 16, backgroundColor: '#fff' }}>
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 300,
                letterSpacing: '0.05em',
                mb: 8,
                textAlign: 'center',
              }}
            >
              Professional Journey
            </Typography>
            
            <Box>
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      letterSpacing: '0.2em',
                      color: '#999',
                      minWidth: '80px',
                    }}
                  >
                    {exp.startDate.split('-')[0]}
                  </Typography>
                  <Box
                    sx={{
                      flexGrow: 1,
                      borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
                      pl: 4,
                      pb: 4,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 300,
                        mb: 0.5,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#999',
                        fontWeight: 300,
                        fontSize: '0.875rem',
                        mb: 1,
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#666',
                        fontWeight: 300,
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </Box>
                </TimelineItem>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Education Section */}
        <Box sx={{ pb: 16, backgroundColor: '#fafafa' }}>
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 300,
                letterSpacing: '0.05em',
                mb: 8,
                textAlign: 'center',
              }}
            >
              Education & Certifications
            </Typography>
            
            <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
              {education.map((edu, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                      mb: 0.5,
                    }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#666',
                      fontWeight: 300,
                      mb: 0.5,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#999',
                      fontWeight: 300,
                      fontSize: '0.875rem',
                    }}
                  >
                    {edu.date}
                  </Typography>
                </Box>
              ))}
              
              {certifications.map((cert, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                      mb: 0.5,
                    }}
                  >
                    {cert.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#666',
                      fontWeight: 300,
                      mb: 0.5,
                    }}
                  >
                    {cert.organization}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#999',
                      fontWeight: 300,
                      fontSize: '0.875rem',
                    }}
                  >
                    {cert.date}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </PageContainer>
    </ThemeProvider>
  );
};

export default About;
import React from 'react';
import { Card, CardContent, Grid, Typography, Box, Chip } from '@mui/material';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  company: string;
  title: string;
  duration: string;
  location: string;
  responsibilities: string[];
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  title,
  duration,
  location,
  responsibilities,
  skills,
}) => {
  return (
    <Card className={styles.card} elevation={0}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={styles.company}>{company}</Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
              {title} &nbsp;|&nbsp; {duration}
            </Typography>
            <Typography variant="body2" className={styles.location}>
              {location}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className={styles.sectionTitle}>Responsibilities</Typography>
            <Box component="ul" className={styles.responsibilityList}>
              {responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography className={styles.sectionTitle}>Skills</Typography>
            <Box className={styles.skillContainer}>
              {skills.map((skill, i) => (
                <Chip key={i} label={skill} size="small" className={styles.chip} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;

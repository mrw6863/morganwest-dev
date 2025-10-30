import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Morgan West
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        This website is currently under construction. For now, you can view my career section below.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" component={Link} to="/career">
          View Experience
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Morgan West
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <Button color="inherit" component={Link} to="/projects">Projects</Button>
      <Button color="inherit" component={Link} to="/skills">Skills</Button>
      <Button color="inherit" component={Link} to="/contact">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Header;

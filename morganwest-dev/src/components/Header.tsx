import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Adjust breakpoint if needed

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Morgan West
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
              {/* <MenuItem component={Link} to="/about" onClick={handleMenuClose}>About</MenuItem> */}
              <MenuItem component={Link} to="/career" onClick={handleMenuClose}>Career</MenuItem>
              {/* <MenuItem component={Link} to="/projects" onClick={handleMenuClose}>Projects</MenuItem> */}
              {/* <MenuItem component={Link} to="/skills" onClick={handleMenuClose}>Skills</MenuItem> */}
              {/* <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>Contact</MenuItem> */}
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
            {/* <Button color="inherit" component={Link} to="/about">About</Button> */}
            <Button color="inherit" component={Link} to="/career">Career</Button>
            {/* <Button color="inherit" component={Link} to="/projects">Projects</Button> */}
            {/* <Button color="inherit" component={Link} to="/skills">Skills</Button> */}
            {/* <Button color="inherit" component={Link} to="/contact">Contact</Button> */}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

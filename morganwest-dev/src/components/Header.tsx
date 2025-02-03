import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery, Button, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={"/white-icon.png"} 
              alt="Home" 
              style={{ height: '40px', width: 'auto' }} 
            />
          </Link>
          
          <Box sx={{ flexGrow: 1 }} />
          
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon sx={{ color: '#fff' }} />
              </IconButton>
              <Menu 
                anchorEl={anchorEl} 
                open={Boolean(anchorEl)} 
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
                <MenuItem component={Link} to="/career" onClick={handleMenuClose}>Career</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/career">Career</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
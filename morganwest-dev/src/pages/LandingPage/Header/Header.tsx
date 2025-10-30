import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery, 
  Button, 
  Box,
  TextField,
  Autocomplete,
  Chip
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import styles from './Header.module.css';

interface HeaderProps {
  onSearchChange?: (searchTerm: string) => void;
  onTagFilter?: (tags: string[]) => void;
  availableTags?: string[];
}

const Header: React.FC<HeaderProps> = ({ onSearchChange, onTagFilter, availableTags = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleTagChange = (_event: any, newValue: string[]) => {
    setSelectedTags(newValue);
    if (onTagFilter) {
      onTagFilter(newValue);
    }
  };

  return (
    <Box className={styles.headerContainer}>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Link to="/" className={styles.logoLink}>
            <img 
              src={"/morgan.png"} 
              alt="Home" 
              className={styles.logo}
            />
          </Link>
          
          <Box className={styles.spacer} />
          
          {!isMobile && (
            <>
              <Button 
                component={Link}
                to="/career"
                variant="contained"
                className={styles.button1}
              >
                Career
              </Button>
              
              <Button 
                component={Link}
                to="/about"
                variant="contained"
                className={styles.button2}
              >
                About
              </Button>
            </>
          )}
          
          {/* TODO: implement filtering below */}
          {/* {!isMobile ? (
            <Box className={styles.searchContainer}>
              <TextField
                placeholder="Search posts..."
                value={searchValue}
                onChange={handleSearchChange}
                size="small"
                className={styles.searchField}
              />
              
              <Autocomplete
                multiple
                options={availableTags}
                value={selectedTags}
                onChange={handleTagChange}
                size="small"
                className={styles.autocomplete}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Filter by tags"
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      label={option}
                      {...getTagProps({ index })}
                      size="small"
                      className={styles.chip}
                    />
                  ))
                }
              />
            </Box>
          ) : (
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon className={styles.menuIcon} />
            </IconButton>
          )} */}
          
          {isMobile && (
            <Menu 
              anchorEl={anchorEl} 
              open={Boolean(anchorEl)} 
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{
                className: styles.menu
              }}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/career">Career</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
              {/* TODO: Implement Filtering below */}
              {/* <Box className={styles.mobileSearchContainer}>
                <TextField
                  placeholder="Search posts..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  size="small"
                  fullWidth
                  className={styles.mobileSearchField}
                />
                <Autocomplete
                  multiple
                  options={availableTags}
                  value={selectedTags}
                  onChange={handleTagChange}
                  size="small"
                  fullWidth
                  className={styles.mobileAutocomplete}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Filter by tags"
                    />
                  )}
                />
              </Box> */}
            </Menu>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
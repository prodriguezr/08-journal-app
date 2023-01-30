import PropTypes from 'prop-types';
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        ml: { sm: `${drawerWidth}px` },
        width: { sm: `calc(100vw - ${drawerWidth}px)` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'>
            JournalApp
          </Typography>
          <IconButton color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

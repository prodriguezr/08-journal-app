import PropTypes from 'prop-types';
import { Box, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

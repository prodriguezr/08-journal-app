import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';

export const Sidebar = ({ drawerWidth }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6' component='div' noWrap>
            Pablo Rodríguez
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['January', 'February', 'March'].map((month) => (
            <ListItem key={month} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                  <Grid container>
                    <ListItemText primary={month} />
                    <ListItemText
                      secondary={'Reprehenderit mollit eu exercitation'}
                    />
                  </Grid>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

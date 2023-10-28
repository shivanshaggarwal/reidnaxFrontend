import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
  Avatar,
} from '@mui/material';

// react-router-dom
import { useLocation, useNavigate } from 'react-router-dom';

import defaultAvatar from '../assets/Images/defaultAvatar.png';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import GroupIcon from '@mui/icons-material/Group';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GradingIcon from '@mui/icons-material/Grading';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

// Styles
import { makeStyles } from '@mui/styles';


export const drawerWidth = 240;

const useStyles = makeStyles({
  sideBarActive: {
    backgroundColor: '#f0f0f0',
    borderRight: '3px solid #1976d2',
    color: '#1976d2',
  },
  sideBarActiveIcon: {
    color: '#1976d2'
  }
})

function Sidebar({ handleDrawerToggle, mobileOpen }) {

  const classes = useStyles();
  // const type = 0;


  const location = useLocation();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: 'Analytics',
      icon: <DashboardIcon />,
      link: '/account/analytics'
    },
    {
      label: 'Data',
      icon: <WorkspacesIcon />,
      link: '/account/data'
    },

  ]
  const drawer = (
    <div style={{ paddingTop: '5px', paddingLeft: '10px', paddingRight: '10px' }}>
      <Box sx={{ height: '3.70rem', borderBottom: "1px solid #000" }}>
        <Box sx={{ width: '100%', height: '3.25rem', display: 'flex', bgcolor: '#fafafa', justifyContent: 'space-around', alignItems: 'center', borderRadius: '10px' }}>
          <Avatar
            alt='user-image'
            variant="rounded"
            src={defaultAvatar}
            sx={{ width: 40, height: 40 }}
          />
          <Stack>
            <Typography variant='subtitle1' sx={{ fontWeight: "bold", fontFamily: "Public Sans,sans-serif" }}>Shivansh Aggarwal</Typography>
          </Stack>
        </Box>
      </Box>

    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
export default Sidebar;


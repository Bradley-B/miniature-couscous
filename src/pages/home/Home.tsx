import { useState, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { Dashboard } from '../dashboard/Dashboard';

type Page = 'devices' | 'dashboard' | 'settings';

const drawerWidth = 240;

const SidebarListIcon = (
  props: {
    icon: ReactNode,
    text: string,
    onClick: () => void,
  }
) => {
  return <ListItem disablePadding>
    <ListItemButton onClick={props.onClick}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItemButton>
  </ListItem>
}

const Home = () => {
  const [page, setPage] = useState<Page>('dashboard');

  const renderMainArea = () => {
    if (page === 'devices') return <div />;
    if (page === 'settings') return <div />;
    if (page === 'dashboard') return <Dashboard />;
    return <div />;
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Drag & Drop with MUI and react-grid-layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <SidebarListIcon
              icon={<StorageIcon />}
              text="Devices"
              onClick={() => setPage('devices')}
            />
            <SidebarListIcon
              icon={<SettingsIcon />}
              text="Settings"
              onClick={() => setPage('settings')}
            />
            <SidebarListIcon
              icon={<DashboardIcon />}
              text="Dashboard"
              onClick={() => setPage('dashboard')}
            />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderMainArea()}
      </Box>
    </Box>
  );
}

export default Home;

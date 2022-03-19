import { Campaign, Foundation, Password } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const drawerWidth = 240;

const MENU_CONFIG = [
  { label: 'Verbes', icon: <Foundation />, href: '/verbes' },
  { label: 'Pronountiations', icon: <Campaign />, href: '/pronounciations' },
  { label: 'Mots', icon: <Password />, href: '/mots' },
];

interface Props {
  open: boolean;
  handleDrawerToggle: () => void;
}

const DrawerComponent = (props: Props) => {
  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          🇫🇷 Mon Français
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {MENU_CONFIG.map((item, index) => (
          <a href={item.href} key={item.label}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={props.open}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;

import { Campaign, Handyman, Password } from '@mui/icons-material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import AppBarComponent from './layout/app-bar.component';
import DrawerComponent from './layout/drawer.component';
import FooterComponent from './layout/footer.component';
import HeadComponent from './layout/head.component';

const drawerWidth = 240;

const MENU_CONFIG = [
  { label: 'Verbes', icon: <Handyman /> },
  { label: 'Pronountiations', icon: <Campaign /> },
  { label: 'Mots', icon: <Password /> },
];

interface Props {
  children: React.ReactChild;
}

const LayoutComponent = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HeadComponent />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
        <DrawerComponent
          open={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {props.children}
          <FooterComponent />
        </Box>
      </Box>
    </>
  );
};

export default LayoutComponent;

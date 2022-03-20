import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ColorModeContext } from '../../pages/_app';

const drawerWidth = 240;

interface Props {
  handleDrawerToggle: () => void;
}

const AppBarComponent = (props: Props) => {
  const router = useRouter();

  const themeContext = React.useContext(ColorModeContext);

  const getCurrentPageName = () => {
    switch (router.route) {
      case '/':
        return 'Home';
      case '/verbes':
        return 'Verbes';
      case '/pronounciations':
        return 'Pronounciations';
      case '/mots':
        return 'Mots';
      default:
        return '/';
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {getCurrentPageName()}
          </Typography>
        </div>
        <IconButton
          sx={{ ml: 1 }}
          onClick={themeContext.toggleColorMode}
          color="inherit"
        >
          {themeContext.colorMode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;

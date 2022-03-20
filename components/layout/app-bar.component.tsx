import { Download } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useAddToHomescreenPrompt } from '../../hooks/add-to-home.hook';
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

  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  React.useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

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
        <div>
          {isVisible && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 4 }}
              startIcon={<Download />}
              onClick={promptToInstall}
            >
              Install
            </Button>
          )}
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;

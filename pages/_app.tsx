import { ThemeProvider } from '@emotion/react';
import { createTheme, PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import type { AppContext, AppProps } from 'next/app';
import React from 'react';
import LayoutComponent from '../components/layout.component';
import '../styles/globals.css';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  // const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <LayoutComponent
          toggleColorMode={colorMode.toggleColorMode}
          colorMode={theme.palette.mode}
        >
          <Component {...pageProps} />
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

MyApp.getInitialProps = async (props: AppContext) => {
  // redirect to 'home' if wrong path
  const { ctx } = props;
  if (ctx?.res?.statusCode === 404) {
    ctx?.res?.writeHead(301, { Location: '/' });
    ctx?.res?.end();
  }
  return {};
};

export default MyApp;

import { ThemeProvider } from '@emotion/react';
import { createTheme, PaletteMode } from '@mui/material';
import type { AppContext, AppProps } from 'next/app';
import React from 'react';
import LayoutComponent from '../components/layout.component';
import {
  FRANCE_BLUE,
  FRANCE_BLUE_LIGHT,
  FRANCE_RED,
} from '../constants/colors';
import '../styles/globals.css';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  colorMode: 'light',
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: FRANCE_BLUE },
          secondary: { main: FRANCE_RED },
        }
      : {
          primary: { main: FRANCE_BLUE_LIGHT },
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
      colorMode: mode,
    }),
    [mode]
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <LayoutComponent>
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

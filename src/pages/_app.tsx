import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default MyApp;

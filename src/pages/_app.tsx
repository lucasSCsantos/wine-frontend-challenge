import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Wine Challenge</title>
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default MyApp;

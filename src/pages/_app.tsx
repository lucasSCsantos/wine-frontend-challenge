import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../store";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;

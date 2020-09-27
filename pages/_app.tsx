import App from "next/app";
import ElectionProvider from "../components/electionContext";
import { createGlobalStyle } from "styled-components";
import { Fragment } from "react";

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
}


`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <GlobalStyle />
        <ElectionProvider>
          <Component {...pageProps} />
        </ElectionProvider>
      </Fragment>
    );
  }
}

export default MyApp;

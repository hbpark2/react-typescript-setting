import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme, GlobalStyle } from "../Styles";
import Header from "../Layout/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

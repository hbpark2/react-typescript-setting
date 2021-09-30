import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  basicWidth: "320px",

  color: {
    main: "#1c1f25",
    sub: "#fff",
  },
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

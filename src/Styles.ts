import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";
import reset from "styled-reset";
import BGIMAGE from "./assets/bg-image.jpeg";

export const defaultTheme: DefaultTheme = {
  black: "#333",
  shadow_1: "3px 3px 4px rgba(0,0,0,0.2)",
  shadow_2: " 3px 3px 4px rgba(0, 0, 0, 0.2), -3px -3px 4px rgba(0, 0, 0, 0.2)",
  layout_bgcolor: "rgba(0,0,0, 0.4)",
};

export const GlobalStyle = createGlobalStyle`
  ${reset};

  input, button{
    all: unset;
  }

  li{
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height:100%;
  }

  #wrapper{
    min-height:100vh;
    background: url("${BGIMAGE}") no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position:center;
  }
  main{
    padding-top:180px;
  }
  * {
    box-sizing: border-box;
  }
`;

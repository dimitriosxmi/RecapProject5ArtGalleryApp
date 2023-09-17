import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
    margin: 0 auto;
    width: 100vw;
    font-family: Helvetica, sans-serif, Arial;
    background-color: lightgray;
  }

`;

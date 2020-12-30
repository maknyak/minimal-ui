/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from "styled-components";

createGlobalStyle`
    html {
      box-sizing: border-box;
      font-size: 1rem;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
`;

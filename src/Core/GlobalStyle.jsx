import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      color: #525f7f;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      margin: 0;
      padding: 0;
      text-align: left;
    }
`;

export default GlobalStyle;

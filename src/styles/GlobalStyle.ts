import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #121214;
    color: #e1e1e6;
    font-family: 'Inter', sans-serif; 
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    margin: 0;
    padding: 0;
    font-family: Noto Sans;
  }

  p {
      margin: 0;
  }
  
  input {
    padding: 0;
  }
`;

export default GlobalStyle;

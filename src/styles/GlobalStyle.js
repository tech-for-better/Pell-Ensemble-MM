import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
    --purple: #6A4EE0;
    --black: #252525;
    --white: #fff;
    --borderRadius: 20px;
    --shadow: inset 0px 0px 0px 7px var(--black), 12px 12px 0px var(--black);
  }

  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    /* background-color: var(--purple); */
  }
  `;

  export default GlobalStyles;
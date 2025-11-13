// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-teal: #2C6E80;
    --accent-mint: #3DD5A1;
    --button-green: #02BEAF; // From PrimaryButton
    --dark-grey: #4A4A4A;
    --background: #F6F8FC;
    --white: #FFFFFF;
    
    --gradient-light-blue: #6AACBF;
    --gradient-dark-blue: #1F465A;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
  }

  * {
    box-sizing: border-box;
  }
`;
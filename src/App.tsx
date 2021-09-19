import React from 'react';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import Navbar from './components/navbar/Navbar';

const theme: DefaultTheme = {
    colors: {
        colorPrimary: '#5496bf',
        colorPrimaryDark: '#1273af',
        colorPrimaryLight: '#79c7d9',
        colorAccent: '#d9cba3',
        colorDark: '#0c1d40',
        colorMedium: '#224573',
        colorGray: '#babfc3',
        colorGold: '#FEDE58',
        colorSilver: '#9d9e9e',
        colorBronze: '#CD7F32',
    },
};

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  input {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
  }
`;

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar>Hello There!</Navbar>
        </ThemeProvider>
    );
};
export default App;

import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar/Navbar';

const theme = {
    colorPrimary: 'rgba(84, 150, 191, 1)',
    colorPrimaryLight: 'rgba(121, 199, 217, 1)',
    colorAccent: 'rgba(217, 203, 163, 1)',
    colorDark: 'rgba(12, 29, 64, 1)',
    colorMedium: 'rgba(34, 69, 115, 1)',
    colorGray: 'rgb(186,191,195)',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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

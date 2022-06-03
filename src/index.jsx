import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import { theme } from './styles/theme';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ theme }}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
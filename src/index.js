import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-ASU/">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
            <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);



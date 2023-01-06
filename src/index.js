import 'normalize.css';
import { GlobalStyle } from 'GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
            <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


//basename="/react-ASU/"
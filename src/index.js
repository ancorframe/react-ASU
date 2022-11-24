import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
// import { persistor, store } from './Redux/store';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-ASU/">
      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
          {/* </PersistGate> */}
        {/* </Provider> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

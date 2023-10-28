import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './components/GlobalStyles';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

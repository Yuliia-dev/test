import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from 'components/App/App.jsx';
import './index.css';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/test/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

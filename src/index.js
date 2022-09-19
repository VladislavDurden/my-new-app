import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from "./routes/routes";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

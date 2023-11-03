import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ThemeContextProvider } from './services/theme.service';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

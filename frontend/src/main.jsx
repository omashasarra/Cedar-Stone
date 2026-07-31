import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import './index.css';
import App from './App.jsx';

const savedLang = localStorage.getItem('cedarstone_lang') || 'en';
document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = savedLang;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

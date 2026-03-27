import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CountextProvider } from './components/TemaProvider/index.jsx';
import { AnalisadorProvider } from './components/AnalisadorProvider/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountextProvider>
      <AnalisadorProvider>
        <App />
      </AnalisadorProvider>
    </CountextProvider>
  </StrictMode>,
)

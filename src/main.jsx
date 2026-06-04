import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'
import { ThemeContextProvider } from './context/themeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'
import { ThemeContextProvider } from './context/themeContext';
import Form from "./latihan/Form.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <Form />
    </ThemeContextProvider>
  </StrictMode>,
)

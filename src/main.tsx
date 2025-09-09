import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from "./GlobalStyle";
import Home from './pages/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)

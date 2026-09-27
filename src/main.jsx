import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { RolProvider } from './context/RolContext.jsx'
import { ExpedientesProvider } from './context/ExpedientesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RolProvider>
        <ExpedientesProvider>
          <App />
        </ExpedientesProvider>
      </RolProvider>
    </BrowserRouter>
  </StrictMode>,
)

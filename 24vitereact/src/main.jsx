import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <App />                        
    </CounterProvider>
  </StrictMode>,
)

// ab <App /> component ke andar kitne bhi components aayenge wo sabko Context ka access milega
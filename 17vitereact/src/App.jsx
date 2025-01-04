import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { useState } from 'react'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('magenta')

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={{height: '40rem', width: '40rem', border: 'border 1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: `${theme}`}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
export { ThemeContext }
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// hooks come from import {useState,...., ...., ....} from 'react'
// useState HOOK -> Returns a stateful value, and a function to update it.

function App() {
  let [counter, setCounter] = useState(0)
  // State variable: counter ek variable hai jo state ka current value rakhta hai.
  // Setter function: setCounter ek function hai jo counter ko update karne ke liye use hota hai.
  // Initial value: Aap counter ko uska current value de rahe ho (counter).

  const addValue = () => {
    setCounter(counter + 1)
    // if(counter < 10) setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    // if(counter > 0) setCounter(counter-1)
  }

  return (
    <>
      <h1>synCodx React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value {counter}</button><br />
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
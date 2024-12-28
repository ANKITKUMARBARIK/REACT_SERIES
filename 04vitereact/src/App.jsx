import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Interview Questions
function App() {
  let [counter, setCounter] = useState(0)

  const addValueTest = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    // React me state updates asynchronous(delayed) hoti hain, yani immediate update nahi hoti.Jab tum multiple setCounter calls karte ho, React inhe batched(grouped) kar leta hai.Iska matlab hai ki har ek setCounter(counter + 1) call me, tumhara state value old counter ki value ke saath update hota hai, aur React sirf last update ko apply karta hai.
  }

  const addValue = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    //setCounter accept CallBack. setCounter ek updater function hai jo React me state ko update karta hai.prevCounter => prevCounter + 1 ek function hai jo pichli value(prevCounter) ko lekar nayi value(prevCounter + 1) return karta hai. Ye approach React ko bataata hai ki tumhare update ka base value kya hai, aur React ko har ek update ke baad updated value milegi. It is possible using CallBack. 
  }

const removeValue = () => {
  setCounter(counter - 1)
}

return (
  <>
    <h1>Counter : {counter}</h1>
    <button onClick={addValueTest}>Increase Test</button>
    <button onClick={addValue}>Increase</button>
    <button onClick={removeValue}>Decrease</button>
  </>
)
}

export default App

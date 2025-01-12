import { useRef, useState } from 'react'
import './App.css'

// React mein useRef ek hook hai jo functional components ke andar ek mutable reference create karne ke kaam aata hai. Iska primary use DOM elements ko directly access karna ya kisi value ko preserve karna hota hai jo component ke re-render hone par change nahi hoti.

function App() {
  const [count, setCount] = useState(0)
  let val = useRef(0)    // let val = 0

  const handleClick = () => {
    val.current = val.current + 1       // val = val + 1
    console.log('Value of val : ', val.current)    //console.log(val)
    setCount(count + 1)
  }

  let btnRef = useRef()

  const changeColor = () => {
    btnRef.current.style.background = 'red'
  }

  return (
    <>
      <h1>useRef</h1>
      <h1>Count : {count}</h1>
      <button ref={btnRef} onClick={handleClick}>Increment</button>
      <br /><br />
      <button onClick={changeColor}>Change Color of 1st button</button>
    </>
  )
}

export default App

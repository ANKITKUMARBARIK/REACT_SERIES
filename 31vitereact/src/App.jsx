import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

// useRef ka yahan kaam timer ko track karna aur setInterval ke id ko safely manage karna hai, taki:

// Timer ko control kar sako:
// useRef ka current property ek mutable reference hold karta hai. Jab aap setInterval call karte ho, toh uska ek unique id return hota hai. Ye id aapko clearInterval mein use karni hoti hai timer ko stop karne ke liye.

// Agar aap useRef ki jagah ek normal variable use karte (jaise let), toh wo re-renders ke baad reset ho jata, aur aapka timer control properly kaam nahi karta.

// Re-renders avoid karna:
// useRef re-renders ke beech apni value ko change kar sakta hai bina component ko dubara re-render kiye. Agar aap useState se timer ID manage karte, toh har render par state update karni padti, jo unnecessary renders cause karta.

function App() {
  const [timer, setTimer] = useState(0)
  let timeRef = useRef(null)

  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }
  const handleStop = () => {
    clearInterval(timeRef.current)
    timeRef.current = null
  }
  const handleReset = () => {
    handleStop()
    setTimer(0)
  }
  return (
    <>
      <h1>StopWatch : {timer} seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App

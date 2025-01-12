import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

// React mein useMemo ek hook hai jo expensive calculations ko optimize karne ke liye use hota hai. Iska main kaam ye ensure karna hai ki koi computation sirf tabhi re-run ho jab uske dependencies change karein, warna wo cached value return kare.

// Key Points about useMemo:

// Memoization:
// Ye ek value ko cache karta hai jab tak uski dependencies ([dependencies]) change na ho.

// Performance Optimization:
// Ye sirf unhi scenarios mein useful hai jahan koi expensive computation baar-baar re-run ho raha ho bina zarurat ke.

// Dependencies Array:
// Agar aap dependencies array na dein, to ye har render par computation karega, jo useMemo ka purpose defeat kar deta hai.

// Avoid Overuse:
// Agar computation lightweight hai, to useMemo use karna overkill ho sakta hai. Sirf heavy operations ya unnecessary renders avoid karne ke liye hi use karein.



function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num) {
    console.log('Inside expensive task ', Date.now())
    return num * 2
  }

  useMemo(() => {
    expensiveTask(input)
  }, [input])

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <br /><br />
      <input onChange={(e) => setInput(e.target.value)} type="number" />
    </>
  )
}

export default App

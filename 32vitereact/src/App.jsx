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
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [input, setInput] = useState(0)

  const handleClick1 = () => {
    console.log('mein atak rha hu bhai ')
    setCount1(count1 + 1)
  }

  const handleClick2 = () => {
    console.log('but mein nhi atakne wala')
    setCount2(count2 + 1)
  }

  const expensiveFunc = () => {
    console.log('expensive calc functions')
    let total = 0
    for (let i = 1; i < 1000000000; i++) {
      total += i
    }
    return total
  }
  // let sum = expensiveFunc()
  let sum = useMemo(() => {
    expensiveFunc()
  }, [count1])

  // 

  const handleInput = (e) => {
    console.log('input re-render ', Date.now())
    setInput(e.target.value)
  }

  const expensiveTask = (num) => {
    console.log('expensive task')
    for (let i = 1; i < 1000000000; i++) { }
    return num * 2
  }

  let check = useMemo(() => {
    expensiveTask(input)
  },[input])



  return (
    <>
      <h1>CountOne : {count1}</h1>
      <button onClick={handleClick1}>ClickOne</button>
      <br /><br />
      <h1>CountTwo : {count2}</h1>
      <button onClick={handleClick2}>ClickTwo</button>
      <br /><br />

      <input onChange={handleInput} type="number" />
      <h2>{input}</h2>
      <h2>{sum}</h2>
      <h2>{check}</h2>
    </>
  )
}

export default App

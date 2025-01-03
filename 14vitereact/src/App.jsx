import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

// first -> side-effect function
// second -> clean-up function
// third -> comma separated dependency list..
// useEffect -> execute before render ......
function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  // variation : 1
  // runs on every render
  // useEffect(()=>{
  //   alert('I will run on each render')
  // })


  // variation : 2
  // that runs on only first render
  // useEffect(()=>{
  //   alert('I will run on only first render')
  // },[])


  // variation : 3
  // run every time when [dependencies] is updated
  // useEffect(()=>{
  //   alert('I will run every time when count is updated')
  // },[count])


  // variation: 4
  // run every time when multiple [dependencies] is updated
  // useEffect(() => {
  //   alert('I will run every time when count/total is updated')
  // }, [count,total])


  // variation: 3
  // iss baar let's add a cleanup function
  // harr re-render pe purana wala count hatt rha h aur naya count aarha h
  // useEffect(()=>{
  //   alert('Count is updated')
  //   return(()=>{
  //     alert('Count is unmounted from UI')
  //   })
  // },[count])
  



  function handleClick() {
    setCount(count + 1)
  }

  function handleTotal() {
    setTotal(total + 1)
  }

  return (
    <>
      <h1>useEffect</h1>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click Me</button>
      <br /><br />
      <h1>Total : {total}</h1>
      <button onClick={handleTotal}>Total Me</button>
    </>
  )
}

export default App
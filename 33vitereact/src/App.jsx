import { useCallback, useState } from 'react'
import './App.css'
import ChildA from './ChildA'

function App() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState([])

  const func = useCallback(() => {
    console.log('hello dude')
  }, [countTwo])

  const name = 'ankit'    //isko `memo` handle kr leta h but function ko nhi kr pata

  return (
    <>
      <h1>useCallback</h1>
      <h1>Count : {countOne}</h1>
      <button onClick={() => setCountOne(countOne + 1)}>Increment</button>

      <ChildA countTwo={countTwo} func={func} name={name} />

    </>
  )
}

export default App

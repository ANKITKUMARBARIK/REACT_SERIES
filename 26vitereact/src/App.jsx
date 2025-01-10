import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counter/CounterSlice'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch(increment())
  }
  function handleDecrement(){
    dispatch(decrement())
  }
  function handleReset(){
    dispatch(reset())
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br /><br />
      <h1>{amount}</h1>
      <input type="number" value={amount} placeholder='enter amount' onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleIncAmountClick}>Increment By Amount</button>
    </>
  )
}

export default App

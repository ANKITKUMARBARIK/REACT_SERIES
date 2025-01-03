import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <>
      <Card>
        <h1>Test Web Dev</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the series soon</p>
      </Card>
      <Card children='Mein ek children hu'>
        {/* Hello Hackathon Team */}
      </Card>
      {/* <Button > */}
      <Button incrementCount={handleClick} text='Click Me'>
        <h1>Count: {count}</h1>
      </Button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // create state
  // manage state
  // change state
  // sabhi child mein state ko change krwadunga
  const [name, setName] = useState('')
  return (
    <>
    {/* Child */}
    <Card title="Card" name = {name} setName = {setName}/>

    {/* Parent */}
    Parent : <input type="text" value={name}/>
    <p>I am inside parent component and value of name is {name}</p>
    </>
  )
}

export default App

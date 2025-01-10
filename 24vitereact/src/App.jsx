import { useContext } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { CounterContext } from './context/CounterContext'

function App() {
  const data = useContext(CounterContext)

  return (
    <>
      <div>
        <h2>{data.title}</h2>
        <h1>Count : {data.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App

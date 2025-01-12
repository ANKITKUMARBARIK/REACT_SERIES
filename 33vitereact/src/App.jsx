import { useCallback, useState } from 'react'
import './App.css'
import ChildA from './ChildA'

// useCallback ek React hook hai jo ek function ko memoize karta hai, yaani usse repeat computation se bachata hai. Iska use tab kiya jata hai jab aap kisi function ko child component ko prop ke roop mein pass kar rahe ho, aur aap nahi chahte ki har render ke saath wo function dobara se banaye.

// Jab aap useCallback ka use karte ho, to React function ko wahi reference dene ki koshish karta hai, jab tak ki dependencies nahi badalti hain. Isse unnecessary re-renders aur computations bachti hain.

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

import { useState } from 'react'
import Netflix from './components/Netflix'
import './components/Netflix.css'

function App() {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">List of Best Netflix Series</h1>
        <ul className="grid grid-three-cols">
          <Netflix />
        </ul>
      </section>
    </>
  )
}

export default App

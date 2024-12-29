import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [lengthAllowed, setLength] = useState(8)
  const [charAllowed, setChar] = useState(false)
  const [numberAllowed, setNumber] = useState(false)
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*+-_={}[]`~"
    for (let i = 1; i <= lengthAllowed; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [lengthAllowed, charAllowed, numberAllowed, setPassword])

  const copyClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [lengthAllowed, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full mx-auto shadow-md rounded-lg px-8 pt-2 pb-7 text-orange-500 bg-gray-800'>
        {/* Heading */}
        <h1 className='text-white text-center my-7 text-2xl'>PASSWORD GENERATOR</h1>
        {/* Password Gen */}
        <div className='flex shadow rounded-xl overflow-hidden mb-4 '>
          <input ref={passwordRef} type="text" value={password} className='outline-none w-full py-3 px-4' placeholder='Password' readOnly />
          <button onClick={copyClipboard()} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        {/* Input Buttons */}
        <div className='flex text-xl gap-x-2 place-content-evenly'>
          <div className="flex items-center gap-x-1">
            <input onChange={(e) => { setLength(e.target.value) }} type="range" min={6} max={100} value={lengthAllowed} className="cursor-pointer" />
            <label htmlFor="">Length: {lengthAllowed}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input onChange={() => { setNumber((prev) => !prev) }} type="checkbox" defaultChecked={numberAllowed} id='numberInput' />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input onChange={() => { setChar((prev) => !prev) }} type="checkbox" defaultChecked={charAllowed} id='characterInput' />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

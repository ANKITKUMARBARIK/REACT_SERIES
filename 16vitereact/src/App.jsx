import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// Step 1: Create a Context for User using 'createContext
// Step 2: Wrap all the child inside a provider
// Step 3: Pass variable using 'value'
// if u pass multiple :- <UserContext.Provider value={{user, setUser}}>
// Step 4: Consumer ke andar jake consume krlo using 'useContext'

// Step 1: Create a Context for User using 'createContext'
const UserContext = createContext()

function App() {
  const [user, setUser] = useState({ username: 'admin', pass: '231' })

  return (
    <>
      {/* Step 3: Pass variable using 'value' */}
      <UserContext.Provider value={user}>
        {/* Step 2: Wrap all the child inside a provider */}
        <ChildA />
      </UserContext.Provider>

    </>
  )
}

export default App
export {UserContext}
import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

// Conditional Rendering - 4 ways
function App() {
  const [isLoggedIn, setAdmin] = useState(false)

  if (isLoggedIn) {
    return (
      <>
        <h1>Method 1 :- </h1>
        <input type="text" placeholder="username" /><br />
        <input type="password" placeholder="password" /><br />
        <LogoutBtn setLoggedOut={setAdmin} />
      </>
    )
  } else {
    return (
      <>
        <h1>Method 1 :- </h1>
        <input type="text" placeholder="create username" /><br />
        <input type="password" placeholder="create password" /><br />
        <input type="password" placeholder="confirm password" /><br />
        <LoginBtn setLoggedIn={setAdmin} />
      </>
    )
  }


  // if (!isLoggedIn) {
  //   return (
  //     <>
  //       <h1>Method 2 :- </h1>
  //       <LoginBtn />
  //     </>
  //   )
  // }



  // return (
  //   <>
  //     <h1>Method 3 :- </h1>
  //     {isLoggedIn ? <LogoutBtn setLoggedOut={setAdmin} /> : <LoginBtn setLoggedIn={setAdmin} />}
  //   </>
  // )


  // return (
  //   <>
  //   <h1>Method 4 :- </h1>
  //   {isLoggedIn && <LogoutBtn setLoggedOut={setAdmin} />}
  //   </>
  // )
}

export default App

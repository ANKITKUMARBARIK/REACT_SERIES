import { useContext } from 'react'
import './App.css'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { UserContext } from './context/UserContext'

function App() {
  const { name } = useContext(UserContext)

  return (
    <>
      <h1>{name}</h1>
      <Login />
      <Profile />
    </>
  )
}

export default App

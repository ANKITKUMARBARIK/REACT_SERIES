import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const route = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
    </>
  },
  {
    path: '/about',
    element: <>
      <Navbar />
      <About />
    </>
  },
  {
    path: '/contact',
    element: <>
      <Navbar />
      <Contact />
    </>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App

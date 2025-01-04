import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Param from './components/Param'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    path: '/dashboard',
    element: <>
    <Navbar />
    <Dashboard />
    </>
  },
  // useParams
  {
    path: '/:id',
    element: <>
    <Navbar />
    <Param />
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

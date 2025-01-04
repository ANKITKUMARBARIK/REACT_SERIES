import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Param from './components/Param'

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
  // useParams
  {
    // path: '/:id',
    path: '/student/:id',
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

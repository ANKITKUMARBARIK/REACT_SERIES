import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Param from './components/Param'
import Courses from './components/Courses'
import MockTests from './components/MockTests'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
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
    </>,
    // Nested Routing using <Outlet /> in parent component -> (check Dashboard Component) and  ->  Do not use '/' in path
    children: [
      {
        path: 'courses',
        element: <>
          <Courses />
        </>
      },
      {
        path: 'mocktests',
        element: <>
          <MockTests />
        </>
      },
      {
        path: 'reports',
        element: <>
          <Reports />
        </>
      }
    ]
  },
  // useParams
  {
    path: '/:id',
    element: <>
      <Navbar />
      <Param />
    </>
  },
  // Handle (404 Not Found) Page using * in path
  {
    path: '*',
    element: <>
      <NotFound />
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

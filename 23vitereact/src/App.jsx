import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'
import Githubloader from './components/Githubloader'

// easy format to create router
const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route loader={Githubloader} path='/github' element={<Github />} />
      </Route>
    </>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App

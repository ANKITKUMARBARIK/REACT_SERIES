import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <>
      <h1>Custom App !</h1>
    </>
  )
}

const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'admin power'
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser   // variables injected
  // ......
  // .....
)

  // <App />
  // <MyApp />
  // ReactElement
  // anotherElement
  // reactElement
createRoot(document.getElementById('root')).render(
  <App />
)
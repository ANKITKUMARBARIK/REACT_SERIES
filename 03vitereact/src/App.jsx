import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "admin",
    pass: 231
  }

  let myArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg ">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      {/* <Card channel = "syncodx" someObj={myObj} someArr={myArr} /> */}
      <Card userPage = "SignUp" userBtn = "Sign Up" />
      <Card userPage = "LogIn" userBtn = "Log In" />
      {/* Suppose my one team member forgot to put userBtn..then we can give the default value.. in Card.jsx  */}
      <Card userPage = "Register" />
      
      
      
    </>
  )
}

export default App

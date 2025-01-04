import React from 'react'
import { useNavigate } from 'react-router-dom'

// useNavigate
function Home() {
    const navigate = useNavigate()

    function handleClick(){
        navigate('/about')
    }

    return (
        <>
        <h1>Home</h1>
        <button onClick={handleClick}>Move to About Page</button>
        </>
    )
}

export default Home
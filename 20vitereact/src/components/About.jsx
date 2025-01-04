import React from 'react'
import { useNavigate } from 'react-router-dom'

// useNavigate
function About() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/dashboard')
    }

    return (
        <>
            <h1>About</h1>
            <button onClick={handleClick}>Move to Dashboard Page</button>
        </>
    )
}

export default About
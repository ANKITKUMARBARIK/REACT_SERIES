import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Timer() {
    const [second, setSecond] = useState(0)

    useEffect(() => {
        const stopTime = setInterval(() => {
            setSecond(second => second + 1)
            console.log('setInterval updated')
        }, 1000)
        return(()=>{
            clearInterval(stopTime)
            console.log('setInterval unmounted')
        })
    }, [])
    return (
        <h1>Second : {second}</h1>
    )
    // it will run only on first render
}

export default Timer
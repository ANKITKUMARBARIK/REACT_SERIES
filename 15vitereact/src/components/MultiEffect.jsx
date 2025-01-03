import React, { useEffect, useState } from 'react'

function MultiEffect() {
    const [count, setCount] = useState(0)
    const [second, setSecond] = useState(0)

    useEffect(()=>{
        console.log('Count changed : ',count)
    },[count])
    // side-effect logic is run when count is changed

    useEffect(()=>{
        const stopTime = setInterval(()=>{
            setSecond(second=> second + 1)
            console.log('setInterval started')
        },1000)
        return(()=>{
            clearInterval(stopTime)
            console.log('setInterval stopped')
        })
    },[])
    // it will run only on first render

    return (
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Click Me</button>
        <br /><br />
        <h1>Seconds : {second}</h1>
        </>
    )
}

export default MultiEffect
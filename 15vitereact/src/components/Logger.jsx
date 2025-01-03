import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Logger() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('Component rendered or Count updated : ',count)
    })
    return (
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
        </>
    )
    // it will runs on every render
}

export default Logger
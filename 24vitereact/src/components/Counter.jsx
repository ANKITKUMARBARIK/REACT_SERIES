import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export const Counter = () => {
    const data = useContext(CounterContext)

    return (
        <>
        <div>
            <button onClick={()=>data.setCount(data.count + 1)}>Increment</button>
            <button onClick={()=>data.setCount(data.count - 1)}>Decrement</button>
        </div>
        </>
    )
}

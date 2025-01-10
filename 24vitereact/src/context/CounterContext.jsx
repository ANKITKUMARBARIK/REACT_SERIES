import React, { createContext, useState } from "react";

// create own counter context
export const CounterContext = createContext()

// after create provider
export const CounterProvider = (props) => {
    // let's create the state
    const [count, setCount] = useState(0)

    return (
        <CounterContext.Provider value={{ count, setCount, title: 'Context API' }}>
            {props.children}
        </CounterContext.Provider>
    )
}

// Behind the scene (props) ke andar App.jsx aarha h main.jsx se...kyuki waha mene ...ye kia h - 
{/* <CounterProvider>
    <App />
</CounterProvider> */}
import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'

// U can destructuring
// const {theme, setTheme} = useContext(ThemeContext)
function ChildC() {
    const data = useContext(ThemeContext)

    const genColor = () => {
        let hex = '0123456789ABCDEF'
        let color = '#'
        for(let i=0;i<6;i++){
            color += hex[Math.floor(Math.random() * 16)]
        }
        return color
    }
    return (
        <>
            <h1>useContext Practice 🥂</h1>
            <h1>{data.theme}</h1>
            <button onClick={()=> data.setTheme(genColor)}>Change Theme</button>
        </>
    )
}

export default ChildC
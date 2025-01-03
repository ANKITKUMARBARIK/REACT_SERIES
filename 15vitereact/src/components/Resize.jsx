import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Resize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        console.log('Event listener added')

        return (() => {
            window.removeEventListener('resize', handleResize)
            console.log('Event listener removed')
        })
    }, [])
    // it will run only on first render

    return (
        <>
            <h1>Window Width : {windowWidth}px</h1>
        </>
    )
}

export default Resize
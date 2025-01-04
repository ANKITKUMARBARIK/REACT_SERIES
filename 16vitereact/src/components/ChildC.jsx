import React, { useContext } from 'react'
import { UserContext } from '../App'

// const { user, setUser } = useContext(UserContext); // Access user and setUser
function ChildC() {
    // Step 4: Consumer ke andar jake consume krlo using 'useContext'
    const data = useContext(UserContext)

    return (
        <>
        <h1>useContext 🥂</h1>
        <h1>{data.username}</h1>
        <h1>{data.pass}</h1>
        </>
    )
}

export default ChildC
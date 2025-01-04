import React, { useContext } from 'react'
import ChildB from './ChildB'
import { UserContext } from '../App'

function ChildA() {
    // Step 4: Consumer ke andar jake consume krlo using 'useContext'
    const data = useContext(UserContext)

    return (
        <>
        <ChildB />
        <h1>Hello : {data.username}</h1>
        </>
    )
}

export default ChildA
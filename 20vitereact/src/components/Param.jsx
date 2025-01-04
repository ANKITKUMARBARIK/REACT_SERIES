import React from 'react'
import { useParams } from 'react-router-dom'

function Param() {
    const {id} = useParams()
    
    return (
        <div>Params : {id}</div>
    )
}

export default Param
import React from 'react'

function Card(props) {
    return (
        <>
        {/* <div>{props.name}</div> */}
        <div>{props.children}</div>
        </>
    )
}

export default Card
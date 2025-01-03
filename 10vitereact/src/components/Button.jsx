import React from 'react'

function Button(props) {
    return (
        <>
            <h1>{props.children}</h1>
            <button onClick={props.incrementCount}>
                {props.text}
            </button>
        </>
    )
}

export default Button
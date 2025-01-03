import React from 'react'

function LoginBtn(props) {
    return (
        <button onClick={(e)=>props.setLoggedIn(e)}>Login</button>
    )
}

export default LoginBtn
import React from 'react'

function LogoutBtn(props) {
    return (
        <button onClick={(e)=>props.setLoggedOut(!e)}>Logout</button>
    )
}

export default LogoutBtn
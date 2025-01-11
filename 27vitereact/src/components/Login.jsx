import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const Login = () => {
    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        setUser({username, password})
    }

    return (
        <>
            <div>
                <h2>Login</h2>
                <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

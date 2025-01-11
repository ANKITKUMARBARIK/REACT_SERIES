import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}

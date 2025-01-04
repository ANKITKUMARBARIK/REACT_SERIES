import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to='/' className={({isActive}) => isActive? 'active-link' : ''}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => isActive? 'active-link' : ''}>About</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard' className={({isActive}) => isActive? 'active-link' : ''}>Dashboard</NavLink>
            </li>
        </ul>
    )
}

export default Navbar
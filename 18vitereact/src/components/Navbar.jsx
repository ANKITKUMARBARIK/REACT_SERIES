import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>
        {/* Link */}

        {/* <ul>
            <li>
                <Link to='/' className='laal'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='laal'>About</Link>
            </li>
            <li>
                <Link to='/contact' className='laal'>Contact</Link>
            </li>
        </ul> */}


        {/* Use NavLink */}

        <ul>
            <li>
                <NavLink to='/' className={({isActive})=> isActive? "active-link" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive})=> isActive? "active-link" : ""}>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({isActive})=> isActive? "active-link" : ""}>Contact</NavLink>
            </li>
        </ul>
        </>
    )
}

export default Navbar
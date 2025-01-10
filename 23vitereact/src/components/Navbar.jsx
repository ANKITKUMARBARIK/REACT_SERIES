import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div>
                <ul className='p-6 flex justify-evenly text-center bg-black text-white'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-green-400' : 'text-gray-200'} font-bold text-xl`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-green-400' : 'text-gray-200'} font-bold text-xl`}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-green-400' : 'text-gray-200'} font-bold text-xl`}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/github' className={({ isActive }) => `${isActive ? 'text-green-400' : 'text-gray-200'} font-bold text-xl`}>Github</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
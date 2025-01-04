import React from 'react'
import { Outlet } from 'react-router-dom'

// using <Outlet /> for Nested Routing
function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Outlet />
        </>
    )
}

export default Dashboard
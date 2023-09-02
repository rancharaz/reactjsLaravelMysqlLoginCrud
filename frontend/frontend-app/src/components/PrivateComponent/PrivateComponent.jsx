import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateComponent = () => {
    const auth = localStorage.getItem('user-info');/* user  data */
    /* if user true go on pages else return on register */
    return auth ? <Outlet /> : <Navigate to="/register" />
}

export default PrivateComponent
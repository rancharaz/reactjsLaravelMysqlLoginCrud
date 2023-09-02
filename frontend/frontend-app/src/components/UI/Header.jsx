import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

 
    const navigate = useNavigate(); /* navigate hook */
    let auth = JSON.parse(localStorage.getItem('user-info')); /* get userdata */

    const logout = () => {
        localStorage.clear();/* clear userdata */
        navigate('/register'); /* navigate to register page */
    }


    return (
        <>
            <nav className="navbar ">
                <div className="logo flex">
                    E-commerce
                </div>
                <div className="menu">
                    <ul className='flex gap-6'>
                        {/* if data true go to page else go to login register */}
                        {
                            auth ?
                                <>
                                    <Link className='navbar-link' to="/">Product List</Link>
                                    <Link className='navbar-link' to="/search-product">Search product</Link>

                                    <Link className='navbar-link' to="/add-product">Add product</Link>
                                     <Link to="/register" className='navbar-link cursor-pointer' onClick={logout}>logout</Link>
                                    <Link className='cursor-pointer'>Username: {auth.name}</Link>
                                </>
                                :
                                <>
                                    <Link className='navbar-link' to="/login">Login</Link>
                                    <Link className='navbar-link' to="/register">Register</Link>
                                </>
                        }

                        {

                        }

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
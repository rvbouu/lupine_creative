import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useAppContext } from "../providers/AppProvider"
import Badge from '@mui/material/Badge';
import Cookie from "js-cookie"

export default function Nav() {
    const [loggedIn, setLoggedIn] = useState(false)
    const { currentUser } = useAppContext();

    function logout() {
        Cookie.remove('auth-cookie')
        window.location.href = '/'
    }
    // json.parse session storage
    useEffect(() => {
        // console.log(currentUser)
        currentUser && setLoggedIn(true)
    }, [currentUser])
    return (
        <nav>
            {/* Home tab */}
            <NavLink className="navbar" to="/" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Home</NavLink>

            {/* About Lupine Creative */}
            <NavLink className="navbar" to="/about" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>About</NavLink>

            {/* Shop tab */}
            <NavLink reload="true" className="navbar" to="/shop" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Shop</NavLink>

            {/* Contact tab */}
            <NavLink className="navbar" to="/contact" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Contact</NavLink>

            {/* if else for displaying sign up/login tab */}
            {(!loggedIn) ? (
                <>
                    {/* Signup tab */}
                    <NavLink className="navbar" to="/signup" style={({ isActive }) => {
                        return isActive ? { textDecoration: 'underline' } : {};
                    }}>Sign Up | Login</NavLink>

                </>
            ) : (
                <>
                    {/* Profile tab */}
                    <NavLink className="navbar" to="/profile" style={({ isActive }) => {
                        return isActive ? { textDecoration: 'underline' } : {};
                    }}>Your Account</NavLink>
                    {/* Logout button */}
                    <span className="logout" onClick={logout}>Logout</span>
                </>
            )}
            <NavLink to='/checkout' reload='true'>
                <Badge badgeContent={4} color="secondary">
                    <img src='/logo.branding/shopping_light.png' alt='shopping bag' className="cartimg" />
                </Badge>
            </NavLink>
        </nav >
    )
}


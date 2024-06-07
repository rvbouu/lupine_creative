import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useAppContext } from "../providers/AppProvider"
import Badge from '@mui/material/Badge';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Cookie from "js-cookie"
import '../assets/Nav.css'

export default function Nav() {
    const [loggedIn, setLoggedIn] = useState(false)
    const { currentUser } = useAppContext();

    function logout() {
        Cookie.remove('auth-cookie')
        window.location.href = '/'
    }

    useEffect(() => {
        console.log(currentUser)
        currentUser && setLoggedIn(true)
    }, [currentUser])
    return (
        <nav>
          {/* Profile tab - figure out how to make it appear only when logged in */}
        <NavLink className="navbar" to="/profile" style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underline' } : {};
                        }}>Your Account</NavLink>
            {/* Home tab */}
            <NavLink className="navbar" to="/" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Home</NavLink>

            {/* About Lupine Creative */}
            <NavLink className="navbar" to="/about" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>About Lupine Creative</NavLink>

            {/* Shop tab */}
            <NavLink className="navbar" to="/shop" style={({ isActive }) => {
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
                    }}>Sign Up / Login</NavLink>

                    {/* Login tab */}
                    {/* <NavLink className="navbar" to="/signup" style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underline' } : {};
                        }}>Login</NavLink> */}

                    </>
                ) : (
                    <>
                </>
            ) : (
                <>
                    {/* Profile tab - figure out how to make it appear only when logged in */}
                    <NavLink className="navbar" to="/profile" style={({ isActive }) => {
                        return isActive ? { textDecoration: 'underline' } : {};
                    }}>Your Account</NavLink>
                        {/* Logout button */}
                        <span onClick={logout}>Logout</span>
                    </>
                )}
                <NavLink to='/checkout'>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingBagOutlinedIcon />
                    </Badge>
                </NavLink>
        </nav >
    )
}


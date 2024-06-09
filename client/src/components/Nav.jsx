import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useAppContext } from "../providers/AppProvider"
import Badge from '@mui/material/Badge';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Cookie from "js-cookie"
import '../assets/Nav.css'


export const addItemToCart = (setCartItemCount, cartItemCount) => {
    setCartItemCount(cartItemCount + 1);
}

export const updateCartItemCount = (setCartItemCount, newCount) => {
    setCartItemCount(newCount);
}


const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [cartItemCount, setCartItemCount] = useState(0)
    const { currentUser } = useAppContext();

   
    
    // json.parse session storage
    useEffect(() => {
        console.log(currentUser)
        currentUser && setLoggedIn(true)
    }, [currentUser])
    
    
    function logout() {
        Cookie.remove('auth-cookie')
        window.location.href = '/'
    }

    const handleCartClick = () => {
        addItemToCart(setCartItemCount, cartItemCount);
        updateCartItemCount(setCartItemCount, cartItemCount + 1);
    }


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
                {/* Profile tab - figure out how to make it appear only when logged in */}
                <NavLink className="navbar" to="/profile" style={({ isActive }) => {
                    return isActive ? { textDecoration: 'underline' } : {};
                }}>Your Account</NavLink>
                {/* Logout button */}
                <span className="logout" onClick={logout}>Logout</span>
            </>
                )}
                {/* write a funtion so the badge doesnt shows a 4 */}
            <NavLink to='/checkout' reload='true' onClick{...handleCartClick}>
                <Badge badgeContent={cartItemCount} color="secondary">
                    <img src='/logo.branding/shopping_light.png' alt='shopping bag' className="cartimg" />
                </Badge>
            </NavLink>

            {/* <a href='/checkout' >Checkout</a> */}
        </nav >
    )
};

export default Nav;

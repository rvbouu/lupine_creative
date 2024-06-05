import { NavLink } from "react-router-dom"

export default function Nav() {

    return (
        <nav>
            {/* Home tab */}
            <NavLink to="/" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Home</NavLink>

            {/* About Lupine Creative */}
            <NavLink to="/about" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>About Lupine Creative</NavLink>

            {/* Shop tab */}
            <NavLink to="/shop" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Shop</NavLink>

            {/* Contact tab */}
            <NavLink to="/contact" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Contact</NavLink>

            {/* Profile tab - figure out how to make it appear only when logged in */}
            <NavLink to="/profile" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Your Account</NavLink>

            {/* Signup tab */}
            <NavLink to="/signup" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Sign Up</NavLink>

            {/* Login tab */}
            <NavLink to="/signup" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Login</NavLink>

            {/* Logout tab */}
            <NavLink to="/signup" style={({ isActive }) => {
                return isActive ? { textDecoration: 'underline' } : {};
            }}>Logout</NavLink>

            <NavLink to='/cart'><img src='/cart.png' alt='cart image' className="cartimg" /></NavLink>
        </nav>
    )
}
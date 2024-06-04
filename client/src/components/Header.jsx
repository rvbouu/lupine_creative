import { Link } from "react-router-dom"


export default function Header() {

    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About the Artist</Link>
            <Link to="/product">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/store">Store</Link>
            <Link to="/profile">Your Account</Link>
            <Link to="/signup">Sign Up | Log In</Link>
        </header>
    )
}
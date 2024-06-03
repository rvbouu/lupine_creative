import { Link } from "react-router-dom"


export default function Header() {

    return (
        <header>
            <Link to="/">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </header>
    )
}
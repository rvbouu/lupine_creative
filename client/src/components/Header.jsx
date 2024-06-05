import { Link } from "react-router-dom"
import Nav from './Nav'
import '../assets/Header.css'


export default function Header() {

    return (
        <header>
            <Link to='/'><img className="logo" src="/logo.branding/lupinecreativenew.svg"/></Link>
            <Nav />
        </header>
    )
}
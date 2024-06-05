import { Link } from "react-router-dom"
import Nav from './Nav'
import '../assets/Header.css'


export default function Header() {

    return (
        <header>
            <Link to='/'><span>Where logo will go</span></Link>
            <Nav />
        </header>
    )
}
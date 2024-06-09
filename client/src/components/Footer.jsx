import { Link } from 'react-router-dom';
import '../assets/Footer.css';

export default function Footer() {

    return (
        <footer>
            <div className='topfooter'>
                <Link className='contact' to='/contact'>Contact!</Link>
                <Link className='shop' to='/shop'>Check out our store!</Link>
                <Link className='about' to='/about'>What's the story?</Link>
            </div>
            <a href="https://www.instagram.com/lupine.creative/"><img src="/logo.branding/instalogo2.svg" className='instalogo' /></a>
            <p>&#x24B8; Lupine Creative Co.</p>
        </footer>
    )
}
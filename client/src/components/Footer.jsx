import {Link} from 'react-router-dom';
import '../assets/Footer.css';

export default function Footer() {

    return(
        <footer>
            <div className='topfooter'>
            <Link to='/contact'>Contact Me!</Link>
            <a href='https://www.instagram.com/'><img src='/instagram_logo.png' alt='instagram logo' className='instalogo' /></a>
            </div>
            <p>&#x24B8; Lupine Creative Co.</p>
        </footer>
    )
}
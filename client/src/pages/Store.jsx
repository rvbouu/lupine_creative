import {Link} from 'react-router-dom'

export default function Store() {


    return (
        <>
        <h3>Store</h3>
        {/* Was testing out checkout feature */}
        <Link to='/checkout'><button>Checkout</button></Link>
        </>
    )
}

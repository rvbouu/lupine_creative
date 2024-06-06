import { Link } from "react-router-dom"
import '../assets/Cart.css'

export default function Cart() {

  return (
    <section className="cart">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-content">










        <Link to='/shop'><button className="cartbtn">Continue Shopping</button></Link>
        {/* Was testing out checkout feature */}
        <Link to='/checkout'><button className="cartbtn">Checkout</button></Link>
      </div>
    </section>
  )
}

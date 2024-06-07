// DONT NEED
import { Link } from "react-router-dom"
// todo, link this to products or dataset.json?


export default function Cart() {

  return (
    <>
      <title>Shopping Cart</title>
      <h2>Your Cart</h2>
      {/* Was testing out checkout feature */}
      <Link to='/checkout'><button>Checkout</button></Link>

    </>
  )
}



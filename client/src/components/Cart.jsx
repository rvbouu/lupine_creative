import { Link } from "react-router-dom"

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

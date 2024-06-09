import '../assets/ProductCard.css'
import { useState, useEffect } from 'react';
let total = JSON.parse(sessionStorage.getItem('cart')) || [];

function ProductCard({ product }) {
  const [cart, setCart] = useState()

  // adds item to total array when button is clicked
  function addToCart(e) {
    // console.log(e.target.id)
    total.push({ price: e.target.id, quantity: 1 })
    setCart(total)
    window.location.href = '/shop'
  }

  // console.log(cart)
  // if cart has something, sets sessionStorage to that array
  useEffect(() => {
    // console.log('update cart')
    if (cart) {
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {/* {console.log(product.image)} */}
        <img className="card-image" src={product.image[0]} />
        <div className="cost-box">
          <div>${product.price}</div>
          <button className="cart-button" id={product.priceId} onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard
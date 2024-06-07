import '../assets/ProductCard.css'
import { useState, useEffect } from 'react';
import { useAppContext } from '../providers/AppProvider';
let total = []
function ProductCard({ product }) {
  // const {cartData} = useAppContext();
  const [cartData, setCartData] = useState()


  function addToCart(e) {
    console.log(e.target.id)
    total.push({ price: e.target.id, quantity: 1 })
    setCartData(total)
  }
  
  console.log(cartData)
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartData))
  }, [cartData])

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
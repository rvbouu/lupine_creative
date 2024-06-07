import '../assets/ProductCard.css'
import { useAppContext } from '../providers/AppProvider';
function ProductCard({ product }) {
  const {cartData} = useAppContext();
  let total = cartData.total
  function addToCart(e){
    console.log(e.target.id)
    total.push({price: e.target.id, quantity: 1})
    console.log(total)
  }


  return (
    <>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {console.log(product.image)}
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
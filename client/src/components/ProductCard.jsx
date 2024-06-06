import '../assets/ProductCard.css'
function ProductCard({ product }) {

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {console.log(product.image)}
        <img className="card-image" src={product.image[0]} />
        <div className="cost-box">
          <div>${product.price}</div>
          <button className="cart-button">Add to Cart</button>
        </div>
      </div>
    </>
      );
}

      export default ProductCard
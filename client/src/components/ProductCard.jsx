import data from '../lib/dataset.json'
import '../assets/ProductCard.css'
function ProductCard(product) {

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <img className="card-image" src={product.image[0]} />
        <div>${product.price}</div>
      </div>
    </>
  );
}

export default ProductCard
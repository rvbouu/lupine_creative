import data from '../lib/dataset.json'

function ProductCard() {

  return (
    <>
      {data.map(product => (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <img src={product.image[0]}/>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <div>{product.qty}</div>
          </div>
        </div>
      ))
      }
    </>
  );
}

export default ProductCard
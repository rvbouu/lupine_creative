import data from '../lib/dataset.json'

export default function Carousel() {
    // console.log(product)
    return (
        <>
            <div className='store-body'>
                {data.map(product => (
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <img className="card-image" src={product.image[0]} />
                        <div className="cost-box">
                            <div>${product.price}</div>
                            <button className="cart-button">Add to Cart</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
};



// src = image URL
// alt = discription




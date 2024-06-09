import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import '../assets/ProductCard.css'

export default function Store() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/product')
            .then(res => res.json())
            .then(info => {
                // console.log(info)
                setData(info)
            })
            .catch(error => console.error(error));
    }, []);
    // console.log("Product data: ",data)

    return (
        <>
            <p>Cart:</p>
            <div className='store-body'>
                {data?.map((product, i) => (
                    <ProductCard product={product} key={i} />
                ))}
            </div>
        </>
    )
}
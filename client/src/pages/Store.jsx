import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import '../assets/ProductCard.css'

export default function Store() {
    const [data, setData] = useState()

    useEffect(async () => {
        await fetch('http://localhost:3000/api/product')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)})
            .catch(error => console.error(error));
    }, []);


    return (
        <>
            <div className='store-body'>
                {data.map((product, i) => (
                    <ProductCard product={product} key={i} />
                ))}
            </div>
        </>
    )
}

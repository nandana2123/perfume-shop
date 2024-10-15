import React, { useEffect, useState } from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/product');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="explore-container">
            <h1 className='explore-heading'>Explore Our Perfumes</h1>
            <hr></hr>
            <div className="grid-container">
                {products.map(product => (
                    <Link to={`/product/${product._id}`} key={product._id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: Rs. {product.price.toLocaleString()}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Explore;

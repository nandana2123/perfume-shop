import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    // Check if product is defined before rendering
    if (!product) {
        return null; // Or return a loading spinner/message if preferred
    }

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;

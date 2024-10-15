import './ProductPage.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState('30 ml');
    const [newReview, setNewReview] = useState({ username: '', rating: 0, comment: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/product/${id}`);
                if (!response.ok) throw new Error('Product not found');
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            }
        };

        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/review/${id}`);
                if (!response.ok) throw new Error('Reviews not found');
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProduct();
        fetchReviews();
    }, [id]);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleRatingChange = (rating) => {
        setNewReview((prev) => ({ ...prev, rating }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/review`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newReview, productId: id }),
            });
            if (response.ok) {
                const addedReview = await response.json();
                setReviews((prev) => [...prev, addedReview]);
                setNewReview({ username: '', rating: 0, comment: '' });
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    if (error) return <div>{error}</div>;
    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-page">
            {/* Product Section */}
            <div className="product-container">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <h2>{product.brand}</h2>
                    <p>{product.description}</p>
                    <p className="price">Price: Rs. {product.price}</p>
                    <div className="size-selection">
                        <label htmlFor="size-select">Select Size:</label>
                        <select id="size-select" value={selectedSize} onChange={handleSizeChange}>
                            <option value="30 ml">30 ml</option>
                            <option value="50 ml">50 ml</option>
                        </select>
                    </div>
                    <button className="buy-now-button">Buy Now</button>
                </div>
            </div>

            {/* Review Section */}
            <div className="review-section">
                <h2>Reviews</h2>
                {reviews.length === 0 ? <p>No reviews yet.</p> : reviews.map((review) => (
                    <div key={review._id} className="review">
                        <div className="review-header">
                            <span className="review-name">{review.username}</span>
                            <span className="review-rating">{review.rating} ★</span>
                        </div>
                        <p className="review-content">{review.comment}</p>
                    </div>
                ))}

                <h3>Submit a Review</h3>
                <form onSubmit={handleSubmit} className="review-form">
                    <input
                        type="text"
                        placeholder="Username (required)"
                        value={newReview.username}
                        onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
                        required
                    />
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${newReview.rating >= star ? 'selected' : ''}`}
                                onClick={() => handleRatingChange(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <textarea
                        placeholder="Comment"
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ProductPage;

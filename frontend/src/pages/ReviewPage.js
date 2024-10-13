// src/pages/ReviewsPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
    const { productId } = useParams(); // Get the product ID from the URL
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        username: '',
        rating: 0,
        comment: '',
    });

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(`http://localhost:3000/api/review?productId=${productId}`);
            const data = await response.json();
            setReviews(data);
        };

        fetchReviews();
    }, [productId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send the new review to the backend
        const response = await fetch(`http://localhost:3000/api/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newReview, productId }),
        });
        if (response.ok) {
            const addedReview = await response.json();
            setReviews((prev) => [...prev, addedReview]);
            setNewReview({ username: '', rating: 0, comment: '' }); // Reset form
        }
    };

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review._id}>
                        <strong>{review.username}</strong>
                        <p>Rating: {review.rating}</p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
            <h3>Submit a Review</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={newReview.username}
                    onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Rating"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    required
                />
                <textarea
                    placeholder="Comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReviewsPage;

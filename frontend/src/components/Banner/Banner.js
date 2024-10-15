// src/components/Banner/Banner.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'; // Importing the CSS file

const Banner = () => {
    return (
        <div className="banner">
            <h2>Explore Our Latest Collections</h2>
            <p>Discover the perfect scent for every occasion!</p>
            <Link to="/explore">
                <button className="shop-now-button">Shop Now</button>
            </Link>
        </div>
    );
};

export default Banner;

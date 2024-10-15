import { useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../components/Banner/Banner'; // Adjusted import
import Footer from '../components/footer/footer';
const HomePage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/product'); // Adjust API endpoint as needed
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleImageClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <header className="header">
                <div className="fleur-container">
                    <div className="fleur">Fleur</div>
                    <h2 className="tagline">Smell Like Life!</h2>
                    <div className="nav"> {/* Separate the navigation links */}
                        <Link to="/" className="home-link">
                            <h2>Home</h2>
                        </Link>
                        <a href="/explore" className="explore-link" target="_blank" rel="noopener noreferrer">
                            <h2>Explore</h2>
                        </a>
                    </div>
                </div>
            </header>

            {/* Banner Component */}
            <Banner />

            <div className="image-container">
                <div className='image-section'>
                    <img
                        src="https://m.media-amazon.com/images/G/31/img23/beauty/coop/jupiter24_fragrance_BIF/Bellavita._SY700_QL85_.jpg"
                        alt="Perfume 1"
                        className="home-image"
                        onClick={() => handleImageClick('670cc843dbde0c7bca2e655e')}
                    />
                    <img
                        src="https://m.media-amazon.com/images/G/31/img23/beauty/coop/jupiter24_fragrance_BIF/Beardo._SY700_QL85_.jpg"
                        alt="Perfume 2"
                        className="home-image"
                        onClick={() => handleImageClick('670cd008dbde0c7bca2e6599')}
                    />
                    <img
                        src="https://cdn.shopify.com/s/files/1/0390/2985/files/Collection_Mobile_2.jpg?v=1723440772"
                        alt="Perfume 3"
                        className="home-image"
                        onClick={() => handleImageClick('670cd0cedbde0c7bca2e65a2')}
                    />
                </div>
            </div>
            <Footer />
        </div>


    );
};

export default HomePage;

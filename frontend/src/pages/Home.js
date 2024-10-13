// src/pages/HomePage.js

import React from 'react';
import './Home.css'; // Create this CSS file for styling

const HomePage = () => {

    return (
        <div>
            <header className="header">
                <div className="fleur-container">
                    <div className="fleur">Fleur</div>
                    <h2 className="tagline">Smell Like Life!</h2>
                    <div className="nav">
                        <h2>Home</h2>
                        <h2>Explore</h2>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default HomePage;

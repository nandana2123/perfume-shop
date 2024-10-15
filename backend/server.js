require('dotenv').config(); // Load environment variables
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express'); // Ensure you have Express installed

const mongoURI = process.env.MONGO_URI; // Use the environment variable for MongoDB URI

// Define an async function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};
//function to call DB
connectDB();
//Express app
const app = express();
// Middleware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Perfume Shop API!');
});

const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
//api routes
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);


//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const express = require('express');
const Review = require('../models/review');
const router = express.Router();

// Create a new review
router.post('/', async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).send(review);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get reviews for a product
router.get('/:productId', async (req, res) => {
    try {
        const reviews = await Review.find({ productId: req.params.productId });
        res.send(reviews);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

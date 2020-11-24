const express = require('express');
const router = express.Router();
const {
	getProducts,
	getProductById
} = require('../controllers/productController');

// Fetch all Products
// router.get('/', getProducts);
router.route('/').get(getProducts);

//Fetch a single product
// router.get('/:id', getProductById);
router.route('/:id').get(getProductById);

module.exports = router;

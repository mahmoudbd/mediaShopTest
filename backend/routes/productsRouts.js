const express = require('express');
// const dummyProducts = require('../data/dummyProducts');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../models/productModel');

// Fetch all Products
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

//Fetch a single product
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			res.status(404);
			throw new Error('Product Not Found...');
		}
	})
);

module.exports = router;

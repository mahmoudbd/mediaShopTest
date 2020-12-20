const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

// Fetch all Products
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

//Fetch a single product
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product Not Found...');
	}
});

//delete product  admin
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await product.remove();
		res.json({ message: 'Product removed' });
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

module.exports = { getProducts, getProductById, deleteProduct };

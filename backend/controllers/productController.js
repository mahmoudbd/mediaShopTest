const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

// Fetch all Products
const getProducts = asyncHandler(async (req, res) => {
	// how many items per page we want
	const pageSize = 5;
	// wahtever the page in the query is ?pageNumber=1 or 2 ...
	const page = Number(req.query.pageNumber) || 1;

	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: 'i'
				}
			}
		: {};
	//Total count of products
	const count = await Product.countDocuments({ ...keyword });

	const products = await Product.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1));
	res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

//Create product  admin
const createProduct = asyncHandler(async (req, res) => {
	const product = await Product.create({
		name: 'Sample name',
		price: 0,
		user: req.user._id,
		image: '/images/sample.jpg',
		brand: 'Sample brand',
		category: 'Sample category',
		countInStock: 0,
		numRivews: 0,
		description: 'Sample description'
	});
	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

//Update Product  admin
const updateProduct = asyncHandler(async (req, res) => {
	const {
		name,
		price,
		description,
		image,
		brand,
		category,
		countInStock
	} = req.body;

	const product = await Product.findById(req.params.id);
	if (product) {
		(product.name = name),
			(product.price = price),
			(product.description = description),
			(product.image = image),
			(product.brand = brand),
			(product.category = category),
			(product.countInStock = countInStock);

		const updatedProduct = await product.save();
		res.status(201).json(updatedProduct);
	} else {
		res.json(404);
		throw new Error('Product not found');
	}
});

//POST Create review  api/products/:id/reviews
const createProductReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body;

	const product = await Product.findById(req.params.id);
	if (product) {
		const alreadyReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error('Product already reviewed');
		}
		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id
		};
		product.reviews.push(review);

		product.numReviews = product.reviews.length;

		product.rating =
			product.reviews.reduce((acc, item) => item.rating + acc, 0) /
			product.reviews.length;

		product.save();
		res.status(201).json({ message: 'Review added' });
	} else {
		res.json(404);
		throw new Error('Product not found');
	}
});
const getTopProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(5);
	res.json(products);
});

module.exports = {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts
};

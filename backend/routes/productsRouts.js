const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();
const {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts
} = require('../controllers/productController');

// Fetch all Products
// router.get('/', getProducts);
router.route('/').get(getProducts);

router.get('/top', getTopProducts);

//Fetch a single product
// router.get('/:id', getProductById);
router.route('/:id').get(getProductById);

//Create product review
router.post('/:id/reviews', protect, createProductReview);

//delete product  admin
router.delete('/:id', protect, admin, deleteProduct);

//Create Product Admin
router.post('/', protect, admin, createProduct);

//Update product  admin
router.put('/:id', protect, admin, updateProduct);

module.exports = router;

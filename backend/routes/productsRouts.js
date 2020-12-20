const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();
const {
	getProducts,
	getProductById,
	deleteProduct
} = require('../controllers/productController');

// Fetch all Products
// router.get('/', getProducts);
router.route('/').get(getProducts);

//Fetch a single product
// router.get('/:id', getProductById);
router.route('/:id').get(getProductById);

//delete product  admin
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;

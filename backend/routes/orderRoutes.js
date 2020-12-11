const express = require('express');

const router = express.Router();
const {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getUserOrders
} = require('../controllers/orderController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, addOrderItems);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.get('/myorders', protect, getUserOrders);

module.exports = router;

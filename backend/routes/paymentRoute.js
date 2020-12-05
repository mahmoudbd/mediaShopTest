const express = require('express');
const router = express.Router();
const startPayment = require('../controllers/paymentController');

router.post('/', startPayment);

module.exports = router;

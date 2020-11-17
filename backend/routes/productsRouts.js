const express = require('express');
const dummyProducts = require('../data/dummyProducts');
const router = express.Router();

router.get('/', (req, res) => {
	res.json(dummyProducts);
});

router.get('/:id', (req, res) => {
	const product = dummyProducts.find((p) => p.id === req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.json({ message: 'Product Not Found...' });
	}
});

module.exports = router;

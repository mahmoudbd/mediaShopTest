const express = require('express');
const dotenv = require('dotenv');
const productsRoute = require('./routes/productsRouts');
const app = express();
dotenv.config();

app.get('/', (req, res) => {
	res.send('API is Running...');
});
app.use('/api/products', productsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on ${PORT}`));

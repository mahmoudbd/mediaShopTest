const express = require('express');
const dotenv = require('dotenv');
const productsRoute = require('./routes/productsRouts');
const colors = require('colors');
const app = express();
const connectDB = require('./config/db');
dotenv.config();
connectDB();

app.get('/', (req, res) => {
	res.send('API is Running...');
});
app.use('/api/products', productsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on ${PORT}`.white.inverse));

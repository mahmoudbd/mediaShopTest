const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const productsRoutes = require('./routes/productsRouts');
const usersRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const colors = require('colors');
const app = express();
const connectDB = require('./config/db');
//middleware error handler
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();
connectDB();

//body parser
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Media-Shop API...');
});
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on ${PORT}`.white.inverse));

const express = require('express');
const dotenv = require('dotenv');
const productsRoute = require('./routes/productsRouts');
const usersRoute = require('./routes/userRoutes');
const paymentRoute = require('./routes/paymentRoute');
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
app.use('/api/products', productsRoute);
app.use('/api/users', usersRoute);
app.use('/api/create-session', paymentRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on ${PORT}`.white.inverse));

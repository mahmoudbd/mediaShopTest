const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const dummyUsers = require('./data/dummyUsers');
const dummyProducts = require('./data/dummyProducts');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');

dotenv.config();
connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUesre = await User.insertMany(dummyUsers);
		const adminUser = await createdUesre[0]._id;
		const sampleProducts = dummyProducts.map((p) => {
			return {
				...p,
				adminUser: adminUser
			};
		});
		await Product.insertMany(sampleProducts);
		console.log('Data Imported !'.green.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};
importData();
module.exports = importData;

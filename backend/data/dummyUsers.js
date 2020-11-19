const bcrypt = require('bcryptjs');

const dummyUsers = [
	{
		name: 'Mahmoud',
		email: 'mahmoud@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: 'Ibrahim',
		email: 'ibrahim@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false
	},
	{
		name: 'Bob',
		email: 'Bob@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false
	},
	{
		name: 'Breus',
		email: 'breus@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false
	},
	{
		name: 'Riccardo',
		email: 'riccardo@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false
	}
];

module.exports = dummyUsers;

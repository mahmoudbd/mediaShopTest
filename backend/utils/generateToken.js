const jwt = require('jsonwebtoken');

// use user id as a payload in this token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30m'
	});
};

module.exports = generateToken;

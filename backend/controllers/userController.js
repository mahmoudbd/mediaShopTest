const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email: email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email: email });
	if (userExists) {
		//bad request
		res.status(400);
		throw new Error('User already exists');
	}
	const user = await User.create({
		name,
		email,
		password
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin
		});
	} else {
		res.status(404);
		throw new Error('User Not Found...');
	}
});

const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		if (req.body.password) {
			user.password = req.body.password;
		}
		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: generateToken(updatedUser._id)
		});
	} else {
		res.status(404);
		throw new Error('User Not Found...');
	}
});

// Get all users  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

// Delete user   Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		await user.remove();
		res.json({ message: 'User removed' });
	} else {
		res.status(404);
		throw new Error('User Not Found');
	}
});

//Get user by Id  Private/Admin

const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select('-password');
	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error('Uers Not Found');
	}
});

// Update user   Private/Admin
const updateUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		user.isAdmin = req.body.isAdmin || user.isAdmin;

		const updateUser = await user.save();
		res.json({
			_id: updateUser._id,
			name: updateUser.name,
			email: updateUser.email,
			isAdmin: updateUser.isAdmin
		});
	} else {
		res.status(404);
		throw new Error('User Not Found');
	}
});
const socialAccountHandler = asyncHandler(async (req, res) => {
	const { name, email, socialId, profilePicURL } = req.body;
	const password = socialId;
	const userExists = await User.findOne({ email: email });

	if (userExists) {
		const user = await User.findOne({ email: email });
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			avatar: profilePicURL,
			token: generateToken(user._id)
		});
	} else {
		const user = await User.create({
			name,
			email,
			password
		});
		if (user) {
			res.status(201).json({
				_id: user._id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id)
			});
		} else {
			res.status(400);
			throw new Error('Invalid user data');
		}
	}
});
module.exports = {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
	socialAccountHandler
};

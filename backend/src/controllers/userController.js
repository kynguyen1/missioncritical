const { User } = require('../models/User');
const { generateToken, comparePassword, hashPassword } = require('../util/auth');

// Register a new user
const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password and save the user
  const hashedPassword = await hashPassword(password);
  const newUser = await User.create(username, email, hashedPassword);

  // Generate JWT token
  const token = generateToken(newUser.id);
  res.status(201).json({ token });
};

// Login existing user
const login = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findByEmail(email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare password
  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = generateToken(user.id);
  res.status(200).json({ token });
};

module.exports = { register, login };


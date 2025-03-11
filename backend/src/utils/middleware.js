const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user; // Store user info in the request object
    next();
  });
};

module.exports = { authenticateToken };

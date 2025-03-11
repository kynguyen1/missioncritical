import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { db } from './db'; // Ensure this is correctly imported

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

// Login Route
router.post('/login', async (req, res) => {
  const { cus_email, cus_password } = req.body;

  if (!cus_email || !cus_password) {
    return res.status(400).json({ message: "Missing email or password" });
  }

  try {
    const [users] = await db.query("SELECT * FROM login WHERE cus_email = ?", [cus_email]);
    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(cus_password, user.cus_password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.cus_email }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

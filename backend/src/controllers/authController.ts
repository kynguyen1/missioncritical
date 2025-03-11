import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { db } from '../utils/db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register user
export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Query to check if the email already exists
    const [rows] = await db.query('SELECT * FROM login WHERE cus_email = ?', [email]);
    const existingUser = rows as { cus_email: string }[];

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await db.query('INSERT INTO login (cus_email, cus_username, cus_password) VALUES (?, ?, ?)', [
      email,
      username,
      hashedPassword,
    ]);

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login user
export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Query to fetch user by email
    const [rows] = await db.query('SELECT * FROM login WHERE cus_email = ?', [email]);
    const user = rows as { cus_email: string; cus_password: string; id: number }[];

    if (user.length === 0) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user[0].cus_password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user[0].id }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

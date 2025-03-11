import pool from '../utils/config';
import bcrypt from 'bcryptjs';

export const createUser = async (email: string, username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query(
      'INSERT INTO login (cus_email, cus_username, cus_password) VALUES (?, ?, ?)',
      [email, username, hashedPassword]
    );
    return result.insertId;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const rows = await pool.query('SELECT * FROM login WHERE cus_email = ?', [email]);
    return rows[0]; // Return the first matched user
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

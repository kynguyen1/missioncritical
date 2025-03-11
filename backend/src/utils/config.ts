import mariadb from 'mariadb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  connectionLimit: 5, // Adjust as needed
});

export default pool;

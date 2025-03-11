import mysql from 'mysql2';
import config from './config';  // Import the correct config

// Ensure that the port is cast to a number, as it's a string by default
const dbPort = Number(config.db.port); // Cast to number, or use a fallback

// Validate that all necessary environment variables are provided
if (!config.db.host || !config.db.user || !config.db.password || !config.db.database || isNaN(dbPort)) {
  throw new Error('Missing required database environment variables');
}

// Create a connection pool to MariaDB using mysql2
const pool = mysql.createPool({
  host: config.db.host,
  port: dbPort, // Use the number-casted port here
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

// Export the pool as a promise to interact with the database
export const db = pool.promise(); // This is correct

import express, { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import { registerUser, loginUser } from './controllers/authController';

const app = express();

// Enable CORS for all origins (you can customize this if needed)
app.use(cors({
    origin: 'http://localhost:5173',  // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Customize the allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Customize headers if needed
  }));
// Middleware for parsing JSON request bodies
app.use(express.json());

// Explicitly define the route handlers as async functions with correct return types
const registerUserHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    await registerUser(req, res);  // Let registerUser handle the response
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUserHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    await loginUser(req, res);  // Let loginUser handle the response
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Define your routes with the correctly typed handlers
app.post('/api/register', registerUserHandler);
app.post('/api/login', loginUserHandler);

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

import express from 'express';
import cors from 'cors';
import path from 'path';
import axios from 'axios';

const app = express();
const port = 3000; // Frontend React app port

app.use(cors()); // Enable CORS
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files if needed

// Forward API requests to Python backend
app.get('/register_user', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/register_user');
    res.json(response.data); // Forward the Python API response to the frontend
  } catch (error) {
    console.error("Error fetching data from Python backend:", error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Serve React frontend
app.get('/', (req, res) => {
  res.send('React frontend served via Express');
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:5173`);
});

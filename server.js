// server.js
import 'dotenv/config'; // Import dotenv for environment variables
import express from 'express'; // Import express
import cors from 'cors'; // Import cors

const app = express(); // Initialize express app

// Middleware
app.use(express.json)
app.use(cors()); // Use cors

// Simple route to test the API
app.get('/api/hello', (req, res) => {
  res.send("API is Working")
});

// Default route for other requests
app.get('*', (req, res) => {
  res.send(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; // Use export default for ES modules

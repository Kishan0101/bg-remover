import 'dotenv/config'; // Import dotenv for environment variables
import express from 'express'; // Import express
import cors from 'cors'; // Import cors
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

const app = express(); // Initialize express app

// Middleware
app.use(express.json()); // Ensure JSON parsing works correctly
app.use(cors()); // Use cors
await connectDB()

// Simple route to test the API
app.get('/', (req, res) => {
  res.send("API is Working");
});

app.use('/api/user', userRouter)

// Default route for other requests
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app; // Use export default for ES modules

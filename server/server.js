import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';

// Create an async handler for serverless functions
async function createServer(req, res) {
  // Initialize the database connection
  await connectDB();

  // Initialize the app
  const app = express();
  
  // Middleware setup
  app.use(express.json());
  app.use(cors());

  // Define API Route
  app.get('/', (req, res) => {
    res.send("API is working");
  });

  // Call the app with the incoming request and response
  app(req, res);
}

// Export the handler for Vercel
export default createServer;

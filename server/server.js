import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './Routes/userRoute.js';

// Load environment variables
dotenv.config();

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB().catch(err => {
  console.error('Database connection error:', err);
  process.exit(1); // Exit the process if there is a database connection error
});

// Initialize middleware
app.use(express.json());

// CORS configuration (optional: configure for specific origins)
app.use(cors());

// API Route
app.get('/', (req, res) => res.send("API is working"));
app.use('/api/user', userRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Export the app for Vercel
export default app;

// For local testing only, to run the server outside of Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

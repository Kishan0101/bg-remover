import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Database Connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Database connection error:', err);
    });

    // Ensure that process.env.MONGODB_URI is correctly set
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }

    // Use the MongoDB URI from the .env file
    await mongoose.connect(`${uri}/bg-removal`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;

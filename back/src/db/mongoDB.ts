import { connect } from 'mongoose';

const MONGO_URI = process.env.MONGO_DB_URI!;

export const connectDB = async () => {
  try {
    await connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error', error);
  }
};

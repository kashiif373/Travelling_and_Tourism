import mongoose from 'mongoose';
import Tour from '../models/Tour.js';

const updateFeaturedTours = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await Tour.updateMany({}, { $set: { featured: true } });
    console.log(`${result.modifiedCount} tours updated to featured.`);
  } catch (error) {
    console.error('Error updating featured tours:', error);
  } finally {
    mongoose.connection.close();
  }
};

updateFeaturedTours();

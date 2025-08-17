import mongoose from 'mongoose';
import User from './models/User.js';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/trips-travel');
    console.log('Connected to MongoDB');
    
    // Check if any admin users exist
    const adminUsers = await User.find({ role: 'admin' });
    if (adminUsers.length > 0) {
      console.log('Existing admin users:', adminUsers.map(u => ({ username: u.username, email: u.email })));
    } else {
      console.log('No admin users found. Creating default admin...');
      
      // Create a default admin user
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash('admin123', salt);
      
      const adminUser = new User({
        username: 'admin',
        email: 'admin@trips.com',
        password: hashedPassword,
        role: 'admin'
      });
      
      await adminUser.save();
      console.log('Default admin created:');
      console.log('Username: admin');
      console.log('Email: admin@trips.com');
      console.log('Password: admin123');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

createAdmin();

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const verifyEmail = async (req, res, next) => {
  const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];
  const allowedEmail = 'kashifmukhtar@gmail.com';

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (user.email !== allowedEmail) {
      return res.status(403).json({ message: 'Access denied. Only kashifmukhtar@gmail.com can perform this action.' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error({ message: "JWT error occurred" });
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

export { verifyEmail };

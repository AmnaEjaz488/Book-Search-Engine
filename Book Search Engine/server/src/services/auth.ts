import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
  _id: string;
  username: string;
  email: string;
}

const secretKey = process.env.JWT_SECRET_KEY || '';

export const signToken = (username: string, email: string, _id: string) => {
  const payload = { username, email, _id };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const authenticateToken = ({ req }: { req: any }) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    try {
      const user = jwt.verify(token, secretKey) as JwtPayload;
      req.user = user;
    } catch (err) {
      console.log('Invalid token');
    }
  }

  return req;
};

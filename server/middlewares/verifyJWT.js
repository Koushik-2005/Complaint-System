const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).send({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(403).send({ error: 'Token missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT Error:', err);
    return res.status(403).send({ error: 'Invalid token' });
  }
};

module.exports = verifyJWT;

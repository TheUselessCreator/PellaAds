import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, config.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

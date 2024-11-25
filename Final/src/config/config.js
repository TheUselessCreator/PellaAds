import dotenv from 'dotenv';

dotenv.config();

export const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 5000,
    PAYOUT_RATE: process.env.PAYOUT_RATE || 0.01,
    JWT_SECRET: process.env.JWT_SECRET
};

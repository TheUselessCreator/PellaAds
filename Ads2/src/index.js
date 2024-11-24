import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import adsRoutes from './routes/adsRoutes.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import { logger } from './utils/logger.js';
import config from './config/config.js';

dotenv.config();

const app = express();
const PORT = config.PORT;

app.use(bodyParser.json());
app.use('/api/ads', adsRoutes);
app.use(errorMiddleware);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        logger.error('Database connection error:', error);
    });

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { config } from './config/config.js';
import adsRoutes from './routes/adsRoutes.js';
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();
app.use(bodyParser.json());
app.use('/api/ads', adsRoutes);
app.use(errorMiddleware);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    })
    .catch(err => console.error(err));

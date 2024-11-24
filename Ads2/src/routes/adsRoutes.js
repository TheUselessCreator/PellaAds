import express from 'express';
import { getRandomAd, getAllAds } from '../controllers/adsController.js';

const router = express.Router();

router.get('/random', getRandomAd);
router.get('/all', getAllAds);

export default router;

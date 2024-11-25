import express from 'express';
import { createAd, getRandomAd, getAllAds, logAdView } from '../controllers/adsController.js';

const router = express.Router();

router.post('/', createAd);
router.get('/random', getRandomAd);
router.get('/all', getAllAds);
router.post('/view', logAdView);

export default router;

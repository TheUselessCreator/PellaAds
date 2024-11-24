import { adService } from '../services/adService.js';

export const getRandomAd = async (req, res) => {
    try {
        const ad = await adService.getRandomAd();
        res.json(ad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllAds = async (req, res) => {
    try {
        const ads = await adService.getAllAds();
        res.json(ads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

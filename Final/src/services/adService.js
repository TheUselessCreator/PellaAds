import Ad from '../models/adModel.js';

const adService = {
    createAd: async (adData) => {
        const ad = new Ad(adData);
        await ad.save();
        return ad;
    },

    getRandomAd: async () => {
        const ads = await Ad.find();
        const randomIndex = Math.floor(Math.random() * ads.length);
        return ads[randomIndex];
    },

    getAllAds: async () => {
        return await Ad.find();
    }
};

export default adService;

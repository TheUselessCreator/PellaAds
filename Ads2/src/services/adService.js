import Ad from '../models/adModel.js';

export const getRandomAd = async () => {
    const count = await Ad.countDocuments();
    const random = Math.floor(Math.random() * count);
    return await Ad.findOne().skip(random);
};

export const getAllAds = async () => {
    return await Ad.find();
};

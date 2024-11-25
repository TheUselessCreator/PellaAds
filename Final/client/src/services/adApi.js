import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchAllAds = async () => {
    const response = await axios.get(`${API_URL}/ads/all`);
    return response.data.data;
};

export const createAd = async (adData) => {
    const response = await axios.post(`${API_URL}/ads`, adData);
    return response.data.data;
};

export const logAdView = async (adId) => {
    await axios.post(`${API_URL}/ads/view`, { adId });
};

export const fetchPayments = async () => {
    const response = await axios.get(`${API_URL}/payments`);
    return response.data.data;
};

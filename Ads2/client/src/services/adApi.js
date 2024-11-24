import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchRandomAd = async () => {
    const response = await axios.get(`${API_URL}/ads/random`);
    return response.data;
};

export const fetchAllAds = async () => {
    const response = await axios.get(`${API_URL}/ads/all`);
    return response.data;
};

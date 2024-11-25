import React, { useEffect, useState } from 'react';
import { fetchAllAds, logAdView } from '../services/adApi';
import AdItem from './AdItem';

const AdList = () => {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAds = async () => {
            try {
                const adsData = await fetchAllAds();
                setAds(adsData);
                adsData.forEach(ad => logAdView(ad._id));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadAds();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {ads.map(ad => (
                <AdItem key={ad._id} ad={ad} />
            ))}
        </div>
    );
};

export default AdList;

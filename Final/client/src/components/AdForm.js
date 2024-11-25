import React, { useState } from 'react';
import { createAd } from '../services/adApi';

const AdForm = () => {
    const [formData, setFormData] = useState({ title: '', description: '', imageURL: '', targetURL: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await createAd(formData);
            setFormData({ title: '', description: '', imageURL: '', targetURL: '' });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange} placeholder="Image URL" required />
            <input type="text" name="targetURL" value={formData.targetURL} onChange={handleChange} placeholder="Target URL" required />
            <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Ad'}</button>
            {error && <div>Error: {error}</div>}
        </form>
    );
};

export default AdForm;

import React from 'react';

const AdItem = ({ ad }) => {
    return (
        <div>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <img src={ad.imageURL} alt={ad.title} />
            <a href={ad.targetURL} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
    );
};

export default AdItem;

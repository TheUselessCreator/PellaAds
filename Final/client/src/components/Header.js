import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Advertisement Service</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create Ad</Link>
                <Link to="/payment">Payment</Link>
            </nav>
        </header>
    );
};

export default Header;

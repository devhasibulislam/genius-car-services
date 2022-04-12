import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header-container'>
            <h2 >Logo</h2>
            <nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/services'}>Services</Link>
                <Link to={'/about'}>About</Link>
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-container'>
            <p>Copyright © {year}, All right reserved by <small>genius-car-services</small></p>
        </footer>
    );
};

export default Footer;
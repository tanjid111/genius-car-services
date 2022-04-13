import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-3'>
            <p><small>copyright @{new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;
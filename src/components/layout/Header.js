import React from 'react';
import '../../styles/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div>
                <img src="images/logo.webp" alt='banner'></img>
                <h1>anonymous company</h1>
            </div>
        </header>
    );
}

export default Header;
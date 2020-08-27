import React from 'react';
import logo from '../../logo.svg';
import './Header.css'; 

const Header = () => {
    return (
        <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <a href="/home">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/my-course">My Course</a>
            </nav>
        </div>
    );
};

export default Header;
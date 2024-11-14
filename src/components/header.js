import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import bebeto_logo from '../assets/bebeto_logo.png';


function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={bebeto_logo} alt="Bebeto Coaches" />
            </div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/booking">Book Now</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;

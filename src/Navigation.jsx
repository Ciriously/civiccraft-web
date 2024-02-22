import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/careers">Careers</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/teams">Teams</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

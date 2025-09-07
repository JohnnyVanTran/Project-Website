import React from "react";
import '../component-styling/Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <header className="site-header">
            <h1>Johnnys Nettside</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
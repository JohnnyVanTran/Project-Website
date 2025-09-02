import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <h1>Johnnys Nettside</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
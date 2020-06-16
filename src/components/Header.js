import React from 'react';
import "../styles/Header.css";

function Header() {
    return (
        <>
            <header>
                <div className="logo"><a href="#">Logo</a></div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <span></span>
                </label>
                <nav>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Tutorials</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header

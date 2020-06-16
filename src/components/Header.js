import React from 'react';
import "../styles/Header.css";

function Header() {
    return (
        <>
            <header>
                <div className="logo"><a href="www.google.com">Logo</a></div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <span></span>
                </label>
                <nav>
                    <ul>
                        <li>
                            <a href="www.google.com">About</a>
                        </li>
                        <li>
                            <a href="www.google.com">Tutorials</a>
                        </li>
                        <li>
                            <a href="www.google.com">Projects</a>
                        </li>
                        <li>
                            <a href="www.google.com">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header

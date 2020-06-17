import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
    return (
        <>
            <header>
                <div className="logo"><Link to="/">Logo</Link></div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <i className="fas fa-bars"></i>
                </label>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/tutorials">Tutorials</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header

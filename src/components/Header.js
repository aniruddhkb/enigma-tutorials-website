import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
    const toggleMenu = () => {
        document.querySelector(".nav-toggle").checked = false;
    };

    return (
        <>
            <header>
                <div className="logo"><Link to="/">Enigma</Link></div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <i className="fas fa-bars"></i>
                </label>
                <nav>
                    <ul>
                        <li>
                            <Link onClick={toggleMenu} to="/">About</Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/tutorials">Tutorials</Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link onClick={toggleMenu} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header

import React from 'react';
import "../styles/Body.css";
import About from './About';
import Tutorials from './Tutorials';
import Contact from './Contact';

function Body() {
    return (
        <div className="content">
            <About />
            <Tutorials />
            <Contact />
        </div>
    )
}

export default Body

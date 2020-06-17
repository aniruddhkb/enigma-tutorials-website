import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Home() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Body />
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default Home

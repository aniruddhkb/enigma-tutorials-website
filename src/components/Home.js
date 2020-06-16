import React from 'react'
// import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import ShowTutorial from './ShowTutorial'

function Home() {
    return (
        <>
            <Header />
            <Body />
            {/* <Switch> */}
                {/* <Route path='example' component={() => <ShowTutorial fileName = "ROS_intro.pdf"/>} /> */}
                {/* <Redirect to='/' /> */}
            {/* </Switch> */}
            <ShowTutorial fileName="ROS_intro.pdf" />
            <Footer />
        </>
    )
}

export default Home

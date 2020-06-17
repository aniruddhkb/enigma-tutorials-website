import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import "../styles/Body.css";

import About from './About';
import Tutorials from './Tutorials';
import Contact from './Contact';
import Projects from './Projects';
import ShowTutorial from './ShowTutorial';

function Body() {
    return (
        <div className="content">
            <Switch>
                <Route exact path='/' component={About}></Route>
                <Route exact path='/tutorials' component={Tutorials}></Route>
                <Route path='/tutorials/:id' component={ShowTutorial}></Route>                
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/contact' component={Contact}></Route>
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default Body

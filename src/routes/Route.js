import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from '../components/Nav';
import Home from '../components/Home';
import userBoard from '../components/userBoard';
import Map from '../components/Map';

export default () => (
    <Router>
        <Nav/>
        <Route path="/home" component={Home} />
        <Route path="/map" component={Map}/>
        <Route path="/board" component={userBoard}/>
    </Router>
)
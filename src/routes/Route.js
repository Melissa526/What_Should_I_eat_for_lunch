import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AppHeader from '../components/AppCommon/AppHeader';
import MenuChoice from '../components/MenuChoice';
import board from '../components/Board';
import Map from '../components/Map/Map';
import ContactUs from '../components/ContactUs';

export default () => (
    <Router>
        <AppHeader/>
        <Route path="/menu" component={MenuChoice} />
        <Route path="/map" component={Map}/>
        <Route path="/board" component={board}/>
        <Route path="/contact" component={ContactUs}/>
    </Router>
)
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AppHeader from '../components/AppCommon/AppHeader';
import Home from '../components/Home';
import FoodMenuClass from '../components/FoodMenu/FoodMenuClass';
import board from '../components/Board';
import Map from '../components/Map/Map';
import ContactUs from '../components/ContactUs';

export default () => (
    <Router>
       {/* <AppHeader/>*/}
        <Route path="/" component={Home}/>
        <Route path="/menu" component={FoodMenuClass} />
        <Route path="/map" component={Map}/>
        <Route path="/board" component={board}/>
        <Route path="/contact" component={ContactUs}/>
    </Router>
)

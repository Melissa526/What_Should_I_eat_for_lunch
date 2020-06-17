import React, {Component} from 'react'

import './style/main.css';

class Main extends Component{

    render() {

        return(
            <div className="wrapper" >
                <div className="window_container" id="window1"></div>
                <div className="window_container" id="window2"></div>
                <div className="window_container" id="window3"></div>
            </div>
        );
    }
}

export default Main;
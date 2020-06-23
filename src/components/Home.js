import React, {Component} from 'react'

import '../style/main.css';
import MenuChoice from "./FoodMenu/MenuChoice";

class Home extends Component{

    render() {

        return(
            <div className="wrapper" >
                <MenuChoice/>
            </div>
        );
    }
}

export default Home;
import React, {Component} from 'react'

import './style/main.css';

class Main extends Component{
    render() {
        return(
            <div className="main_area">

                <div className="main_item_wrapper" id="korean">
                    <img src="../img/korean_01.jpg" alt="korean" />
                    <div className="darkness"> </div>
                    <div className="btn-plus"><span draggable="false">+</span></div>
                </div>

                <div className="main_item_wrapper" id="western">
                    <img src="../img/korean_01.jpg" alt="western" />
                    <div className="darkness"> </div>
                    <div className="btn-plus"><span draggable="false">+</span></div>
                </div>

                <div className="main_item_wrapper" id="chinese">
                    <img src="../img/korean_01.jpg" alt="chinese" />
                    <div className="darkness"> </div>
                    <div className="btn-plus"><span draggable="false">+</span></div>
                </div>

                <div className="main_item_wrapper" id="japanese">
                    <img src="../img/korean_01.jpg" alt="japanese" />
                    <div className="darkness"> </div>
                    <div className="btn-plus"><span draggable="false">+</span></div>
                </div>

                <div className="main_item_wrapper" id="bunsik">
                    <img src="../img/bunsik_01.jpg" alt="bunsik" />
                    <div className="darkness"> </div>
                    <div className="btn-plus"><span draggable="false">+</span></div>
                </div>

            </div>
        );
    }
}

export default Main;
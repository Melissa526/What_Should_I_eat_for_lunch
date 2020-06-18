import React, {Component} from 'react'

import './style/main.css';

class Main extends Component{

    render() {

        return(
            <div className="wrapper" >
                <div className="window_container" id="window1">화면 5분할 영역</div>
                <div className="window_container" id="window2">메뉴 추천순위 영역</div>
                <div className="window_container" id="window3">이용자 후기 영역</div>
            </div>
        );
    }
}

export default Main;
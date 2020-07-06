import React, {Component} from 'react'

import '../style/main.css';
import FoodMenuClass from "./FoodMenu/FoodMenuClass";
import FoodMenuDetail from "./FoodMenu/FoodMenuDetail";
import FoodChoosen from './FoodMenu/FoodChoosen';

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            isMenuSelected : false,
            fstDepthMenu : null,
            secDepthMenu : null
        };
    }

    //메뉴분류 클릭핸들러
    menuClassClickHandler = (type) => {
        this.setState(state => ({
            isMenuSelected : true,
            fstDepthMenu : type
       }));

    }

    menuDetailClickHandler = (menu) => {
       console.log(`!!!!!! 2 depth Click !!!!!!`);
       this.setState(state => ({
           secDepthMenu : menu
       }));
    }

    componentDidMount() {

        if(this.state.secDepthMenu != null){
            /* init kakao map */

        }


    }


    render() {

        return(
            <div className="wrapper" >

                {/* title[s] */}
                <div className="box_wrapper">
                    오늘점심뭐먹지🙄?
                </div>
                {/* title[e] */}


                {/* 메뉴분류(depth1) 선택 [s] */}
                <div className="box_wrapper" id="menu_class">
                    {/* 한식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('korean')}>Korean
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍱</span></div>
                    </div>

                    {/* 중식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('chinese')}>Chinese
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍜</span></div>
                    </div>

                    {/* 일식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('japaneses')}>Japaneses
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍣</span></div>
                    </div>

                    {/* 양식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('western')}>Western
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍔</span></div>
                    </div>

                    {/* 분식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('bunsik')}>Bunsik
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍤</span></div>
                    </div>
                </div>
                {/* 메뉴분류(depth1) 선택 [e] */}


                {/* 메뉴상세(depth2) 선택 [s] */}
                { this.state.isMenuSelected?
                <div className="box_wrapper" id="menu_detail" >
                    {this.state.fstDepthMenu}<br/>
                    <div className="item_detail" onClick={(e)=> this.menuDetailClickHandler('1')}>[1]</div>
                    <div className="item_detail" onClick={(e)=> this.menuDetailClickHandler('2')}>[2]</div>
                    <div className="item_detail" onClick={(e)=> this.menuDetailClickHandler('3')}>[3]</div>
                    <div className="item_detail" onClick={(e)=> this.menuDetailClickHandler('4')}>[4]</div>
                </div>
                : null}
                {/* 메뉴상세(depth2) 선택 [e] */}


                {/* 메뉴선택 결과영역 [s] */}
                { (this.state.secDepthMenu!=null)?
                <div className="box_wrapper" id="menu_result" >
                    <div className="box_col2 box_result">오점머 ? [{this.state.secDepthMenu}] 결과영역 </div>
                    <div className="box_col2 box_result" id="map">map영역</div>
                </div>
                : null }
                {/* 메뉴선택 결과영역 [e] */}


                {/* 주간/일간 리포트영역 [s] */}
                {(this.state.secDepthMenu != null) ?
                <div className="box_wrapper" id="reporting" >
                    <div className="box_col2">일주일간 내가 고른 메뉴</div>
                    <div className="box_col2">일주일간 다른사람이 고른 인기메뉴</div>
                </div>
                : null }
                {/* 주간/일간 리포트영역 [e] */}


            </div>
        );
    }
}

export default Home;
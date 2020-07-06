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

    render() {

        return(
            <div className="wrapper" >

                <div className="box_wrapper">
                    오늘점심뭐먹지🙄?
                </div>

                {/* 메뉴분류(depth1) 선택 [s] */}
                <div className="box_wrapper" id="menu_class">
                    {/* 한식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('korean')}>
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍱</span></div>
                    </div>

                    {/* 중식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('chinese')}>
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍜</span></div>
                    </div>

                    {/* 일식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('japaneses')}>
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍣</span></div>
                    </div>

                    {/* 양식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('western')}>
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍔</span></div>
                    </div>

                    {/* 분식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('bunsik')}>
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍤</span></div>
                    </div>
                </div>
                {/* 메뉴분류(depth1) 선택 [e] */}


                {/* 메뉴상세(depth2) 선택 [s] */}
                { this.state.isMenuSelected?
                    <div className="box_wrapper" id="menu_detail" >
                        {this.state.fstDepthMenu} 선택됬다!!<br/>
                        <button onClick={(e)=> this.menuDetailClickHandler('1')}>1</button><br/>
                        <button onClick={(e)=> this.menuDetailClickHandler('2')}>2</button><br/>
                        <button onClick={(e)=> this.menuDetailClickHandler('3')}>3</button><br/>
                        <button onClick={(e)=> this.menuDetailClickHandler('4')}>4</button>
                    </div>
                    : null}
                {/* 메뉴상세(depth2) 선택 [e] */}

                {/* 메뉴선택 결과영역 [s] */}
                { (this.state.secDepthMenu!=null)?
                    <div className="box_wrapper" id="menu_result" >
                        <div className="box_result">오점머 ? [{this.state.secDepthMenu}] 결과영역 </div>
                        <div className="box_result">map영역</div>
                    </div>
                    : null }
                {/* 메뉴선택 결과영역 [e] */}

                {/* 주간/일간 리포트영역 [s] */}
                {(this.state.secDepthMenu != null) ?
                    <div className="box_wrapper" id="reporting" >
                        주간/일간 리포트                        
                    </div>
                    : null }
                {/* 주간/일간 리포트영역 [e] */}


            </div>
        );
    }
}

export default Home;
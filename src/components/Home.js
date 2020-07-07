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
            fstDepMenu : null,
            secDepMenu : null,
            selected : []
        };
    }

    //메뉴분류 클릭핸들러
    menuClassClickHandler = (type) => {
        let menuList = [];
        switch (fstDepMenu) {
            case "korean" :
                menuList = {"탕/찌개", "면/국수", "육류", "튀김"};
                break;
            case "chinese" :
                menuList = {"짜장면/짬뽕", "마라탕/샹궈", "훠궈", "만두"};
                break;
            case "japaneses" : {};
                break;
            case "western":
                break;
            case "bunsik":
                break;
            default:
                return;
        }

        this.setState(state => ({
            isMenuSelected : true,
            fstDepMenu : type
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
                    당신의 결정장애의 선택을 도와드립니다!
                    오늘 땡기지 않는 음식을 선택을 해제해주세요!
                </div>
                {/* title[e] */}


                {/* 메뉴분류(depth1) 선택 [s] */}
                <div className="box_wrapper" id="menu_class">
                    {/* 한식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('soup')}>soup
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍱</span></div>
                    </div>

                    {/* 중식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('noodle')}>noodle
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍜</span></div>
                    </div>

                    {/* 일식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('rice')}>rice
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍣</span></div>
                    </div>

                    {/* 양식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('meat')}>meat
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍔</span></div>
                    </div>

                    {/* 분식 */}
                    <div className="box_item" onClick={(e)=> this.menuClassClickHandler('fastFood')}>
                        <div className="darkness"></div>
                        <div className="select_btn"><span draggable="false">🍤</span></div>
                    </div>
                </div>
                {/* 메뉴분류(depth1) 선택 [e] */}


                {/* 메뉴상세(depth2) 선택 [s] */}
                { this.state.isMenuSelected?
                <div className="box_wrapper" id="menu_detail" >
                    {this.state.fstDepMenu}<br/>
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
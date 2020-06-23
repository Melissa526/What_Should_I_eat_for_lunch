import React, {Component} from 'react';

class MenuChoice extends Component{
    render() {
        return(
            <div className="wrapper">
                <div className="box_wrapper" id="clsChoice">
                    <div className="box_item five_choice" id="korean">한식</div>
                    <div className="box_item five_choice" id="western">양식</div>
                    <div className="box_item five_choice" id="japanese">일식</div>
                    <div className="box_item five_choice" id="chinese">중식</div>
                    <div className="box_item five_choice" id="bunsik">분식</div>
                </div>

                [기능]
                - 음식분류를 선택(clsChoice) > 4분할 하위분류를 선택 > 메뉴추천
                - 가장 많이 선택한 메뉴의 순위 조회(MenuRank.js / cache 사용)
                - 지도보기/공유하기 버튼
            </div>
        );
    }
}

export default MenuChoice;
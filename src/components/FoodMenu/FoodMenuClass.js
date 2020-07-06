import React, {Component} from 'react';

class FoodMenuClass extends Component{

    constructor(props){
        super(props);

        this.state = {
            isMenuSelected : false,
            fstDepthMenu : null,
            secDepthMenu : null
        };
    }

    handleClick = (type) => {
        this.setState(state => ({
            isMenuSelected : true,
            fstDepthMenu : type
        }));
    }

    render() {
        return(
            <div className="box_wrapper" >
                {/* 한식 */}
                <div className="box_item" onClick={(e)=> this.handleClick('korean')}>
                    <div className="darkness"></div>
                    <div className="select_btn"><span draggable="false">🍱</span></div>
                </div>

                {/* 중식 */}
                <div className="box_item" onClick={(e)=> this.handleClick('chinese')}>
                    <div className="darkness"></div>
                    <div className="select_btn"><span draggable="false">🍜</span></div>
                </div>

                {/* 일식 */}
                <div className="box_item" onClick={(e)=> this.handleClick('japaneses')}>
                    <div className="darkness"></div>
                    <div className="select_btn"><span draggable="false">🍣</span></div>
                </div>

                {/* 양식 */}
                <div className="box_item" onClick={(e)=> this.handleClick('western')}>
                    <div className="darkness"></div>
                    <div className="select_btn"><span draggable="false">🍔</span></div>
                </div>

                {/* 분식 */}
                <div className="box_item" onClick={(e)=> this.handleClick('bunsik')}>
                    <div className="darkness"></div>
                    <div className="select_btn"><span draggable="false">🍤</span></div>
                </div>
            </div>
        );
    }
}

export default FoodMenuClass;
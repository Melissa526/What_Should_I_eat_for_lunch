import React, {Component} from 'react';

class MenuChoice extends Component{
    render() {
        return(
            <div className="box_wrapper" id="clsChoice">
                <div className="box_item five_choice" id="korean">한식</div>
                <div className="box_item five_choice" id="western">양식</div>
                <div className="box_item five_choice" id="japanese">일식</div>
                <div className="box_item five_choice" id="chinese">중식</div>
                <div className="box_item five_choice" id="bunsik">분식</div>
            </div>
        );
    }
}

export default MenuChoice;
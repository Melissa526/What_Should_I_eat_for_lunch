import React, {Component} from 'react';

import AppFooter from './AppCommon/AppFooter';

class board extends  Component{
    render() {
        return(
            <div className="wrapper">
                <div>
                    이용자 후기 게시판
                </div>
                <div className="footer_area">
                    <AppFooter/>
                </div>
            </div>
        );
    }
}
export default board;
import React, { Component } from 'react';
import Footer from './AppCommon/AppFooter';

class ContactUs extends Component{
    render() {
        return(
            <div className="wrapper">
                <div>
                    Contact us 영역
                    - 카카오페이 500원 후원하기 링크
                    - 이메일 전송(nodejs의 nodemailer 모듈)
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ContactUs;
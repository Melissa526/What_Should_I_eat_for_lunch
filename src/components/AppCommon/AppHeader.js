import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import '../../lib/css/main.css';
import { fas, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class AppHeader extends Component {

    toggleNav(){
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }


   render() {
       return(
           <div className="topnav">
               <Link to="/" className="active">오늘점심뭐먹지🙄?</Link>
               <div id="myLinks">
                   <Link to="/menu">메뉴선택</Link>
                   <Link to="/map">주변탐색</Link>
                   <Link to="/board">게시판</Link>
                   <Link to="/contact">CONTACT US</Link>
               </div>
               <a className="icon" onClick={this.toggleNav}>
                   <FontAwesomeIcon icon={faBars} size="2x"/>
               </a>
           </div>
       );
   }
}

export default AppHeader;
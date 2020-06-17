import React, { Component } from 'react';

import './style/main.css';
import { fas, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Nav extends Component {

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
               <a href="#home" className="active">오점뭐?</a>
               <div id="myLinks">
                   <a href="#news">Home</a>
                   <a href="#map">주변탐색</a>
                   <a href="#board">게시판</a>
                   <a href="#about">About</a>
               </div>
               <a href="javascript:void(0);" className="icon" onClick={this.toggleNav}>
                   <FontAwesomeIcon icon={faBars} size="2x"/>
               </a>
           </div>
       );
   }
}

export default Nav;
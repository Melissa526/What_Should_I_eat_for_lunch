import React, { Component } from 'react';
import {Link} from 'react-router-dom';


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
               <Link to="/" className="active">오점뭐?</Link>
               <div id="myLinks">
                   <Link to="/home">메뉴판</Link>
                   <Link to="/board">게시판</Link>
                   <Link to="/map">주변탐색</Link>
               </div>
               <a className="icon" onClick={this.toggleNav}>
                   <FontAwesomeIcon icon={faBars} size="2x"/>
               </a>
           </div>
       );
   }
}

export default Nav;
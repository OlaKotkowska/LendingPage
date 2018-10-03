import React from "react";
import LovelyChic from '.././images/LovelyChic.png';
import './Header.css';
class Header extends React.Component{
  render(){
    return(
      <div className = "header">
        <img className = "logo" src ={LovelyChic}></img>
      </div>
    )
  }

}
export default Header;

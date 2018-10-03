import React from "react";
import "./SectionSlider.css";
import slider1 from '.././images/slider1.jpg';

class SectionSlider extends React.Component{
render(){
  return(
    <div className = "slider">
      <img className = "sider1" src ={slider1}></img>
    </div>
  )
}

}

export default SectionSlider;

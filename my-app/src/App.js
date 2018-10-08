import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import SectionSlider from "./components/SectionSlider";
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';
// import imagesArr from './imagesArr.js';
// let imagesArr = [
// <img className = "slider1" src ={slider1}></img>,
// <img className = "slider2" src ={slider2}></img>,
// <img className = "slider3" src ={slider3}></img>,
// ]
let imagesArr = [
  <div className = "sliderA"></div>,
  <div className = "sliderB"></div>,
  <div className = "sliderC"></div>
]


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Menu/>
      <SectionSlider slider = {imagesArr}/>
      </div>
    );
  }
}

export default App;

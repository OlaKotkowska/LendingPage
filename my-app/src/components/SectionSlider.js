import React from "react";
import "./SectionSlider.css";
// import slider1 from '.././images/slider1.jpg';
// import slider2 from '.././images/slider2.jpg';
// import slider3 from '.././images/slider3.jpg';
// // import imagesArr from './imagesArr.js';
// let imagesArr = [
// <img className = "slider1" src ={slider1}></img>,
// <img className = "slider2" src ={slider2}></img>,
// <img className = "slider3" src ={slider3}></img>,
// ]

class SectionSlider extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        activeIndex:"0"
      }
    }

    showNext = () =>{
      let {slider} = this.props;
      let index = this.state.activeIndex;
      let slidesLength = slider.length - 1;
      // console.log(slidesLength)//2
      if (index < slidesLength) {
          ++index;
      }

      this.setState({
        activeIndex: index
      });
      console.log(index)//0
    }

//   showNext = () => {
//   console.log("klik2")
//   let index = this.state.activeIndex;
//   let slideLength = imagesArr.lengt;
//   console.log(index);
//   if(index < slideLength - 1){
//   index++;
//   } else {
//     index = 0;
//   }
//   this.setState({
//     activeIndex: index
//   });
//     console.log(index)//0
// }

showPrev = () => {
  let {slider} = this.props;
  let index = this.state.activeIndex;
  let slidesLength = slider.lengt;
    console.log(this.state.activeIndex);
  if (index > 0) {
    --index;
  } else {
    index = 0;
  }
  console.log(this.state.activeIndex);
  this.setState({
    activeIndex: index
  });

}
// showPrev = () => {
// console.log("klik2")
// let index = this.state.activeIndex;
// let slideLength = imagesArr.lengt;
// if (index > slideLength){
//   --index;
// } else{
//   index = slideLength -1;
// }
// this.setState({
//   activeIndex: index
// });
//   console.log(index)//NaN
//
// }

//   let classSlide = index === (this.state.activeIndex) ? 'slideActive' : 'slide';
// return <div className = {classSlide}>{slide}</div>)}
render(){
  return(
    <div className = "slider">
      <div><button className = "buttonLeft" onClick ={this.showPrev}>showPrev</button></div>
      {this.props.slider[this.state.activeIndex]}
      <div><button className = "buttonRight" onClick ={this.showNext}>showNext</button></div>
    </div>
  )
}



}

export default SectionSlider;

// {this.props.slider.map((slide,index) =>
//   if (index === this.state.activeIndex){
//     <div className = 'slideActive'>{slide}</div>
//   } else {
//     <div className = 'slide'>{slide}</div>
//   })}
/* <ul>
  <li><img className = "sider1" src ={slider1}></img></li>
</ul> */

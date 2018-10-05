import React from "react";
import "./SectionSlider.css";
import slider1 from '.././images/slider1.jpg';
import slider2 from '.././images/slider2.jpg';
import slider3 from '.././images/slider3.jpg';
// import imagesArr from './imagesArr.js';
let imagesArr = [
<img className = "slider1" src ={slider1}></img>,
<img className = "slider2" src ={slider2}></img>,
<img className = "slider3" src ={slider3}></img>,
]

class SectionSlider extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        activeIndex:"0"
      }
    }

    let imagesArr = [
    <img className = "slider1" src ={slider1}></img>,
    <img className = "slider2" src ={slider2}></img>,
    <img className = "slider3" src ={slider3}></img>,
    ]

    showNext = () =>{
      let index = this.state.activeIndex;
      console.log(index);
      let slidesLength = imagesArr.lengt - 1;
      console.log(slidesLength)
      if (index === slidesLength) {
        index = -1;
      }

      ++index;

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
  let index = this.state.activeIndex;
  let slidesLength = imagesArr.lengt;
    console.log(this.state.activeIndex);
  if (index > 0) {
    --index;
  } else{
    index = slidesLength - 1;
  }

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

render(){
  return(
    <div className = "slider">
      <div><button className = "buttonLeft" onClick ={this.showPrev}>showPrev</button></div>
      {imagesArr[this.state.index]}
      <div><button className = "buttonRight" onClick ={this.showNext}>showNext</button></div>
    </div>
  )
}


}

export default SectionSlider;
/* <ul>
  <li><img className = "sider1" src ={slider1}></img></li>
</ul> */

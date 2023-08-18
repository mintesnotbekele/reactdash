import { Height } from "@mui/icons-material";
import React, { useState } from "react";
import casousel from "../../assets/carouser.png"
// import { Row, Col } from "antd";
// import './slide.css';
// //simport './slide.js';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function DisplaySlider(props) {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  return (
    <div>
    <h2>Center Mode</h2>
    <Slider {...settings}>
      <div>
        <h3  style={{backgroundColor: 'black', height: '100px', width: '100%' }}>
          <img src={casousel}/>
        </h3>
      </div>
      <div>
        <h3>
        <img src={casousel}/>
        </h3>
      </div>
      <div >
        <h3  style={{backgroundColor: 'black', height: '100px', width: '100%' }}>3</h3>
      </div>
      <div>
        <h3>
        <img src={casousel}/>
        </h3>
      </div>
      <div>
        <h3  style={{backgroundColor: 'black', height: '100px', width
    : '100%' }}>
       <img src={casousel}/>
    </h3>
      </div>
      <div>
        <h3>
           <img src={casousel}/>ss
        </h3>
      </div>
    </Slider>
  </div>

  );

}
export default DisplaySlider;
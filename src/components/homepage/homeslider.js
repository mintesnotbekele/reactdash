import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import carouse from '../../assets/carouser.png';
import first from '../../assets/01.png';
import second from '../../assets/02.png';
import third from '../../assets/03.png';
import four from '../../assets/04.png';



import { Row, Col } from 'antd';
import Slider from 'react-slick';
const HomeSlider=()=>{
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      fade: true,
      speed: 1000

  };

        return(
            <Row className='homeslidecontainer'>
            <Col xl={4}> </Col>
            <Col  xs={24} xl={16} className='homeslider' span={16}> 
            <Slider {...settings}>
            <div> <img
                    alt="..."
                    src={first
                    }
                /></div>
               <div>   <img
                    alt="..."
                    src={second}
                /></div>
               <div> <img
                    alt="..."
                    src={third}
                /></div>
                   <div>  <img
                    alt="..."
                    src={four}
                /></div>
              
                
              </Slider>
          </Col>
         <Col span={4}></Col>
          </Row>
        )
}
export default HomeSlider;
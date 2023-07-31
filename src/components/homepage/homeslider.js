import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import carouse from '../../assets/carouser.png'
import { Row, Col } from 'antd';
import { useState } from 'react';
const HomeSlider=()=>{


  function Item(props)
  {
      return (
          <Paper>
              <h2>{props.item.name}</h2>
              <p>{props.item.description}</p>
  
              <Button className="CheckButton">
                  Check it out!
              </Button>
          </Paper>
      )
  }
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

const [activeItemIndex, setActiveItemIndex] = React.useState(0);

const handleJumpToItem = (index) => {
    console.log(index);
  setActiveItemIndex(index);
};

  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

        return(
            <Row style={{height: '500px'}}>
            <Col span={4}> </Col>
            <Col style={{height: '600px'}} span={16}> 
        
            <Carousel
            activeItemIndex={activeItemIndex} 
            onChange={handleJumpToItem}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 1,
          
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
            
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
               
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
                <div> <img
                    alt="..."
                    src={carouse}
                /></div>
               <div>   <img
                    alt="..."
                    src={carouse}
                /></div>
               <div> <img
                    alt="..."
                    src={carouse}
                /></div>
                   <div>  <img
                    alt="..."
                    src={carouse}
                /></div>
               <div>  <img
                    alt="..."
                    src={carouse}
                /></div>
               <div> <img
                    alt="..."
                    src={carouse}
                /></div>
                
                </Carousel>
         


          </Col>
         <Col span={4}></Col>
          </Row>
        )
}
export default HomeSlider;
import {Row, Col} from 'antd';
import carouse from '../../assets/carouser.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeSlider=()=>{


        return( 
            <Row >
            <Col span={4}> </Col>
            <Col style={{height: '600px'}} span={16}> 
            <Carousel
           additionalTransfrom={0}
           arrows
           autoPlaySpeed={3000}
           centerMode={false}
           className=""
           containerClass="container"
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
            <img
              style={{margin: '50px'}}
              alt="..."
              src={carouse}
            />
            <img
            style={{margin: '50px'}}
              alt="..."
              src={carouse}
            />
            <img
            style={{margin: '50px'}}
              alt="..."
              src={carouse}
            />
          
          </Carousel>
          </Col>
         <Col span={4}></Col>
          </Row>
        )
}
export default HomeSlider;
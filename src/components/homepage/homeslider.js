import {Row, Col} from 'antd';
import carouse from '../../assets/carouser.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeSlider=()=>{


        return( 
            <Row >
            <Col span={1}> </Col>
            <Col style={{height: '600px'}} span={23}> 
            <Carousel
           additionalTransfrom={0}
           arrows
           autoPlaySpeed={3000}
           centerMode
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
               partialVisibilityGutter: 40
             },
             mobile: {
               breakpoint: {
                 max: 464,
                 min: 0
               },
               items: 1,
               partialVisibilityGutter: 30
             },
             tablet: {
               breakpoint: {
                 max: 1024,
                 min: 464
               },
               items: 2,
               partialVisibilityGutter: 30
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
         <Col span={1}></Col>
          </Row>
        )
}
export default HomeSlider;
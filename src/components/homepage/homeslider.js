import {Row, Col} from 'antd';
import carouse from '../../assets/carouser.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeSlider=()=>{
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 300 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 300 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 300 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 300 
    }
  };

        return(
            <Row >
            <Col span={2}> </Col>
            <Col style={{height: '600px'}} span={20}> 
            <Carousel
              partialVisbile={true} 
              itemClass="carousel-item-padding-40-px"
              showDots={true}
            responsive={responsive} 
             style={{height: '1200px'}}>
            <img
              style={{margin: '10px'}}
              alt="..."
              src={carouse}
            />
            <img
            style={{margin: '10px'}}
              alt="..."
              src={carouse}
            />
            <img
            style={{margin: '10px'}}
              alt="..."
              src={carouse}
            />
          
          </Carousel>
          </Col>
      
          </Row>
        )
}
export default HomeSlider;
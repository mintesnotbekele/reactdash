import {Row, Col} from 'antd';
import carouse from '../../assets/carouser.png'
import { Carousel } from 'flowbite-react';
const HomeSlider=()=>{
        return(
            <Row>
            <Col span={4}> </Col>
            <Col style={{height: '600px'}} span={15}> 
               <Carousel >
            <img
              alt="..."
              src={carouse}
            />
            <img
              alt="..."
              src={carouse}
            />
            <img
              alt="..."
              src={carouse}
            />
          
          </Carousel>
          </Col>
      
          </Row>
        )
}
export default HomeSlider;
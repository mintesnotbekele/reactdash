
import {Row, Col} from 'antd';
import avatar from "../../assets/avatar.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials=()=>{
    
   const [testimonials, setTestimonials] = useState([]);
   const [loading, setLoading] = useState(false);
    useEffect(()=>{
     axios.get('http://127.0.0.1:8000/api/testimonial')
     .then((res)=>{
      setTestimonials(res.data);
     })
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      return(
        <Row style={{marginTop: '300px'}}>
         <Col span={4} ></Col>
                 <Col style={{background: '#ECDFD7', borderRadius: '20px'}} span={16}>
                <h1 style={{fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>
                What the People Think About Us
                </h1>
                <Row>
                    <Col span={24}>
                     <Carousel length='3' responsive={responsive} centerMode={true} > 
                     {testimonials.map((item) => 
                              <div style={{background: '#F6F5EC',  borderRadius: '20px', margin: '20px', padding: '30px'}}>
                              <img style={{objectFit: 'initial'}} src={avatar}></img>
                              <p style={{fontSize: '22px', fontFamily: 'josh',textAlign: 'left'}}>{item?.username}</p>                              
                              <p style={{fontSize: '22px', fontFamily: 'josh',textAlign: 'left'}}>{item?.testimony}</p>
                                              </div>
                           )}
                     
                         
                  
                    
                
                 </Carousel>
              
                </Col>         
            </Row>
        </Col>
      
     </Row>

      )
}
export default Testimonials;
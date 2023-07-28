
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
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
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
                     <Carousel length='3' responsive={responsive}  > 
                     {testimonials.map((item) => 
                              <div style={{background: '#F6F5EC',  borderRadius: '20px', margin: '20px', padding: '30px'}}>
                             <div style={{display: 'flex'}}> 
                                    <img  style={{height: '50px', width: '10%'}} src={`http://127.0.0.1:8000/${item.profilepic}`}></img>
                                    <div style={{padding: '0px 40px'}}>
                                    <p className='blogHeader' style={{textAlign: 'left'}}>{item?.username}</p>    
                                    <p className='navigations' style={{textAlign: 'left', color: '#4D5053'}}>{item?.location}</p>    
                                    </div>
                             </div>
                                                        
                              <p style={{fontSize: '22px', fontFamily: 'jost',textAlign: 'left', color: '#4D5053'}}>{item?.testimony}</p>
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
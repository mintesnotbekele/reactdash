
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
     axios.get('https://curevive.prophecius.com/api/testimonial')
     .then((res)=>{
      setTestimonials(res.data);
     })
    },[])


      return(
        <Row>
         <Col span={4} ></Col>
                 <Col xs={24} xl={16} style={{background: '#ECDFD7', borderRadius: '20px'}} span={16}>
                <h1 className='testimonialheader' >
                What the People Think About Us
                </h1>
                <Row>
                    <Col span={24}>
                    <Carousel
                          additionalTransfrom={0}
                          arrows={true}
                          autoPlaySpeed={3000}
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
                              items: 3,
                              
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
                              items: 1,
                              
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
                     {testimonials.map((item) => 
                              <div style={{background: '#F6F5EC',  borderRadius: '20px', margin: '10px', padding: '20px'}}>
                             <div style={{display: 'flex' , flexWrap: 'wrap'}}> 
                                    <img  style={{height: '50px', width: '15%', borderRadius: '50%'}} src={`https://curevive.prophecius.com/${item.profilepic}`}></img>
                                    <div style={{padding: '0px 20px'}}>
                                    <p className='blogHeader' style={{textAlign: 'left'}}>{item?.username}</p>    
                                    <p className='navigations' style={{textAlign: 'left', color: '#4D5053', fontSize: '18px', fontFamily: 'lato'}}>{item?.location}</p>    
                                    </div>
                             </div>
                                                        
                              <p style={{fontSize: '22px', fontFamily: 'lato',textAlign: 'left', color: '#4D5053'}}>{item?.testimony}</p>
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
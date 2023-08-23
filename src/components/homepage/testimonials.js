
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
      
     axios.get(`${process.env.REACT_APP_API_URL}/api/testimonial`)
     .then((res)=>{
      setTestimonials(res.data);
     })
    },[])
   

      return(
        
      <section className="py-lg-3" style={{background: 'rgba(78, 52, 38, 0.6)', borderRadius: '45px'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto text-center">
                    <h2 className="articleHeader" style={{textAlign: 'center', color: 'white'}}>
                      What the People Think About Us</h2>
                       </div>
                    </div>
             
                    <Carousel
                           autoPlay
                          additionalTransfrom={0}
                          arrows={false}
                          infinite
                          autoPlaySpeed={2000}
                          centerMode={false}
                          className=""
                          containerClass="container-with-dots"
                          dotListClass=""
                          draggable
                          focusOnSelect={false}
                      
                          itemClass=""
                          keyBoardControl
                          minimumTouchDrag={80}
                          pauseOnHover
                       
                          renderDotsOutside={true}
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
                                 <div key={item.id} className="col-lg-11 mx-auto">
                                 <div className="card text-center bg-white" style={{background: 'rgb(0,0,0,0.0)'}}>
                                     <div className="card-body " style={{padding: '10px'}}>
                                     <div className="flex">
                                             <img style={{borderRadius: '50%'}}  src={`${process.env.REACT_APP_API_URL}/${item.profilepic}`} alt="..." className="avatar mb-2 shadow d-block col-md-4"/>
                                             <div style={{float: 'left'}} className="name ml-3 col-md-8" >
                                                 <span className="text-sm font-weight-bold text-dark mb-0">
                                                  <div style={{textAlign: 'left', fontSize: '22px', color: 'black'}}>
                                                  {item.username}

                                                  </div>
                                                  <div style={{textAlign: 'left', color: 'black'}}>
                                                  {item.location}

                                                  </div>
                          
                                                  </span>
                                               
                                             </div>
                                         </div>
                                     
                                         <p className="mt-4 md-12" style={{display: 'block', textAlign:'left', color: 'black'}}>{item.testimony}</p>
                                        
                                     </div>
                                 </div>
                             </div>
                             
                             
                           )}
                           </Carousel>
                           </div>
                                 
                                 </section>
                   
                     
                         
                  
                

      )
}
export default Testimonials;
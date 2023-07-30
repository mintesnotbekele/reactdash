import { Button} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import {Row, Col} from 'antd';
import disease from './assets/diseaseBanner.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouse from './assets/carouser.png'
import { ArrowRightOutlined} from '@ant-design/icons'
import Header from './components/header';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';  


import "react-multi-carousel/lib/styles.css";
import Testimonials from './components/homepage/testimonials';




const Diseases = ()=>{
    const {id} = useParams();
    const [diseases, setDiseases] = useState();
    const [researchpaper, setResearchpaper] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false);
    const [treatments, setTreatments] =useState();

     useEffect(()=>{
      axios.get('https://curevive.thotamali.com/api/testimonial')
      .then((res)=>{
       setTestimonials(res.data);
      })
     },[])
 
     useEffect(()=>{
        axios.get('https://curevive.thotamali.com/api/treatment')
        .then((res)=>{
          setTreatments(res.data);
        });
        axios.get(`https://curevive.thotamali.com/api/disease/${id}`)
        .then((res)=>{
          setDiseases(res.data);
        });
        axios.get('https://curevive.thotamali.com/api/researchpaper')
        .then((res)=>{
          setResearchpaper(res.data);
        });
     },[]);
    return(
        <div>
        <Header/>
            <img style={{width: '100%'}} src={disease} alt='disease'/>
            <div style={{width: '20%', margin: 'auto'}}>
            <img  src={`https://curevive.thotamali.com/${diseases?.picture}`} style={{marginTop: '-150px', marginBottom: '50px', borderRadius: '50px'}}  alt='disease'/>
            </div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Row>
                    <Col span={12} style={{padding: "50px"}}> 
                        <div style={{background: '#ECDFD7', borderRadius: '30px', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '50px', paddingRight: '5px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                         
                            <div className='diseasescol' style={{width: '50%',fontFamily: 'Playfair Display', textAlign: 'left'}}>Age Group:</div>
                            <div className='diseasecol1' style={{width: '50%', fontFamily: 'lato', textAlign: 'left'}}>    
                            { diseases?.agegroup}
                            </div>
                            
                        </div>
                        <div  style={{display: 'flex', justifyContent: 'space-evenly'}}>
                       
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'Playfair Display', textAlign: 'left'}}>
                            Duration:
                            </div>
                            <div style={{width: '50%'}}>
                                <p className='diseasescol' style={{textAlign: 'left'}}>
                                {diseases?.duration} 
                            </p>
                            </div>   
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'Playfair Display', textAlign: 'left'}}>
                             Treatment Includes:
                            </div>
                            <div style={{width: '50%', height: '100px',textAlign: 'left'}}>
                            <p className='diseasescol' style={{textAlign: 'left'}}> {diseases?.treatments}  </p> 
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'Playfair Display', textAlign: 'left'}}>
                            Mode: 
                            </div>
                            <div className='diseasecol1' style={{width: '50%', fontFamily: 'lato',textAlign: 'left'}}>
                            {diseases?.mode} 
                            </div>
                        </div>
                        </div>
                 </Col>
                <Col span={12} style={{marginTop: '40px'}}>
                    <h1 style={{fontFamily: "Playfair Display", fontSize: "40px", marginBottom: '40px'}}>
                    {diseases?.name} 
                    </h1>
                    <p className='firsttext' style={{textAlign: 'left'}}>
                      {diseases?.description}
                    </p>
                </Col>
            </Row>
        </Col>
        <Col span={4}></Col>
     </Row>

     <Row style={{marginTop: '100px'}}>
        <Col span={4}>
        </Col>

        <Col span={16} style={{ height: '600px', backgroundSize: '100% 100%', margin: 'auto'}}>
                    <iframe
                    style={{width: '100%'}}
                width="853"
                height="480"
                src={`${diseases?.videolink}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
             
          
            
        </Col>
        <Col span={4}>
        <div className="video-responsive">

  </div>
        </Col>
        
        <Col span={4}>
   
        </Col>
        </Row>
        <Row style={{marginTop: "100px" , background: '#ECDFD7', paddingTop: '150px', paddingBottom: '150px'}}>
            
            <div style={{width: '100%'}}> 
            <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "70px"}}>3d animation of products displaying out of the box</h1>
           </div>
        </Row>
        <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col span={16}> 
            <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px", marginBottom: '70px'}}>Clinically proven!</h1>
            <p style={{ fontFamily: "lato", fontSize: "22px",  marginBottom: '70px'}}>Our holistic treatments are backed by clinical evidence to promote overall well-being and improve physical, mental, and emotional health.</p>
            <div style={{display: 'flex', justifyContent: 'space-evenly',  marginBottom: '100px'}}>
            {treatments?.map((item, index) => 
                <Button  className="commonbutton buttonHeader" style={{color: 'black'}}>{item?.name}</Button>
               )}
            </div>
            </Col>
            <Col span={4}></Col>
        </Row>

        <Row>
            <Col span={4}>
            </Col>
            <Col span={16}>
            
            <Carousel
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
                items: 3,
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
            {researchpaper.map((item) => 
            <div style={{width: '95%', margin: 'auto    ',borderRadius: '60px', margin: '10px', padding: '10px',background: "#ECDFD7"}}>
                      <h1  style={{fontFamily: "Playfair Display", fontSize: "22px", fontWeight: 'bold', margin: '10px'}}>
                        {item.title}
                        </h1>
                        <p style={{fontFamily: 'lato', fontSize: '22px', margin: '20px', color: '#4D5053'}}> 
                        {item.description}
                        </p>
                        <div style={{margin: '20px'}}>
                        <a  style={{marginTop: '30px', marginLeft: '0px', color:" blue", textDecoration: 'undeline'}} target='_blank' href ={`${item.file}`} >Read reseach paper....</a>
                        </div>
                      </div>
          )}
                         
                  
                    
                
                 </Carousel>

                     
            </Col>
            <Col span={4}>
            </Col>
        </Row>

        <Row>
            <Col span={4}></Col>
            <Col span={16} style={{background: '#ECDFD7', borderRadius: '30px', marginTop: '100px', paddingTop: '30px'}}>
                <div>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>
                    SUCCESS STORIES
                    </h1>
                </div>
         
                 <Col style={{background: '#ECDFD7', borderRadius: '20px'}} span={24}>
             
                 <Carousel
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
                items: 2,
          
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
                     {testimonials.map((item) => 
                              <div style={{background: '#F6F5EC',  borderRadius: '20px', margin: '20px', padding: '30px'}}>
                             <div style={{display: 'flex'}}> 
                                    <img  style={{height: '50px', width: '15%', borderRadius: '50%'}} src={`https://curevive.thotamali.com/${item.profilepic}`}></img>
                                    <div style={{padding: '0px 40px'}}>
                                    <p className='blogHeader' style={{textAlign: 'left'}}>{item?.username}</p>    
                                    <p className='navigations' style={{textAlign: 'left', color: '#4D5053', fontSize: '18px', fontFamily: 'lato'}}>{item?.location}</p>    
                                    </div>
                             </div>
                                                        
                              <p style={{fontSize: '22px', fontFamily: 'lato',textAlign: 'left', color: '#4D5053'}}>{item?.testimony}</p>
                                              </div>
                           )}
                     
                         
                  
                    
                
                 </Carousel>
              
               
      
      
     </Col>

            </Col>
            <Col span={4}></Col>
        </Row>
        <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col span={16}>
            <div style={{marginBottom: '40px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>
                    Begin your journey
                    </h1>
              
                    </div>
                    <div style={{width: '100%',}}>
                    <Carousel
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
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row >
            <Col span={4}></Col>
            <Col span={16}>
            <div style={{margin: '50px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>
                    Pricing & Plan
                    </h1>
              
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{background: '#ECDFD7', borderRadius: '30px' , width: '100%', margin: '20px', padding: '40px'}}>
                            <p style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>10 Day trial </p>
                            <h1 style={{fontFamily: 'Playfair Display', fontSize: '85px', fontWeight: '500', textAlign: 'center' }}>₹950</h1>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>1 Consultation</p>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>Protocol Creation </p>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>Diet Plan</p>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>Yoga Protocol</p>
                            <div style={{marginTop: '40px'}}>
                            <Button  style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'lato', margin: 'auto'}}> Get Started<ArrowRightOutlined/></Button>
                            </div>
                        </div>
                        <div style={{background: '#ECDFD7', borderRadius: '30px', width: '100%', margin: '20px', padding: '40px'}}>
                            <p style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}> Complete Plan </p>
                            <h1 style={{fontFamily: 'Playfair Display', fontSize: '85px', fontWeight: '500', textAlign: 'center' }}>₹950</h1>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center', }}>Weekly Consultation followups Treatment Kit that include herbal capsules and esentil-oil bled
                                            Protocol Creation Diet Plan with Recipes Yoga Protocol
                                            Trataka and Meditation Protocol
                                            Acupressure and Reflexology
                                            Hydrotherapy and Packs
                                            Available doctor chat support

                                            </p>
                                            <div style={{marginTop: '40px'}}>
                            <Button style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'lato', margin: 'auto'}} > Get Started<ArrowRightOutlined/></Button>
                            </div>
                        </div>
                        <div style={{background: '#ECDFD7', borderRadius: '30px', width: '100%', margin: '20px', padding: '40px'}}>
                            <p style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Premium Plan </p>
                            <h1 style={{fontFamily: 'Playfair Display', fontSize: '85px', fontWeight: '500', textAlign: 'center' }}>₹950</h1>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>Weekly Consultation followups
                                        Additional Free 2 Consultations 3 Sessions with Reiki Master
                                        Treatment Kit that include herbal capsules and esentil-oil bled
                                        Protocol Creation
                                        Diet Plan with Recipes
                                        Yoga Protocol
                                        Trataka and Meditation Protocol
                                        Acupressure and Reflexology
                                        Hydrotherapy and Packs
                                        Available doctor chat support
                                        </p>
                         <div style={{marginTop: '40px'}}>
                             <Button  style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'lato', margin: 'auto'}}> Get Started<ArrowRightOutlined/></Button>
                          </div>
                         </div>
                    </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row>
            <Col span={4}></Col>
            <Col span={16}>
                <div style={{background: '#ECDFD7', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>Check out the questions asked by our patients previously</h1>
                    <h3 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "25px"}}>Visit Q&A </h3>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row style={{marginTop: '30px', marginBottom: '50px'}}>
            <Col span={4}>
            
            </Col>
            <Col span={16}>
        <div style={{margin: '70px'}}>
            <div style={{background: '#292F36', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px", color: 'white'}}>Not sure if its for you?</h1>
                    <Button style={{margin: 'auto', background: '#CDA274', color: 'white'}}>Talk to a doctor<ArrowRightOutlined/></Button>
                </div>
                </div>
            </Col>
            <Col span={4}>
            </Col>
        </Row>

        <Row>
        <Col span={24}>
          <div style={{textAlign: "center"}}>Copyright © Curevive | Designed by Collabity - Powered by OwlWorkLabs</div>
          <div style={{margin: 'auto', width: "10%"}}>
          <img style={{}} alt="logo" src={logo}/>
          <img alt="logo text" src={logotext}/>
          </div>
        </Col>
      </Row>
                </div>
       
    );
}
export default Diseases;
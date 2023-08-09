import {Row, Button,Col} from 'antd';
import disease from './assets/diseaseBanner.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouse from './assets/carouser.png'
import { ArrowRightOutlined} from '@ant-design/icons'
import Header from './components/header';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';  
import herbacap from './assets/herbalcapsule1.png';
import herbaloil from './assets/herbaloil.png'
import ReactPlayer from 'react-player'
import './App.css';





const Diseases = ()=>{
    const {id} = useParams();
    const [diseases, setDiseases] = useState();
    const [researchpaper, setResearchpaper] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false);
    const [treatments, setTreatments] =useState();

     useEffect(()=>{
      axios.get(`https://curevive.prophecius.com/api/testimonial`)
      .then((res)=>{
       setTestimonials(res.data);
      })
     },[])
 
     useEffect(()=>{
        axios.get(`https://curevive.prophecius.com/api/treatment`)
        .then((res)=>{
          setTreatments(res.data);
        });
        axios.get(`https://curevive.prophecius.com/api/disease/${id}`)
        .then((res)=>{
          setDiseases(res.data);
        });
        axios.get(`https://curevive.prophecius.com/api/researchpaper`)
        .then((res)=>{
          setResearchpaper(res.data);
        });
     },[]);
    return(
      <div className="App">  
        <Header/>
            <img style={{width: '100%'}} src={disease} alt='disease'/>
            <div style={{width: '20%', margin: 'auto'}}>
            <img  src={`https://curevive.prophecius.com/${diseases?.picture}`} style={{marginTop: '-150px', marginBottom: '50px', borderRadius: '50px'}}  alt='disease'/>
            </div>
            <Row>
                <Col  span={4}></Col>
                <Col xl={16} xs={24} span={16}>
                    <Row>
                    <Col xl={12} xs={24} span={12} style={{padding: "50px"}}> 
                        <div style={{background: '#ECDFD7', borderRadius: '30px', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '50px', paddingRight: '5px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                         
                            <div className='diseasescol' style={{width: '50%',fontFamily: 'Playfair Display', textAlign: 'left'}}>Age Group:</div>
                            <div className='diseasecol1' style={{width: '50%', fontFamily: 'lato', textAlign: 'left'}}>    
                            <p className='diseasescol' style={{textAlign: 'left', overflowWrap: 'break-word'}}>{ diseases?.agegroup}</p>
                            </div>
                            
                        </div>
                        <div  style={{display: 'flex', justifyContent: 'space-evenly'}}>
                       
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'Playfair Display', textAlign: 'left'}}>
                            Duration:
                            </div>
                            <div style={{width: '50%'}}>
                                <p className='diseasescol' style={{textAlign: 'left', overflowWrap: 'break-word'}}>
                                {diseases?.duration} 
                            </p>
                            </div>   
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'Playfair Display', textAlign: 'left'}}>
                             Treatment Includes:
                            </div>
                            <div style={{width: '50%', height: '100px',textAlign: 'left', overflowWrap: 'break-word'}}>
                            <p className='diseasescol' style={{textAlign: 'left', overflowWrap: 'break-word'}}> {diseases?.treatments}  </p> 
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'Playfair Display', textAlign: 'left'}}>
                            Mode: 
                            </div>
                            <div className='diseasecol1' style={{width: '50%', fontFamily: 'lato',textAlign: 'left', overflowWrap: 'break-word'}}>
                            {diseases?.mode} 
                            </div>
                        </div>
                        </div>
                 </Col>
                <Col span={12} style={{marginTop: '40px'}}>
                  <div style={{padding: '10px'}}>
                    <h1 style={{fontFamily: "Playfair Display", fontSize: "40px", marginBottom: '40px'}}>
                    {diseases?.name} 
                    </h1>
                    <p className='firsttext' style={{textAlign: 'left'}}>
                      {diseases?.description}
                    </p>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col span={4}></Col>
     </Row>

     <Row className='testimonialgap' >
        <Col span={4}>
        </Col>
{/* 
        <Col xl={16} xs={24} span={16} style={{ maxHeight: '200px', backgroundSize: '100% 100%', margin: 'auto'}}>

            <div className="player-wrapper">
          <ReactPlayer
            url="https://youtu.be/3eLrINg3O2Q"
            className="react-player"
            playing
            width="100%"
            height="100%"
            controls={false}
          />
        </div>
            
        </Col> */}
        <Col span={4}>
        
        </Col>
        
        <Col span={4}>
   
        </Col>
        </Row>
        <Row className='ecogap' style={{ background: '#ECDFD7', paddingTop: '150px', paddingBottom: '150px'}}>
           <Col xl={4}></Col>
           <Col xs={24} xl={16}> 
           <Row>
           <Col xl={12} xs={24}>
            <div style={{width: '100%',}}>
              <img src={herbacap} style={{ margin: 'auto',height: '400px'}}/>
              </div>
              </Col>
             
              <Col xl={12} xs={24}>
              <div style={{width: '100%'}}>
              <img src={herbaloil} style={{ margin: 'auto', height: '400px'}}/>
             </div>
              </Col>
              </Row>
           </Col>
           <Col xl={6}></Col>
        </Row>
        <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col xl={16} xs={24} span={16}> 
            <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px", marginBottom: '70px'}}>Clinically proven!</h1>
            <p style={{ fontFamily: "lato", fontSize: "22px", textAlign: 'center', marginBottom: '70px'}}>Our holistic treatments are backed by clinical evidence to promote overall well-being and improve physical, mental, and emotional health.</p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly',  marginBottom: '100px'}}>
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
            <Col xs={24} xl={16} span={16}>
            
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
                      <h1  style={{fontFamily: "Playfair Display", fontSize: "22px", fontWeight: 'bold', margin: '20px'}}>
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
            <Col xl={16} xs={24} span={16} style={{background: '#ECDFD7', borderRadius: '30px', marginTop: '100px', paddingTop: '30px'}}>
                <div>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>
                    SUCCESS STORIES
                    </h1>
                </div>
         
                 <Col style={{background: '#ECDFD7', borderRadius: '20px', padding: '50px'}} span={24}>
                 <section className="py-lg-5">
        <div className="container">
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
                                 <div className="col-lg-11 col-md-8 mb-4">
                                 <div className="card text-center" style={{background: 'background: #F6F5EC'}}>
                                     <div className="card-body">
                                     <div className="mt-4 mb-4">
                                             <img style={{float: 'left', borderRadius: '50%'}} src={`http://curevive.prophecius.com/${item.profilepic}`} alt="..." className="avatar mx-auto mb-2 shadow d-block mx-5"/>
                                             <div style={{float: 'left'}} className="name d-block mx-3" >
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
                                         <br/>
                                         <br/>
                                         <p className="mt-4 md-12" style={{display: 'block', textAlign:'left', color: 'black'}}>{item.testimony}</p>
                                        
                                     </div>
                                 </div>
                             </div>
                           )}
                           </Carousel>
                    </div>
                    </section>
     </Col>

            </Col>
            <Col span={4}></Col>
        </Row>
        
        
        
        
        <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col xl={16} xs={24} span={16}>
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
            <Col xl={16} xs={24} span={16}>
            
            <div>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>
                    Pricing & Plan
                    </h1>
              
                    </div>
                   <Row>
                    <Col xs={24} xl={8}>
                      <div style={{padding: '10px'}}>
                        <div style={{background: '#ECDFD7', borderRadius: '30px' , width: '100%', padding: '20px'}}>
                            <p className='pricingheader'>10 Day trial </p>
                            <p style={{textAlign: 'center'}}>/ month</p>
                            <h1 className='pricingstyle'>₹950</h1>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>1 Consultation</p>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>Protocol Creation </p>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>Diet Plan</p>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center'}}>Yoga Protocol</p>
                            <div className='mx-auto justify-center flex'>
                             <Button  style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'lato', margin: 'auto', paddingTop: '10px', paddingBottom: '30px'}}> Get Started<ArrowRightOutlined/></Button>
                          </div>
                        </div>
                        </div>
                        </Col>
                        <Col xs={24} xl={8}>
                        <div style={{padding: '10px'}}>
                        <div style={{background: '#ECDFD7', borderRadius: '30px', width: '100%', padding: '40px'}}>
                        <p className='pricingheader'> Complete Plan </p>
                            <h1 className='pricingstyle'>₹9800</h1>
                            <p style={{textAlign: 'center'}}>/ month</p>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'lato', fontSize: '20px', textAlign: 'center', }}>Weekly Consultation followups Treatment Kit that include herbal capsules and esentil-oil bled
                                            Protocol Creation Diet Plan with Recipes Yoga Protocol
                                            Trataka and Meditation Protocol
                                            Acupressure and Reflexology
                                            Hydrotherapy and Packs
                                            Available doctor chat support

                                            </p>
                          <div className='mx-auto justify-center flex'>
                             <Button  style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'lato', margin: 'auto', paddingTop: '10px', paddingBottom: '30px'}}> Get Started<ArrowRightOutlined/></Button>
                          </div>
                        </div>
                        </div>
                        </Col>
                        <Col xs={24} xl={8}>
                        <div style={{padding: '10px'}}>
                        <div style={{background: '#ECDFD7', borderRadius: '30px', width: '100%', padding: '40px'}}>
                        <p className='pricingheader'>Premium Plan </p>
                            <h1 className='pricingstyle'>₹10,,380</h1>
                            <p style={{textAlign: 'center'}}>/ month</p>
                            
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
                         <div className='mx-auto justify-center flex'>
                             <Button  style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'lato', margin: 'auto', paddingTop: '10px', paddingBottom: '30px'}}> Get Started<ArrowRightOutlined/></Button>
                          </div>
                         </div>
                         </div>
                         </Col>
                         </Row>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row>
            <Col span={4}></Col>
            <Col xl={16} xs={24} span={16}>
                <div style={{background: '#ECDFD7', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>Check out the questions asked by our patients previously</h1>
                    <h3 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "25px"}}>Visit Q & A </h3>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row style={{marginTop: '30px', marginBottom: '50px'}}>
            <Col span={4}>
            
            </Col>
            <Col xl={16} xs={24} span={16}>
        <div style={{margin: '10px'}}>
            <div style={{background: '#292F36', borderRadius: '30px', marginTop: '100px', padding: '30px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px", color: 'white'}}>Not sure if its for you?</h1>
                   <div className='mx-auto justify-center flex'>
                    <Button style={{margin: 'auto', background: '#CDA274', color: 'white', paddingBottom: '30px', paddingTop: '5px'}}>Talk to a doctor<ArrowRightOutlined/></Button>
                    </div>
                </div>
                </div>
            </Col>
            <Col span={4}>
            </Col>
        </Row>

        <Row>
        <Col  span={24}>
          <div style={{textAlign: "center", paddingBottom: '100px'}}>Copyright © Curevive </div>
        
          
        </Col>
      </Row>
                </div>
       
    );
}
export default Diseases;
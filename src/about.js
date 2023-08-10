
import aboutBanner from './assets/aboutBanner.jpg';
import {Row, Col, Button,Input} from 'antd';
import faqs from "./assets/faq.png";
import disease from "./assets/disease.jpg";
import TextArea from 'antd/es/input/TextArea';
import {ArrowRightOutlined} from '@ant-design/icons';
import Header from './components/header';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
import axios from 'axios';  
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import env from "react-dotenv";
import Testimonials from './components/homepage/testimonials';
import './App.css';
const About=()=>{


  const [quotes, setQuotes] = useState([]);
  const [teams, setTeams] = useState([]);
  const [faq, setFaq] = useState([]);
  const [sectionone, setSectionone] = useState([]);
  const [sectiontwo, setSectiontwo] = useState([]);
 
  const [show, setShow] = useState(false);

  const showOverlay = () => {
      setShow(true);
  };

  const hideOverlay = () => {
      setShow(false);
  };


   useEffect(()=>{

    axios.get(`https://curevive.prophecius.com/api/quote`)
    .then((res)=>{
      setQuotes(res.data);
    });
    axios.get(`https://curevive.prophecius.com/api/sectionone`)
    .then((res)=>{
      setSectionone(res.data);
    });
    axios.get(`https://curevive.prophecius.com/api/sectiontwo`)
    .then((res)=>{
      setSectiontwo(res.data);
    });
    axios.get(`https://curevive.prophecius.com/api/teams`)
    .then((res)=>{
      setTeams(res.data);
    });
    
    axios.get(`https://curevive.prophecius.com/api/faq`)
    .then((res)=>{
      setFaq(res.data);
    });

    
 },[]);

 const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
      <div className="carousel-button-group mb-4  gap-4 flex justify-end 
      items-center w-full">
        <button className='block p-3 bg-slate-300' onClick={() => 
        previous()}> <ArrowBackIosIcon /></button>
        <button onClick={() => next()}><span className='block p-3 bg-slate-300' ><ArrowForwardIosIcon /></span></button>
     </div>
  
   );
 };

return(
  <div className="App">    
      <Header/>
      <img alt="about Banner" src={aboutBanner}/>
      <div className='aboutquotes'>
      
      <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            autoPlay
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
                items: 1,
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
           {
      quotes.map((item) => 
               <p className="italictext">
                {item?.description}
               </p>
      )}
          
          </Carousel>
      </div>      
      { sectiontwo.map((items) =>
      <Row  className='aboutgap'>
        <Col span={4}>
            
        </Col>
        
        <Col xl={8} xs={24} span={8}>
            <div>
              
                <img alt="herbs" src={`${process.env.REACT_APP_API_URL}/${items.picture}`}/>
            </div>
        </Col>
        <Col xl={8} xs={24} span={8}>
        
            <div style={{padding: "30px"}}>
            <h1 className='firstheaders'>{items.title}</h1>
            <p className='firsttext' style={{textAlign: 'left'}}>{items.description}</p>
            </div>
          
         </Col>
        <Col span={4}>
            
        </Col>
      </Row>
       )}
      
      { sectionone.map((items) =>

      <Row style={{marginTop: "100px"}}>
        <Col span={4}>
            
        </Col>
        <Col xl={8} xs={24} span={8}>
            <div style={{padding: "30px"}}>
            <h1 className='firstheaders'>{items.title}</h1>
            <p className='firsttext' style={{textAlign: 'left'}}> {items.description}</p>
            </div>
         </Col>
         <Col xl={8} xs={24} span={8}>
            <div>
                <img alt="herbs" src={`${process.env.REACT_APP_API_URL}/${items.picture}`}/>
            </div>
        </Col>
        <Col span={4}>
            
        </Col>
      </Row> 

       )}
      <Row style={{marginTop: "100px", paddingBottom: '100px', backgroundColor: "#ECDFD7"}}>
      <Col  xl={24} xs={24} span={24}>
            <div style={{margin: 'auto', width: '100%', }}> 
            <h1 className='firstheaders' style={{ textAlign: 'center'}}>OUR TEAM</h1>
            </div>
            </Col>
        <Col span={6}>
        </Col>
        <Col  xl={12} xs={24} span={12}>
        
       <Carousel
            
            additionalTransfrom={0}
            arrows={false} 
            renderButtonGroupOutside={false} 
            customButtonGroup={<ButtonGroup />}
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
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
          {teams.map((items) =>
                        <div className='team-member p-1' >
                        <div className="thumb">
                            <img src={`${process.env.REACT_APP_API_URL}/${items.picture}`} alt="Alexis-Team" />
                        </div>
                        <div className="content">
                            <div className="member-info">
                                <h3 className="name">
                                    <Link
                                        >{items.name }
                                    </Link>
                                </h3>
                                <span className="designation">{items?.role}</span>
                            </div>
                            <div className="member-icons">
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="social_twitter"></i>
                                </a>
                                <a
                                    href="https://facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="social_facebook"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="social_linkedin_square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                          )
                          } 
          
          </Carousel>
         </Col>
        <Col span={6}>
            
        </Col>
      </Row>
      <Row style={{marginTop: "100px",}}>
      <Col span={24}>
            <div style={{margin: 'auto', width: '100%', }}> 
            <h1 style={{fontFamily: "Playfair Display", fontSize: "50px", textAlign: 'center'}}>Every Question Answered</h1>
            </div>
            </Col>
        <Col span={4}>
       </Col>
        <Col xl={8} xs={24} span={8}>

             <div className="row mb-5">
                <div className="col-md-10 mx-auto">
                    <div className="card">
                        <div className="accordion p-3" id="accordionPricing">
                         {faq.map((item) => 
                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header" id="headingOne"> <button className="accordion-button border-bottom font-weight-bold text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse`+item.id} aria-expanded="false" aria-controls="collapseOne">
                                  {item?.title} <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> </button> </h6>
                                <div id={`collapse`+item.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionPricing" >
                                    <div className="d-block d-lg-flex"> <img className="w-50 w-lg-20 my-3" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/rocket-white.png" alt="rocket"/>
                                        <div className="accordion-body text-sm opacity-8 my-auto"> We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed. <br/><br/> There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. </div>
                                    </div>
                                </div>
                            </div>
                           
                        )}
                        
                    </div>
                </div>
            </div>   
               </div> 
         </Col>
         <Col xl={8} xs={24} span={8}>
         
        <img style={{borderRadius: '30px', maxHeight: '500px', margin: 'auto'}} alt="frequently asked question" src={faqs}/>
         </Col>
        <Col span={6}>
      </Col>
      </Row>
   
    
    
      <Row style={{marginTop: "100px",}}>
      <Col span={24}>
            <div style={{margin: 'auto', width: '100%', }}> 
            <h1 style={{fontFamily: "Playfair Display", fontSize: "50px", textAlign: 'center'}}>Diseases related questions</h1>
            </div>
            </Col>
        <Col span={4}>

        </Col>
        <Col xl={8} xs={24} span={8}>
         
        <img style={{borderRadius: '30px', maxHeight: '500px', margin: 'auto', padding: '10px'}} alt="disease related question" src={disease}/>
         </Col>
         <Col xl={8} xs={24} span={8}>
                      
         <div className="row mb-5">
                <div className="col-md-10 mx-auto">
                    <div className="card">
                        <div className="accordion p-3" id="accordionPricing">
                         {faq.map((item) => 
                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header" id="headingOne"> <button className="accordion-button border-bottom font-weight-bold text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse`+item.id} aria-expanded="false" aria-controls="collapseOne">
                                  {item?.title} <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> </button> </h6>
                                <div id={`collapse`+item.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionPricing" >
                                    <div className="d-block d-lg-flex"> <img className="w-50 w-lg-20 my-3" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/rocket-white.png" alt="rocket"/>
                                        <div className="accordion-body text-sm opacity-8 my-auto"> We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed. <br/><br/> There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. </div>
                                    </div>
                                </div>
                            </div>
                           
                        )}
                        
                    </div>
                </div>
            </div>   
               </div> 
         </Col>
         
        <Col span={8}>
            
        </Col>
      </Row>



      <Row style={{marginTop: "100px", marginBottom: '50px', backgroundColor: "#ECDFD7"}}>
   
        <Col xl={6} xs={24} span={6}>

        </Col>
        <Col xl={12} xs={24} span={12} className='aboutContainer'>
        <div style={{margin: 'auto', width: '100%', }}> 
            <h1 style={{fontFamily: "Playfair Display", fontSize: "50px", textAlign: 'center'}}>Have concerns? Let's have
a productive talk.</h1>
            </div>  
            <div style={{width: '100%', display: "flex"}}>
            <Input style={{background: "#ECDFD7",border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Name'/>
            <Input style={{background: "#ECDFD7",border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Email'/>
           
            </div>
            <div style={{marginTop: "30px"}}>
            <TextArea style={{background: "#ECDFD7", border: "none",borderBottom: '1px solid ', }} placeholder='Hello I am Intrested in..'/>          
            </div>   
            <div style={{marginTop: "50px"}} className='mx-auto flex justify-center'>
            <Button style={{background: '#292F36', margin: 'auto', color: 'white', fontSize: '18x', paddingTop: '10px', paddingBottom: '30px'}}>Send Now <ArrowRightOutlined style={{color: '#CDA274', marginLeft: "10px"}}/> </Button>
            </div>
         </Col>
        <Col span={6}>
            
        </Col>
      </Row>
     <Footer />
    </div>

)
}
export default About; 
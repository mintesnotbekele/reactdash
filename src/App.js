import background4 from "./assets/1.png";
import background5 from "./assets/4.png";
import newhand from "./assets/3.png";
import birds from "./assets/6.png";
import Header from './components/headerbackup';
import 'react-multi-carousel/lib/styles.css';
import {ArrowRightOutlined} from '@ant-design/icons';
import carouse from './assets/carouser.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './App.css';
import './css/theme.css';
import { Button ,Row, Col} from "antd";
import Banner from './components/homepage/banner';
import Counter from './components/homepage/counter';
import Testimonials from './components/homepage/testimonials';
import Articles from './components/homepage/articles';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplaySlider from "./components/slider/sliderDisplay";
import hands from "./assets/na.jpeg";
import HomeHeader from "./components/header";
import HomeBanner from "./components/homepage/homebanner";
import { Height } from "@mui/icons-material";




function App() {


  const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },
    { _id: 5, text: "mno" },
    { _id: 6, text: "pqr" },
    { _id: 7, text: "stu" },
    { _id: 8, text: "vwx" },
    { _id: 9, text: "yza" }
  ];

 const navigate= useNavigate();
  const [diseases, setDiseases] = useState([]);
  useEffect(()=>{
   
    axios.get(`${process.env.REACT_APP_API_URL}/api/disease`)
    .then((res)=>{
      let temp  = res.data;
        temp.forEach((value, idx) => 
        {
         temp[idx].index=idx;
        })

        setDiseases(temp.filter(item=>{
          return(
            item.index < 4
              )
          }));
    })
   },[])
  return (
    
    
    <div className="App">    
     <div  style={{position: 'relative', width: "100%", marginBottom: '80px' }} >
      <HomeHeader/> 
       </div>
      <HomeBanner/>  
        <section className="" style={{marginTop: '150px'}}>
          <div className="container">
              <div className="row pt-5">
                  <div className="col-md-4 py-7">
                      <div className="info" onClick={()=> navigate('/diseases')}>
                        <h6 className="blogHeader headerhover">Diseases</h6>
                        <p className="firsttext" style={{color: 'black', textAlign: 'justify'}}>Have diabetes, hypertension, thyroid or more? Learn about your disease and much more.<br/></p>
                    </div>
                </div>
                <div className="col-md-4 p-4 " style={{ borderTop: 'none',borderBottom: 'none', borderLeftWidth: "1px", borderLeft: 'solid',  borderRight: 'solid', borderWidth: "1px"}}>
                    <div className="info" onClick={()=> navigate('/about')}>
                        
                        <h6 className="blogHeader headerhover">Welcome to Curevive</h6>
                        <p className="firsttext" style={{color: 'black', textAlign: 'justify'}}>When one lives in harmony with nature and her essence, they have attained their highest form of being. We at Curevive aim at helping you reach the greatest version of yourself by enriching your innate ability to oppose disease and remain in a state of equilibrium; physically, emotionally, socially and spiritually.</p>
                    </div>
                </div>
                <div className="col-md-4 py-7">
                    <div className="info" onClick={()=> navigate('/treatment')}>
                       
                        <h6 className="blogHeader headerhover">Treatments</h6>
                        <p className="firsttext"style={{color: 'black', textAlign: 'justify'}}>Find a cure for your problems through the extensively researched treatments by specialists of the nation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
       
      
        <section className="">
        <div className="container py-lg-5">
            <div className="row align-items-center">
                 <div className="col-md-6 mb-md-0 mb-4 pe-5">
                    <h3 className="mb-3" style={{textAlign: 'left'}}><span></span>
                        <span className="articleHeader" style={{whiteSpaceCollapse: 'preserve', color: '#292F36', textAlign: 'left'}}>We Create The Art<br/>Of Healthy Living!</span>
                    </h3>
                    <p className="mb-md-5 mb-4 " style={{textAlign: 'left'}}>
                      <span className="firsttext" style={{whiteSpaceCollapse: 'preserve', color: '#292F36', textAlign: 'left'}}>When one lives in harmony with nature and her essence, they have attained their highest form of being. We at Curevive aim at helping you reach the greatest version of yourself by enriching your innate ability to oppose disease and remain in a state of equilibrium; physically, emotionally, socially and spiritually.
                      </span></p>
                      <Link className="btn btn-dark" to="/treatment" style={{background: '#292F36', float: 'left', zIndex: '5000'}}>Find a Cure</Link>

                </div> 
                <div className="col-md-6">
                    <div className="blur-shadow-image text-center">
                        <img src={hands} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg max-height-600"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
         <img alt="background" src={background4} className='artlinestyle3'/>
         <div className='testimonialgap'>

         </div>
         <Row>
          <Col span={4}></Col>
          <Col span={16}>
         <Testimonials/>
         </Col>
         <Col></Col>
         </Row>
        <div style={{width: '700px',marginTop: '50px', overflowX: 'hidden'}}> <img alt="background" className='artlineStyle' src={background5}/></div>
       
         <div className="mt-lg-12">
          <Row>
            <Col md={0} xl={4}>
            </Col>
            <Col  xl={16} md={24}>
            <h1 style={{fontSize: '50px', color: '#292F36', marginBottom: "40px", fontFamily: 'Playfair Display'}}>Diseases</h1>
         <p style={{ padding: '10px', textAlign: 'center', color: '#4D5053', fontSize: '22px', fontFamily: 'lato'}}>Here is a list of the most common diseases we have cured through our time in this industry!</p>
         
            </Col>
            <Col md={0} xl={4}>
            </Col>
          </Row>
          </div>

          <Row style={{ zIndex: "1500"}}>
        <Col xs={24} md={0} xl={4}></Col>
         <Col xs={24} md={24} xl={16}>
          <div className="mt-lg-6">
         <Row gutter={16} style={{flex: 'justify', paddingLeftLeft: '15px', padding: '10px' }} >
         {diseases.map((item) => 
         <Col   className="gutter-row"  xs={24} md={12} xl={9} gap-1>
           <div  className="col-lg-12" style={{background: 'rgb(0,0,0,0.0)'}} >
               <div className='team-member disease-member' >
                     <div className="thumb">
                        <img  src={`${process.env.REACT_APP_API_URL}/${item.picture}`} className="img-fluid" style={{borderTopRightRadius:'45px', width: '100%', height: '390px'}}/>
                      </div>
                        <div style={{width: '100%', padding: '10px'}} className="content">
                                            <div className="member-info" style={{padding: '10px'}}>
                                             <h3 className="name">
                                    <Link
                                        >{item.description }
                                    </Link>
                                </h3>
                               
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                           <a className="card-title icon-move-right d-block text-darker font-weight-bolder"> 
                                        <Link style={{color: 'black', fontSize: '30px', float: 'left'}} to={`/diseases/${item.id}`}>
                                       {item?.name}
                        </Link> <i className="fas fa-arrow-right ms-1" style={{float: 'right', fontSize: '35px'}} aria-hidden="true"></i> </a> </div>
                   </div>
              </Col>
          )}
         <div style={{width: '100%'}}>
          <br/>
          <br/>
         <a href="/diseases" className="btn btn-dark" style={{background: '#292F36'}}>
              More
           </a>
         </div>
         </Row>
         </div>
          
        
         </Col>
         <Col xl={4} >
         </Col>
        </Row>
          <Counter/>   
          <Row  className="my-5">
            <Col xs={24} md={2} xl={7} span={7}></Col>
            <Col  xs={24} md={20} xl={10}  span={10}>
              <h1 className='firstheaders' style={{color: 'black'}}>
                 YOUR JOURNEY WITH US
              </h1>
              </Col>  
          </Row> 
           <div style={{width: '1000px', overflowX: 'hidden'}}>
            <img alt="background" src={newhand} className='artlinestyle4'/>
            </div>
          <Row style={{marginBottom: '30px'}}>
            <Col md={2} xl={7} span={7}></Col>
          <Col  xs={24} md={20} xl={10}  span={10}>
              <div className="p-2">
                <p className='firsttext' style={{color: '#4D5053'}}>
                Wondering what your journey with us throughout your treatments would look like? Here is a breakdown of how we will be working together.
                </p>
              </div>
              </Col>
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

         <div style={{width: '1000px', overflowX: 'hidden'}}><img alt="background" className='artlinestyle5' src={birds}/></div>
           <Articles/>
         <div>
            <Row style={{padding: '10px'}}                                                                                                                                 >
              <Col md={2} xl={4} span={4}></Col>
              <Col xs={24} md={20} xl={16} span={16} style={{background: '#292F36  ', borderRadius: '40px', alignItems: 'center'}}>
              <div style={{marginTop: "70px",marginBottom: "40px", }}>
                <h1 className='articleHeader' style={{ textAlign: 'center', color: '#F6F5EC'}}>Want to get your doubts cleared?</h1>
              <p style={{margin: "20px", fontSize: '22px', color: '#F6F5EC'}}>Book a complimentary consultation now!</p>
             <Link to="/book">
              <Button style={{ fontSize: '22px', background: 'none',backgroundColor: '#CDA274',height: '60px', borderRadius: '20px', color: '#F6F5EC'}}>
                  Book
              <ArrowRightOutlined/>
              </Button>
              </Link>
              </div>
              </Col>
            </Row>
            </div>
            <Row style={{alignContent: 'center'}}>
              <Col span={9}></Col>
              <Col span={6} style={{marginTop: '90px'}}>
              <p style={{color : '0xFF4D5053', fontSize: '22.sp', letterSpacing: '0.22.sp'}}>Copyright © Curevive</p>
              </Col>
            </Row>
        
        {/* <Footer/>  */}
       
    </div>
  );
}

export default App;

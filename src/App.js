
import meditate from "./assets/meditate.png";
import background1 from './assets/first.png'
import background2 from "./assets/first.png";
import background4 from "./assets/1.png";
import background5 from "./assets/4.png";
import newhand from "./assets/3.png";
import birds from "./assets/6.png";
import Header from './components/header';
import {RightOutlined } from '@ant-design/icons';
import 'react-multi-carousel/lib/styles.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import {ArrowRightOutlined} from '@ant-design/icons';
import './App.css';
import { Button ,Row, Col} from "antd";
import Banner from './components/homepage/banner';
import Counter from './components/homepage/counter';
import Testimonials from './components/homepage/testimonials';
import Articles from './components/homepage/articles';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import DisplaySlider from "./components/slider/sliderDisplay";
import hands from "./assets/na.jpeg";

function App() {
  const [diseases, setDiseases] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/disease')
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
     <div  style={{background: "#4E3426",position: 'relative', width: "100%", marginBottom: '80px' }} >
      <Header/> 
    </div>
    <Banner/> 
   
    
       <section className="">

        <div className="container">
            <div className="row pt-5">
                <div className="col-md-4 p-4">
                    <div className="info">
                        <h6 className="blogHeader" style={{textAlign: 'center', color: 'black'}}>Diseases</h6>
                        <p className="firsttext"><span style={{whiteSpaceCollapse: 'preserve', color: 'black'}}>Have diabetes, hypertension, thyroid or more? Learn about your disease and much more.<br/></span></p>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="info">
                        
                        <h6 className="blogHeader" style={{textAlign: 'center', color: 'black'}}>Welcome to Curevive</h6>
                        <p className="firsttext" style={{color: 'black'}}>When one lives in harmony with nature and her essence, they have attained their highest form of being. We at Curevive aim at helping you reach the greatest version of yourself by enriching your innate ability to oppose disease and remain in a state of equilibrium; physically, emotionally, socially and spiritually.</p>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="info">
                       
                        <h6 className="blogHeader" style={{textAlign: 'center', color: 'black'}}>Treatments</h6>
                        <p className="firsttext"> <span style={{whiteSpaceCollapse: 'preserve',color: 'black'}}>Find a cure for your problems through the extensively researched treatments by specialists of the nation.</span></p>
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
                      <a className="btn btn-dark" href="javascript:;" style={{background: '#292F36', float: 'left'}}>Find a Cure</a>

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
         <Testimonials/>
        <div style={{width: '700px',marginTop: '50px', overflowX: 'hidden'}}> <img alt="background" className='artlineStyle' src={background5}/></div>
       
         <div className="mt-lg-12">
          <Row>
            <Col md={0} xl={4}>
            </Col>
            <Col  xl={16} md={24}>
            <h1 style={{fontSize: '50px', color: '#292F36', marginBottom: "40px", fontFamily: 'Playfair Display'}}>Diseases</h1>
         <p style={{ padding: '10px', textAlign: 'left', color: '#4D5053', fontSize: '22px', fontFamily: 'lato'}}>Here is a gist of the most common diseases we have cured through our time in this industry!</p>
         
            </Col>
            <Col md={0} xl={4}>
            </Col>
          </Row>
          </div>

          <Row style={{ zIndex: "1500"}}>
        <Col xs={24} md={0} xl={4}></Col>
         <Col xs={24} md={24} xl={16}>
          <div className="mt-lg-6">
         <Row style={{flex: 'justify', paddingLeftLeft: '15px', padding: '10px' }} >
         {diseases.map((item) => 
        
         <Col xs={24} md={12} xl={12}>

           <div className="col-lg-12 mb-lg-0 mb-4" style={{background: 'rgb(0,0,0,0.0)'}} >
                    <div className="card card-plain" style={{background: 'rgb(0,0,0,0.0)'}}>
                        <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1" style={{background: 'rgb(0,0,0,0.0)'}}> <a href="javascript:;" className="d-block"> 
                        <img src={`http://127.0.0.1:8000/${item.picture}`} className="img-fluid" style={{borderTopRightRadius:'45px', width: '96%'}}/> </a> </div>
                        <div className="card-body pt-3"> <a href="javascript:;" className="card-title h6 icon-move-right d-block text-darker font-weight-bolder"> 
                        <Link style={{color: 'black'}} to={`/diseases/${item.id}`}>
                        {item?.name}
                        </Link> <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i> </a> </div>
                    </div>
                </div>
        </Col>
        
          )}
       
         <div style={{width: '100%'}}>
         <a href="/cureddiseases" className="btn btn-dark" style={{background: '#292F36'}}>
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
         <DisplaySlider style={{zIndex: '2000'}}/>  
         <div style={{width: '1000px', overflowX: 'hidden'}}><img alt="background" className='artlinestyle5' src={birds}/></div>
        

         {/* <lottie-player src="https://lottie.host/8a58db85-046c-4365-b1da-cff75c32b55c/Nxt8agzi12.json" background="#FFF" speed="1" style={{width: '300px', height: '300px'}} loop controls autoplay direction="1" mode="normal"></lottie-player> */}
        
           <Articles/>
         <div>
            <Row style={{padding: '10px'}}                                                                                                                                 >
              <Col md={2} xl={4} span={4}></Col>
              <Col xs={24} md={20} xl={16} span={16} style={{background: '#292F36  ', borderRadius: '40px', alignItems: 'center'}}>
              <div style={{marginTop: "70px",marginBottom: "40px", }}>
                <h1 className='articleHeader' style={{ textAlign: 'center', color: '#F6F5EC'}}>Want to get your doubts cleared?</h1>
              <p style={{margin: "20px", fontSize: '22px', color: '#F6F5EC'}}>Book a complimentary consultation now!</p>
              <Button style={{ fontSize: '22px', background: 'none',backgroundColor: '#292F36',height: '60px', borderRadius: '20px', color: '#F6F5EC'}}>
             Book
              <ArrowRightOutlined /></Button>
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

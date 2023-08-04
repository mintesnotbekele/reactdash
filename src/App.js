
import newlogo from './assets/curlogo.png'
import meditate from "./assets/meditate.png";
import background1 from './assets/first.png'
import background2 from "./assets/first.png";
import background4 from "./assets/1.png";
import background5 from "./assets/4.png";
import foot1 from "./assets/foot.png";

import newhand from "./assets/3.png";
import birds from "./assets/6.png";
import Header from './components/header';
import {RightOutlined } from '@ant-design/icons';
import 'react-multi-carousel/lib/styles.css';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import {ArrowRightOutlined} from '@ant-design/icons';
import './App.css';

import { Image,Button ,Row, Col} from "antd";
import Banner from './components/homepage/banner';
import Diseases from './components/homepage/diseases';
import Counter from './components/homepage/counter';
import Testimonials from './components/homepage/testimonials';
import HomeSlider from './components/homepage/homeslider';
import Articles from './components/homepage/articles';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer } from 'flowbite-react';

function App() {
  const [diseases, setDiseases] = useState([]);
  useEffect(()=>{
    axios.get('https://curevive.prophecius.com/api/disease')
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
     <div style={{background: "#4E3426",position: 'relative', width: "100%" }} >
      <Header/> 
    </div>
     <Banner/> 
        <div style={{margin: 'auto', width: '100%'}}> 
         <Row style={{marginTop: '100px', zIndex: "1000"}}>
          <Col span={4}></Col>
          <Col xs={24} md={8} xl={16} span={16}>
            <Row>
          <Col xs={24} md={4} xl={8} span={8} style={{justifyContent: 'space-evenly'}}>
          <h3 className='latestArticleheader' style={{textAlign: 'center'}}>
              Diseases
            </h3>
            <div>
            <p className='firsttext homeitems' style={{textAlign: 'justify', margin: '30px', color: '#4D5053'}}>
              Have diabetes, hypertension, thyroid or more? Learn about your disease and much more.
              </p>
              <Link to="/cureddisease">
            <div style={{margin: '40px 0px' }}> <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
            </div> 
            </Link>
            </div>
          </Col>
          <Col xs={24} md={4} xl={8} className="gutter-row" span={8}>
            <h3 className='latestArticleheader' style={{textAlign: 'center'}}>
            Welcome to Curevive
            </h3>
            <div>
            <p className='firsttext homeitems' style={{textAlign: 'justify', margin: '30px', color: '#4D5053'}}>
            We are an online platform with leading doctors in Nature Cure, providing exclusive consultation from the comfort of home.
              </p>
              <Link to="/"> 
              <div style={{margin: '40px 0px' }}> <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
              </div>
              </Link>
            </div>
          </Col> 
          <Col xs={24} md={4} xl={8} className="gutter-row" style={{backgroundColor: 'rgba(0, 0, 0, .0)'}} span={8}>
          <h3 className='latestArticleheader' style={{textAlign: 'center'}}>
              Treatments
            </h3>
            <div>
              <p className='firsttext homeitems' style={{textAlign: 'justify', margin: '30px', color: '#4D5053',height: '150px'}}>
               Find a cure for your problems through the extensively researched treatments by specialists of the nation.
              </p>
              <Link to="/treatment">
              <div style={{margin: '40px 0px' }}> <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
              </div>
              </Link>
            </div>
           
          </Col>
          </Row>
          </Col>
          <Col span={4} ></Col>
          <img alt="background" src={background1} className='artlinestyle1'/>
          <img alt="background" src={background2} className='artlinestyle2'/>
            <Col span={3}></Col>
         </Row>
       </div> 
       
         <Row>
          <div className='homesgap'></div> 
          <Col span={4}></Col>
          <Col xs={24} md={4} xl={8} style={{margin: '0px', padding: '10px'}} span={8}>
          <h1 className='articleHeader' style={{color: '#292F36'}}>
              We Create The Art Of Healthy Living!</h1>
            <p className='firsttext' style={{textAlign: 'left', marginTop: '40px',color: '#4D5053'}}>
            When one lives in harmony with nature and her essence, they have attained their highest form of being. We at Curevive aim at helping you reach the greatest version of yourself by enriching your innate ability to oppose disease and remain in a state of equilibrium; physically, emotionally, socially and spiritually.
            </p>
        
              <Link to='/treatments'>
            <Button style={{ fontSize: '22px', background: 'none',backgroundColor: '#292F36',height: '60px', borderRadius: '20px', color: '#F6F5EC'}}>
              Find a cure 
              <ArrowRightOutlined /></Button>
              </Link>
              
          </Col>
          <Col xs={24} md={4} xl={8} span={8}>
            <img alt="meditate" style={{margin: 'auto'}} src={meditate}/>
          </Col>
        </Row> 
         <img alt="background" src={background4} className='artlinestyle3'/>
         <div className='testimonialgap'>

         </div>
        <Testimonials/>
        <div style={{width: '1000px', overflowX: 'hidden'}}> <img alt="background" className='artlineStyle' src={background5}/></div>
          <Row style={{marginTop: "180px"}}>
            <Col xl={6}>
            </Col>
            <Col  xl={12}>
            <h1 style={{fontSize: '50px', color: '#292F36', marginBottom: "40px", fontFamily: 'Playfair Display'}}>Diseases</h1>
         <p style={{ marginLeft: '30px', textAlign: 'left', color: '#4D5053', fontSize: '22px', fontFamily: 'lato'}}>Here is a gist of the most common diseases we have cured through our time in this industry!</p>
         
            </Col>
            <Col  xl={6}>
            </Col>
          </Row>
          <Row style={{ zIndex: "1500"}}>
        <Col xs={24} xl={6}></Col>
         <Col xs={24} xl={12}>
         <Row style={{flex: 'justify', marginTop: '100px', paddingLeftLeft: '15px', padding: '10px' }} >
         {diseases.map((item) => 
        
         <Col xs={24} md={5} xl={12}>
           <div style={{padding: '40px'}}>
              <img className="diseaseimages" alt="disease images" src={`https://curevive.prophecius.com/${item.picture}`} style={{borderTopRightRadius:'45px', width: '96%'}} preview={false}/>
                <div style={{width: '100%'}}>

                <Link style={{color: 'black'}} to={`/diseases/${item.id}`}>
                <p className='diseaseList' >{item?.name}</p>
                <RightOutlined className='cursorhover' />
                </Link>
                </div>
           </div>
        </Col>
        
          )}
       
         <div style={{width: '100%'}}>
           <Button style={{color: "#F6F5EC",fontSize: '22px', margin: 'auto',  background: '#292F36', paddingLeft : '60px', paddingRight : '60px', paddingTop: '10px',borderRadius: '15px', paddingBottom: '40px'}}> 
           <Link to='/cureddisease' style={{color: 'white'}}> More</Link>
           </Button>
         </div>
         </Row>

          
        
         </Col>
         <Col xl={6} >
         </Col>
        </Row>
         
          <Counter/>  
          <Row >
            <Col span={7}></Col>
            <Col  xs={24} md={5} xl={10}  span={10}>
              <h1 className='firstheaders'>
              YOUR JOURNEY WITH US
              </h1>
              </Col>  
          </Row> 
           <div style={{width: '1000px', overflowX: 'hidden'}}>
            <img alt="background" src={newhand} className='artlinestyle4'/>
            </div>
          <Row style={{marginBottom: '30px'}}>
            <Col span={7}></Col>
          <Col  xs={24} md={5} xl={10}  span={10}>
              <div>
                <p className='firsttext' style={{color: '#4D5053'}}>
                Wondering what your journey with us throughout your treatments would look like? Here is a breakdown of how we will be working together.
                </p>
              </div>
              </Col>
          </Row>
         <HomeSlider/>  
         <div style={{width: '1000px', overflowX: 'hidden'}}><img alt="background" className='artlinestyle5' src={birds}/></div>
        
         <Articles/>
         <div className='homegap'>
            <Row style={{padding: '10px'}}                                                                                                                                 >
              <Col span={4}></Col>
              <Col xs={24} md={8} xl={16} span={16} style={{background: '#292F36  ', borderRadius: '40px', alignItems: 'center'}}>
              <div style={{marginTop: "70px",marginBottom: "40px", }}>
                <h1 className='articleHeader' style={{ textAlign: 'center', color: '#F6F5EC'}}>Want to get your doubts cleared?</h1>
              <p style={{margin: "20px", fontSize: '22px', color: '#F6F5EC'}}>Book a complimentary consultation now!</p>
              <Button style={{padding: '30px', background: '#CDA274'}}> 
              <Link to='book' style={{color: 'white', fontFamily: 'lota', fontSize: '20px',}}> Book </Link>
             <span> <ArrowRightOutlined style={{fontSize: '32px'}}/> </span>
              </Button>
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
        
        <Footer/> 
       
    </div>
  );
}

export default App;

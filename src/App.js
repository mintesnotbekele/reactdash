import logo from './assets/logo.png';
import logotext from './assets/text.png';
import meditate from "./assets/meditate.png";
import background1 from './assets/first.png'
import background2 from "./assets/first.png";
import background4 from "./assets/background4.png";
import background5 from "./assets/lady.png";
import foot1 from "./assets/foot.png";
import foot2 from "./assets/foot2.png";
import newhand from "./assets/thehand.png";
import birds from "./assets/birds.png";
import Header from './components/header';
import doctor from './assets/doctor.png';
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


function App() {


  return (
    
    <div className="App">    
     <div style={{background: "#4E3426",position: 'relative', width: "100%", }} >
    <div className='flex-auto w-10'></div>
     <Header/>
    </div>
     <Banner/>
       <div style={{margin: 'auto', width: '100%'}}>
         <Row style={{marginTop: '100px', marginBottom: '100px', zIndex: "1000"}}>
          <Col span={4}></Col>
          <Col className="gutter-row" span={5}>
          <h3 className='latestArticleheader' style={{textAlign: 'center'}}>
              Diseases
            </h3>
            <div>
            <p className='firsttext' style={{textAlign: 'justify', margin: '30px', color: '#4D5053',height: '150px'}}>
              Have diabetes, hypertension, thyroid or more? Learn about your disease and much more.
              </p>
              <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
            </div>
          </Col>
          <Col className="gutter-row" span={5}>
            <h3 className='latestArticleheader' style={{textAlign: 'center'}}>
            Welcome to Curevive
            </h3>
            <div>
            <p className='firsttext' style={{textAlign: 'justify', margin: '30px', color: '#4D5053',height: '150px'}}>
            We are an online platform with leading doctors in Nature Cure, providing exclusive consultation from the comfort of home.
              </p>
              <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
            </div>
          </Col> 
          <Col className="gutter-row" style={{backgroundColor: 'rgba(0, 0, 0, .0)'}} span={5}>
          <h3 className='latestArticleheader' style={{textAlign: 'center'}}>
              Treatments
            </h3>
            <div>
              <p className='firsttext' style={{textAlign: 'justify', margin: '30px', color: '#4D5053',height: '150px'}}>
              Find a cure for your problems through the extensively researched treatments by specialists of the nation.
              </p>
              <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
            </div>
          </Col>
          <Col span={4} ></Col>
          <img alt="background" src={background1} style={{position: 'absolute',overflow: 'hidden', rigth: '80px', bottom: '-20px', top: '900px'}}/>
          <img alt="background" src={background2} style={{position: 'absolute',overflow: 'hidden', left: '1300px', bottom: '-20px', top: '1200px' , transform: 'scaleX(-1)'}}/>
            <img alt="background" src={foot1} style={{height: "800px", left: '-200px', position: 'absolute', overflow: 'hidden', top: '7500px', zIndex: "500"}}/> 
          <Col span={3}></Col>
         </Row>
       </div>
        <Row>
          <Col span={4}></Col>
          <Col style={{margin: '20px'}} span={8}>
          <h1 className='articleHeader' style={{color: '#292F36'}}>
              We Create The Art Of Healthy Living!</h1>
            <p className='firsttext' style={{textAlign: 'justify', marginTop: '40px', marginRight: '40px', color: '#4D5053',height: '150px'}}>
            When one lives in harmony with nature and her essence, they have attained their highest form of being. We at Curevive aim at helping you reach the greatest version of yourself by enriching your innate ability to oppose disease and remain in a state of equilibrium; physically, emotionally, socially and spiritually.
            </p>
            <div>
            <Button style={{ fontSize: '22px', background: 'none',marginTop: '80px',backgroundColor: '#292F36', float: 'left', padding: '30px',height: '100px', borderRadius: '20px',width: '40%', color: '#F6F5EC'}}>Find a cure <ArrowRightOutlined /></Button></div>
          </Col>
          <Col style={{margin: '20px'}}  span={8}>
            <Image preview={false} src={meditate}/>
          </Col>
        </Row>
        <img alt="background" src={background4} style={{position: 'absolute', overflow: 'hidden', left: '-200px',marginTop: '-200px', zIndex: "500"}}/>
        <Testimonials/>
        <div style={{width: '1000px', overflowX: 'hidden'}}> <img alt="background" src={background5} style={{position: 'absolute',right: "80px", height: '870px', marginTop: "-200px", zIndex: "500"}}/></div>
          <Diseases/>
          <Counter/>  
          <Row style={{margin: '70px'}}>
            <Col span={7}></Col>
            <Col span={10}>
              <h1 className='firstheaders'>
              YOUR JOURNEY WITH US
              </h1>
              </Col>  
          </Row>
          <div style={{width: '1000px', overflowX: 'hidden'}}><img alt="background" src={newhand} style={{position: 'absolute', width: "600px", marginTop: "-400px", overflow: "hidden", right: '0px', zIndex: "500"}}/></div>
          <Row style={{margin: '30px'}}>
            <Col span={7}></Col>
          <Col span={10}>
              <div>
                <p className='firsttext' style={{color: '#4D5053'}}>
                Wondering what your journey with us throughout your treatments would look like? Here is a breakdown of how we will be working together.
                </p>
              </div>
              </Col>
          </Row>
         <HomeSlider/> 
         <div style={{width: '1000px', overflowX: 'hidden'}}><img alt="background" src={birds} style={{width: '380px', height: "1000px", position: 'absolute', left: '0px', overflow: "hidden", zIndex: "500"}}/></div>
         <Articles/>
            <Row style={{marginTop: "150px"}}>
              <Col span={4}></Col>
              <Col span={16} style={{background: '#292F36  ', borderRadius: '40px', alignItems: 'center'}}>
              <div style={{marginTop: "70px",marginBottom: "40px", }}>
                <h1 style={{fontSize: '50px', color: '#F6F5EC'}}>Want to get your doubts cleared?</h1>
              <p style={{margin: "20px", fontSize: '22px', color: '#F6F5EC'}}>Book a complimentary consultation now!</p>
              <Button style={{margin: 'auto', paddingTop: '20px', fontSize: '22px', paddingLeft: '30px',paddingBottom: '50px',paddingRight: '30px', background: '#CDA274', color: '#F6F5EC'}}> <Link to='book' style={{color: 'white'}}> Book </Link><ArrowRightOutlined/> </Button>
              </div>
              </Col>
            </Row>

            <Row style={{alignContent: 'center'}}>
              <Col span={9}></Col>
              <Col span={6} style={{marginTop: '90px'}}>
              <p style={{color : '0xFF4D5053', fontSize: '22.sp', letterSpacing: '0.22.sp'}}>Copyright © Curevive | Designed by Collabity - Powered by OwlWorkLabs</p>
              </Col>
            </Row>
            <Row>
            <Col span={12} style={{zIndex: "4000"}}>
      
    

          </Col>
        </Row>
            <div style={{width: '100%', overflow: 'hidden'}}>
              <img alt="background" src={logo} style={{height: '300px', marginLeft: "42%", position: 'absolute', zIndex: "500"}}/>
              <img alt="background" src={logotext} style={{ marginTop: '100px' , marginLeft: "41%",position: 'absolute', zIndex: "500"}}/>
              <img alt="background" src={foot2} style={{height: '650px', right: '0px', position: 'absolute',  overflow: 'hidden'}}/>
          </div> 
    </div>
  );
}

export default App;

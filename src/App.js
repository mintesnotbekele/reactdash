import logo from './assets/logo.png';
import logotext from './assets/text.png';
import hands from "./assets/hands.png";
import meditate from "./assets/meditate.png";
import phones from "./assets/phones.png";
import obese from "./assets/obese.png";
import doctor from "./assets/doctor.png";
import blur from "./assets/blur.png";
import carouse from './assets/carouser.png'
import article1 from "./assets/article 1.png";
import article2 from "./assets/article2.png";
import article3 from "./assets/article3.png";
import avatar from "./assets/avatar.png";
import background1 from './assets/first.png'
import background2 from "./assets/first.png";
import background4 from "./assets/background4.png";
import blurback from "./assets/blurrybackground.png"
import background5 from "./assets/lady.png";
import foot1 from "./assets/foot.png";
import foot2 from "./assets/foot2.png";
import newhand from "./assets/thehand.png";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import birds from "./assets/birds.png";
import 'react-multi-carousel/lib/styles.css';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import {ArrowRightOutlined, RightOutlined} from '@ant-design/icons'


import './App.css';
import { Navbar , Carousel} from 'flowbite-react';
import { Image,Button ,Row, Col, Space} from "antd";

function App() {
  const options = {
    type   : 'loop',
    focus  : 'center',
    perPage: 3,
    perMove: 1,
  };
  return (
    
    <div className="App">    
<div style={{background: "#4E3426",position: 'relative', width: "100%", }} >
    <div className='flex-auto w-10'></div>
    <div  className="flex-auto w-100">
        <Navbar
       style={{
        position: 'fixed',
        paddingTop: "30px",
        top: '0',
        left: '0',
        right: '0',
        background: "#4E3426",
        height: "100px",
        zIndex: "100",
      }}
      rounded
    
    >
      <Navbar.Brand style={{marginLeft: "250px"}}>
        <img style={{height: "180px" ,position: 'absolute', left: '350px', top: '-40px'}}  src={logo}/>
        <img style={{height: "300px" ,position: 'absolute', left: '500px', top: '-100px' }}  src={logotext}/>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p style={{color: "#F6F5EC", fontSize: "20px"}}>
            Treatment
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p style={{color: "#F6F5EC", fontSize: "20px" }}>Diseases</p>
        </Navbar.Link>
        <Navbar.Link href="#">
        <p style={{color: "#F6F5EC", fontSize: "20px"}}>Blog</p>
        </Navbar.Link>
        <Navbar.Link href="#">
        <p style={{color: "#F6F5EC", fontSize: "20px"}}>Booking</p>
        </Navbar.Link>
        <Navbar.Link href="#">
        <p style={{color: "#F6F5EC", fontSize: "20px"}}>About Us</p>
        </Navbar.Link>
        <Navbar.Link href="#">
        <p style={{color: "#F6F5EC", fontSize: "20px"}}>Login</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
    <div className="flex-auto w-10"></div>
    </div>

    <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
      
        <div style={{alignItems: 'center', height: "900px", backgroundImage: `url(${hands})`}}>
          <div style={{marginTop: '50px',height: '660px'}}></div>
          <div style={{width: '100%', backgroundImage: `url(${blurback})`}}>
          <h1 style={{fontSize: '120px' , fontFamily: 'DM Serif Display'}}>
          Naturopathy
          </h1>
            <h3 style={{fontSize: '40px', color: '#FFFFFFB2', fontFamily: "Jost"}}>The natures way of healing.</h3>
           </div>
           <Button style={{background: '#292F36',marginTop: '30px', fontSize: '18px', color: '#F6F5EC', border: 'none', paddingRight: "60px", paddingLeft: "60px" , paddingTop: '10px', paddingBottom: '40px', borderRadius: '50px'}}>About <span> <ArrowRightOutlined style={{color: '#CDA274', width: '50px',fontSize: '25px'}}/></span></Button>
          
      </div>

      </div>
       <div style={{margin: 'auto', width: '100%'}}>

         <Row style={{marginTop: '100px', marginBottom: '100px', zIndex: "1000"}}>
          <Col span={4}></Col>
          <Col className="gutter-row" span={5}>
          <h3 style={{color: '#292F36',fontSize: '25px', Align: 'center', fontFamily: 'DM Serif Display'}}>
              Diseases
            </h3>
            <div>
            <p style={{fontSize: '22px', textAlign: 'justify', margin: '30px', color: '#4D5053',height: '150px', }}>
              Have diabetes, hypertension, thyroid or more? Learn about your disease and much more.
              </p>
              <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
            </div>
          </Col>
         
          <Col className="gutter-row" span={5}>
            <h3 style={{color: '#292F36', fontSize: '25px', Align: 'center', fontFamily: 'DM Serif Display'}}>
            Welcome to Curevive
            </h3>
            <div>
            <p style={{fontSize: '22px', textAlign: 'justify',  margin: '30px', color: '#4D5053', height: '150px', fontFamily: 'josh'}}>
            We are an online platform with leading doctors in Nature Cure, providing exclusive consultation from the comfort of home.
              </p>
              <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
            </div>
          </Col> 
          <Col className="gutter-row" style={{backgroundColor: 'rgba(0, 0, 0, .0)'}} span={5}>
          <h3 style={{color: '#292F36',fontSize: '25px', Align: 'center', fontFamily: 'DM Serif Display'}}>
              Treatments
            </h3>
            <div>
              <p style={{fontSize: '22px', textAlign: 'justify',  margin: '30px',  color: '#4D5053',height: '150px', fontFamily: 'josh'}}>
              Find a cure for your problems through the extensively researched treatments by specialists of the nation.
              </p>
              <Button style={{margin: 'auto', background: 'none', color: '#4D5053'}}>Read More <ArrowRightOutlined /></Button>
            </div>
          </Col>
          <Col span={4} ></Col>
          <img alt="background" src={background1} style={{position: 'absolute',overflow: 'hidden', rigth: '80px', bottom: '-20px', top: '900px'}}/>
          <img alt="background" src={background2} style={{position: 'absolute',overflow: 'hidden', left: '1300px', bottom: '-20px', top: '1200px' , transform: 'scaleX(-1)'}}/>
          <img alt="background" src={background4} style={{position: 'absolute', overflow: 'hidden', rigth: '80px',left: '-200px', top: '1900px', zIndex: "500"}}/>
           <img alt="background" src={foot1} style={{height: "800px", left: '-200px', position: 'absolute', overflow: 'hidden', top: '7500px', zIndex: "500"}}/> 
           
        
          
          
          
          <img alt="background" src={logo} style={{height: '300px', position: 'absolute',right: '850px',top: '7600px', zIndex: "500"}}/>
          <img alt="background" src={logotext} style={{position: 'absolute',right: '800px',top: '7700px', zIndex: "500"}}/>
          <Col span={3}></Col>
         </Row>
       </div>

      <Row>
        <Col span={4}></Col>
        <Col style={{margin: '20px'}} span={8}>
        <h1 style={{ textAlign : 'left',fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>
           We Create The Art Of Healthy Living!</h1>
          <p style={{fontSize: '22px', textAlign: 'justify', marginTop: '40px', marginRight: '40px', color: '#4D5053',height: '150px', fontFamily: 'josh'}}>
          When one lives in harmony with nature and her essence, they have attained their highest form of being. We at Curevive aim at helping you reach the greatest version of yourself by enriching your innate ability to oppose disease and remain in a state of equilibrium; physically, emotionally, socially and spiritually.
          </p>
          <div>
          <Button style={{ fontSize: '22px', background: 'none',marginTop: '80px',backgroundColor: '#292F36', float: 'left', padding: '30px',height: '100px', borderRadius: '20px',width: '40%', color: '#F6F5EC'}}>Find a cure <ArrowRightOutlined /></Button></div>
        </Col>
        <Col style={{margin: '20px'}}  span={8}>
          <Image preview={false} src={meditate}/>
        </Col>
      </Row>


         <Row style={{marginTop: '300px'}}>
          <Col span={4} ></Col>
          <Col style={{background: '#ECDFD7', borderRadius: '20px'}} span={16}>
            <h1 style={{fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>
            What the People Think About Us
            </h1>
            <Row>
              <Col span={24}>
            <Splide options={options}>
      <SplideSlide>
      
           
           <div style={{background: '#F6F5EC', borderRadius: '20px', margin: '20px', padding: '30px'}}>

            <img src={avatar}></img>
            <p style={{fontSize: '22px',fontFamily: 'josh', textAlign: 'left'}}>1Lorem Ipsum is simply dummy 
                    text of the typesetting industry. 
                    Ipsum has been.</p>
                              </div>
        
      </SplideSlide>
      <SplideSlide>
      
           <div style={{background: '#F6F5EC', borderRadius: '20px', margin: '20px', padding: '30px'}}>

            <img src={avatar}></img>
            <p style={{fontSize: '22px', textAlign: 'left', fontFamily: 'josh'}}>2Lorem Ipsum is simply dummy 
            Lorem Ipsum is simply dummy 
                  text of the typesetting industry. 
                  Ipsum has been scrambled it 
                  to make a type book.</p>
                              </div>
      
      </SplideSlide>
      <SplideSlide>
           <div style={{background: '#F6F5EC', borderRadius: '20px', margin: '20px', padding: '30px'}}>

            <img src={avatar}></img>
            <p style={{fontSize: '22px', fontFamily: 'josh',textAlign: 'left'}}>3Lorem Ipsum is simply dummy 
                      Lorem Ipsum is simply dummy 
          text of the typesetting industry. 
          Ipsum has been scrambled.</p>
                              </div>
      </SplideSlide>
    </Splide>
    </Col>
           
               
       
        </Row>
          </Col>
         
   
         </Row>
          <div style={{width: '1000px', overflowX: 'hidden'}}> <img alt="background" src={background5} style={{position: 'absolute',right: "80px", height: '870px', marginTop: "-200px", zIndex: "500"}}/></div>
         <Row style={{marginTop: "180px", zIndex: "1500"}}>
         <Col span={4}></Col>
          <Col span={18}>
          <h1 style={{fontSize: '50px', color: '#292F36', marginBottom: "40px", fontFamily: 'DM Serif Display'}}>Diseases</h1>
          <p style={{ width: '60%',  margin: 'auto', color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Here is a gist of the most common diseases we have cured through our time in this industry!</p>
          
          
          <Row style={{flex: 'justify', marginTop: '100px', marginLeft: '30px' }} >
            <Col style={{margin:"35px"}} span={10}>
            <Image src={phones} style={{borderTopRightRadius:'45px'}} preview={false}/>
            <div style={{width: '100%'}}>
            <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Diabetes</p>
            <RightOutlined /></div>
            </Col>
            <Space/>
            <Col style={{margin:"35px"}} span={10}>
            <Image src={blur} style={{borderTopLeftRadius:'45px'}} preview={false}/>
            <div style={{width: '100%'}}>
            <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Thyroid</p>
            <RightOutlined /></div>
            </Col>
            <Col style={{margin:"35px"}} span={10}>
            <Image src={obese} style={{borderBottomRightRadius:'45px'}} preview={false}/>
            <div style={{width: '100%'}}>
            <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Obesity</p>
            <RightOutlined /></div>
            </Col>
            <Col style={{margin:"35px"}} span={10}>
            <Image src={doctor} style={{borderBottomLeftRadius:'45px'}} preview={false}/>
            <div style={{width: '100%'}}>
            <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Hypertension</p>
            <RightOutlined /></div>
            </Col>
          </Row>

          <div>
            <Button style={{color: "#F6F5EC",fontSize: '22px', margin: 'auto',  background: '#292F36', paddingLeft : '100px', paddingRight : '100px', paddingTop: '30px',borderRadius: '15px', paddingBottom: '50px'}}> More</Button>
          </div>
          </Col>
         </Row>

         <Row style={{background: '#ECDFD7', width: '100%', marginTop: '100px',marginBottom: '100px', paddingTop: '120px', paddingBottom: '120px'}}>
          <Col span={24}>
            <Row>
            <Col span={4}></Col>
            <Col span={4} style={{borderRightWidth: '2px', borderColor: '#CDA274'}}>
              <h1 style={{fontSize: '85px', color: '#CDA274'}}> 03</h1> 
              <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Years Of Experiance</p>
            </Col>
            <Col style={{borderRightWidth: '2px', borderColor: '#CDA274'}} span={4}>
              <h1 style={{fontSize: '85px', color: '#CDA274'}}>37</h1>
            <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Success Stories</p>
             </Col>
            <Col style={{borderRightWidth: '2px', borderColor: '#CDA274'}} span={4}>
              <h1 style={{fontSize: '85px', color: '#CDA274'}}>32</h1> 
            <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Active Clients</p>
            </Col>
            <Col span={4}><h1 style={{fontSize: '85px', color: '#CDA274'}}> 69</h1>
            <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Happy Customers</p>
            </Col>
            </Row>
          </Col>
         </Row>
          <Row>
            <Col span={7}></Col>
            <Col span={10}>
              <h1 style={{fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>
              YOUR JOURNEY WITH US
              </h1>
              </Col>

              
          </Row>
          <div style={{width: '1000px', overflowX: 'hidden'}}><img alt="background" src={newhand} style={{position: 'absolute', width: "600px", marginTop: "-400px", overflow: "hidden", right: '0px', zIndex: "500"}}/></div>
          <Row>
            <Col span={7}></Col>
          <Col span={10}>
              <div>
                <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>
                Wondering what your journey with us throughout your treatments would look like? Here is a breakdown of how we will be working together.
                </p>
              </div>
              </Col>
          </Row>
      
    <Row>
      <Col span={4}> </Col>
      <Col style={{height: '600px'}} span={15}> 
         <Carousel >
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
    </Col>

    </Row>
    <div style={{width: '1000px', overflowX: 'hidden'}}><img alt="background" src={birds} style={{width: '380px', height: "1000px", position: 'absolute', left: '0px', overflow: "hidden", zIndex: "500"}}/></div>
     
    <Row style={{marginTop: '250px'}}>
    <Col span={4}></Col>
    
    <Col span={16}>
      <div>
        <h1 style={{fontSize: '50px', color: '#292F36', fontFamily: "DM Serif Display"}}>
      Articles & News
        </h1>
        <p style={{margin: "20px", fontSize: '22px', fontFamily: "josh"}}>Detailed and fun to read articles written by well researched individuals from around the world.</p>
        </div>
       <Row>
        <Col span={8}>  <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '20px', margin: '20px'}}> <img style={{borderRadius: '25px'}} src={article1}/>
              <h1 style={{fontSize: '25px', fontFamily: "josh"}}> Let’s Get Solution For Arthritis.</h1>
              <div style={{ marginTop: '30px', marginBottom: '20px'}}> <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}>26 December,2022 <span style={{float: 'right', paddingRight: '30px'}}><ArrowRightOutlined/></span></p> </div>
              
              </div> 
              
        </Col> 
        <Col span={8}>  <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '20px',background: '#ECDFD7', margin: '20px'}}> <img style={{borderRadius: '25px'}} src={article2}/>
              <h1 style={{fontSize: '25px', fontFamily: "josh"}}> Latest Massage Techniques To Try.</h1>
              <div style={{ marginTop: '30px', marginBottom: '20px'}}> <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}>26 December,2022 <span style={{float: 'right', paddingRight: '30px'}}><ArrowRightOutlined/></span></p> </div>
              
              </div> 
              

        </Col> 
        <Col span={8}>  <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '20px', margin: '20px'}}> <img style={{borderRadius: '25px'}} src={article3}/>
              <h1 style={{fontSize: '25px', fontFamily: "josh"}}> Best For Homemade Mix Of Herbs.</h1>
              <div style={{ marginTop: '30px', marginBottom: '20px'}}> <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}>26 December,2022 <span style={{float: 'right', paddingRight: '30px'}}><ArrowRightOutlined/></span></p> </div>
              </div>
        </Col> 
       </Row>
       </Col>
    </Row>

    <Row style={{marginTop: "150px"}}>
      <Col span={4}></Col>
      <Col span={16} style={{background: '#292F36  ', borderRadius: '40px', alignItems: 'center'}}>
      <div style={{marginTop: "70px",marginBottom: "40px", }}>
        <h1 style={{fontSize: '50px', color: '#F6F5EC'}}>Want to get your doubts cleared?</h1>
      <p style={{margin: "20px", fontSize: '22px', color: '#F6F5EC'}}>Book a complimentary consultation now!</p>
      <Button style={{margin: 'auto', paddingTop: '20px', fontSize: '22px', paddingLeft: '30px',paddingBottom: '50px',paddingRight: '30px', background: '#CDA274', color: '#F6F5EC'}}>Book <ArrowRightOutlined/> </Button>
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
       <img alt="background" src={foot2} style={{height: '650px', right: '-700px', position: 'absolute',  overflow: 'hidden'}}/>
       </div>
    </div>
  );
}

export default App;

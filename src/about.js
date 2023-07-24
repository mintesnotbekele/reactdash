import { Button, Navbar} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import aboutBanner from './assets/aboutBanner.jpg';
import quotes from './assets/quotes.png';
import {Row, Col, Input} from 'antd';
import herbs from './assets/herbs.png';
import meditate from './assets/meditate1.png';
import team1 from "./assets/team1.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";
import team4 from "./assets/team4.png";
import faq from "./assets/faq.png";
import disease from "./assets/disease.jpg";
import TextArea from 'antd/es/input/TextArea';
import {ArrowRightOutlined} from '@ant-design/icons';


const About=()=>{

return(
    <div>
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
      <img alt="about Banner"style={{marginBottom: '200px'}} src={aboutBanner}/>
      <div>
        <img style={{margin: 'auto', width: '35%'}} src={quotes} alt= "about quotes"/>
      </div>

      
      <Row style={{marginTop: "150px"}}>
        <Col span={6}>
            
        </Col>
        <Col span={6}>
            <div>
                <img alt="herbs" src={herbs}/>
            </div>
        </Col>
        <Col span={6}>
            <div style={{padding: "30px"}}>
            <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px"}}>About Naturopathy</h1>
            <p sytle={{fontFamily: "DM Serif Display", fontSize: "50px"}}> Humans are complex organisms having different planes of being; physical, mental, psychological, emotional and spiritual. Previously, all human ailments were perceived and treated only on the physical aspect of being. However, with the advancement in information and technology, there has been a surge of lifestyle disorders and psychosomatic diseases This has created the need for a treatment modality which takes into consideration all the elements pertaining to a human being. Naturopathy is a form of holistic treatment where we improve the body's ability to overcome any imbalance through traditional therapies, in conjunct to modern medicine. Therapies such as accupuncture, yoga, hydrotherapy, diet and massage are employed to improve a patients quality of life.</p>
            </div>
         </Col>
        <Col span={6}>
            
        </Col>
      </Row>
      
      
      <Row style={{marginTop: "100px"}}>
        <Col span={6}>
            
        </Col>
        <Col span={6}>
            <div style={{padding: "30px"}}>
            <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px"}}>What We Do</h1>
            <p sytle={{fontFamily: "DM Serif Display", fontSize: "50px"}}> We are an online platform with leading doctors in Nature Cure, providing exclusive consultation from the comfort of your home. You are put on a course of drugless treatment modalities which are cost effective and safe. Our doctors will give you a holistic diagnosis of your health condition and offer you a balanced approach through regular weekly check ups. Specialized Diet plans are constructed consisting of whole foods which enrich your body’s microbiome, complementing your lifestyle. As a part of your package, fresh herbs and essential oils essential for your treatment will be delivered to your residence.</p>
            </div>
         </Col>
         <Col span={6}>
            <div>
                <img alt="herbs" src={meditate}/>
            </div>
        </Col>
        <Col span={6}>
            
        </Col>
      </Row>


      <Row style={{marginTop: "100px", backgroundColor: "#ECDFD7"}}>
      <Col span={24}>
            <div style={{margin: 'auto', width: '100%', }}> 
            <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px", textAlign: 'center'}}>OUR TEAM</h1>
            </div>
            </Col>
        <Col span={6}>

        </Col>
        <Col span={12}>
            <div style={{width: '100%', display: "flex"}}>
                <div style={{padding: '10px', width: "25%"}}>
                  <img alt="tea members" src={team1}/>   
                 </div>
                 <div style={{padding: '10px', width: "25%"}}>
                  <img alt="tea members" src={team2}/>   
                 </div>
                 <div style={{padding: '10px', width: "25%"}}>
                  <img alt="tea members" src={team3}/>   
                 </div>
                 <div style={{padding: '10px', width: "25%"}}>
                  <img alt="tea members" src={team4}/>   
                 </div>
                 </div>
                     
                
         </Col>
        <Col span={6}>
            
        </Col>
      </Row>



      <Row style={{marginTop: "100px",}}>
      <Col span={24}>
            <div style={{margin: 'auto', width: '100%', }}> 
            <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px", textAlign: 'center'}}>Every Question Answered</h1>
            </div>
            </Col>
        <Col span={6}>

        </Col>
        <Col span={6}>
                      
                
         </Col>
         <Col span={6}>
         
        <img alt="frequently asked question" src={faq}/>
         </Col>
        <Col span={6}>
            
        </Col>
      </Row>

    
    
      <Row style={{marginTop: "100px",}}>
      <Col span={24}>
            <div style={{margin: 'auto', width: '100%', }}> 
            <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px", textAlign: 'center'}}>Diseases related questions</h1>
            </div>
            </Col>
        <Col span={6}>

        </Col>
        <Col span={6}>
         
        <img style={{borderRadius: '30px'}} alt="disease related question" src={disease}/>
         </Col>
         <Col span={6}>
                      
                
         </Col>
         
        <Col span={6}>
            
        </Col>
      </Row>



      <Row style={{marginTop: "100px", backgroundColor: "#ECDFD7"}}>
   
        <Col span={6}>

        </Col>
        <Col span={12} style={{padding: '150px'}}>
        <div style={{margin: 'auto', width: '100%', }}> 
            <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px", textAlign: 'center'}}>Have concerns? Let's have
a productive talk.</h1>
            </div>  
            <div style={{width: '100%', display: "flex"}}>
            <Input style={{background: "#ECDFD7",border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Name'/>
            <Input style={{background: "#ECDFD7",border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Email'/>
           
            </div>
            <div style={{marginTop: "30px"}}>
            <TextArea style={{background: "#ECDFD7", border: "none",borderBottom: '1px solid ', }} placeholder='Hello I am Intrested in..'/>          
            </div>   
            <div style={{marginTop: "50px"}}>
            <Button style={{background: '#292F36', margin: 'auto', fontSize: '18x'}}>Send Now <ArrowRightOutlined style={{color: '#CDA274', marginLeft: "10px"}}/> </Button>
            </div>
         </Col>
        <Col span={6}>
            
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

)
}
export default About; 
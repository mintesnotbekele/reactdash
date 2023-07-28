import { Button} from 'flowbite-react';
import aboutBanner from './assets/aboutBanner.jpg';
import {Row, Col, Input} from 'antd';
import herbs from './assets/herbs.png';
import meditate from './assets/meditate1.png';
import team1 from "./assets/team1.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";
import team4 from "./assets/team4.png";
import faqs from "./assets/faq.png";
import disease from "./assets/disease.jpg";
import TextArea from 'antd/es/input/TextArea';
import {ArrowRightOutlined} from '@ant-design/icons';
import Header from './components/header';
import { Accordion } from 'flowbite-react';
import Footer from './components/footer';
import {Carousel} from 'flowbite-react';
import frame from './assets/frame.png'
import { useState, useEffect } from 'react';
import axios from 'axios';  


const About=()=>{


  const [quotes, setQuotes] = useState();
  const [researchpaper, setResearchpaper] = useState([]);
  const [faq, setFaq] = useState([]);
  

  useEffect(()=>{

    axios.get('http://127.0.0.1:8000/api/quote')
    .then((res)=>{
      setQuotes(res.data);
    });
    
    axios.get('http://127.0.0.1:8000/api/faq')
    .then((res)=>{
      setFaq(res.data);
    });

    
 },[]);

return(
    <div>
      <Header/>
      <img alt="about Banner"style={{marginBottom: '200px'}} src={aboutBanner}/>
      <div style={{width: '40%',padding: '40px',margin: 'auto', height: '300px' , backgroundImage: `url(${frame})`,backgroundSize: '100% 100%'}}>
      <Carousel>
      {
      quotes?.map((item) => 
               <p className="italictext">
                {item?.description}
               </p>
      )}
      </Carousel>
      </div>      
      <Row style={{marginTop: "150px"}}>
        <Col span={4}>
            
        </Col>
        <Col span={8}>
            <div>
              
                <img alt="herbs" src={herbs}/>
            </div>
        </Col>
        <Col span={8}>
            <div style={{padding: "30px"}}>
            <h1 className='firstheaders'>About Naturopathy</h1>
            <p className='firsttext' style={{textAlign: 'left'}}> Humans are complex organisms having different planes of being; physical, mental, psychological, emotional and spiritual. Previously, all human ailments were perceived and treated only on the physical aspect of being. However, with the advancement in information and technology, there has been a surge of lifestyle disorders and psychosomatic diseases This has created the need for a treatment modality which takes into consideration all the elements pertaining to a human being. Naturopathy is a form of holistic treatment where we improve the body's ability to overcome any imbalance through traditional therapies, in conjunct to modern medicine. Therapies such as accupuncture, yoga, hydrotherapy, diet and massage are employed to improve a patients quality of life.</p>
            </div>
         </Col>
        <Col span={4}>
            
        </Col>
      </Row>
      
      
      <Row style={{marginTop: "100px"}}>
        <Col span={4}>
            
        </Col>
        <Col span={8}>
            <div style={{padding: "30px"}}>
            <h1 className='firstheaders'>What We Do</h1>
            <p className='firsttext' style={{textAlign: 'left'}}> We are an online platform with leading doctors in Nature Cure, providing exclusive consultation from the comfort of your home. You are put on a course of drugless treatment modalities which are cost effective and safe. Our doctors will give you a holistic diagnosis of your health condition and offer you a balanced approach through regular weekly check ups. Specialized Diet plans are constructed consisting of whole foods which enrich your body’s microbiome, complementing your lifestyle. As a part of your package, fresh herbs and essential oils essential for your treatment will be delivered to your residence.</p>
            </div>
         </Col>
         <Col span={8}>
            <div>
                <img alt="herbs" src={meditate}/>
            </div>
        </Col>
        <Col span={4}>
            
        </Col>
      </Row>


      <Row style={{marginTop: "100px", backgroundColor: "#ECDFD7"}}>
      <Col span={24}>
            <div style={{margin: 'auto', width: '100%', }}> 
            <h1 className='firstheaders' style={{ textAlign: 'center'}}>OUR TEAM</h1>
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
        <Col span={4}>
       </Col>
        <Col span={8}>
        <Accordion collapseAll>
              {faq.map((item) => 
                <Accordion.Panel>
                  <Accordion.Title>
                   {item.title}
                  </Accordion.Title>
                  <Accordion.Content>
                  {item.description}
                  </Accordion.Content>
                </Accordion.Panel>
                 )}
              </Accordion>     
                
         </Col>
         <Col span={8}>
         
        <img alt="frequently asked question" src={faqs}/>
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
        <Col span={4}>

        </Col>
        <Col span={8}>
         
        <img style={{borderRadius: '30px'}} alt="disease related question" src={disease}/>
         </Col>
         <Col span={8}>
                      
         <Accordion collapseAll>
              {faq.map((item) => 
                <Accordion.Panel>
                  <Accordion.Title>
                   {item.title}
                  </Accordion.Title>
                  <Accordion.Content>
                  {item.description}
                  </Accordion.Content>
                </Accordion.Panel>
                 )}
              </Accordion>    
         </Col>
         
        <Col span={8}>
            
        </Col>
      </Row>



      <Row style={{marginTop: "100px", marginBottom: '50px', backgroundColor: "#ECDFD7"}}>
   
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
     <Footer />
    </div>

)
}
export default About; 
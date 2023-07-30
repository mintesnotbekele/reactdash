import { Button} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import yoga  from './assets/yoga.png'
import aboutBanner from "./assets/treatmentBanner.jpg";
import {Row, Col} from 'antd';

import { Accordion } from 'flowbite-react';
import firstyoga from "./assets/firtyoga.png";
import thirdyoga from "./assets/thirdyoga.png";
import history from "./assets/history1.png";
import expert from "./assets/expert.png";
import {ArrowRightOutlined} from '@ant-design/icons';
import Header from './components/header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Treatment =()=>{

  const [diseases, setDiseases] = useState([]);
  const [researchpaper, setResearchpaper] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [faq, setFaq] = useState([]);
  
  const [loading, setLoading] = useState(false);
   useEffect(()=>{
    axios.get('https://curevive.thotamali.com/api/disease')
    .then((res)=>{
      setDiseases(res.data);
    });
    axios.get('https://curevive.thotamali.com/api/treatment')
    .then((res)=>{
      setTreatments(res.data);
    });
    axios.get('https://curevive.thotamali.com/api/researchpaper')
    .then((res)=>{
      setResearchpaper(res.data);
    });
    axios.get('https://curevive.thotamali.com/api/faq')
    .then((res)=>{
      setFaq(res.data);
    });
   },[])

   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 300 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 300 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 300 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 300 
    }
  };

  const options = {
    type   : 'loop',
    focus  : 'center',
    perPage: 1,
    perMove: 1,
    
  };
    return(
        <>
    <Header/>
    <img alt="about Banner"style={{marginBottom: '200px'}} src={aboutBanner}/>
       <Row>
        <Col span={4}>
        </Col>
        <Col span={16}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {treatments.map((item) => 
            <div className='hoverarticle' style={{width: '30%', height: '300px', padding: '10px', backgroundSize: '100% 100%', backgroundImage: `url(https://curevive.thotamali.com/${item.background})`}}>
                    <h1 className='articlehead' style={{textAlign: 'center', marginTop: '50px', fontWeight: '400',}}>
                    {item.name}
                    </h1>
                    <p className='articletext' style={{margin: '10px'}}> {item.description}</p>
                    </div>
                )}
            </div>
        </Col>
        <Col span={4}>
        </Col>
       </Row>
       <Row style={{marginBottom: '100px'}}>
        <Col span={4}></Col>
        <Col  span={16}>
        <Carousel
            
              itemClass="carousel-item-padding-40-px"
              showDots={true}
            responsive={responsive} 
             style={{height: '1200px'}}>
           <Row style={{background: '#ECDFD7', borderRadius: '40px'}}>
            <Col  span={10}>
              <img style={{marginTop: "100px"}} alt='yoga' src={firstyoga}/>
            </Col>
            <Col className='articletext' span={14} style={{padding:'20px'}}>
              <p className='treatmentslider' style={{color: '#CDA274'}}>Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas), breathing methods (pranayama), relaxation, and meditation are all part of the practice. Yoga is founded on the idea that the body and mind are inextricably linked and that practicing yoga may assist to promote both physical and mental well-being.</p>
              <h1 style={{fontFamily: "Playfair Display", fontSize: "50px"}}>
              Diet & Nutrition
              </h1>
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
          </Row>
          <Row style={{background: '#ECDFD7',borderRadius: '40px'}}>
            <Col  span={10}>
              <img style={{marginTop: "100px"}} alt='yoga' src={yoga}/>
            </Col>
            <Col className='articletext' span={14} style={{padding:'20px'}}>
            <p className='treatmentslider' style={{color: '#CDA274'}}>Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas), breathing methods (pranayama), relaxation, and meditation are all part of the practice. Yoga is founded on the idea that the body and mind are inextricably linked and that practicing yoga may assist to promote both physical and mental well-being.</p>
              <h1 style={{fontFamily: "Playfair Display", fontSize: "50px"}}>
              Frequently Asked Questions
              </h1>
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
          </Row>
          <Row style={{background: '#ECDFD7', borderRadius: '40px'}}>
            <Col  span={10}>
              <img style={{marginTop: "100px"}} alt='yoga' src={thirdyoga}/>
            </Col>
            <Col span={14} style={{padding:'20px'}}>
            <p className='treatmentslider' style={{color: '#CDA274'}}>Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas), breathing methods (pranayama), relaxation, and meditation are all part of the practice. Yoga is founded on the idea that the body and mind are inextricably linked and that practicing yoga may assist to promote both physical and mental well-being.</p>
              <h1 style={{fontFamily: "Playfair Display", fontSize: "50px"}}>
              Aroma Therapy
              </h1>
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
          </Row>
          
          </Carousel>
    
        </Col>
        <Col span={4}>
        </Col>
       </Row>

       <Row>
        <Col span={4}>
        </Col>
        <Col span={16}>
          <Row>
            <Col span={14}>
              <div style={{padding: '50px'}}>
              <h1 className='firstheaders'> History of acupressure </h1>
              <p className='firsttext' style={{textAlign: 'left'}}>
              Acupressure is an ancient therapy which originated in China. The doctrine of Traditional Chinese Medicine states
              that each organism has within itself a driving force which is essential for its survival. This energy is termed as “Qi”
              or “Chi”. “QI” flows through the body in channels known as Meridians which represent the vital organ of the
              body. Pioneers of TCM believed that the balance of “Qi” is necessary for the health and longevity of an organism.
              Any imbalance in the flow of “Qi” predisposed the organism to disease.
              </p>

              </div>
            </Col>
            <Col span={10}>
              <img alt="history" src={history} />
            </Col>
          </Row>
        </Col>
        <Col span={4}></Col>
       </Row>
       <Row style={{marginTop: "50px", background: '#ECDFD7'}}>
        <Col span={4}>
        
        </Col>
        <Col  span={16}>
          <Row>
            <Col style={{padding: "50px"}} span={12}>
               <img alt="expert" src={expert}/>
            </Col>
            <Col style={{padding: "50px"}} span={12}>
              <h1 className='firstheaders'>
              Why you need expert  guidance ?
              </h1> 
              <p className='firsttext' style={{textAlign: 'left'}}>
              Though the use of acupressure works as a great complementary therapy it has many benefits ,but the best results
it can only be done by applying pressure on the exact location for the right amount of time, a small miscalculation
in finding the right location can result in loss of any results at all .Careful selection of these points by an expert
according to your conditions and symptoms makes it very important to cure you from your symptoms.
              </p>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
        
        </Col>
       </Row>


       <Row style={{marginTop: '100px', marginBottom: '50px'}}>
        <Col span={4}>
        
        </Col>
        <Col span={16}>
          <div >
          <h1 className='firstheaders' style={{color: '#292F36'}}> WHY CUREVIVE?</h1>
            <p className='firsttext' style={{textAlign: 'left', color: '#4D5053', margin: '50px 0px'}}>Choosing the right points according to your condition and find their exact location can be a tedious task! Curevive
is here to guide you at every step . We understand the importance of acupressure as a complementary therapy .</p>
             <ol>
              <li className='firsttext' style={{textAlign: 'left', margin: '40px'}}>
              <span style={{background: '#ECDFD7', fontSize: '22px', borderRadius: '50%', padding: '7px 10px', margin: '10px'}}>1</span><span className='firsttext' style={{textAlign: 'left', color: '#4D5053'}}> Identify the root cause of your condition</span>
              </li>
              <li className='firsttext' style={{textAlign: 'left', margin: '40px'}}>
              <span style={{background: '#ECDFD7', fontSize: '22px', borderRadius: '50%', padding: '7px 10px', margin: '10px'}}>2</span> <span className='firsttext' style={{textAlign: 'left', color: '#4D5053'}}>Make a list of what acupressure points will work best</span>
with your condition.
              </li>
              <li className='firsttext' style={{textAlign: 'left', margin: '40px'}}>
              <span style={{background: '#ECDFD7', fontSize: '22px', borderRadius: '50%', padding: '7px 10px', margin: '10px', textAlign: 'left'}}>3</span><span className='firsttext' style={{textAlign: 'left', color: '#4D5053'}}>  Courier you our specially designed acupressure tool</span>
              </li>
              <li className='firsttext' style={{textAlign: 'left' , margin: '40px'}}>
              <span style={{background: '#ECDFD7', fontSize: '22px', borderRadius: '50%', padding: '7px 10px', margin: '10px', textAlign: 'left'}}>4</span> <span className='firsttext' style={{textAlign: 'left', color: '#4D5053'}}>Equip you with our expert guided videos on how to</span>
locate the points, chosen by our doctors for you.
              </li>

             </ol>
          </div>
        </Col>
        <Col span={4}>
        
        </Col>
       </Row>
       <Row style={{marginTop: '100px',paddingBottom: '50px', background: '#ECDFD7'}}>
        <Col span={4}>

        </Col>
        <Col span={16}>
           <div>
            <h1 className='firstheaders' style={{textAlign: 'center'}}>
            Backed by evidence !
            </h1>
            <p className='firsttext' style={{textAlign: 'left'}}>
              Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
              circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
              shown that acupressure has helped cancer patients by reducing cancer-related fatigue and nausea. 
              Acupressure has shown marvellous results in reducing anxiety and improving health in patients undergoing surgeries.</p>
           </div>
        </Col>
        <Col span={4}>
        </Col>
       </Row>
       <Row style={{marginTop: "100px" }}>
        <Col span={4}>
        </Col>
        <Col span={16}>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {diseases.map((item) => 
          <Button className="commonbutton buttonHeader" style={{color: '#000000'}}>{item?.name}</Button>
        )}
          </div>
        </Col>
        <Col span={4}>
        </Col>
       </Row>

       <Row style={{marginTop: '50px'}}>
        <Col span={4}>
        </Col>
        <Col span={16}>
        <Carousel
            additionalTransfrom={0}
            arrows={false}
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
            renderDotsOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
            
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
            showDots={true}
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
        </Col >
        <Col span={4}>
        </Col>
       </Row>

       <Row style={{marginTop: '150px', marginBottom: '100px'}}>
          <Col span={4}></Col>
          <Col span={16}>
            <div style={{borderRadius: "50px", paddingBottom: '50px',  background: "#292F36" }}> 
              <h1 style={{paddingTop: '30px',fontFamily: "Playfair Display", fontSize: "50px",color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Want to talk to a doctor?</h1>
              <p style={{margin: '30px',fontFamily: 'lato', fontSize: '22px', color: 'white', textAlign: 'center'}}>Book a complimentary consultation now.</p>
              <Button style= {{margin: 'auto', color: 'white', background: '#CDA274'}}>Contact Us <ArrowRightOutlined style={{color: '#292F36', marginLeft: "10px"}}/></Button>
            </div>
          </Col>
          <Col span={4}></Col>
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
        </>
    );

}

export default Treatment;
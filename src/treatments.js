import { Button, Navbar} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import yoga  from './assets/yoga.png'
import aboutBanner from "./assets/aboutBanner.jpg";
import {Row, Col, Input} from 'antd';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Accordion } from 'flowbite-react';
import firstyoga from "./assets/firtyoga.png";
import thirdyoga from "./assets/thirdyoga.png";
import history from "./assets/history1.png";
import expert from "./assets/expert.png";
import slider from './assets/sliderframe.png';
import {ArrowRightOutlined} from '@ant-design/icons';

const Treatment =()=>{


  const options = {
    type   : 'loop',
    focus  : 'center',
    perPage: 1,
    perMove: 1,
  };
    return(
        <>
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
       <Row>
        <Col span={6}>
        </Col>
        <Col span={12}>
            
            <div style={{display: 'flex'}}>
                    <div style={{width: '100%'}}>
                    <h1 style={{fontFamily: "DM Serif Display", fontSize: "25px", textAlign: "center"}}>
                    Hydrotherapy
                    </h1>
                    <p>A type of alternative medicine that involves the use of water for the treatment and prevention of..</p>
                    </div>
                    <div style={{width: '100%'}} > <h1 style={{fontFamily: "DM Serif Display", fontSize: "25px", textAlign: "center"}}>
                    Aromatherapy
                    </h1>
                    <p>
                    A caring, hands-on therapy which seeks to induce relaxation, to increase energy...
                    </p>
                    </div>
                    <div style={{width: '100%'}}> <h1 style={{fontFamily: "DM Serif Display", fontSize: "25px",textAlign: "center"}}>
                    Herbology
                    </h1>
                    <p>
                    The use of active compounds extracted from plants for treatment of diseases and...
                    </p>
                    </div>
                   
            </div>
            <div style={{display: 'flex'}}>
                    <div style={{width: '100%'}}>
                    <h1 style={{fontFamily: "DM Serif Display", fontSize: "25px", textAlign: "center"}}>
                    Accupressure
                    </h1>
                    <p>
                    A type of alternative medicine that includes applying pressure to particular points....
                    </p>
                    </div>
                    <div style={{width: '100%'}} > <h1 style={{fontFamily: "DM Serif Display", fontSize: "25px", textAlign: "center"}}>
                    Yoga
                    </h1>
                    <p>

                    Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas)...
                    </p>
                    </div>
                    <div style={{width: '100%'}}> <h1 style={{fontFamily: "DM Serif Display", fontSize: "25px",textAlign: "center"}}>
                    Diet & Nutrition

                    </h1>
                    <p> A healthy diet is an important foundation for good health, one that incorporates a range of foods..</p>
                    </div>
                   
            </div>
            
        </Col>
        <Col span={6}>
        </Col>
       </Row>


       <Row>
        <Col span={6}></Col>
        <Col  span={12}>
        <Splide  options={options}>
        <SplideSlide>
          <Row style={{background: '#ECDFD7', borderRadius: '40px'}}>
            <Col  span={10}>
              <img style={{marginTop: "100px"}} alt='yoga' src={firstyoga}/>
            </Col>
            <Col span={14} style={{padding:'20px'}}>
              <p style={{fontFamily: 'jost', fontSize: '18px', color: '#CDA274'}}>Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas), breathing methods (pranayama), relaxation, and meditation are all part of the practice. Yoga is founded on the idea that the body and mind are inextricably linked and that practicing yoga may assist to promote both physical and mental well-being.</p>
              <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px"}}>
              Diet & Nutrition
              </h1>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title>
                  How long does it take?
                  </Accordion.Title>
                  <Accordion.Content>
                    test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  What age should you start yoga?
                  </Accordion.Title>
                  <Accordion.Content>
                    test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  How is yoga better than exercises?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  Does yoga require the help of an instructor or can it be self-taught?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  Can you learn how to do yoga through books or television?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </Col>
          </Row>
      </SplideSlide>
      <SplideSlide>
      <Row style={{background: '#ECDFD7',borderRadius: '40px'}}>
            <Col  span={10}>
              <img style={{marginTop: "100px"}} alt='yoga' src={yoga}/>
            </Col>
            <Col span={14} style={{padding:'20px'}}>
              <p style={{fontFamily: 'jost', fontSize: '18px', color: '#CDA274'}}>Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas), breathing methods (pranayama), relaxation, and meditation are all part of the practice. Yoga is founded on the idea that the body and mind are inextricably linked and that practicing yoga may assist to promote both physical and mental well-being.</p>
              <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px"}}>
              Frequently Asked Questions
              </h1>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title>
                  How long does it take?
                  </Accordion.Title>
                  <Accordion.Content>
                    test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  What age should you start yoga?
                  </Accordion.Title>
                  <Accordion.Content>
                    test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  How is yoga better than exercises?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  Does yoga require the help of an instructor or can it be self-taught?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  Can you learn how to do yoga through books or television?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </Col>
          </Row>
      </SplideSlide>
      <SplideSlide>
      <Row style={{background: '#ECDFD7', borderRadius: '40px'}}>
            <Col  span={10}>
              <img style={{marginTop: "100px"}} alt='yoga' src={thirdyoga}/>
            </Col>
            <Col span={14} style={{padding:'20px'}}>
              <p style={{fontFamily: 'jost', fontSize: '18px', color: '#CDA274'}}>Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas), breathing methods (pranayama), relaxation, and meditation are all part of the practice. Yoga is founded on the idea that the body and mind are inextricably linked and that practicing yoga may assist to promote both physical and mental well-being.</p>
              <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px"}}>
              Aroma Therapy
              </h1>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title>
                  How long does it take?
                  </Accordion.Title>
                  <Accordion.Content>
                    test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  What age should you start yoga?
                  </Accordion.Title>
                  <Accordion.Content>
                    test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  How is yoga better than exercises?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  Does yoga require the help of an instructor or can it be self-taught?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                  Can you learn how to do yoga through books or television?
                  </Accordion.Title>
                  <Accordion.Content>
                  test
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </Col>
          </Row>
      </SplideSlide>
    </Splide>
        </Col>
        <Col span={6}>
        </Col>
       </Row>

       <Row>
        <Col span={6}>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={14}>
              <div style={{padding: '50px'}}>
              <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px"}}> History of acupressure </h1>
              <p>
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
        <Col span={6}></Col>
       </Row>
       <Row style={{marginTop: "50px", background: '#ECDFD7'}}>
        <Col span={6}>
        
        </Col>
        <Col  span={12}>
          <Row>
            <Col style={{padding: "50px"}} span={12}>
               <img alt="expert" src={expert}/>
            </Col>
            <Col style={{padding: "50px"}} span={12}>
              <h1 style={{fontFamily: "DM Serif Display", fontSize: '50px'}}>
              Why you need expert  guidance ?
              </h1> 
              <p  style={{fontFamily: 'Jost', fontSize: '22px'}}>
              Though the use of acupressure works as a great complementary therapy it has many benefits ,but the best results
it can only be done by applying pressure on the exact location for the right amount of time, a small miscalculation
in finding the right location can result in loss of any results at all .Careful selection of these points by an expert
according to your conditions and symptoms makes it very important to cure you from your symptoms.
              </p>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
        
        </Col>
       </Row>


       <Row style={{marginTop: '100px', marginBottom: '50px'}}>
        <Col span={6}>
        
        </Col>
        <Col span={12}>
          <div >
          <h1 style={{fontFamily: "DM Serif Display", fontSize: '50px'}}>WHY CUREVIVE?</h1>
            <p style={{fontFamily: 'Jost', fontSize: '22px'}}>Choosing the right points according to your condition and find their exact location can be a tedious task! Curevive
is here to guide you at every step . We understand the importance of acupressure as a complementary therapy .</p>
             <ol>
              <li style={{fontFamily: 'Jost', fontSize: '22px'}}>
              1. Identify the root cause of your condition
              </li>
              <li style={{fontFamily: 'Jost', fontSize: '22px'}}>
              2. Make a list of what acupressure points will work best
with your condition.
              </li>
              <li style={{fontFamily: 'Jost', fontSize: '22px'}}>
              3. Courier you our specially designed acupressure tool
              </li>
              <li style={{fontFamily: 'Jost', fontSize: '22px'}}>
              4. Equip you with our expert guided videos on how to
locate the points, chosen by our doctors for you.
              </li>

             </ol>
          </div>
        </Col>
        <Col span={6}>
        
        </Col>
       </Row>
       <Row style={{marginTop: '100px', background: '#ECDFD7'}}>
        <Col span={6}>

        </Col>
        <Col span={12}>
           <div>
            <h1 style={{fontFamily: "DM Serif Display", fontSize: "50px", textAlign: "center"}}>
            Backed by evidence !
            </h1>
            <p style={{fontFamily: 'Jost', fontSize: '22px'}}>Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
shown that acupressure has helped cancer patients by reducing cancer-related fatigue and nausea. Acupressure has shown marvellous results in reducing anxiety and improving health in patients undergoing surgeries.</p>
           </div>
        </Col>
        <Col span={6}>
        </Col>
       </Row>
       <Row style={{marginTop: "100px" }}>
        <Col span={6}>
        </Col>
        <Col span={12}>
          <img src={slider}/>
        </Col>
        <Col span={6}>
        </Col>
       </Row>

       <Row>
        <Col span={6}>
        </Col>
        <Col span={12}>
          <div style={{display: 'flex'}}>
            <div style={{width: '100%', borderRadius: '20px', margin: '10px', padding: '10px',background: "#ECDFD7"}}>
                      <h1 style={{fontFamily: "DM Serif Display", fontSize: "22px", fontWeight: 'bold'}}>
                        Peppermint, a safe alternative for improving gut health 
                        </h1>
                        <p style={{fontFamily: 'Jost', fontSize: '22px'}}> 
                        Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
          circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
          shown that acupressure has helped cancer.Acupressure has shown marvellous results in reducing anxiety 
                        </p>
                        <div style={{margin: '50px'}}>
                        <a  href="https://www.aafp.org/pubs/afp/issues/2007/0401/p1027.html">Read reseach paper....</a>
                        </div>
                      </div>
                      <div style={{width: '100%',borderRadius: '20px', margin: '10px', padding: '10px',background: "#ECDFD7"}}>
                      <h1 style={{fontFamily: "DM Serif Display", fontSize: "25px", fontWeight: 'bold'}}>
                        Peppermint, a safe alternative for improving gut health 
                        </h1>
                        <p style={{fontFamily: 'Jost', fontSize: '22px'}}> 
                        Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
          circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
          shown that acupressure has helped cancer.Acupressure has shown marvellous results in reducing anxiety 
                        </p>
                        <div style={{margin: '50px'}}>
                        <a href="https://www.aafp.org/pubs/afp/issues/2007/0401/p1027.html">Read reseach paper....</a>
                        </div>
                      </div>
                      <div style={{width: '100%',borderRadius: '20px',margin: '10px', padding: '10px', background: "#ECDFD7"}}>
                      <h1 style={{fontFamily: "DM Serif Display", fontSize: "22px", fontWeight: 'bold'}}>
                        Peppermint, a safe alternative for improving gut health 
                        </h1>
                        <p style={{fontFamily: 'Jost', fontSize: '22px'}}> 
                        Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
          circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
          shown that acupressure has helped cancer.Acupressure has shown marvellous results in reducing anxiety 
                        </p>
                        <div style={{margin: '50px'}}>
                        <a  href="https://www.aafp.org/pubs/afp/issues/2007/0401/p1027.html">Read reseach paper....</a>
                        </div>
                      </div>
          </div>
        </Col >
        <Col span={6}>
        </Col>
       </Row>

       <Row style={{marginTop: '150px'}}>
          <Col span={6}></Col>
          <Col span={12}>
            <div style={{borderRadius: "35px", background: "#292F36" }}> 
              <h1 style={{paddingTop: '100px',fontFamily: "DM Serif Display", fontSize: "50px",color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Want to talk to a doctor?</h1>
              <p style={{margin: '70px',fontFamily: 'Jost', fontSize: '22px', color: 'white', textAlign: 'center'}}>Book a complimentary consultation now.</p>
              <Button style= {{margin: 'auto', color: 'white', background: '#CDA274'}}>Contact Us <ArrowRightOutlined style={{color: '##292F36', marginLeft: "10px"}}/></Button>
            </div>
          </Col>
          <Col span={6}></Col>
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
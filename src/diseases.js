import { Button} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import {Row, Col} from 'antd';
import disease from './assets/diseaseBanner.jpg';
import disease1 from './assets/diseaseImage.png';
import gastritis from './assets/gastritis.png';
import diseaseframe from './assets/diseaseframe.png';
import success1 from './assets/success.png';
import success2 from './assets/success.png';
import {Carousel} from 'flowbite-react';
import carouse from './assets/carouser.png'
import { ArrowRightOutlined} from '@ant-design/icons'
import Header from './components/header';

const Diseases = ()=>{
    return(
        <div>
        <Header/>
            <img style={{width: '100%'}} src={disease} alt='disease'/>
            <div style={{width: '20%', margin: 'auto'}}>
            <img  src={disease1} style={{marginTop: '-150px'}}  alt='disease'/>
            </div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Row>
                    <Col span={12} style={{padding: "50px"}}> 
                        <div style={{background: '#ECDFD7', borderRadius: '30px', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '5px', paddingRight: '5px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                         
                            <div className='diseasescol' style={{width: '50%',fontFamily: 'DM Serif Display'}}>Age Group:</div>
                            <div className='diseasecol1' style={{width: '50%', fontFamily: 'jost'}}>    
                            30-60 yrs
                            </div>
                            
                        </div>
                        <div  style={{display: 'flex', justifyContent: 'space-evenly'}}>
                       
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'DM Serif Display'}}>
                            Duration:
                            </div>
                            <div style={{width: '50%'}}>
                                <p className='diseasescol'>
                            One month treatment
                            </p>
                            </div>   
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'DM Serif Display'}}>
                             Treatment Includes:
                            </div>
                            <div style={{width: '50%', height: '100px',}}>
                            <p className='diseasescol'>Dietplan,Yoga,Herbology,Hydrotherapy,Acupressure,Aromatherapy. </p> 
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'DM Serif Display'}}>
                            Mode: 
                            </div>
                            <div className='diseasecol1' style={{width: '50%', fontFamily: 'jost'}}>
                            Online treatment
                            </div>
                        </div>
                        </div>
                 </Col>
                <Col span={12}>
                    <h1 style={{fontFamily: "DM Serif Display", fontSize: "40px"}}>
                    Gastritis 
                    </h1>
                    <p className='firsttext' style={{textAlign: 'left'}}>
                    Gastritis is the inflammation, irritation or erosion of this protective stomach lining. 
                    Gastritis usually presents itself as a burning pain in the upper abdominal area, indigestion, 
                    nausea and vomiting. Chronic gastritis if not managed at the right time, can create cancerous conditions in the body.
                    We give importance to building up the body's own defense, in this case; building up the protective mucosal layer. 
                    Here at Curevive, you would be put through yoga classes under trained professionals, prescribed specially designed 
                    Satwik diet plans and undergo guided hydrotherapy sessions specific to gastritis. So by the end of the treatments, 
                    you can be assured of a safe, natural and healthy improvement in your health.
                    </p>
                </Col>
            </Row>
        </Col>
        <Col span={4}></Col>
     </Row>

     <Row style={{marginTop: '100px'}}>
        <Col span={4}>
        </Col>

        <Col span={16} style={{backgroundImage: `url(${gastritis})`, height: '600px', backgroundSize: '100% 100%'}}>
            <p style={{fontFamily: 'DM Serif Display', fontSize: '40px', color: 'white', marginTop: '250px' , textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}> 
                Curevive way of treating gastritis!
                (Video with steps on how to avail) 
             </p>
            
        </Col>
        
        <Col span={4}>
        </Col>
        </Row>
        <Row style={{marginTop: "100px" , background: '#ECDFD7', paddingTop: '150px', paddingBottom: '150px'}}>
            <div style={{width: '100%'}}> 
            <h1 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "70px"}}>3d animation of products displaying out of the box</h1>
           </div>
        </Row>
        <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col span={16}> 
            <h1 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "50px"}}>Clinically proven!</h1>
            <p style={{ fontFamily: "jost", fontSize: "22px"}}>Our holistic treatments are backed by clinical evidence to promote overall well-being and improve physical, mental, and emotional health.</p>
            <div>
                <img alt='frame' src={diseaseframe}/>
            </div>
            </Col>
            <Col span={4}></Col>
        </Row>

        <Row>
            <Col span={4}>
            </Col>
            <Col span={16}>
                <div style={{display: 'flex'}}>
                <div style={{background: '#ECDFD7', borderRadius: '30px', margin: '10px', padding: '10px'}}>
                    <h1 style={{fontSize: '22px' , fontFamily: 'DM Serif Display', fontWeight: 'bold'}}>
                    Peppermint, a safe alternative for improving gut health 
                    </h1>
                    <p style={{fontSize: '22px' , fontFamily: 'jost'}}>
                    Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
                    circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
                    shown that acupressure has helped cancer.Acupressure has shown marvellous results in reducing anxiety 
                    </p>
                    </div>
                    <div style={{background: '#ECDFD7', borderRadius: '30px', margin: '10px', padding: '10px'}}>
                    <h1 style={{fontSize: '22px' , fontFamily: 'DM Serif Display', fontWeight: 'bold'}}>
                    Peppermint, a safe alternative for improving gut health 
                    </h1>
                    <p style={{fontSize: '22px' , fontFamily: 'jost'}}>
                    Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
                    circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
                    shown that acupressure has helped cancer.Acupressure has shown marvellous results in reducing anxiety 
                    </p>
                    </div>
                    <div style={{background: '#ECDFD7', borderRadius: '30px', margin: '10px', padding: '10px'}}>
                    <h1 style={{fontSize: '22px' , fontFamily: 'DM Serif Display', fontWeight: 'bold'}}>
                    Peppermint, a safe alternative for improving gut health 
                    </h1>
                    <p style={{fontSize: '22px' , fontFamily: 'jost'}}>
                    Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
                    circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
                    shown that acupressure has helped cancer.Acupressure has shown marvellous results in reducing anxiety 

                    </p>
                    <div style={{marginTop: '30px', marginLeft: '20px', color:" blue", textDecoration: 'undeline'}}>
                        <a href='https://www.aafp.org/pubs/afp/issues/2007/0401/p1027.html' target='_blank' rel="noreferrer">Read Research paper...</a>
                    </div>
                    </div>
                     </div>

                     
            </Col>
            <Col span={4}>
            </Col>
        </Row>

        <Row>
            <Col span={4}></Col>
            <Col span={16} style={{background: '#ECDFD7', borderRadius: '30px', marginTop: '100px', paddingTop: '30px'}}>
                <div>
                    <h1 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "50px"}}>
                    SUCESS STORIES
                    </h1>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{padding: '50px', borderRadius: '30px'}}>
                    <img alt="succes" src={success1}/>
                    </div>
                    <div style={{padding: '50px', borderRadius: '30px'}}>
                    <img alt="succes" src={success2}/>
                    </div>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col span={16}>
            <div style={{marginBottom: '40px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "50px"}}>
                    Begin your journey
                    </h1>
              
                    </div>
                    <div style={{width: '100%', height: '400px'}}>
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
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row >
            <Col span={4}></Col>
            <Col span={16}>
            <div style={{margin: '50px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "50px"}}>
                    Pricing & Plan
                    </h1>
              
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{background: '#ECDFD7', borderRadius: '30px' , width: '100%', margin: '10px', padding: '40px'}}>
                            <p style={{fontFamily: 'DM Serif Display', fontSize: '25px', textAlign: 'center'}}>10 Day trial </p>
                            <h1 style={{fontFamily: 'DM Serif Display', fontSize: '85px', fontWeight: 'bold', textAlign: 'center' }}>₹950</h1>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'jost', fontSize: '20px', textAlign: 'center'}}>1 Consultation</p>
                            <p style={{fontFamily: 'jost', fontSize: '20px', textAlign: 'center'}}>Protocol Creation </p>
                            <p style={{fontFamily: 'jost', fontSize: '20px', textAlign: 'center'}}>Diet Plan</p>
                            <p style={{fontFamily: 'jost', fontSize: '20px', textAlign: 'center'}}>Yoga Protocol</p>
                            <div style={{marginTop: '40px'}}>
                            <Button  style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'jost', margin: 'auto'}}> Get Started<ArrowRightOutlined/></Button>
                            </div>
                        </div>
                        <div style={{background: '#ECDFD7', borderRadius: '30px', width: '100%', margin: '10px', padding: '40px'}}>
                            <p style={{fontFamily: 'DM Serif Display', fontSize: '25px', textAlign: 'center'}}> Complete Plan </p>
                            <h1 style={{fontFamily: 'DM Serif Display', fontSize: '85px', fontWeight: 'bold', textAlign: 'center' }}>₹950</h1>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'jost', fontSize: '20px', textAlign: 'center', }}>Weekly Consultation followups Treatment Kit that include herbal capsules and esentil-oil bled
                                            Protocol Creation Diet Plan with Recipes Yoga Protocol
                                            Trataka and Meditation Protocol
                                            Acupressure and Reflexology
                                            Hydrotherapy and Packs
                                            Available doctor chat support

                                            </p>
                                            <div style={{marginTop: '40px'}}>
                            <Button style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'jost', margin: 'auto'}} > Get Started<ArrowRightOutlined/></Button>
                            </div>
                        </div>
                        <div style={{background: '#ECDFD7', borderRadius: '30px', width: '100%', margin: '10px', padding: '40px'}}>
                            <p style={{fontFamily: 'DM Serif Display', fontSize: '25px', textAlign: 'center'}}>Premium Plan </p>
                            <h1 style={{fontFamily: 'DM Serif Display', fontSize: '85px', fontWeight: 'bold', textAlign: 'center' }}>₹950</h1>
                            <hr style={{height: '2px', background: '#CDA274'}}/>
                            <p style={{fontFamily: 'jost', fontSize: '20px', textAlign: 'center'}}>Weekly Consultation followups
                                        Additional Free 2 Consultations 3 Sessions with Reiki Master
                                        Treatment Kit that include herbal capsules and esentil-oil bled
                                        Protocol Creation
                                        Diet Plan with Recipes
                                        Yoga Protocol
                                        Trataka and Meditation Protocol
                                        Acupressure and Reflexology
                                        Hydrotherapy and Packs
                                        Available doctor chat support
                                        </p>
                         <div style={{marginTop: '40px'}}>
                             <Button  style={{background: "#CDA274", color: 'white', fontSize: '18px', fontFamily: 'jost', margin: 'auto'}}> Get Started<ArrowRightOutlined/></Button>
                          </div>
                         </div>
                    </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row>
            <Col span={4}></Col>
            <Col span={16}>
                <div style={{background: '#ECDFD7', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "50px"}}>Check out the questions asked by our patients previously</h1>
                    <h3 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "25px"}}>Visit Q&A </h3>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row style={{marginTop: '30px', marginBottom: '50px'}}>
            <Col span={4}>
            
            </Col>
            <Col span={16}>
        <div style={{margin: '70px'}}>
            <div style={{background: '#292F36', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                    <h1 style={{textAlign: 'center', fontFamily: "DM Serif Display", fontSize: "50px", color: 'white'}}>Not sure if its for you?</h1>
                    <Button style={{margin: 'auto', background: '#CDA274', color: 'white'}}>Talk to a doctor<ArrowRightOutlined/></Button>
                </div>
                </div>
            </Col>
            <Col span={4}>
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
       
    );
}
export default Diseases;
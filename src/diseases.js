import { Button} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import {Row, Col} from 'antd';
import disease from './assets/diseaseBanner.jpg';
import disease1 from './assets/diseaseImage.png';
import gastritis from './assets/gastritis.png';

import success1 from './assets/success.png';
import success2 from './assets/success.png';
import {Carousel} from 'flowbite-react';
import carouse from './assets/carouser.png'
import { ArrowRightOutlined} from '@ant-design/icons'
import Header from './components/header';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';  


const Diseases = ()=>{
    const {id} = useParams();
    const [diseases, setDiseases] = useState();
    const [researchpaper, setResearchpaper] = useState([]);
    const [loading, setLoading] = useState(false);
    const [treatments, setTreatments] =useState();
     useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/treatment')
        .then((res)=>{
          setTreatments(res.data);
        });
        axios.get(`http://127.0.0.1:8000/api/disease/${id}`)
        .then((res)=>{
          setDiseases(res.data);
        });
        axios.get('http://127.0.0.1:8000/api/researchpaper')
        .then((res)=>{
          setResearchpaper(res.data);
        });
     },[]);
    return(
        <div>
        <Header/>
            <img style={{width: '100%'}} src={disease} alt='disease'/>
            <div style={{width: '20%', margin: 'auto'}}>
            <img  src={`http://127.0.0.1:8000/${diseases?.picture}`} style={{marginTop: '-150px'}}  alt='disease'/>
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
                            { diseases?.agegroup}
                            </div>
                            
                        </div>
                        <div  style={{display: 'flex', justifyContent: 'space-evenly'}}>
                       
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'DM Serif Display'}}>
                            Duration:
                            </div>
                            <div style={{width: '50%'}}>
                                <p className='diseasescol'>
                                {diseases?.duration} 
                            </p>
                            </div>   
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'DM Serif Display'}}>
                             Treatment Includes:
                            </div>
                            <div style={{width: '50%', height: '100px',}}>
                            <p className='diseasescol'> {diseases?.treatments}  </p> 
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div className='diseasescol' style={{width: '50%', fontFamily: 'DM Serif Display'}}>
                            Mode: 
                            </div>
                            <div className='diseasecol1' style={{width: '50%', fontFamily: 'jost'}}>
                            {diseases?.mode} 
                            </div>
                        </div>
                        </div>
                 </Col>
                <Col span={12}>
                    <h1 style={{fontFamily: "DM Serif Display", fontSize: "40px"}}>
                    {diseases?.name} 
                    </h1>
                    <p className='firsttext' style={{textAlign: 'left'}}>
                      {diseases?.description}
                    </p>
                </Col>
            </Row>
        </Col>
        <Col span={4}></Col>
     </Row>

     <Row style={{marginTop: '100px'}}>
        <Col span={4}>
        </Col>

        <Col span={16} style={{ height: '600px', backgroundSize: '100% 100%', margin: 'auto'}}>
                    <iframe
                width="853"
                height="480"
                src={`${diseases?.videolink}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
             
          
            
        </Col>
        <Col span={16}>
        <div className="video-responsive">

  </div>
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
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {treatments?.map((item, index) => 
                <Button  className="commonbutton buttonHeader" >{item?.name}</Button>
               )}
            </div>
            </Col>
            <Col span={4}></Col>
        </Row>

        <Row>
            <Col span={4}>
            </Col>
            <Col span={16}>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {researchpaper.map((item) => 
            <div style={{width: '30%', borderRadius: '60px', margin: '10px', padding: '10px',background: "#ECDFD7"}}>
                      <h1  style={{fontFamily: "DM Serif Display", fontSize: "22px", fontWeight: 'bold', margin: '10px'}}>
                        {item.title}
                        </h1>
                        <p style={{fontFamily: 'Jost', fontSize: '22px', margin: '20px', color: '#4D5053'}}> 
                        {item.description}
                        </p>
                        <div style={{margin: '20px'}}>
                        <a  style={{marginTop: '30px', marginLeft: '0px', color:" blue", textDecoration: 'undeline'}} href ={`url(${item.link})`} >Read reseach paper....</a>
                        </div>
                      </div>
          )}
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
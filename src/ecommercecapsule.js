import { Button, Navbar} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import capsuleBanner from './assets/capsuleBanner.jpg';
import herbaloil from './assets/oil.png';
import herbal from './assets/herbal.png';
import {Row, Col, Input} from 'antd';
import ecommerceframe from './assets/ecommerceframe.png';
import oilmart from './assets/oilmart.png';
import {ArrowRightOutlined, RightOutlined} from '@ant-design/icons';
import Header from './components/header';
const EcommerceCapsule = ()=>{
     return(
        <div>
     <Header/>
    <img alt="about Banner"style={{marginBottom: '200px'}} src={capsuleBanner}/>

      

     

    <Row>
        <Col span={6}></Col>
        <Col span={12}>
           <Row style={{background: '#ECDFD7', borderRadius: '30px'}}>
           <Col span={8}> 
             <div style={{marginTop: '50px', paddingLeft: '30px'}}> <img style={{height: '300px', width: '400px'}} alt='herbal' src={herbaloil}/></div>
           </Col>
           <Col span={16}>
            <h1 style={{fontFamily: 'lota', fontSize: '20px', margin: '30px'}}> Herbal medicine has been used for centuries to treat a range of 
                ailments and promote overall wellness. This ancient practice has 
                a rich history that dates back to civilizations such as Egypt 
                ,India and China. Today, it remains a popular alternative or
                 complementary form of healthcare. Over time, herbal medicine has evolved, 
                 and it continues to be an important aspect of traditional and modern medicine. 
                 When used in the right amount and blend, herbs can provide numerous benefits 
                 to the body, including natural healing and fewer side effects than prescription drugs.
                  If you are considering using herbal medicine, it is important to consult a qualified
                   healthcare provider for guidance on proper dosage and usage.</h1>
           </Col>
           </Row>

        </Col>
        <Col span={6}></Col>
        </Row>  
    <Row>

        <Col span={6}>
        </Col>
        <Col span={12}>
            <div style={{margin: '50px'}}>
            <h1 style={{textAlign: 'center', fontSize:'70px', fontFamily: 'Playfair Display'}}>Filter by concern.</h1>
            </div>
            <div>
                <img alt='ecommerce frame' src={ecommerceframe}/>
            </div>
        </Col>
        <Col span={6}>
        </Col>
    </Row>

 
     
        <Row>
                
        <Col span={6}></Col>
        <Col span={12}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
                <div style={{width: '30%', border: '1px solid', borderRadius: '30px', margin: '10px'}}>
                    <img style={{padding: '20px'}} src={oilmart} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>Diabetic Care</h1>
                    <p style={{width: '30%', float: 'right'}}>Explore<RightOutlined/></p>
                </div>
            </div>
        </Col>
        <Col span={6}></Col>
        </Row>

        <Row style={{marginTop: '100px'}}>  
        <Col span={6}></Col>
        <Col span={12}>
            <p style={{fontFamily: 'lota', fontSize: '22px', textAlign: 'center'}}>Achieve long-term wellness and prevent future health problems by taking a holistic 
                approach to health with Curevive. Our natural, high-quality herbal supplements and oils
                 work in harmony with healthy diet, yoga, acupressure, stress management, and other 
                 self-care practices to treat the root cause of disease and promote overall wellness. 
                 Start your journey towards a disease-free, healthy life today with Curevive</p>
        </Col>
        <Col span={6}></Col>
        </Row>  
     
        <Row style={{marginTop: '30px', marginBottom: '50px'}}>
                <Col span={6}>
                
                </Col>
                <Col span={12}>
            <div style={{margin: '70px'}}>
                <div style={{background: '#292F36', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                        <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px", color: 'white'}}>Want to talk to a doctor?</h1>
                        <p style={{fontFamily: 'lota', fontSize: '22px', textAlign: 'center',color: 'white', marginBottom: '30px'}}>Book a consultation now.</p>
                        
                        <Button style={{margin: 'auto', background: '#CDA274', color: 'white'}}>View packages<ArrowRightOutlined/></Button>
                    </div>
                    </div>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
        <Row>
            <Col span={24}>
            <div style={{textAlign: "center"}}>Copyright © Curevive | </div>
            <div style={{margin: 'auto', width: "10%"}}>
            <img style={{}} alt="logo" src={logo}/>
            <img alt="logo text" src={logotext}/>
            </div>
            </Col>
        </Row>

        </div>
     )
}
export default EcommerceCapsule;
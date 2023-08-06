import Header from "./components/header";
import treatmentbanner from './assets/treatmenthome.png';
import herbaloil from  './assets/herbaloil.png';
import herbalcapsule from './assets/herbalcapsule1.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import trt1 from './assets/trt1.png';
import trt2 from './assets/trt2.png';
import trt3 from './assets/trt3.png'; 
import blurred from './assets/blurred.png';
import {ArrowRightOutlined} from '@ant-design/icons';

import {Row, Button,Col} from 'antd';
import Footer from "./components/footer";
import { Link } from "react-router-dom";


const TreatmentHome=()=>{
    const options = {
        type   : 'loop',
        focus  : 'center',
        perPage: 3,
        perMove: 1,
      };
    return(
        <div>
            <Header/>
            
            <div style={{ marginTop: '0px', height: '700px',paddingTop: '300px',  width: '100%',backgroundImage: `url(${treatmentbanner})`}}>
              <div style={{width: '60%', margin: 'auto', backgroundImage: `url(${blurred})`, backgroundSize: '100% 100%'}}>
                <h1 style={{textAlign: 'center', fontFamily: 'Playfair Display', fontSize: '75px' , fontWeight: '400', lineHeight: '113px', letterSpacing: '0.01em' }}>
                Harness the healing benefits of nature with our essential oils
                </h1>
                </div>
            </div>
            <Row style={{marginTop: '100px'}}>
                <Col span={6}></Col>
                <Col span={12}>
                    <h1 className="firstheaders" style={{margin: 'auto', width: '30%'}}>
                    Products
                    </h1>
                    <p className="firsttext">Looking to improve your health naturally? Choose Curevive for high-quality, natural herbal supplements and oils, expertly formulated for optimal wellness, with a commitment to transparency, customer satisfaction, and best results.</p>
                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
                <Col span={6} style={{marginRight: '30px', marginTop: '100px'}}>
                    <Link style={{color: 'black'}} to='/ecommercecapsule'>
                    <h1 className="firstheaders" style={{backgroundImage: `url(${herbaloil})`, color: 'white', textAlign: 'center', backgroundSize: '100% 100%', paddingTop: '400px'}}>      
                                  Herbal oil
                    </h1>
                    </Link>
                </Col>
                <Col span={6} style={{marginLeft: '30px', marginTop: '100px'}}>
                <Link style={{color: 'black'}} to='/ecommerceherbal'>
                    <h1  className="firstheaders" style={{backgroundImage: `url(${herbalcapsule})`, color: 'white', textAlign: 'center', backgroundSize: '100% 100%', paddingTop: '400px'}}>
                    Herbal capsule
                    </h1>
                    </Link>
                </Col>
                <Col span={5}></Col>
                                    
            </Row>

            <Row style={{background: '#ECDFD7', marginTop: '100px'}}>
                
                <div style={{width: '100%'}}>
                <h1 className="firstheaders" style={{margin: 'auto', width: '10%'}}>
                Diseases
                    </h1>
                </div>
                <Col span={6}> 
                </Col>
                <Col span={12}> 
                <Splide style={{color: 'black', background: 'black'}} options={options}>
                    <SplideSlide>
                       <div style={{margin: '10px'}}> <img src={trt1} alt="diseases"/></div>
                    </SplideSlide>
                    <SplideSlide>
                    <div style={{margin: '10px'}}><img src={trt2} alt="diseases"/></div>
                    </SplideSlide>
                    <SplideSlide>
                    <div style={{margin: '10px'}}><img src={trt3} alt="diseases"/></div>
                    </SplideSlide>
        
                      </Splide>
                </Col>
                <Col span={6}> 
                </Col>
            </Row>

            <Row style={{marginTop: '100px'}}>  
        <Col span={6}></Col>
        <Col span={12}>
            <p style={{fontFamily: 'lato', fontSize: '22px', textAlign: 'center'}}>Achieve long-term wellness and prevent future health problems by taking a holistic 
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
            <div style={{padding: '10px'}}>
                <div style={{background: '#292F36', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                        <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px", color: 'white'}}>Want to talk to a doctor?</h1>
                        <p style={{fontFamily: 'lato', fontSize: '22px', textAlign: 'center',color: 'white', marginBottom: '30px'}}>Book a consultation now.</p>
                        
                        <Button style={{margin: 'auto', background: '#CDA274', color: 'white'}}>View packages<ArrowRightOutlined/></Button>
                    </div>
                    </div>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}
export default TreatmentHome;
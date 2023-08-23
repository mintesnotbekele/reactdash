import Header from './components/headerbackup';
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
import { Link, useNavigate } from "react-router-dom";


const TreatmentHome=()=>{
    const navigate =useNavigate();
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
              <div className="treatmentcontainer" style={{backgroundImage: `url(${blurred})`}}>
                <h1 className="treatmentheader">
                Harness the healing benefits of nature with our essential oils
                </h1>
                </div>
            </div>
            <Row style={{marginTop: '100px'}}>
                <Col xl={6} xm={6} xs={24} span={6}></Col>
                <Col xl={12} xs={24} xm={12} span={12}>
                    <h1 className="firstheaders" style={{margin: 'auto', width: '30%'}}>
                    Products
                    </h1>
                    <p className="firsttext">Looking to improve your health naturally? Choose Curevive for high-quality, natural herbal supplements and oils, expertly formulated for optimal wellness, with a commitment to transparency, customer satisfaction, and best results.</p>
                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
                <Col xl={6} xs={24} xm={6} span={6} style={{marginRight: '30px', marginTop: '100px',padding: '10px'}}>
                    <Link style={{color: 'black'}} to='/ecommercecapsule'>
                    <h1 className="firstheaders" style={{backgroundImage: `url(${herbaloil})`, color: 'white', textAlign: 'center', backgroundSize: '100% 100%', paddingTop: '400px'}}>      
                                  Herbal oil
                    </h1>
                    </Link>
                </Col>
                <Col xl={6} xs={24} xm={6} span={6} style={{padding: '10px', marginTop: '100px'}}>
                <Link style={{color: 'black'}} to='/ecommerceherbal'>
                    <h1  className="firstheaders" style={{backgroundImage: `url(${herbalcapsule})`, color: 'white', textAlign: 'center', backgroundSize: '100% 100%', paddingTop: '400px'}}>
                    Herbal capsule
                    </h1>
                    </Link>
                </Col>
                <Col span={5}></Col>
                                    
            </Row>

            <Row style={{background: 'rgba(78, 52, 38, 0.6)', marginTop: '100px'}}>
            <Col  span={24}> 
               
                <div className="mx-auto flex justify-center">
                <h1 className="firstheaders" style={{margin: 'auto'}}>
                Diseases
                    </h1>
                </div>
                </Col>
                <Col xl={6} xs={24} xm={6} span={6}> 
                </Col>
                <Col xs={24} xl={12} xm={12} span={12}> 
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
        <Col xs={24} xl={6} span={6}></Col>
        <Col xs={24} xl={12} span={12}>
            <p style={{fontFamily: 'lato', fontSize: '22px', textAlign: 'center', padding: '10px'}}>Achieve long-term wellness and prevent future health problems by taking a holistic 
                approach to health with Curevive. Our natural, high-quality herbal supplements and oils
                 work in harmony with healthy diet, yoga, acupressure, stress management, and other 
                 self-care practices to treat the root cause of disease and promote overall wellness. 
                 Start your journey towards a disease-free, healthy life today with Curevive</p>
        </Col>
        <Col xl={6} xs={24} span={6}></Col>
        </Row>  
     
        <Row style={{marginTop: '30px', marginBottom: '50px'}}>
                <Col xl={6} xs={24} span={6}>
                
                </Col>
                <Col xs={24} xl={12} span={12}>
            <div style={{padding: '10px'}}>
                <div style={{background: '#292F36', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                        <h1 className="articleHeader" style={{textAlign: 'center', color: 'white'}}>Want to talk to a doctor?</h1>
                        <p style={{fontFamily: 'lato', fontSize: '22px', textAlign: 'center',color: 'white', marginBottom: '30px'}}>Book a consultation now.</p>
                        <div className="mx-auto flex justify-center">
                        <Button onClick={()=> navigate('/about')} style={{margin: 'auto', background: '#CDA274', color: 'white', paddingTop: '10px' , paddingBottom: '30px' }}>View packages<ArrowRightOutlined/></Button>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col xl={6} xs={24} span={6}>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}
export default TreatmentHome;
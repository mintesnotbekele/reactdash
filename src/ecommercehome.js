import Header from './components/headerbackup';
import disease from './assets/diseaseBanner.jpg';
import disease1 from './assets/diseaseImage.png';
import { Col, Button, Row } from "antd";
import Footer from "./components/footer";
import herbaloil from './assets/oilmart.png';
import herbalcapsule from './assets/herbalmedicine1.png';

import {ArrowRightOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

const EcommerceHome=()=>{
    return (
    <div>
         <Header/>
            <img style={{width: '100%'}} src={disease} alt='disease'/>
            <div style={{width: '20%', margin: 'auto'}}>
            <img  src={disease1} style={{marginTop: '-150px'}}  alt='disease'/>
            </div>
            <div style={{ width: '100%', margin: 'auto'}}> <h1 className="firstheaders" style={{ width: '10%', margin: 'auto'}}>Gastritis</h1></div>
            <Row>
                <Col span={4}></Col>
                <Col xl={16} xs={24} span={16}>
                    <p className="firsttext">Looking to improve your health naturally? Choose Curevive for high-quality, natural herbal supplements and oils, expertly formulated for optimal wellness, with a commitment to transparency, customer satisfaction, and best results.

Gastritis is the inflammation, irritation or erosion of this protective stomach lining. Gastritis usually presents itself as a burning pain in the upper abdominal area, indigestion, nausea and vomiting. Chronic gastritis if not managed at the right time, can create cancerous conditions in the body.We give importance to building up the body's own defense, in this case; building up the protective mucosal layer.</p>
                </Col>
                <Col span={4}></Col>
            </Row>
                
            <Row style={{marginTop: '70px'}}>
                <Col span={4}></Col>
                <Col xl={16} xs={24} span={16}>
                  <div style={{display: 'flex', background: 'rgba(78, 52, 38, 0.6)', borderRadius: '40px', margin: '70px', padding: '30px'}}>
                 
                    <div style={{width: '100%'}}>  
                    <Link style={{color: 'black'}} to='/ecommerceherbal'>
                        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '45px',fontWeight: '400' ,lineHeight: '56px', letterSpacing: '0em', textAlign: 'center'}}>Herbal capsule</h1>
                        <img style={{margin: 'auto'}} src={herbalcapsule} alt="herbal oil"/>
                        <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', fontWeight: '400', lineHeight: '31px', letterSpacing: '0.02em', textAlign: 'center'}}>Diabetic Care</h1>
                        </Link>
                     </div>
                    
                     
                        <div style={{width: '100%'}}>  
                        <Link style={{color: 'black'}} to='/ecommercecapsule'>
                        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '45px',fontWeight: '400' ,lineHeight: '56px', letterSpacing: '0em', textAlign: 'center'}}>Herbal oil</h1>
                        <img style={{margin: 'auto'}} src={herbaloil} alt="herbal oil"/>
                        <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', fontWeight: '400', lineHeight: '31px', letterSpacing: '0.02em', textAlign: 'center'}}>Diabetic Care</h1>
                        </Link>
                    </div>
                     
                  </div>
                  </Col>
                <Col span={4}></Col>
            </Row>
            <Row style={{marginTop: '100px'}}>  
        <Col span={6}></Col>
        <Col xl={12} xs={24} span={12}>
            <p style={{fontFamily: 'lato', fontSize: '22px', textAlign: 'center'}}>Achieve long-term wellness and prevent future health problems by taking a holistic 
                approach to health with Curevive. Our natural, high-quality herbal supplements and oils
                 work in harmony with healthy diet, yoga, acupressure, stress management, and other 
                 self-care practices to treat the root cause of disease and promote overall wellness. 
                 Start your journey towards a disease-free, healthy life today with Curevive</p>
        </Col>
        <Col span={6}></Col>
        </Row>  
     
        <Row style={{marginTop: '150px', marginBottom: '100px'}}>
          <Col xl={4} xs={0} span={4}></Col>
          <Col xl={16} xs={24} span={16}>
             <div style={{padding: '10px'}}>
            <div style={{borderRadius: "50px", paddingBottom: '50px',  background: "#292F36" }}> 
              <h1 style={{paddingTop: '30px',fontFamily: "Playfair Display", fontSize: "50px",color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Want to talk to a doctor?</h1>
              <p style={{margin: '30px',fontFamily: 'lato', fontSize: '22px', color: 'white', textAlign: 'center'}}>Book a complimentary consultation now.</p>
                    <div className="mx-auto  flex justify-center" style={{width: '100%'}}>
                      <Button  style={{margin: 'auto', color: 'white', background: 'rgba(78, 52, 38, 0.6)'}}>Contact Us <ArrowRightOutlined style={{color: 'white', marginLeft: "10px"}}/></Button>
                    </div>
            </div>
            </div> 
          </Col>
          <Col xs={0} xl={4} span={4}></Col>
       </Row> 
            <Footer/>

    </div>)
}
export default EcommerceHome;
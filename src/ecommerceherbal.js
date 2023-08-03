import { Button, Navbar} from 'flowbite-react';
import logo from './assets/logo.png';
import logotext from './assets/text.png';
import herbalBanner from './assets/herbalcapsule.jpg';
import herbal from './assets/herbal.png';
import {Row, Col, Input} from 'antd';
import ecommerceframe from './assets/ecommerceframe.png';
import capsules from './assets/capsules.png';
import {ArrowRightOutlined, RightCircleTwoTone } from '@ant-design/icons';
import Header from './components/header';
import {RightOutlined} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EcommerceHerbal = ()=>{

    const [products, setProducts] = useState([]);
    const [entered1, setEntered1] = useState(true);
    

    useEffect(()=>{
        axios.get('https://curevive.prophecius.com/api/product')
      .then((res)=>{
        setProducts(res.data);
        
      })
     },[])


     return(
        <div>
     <Header/>
    <img alt="about Banner"style={{marginBottom: '200px'}} src={herbalBanner}/>

    
    <Row>
        <Col span={4}></Col>
        <Col xl={16} xs={24} span={16}>
           <Row style={{background: '#ECDFD7', borderRadius: '30px', paddingBottom: '20px'}}>
           <Col xl={8} xs={24} span={8}> 
             <div style={{marginTop: '50px', paddingLeft: '30px'}}> <img style={{height: '300px', width: '400px'}} alt='herbal' src={herbal}/></div>
           </Col>
           <Col xl={16} xs={24} span={16}>
            <h1 style={{fontFamily: 'lato', fontSize: '20px', margin: '30px'}}> Herbal medicine has been used for centuries to treat a range of 
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
        <Col span={4}></Col>
        </Row>  
    <Row>

        <Col span={6}>
        </Col>
        <Col xl={12} xs={24} span={12}>
            <div style={{margin: '50px'}}>
            <h1 style={{textAlign: 'center', fontSize:'70px', fontFamily: 'Playfair Display'}}>Filter by concern.</h1>
            </div>
           
        </Col>
        <Col span={6}>
        </Col>
    </Row>

        <Row>
                
        <Col span={6}></Col>
        <Col xl={12} xs={24} span={12}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products.map((item) =>   
               <Col xl={6} xs={24}>
                <div style={{width: '100%', border: '2px solid', borderRadius: '50px', margin: '10px', padding: '60px 10px'}}>

                    <Link style={{color: 'black'}} to={`/ecommerce/${item.id}`}>
                    <img style={{padding: '2px' , height:'28px   0px', width: '90%' ,margin: 'auto'}} src={`https://curevive.prophecius.com/${item.picture}`} alt='capsules' />
                    <h1 style={{fontFamily: 'Playfair Display', fontSize: '25px', textAlign: 'center'}}>{item.name}</h1>
                    <p className='blogsecond' style={{paddingTop: '10px', float: 'right', fontSize: '22px', fontFamily: 'lato'}}>Explore
                         <RightOutlined style={{marginTop: '-10px'}} className={ entered1 ? 'cursorhover': 'cursorfree'} />
                      </p>
                    </Link> 
            </div>
            </Col>
                               
            )}
            </div>
        </Col>
        <Col span={6}></Col>
        </Row>

        <Row style={{marginTop: '100px'}}>  
        <Col span={4}></Col>
        <Col xl={16} xs={24} span={16}>
            <p style={{fontFamily: 'lato', fontSize: '22px', textAlign: 'center'}}>Achieve long-term wellness and prevent future health problems by taking a holistic 
                approach to health with Curevive. Our natural, high-quality herbal supplements and oils
                 work in harmony with healthy diet, yoga, acupressure, stress management, and other 
                 self-care practices to treat the root cause of disease and promote overall wellness. 
                 Start your journey towards a disease-free, healthy life today with Curevive</p>
        </Col>
        <Col xl={4} xs={24} span={4}></Col>
        </Row>  
     
        <Row style={{marginTop: '0px', marginBottom: '50px'}}>
                <Col span={6}>
                
                </Col>
                <Col xl={12} xs={24} span={12}>
            <div >
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
        <Row>
            <Col span={24}>
            <div style={{textAlign: "center"}}>Copyright © Curevive  </div>
           
            </Col>
        </Row>

        </div>
     )
}
export default EcommerceHerbal;
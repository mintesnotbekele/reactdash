import Header from './components/headerbackup';
import diseasesBanner from './assets/diseasesditailBanner.jpg';
import { Row, Button,Col } from "antd";
import './App.css';
import Footer from "./components/footer";
import {ArrowRightOutlined} from '@ant-design/icons';
import herbalmedicine from './assets/herbalmedicine.png';
import adoosa from './assets/broartilcle.png';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import env from "react-dotenv";


const Bronchitis=()=>{
    const {id} = useParams();
   
    const [product, setProduct] = useState([]);
  
     useEffect(()=>{
        
        axios.get(`${process.env.REACT_APP_API_URL}/api/product/${id}`)
        .then((res)=>{
            setProduct(res.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/api/researchpaper`)
        .then((res)=>{
          setResearchpaper(res.data);
        }); 
     },[]);
  
    const [researchpaper, setResearchpaper] = useState([]);
   
    
 
     return(
        <div>
            <Header/>
            <img src={diseasesBanner} alt="Bronchitis banner"/>
            <div className="firstheaders flex mx-auto justify-center" > {product.name}</div>
            <Row style={{marginTop: '100px'}}>
                <Col xl={4}  xs={24} span={4}></Col>
                <Col xl={11} xs={24} span={11} className="flex mx-auto justify-center" >
                    <img src={`${process.env.REACT_APP_API_URL}/${product.picture}`} alt="herbalmedicine"/>
                </Col>

                <Col xl={5} xs={24} span={5} >
                <div style={{background: 'rgba(78, 52, 38, 0.6)', padding:'20px', borderRadius: '30px'}}>
                    <h1 className="blogHeader" style={{textAlign: 'center',}}>Product description</h1>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274',  color: '#4D5053',margin: '10px'}}>Medicinal property: {product.medicinalroperty}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Shelf life: {product.shelflife}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Storage: {product.storage}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Size:{product.size}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Application: {product.application}</p>

                     <Button className='buttonHeader' style={{background: '#292F36', width: '50%', margin: 'auto', paddingTop: '10px', paddingBottom: '30px', color: 'white'}}>Buy now <ArrowRightOutlined style={{marginLeft: '5px'}}/></Button>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>

            <Row style={{marginTop: '100px',padding: '10px'}}>
                <Col span={4}>
                </Col>

                <Col xl={16} xs={24} span={16}>
                    <p className="firsttext" style={{textAlign: 'left'}}> {product?.description}
                     </p>
                   
                </Col>
            </Row>

            <Row style={{padding: '10px'}}>
                <Col span={4}>
                </Col>
                <Col xl={16} xs={24} span={16}>
                    <div className="quoteclass">
                    <h1 className="italicHeader" style={{color: '#CDA274'}}> “</h1>
                    <p className="italictext" style={{ marginTop: '-100px', color: 'white'}}>{product?.quotes}</p>
                    </div>
                </Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>

            <Row>
                <Col span={4}>

                </Col>
                <Col xl={12} xs={24} span={12}>
                <div style={{padding: '20px'}}
                    dangerouslySetInnerHTML={{__html: product?.productcontent}}
                    />
                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4}>
                    
                </Col>
            </Row>
            <Row  style={{marginTop: '100px', padding: '10px'}} >
            <Col span={4}></Col>
            <Col xl={16} xs={24}  span={16} > 
            <h1 className="firstheaders" >Clinically proven!</h1>
            <p className="firsttext">Our holistic treatments are backed by clinical evidence to promote overall well-being and improve physical, mental, and emotional health.</p>
            </Col>
            <Col span={4}></Col>
        </Row>

        <Row style={{marginTop: '50px'}}>
        <Col span={4}>
        </Col>
        <Col xl={16} xs={24} span={16}>
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
            <div style={{width: '90%', margin: 'auto    ',borderRadius: '40px', padding: '10px' ,marginBottom: '30px',background: 'rgba(78, 52, 38, 0.6)'}}>
                      <h1  style={{fontFamily: "Playfair Display", fontSize: "22px", margin: '20px',fontWeight: 'bold', color: 'black' }}>
                        {item.title}
                        </h1>
                        <p style={{fontFamily: 'lato', fontSize: '18px', margin: '20px', color: 'white'}}> 
                        {item.description}
                        </p>
                        <div style={{margin: '20px'}}>
                          <br/>
                        <a  style={{fontWeight: 'bold', color:'blacks', float: 'right', textDecoration: 'undeline'}} target='_blank' href ={`${item.file}`} >Read reseach paper....</a>
                          <br/>
                        </div>
                      </div>
          )}      
                 </Carousel>
        </Col >
        <Col span={4}>
        </Col>
       </Row> 
            <Row style={{marginTop: '30px', marginBottom: '50px', padding: '10px'}}>
                <Col span={4}>
                
                </Col>
                <Col xl={16} xs={24} span={16}>
            <div >
              <div className="articletext">Achieve long-term wellness and prevent future health problems by taking a holistic approach to health with Curevive. Our natural, 
                high-quality herbal supplements and oils work in harmony with healthy diet, yoga, acupressure, stress management, and other self-care 
                practices to treat the root cause of disease and promote overall wellness. Start your journey towards a disease-free, healthy life today
                 with Curevive</div>
            
                    </div>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
            <Row style={{marginTop: '30px', marginBottom: '50px', padding: '10px'}}>
                   <Col span={6}>
                   
                   </Col>
                   <Col xl={12} xs={24} span={12}>
                       <div style={{margin: '0px'}}>
                           <div style={{background: '#292F36', borderRadius: '30px', marginTop: '100px', padding: '70px'}}>
                           <h1 className="articleHeader" style={{textAlign: 'center', color: 'white'}}>Want to talk to a doctor?</h1>
                                   <p style={{fontFamily: 'lato', fontSize: '22px', textAlign: 'center',color: 'white', marginBottom: '30px'}}>Book a consultation now.</p>
                                   <div className="mx-auto flex justify-center">
                                   <Button style={{margin: 'auto', background: '#CDA274', color: 'white', paddingTop: '10px', paddingBottom: '30px'}}>View packages<ArrowRightOutlined/></Button>
                                   </div>
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
export default Bronchitis;
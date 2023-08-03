import Header from "./components/header";
import diseasesBanner from './assets/diseasesditailBanner.jpg';
import { Row, Col } from "antd";
import { Button} from 'flowbite-react';
import Footer from "./components/footer";
import {ArrowRightOutlined} from '@ant-design/icons';
import herbalmedicine from './assets/herbalmedicine.png';
import adoosa from './assets/broartilcle.png';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Bronchitis=()=>{
    const {id} = useParams();
   
    const [product, setProduct] = useState([]);
  
     useEffect(()=>{
        
        axios.get(`https://curevive.prophecius.com/api/product/${id}`)
        .then((res)=>{
            setProduct(res.data);
        });
        axios.get('https://curevive.prophecius.com/api/researchpaper')
        .then((res)=>{
          setResearchpaper(res.data);
        }); 
     },[]);
  
    const [researchpaper, setResearchpaper] = useState([]);
    const [treatments, setTreatments] = useState([]);
    const [loading, setLoading] = useState(false);
   

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
    
 
     return(
        <div>
            <Header/>
            <img src={diseasesBanner} alt="Bronchitis banner"/>
            <div className="firstheaders" style={{margin: 'auto', width: '20%'}}> {product.name}</div>
            <Row style={{marginTop: '100px'}}>
                <Col span={4}></Col>
                <Col xl={11} xs={24} span={11}>
                    <img src={`https://curevive.prophecius.com/${product.picture}`} alt="herbalmedicine"/>
                </Col>

                <Col xl={5} xs={24} span={5} >
                <div style={{background: '#ECDFD7', padding:'20px', borderRadius: '30px'}}>
                    <h1 className="blogHeader" style={{textAlign: 'center',}}>Product description</h1>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274',  color: '#4D5053',margin: '10px'}}>Medicinal property: {product.medicinalroperty}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Shelf life: {product.shelflife}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Storage: {product.storage}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Size:{product.size}</p>
                    <p className="firsttext" style={{textAlign: 'left',  border: 'none', borderBottom: '1px solid', borderBottomColor: '#CDA274', color: '#4D5053', margin: '10px'}}>Application: {product.application}</p>

                     <Button className='buttonHeader' style={{background: '#292F36', width: '50%', margin: 'auto'}}>Buy now <ArrowRightOutlined style={{marginLeft: '5px'}}/></Button>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>

            <Row style={{marginTop: '100px'}}>
                <Col span={4}>
                </Col>

                <Col xl={16} xs={24} span={16}>
                    <p className="firsttext" style={{textAlign: 'left'}}> {product?.description}
                     </p>
                   
                </Col>
            </Row>

            <Row>
                <Col span={4}>
                </Col>
                <Col xl={16} xs={24} span={16}>
                    <div className="quoteclass">
                    <h1 className="italicHeader" style={{color: '#CDA274'}}> “</h1>
                    <p className="italictext" style={{color: '#CDA274' , marginTop: '-100px'}}>{product?.quotes}</p>
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



            <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col xl={16} xs={24}  span={16}> 
            <h1 className="firstheaders" >Clinically proven!</h1>
            <p className="firsttext">Our holistic treatments are backed by clinical evidence to promote overall well-being and improve physical, mental, and emotional health.</p>
         
            </Col>
            <Col span={4}></Col>
        </Row>

        <Row>
            <Col span={4}>
            </Col>
            <Col xl={16} xs={24} span={16}>
                <div>
       
               <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlaySpeed={3000}
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
            renderDotsOutside={false}
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
                items: 1,
                
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
     
     {researchpaper?.map((item) => 
            <div style={{width: '90%',margin: '40px' , borderRadius: '60px', margin: '10px', padding: '10px',background: "#ECDFD7"}}>
                      <h1  style={{fontFamily: "Playfair Display", fontSize: "22px", fontWeight: 'bold', margin: '10px'}}>
                        {item.title}
                        </h1>
                        <p style={{fontFamily: 'lato', fontSize: '22px', margin: '20px', color: '#4D5053'}}> 
                        {item.description}
                        </p>
                        <div style={{margin: '20px'}}>
                        <a  style={{marginTop: '30px', marginLeft: '0px', color:" blue", textDecoration: 'undeline'}}  href ={`${item.file}`} >Read reseach paper....</a>
                        </div>
                      </div>
          )}
          </Carousel>
                     </div>

                     
            </Col>
            <Col span={6}>
            </Col>
        </Row>   
            <Row style={{marginTop: '30px', marginBottom: '50px'}}>
                <Col span={4}>
                
                </Col>
                <Col xl={16} xs={24} span={16}>
            <div >
              <div className="articletext">Achieve long-term wellness and prevent future health problems by taking a holistic approach to health with Curevive. Our natural, 
                high-quality herbal supplements and oils work in harmony with healthy diet, yoga, acupressure, stress management, and other self-care 
                practices to treat the root cause of disease and promote overall wellness. Start your journey towards a disease-free, healthy life today
                 with Curevive</div>
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
export default Bronchitis;
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
        
        axios.get(`https://curevive.thotamali.com:8000/api/product/${id}`)
        .then((res)=>{
            setProduct(res.data);
        });
        axios.get('https://curevive.thotamali.com:8000/api/researchpaper')
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
            <div className="firstheaders" style={{margin: 'auto', width: '15%'}}> Bronchitis</div>
            <Row style={{marginTop: '100px'}}>
                <Col span={4}></Col>
                <Col span={11}>
                    <img src={`https://curevive.thotamali.com:8000/${product.picture}`} alt="herbalmedicine"/>
                </Col>

                <Col span={5} >
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

                <Col span={16}>
                    <p className="firsttext" style={{textAlign: 'left'}}> Originating from the ancient scriptures of Ayurveda, the knowledge and science of herbs and 
                    spices have been the backbone of Indian traditional medicine for centuries. Despite the advancements in modern medicine,
                     herbal remedies have stood the test of time and proven themselves as effective alternatives.
                     </p>
                     <p className="firsttext" style={{textAlign: 'left'}}> Bronchitis, an inflammation of the bronchial tubes causing breathing difficulties, wheezing, 
                     coughing, and other related symptoms, can be relieved with our carefully crafted blend of herbs. Expertly selected and 
                     formulated by experienced herbalists, our blend not only provides relief from acute fever and cough but also helps prevent 
                     future onset of bronchitis. After all, prevention is always better than cure</p>
                </Col>
            </Row>

            <Row>
                <Col span={4}>
                </Col>
                <Col span={12}>
                    <div style={{background: '#ECDFD7', borderRadius: '50px', width: '80%', margin: 'auto', padding: '30px',}}>
                    <h1 className="italicHeader" style={{color: '#CDA274'}}> “</h1>
                    <p className="italictext" style={{color: '#CDA274' , marginTop: '-100px'}}>Blending herbal oils creates a synergistic effect, delivering a spectrum of benefits that surpass those of an individual oil. A well-formulated blend is a powerful and versatile solution</p>
                    </div>
                </Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>



            <Row>
                <Col span={4}>

                </Col>
                <Col span={12}>
                    <div>
                        <h1 className="firstheaders" style={{textAlign: 'left'}}>Blend</h1>
                        <p className="firsttext" style={{textAlign: 'left'}}> Our blend consists of various Bhasmas (fine natural powders) 
                            like black mica, gold, calcium sulfate, iron and sodium borate 
                            which have multitudes of health benefits not only limited to bronchitis, 
                            but to the overall functional improvement of the body. Along with these, our blend includes herbs like :-</p>
                    </div>
                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4}>
                    
                </Col>
            </Row>


            <Row>
                <Col span={4}>

                </Col>
                <Col span={12}>
                    <div style={{display: 'flex', margin: '10px', background: '#ECDFD7', padding: '30px', borderRadius: '30px'}}>
                        <div style={{width: '30%'}}>
                            <h1 className="firstheaders" style={{textAlign: 'center',fontSize: '22px'}}>Adoosa</h1>
                            <img src={adoosa} alt="Adoosa"  style={{borderRadius: '30px'}}/>
                        </div>
                        <div style={{width: '70%'}}>
                        <p className="firsttext" style={{textAlign: 'left'}}>This plant is a natural herb found in South Asia that is renowned for 
                        its antibacterial properties and effectiveness in treating coughs. Adoosa is extracted from organic leaves and stems sourced 
                        from the forests of Tamil Nadu, ensuring that it is free from harmful chemicals.</p></div>
                    </div>

                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4}>
                    
                </Col>
            </Row>

            <Row>
                <Col span={4}>

                </Col>
                <Col span={12}>
                  
                        <p className="firsttext" style={{textAlign: 'left'}}>

                        Our blend of herbs and bhasmas creates a potent and effective remedy for relieving
                         the discomfort of tiring cough and breathless nights. Our quality experts carefully
                          select each ingredient, resulting in a high-quality product that you can trust.
                        </p>
                    

                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4}>
                    
                </Col>
            </Row>



            <Row style={{marginTop: '100px'}}>
            <Col span={4}></Col>
            <Col span={16}> 
            <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px"}}>Clinically proven!</h1>
            <p style={{ fontFamily: "lato", fontSize: "22px"}}>Our holistic treatments are backed by clinical evidence to promote overall well-being and improve physical, mental, and emotional health.</p>
         
            </Col>
            <Col span={4}></Col>
        </Row>

        <Row>
            <Col span={6}>
            </Col>
            <Col span={12}>
                <div style={{ height: '500px'}}>
       
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
                        <a  style={{marginTop: '30px', marginLeft: '0px', color:" blue", textDecoration: 'undeline'}} href ={`url(${item.link})`} >Read reseach paper....</a>
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
                <Col span={6}>
                
                </Col>
                <Col span={12}>
            <div style={{margin: '70px'}}>
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


import aboutBanner from "./assets/treatmentBanner.jpg";
import {Row, Button,Col} from 'antd';
import firstyoga from "./assets/1.png";
import {ArrowRightOutlined} from '@ant-design/icons';
import Header from './components/headerbackup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from 'react';

const Treatment =()=>{
  const carouselRef = useRef(null);
  const [name , setName]= useState('');
  const [diseases, setDiseases] = useState([]);
  const [researchpaper, setResearchpaper] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [sectionone, setSectionone] = useState([]);
  const [sectiontwo, setSectiontwo] = useState([]);
  const [faq, setFaq] = useState([]);
  const [faqinit, setfaqinit]= useState([]);
  const handleClick = (slideIndex, name) => {
     setName(name);
     setFaq(faqinit.filter(item=>{
      return(
        item.type == name
          )
      }))
    carouselRef.current.goToSlide(slideIndex);
  };

  const activeIndex = 3;

  

   useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api/sectiontwoTreatment`)
    .then((res)=>{
      setSectionone(res.data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/api/sectiononeTreatment`)
    .then((res)=>{
      setSectiontwo(res.data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/api/disease`)
    .then((res)=>{
      setDiseases(res.data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/api/treatment`)
    .then((res)=>{
      let temp  = res.data;
      temp.forEach((value, idx) => 
      {
       temp[idx].index=idx;
       
      })
      setTreatments(temp);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/api/researchpaper`)
    .then((res)=>{
      setResearchpaper(res.data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/api/faq`)
    .then((res)=>{
      setFaq(res.data);
      setfaqinit(res.data)
    });
   },[])

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
        <>
    <Header/>
    <img alt="about Banner"style={{marginBottom: '100px'}} src={aboutBanner}/>
       <Row style={{marginBottom: '10px'  }}>
        <Col md={0} xl={4} span={4}>
        </Col>
        <Col xl={16} md={24} xs={24} span={16}>
            <div  style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {treatments.map((item) => 

            <div 
                  onClick={() => handleClick(item.index, item.name)} 
                  className='hoverarticle diseaseitems align-middle' 
                  style={{ height: '300px', padding: '10px', backgroundSize: '100% 100%', 
                  backgroundImage: `url(${process.env.REACT_APP_API_URL}/${item.background})`}}>
                    <h1 className='articlehead' style={{textAlign: 'center', marginTop: '50px', fontWeight: '400',}}>
                    {item.name}
                    </h1>
                    <p className='articletext' style={{margin: '10px'}}> {item.description}</p>
                    </div>
                )}
            </div>
        </Col>
        <Col md={0} span={4}>
        </Col>
       </Row>
       <br/>
       <br/>
       <br/>
       <Row style={{marginBottom: '100px'}}>
        <Col  span={2}></Col>
        <Col  xl={20} xs={24} span={20}>
       
        <Carousel 
         ref={carouselRef}
        className='carousel'
              arrows
              showDots
              itemClass="carousel-item-padding-40-px"
              responsive={responsive} 
             style={{height: '1200px'}}>
           {treatments.map(items=> 
           <Row style={{background: 'rgba(78, 52, 38, 0.6)', borderRadius: '40px'}}>
            <Col xl={10} xs={24}  span={10} className="p-4">
            <h1 style={{fontFamily: "Playfair Display", fontSize: "60px" , color: 'black', padding: '10px'}}>
              {items?.name}
              </h1>
              <img style={{marginTop: "100px"}} alt='yoga' src={firstyoga}/>
            </Col>
            <Col xl={14} xs={24} className='articletext p-2' span={14}>
              <p className='treatmentslider' style={{color: 'white'}}>Yoga is an ancient Indian physical, mental, and spiritual discipline. Physical postures (asanas), breathing methods (pranayama), relaxation, and meditation are all part of the practice.</p>
              <h1 style={{fontFamily: "Playfair Display", fontSize: "40px", textAlign: 'left', margin: '10px 10px', color: 'white'}}>
              Frequently Asked Questions
              </h1>
              
             <div >
                <div className="col-md-10 justify-start">
                    <div className="card">
                        <div className="accordion" id="accordionPricing">
                        {faq.map((item) => 
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingOne"> <button className="accordion-button border-bottom font-weight-bold text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse`+item.id} aria-expanded="false" aria-controls="collapseOne">
                                  {item?.title} <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> </button> </h6>
                                <div id={`collapse`+item.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionPricing" >
                                    <div className="d-block d-lg-flex"> 
                                        <div className="accordion-body text-sm" style={{visibility: 'visible', textAlign: 'left'}}> {item.description}</div>
                                    </div>
                                </div>
                            </div>
                        
                        )}
                        
                        
                    </div>
                </div>
            </div>   
               </div> 
            </Col>
          </Row>
          )}
          </Carousel>
    
        </Col>
        <Col span={2}>
        </Col>
       </Row>

       <Row>
        <Col span={4}>
        </Col>
        <Col style={{padding: '10px'}} xl={16} xs={24} span={16}>
        { sectionone.map((items) =>
          <Row>
            <Col xl={14} xs={24} span={14}>
              <div style={{padding: '50px'}}>
              <h1 className='firstheaders'> {items?.title} </h1>
              <p className='firsttext' style={{textAlign: 'left'}}>
              {items.description}
              </p>
              </div>
            </Col>
            <Col xl={10} xs={24} span={10}>
            <img style={{borderRadius: '45px', verticalAlign: 'middle', display: 'flex'}} alt="herbs" src={`${process.env.REACT_APP_API_URL}/${items?.picture}`}/>
            </Col>
          </Row>
        )}
        </Col>
        <Col span={4}></Col>
       </Row>
       <Row style={{marginTop: "50px", background:  'rgba(78, 52, 38, 0.6)'}}>
        <Col span={4}>
        
        </Col>
        <Col xl={16} xs={24} span={16}>
        { sectiontwo.map((items) =>
          <Row>
            <Col xl={12} xs={24} style={{padding: "50px"}} span={12}>
            <img style={{borderRadius: '45px'}} alt="herbs" src={`${process.env.REACT_APP_API_URL}/${items?.picture}`}/>
            </Col>
            <Col xl={12} xs={24} style={{padding: "50px"}} span={12}>
              <h1 className='firstheaders' style={{color: 'black'}}>
               {items?.title}
              </h1> 
              <p className='firsttext' style={{textAlign: 'left', color: 'white'}}>
               {items?.description}
              </p>
            </Col>
          </Row>
        )}
        </Col>
        <Col span={4}>
        
        </Col>
       </Row>

      
       <Row style={{marginTop: '100px', marginBottom: '50px'}}>
        <Col span={4}>
        
        </Col>
        <Col xl={16} xs={24} style={{padding: '10px'}} span={16}>
          <div >
          <h1 className='firstheaders' style={{color: '#292F36'}}> WHY CUREVIVE?</h1>
            <p className='firsttext' style={{textAlign: 'left', color: '#4D5053', margin: '50px 0px'}}>
              Choosing the right points according to your condition and find their exact location can be a tedious task! Curevive
                    is here to guide you at every step . We understand the importance of acupressure as a complementary therapy .</p>
             <ol style={{paddingLeft: '0px'}}>
              <li className='firsttext numberStyle my-4 ' >
              <span style={{background: 'rgba(78, 52, 38, 0.6)', color: 'white',fontSize: '22px', borderRadius: '50%', padding: '13px 18px', margin: '10px'}}>1</span><span className='firsttext' style={{textAlign: 'left', color: 'black'}}> 
              Identify the root cause of your condition</span>
              </li>
              <li className='firsttext numberStyle my-4' >
              <span style={{background: 'rgba(78, 52, 38, 0.6)', color: 'white', fontSize: '22px', borderRadius: '50%', padding: '13px 18px', margin: '10px'}}>2</span> <span className='firsttext' style={{textAlign: 'left', color: 'black'}}>
                Make a list of what acupressure points will work best with your condition.</span>
                  
              </li>
              <li className='firsttext numberStyle my-4'>
              <span style={{background: 'rgba(78, 52, 38, 0.6)', fontSize: '22px', color: 'white',borderRadius: '50%', padding: '13px 18px', margin: '10px', textAlign: 'left'}}>3</span><span className='firsttext' style={{textAlign: 'left', color: 'black'}}> 
                 Courier you our specially designed acupressure tool</span>
              </li>
              <li className='firsttext numberStyle my-4'>
              <span style={{background: 'rgba(78, 52, 38, 0.6)', fontSize: '22px', color: 'white', borderRadius: '50%', padding: '13px 18px', margin: '10px', textAlign: 'left'}}>4</span> <span className='firsttext' style={{textAlign: 'left', color: 'black'}}>
                Equip you with our expert guided videos on how to locate the points, chosen by our doctors for you.</span>
                
              </li>

             </ol>
          </div>
        </Col>
        <Col span={4}>
        
        </Col>
       </Row>
       <Row style={{marginTop: '100px',paddingBottom: '50px', background: 'rgba(78, 52, 38, 0.6)' }}>
        <Col span={4}>

        </Col>
        <Col xl={16} xs={24}  span={16}>
           <div>
            <br/>
            <h1 className='firstheaders' style={{textAlign: 'center', color: 'black'}}>
            Backed by evidence !
            </h1>
            <p className='firsttext' style={{textAlign: 'left', width: '90%', color: 'white',  margin: 'auto'}}>
              Modern evidence-based research has shown that stimulation of strategic points on the body influences the body’s
              circulatory, lymphatic and hormonal systems of the body. According to the National Cancer Institute, several studies have
              shown that acupressure has helped cancer patients by reducing cancer-related fatigue and nausea. 
              Acupressure has shown marvellous results in reducing anxiety and improving health in patients undergoing surgeries.</p>
           </div>
        </Col>
        <Col span={4}>
        </Col>
       </Row>
       <Row style={{marginTop: "100px" }}>
        <Col span={4}>
        </Col>
        <Col xl={16} xs={24} span={16}>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {diseases.map((item) => 
          <Button className="commonbutton buttonHeader" style={{color: 'white'}}>{item?.name}</Button>
        )}
          </div>
        </Col>
        <Col span={4}>
        </Col>
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
       <Row>
        <Col span={24}>
          <div style={{textAlign: "center"}}>Copyright © Curevive  </div>
         
        </Col>
      </Row>
        </>
    );

}

export default Treatment;
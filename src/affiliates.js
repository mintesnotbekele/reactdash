import Footer from "./components/footer";
import Header from './components/headerbackup';
import { Row, Col } from "antd";
import CountUp from 'react-countup';
import { useState, useEffect } from "react";
import axios from "axios";

import bannervector from "./assets/bannervector.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Affiliates=()=>{
    const [faq, setFaq] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/faq`)
        .then((res)=>{
          setFaq(res.data);
        }).catch((err)=> console.log(err))
    },[])
   return(
    <div>
        <Header/>
        
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                <Col span={4}></Col>
                <Col span={16}>
                <div style={{width: '50%'}}>
            <h1 className="earnheader" >
               Join Curevive as 
                an Affiliate and 
                earn more!
            </h1>
           
            <h3 className="earntext">
            The term may sound familiar to some of you. In a variety of
            different fields, the word is actually quite widely used. However,
            the meaning of the field is different in each concerned
            </h3>
            </div>
            <Button className="enrollbutton">Get Started</Button>
            <Button className="enrollbutton">Watch Video</Button>
            </Col>
         </Row> 
         {/* <Row >
            <Col span={24}>
            <img style={{width: '100%'}} src={banner}/>
            </Col>
         </Row> */}
     
        
        <Row style={{background: '#FAFAFA', padding: '100px 0px'}}>
        <Col span={24}> 
               <h1 className="earnmiddle" style={{textAlign: 'center', width: '30%', margin: 'auto', padding: '25px 0px'}}>Join Curevive Family And Earn With Us</h1>
                <h1 className="earntext" style={{textAlign: 'center' , padding: '25px 0px'}}>We have great integrity and experience so you will benefit</h1>
               </Col>
            <Col span={4}></Col>
            <Col span={16} style={{padding: '50px 0px'}}>
                <Row>
                <Col className="earcounter" span={6}>                         
                    <CountUp 
                        enableScrollSpy={true}
                        end={24} />Years</Col>
                <Col className="earcounter" span={6}>
                <CountUp 
                        enableScrollSpy={true}
                        end={500} />K+</Col>
                <Col className="earcounter" span={6}>
                <CountUp 
                        enableScrollSpy={true}
                        end={120} />K+</Col>
                <Col className="earcounter" span={6}>
                <CountUp 
                        enableScrollSpy={true}
                        end={134} /></Col>
                </Row>
            </Col>
            <Col span={4}></Col>
        </Row>



          <Row>
            <Col span={4}>
            </Col>
            <Col span={16} style={{padding: '50px'}}>
                
                <div style={{padding: '50px 0px', display: 'flex'}}>
                <div style={{width: '80%'}}>    
                <h1 className="earnmiddle" style={{textAlign: "left", color: '#4E3426'}}>Why Choose Curevive</h1>
                <h3 className="earnbannertext" style={{color: '#140C44B5'}}>Get your affiliate or social links in one place easly</h3>
                
                </div>
              
                </div>




                <Row>
                    <Col   span={8}>
                    <Card className="mx-2"  sx={{ maxWidth: 345, borderRadius: '50px', padding: '10px'}}>
                        <CardMedia
                            sx={{ height: 140, borderRadius: '50px' }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Organize affiliate link and social media content
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            You can add as many as product with
                            affiliate links. Also put the links to your yt
                            video and photos.
                            </Typography>
                        </CardContent>
                        </Card>
                    </Col>
                    <Col   span={8}>
                    <Card className="mx-2" sx={{ maxWidth: 345, borderRadius: '50px', padding: '10px' }}>
                        <CardMedia
                            sx={{ height: 140, borderRadius: '50px' }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Not just text or images but also review content
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            You can add as many as product with
                            affiliate links. Also put the links to your yt
                            video and photos.
                            </Typography>
                        </CardContent>
                      
                        </Card>
                    </Col>
                    <Col   span={8}>
                    <Card  className="mx-2" sx={{ maxWidth: 345, borderRadius: '50px', padding: '10px' }}>
                        <CardMedia
                            sx={{ height: 140, borderRadius: '50px' }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Show your personality and creativitas
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            You can add as many as product with
                            affiliate links. Also put the links to your yt
                            video and photos.
                            </Typography>
                        </CardContent>
                     
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={4}>
            </Col>
         </Row>
         


          <Row>
            <Col span={4}>
            </Col>
            <Col className="earnbanner" style={{backgroundImage: `url(${bannervector})`}} span={16}>
                <div style={{padding: '100px'}}> 
                     <h1 className="earnmiddle" style={{textAlign: 'left', color: 'white'}}>How It Works</h1>
                    <h3 className="earnbannertext">let's love your body by keeping your body obesity</h3>
                    <Row>
                    <Col span={12}>
                        <div style={{display: 'flex',  width: '70%', margin: 'auto'}}>
                                <h1 className="bannerCounter">01</h1>
                                <h2 className="bannerContent">Get Affiliated link and
                                                create a product
                                                with info
                                                </h2>
                               </div>
                        </Col>
                        <Col span={12}>
                        <div style={{display: 'flex',  width: '70%', margin: 'auto'}}>
                                <h1 className="bannerCounter">02</h1>
                                <h2 className="bannerContent">Get Affiliated link and
                                                create a product
                                                with info
                                                </h2>
                               </div>
                        </Col>
                        <Col span={12}>
                        <div style={{display: 'flex',  width: '70%', margin: 'auto'}}>
                                <h1 className="bannerCounter">03</h1>
                                <h2 className="bannerContent">Add reviews to your
                                                                fave and nice creativity
                                                                works
                                                </h2>
                               </div>
                        </Col>
                        <Col span={12}>
                        <div style={{display: 'flex',  width: '70%', margin: 'auto'}}>
                                <h1 className="bannerCounter">04</h1>
                                <h2 className="bannerContent">Get Affiliated link and
                                                create a product
                                                with info
                                                </h2>
                               </div>
                        </Col>
                    </Row>
                 </div>
            </Col>
            <Col span={4}>
            </Col>
         </Row>
         <div style={{position: 'relative'}}>
         <div className="earnwithusbackground" >
          <Row style={{opacity: '1.0'}}>
          <Col span={24}>
            <div className="my-6">
             <h1 className="earnmiddle " style={{textAlign: 'center', color: '#140C44'}}> Frequently Asked Questions (FAQ)</h1>
             <p className="earnmiddle" style={{fontSize: '16px', width: '40%', margin: 'auto', lineHeight: '28px'}}>BROWSE OUR FAQ’S BELOW, IF YOU CAN NOT FIND THE ANSWER TO YOU’RE LOOKING FOR PLEASE CONTACT US.</p>
             </div>
             </Col>
          </Row>
        

            <div className="mb-5">
                <div className="col-md-9 mx-auto">
                    <div className="" >
                        <div className="accordion p-3" id="accordionPricing">
                        {faq.map((item) => 
                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header" id="headingOne"> 
                                       <button className="accordion-button border-bottom font-weight-bold text-start collapsed" style={{color: '#140C44'}}  type="button" data-bs-toggle="collapse" data-bs-target={`#collapse`+item.id} aria-expanded="false" aria-controls="collapseOne">
                                  {item?.title} <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> </button> </h6>
                                <div id={`collapse`+item.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionPricing" >
                                    <div className="d-block d-lg-flex"> 
                                        <div className="accordion-body" style={{visibility: 'visible', textAlign: 'left', color: '#140C44'}}> {item.description}</div>
                                    </div>
                                </div>
                            </div>
                           
                        )}
                        
                        
                    </div>
                </div>
            </div>   
               </div> 
               </div>  
               </div>           
         <Footer/>
    </div>
   )
}
export default Affiliates;

import Footer from "./components/footer";
import Header from "./components/header";
import { Row, Col } from "antd";

import { useState, useEffect } from "react";
import axios from "axios";
import banner from "./assets/earn.png"
import bannervector from "./assets/bannervector.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import env from "react-dotenv";


const EarnWithUs=()=>{
    const [faq, setFaq] = useState([]);
    useEffect(()=>{
        axios.get(`https://curevive.prophecius.com/api/faq`)
        .then((res)=>{
          setFaq(res.data);
        });
    },[])
   return(
    <div>
        <Header/>
         {/* <Row>
            <Col span={2}>
                </Col>
                <Col span={5}>
            <h1 className="earnheader" style={{margin: '100px 0px'}}>
                            Join Curevive as 
                an Affiliate and 
                earn more!
            </h1>
            <h3 className="earntext">
            The term may sound familiar to some of you. In a variety of
different fields, the word is actually quite widely used. However,
the meaning of the field is different in each concerned
            </h3>
            </Col>
         </Row> */}
         <Row >
            <Col span={24}>
            <img style={{width: '100%'}} src={banner}/>
            </Col>
         </Row>
     
        
        <Row style={{background: '#FAFAFA', padding: '100px 0px'}}>
        <Col span={24}> 
               <h1 className="earnmiddle" style={{textAlign: 'center', width: '30%', margin: 'auto', padding: '25px 0px'}}>Join Curevive Family And Earn With Us</h1>
                <h1 className="earntext" style={{textAlign: 'center' , padding: '25px 0px'}}>We have great integrity and experience so you will benefit</h1>
               </Col>
            <Col span={4}></Col>
            <Col span={16} style={{padding: '50px 0px'}}>
                <Row>
                <Col className="earcounter" span={6}> 24 Years</Col>
                <Col className="earcounter" span={6}>500K+</Col>
                <Col className="earcounter" span={6}>120K+</Col>
                <Col className="earcounter" span={6}>134</Col>
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
                <div style={{ float: 'right'}}>
                <Button style={{float: 'right', margin: '10px', borderRadius: '50px', color: '#4E3426', borderColor: '#4E3426'}} variant="outlined">View More</Button>
                </div>
                
                </div>




                <Row>
                    <Col   span={8}>
                    <Card  sx={{ maxWidth: 345, borderRadius: '50px', padding: '30px' }}>
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
                    <Card  sx={{ maxWidth: 345, borderRadius: '50px', padding: '30px' }}>
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
                    <Card  sx={{ maxWidth: 345, borderRadius: '50px', padding: '30px' }}>
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
                            <div style={{display: 'flex', width: '70%', margin: 'auto', padding: '30px'}}>
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
          <Row>
          <Col span={24}> <h1 className="earnmiddle" style={{textAlign: 'center', color: '#140C44'}}> Frequently Asked Questions (FAQ)</h1></Col>
          </Row>
        
         <Row>
            <Col span={4}>
            </Col>
            <Col span={16}>
            <div className="row mb-5">
                <div className="col-md-10 mx-auto">
                    <div className="card">
                        <div className="accordion p-3" id="accordionPricing">
                         {faq.map((item) => 
                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header" id="headingOne"> <button className="accordion-button border-bottom font-weight-bold text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse`+item.id} aria-expanded="false" aria-controls="collapseOne">
                                  {item?.title} <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i> </button> </h6>
                                <div id={`collapse`+item.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionPricing" >
                                    <div className="d-block d-lg-flex"> <img className="w-50 w-lg-20 my-3" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/rocket-white.png" alt="rocket"/>
                                        <div className="accordion-body text-sm opacity-8 my-auto"> We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed. <br/><br/> There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. </div>
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
         <Footer/>
    </div>
   )
}
export default EarnWithUs;
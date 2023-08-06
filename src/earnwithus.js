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



const EarnWithUs=()=>{
    const [faq, setFaq] = useState([]);
    useEffect(()=>{
        axios.get('https://curevive.prophecius.com/api/faq')
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
            {/* <Accordion collapseAll>
              {faq.map((item) => 
                <Accordion.Panel>
                  <Accordion.Title>
                   {item.title}
                  </Accordion.Title>
                  <Accordion.Content>
                  {item.description}
                  </Accordion.Content>
                </Accordion.Panel>
                 )}
              </Accordion> */}
            </Col>
         </Row>
         <Footer/>
    </div>
   )
}
export default EarnWithUs;
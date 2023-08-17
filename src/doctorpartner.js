import { Button, Col, Row } from "antd";
import Header from "./components/headerbackup";
import banner from "./assets/earn.png"
import './css/knowledge.css';
import bannervector from "./assets/bannervector.png";
import Card from '@mui/material/Card';
import Footer from "./components/footer";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const DoctorPartner=()=>{
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
                        <h1 style={{color: '#4E3426'}}>
                        Inviting all Doctors to 
                        Curevive Doctor’s
                        earning program
                        </h1>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Row>
                <Col span={4}>
                </Col>
                <Col span={16}>

                    <div>
                        <br/>
                        <br/>
                        <h3 className="knowledgeText " style={{width: '40%'}}>The term may sound familiar to some of you. In a variety of
                        different fields, the word is actually quite widely used. However,
                        the meaning of the field is different in each concerned</h3>
                        <br/>
                       <div> 
                        <Button className="enrollbutton">Get Started</Button>
                        <Button className="enrollbutton">Watch Video</Button>
                        </div>
                    </div>
                </Col>
                <Col span={4}>
                </Col>
            </Row>

            <Row style={{background: '#FAFAFA', padding: '100px 0px'}}>
                <Col span={4}></Col>
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
                <Col span={4}></Col>
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
         <br/>
         <Footer/>
         <br/><br/>
        </div>
        
     )
}
export default DoctorPartner;
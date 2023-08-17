import { Button, Col, Row } from "antd";
import Header from "./components/headerbackup";
import banner from "./assets/earn.png"
import './css/knowledge.css';
import bannervector from "./assets/bannervector.png";
import Footer from "./components/footer";
const Webinars=()=>{
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
                        Attend our Online Webinars and get Insights.
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
                        <Button className="enrollbutton">Enroll Today</Button>
                    </div>
                </Col>
                <Col span={4}>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
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
         <br/>
         <br/>
         <br/>
         <Row>
            <Col span={6}></Col>
            <Col span={12}>
                <div>
                    <Button className="buttonText" style={{width: '100%', background: '#4E3426', paddingTop: '15px', paddingBottom: '50px', color: 'white', fontSize: ''}}>Enroll today</Button>
                </div>
            </Col>
            <Col span={6}></Col>
         </Row>
         <br/>
         <br/>
         <br/>
         <br/>
         <Footer/>

        </div>
        )
}
export default Webinars;
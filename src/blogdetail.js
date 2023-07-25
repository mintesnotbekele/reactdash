import Header from "./components/header";
import blogbanner from './assets/blogdetailbanner.jpg';
import blogdetail from './assets/blogdetail.png';
import quotes from "./assets/blogquotes.png";
import { Col, Row, Input, Checkbox } from "antd";
import Footer from "./components/footer";
import TextArea from "antd/es/input/TextArea";
import blogmeditate from './assets/blogmeditate.png';
import { Button } from "flowbite-react";
import {ArrowRightOutlined} from '@ant-design/icons';

const Blogdetail=()=>{
      return(
        <div>
            <Header/>
            <img src={blogbanner} alt="blog detail banner"/>
            <Row style={{marginTop: '200px'}}>
                <Col span={6}></Col>
                <Col span={8}>
                    <h1 className="firstheaders">Yoga can be the cure to most of your problems!</h1>
                    <img src={blogdetail} alt="blog detail"/>
                 <p className="firsttext">  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injecthumour, or randomised words
                     which don't look even slightly believable.
                     Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                      tend to repeat predefined chunks as necessary.</p>
                    <img src={quotes} alt="blog quotes"/>
                </Col>
                <Col span={4}></Col>
                <Col span={6}></Col>
            </Row>
            
            <Row style={{marginTop: '30px'}}>
                <Col span={6}></Col>
                <Col span={8}>
                    <h1 className="firstheaders">Design sprints are great</h1>
                   
                 <p className="firsttext" style={{textAlign: 'left'}}> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in
                 Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have 
                 suffered.Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have suffered.
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have suffered.
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have suffered.
                   </p>
                   <img style={{marginTop: '30px', borderRadius: '30px'}} src={blogmeditate} alt="blog detail"/>
                   <p className="firsttext" style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.
                   posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                   </p>
                </Col>
                <Col span={4}></Col>
                <Col span={6}></Col>
            </Row>
            <Row style={{marginTop: '150px', marginBottom: '150px'}}>
               
                <Col span={6}>
                </Col>
                
                    <Col span={8}>
                    <div style={{width: '100%', marginBottom: '100px'}}> 
                <h1 className="firstheaders" style={{margin: 'auto', textAlign: 'left', width: '100%'}}>
                Leave a Reply
                    </h1>
                </div>
                    <div style={{width: '100%', display: "flex"}}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Name'/>
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Email'/>
                    
                        </div>
                        <div style={{width: '100%', display: "flex"}}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Name'/>
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Email'/>
                    
                        </div>
                        <div style={{marginTop: "30px"}}>
                        <TextArea style={{ border: "none",borderBottom: '1px solid ', }} placeholder='Hello I would like have a consultation on...'/>          
                        </div>   
                        <div style={{marginTop: "50px"}}>
                        <p style={{display: 'block'}}> <Checkbox/>Save my name, email, and website in this browser for the next time I comment.</p>
                        <Button style={{background: '#292F36', float: 'right', fontSize: '18x', color: 'white'}}>Send Now <ArrowRightOutlined style={{color: '#CDA274', marginLeft: "10px"}}/> </Button>
                    
                        </div>
                    </Col>
                
                <Col span={6}>
                </Col>
            </Row>
            <Footer/>
        </div>

      )
}
export default Blogdetail;
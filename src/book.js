import Header from "./components/header";
import { Row, Col, Input } from "antd";
import {ArrowRightOutlined} from '@ant-design/icons';
import bookingbanner from './assets/bookBanner.jpg';
import TextArea from 'antd/es/input/TextArea';
import { Button } from "flowbite-react";
import Footer from "./components/footer";
const Book=()=>{
        return(
            <div>
            <Header/>
            <img src={bookingbanner} alt="booking banner"/>
            
            <Row style={{marginTop: '150px'}}>
                <div style={{width: '100%', marginBottom: '100px'}}> 
                <h1 className="firstheaders" style={{margin: 'auto', textAlign: 'center', width: '100%'}}>
                We love meeting new people and helping them.
                    </h1>
                </div>
                <Col span={8}>
                </Col>
                
                    <Col span={8}>
                    <div style={{width: '100%', display: "flex"}}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Name'/>
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Email'/>
                    
                        </div>
                        <div style={{width: '100%', display: "flex"}}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Treatment for '/>
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Phone'/>
                    
                        </div>
                        <div style={{marginTop: "30px"}}>
                        <TextArea style={{ border: "none",borderBottom: '1px solid ', }} placeholder='Hello I would like have a consultation on...'/>          
                        </div>   
                        <div style={{marginTop: "50px"}}>
                        <Button className="customButton" style={{background: '#292F36', float: 'right', fontSize: '18x', color: 'white', margin: '10px', padding: '10px'}}>Send Now <ArrowRightOutlined style={{color: '#CDA274', marginLeft: "10px"}}/> </Button>
                        </div>
                    </Col>
                
                <Col span={8}>
                </Col>
            </Row>
              
        <Row style={{marginTop: '30px', marginBottom: '50px'}}>
                <Col span={4}>
                
                </Col>
                <Col span={16}>
            <div style={{margin: '70px'}}>
                <div style={{background: '#292F36', borderRadius: '50px', marginTop: '100px', padding: '70px'}}>
                        <h1 style={{textAlign: 'center', fontFamily: "Playfair Display", fontSize: "50px", color: 'white'}}>Here are some answers to frequently asked questions</h1>
                        
                        <Button className="customButton" style={{margin: 'auto', background: '#CDA274', color: 'white', padding: '10px', width: '150px'}}>FAQs<ArrowRightOutlined style={{color: '#292F36', marginLeft: "10px"}}/></Button>
                    </div>
                    </div>
                </Col>
                <Col span={4}>
                </Col>
            </Row>
            <Footer/>
            </div>

        )
}
export default Book;
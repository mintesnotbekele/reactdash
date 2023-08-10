import Header from "./components/header";
import { Row, Col, Button,Input, message,Form } from "antd";
import {ArrowRightOutlined} from '@ant-design/icons';
import bookingbanner from './assets/bookBanner.jpg';
import TextArea from 'antd/es/input/TextArea';
import env from "react-dotenv";
import Footer from "./components/footer";
import axios from "axios";


const Book=()=>{

    const handleSubmit=(values)=>{
        axios.post(`${process.env.REACT_APP_API_URL}api/books`, {
            "name" : values.name,
            "email" : values.email,
            "phone" :  values.phone,
            "description" : values.description,
            "treatmentfor" : values.treatmentfor,
       })
        .then((res)=>{
       
           if(res.data.message == 'successfully booked')
               message.success(`successfully Made your booking!`);
            else {
              message.error(`the is something wong contact administrator Please!`);
            }
        })
    }
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
                <Col  md={8} span={8}>
                </Col>
                
                    <Col  style={{padding: '10px'}} xl={8} md={16} xs={24} span={8}>
                    <Form
                        name="basic" 
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={handleSubmit}
                        autoComplete="off"
                    >
                    <div style={{width: '100%', display: "flex"}}>
                     <Form.Item 
                       style={{width: '100%'}}
                       name="name"
                       rules={[
                         {
                           required: true,
                           message: 'Please input your name!',
                        },
                    ]}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Name'/>
                        </Form.Item>
                        <Form.Item
                            style={{width: '100%'}}
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}>
                        
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Email'/>
                        </Form.Item>
                        </div>
                        <div style={{width: '100%', display: "flex"}}>
                        <Form.Item
                            style={{width: '100%'}}
                          name="treatmentfor"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your treatment for!',
                            },
                          ]}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Treatment for '/>
                        </Form.Item>
                        <Form.Item
                            style={{width: '100%'}}
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your phone!',
                            },
                          ]}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Phone'/>
                          </Form.Item>
                        </div>
                        <div style={{marginTop: "30px"}}>
                        <Form.Item
                       
                          name="description"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your details!',
                            },
                          ]}>
                        <TextArea style={{ border: "none",borderBottom: '1px solid ', }} placeholder='Hello I would like have a consultation on...'/>   
                        </Form.Item>       
                        </div>   
                        <div style={{marginTop: "50px"}}>
                        <Form.Item
                            wrapperCol={{
                                
                                span: 24,
                            }}
                            >
                            <Button style={{background: '#292F36', float: 'right', fontSize: '18x', color: 'white', margin: '10px', paddingTop: '10px',paddingBottom: '30px'}} type="primary" className="customButton" htmlType="submit">
                             Send Now <ArrowRightOutlined style={{color: '#CDA274', marginLeft: "10px"}}/>
                            </Button>
                            </Form.Item>
    
                        </div>
                        
                        </Form>

                    </Col>
                
                <Col span={8}>
                </Col>
            </Row>
              
        <Row style={{ padding: '10px',marginTop: '30px'}}>
                <Col md={4} span={4}>
                
                </Col>
                <Col  xl={16} md={16} xs={24} span={16}>
            <div >
                <div style={{background: '#292F36', borderRadius: '50px', marginTop: '100px', padding: '70px'}}>
                        <h1 className="articleHeader" style={{textAlign: 'center', color: 'white'}}>Here are some answers to frequently asked questions</h1>
                        <div className="mx-auto flex justify-center">
                        <Button className="customButton" style={{margin: 'auto', background: '#CDA274', color: 'white', paddingTop: '10px',paddingBottom: '30px', marginTop: '30px',  width: '150px'}}>
                          FAQs<ArrowRightOutlined style={{color: '#292F36', marginLeft: "10px"}}/>
                        </Button>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col span={4}>
                </Col>
            </Row>
            
            <Footer style={{margin: '200px'}}/>
            </div>

        )
}
export default Book;
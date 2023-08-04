import { Col, Form, message, Row } from "antd"
import TextField from '@mui/material/TextField';
import { Button } from "flowbite-react";
import newlogo from '../assets/curlogo.png';
import axios from "axios";
import { Navbar } from 'flowbite-react';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import {ArrowRightOutlined} from '@ant-design/icons';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import apple from '../assets/apple.png';

const Register=()=>{

    const navigate = useNavigate();
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleSubmit=(values)=>{
        axios.post('https://curevive.prophecius.com/api/auth/register', {
            "name" : values.firstname+values.lastname,
            "email" : values.email,
            "password" : values.password,
       })
        .then((res)=>{
           if(res.data.message == 'User Created Successfully' && res.data.status == true)
              { 
                message.success(`successfully Registered to Curevive`)
                navigate('/login')
            }
            else if(res.data.message == 'Email & Password does not match' && res.data.status == true) {
              message.error(`Email & Password does not match please try Again`);
            }
        }).catch((err)=>{
            message.error(`Something is wrong please contact Administrator Or try Again Later`);
        }
        )
    }
    return(
        <Row >
             
           
           {/* Register Header */}
           
            <Col span={24}>
        <Navbar
        fluid
       style={{
        zIndex: '2000',
        width: '100%',
     
        paddingTop: "13px",
      
        background: 'rgba(78, 52, 38, 0.6)',
        height: "100px",
        zIndex: "100",
      }}
      rounded
    
    >
     <Navbar.Brand >
      <Navbar.Link 
      
          active
          href="/"
        >
        <img alt='logo' style={{objectFit: 'contain', marginTop: '-40px', height: '100px'}} src={newlogo}/>

        </Navbar.Link>
      </Navbar.Brand> 
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/treatment"
        >
          <p className='navheader'>
          <p className='navheader'>   Treatment</p>
          </p>
        </Navbar.Link>
        <Navbar.Link href="/cureddisease">
          <p className='navheader'>Diseases</p>
        </Navbar.Link>
        <Navbar.Link href="/blog">
        <p className='navheader'>Blog</p>
        </Navbar.Link>
        <Navbar.Link href="/book">
        <p className='navheader'>Booking</p>
        </Navbar.Link>
        <Navbar.Link href="/about">
        <p className='navheader'>About Us</p>
        </Navbar.Link>
        <Navbar.Link href="/login">
        <p className='navheader'>Login</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </Col>
    

            <Col xl={24}>
                <h1 className="registerHeader">Signup</h1>
                <h2 className="registerText">to Curevive</h2>
                <div style={{width: '80%', margin: 'auto' }}>
                <div className="loginform" >
                    <Form
                      name="basic" 
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={handleSubmit}
                      
                    >
                        <Row>
                            <Col xl={6}></Col>
                            <Col xl={6}>
                        <Form.Item
                            name="firstname"
                            wrapperCol={{
                                span: 23    ,
                            }}
                            rules={[
                              {
                                required: true,
                                message: 'Please input your First Name!',
                            }
                           
                        ]}
                        >
                           
                        <TextField
                            style={{width: '100%'}}
                            placeholder="First Name"
                            id="outlined-disabled"
                            label="First Name"
                           
                            />

                        </Form.Item>
                        </Col>
                        <Col xl={6}>
                        <Form.Item
                             wrapperCol={{
                                span: 23,
                            }}
                            name="lastname"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Last Name!',
                            }
                        ]}
                        >
                        <TextField
                            style={{width: '100%'}}
                            placeholder="Last Name"
                            id="outlined-disabled"
                            label="Last Name"
                             
                            />
                        </Form.Item>
                        </Col>
                        <Col xl={6}></Col>
                        </Row>
                        <Row>
                        <Col xl={6}></Col>
                            <Col xl={12}>
                            <Form.Item
                             wrapperCol={{
                                span: 23,
                            }}
                            name="phonenumber"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Phone Number!',
                            }
                        ]}
                        >
                        <TextField
                            style={{width: '100%'}}
                            placeholder="Phone Number"
                            id="outlined-disabled"
                            label="Phone Number"
                           
                            />
                        </Form.Item>
                            </Col>
                            <Col xl={6}></Col>
                        </Row>
                        <Row>
                        <Col xl={6}></Col>
                            <Col xl={12}>
                            <Form.Item
                             wrapperCol={{
                                span: 23,
                            }}
                            name="email"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Email Address!',
                            }
                        ]}
                        >
                        <TextField
                            style={{width: '100%'}}
                            placeholder="Email Address"
                            id="outlined-disabled"
                            label="Email Address"
                           
                            />
                        </Form.Item>
                            </Col>
                            <Col xl={6}></Col>
                        </Row>
                        <Row>
                            <Col xl={6}></Col>
                            <Col xl={6}>
                        <Form.Item
                            name="password"
                            wrapperCol={{
                                span: 23    ,
                            }}
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Password!',
                            }
                           
                        ]}
                        >
                           
                        <TextField
                            style={{width: '100%'}}
                            placeholder="Password"
                            id="outlined-disabled"
                            label="Password"
                           
                            />

                        </Form.Item>
                        <p style={{textAlign: 'left'}}>  <Checkbox {...label} /> I agree to all terms & conditions</p>
                        </Col>
                        <Col xl={6}>
                        <Form.Item
                             wrapperCol={{
                                span: 23,
                            }}
                            name="confirmpassword"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Password!',
                            }
                        ]}
                        >
                        <TextField
                            style={{width: '100%'}}
                            placeholder="Confirm Password"
                            id="outlined-disabled"
                            label="Confirm Password"
                            type="password"
                            />
                        </Form.Item>
                       
                        </Col>
                        <Col xl={6}></Col>
                        </Row>
                        <Row>
                            <Col xl={7}></Col>
                            <Col xl={10}>
                            <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                            >
                            
                           
                            <Button  style={{width: '100%',  background: '#4E3426'}} type="primary" className="customButton" htmlType="submit">
                             Sign Up
                            </Button>
                            </Form.Item>
                            </Col>
                            <Col xl={7}></Col>
                            <Col xl={6}></Col>
                            <Col xl={12}>
                                <h1 className="registerOr">Or</h1>
                            </Col>
                            <Col xl={6}></Col>
                            
                        </Row>
                        <Row>
                        <Col xl={8}></Col>
                        <Col xl={8}>
                            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <img className="socials" alt="google" src={google}/>
                                <img className="socials" alt="facebook" src={facebook}/>
                                <img className="socials" alt="apple" src={apple}/>
                            </div>
                        </Col>
                        <Col xl={8}></Col>
                            
                        </Row>
                     </Form>
                </div>
                </div>
            </Col>
            <Col xl={24}>    
            
            <Row style={{marginTop: "2px", marginBottom: '80px'}}>
              <Col span={4}></Col>
              <Col xs={24} xl={16} span={16} style={{background: '#292F36  ', borderRadius: '40px', alignItems: 'center'}}>
              <div style={{marginTop: "70px",marginBottom: "40px", }}>
                <h1 className='articleHeader' style={{ textAlign: 'center', color: '#F6F5EC'}}>Want to get your doubts cleared?</h1>
              <p style={{margin: "20px", fontSize: '22px', color: '#F6F5EC', textAlign: 'center'}}>Book a complimentary consultation now!</p>
              <Button style={{margin: 'auto', paddingTop: '10px', fontSize: '22px', paddingLeft: '30px',paddingBottom: '10px',paddingRight: '30px', background: '#CDA274', color: '#F6F5EC'}}> <Link to='book' style={{color: 'white'}}> Book </Link><ArrowRightOutlined/> </Button>
              </div>
              </Col>
            </Row>
            </Col>
        </Row>
    )
}
export default Register;
import { Col, Form, message, Row } from "antd"
import TextField from '@mui/material/TextField';
import { Button } from "flowbite-react";
import newlogo from '../assets/curlogo.png';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login=()=>{

    const navigate = useNavigate();
    const handleSubmit=(values)=>{
        axios.post('https://curevive.prophecius.com/api/auth/login', {
            "email" : values.email,
            "password" : values.password,
       })
        .then((res)=>{
           if(res.data.message == 'User Logged In Successfully' && res.data.status == true)
             {
                localStorage.setItem('tokens', res.data.token);
               message.success(`successfully Logged In`);
               navigate('/forums')
                }
            else if(res.data.message == 'Email & Password does not match' && res.data.status == true) {
              message.error(`Email & Password does not match please try Again`);
            }
        }).catch((err)=>{
            message.error(`Email & Password does not match`);
        }
        )
    }
    return(
        <Row style={{height: '1000px'}}>
            <Col xs={24} xl={12} style={{background: 'white'}} >
                <h1 style={{width: '100%'}} className="loginHeader">Welcome to Curevive</h1>
                <h3 className="logintext">Let’s get you all set up so you can verify your personal account and begin setting up your profile</h3>
                <div style={{width: '80%', margin: 'auto' }}>
                <div className="loginform" >
                    <Form
                      name="basic" 
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={handleSubmit}
                      
                    >
                        <Form.Item
                            name="email"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your email!',
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
                        <Form.Item
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your password!',
                            }
                        ]}
                        >
                        <TextField
                            style={{width: '100%'}}
                            placeholder="Password"
                            id="outlined-disabled"
                            label="Password"
                             type="password"
                            />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                
                                span: 24,
                            }}
                            >
                            <p style={{textAlign: 'left'}}> Forgot Password</p>
                            <Button  style={{width: '100%',  background: '#4E3426'}} type="primary" className="customButton" htmlType="submit">
                             Login
                            </Button>
                            </Form.Item>
                            <p>Don’t have an account ? <Link to='/register'> Signup Here </Link></p>
                    </Form>
                </div>
                </div>
            </Col>
            <Col xs={0} xl={12}>
                <img src={newlogo}/>
            </Col>
        </Row>
    )
}
export default Login;
import { Col, Form, message, Row } from "antd"
import TextField from '@mui/material/TextField';
import { Button } from "flowbite-react";
import newlogo from '../assets/curlogo.png';
import axios from "axios";

const Login=()=>{
    const handleSubmit=(values)=>{
        axios.post('http://127.0.0.1:8000/api/auth/login', {
            "email" : values.email,
            "password" : values.password,
       })
        .then((res)=>{
           if(res.data.message == 'User Logged In Successfully' && res.data.status == true)
               message.success(`successfully Logged In`);
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
            <Col style={{background: 'white'}} xl={12}>
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
                            <p>Don’t have an account ? Signup Here</p>
                    </Form>
                </div>
                </div>
            </Col>
            <Col xl={12}>
                <img src={newlogo}/>
            </Col>
        </Row>
    )
}
export default Login;
import Header from "./components/header";
import aboutBanner from './assets/forumbanner.png';
import moment from "moment";
import { Row,Button, Col, Modal, message,Input,Form } from "antd";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import env from "react-dotenv";
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Context } from '@ckeditor/ckeditor5-core';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

const tokens = localStorage.getItem('tokens');

const config = {
  headers: { Authorization: `Bearer ${tokens}` }
};
function CustomTabPanel(props) {


  
  const { children, value, index, ...other } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Forums=()=>{
  const navigate = useNavigate();
  const [updated, setUpdated] = useState();
    const [threads, setThreads] = useState([]);
    useEffect(()=>{
        let token = localStorage.getItem('tokens');
        if(token == undefined)
          navigate('/login');
        axios.get(`https://curevive.prophecius.com/api/threads`, config)
        .then((res)=>{
         setThreads(res.data);
        }).catch((err)=> console.log(err))

       },[updated])

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
   

    const handleSubmit=(values)=>{
      axios.post('http://localhost:8000/api/threads', {
          "title" : values.title,
          "description" : values.description,
          
     }, config)
      .then((res)=>{
     
         if(res.data.message == 'successfully created thread')
             {message.success(`successfully added!`);
             handleCancel();
             setUpdated(true);
            }
          else {
            message.error(`the is something wong contact administrator Please!`);
          }
      })
  }
const [form] = Form.useForm();

    return(
        <div>
            <Header/>
            <img alt="about Banner"style={{marginBottom: '200px'}} src={aboutBanner}/>
                      <Row>
                    <Col xl={6}></Col>
                      <Col xl={12}><div className="firstheaders"> Community Activity</div></Col>
                      <Col xl={6}><Button className="buttonHeader" style={{background: '#CDA274'}} onClick={showModal}>Ask Question</Button></Col>
            <Col xl={6}></Col>
          
            <Col xl={12}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Recent Topics" {...a11yProps(0)} />
                    <Tab label="Most Liked" {...a11yProps(1)} />
                    <Tab label="Most Comments" {...a11yProps(2)} />
                    <Tab label="My Questions" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                {
                threads?.map((item, index) => 
                        <div className="forumHeader"> 
                       <Link to={`/forums/${item?.id}`}> {item.title}</Link>
                       <p style={{fontSize: '18px'}}>Author: {item.name}</p>
                        <p style={{fontSize: '12px'}}>{moment(item.create_at).fromNow()}</p>
                            <hr/>
                        </div>
                )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                {
                threads?.map((item, index) => 
                        <div className="forumHeader"> 
                       <Link to={`/forums/${item?.id}`}> {item.title}</Link>
                            <hr/>
                        </div>
                )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                {
                threads?.map((item, index) => 
                        <div className="forumHeader"> 
                       <Link to={`/forums/${item?.id}`}> {item.title}</Link>
                            <hr/>
                        </div>
                )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                {
                threads?.map((item, index) => 
                        <div className="forumHeader"> 
                       <Link to={`/forums/${item?.id}`}> {item.title}</Link>
                            <hr/>
                        </div>
                )}
                </CustomTabPanel>
              
                </Box>
            </Col>
            <Col xl={6}></Col>
             <Modal title="Ask a Question" open={isModalOpen} onOk={form.submit} onCancel={handleCancel}>
                  <Form
                  form={form}
                   name="basic" 
                   initialValues={{
                     remember: true,
                   }}
                   onFinish={handleSubmit}
                   autoComplete="off">
                  <Form.Item 
                        label="Topic"
                        name="title"
                        rules={[
                          {
                            required: true,
                            message: 'Please input topic!',
                         },
                     ]}>
                        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                         </Form.Item>
                         <Form.Item 
                        label="Description"
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: 'Please input description!',
                         },
                     ]}>
                      
                         </Form.Item>
                  </Form>
              </Modal>
           </Row>
        </div>
    )
}
export default Forums;
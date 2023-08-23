import Header from './components/headerbackup';
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
import { CircularProgress } from '@mui/material';



const tokens = localStorage.getItem('tokens');

const config = {
  headers: { Authorization: `Bearer ${tokens}`,
  "X-CSRF-TOKEN":'eyJpdiI6IlljeDZrQmFyS1UrY3luR0VRbE9PQnc9PSIsInZhbHVlIjoiNmpRN1hMZGpWbU5yRko4ZlYyUG81SmRNS25LbmsxV2N1bFhIUHdCTExML29KTTdBWmFXSXVtYTdMR1hONmUxaWVyMEplNVlNNjRWS1o0WW05SWlsT2xuWStoOVlCS0NXT0pyYksyNlJtd2NLUTdiSHhDNThVWHhMbkZ6YU9NQVgiLCJtYWMiOiI3NzhhZDE4ODMzYmE5NWMxZjBmOTg2Y2M2MWY4YmM2MmFmNjIwNjg5MTE4N2YxN2JjYjI2ZmU5YmEzZjlkZjY3IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Inoxa3FKMnRiUlRERkllV1BQUndPeHc9PSIsInZhbHVlIjoiVWNGTHF1dzBveHpEYUp1dm51VFNSUzc2NTNSakIxK2dHZC9tN3BYK3N4c0V5U0h4MlVnZk5NQ3gxSzZVQnRRdlByRUlHZmQyUXZiVnVoU1UxbmdsZFNtZ3BoMnFJWmhnNWdkTW9sYkRtVWZJMjVRWUkzV2FyK0pxd1hDc05iUkoiLCJtYWMiOiI0ODU5OTU5OTRmMjVlZmZhYzc5YTkwMzg4NDUxMWQ0NzEzOWRmNDA3NTZiYjhiMjJlOWRkNDhjODY4MmVlMzcyIiwidGFnIjoiIn0%3D'
},
  
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
  const [loading, setLoading] = useState(false);
  const [editorState, setEditorState] = useState();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };


  const navigate = useNavigate();
  const [updated, setUpdated] = useState();
  const [threads, setThreads] = useState([]);
  const [recent, setRecent] = useState([]);


    useEffect(()=>{
      setLoading(true)
        let token = localStorage.getItem('tokens');
        if(token == undefined)
          navigate('/login');
        axios.get(`${process.env.REACT_APP_API_URL}/forum/api/category`, config)
        .then((res)=>{
         setThreads(res.data.data);
         setLoading(false);
        }).catch((err)=> console.log(err))
        axios.get(`${process.env.REACT_APP_API_URL}/forum/api/thread/recent`, config)
        .then((res)=>{
         setRecent(res.data.data);
         setLoading(false);
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
      axios.post(`${process.env.REACT_APP_API_URL}api/threads`, {
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
               <img alt="about Banner" src={aboutBanner}/>
                 <Row>
                      <Col className='pl-4' xl={12}><div style={{color: 'black', textAlign: 'left'}} className="firstheaders"> Community Activity</div></Col>
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
        

           <div className="w-full px-2 py-2 mx-auto loopple-min-height-78vh text-slate-500">
            <div className="flex flex-wrap removable">
                <div className="w-full max-w-full px-2 md:w-7/12 md:flex-none">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                      
           <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="All Categories" {...a11yProps(0)} />
                <Tab label="Recent Topics" {...a11yProps(1)} />
                <Tab label="my Favourites" {...a11yProps(1)} />
                
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              {loading ? 
              <div className='mx-auto justify-center flex'>
            <CircularProgress />
            </div>
            :
            <div className="flex-auto">
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            {
                threads?.map((item, index) => 
                        
                        <Link style={{color: 'black'}} to={`/threads/${item.id}`}>
                                <li className="relative flex p-2 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                                    <div className="flex flex-col">
                                    <div className="max-w-full md:w-1/2 md:flex-none">
                                        <h1 style={{fontSize: '30px', color: 'black'}}>{item.title}</h1>
                                        </div>
                                        <div className="ml-auto text-right">
                                    
                                        <a className="inline-block px-4  mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"   style={{color: 'black'}}>
                                       
                                        {item.thread_count}: topics </a>
                                        <a className="inline-block px-4  mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"   style={{color: 'black'}}>
                                       
                                        {item.post_count}: answers </a>
                                    </div>
                                        <span>Description: <span className="font-semibold text-slate-700 sm:ml-2" >{item.description}</span>
                                        </span>
                                     </div>
                                </li>
                                </Link>
                                )}
                            </ul>
                        </div>
                        }
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <div className="flex-auto">
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            {
                recent?.map((item, index) => 
                        
                <Link to={`/replies/${item.id}/${item.title}`}>
                <li className="relative flex p-2 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                    <div className="flex flex-col">
                        <h4 style={{color: 'black', fontFamily: 'poppins'}}>{item.title}</h4>
                        <span className="mb-2 leading-tight text-xs" style={{color: 'black'}}>Author: <span className="font-semibold text-slate-700 sm:ml-2">{item.author_name}</span>
                        </span>
                      </div>
                    <div className="ml-auto text-right">
                        <a className="inline-block px-4  mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"   style={{color: 'black'}}>
                        replies: {item.reply_count} </a>
                    </div>
                </li>
                </Link>
                                )}
                            </ul>
                        </div>
          
                    </CustomTabPanel>
            
          </Box>
          </div>
        </div>
        <div className="w-full max-w-full px-3  md:w-5/12 md:flex-none">
                    <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                                    <h6 className="mb-0">Recent Topics</h6>
                                </div>
                                <div className="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
                                    <i className="mr-2 far fa-calendar-alt" aria-hidden="true"></i>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto p-4 pt-6">
                            <h6 className="mb-4 font-bold leading-tight uppercase text-xs text-slate-500">Newest</h6>
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                              {recent.map(items=>
                              <Link to={`/threads/${items.id}`}>
                                <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-size-inherit rounded-xl">
                                    <div className="flex items-center">
                                        <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                                            <i className="fas fa-arrow-down text-3xs" aria-hidden="true"></i>
                                        </button>
                                        <div className="flex flex-col">
                                            <h6 className="mb-1 leading-normal text-sm text-slate-700">{items.title}</h6>
                                            <span className="leading-tight text-xs">{moment(items.created_at).fromNow()}</span>
                                        </div>
                                    </div>
                                  
                                </li>
                                </Link>
                                )}
                               </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
        </div>
    )
}
export default Forums;
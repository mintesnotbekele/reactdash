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
import { useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import TextArea from "antd/es/input/TextArea";

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

const ForumsReplies=()=>{
    const {id, title} = useParams();
  const navigate = useNavigate();
  const [updated, setUpdated] = useState();
  const [threads, setThreads] = useState([]);
  const [recent, setRecent] = useState([]);
  
    useEffect(()=>{
        console.log("the isid");
        console.log(id);
        let token = localStorage.getItem('tokens');
        if(token == undefined)
          navigate('/login');
        axios.get(`${process.env.REACT_APP_API_URL}/forum/api/thread/${id}/posts`, config)
        .then((res)=>{
         setThreads(res.data.data);
        }).catch((err)=> console.log(err))
        axios.get(`${process.env.REACT_APP_API_URL}/forum/api/thread/recent`, config)
        .then((res)=>{
         setRecent(res.data.data);
        }).catch((err)=> console.log(err))
       },[updated])

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [newid, setId] = useState();
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
  function Replies(props){
    const thre = props.thread;
    const replies= [...threads];
    console.log(thre)
    const result = replies.filter(item=>{
      return item.post_id == thre
    })
    return(
        <div>
       {result.map((item) => (
             <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit px-12 rounded-xl bg-gray-50">
             <div className="flex flex-col">
                 <h6 className="mb-4 leading-normal text-sm">{item.title}</h6>
                 <span className="mb-2 leading-tight text-xs"><span className="font-semibold text-slate-700"> <div dangerouslySetInnerHTML={{__html: item.content}} />
                 </span>
                 </span>
                 <span className="mb-2 leading-tight text-xs">Author : <span className="font-semibold text-slate-700 sm:ml-2">{item.author_name}</span>
                 </span>
               </div>
             <div className="ml-auto text-right w-full">
                    <a className="z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-red hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;" data-gramm="false" wt-ignore-input="true" data-quillbot-element="YUwGqBvnPVjrexXORyOMt">
                     <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-red bg-x-25 bg-clip-text" aria-hidden="true"></i></a>
                     <button id={item.id} onClick={()=>handlepostreply(item.id)} className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;">
                     <i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i>Reply </button>
             </div>
         </li>
       ))}
      </div>
    )
   
}

    const handleReplies=(values)=>{
       
     

       
       axios.post(`${process.env.REACT_APP_API_URL}/forum/api/thread/${id}/posts`, {
        "thread_id": id,   
          "post_id": posts,
          "content" : values.comment,
     }, config)
      .then((res)=>{
         if(res.data.data.length != 0)
             {
              axios.patch(`${process.env.REACT_APP_API_URL}/api/updatepost/${res.data.data.id}`, {  
                  "post_id": posts,
             }, config);
             setUpdated(!updated);
             setId(null);
             form.resetFields();
             forms.resetFields();
            }
          else {
            message.error(`the is something wong contact administrator Please!`);
          }
      })
      setpost(null);
  }
  const [reply, setReply] = useState(false);
  const [posts , setpost]= useState(null);
  const handlepostreply=(value)=>{
    setId(value)
    setReply(true);
    setpost(value);

  }
const [form, registerId] = Form.useForm();



const [forms] =Form.useForm();

    return(
        <div>
            <Header/>
            <img alt="about Banner"style={{marginBottom: '20px'}} src={aboutBanner}/>
                      <Row>
           </Row>
                 
           <div className="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
            <div className="flex flex-wrap -mx-3 removable">
                <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <h6 className="mb-0 firsttext" style={{}}>Topic: {title}</h6>
                        </div>
                
                <div className="flex-auto p-4 pt-6">
                      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                      {
                      threads?.map((item, index) =>                       
                         <div>
                            {item.post_id == null && item.sequence !== 1 ?
                              <div>
                              <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                                  <div className="flex flex-col">
                                      <h6 className="mb-4 leading-normal" style={{textAlign: 'left', fontSize: '30px'}}>{item.title}</h6>
                                      <span className="mb-2 leading-tight"  style={{textAlign: 'left', fontSize: '30px'}}><span className="font-semibold text-slate-700">
                                        
                                      <div dangerouslySetInnerHTML={{__html: item.content}}
                    />
                                        </span>
                                      
                                      </span>
                                      <span className="mb-2 leading-tight text-xs">Author : <span className="font-semibold text-slate-700 sm:ml-2">{item.author_name}</span>
                                      </span>
                                    </div>
                                  <div className="ml-auto text-right w-full">
                                      <a className="z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-red hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;" data-gramm="false" wt-ignore-input="true" data-quillbot-element="YUwGqBvnPVjrexXORyOMt">
                                          <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-red bg-x-25 bg-clip-text" aria-hidden="true"></i></a>
                                      <button id={item.id} onClick={()=>handlepostreply(item.id)} className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;">
                                          <i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i>Reply </button>
                                    
                                  </div>
                              </li>
                            
                              <Replies thread={item.id}/>

                            { posts == item.id ? <div className="display-flex">  
                               <Form
                                 form={forms}
                                 name={`basic${item.id}`} 
                                 onFinish={handleReplies}
                                 autoComplete="off">
                                <Form.Item 
                                     name="comment"
                                     rules={[
                                         {
                                         required: true,
                                         message: 'Please input your details!',
                                         },
                                     ]}>
                                          <ReactQuill theme="snow"/>
                                </Form.Item>   
                        
                             <Form.Item >
                                    <div className="col-4">
                                     <button htmlType="submit" className="btn btn-sm bg-gradient-primary mb-0">Reply</button>
                                  </div>
                            </Form.Item>
                         </Form>
                           </div>
                                  : null}
                          </div>
                            :
                           null
                            }
                         </div>
                                )}
                                <li>
                                <hr className="horizontal dark my-4"/>
                                    <div>
                                    <div className="form-group">
                                            <label className="form-control-label">Comment </label>
                                    <Form
                                        form={form}
                                        name="basic" 
                                        onFinish={handleReplies}
                                        autoComplete="off"> 
                                       <Form.Item     
                                            name="comment"
                                            rules={[
                                                {
                                                required: true,
                                                message: 'Please input your details!',
                                                },
                                            ]}>
                                                <ReactQuill theme="snow"/>

                                              </Form.Item>   
                                           <Form.Item >
                                           <div className="col-4">
                                            <button htmlType="submit" className="btn btn-sm bg-gradient-primary mb-0">Comment</button>
                                        </div>
                                           </Form.Item>
                                        </Form>
                                        </div> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
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
                                            <span className="leading-tight text-xs">{items.created_at}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-red text-sm bg-clip-text">- $ 2,500</p>
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
export default ForumsReplies;
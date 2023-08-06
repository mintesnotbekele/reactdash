import Header from "./components/header";
import aboutBanner from './assets/forumbanner.png';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Form, Row, message } from "antd";
import { Input,Button } from 'antd';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Footer from "./components/footer";



const { TextArea } = Input;





const ForumDetail=()=>{
  
  const {id} = useParams();
  const [threads, setThreads] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likecount, setLikeCount] = useState(0);
  const [updated, setUpdated] = useState();

  const config = {
    headers: { Authorization: `Bearer 6|ZV5PdskWoPQ3sotEw2RU00HJexgFT3x8s5d4PLID` }
  };
  const handleSubmit=(values)=>{
 
    axios.post('https://curevive.prophecius.com/api/replies/',
     {
        "description" : values.comment,
        "thread" : id,
   }, config)
    .then((res)=>{
      setUpdated(!updated);
    }).catch((err)=>{
        message.error(`Something is wrong please contact Administrator Or try Again Later`);
    }
    )
}

const navigate = useNavigate();
  useEffect(()=>{
    let token = localStorage.getItem('tokens');
    if(token == undefined)
      navigate('/login');
      axios.get(`https://curevive.prophecius.com/api/threads/${id}`, config)
      .then((res)=>{
       setThreads(res.data);
      }).catch((err)=> console.log(err));

      axios.get(`https://curevive.prophecius.com/api/likedby/${id}`, config)
      .then((res)=>{
       if(res.data.length > 0 ){
        setLiked(true);
       }
      }).catch((err)=> console.log(err));
      axios.get(`https://curevive.prophecius.com/api/repliedforum/${id}`, config)
      .then((res)=>{
       setComments(res.data);
      }).catch((err)=> console.log(err))
      axios.get(`https://curevive.prophecius.com/api/likecounter/${id}`, config)
      .then((res)=>{
        setLikeCount(res.data);
      }).catch((err)=> console.log(err))
     },[updated])

     const handliLikes=()=>{
      axios.post(`https://curevive.prophecius.com/api/likes/`,
      {
        "thread" : id,
   }, config)
      .then((res)=>{
       setLikes(res.data);
       setUpdated(!updated);
      }).catch((err)=> console.log(err));
     }

     const handleremoveLike=()=>{
      axios.delete(`https://curevive.prophecius.com/api/dislike/`, config)
      .then((res)=>{
       setLikes(res.data);
       setUpdated(!updated);
       setLiked(false);
      }).catch((err)=> console.log(err));
     }

      return(
        <div>
          <Header/>
          <img alt="about Banner"style={{marginBottom: '100px'}} src={aboutBanner}/>
          <Row>
                    <Col xl={4}></Col>
                      <Col xs={24} xl={16}><div className="firstheaders">Topic: { threads?.title} </div></Col>
                      <hr style={{height: '4px', background: '#CDA274'}}/>
                      <Col xl={4}></Col>
                      <Col xs={24} xl={6}></Col>
                       
                      <Col xs={24} xl={12}>
                      Comments: 
                      <IconButton aria-label="delete">
                           {liked == false ? <FavoriteBorderIcon onClick={handliLikes}/> : <FavoriteIcon onClick={handleremoveLike}/> }
                           {likecount} Likes     
                              </IconButton>  
                      <Form
                         name="basic" 
                         initialValues={{
                           remember: true,
                         }}
                         onFinish={handleSubmit}
                         autoComplete="off"
                      >
                        <Form.Item name='comment'>
                      <TextArea rows={4} placeholder="write a comment" maxLength={600} />
                      </Form.Item>
                        <Form.Item>
                       <Button  type="primary" className="customButton" htmlType="submit" >Comment</Button>
                       </Form.Item>
                       </Form>
                       </Col>
                    <Col xl={6}></Col>

                    <Col xl={6}></Col>
                    <Col xs={24} xl={12}>
                    {
                     
                comments?.map((item, index) => 
                            <div style={{fontSize: '30px', border: 'solid', margin: '10px', borderRadius: '50px',padding: '30px', fontFamily: 'lato'}}>
                            <AccountCircleIcon/>   {item.description}
                            <div style={{textAlign:"center",marginTop:"50px"}}>
                          </div>                                                                                                                                                                               
                        </div>
                          )
                         } 
                    </Col>
                    <Col xl={6}></Col>
           </Row>
           <Footer/>
        </div>
      )
}
export default ForumDetail;
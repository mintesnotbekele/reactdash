import { Row, Col } from "antd";
import {RightOutlined } from '@ant-design/icons';
import moment from "moment";
import { useState } from "react";
import { useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import env from "react-dotenv";

const Articles= ()=>{

      const [article, setArticle] = useState([]);
      const [articleInit, setArticleInit] = useState([]);
      const [loading, setLoading] = useState(false);
      const [latest, setLatest] = useState([]);
      const [counter , setCounter] = useState([]);
      const [page, setPage] = useState(1);
       useEffect(()=>{
        axios.get(`https://curevive.prophecius.com/api/newsAndarticle`)
        .then((res)=>{
            setArticle(res.data);
            setArticleInit(res.data)

            setPage(1);
           
            setCounter(Math.ceil(res.data.length/3))
        })
       },[])

       const handleChange = (event, value) => {
        let div = counter; 
    
        setArticle(articleInit.filter(item=>{
            return(
                item?.index >= div*value - div && item?.index < (div*value)
                )
            }));
        setPage(value);
      };
       const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

       const [entered1, setEntered1] = useState(true);
       const [entered2, setEntered2] = useState(true);
       const [entered3, setEntered3] = useState(true);

      const handleHoverEnter=(value)=>{
            if(value == 1)
            setEntered1(false);
            else if(value ==2)
            setEntered2(false);
            else if(value ==3)
            setEntered3(false);
      }

      const handleHoverleave=(value)=>{
            if(value == 1)
            setEntered1(true);
            else if(value ==2)
            setEntered3(true);
            else if(value ==3)
            setEntered3(true);
      }
 
    return(
        <Row className="my-lg-12" style={{zIndex: '5000'}}>
        <Col span={4}></Col>
        
        <Col xs={24} xl={16} span={16}>
          <div>
            <h1  style={{fontSize: '50px', color: '#292F36', fontFamily: "Playfair Display"}}>
          Articles & News
            </h1>
            <p style={{margin: "20px", fontSize: '22px', fontFamily: "lato"}}>Detailed and fun to read articles written by well researched individuals from around the world.</p>
            </div>
           <Row>
           {article.map((item) => 
           <Col xl={8} xs={24} onMouseEnter={()=>handleHoverEnter(1)}  onMouseLeave={()=>handleHoverleave(1)} className='hoverarticle' span={8}>  
          
           <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '10px', margin: '20px'}}>
           <div style={{height: '100%'}}>
              <img style={{height: '300px'}} src={`https://curevive.prophecius.com/${item?.picture}`} alt="articles"/>
                  <h1 style={{fontSize: '25px', fontFamily: "lato", textAlign: 'left'}}> {item?.title}</h1>
                  <div style={{ marginTop: '30px', marginBottom: '20px'}}>
                        <Link style={{color: 'black'}} to={`/blogdetail/${item?.id}`}>
                         <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}> 
                           <p className='blogsecond' style={{marginTop: '60px', width: '90%'}}>{moment(item.create_at).fromNow()} 
                                <RightOutlined className={ entered1 ? 'cursorhover': 'cursorfree'} /></p>
                        </p>
                        </Link>
                   </div>
                  </div>
                  </div>    
            </Col> 
           )}     
           </Row>
                <div style={{margin: 'auto', width: '30%'}}>
                      <Stack spacing={2}> 
                          <Row>
                              <Col style={{marginBottom: '100px'}} span={24} variant="outlined" color="secondary"> 
                                  <div style={{margin: 'auto', width: '50%', height: '100px'}}> 
                                  <Pagination size="large"  count={counter} page={page} onChange={handleChange} />
                                  </div> 
                            </Col>
                          </Row>
                      </Stack>
                </div>
           </Col>
        </Row>
    
    )
}
export default Articles;
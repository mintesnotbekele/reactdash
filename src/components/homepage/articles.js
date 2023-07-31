import { Row, Col } from "antd";
import {RightOutlined } from '@ant-design/icons';
import article1 from "../../assets/article 1.png";
import article2 from "../../assets/article2.png";
import article3 from "../../assets/article3.png";
import { useState } from "react";
import { useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Articles= ()=>{

      const [article, setArticle] = useState([]);
      const [articleInit, setArticleInit] = useState([]);
      const [loading, setLoading] = useState(false);
      const [latest, setLatest] = useState([]);
      const [counter , setCounter] = useState([]);
      const [page, setPage] = useState(1);
       useEffect(()=>{
        axios.get('https://curevive.thotamali.com/api/newsAndarticle')
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
                item.index >= div*value - div && item.index < (div*value)
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
        <Row style={{marginTop: '250px'}}>
        <Col span={4}></Col>
        
        <Col span={16}>
          <div>
            <h1 style={{fontSize: '50px', color: '#292F36', fontFamily: "Playfair Display"}}>
          Articles & News
            </h1>
            <p style={{margin: "20px", fontSize: '22px', fontFamily: "lota"}}>Detailed and fun to read articles written by well researched individuals from around the world.</p>
            </div>
           <Row>
           {article.map((item) => 
           <Col onMouseEnter={()=>handleHoverEnter(1)}  onMouseLeave={()=>handleHoverleave(1)} className='hoverarticle' span={8}>  
           <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '10px', margin: '20px'}}>
           <div style={{height: '100%'}}>
              <img style={{height: '300px'}} src={`https://curevive.thotamali.com/${item.picture}`} alt="articles"/>
                  <h1 style={{fontSize: '25px', fontFamily: "lota", textAlign: 'left'}}> {item.title}</h1>
                  <div style={{ marginTop: '30px', marginBottom: '20px'}}>
                        <Link style={{color: 'black'}} to={`/blogdetail/${item.id}`}>
                         <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}> 
                           <p className='blogsecond' style={{marginTop: '60px', width: '90%'}}>22 December,2022 
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
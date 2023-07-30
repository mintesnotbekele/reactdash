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
      const [loading, setLoading] = useState(false);
      const [latest, setLatest] = useState([]);
       useEffect(()=>{
        axios.get('https://curevive.thotamali.com:8000/api/newsAndarticle')
        .then((res)=>{
            setArticle(res.data);
    
        })
       },[])
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
              <img style={{height: '300px'}} src={`https://curevive.thotamali.com:8000/${item.picture}`} alt="articles"/>
                  <h1 style={{fontSize: '25px', fontFamily: "lota", textAlign: 'left'}}> {item.title}</h1>
                  <div style={{ marginTop: '30px', marginBottom: '20px'}}>
                        <Link style={{color: 'black'}} to={`/blogdetail/${item.id}`}>
                         <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}> 
                           <p className='blogsecond' style={{marginTop: '60px', width: '90%'}}>{item.created_at} 
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
     
      <Pagination count={5} variant="outlined" color="secondary" />
     
    </Stack>
    </div>
           </Col>
        </Row>
    
    )
}
export default Articles;
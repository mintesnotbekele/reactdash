import Header from './components/header';
import { Col, Row } from 'antd';

import {RightOutlined} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

import article from './assets/diseaseBanner.jpg';
import blogBanner from './assets/blogsbanner.jpg';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import ArticlesComponent from './components/homepage/articles';

const Articles =()=>{


    const [loading, setLoading] = useState(false);
    const [latestpost, setLatestPost] = useState([]);
     useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/newsAndarticle')
      .then((res)=>{
     
        if(res.data.length != 0)
        {setLatestPost(res.data.reduce(function (max, x) { return (x?.id > max) ? x?.id : max}))}
      })
     },[])

    return(
        <div>
            <Header/>
            <img src={blogBanner} alt="booking banner"/>
            
            
            <Row style={{marginTop: '150px'}}>
                <Col span={4}></Col>
                <Col span={16}>
                <h1 className='articleHeader'>
                    Latest Post
                    </h1>
                </Col>
                <Col span={4}></Col>
            </Row>

            
            <Row style={{marginTop: '30px'}}>
                <Col span={4}></Col>
                <Col span={8}>
                <div style={{margin: '20px'}}>
                <img src={`http://127.0.0.1:8000/${latestpost?.picture}`} alt="latest post"/>
                </div>
                </Col>
                <Col style={{padding: '30px'}} span={8}>
                    <h1  className='latestArticleheader'>
                     { latestpost == null ?  "" :  latestpost?.title}
                    </h1>
                    <p className='firsttext' style={{textAlign: 'left'}}>
                    { latestpost == null ?  "" :  latestpost?.description}
                    </p>
                    
                    <p className='blogsecond' style={{marginTop: '30px' , width: '90%'}}>{latestpost?.created_at}<RightOutlined style={{color: '#CDA274', marginLeft: "10px", float: 'right', fontSize: '22px'}}/></p>
                    
                 </Col>
                <Col span={4}></Col>
            </Row>

            <ArticlesComponent/>
            
            <Row style={{marginTop: '100px', marginBottom: '100px'}}>
                <Col span={4}></Col>
                <Col span={16}>
                </Col>
                <Col span={4}></Col>
            </Row>

            <Footer />
        </div>
    )
}
export default Articles;
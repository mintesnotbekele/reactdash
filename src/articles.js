import Header from './components/headerbackup';
import { Col, Row } from 'antd';
import moment from 'moment';
import {RightOutlined} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import blogBanner from './assets/blogsbanner.jpg';
import Footer from './components/footer';
import ArticlesComponent from './components/homepage/articles';
import env from 'react-dotenv';
import './App.css';
const Articles =()=>{

    const [latestpost, setLatestPost] = useState([]);
     useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/newsAndarticle`)
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
                <Col md={4} xs={0} xl={4} span={4}></Col>
                <Col md={16} xl={16} xs={24}>
                <h1 className='articleHeader'>
                    Latest Post
                    </h1>
                </Col>
                <Col md={4} span={4}></Col>
            </Row>

            
            <Row style={{marginTop: '30px'}}>
                <Col md={0} xl={4} xs={0} span={4}></Col>
                <Col xl={6} md={16} xs={24} span={6}>
                <div style={{margin: '20px'}}>
                <img src={`${process.env.REACT_APP_API_URL}/${latestpost?.picture}`} alt="latest post"/>
                </div>
                </Col>
                <Col xl={10} md={14} xs={24} span={8}>
                    <h1  className='latestArticleheader my-3' style={{fontWeight: 'bold'}}>
                     { latestpost == null ?  "" :  latestpost?.title}
                    </h1>
                    <p className='firsttext' style={{textAlign: 'left', color: 'black'}}>
                    { latestpost == null ?  "" :  latestpost?.description}
                    </p>
                    
                    <p className='blogsecond' style={{marginTop: '30px' , width: '90%'}}>
                      {moment(latestpost?.created_at).fromNow()}<RightOutlined style={{color: '#CDA274', marginLeft: "10px", float: 'right', fontSize: '22px'}}/>
                        </p>
                    
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
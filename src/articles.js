import Header from './components/header';
import { Col, Row } from 'antd';
import latestpost from './assets/latestblog.png';
import art1 from './assets/article12.png';
import art2 from './assets/article13.png';
import art3 from './assets/article14.png';
import art4 from './assets/article15.png';
import art5 from './assets/article16.png';
import art6 from './assets/article17.png';
import blogframe  from './assets/blogframe.png';
import {RightOutlined} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';


import blogBanner from './assets/blogsbanner.jpg';
import Footer from './components/footer';
const Articles =()=>{

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
     useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/newsAndarticle')
      .then((res)=>{
        setArticles(res.data);
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
                <img src={latestpost} alt="latest post"/>
                </div>
                </Col>
                <Col style={{padding: '30px'}} span={8}>
                    <h1  className='latestArticleheader'>
                    Yoga can be the cure to most of your problems!
                    </h1>
                    <p className='firsttext' style={{textAlign: 'left'}}>
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.
                    posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text.
                    It has roots in a piece of classica.
                    </p>
                    <p className='blogsecond' style={{marginTop: '30px' , width: '90%'}}>26 December,2022 <RightOutlined style={{color: '#CDA274', marginLeft: "10px", float: 'right', fontSize: '22px'}}/></p>
                </Col>
                <Col span={4}></Col>
            </Row>
           
            <Row style={{marginTop: '150px'}}>
                <Col span={4}></Col>
                <Col span={16}>
                <h1 className='articleHeader'>
                Articles & News
                    </h1>
                </Col>
                <Col span={4}></Col>
            </Row>

            <Row>
                <Col span={4}>
                </Col>
                <Col span={16}>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {articles.map((item) => 
                        <div style={{width: '30%', margin: '10px'}}>
                            <img src={`http://127.0.0.1:8000/${item.picture}`} alt="articles"/>
                            <h1 className='blogHeader'>{item.title}</h1>
                            <p className='blogsecond' style={{marginTop: '30px', width: '90%'}}>26 December,2022 <RightOutlined style={{color: '#CDA274', marginLeft: "10px", float: 'right', fontSize: '22px', background: '#ECDFD7', borderRadius: '50%', padding: '5px', marginTop: '-5px'}}/></p>
            
                        </div>
                    )}
                </div>
                </Col>
                <Col span={4}></Col>
            </Row> 
            <Row style={{marginTop: '100px', marginBottom: '100px'}}>
                <Col span={4}></Col>
                <Col span={16}>
                <img style={{margin: 'auto'}} src={blogframe} alt='frame'/>
                </Col>
                <Col span={4}></Col>
            </Row>

            <Footer />
        </div>
    )
}
export default Articles;
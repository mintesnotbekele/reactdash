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


import blogBanner from './assets/blogsbanner.jpg';
import Footer from './components/footer';
const Articles =()=>{
    return(
        <div>
            <Header/>
            <img src={blogBanner} alt="booking banner"/>
            
            
            <Row style={{marginTop: '150px'}}>
                <Col span={6}></Col>
                <Col span={12}>
                <h1 className='articleHeader'>
                    Latest Post
                    </h1>
                </Col>
                <Col span={6}></Col>
            </Row>

            
            <Row style={{marginTop: '150px'}}>
                <Col span={6}></Col>
                <Col span={6}>
                <div style={{margin: '20px'}}>
                <img src={latestpost} alt="latest post"/>
                </div>
                </Col>
                <Col style={{padding: '30px'}} span={6}>
                    <h1  className='latestArticleheader'>
                    Yoga can be the cure to most of your problems!
                    </h1>
                    <p className='firsttext'>
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.
                    posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text.
                    It has roots in a piece of classica.
                    </p>
                </Col>
                <Col span={6}></Col>
            </Row>
           
            <Row style={{marginTop: '150px'}}>
                <Col span={6}></Col>
                <Col span={12}>
                <h1 className='articleHeader'>
                Articles & News
                    </h1>
                </Col>
                <Col span={6}></Col>
            </Row>

            <Row>
                <Col span={6}>
                </Col>
                <Col span={12}>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{width: '30%', margin: '10px'}}>
                            <img src={art1} alt="articles"/>
                            <h1 className='blogHeader'>5 Asanas to build a strong body.</h1>
                        </div>
                        <div style={{width: '30%', margin: '10px'}}>
                            <img src={art2} alt="articles"/>
                            <h1 className='blogHeader'>Incense sticks that enlighten.</h1>
                        </div>
                        <div style={{width: '30%', margin: '10px'}}>
                            <img src={art3} alt="articles"/>
                            <h1 className='blogHeader'>Best hydrotherapy practices.</h1>
                        </div>
                        <div style={{width: '30%', margin: '10px'}}>
                            <img src={art4} alt="articles"/>
                            <h1 className='blogHeader'>10 pressure points to decrease headache.</h1>
                        </div>
                        <div style={{width: '30%', margin: '10px'}}>
                            <img src={art5} alt="articles"/>
                            <h1 className='blogHeader'>World National Yoga Day Celebrations</h1>
                        </div>
                        <div style={{width: '30%', margin: '10px'}}>
                            <img src={art6} alt="articles"/>
                            <h1 className='blogHeader'>Prime Minister in favour of Naturopathy!</h1>
                        </div>
                    </div>
                </Col>
                <Col span={6}></Col>
            </Row> 
            <Row style={{marginTop: '100px', marginBottom: '100px'}}>
                <Col span={6}></Col>
                <Col span={12}>
                <img style={{margin: 'auto'}} src={blogframe} alt='frame'/>
                </Col>
                <Col span={6}></Col>
            </Row>

            <Footer />
        </div>
    )
}
export default Articles;
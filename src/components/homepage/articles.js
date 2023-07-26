import { Row, Col } from "antd";
import {RightOutlined } from '@ant-design/icons';
import article1 from "../../assets/article 1.png";
import article2 from "../../assets/article2.png";
import article3 from "../../assets/article3.png";
import { useState } from "react";
const Articles= ()=>{
       const [entered, setEntered] = useState(false);

      const handleHoverEnter=()=>{
            setEntered(true);
      }
      const handleHoverleave=()=>{
            setEntered(false);
      }
    return(
        <Row style={{marginTop: '250px'}}>
        <Col span={4}></Col>
        
        <Col span={16}>
          <div>
            <h1 style={{fontSize: '50px', color: '#292F36', fontFamily: "DM Serif Display"}}>
          Articles & News
            </h1>
            <p style={{margin: "20px", fontSize: '22px', fontFamily: "josh"}}>Detailed and fun to read articles written by well researched individuals from around the world.</p>
            </div>
           <Row>
           <Col onMouseEnter={handleHoverEnter}  onMouseLeave={handleHoverleave} className='hoverarticle' span={8}>  <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '20px', margin: '20px'}}> <img style={{borderRadius: '25px'}} src={article1}/>
                  <h1 style={{fontSize: '25px', fontFamily: "josh"}}> Let’s Get Solution For Arthritis.</h1>
                  <div style={{ marginTop: '30px', marginBottom: '20px'}}>
                         <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}> <p className='blogsecond' style={{marginTop: '30px', width: '90%'}}>26 December,2022 
                         <RightOutlined className={ entered ? 'cursorhover': 'cursorfree'} /></p>
                        </p>
                   </div>
                  
                  </div> 
                  
            </Col> 
            <Col onMouseEnter={handleHoverEnter}  onMouseLeave={handleHoverleave} className='hoverarticle' span={8}>   <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '20px', margin: '20px'}}> <img style={{borderRadius: '25px'}} src={article2}/>
                  <h1 style={{fontSize: '25px', fontFamily: "josh"}}> Latest Massage Techniques To Try.</h1>
                  <div style={{ marginTop: '30px', marginBottom: '20px'}}> 
                  <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}> <p className='blogsecond' style={{marginTop: '30px', width: '90%'}}>26 December,2022 
                  <RightOutlined className={ entered ? 'cursorhover': 'cursorfree'} /></p>
                        </p>
                  </div>
                  
                  </div> 
                  
    
            </Col> 
            <Col onMouseEnter={handleHoverEnter}  onMouseLeave={handleHoverleave} className='hoverarticle' span={8}>  <div style={{ borderWidth: '2px', borderRadius: '25px', padding: '20px', margin: '20px'}}> <img style={{borderRadius: '25px'}} src={article3}/>
                  <h1 style={{fontSize: '25px', fontFamily: "josh"}}> Best For Homemade Mix Of Herbs.</h1>
                  <div style={{ marginTop: '30px', marginBottom: '20px'}}>
                  <p style={{ color: '#4D5053', width: '100%', textAlign: 'left'}}> <p className='blogsecond' style={{marginTop: '30px', width: '90%'}}>26 December,2022 
                  <RightOutlined className={ entered ? 'cursorhover': 'cursorfree'} /></p>
                        </p> </div>
                  </div>
            </Col> 
           </Row>
           </Col>
        </Row>
    
    )
}
export default Articles;
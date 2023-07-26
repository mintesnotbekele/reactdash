import { Button, Row, Col, Space} from "antd";
import {RightOutlined } from '@ant-design/icons';
import phones from "../../assets/phones.png";
import obese from "../../assets/obese.png";
import doctor from "../../assets/doctor.png";
import blur from "../../assets/blur.png";
const Diseases=()=>{
    return(
        <Row style={{marginTop: "180px", zIndex: "1500"}}>
        <Col span={4}></Col>
         <Col span={18}>
         <h1 style={{fontSize: '50px', color: '#292F36', marginBottom: "40px", fontFamily: 'DM Serif Display'}}>Diseases</h1>
         <p style={{ width: '60%',  margin: 'auto', color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Here is a gist of the most common diseases we have cured through our time in this industry!</p>
         <Row style={{flex: 'justify', marginTop: '100px', marginLeft: '30px' }} >
           <Col style={{margin:"35px"}} span={10}>
           <img src={phones} style={{borderTopRightRadius:'45px'}} preview={false}/>
           <div style={{width: '100%'}}>
           <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Diabetes</p>
           <RightOutlined className='cursorhover' style={{marginTop: '20px'}}/></div>
           </Col>
           <Space/>
           <Col style={{margin:"35px"}} span={10}>
           <img src={blur} style={{borderTopLeftRadius:'45px'}} preview={false}/>
           <div style={{width: '100%'}}>
           <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Thyroid</p>
           <RightOutlined className='cursorhover' style={{marginTop: '20px'}}/></div>
           </Col>
           <Col style={{margin:"35px"}} span={10}>
           <img src={obese} style={{borderBottomRightRadius:'45px'}} preview={false}/>
           <div style={{width: '100%'}}>
           <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Obesity</p>
           <RightOutlined className='cursorhover' style={{marginTop: '20px'}}/></div>
           </Col>
           <Col style={{margin:"35px"}} span={10}>
           <img src={doctor} style={{borderBottomLeftRadius:'45px'}} preview={false}/>
           <div style={{width: '100%'}}>
           <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>Hypertension</p>
           <RightOutlined className='cursorhover' style={{marginTop: '20px'}}/></div>
           </Col>
         </Row>

         <div>
           <Button style={{color: "#F6F5EC",fontSize: '22px', margin: 'auto',  background: '#292F36', paddingLeft : '100px', paddingRight : '100px', paddingTop: '30px',borderRadius: '15px', paddingBottom: '50px'}}> More</Button>
         </div>
         </Col>
        </Row>
    )
}
export default Diseases;
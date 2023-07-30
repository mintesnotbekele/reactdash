import { Button, Row, Col, Space} from "antd";
import {RightOutlined } from '@ant-design/icons';
import phones from "../../assets/phones.png";
import obese from "../../assets/obese.png";
import doctor from "../../assets/doctor.png";
import blur from "../../assets/blur.png";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Diseases=()=>{
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(false);
   useEffect(()=>{
    axios.get('https://curevive.thotamali.com/api/disease')
    .then((res)=>{
      setDiseases(res.data);
    })
   },[])

    return(
        <Row style={{marginTop: "180px", zIndex: "1500"}}>
        <Col span={4}></Col>
         <Col span={18}>
         <h1 style={{fontSize: '50px', color: '#292F36', marginBottom: "40px", fontFamily: 'Playfair Display'}}>Diseases</h1>
         <p style={{ width: '60%',  margin: 'auto', color: '#4D5053', fontSize: '22px', fontFamily: 'lota'}}>Here is a gist of the most common diseases we have cured through our time in this industry!</p>
         <Row style={{flex: 'justify', marginTop: '100px', marginLeft: '30px' }} >
         {diseases.map((item) => 
        <Col style={{margin:"35px"}} span={10}>
        <img alt="disease images" src={`https://curevive.thotamali.com/${item.picture}`} style={{borderTopRightRadius:'45px'}} preview={false}/>
           <div style={{width: '100%'}}>

           <Link style={{color: 'black'}} to={`/diseases/${item.id}`}>
           <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'Playfair Display', fontWeight: '600'}}>{item?.name}</p>
           <RightOutlined className='cursorhover' style={{marginTop: '20px'}}/>
           </Link>
           </div>
        </Col>
)}
   
         </Row>

         <div>
           <Button style={{color: "#F6F5EC",fontSize: '22px', margin: 'auto',  background: '#292F36', paddingLeft : '100px', paddingRight : '100px', paddingTop: '30px',borderRadius: '15px', paddingBottom: '50px'}}> <Link to='/cureddisease' style={{color: 'white'}}> More</Link></Button>
         </div>
         </Col>
        </Row>
    )
}
export default Diseases;
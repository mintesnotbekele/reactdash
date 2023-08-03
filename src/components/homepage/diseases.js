import { Button, Row, Col, Space} from "antd";
import {RightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Diseases=()=>{
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(false);
   useEffect(()=>{
    axios.get('https://curevive.prophecius.com/api/disease')
    .then((res)=>{
      setDiseases(res.data);
    })
   },[])

    return(
        <Row style={{ zIndex: "1500"}}>
        <Col xs={24} xl={5}></Col>
         <Col xs={24} xl={15}>
         <Row style={{flex: 'justify', marginTop: '100px', marginLeft: '15px', padding: '10px' }} >
         {diseases.map((item) => 
         
         <Col xs={24} xl={10}>
        <img className="diseaseimages" alt="disease images" src={`https://curevive.prophecius.com/${item.picture}`} style={{borderTopRightRadius:'45px', width: '96%'}} preview={false}/>
           <div style={{width: '100%'}}>

           <Link style={{color: 'black'}} to={`/diseases/${item.id}`}>
           <p style={{width: '50%', float: 'left', fontSize: '50px', color: '#292F36', fontFamily: 'Playfair Display', fontWeight: '600'}}>{item?.name}</p>
           <RightOutlined className='cursorhover' style={{marginTop: '20px', marginRight: '100px'}}/>
           </Link>
           </div>
        </Col>
          )}
         <Col xs={24} xl={3}></Col>
         </Row>


        
         </Col>
         <Col xl={5} >
         </Col>
        </Row>
    )
}
export default Diseases;
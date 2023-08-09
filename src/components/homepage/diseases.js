import { Button, Row, Col, Space} from "antd";
import {RightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import env from "react-dotenv";

const Diseases=()=>{


  const [diseases, setDiseases] = useState([]);

   useEffect(()=>{
    axios.get(`https://curevive.prophecius.com/api/disease`)
    .then((res)=>{
      setDiseases(res.data);
    })
   },[])

    return(
        <Row style={{ zIndex: "1500"}}>
                <Col xs={24} md={0} xl={6}>
                </Col>

                <Col xs={24} md={24} xl={12}>
                <Row style={{flex: 'justify', marginTop: '100px', marginLeft: '15px', padding: '10px' }} >
                {diseases.map((item) => 
                
                <Col md={12} xs={24} xl={12}>
                        <img className="diseaseimages" alt="disease images" src={`https://curevive.prophecius.com/${item.picture}`} style={{borderTopRightRadius:'45px', width: '96%'}} preview={false}/>
                            <div style={{width: '95%', }}>
                          <Link style={{color: 'black'}} to={`/diseases/${item.id}`}>
                          <p className="diseaseList" >{item?.name}</p>
                          <RightOutlined style={{marginTop: '10px'}} className='cursorhover'/>
                          </Link>
                          </div>
                </Col>
                  )}
                <Col xs={24} md={0} xl={3}></Col>
                </Row>


                
                </Col>
                <Col xl={6} >
                </Col>
        </Row>
    )
}
export default Diseases;
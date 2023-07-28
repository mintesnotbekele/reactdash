import Header from "./components/header";
import curedbanner from './assets/curedbanner.jpg';
import {RightOutlined } from '@ant-design/icons';
import {  Col, Row } from 'antd';
import dis1 from './assets/dis1.png';
import dis2 from './assets/dis2.png';
import dis3 from './assets/dis3.png';
import dis4 from './assets/dis4.png';
import dis5 from './assets/dis5.png';
import dis6 from './assets/dis6.png';
import dis7 from './assets/dis7.png';
import dis8 from './assets/dis8.png';
import Footer from "./components/footer";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';

import InputAdornment from "@mui/material/InputAdornment";



const DiseasesWeCure=()=>{
    const [hovered, setHovered] = useState(true);
    const [diseases, setDiseases] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hoveredCart, setHoveredCart] = useState(-1);
     useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/disease')
      .then((res)=>{
        setDiseases(res.data);
      })
     },[])
  
     const showHoverHandler = (i)=>{
        setHoveredCart(i);     
     }
     const toggleHover = () => {
      
        console.log(hovered);
        setHovered(!hovered)
     };

    return(
        <div>
            <Header/>
            <img src={curedbanner} alt="cured disease banner"/>
            <div style={{margin: 'auto', width: '20%', marginTop: '100px', marginBottom: '100px'}}>
            <TextField
                style={{ width: '100%'}}
                variant="outlined"
                placeholder="Search"

                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                    style: { background: '#ECDFD7',borderRadius: '30px'}
                }}
                />
            </div>
            <Row style={{marginBottom: '100px'}}>
                <Col span={4}></Col>
                        <Col span={16}>
                            <div style={{display: 'flex',  flexWrap: 'wrap'}}>
                                    
                            {diseases.map((item, index) => 
                            <div  style={{width: '45%', margin: '10px'}}>
                                 <div onMouseEnter={()=>showHoverHandler(index)} onMouseLeave={toggleHover} >
                                    
                                      <div className="treatmentslider" style={{ textAlign: 'center', backgroundImage: `url(http://127.0.0.1:8000/${item.picture})`, height: '500px'}}> 
                                           <div className={hoveredCart === index ? 'displayText dismage' : 'displayTextnone'}>                                   
                                                 <div style={{height: '500px'}}>
                                                 <h1 style={{paddingTop: '300px',paddingBottom: '500px'}} className={hovered === index? 'displayText' : 'displayTextnone'}>  
                                                <a href={`${item.videolink}`} target="_blank"> {item.description}</a>
                                                 </h1>
                                            </div>
                                      </div>

                                    </div>
                                    <h1 className="firstheaders">
                                    {item.name} <RightOutlined style={{marginTop: '10px', fontSize: '40px'}} className='cursorhover'/>
                                    </h1>
                                    </div>
                                </div>
                            )}

                            </div>
                        </Col>
                <Col span={4}></Col>
            </Row>
            <Footer/>
        </div>
    );
}
export default DiseasesWeCure;
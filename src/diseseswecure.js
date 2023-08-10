import Header from "./components/header";
import curedbanner from './assets/curedbanner.jpg';
import {RightOutlined } from '@ant-design/icons';
import {  Col, Row } from 'antd';
import Footer from "./components/footer";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import Item from "antd/es/list/Item";
import Diseases from "./components/homepage/diseases";
import env from "react-dotenv";


const DiseasesWeCure=()=>{
    const [hovered, setHovered] = useState(true);
    const [diseases, setDiseases] = useState([]);
    const [diseasesInit, setDiseasesInit] = useState([]);
    const [counter , setCounter] = useState([]);
    const [page, setPage] = useState(1);

    const [hoveredCart, setHoveredCart] = useState(-1);
     useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}api/disease`)
      .then((res)=>{
        let temp  = res.data;
        temp.forEach((value, idx) => 
        {
         temp[idx].index=idx;
         
        })
        setDiseases(temp.filter(item=>{
            return(
              item.index < 4
                )
            }));
        setPage(1);
        setCounter(Math.ceil(res.data.length/4));
        console.log()
        setDiseasesInit(temp);
      })
     },[])
  
     const showHoverHandler = (i)=>{
        setHoveredCart(i);     
     }
     const toggleHover = () => {
      
              setHovered(!hovered)
     };

   function handleSearch (e){
      
      setDiseases(diseasesInit.filter(item=>{
            return(
            item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        }))
   }

   const handleChange = (event, value) => {
    let div = counter; 
    console.log(value);
    setDiseases(diseasesInit.filter(item=>{
        if(value> 1){
        return(
            item.index > div*value - div+1 && item.index <= (div*value)+4
            )}
         else {
            console.log(item.index)
            return (item.index < 4)
         }
        }));
    setPage(value);
  };


    return(
        <div>
            <Header/>
            <img src={curedbanner} alt="cured disease banner"/>
            <Row style={{ marginTop: '100px', marginBottom: '100px'}}>
          <Col md={8} xl={8} xs={24} span={8}></Col>
          <Col xl={8} md={10} sm={20} xs={24}>
             <div style={{width: '100%'}}>
            <TextField
                style={{width: '100%'}}
                variant="outlined"
                placeholder="Search"
                onChange={handleSearch}
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
                </Col>
                <Col md={2} xl={8}  xs={24}></Col>
            </Row>
            <Row style={{ zIndex: "1500"}}>
                <Col xs={24} md={6} xl={6}>
                </Col>

                <Col xs={24} md={24} xl={12}>
                <Row style={{flex: 'justify', marginTop: '100px', marginLeft: '15px', padding: '10px' }} >
                {diseases.map((item) => 
                
                <Col md={12} xs={24} xl={12}>
                        <img className="diseaseimages" alt="disease images" src={`${process.env.REACT_APP_API_URL}${item.picture}`} style={{borderTopRightRadius:'45px', width: '96%'}} preview={false}/>
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
            <Row>
                <Col  style={{marginBottom: '100px'}} span={24} variant="outlined" color="secondary"> 
                <div style={{margin: 'auto', width: '20%', height: '100px'}}> 
                <Pagination size="large"  count={counter} page={page} onChange={handleChange} /></div> </Col>
            </Row>
            <Footer/>
        </div>
    );
}
export default DiseasesWeCure;
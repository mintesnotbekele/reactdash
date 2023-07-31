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



const DiseasesWeCure=()=>{
    const [hovered, setHovered] = useState(true);
    const [diseases, setDiseases] = useState([]);
    const [diseasesInit, setDiseasesInit] = useState([]);
    const [counter , setCounter] = useState([]);
    const [page, setPage] = useState(1);

    const [hoveredCart, setHoveredCart] = useState(-1);
     useEffect(()=>{
      axios.get('https://curevive.thotamali.com/api/disease')
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
            <div style={{margin: 'auto', width: '20%', marginTop: '100px', marginBottom: '100px'}}>
            <TextField
                style={{ width: '100%'}}
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
            <Row style={{marginBottom: '100px'}}>
                <Col span={4}></Col>
                        <Col span={16}>
                            <div style={{display: 'flex',  flexWrap: 'wrap'}}>         
                            {diseases.map((item, index) => 
                            <div  style={{width: '40%', margin: '40px'}}>
                                 <div onMouseEnter={()=>showHoverHandler(index)} onMouseLeave={toggleHover} >
                                      <div className="treatmentslider" style={{ textAlign: 'center', borderTopRightRadius: index % 2 == 0 ? '50px': '0px', borderTopLeftRadius: index % 2 != 0 ? '50px': '0px', backgroundImage: `url(https://curevive.thotamali.com/${item.picture})`, backgroundSize: '100%  100%', height: '500px'}}> 
                                           <div className={hoveredCart === index ? ' dismage' : ''}>                                   
                                                 <div style={{height: '500px'}}>
                                                 <h1  style={{paddingTop: '150px', paddingLeft: '20px', paddingRight: '20px',paddingBottom: '50px'}} className={hoveredCart === index? '' : 'displayText'}>  
                                                <a style={{padding: '20px', color: 'black'}} href={`${item.videolink}`} target="_blank"> {item.description}</a>
                                                 </h1>
                                            </div>
                                      </div>

                                    </div>
                                    <h1 className="firstheaders" style={{marginTop: '30px'}}>
                                    <Link style={{color: 'black'}} to={`/diseases/${item.id}`}> {item.name} <RightOutlined style={{marginTop: '10px', fontSize: '40px'}} className='cursorhover'/>
                                    </Link>
                                    </h1>
                                    </div>
                                </div>
                            )}
                            
                            </div>
                        </Col>
                <Col span={4}></Col>
            </Row>
            <Row><Col style={{marginBottom: '100px'}} span={24} variant="outlined" color="secondary"> <div style={{margin: 'auto', width: '20%', height: '100px'}}> <Pagination size="large"  count={counter} page={page} onChange={handleChange} /></div> </Col></Row>
            <Footer/>
        </div>
    );
}
export default DiseasesWeCure;
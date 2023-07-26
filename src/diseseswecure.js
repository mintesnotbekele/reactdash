import Header from "./components/header";
import curedbanner from './assets/curedbanner.jpg';
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


import InputAdornment from "@mui/material/InputAdornment";



const DiseasesWeCure=()=>{
  

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
                                    <div style={{width: '45%', margin: '10px'}}>
                                    <img src={dis1} alt="diseases"/>
                                    <h1 className="firstheaders">
                                    Thyroid
                                    </h1>
                                    </div>

                                    <div style={{width: '45%', margin: '10px', }}>
                                    <img src={dis2} alt="diseases"/>
                                    <h1 className="firstheaders">
                                    Hyperlipidemia
                                    </h1>
                                    </div> 
                                    
                                    <div style={{width: '45%', margin: '10px'}}>
                                    <img src={dis3} alt="diseases"/>
                                    <h1 className="firstheaders">
                                    Gastritis
                                    </h1>
                                    </div>
                                    <div style={{width: '45%', margin: '10px', marginTop: '-160px'}}>
                                    <img style={{height: 'inherit'}} src={dis4}  alt="diseases"/>
                                    <h1 className="firstheaders">
                                    Hypertension
                                    </h1>
                                    </div>
                                    <div style={{width: '45%', margin: '10px'}}>
                                    <img src={dis5} alt="diseases"/>
                                    <h1 className="firstheaders">
                                    Obesity
                                    </h1>
                                    </div>

                                    <div style={{width: '45%', margin: '10px'}}>
                                    <img src={dis6} alt="diseases"/>
                                    <h1 className="firstheaders">
                                    Diabetes
                                    </h1>
                                    </div> 
                                    
                                    <div style={{width: '45%', margin: '10px'}}>
                                    <img src={dis7} alt="diseases"/>
                                    <h1 className="firstheaders">
                                    Arthritis
                                    </h1>
                                    </div>
                                    <div style={{width: '45%', margin: '10px', marginTop: '-180px'}}>
                                    <img src={dis8} alt="diseases"/>
                                    <h1 className="firstheaders">
                                    PCOD
                                    </h1>
                                    </div>
                            </div>
                        </Col>
                <Col span={4}></Col>
            </Row>
            <Footer/>
        </div>
    );
}
export default DiseasesWeCure;
import Header from "./components/header";
import curedbanner from './assets/curedbanner.jpg';
import { Input, Col, Row } from 'antd';
import dis1 from './assets/dis1.png';
import dis2 from './assets/dis2.png';
import dis3 from './assets/dis3.png';
import dis4 from './assets/dis4.png';
import dis5 from './assets/dis5.png';
import dis6 from './assets/dis6.png';
import dis7 from './assets/dis7.png';
import dis8 from './assets/dis8.png';
import Footer from "./components/footer";




const DiseasesWeCure=()=>{
    const { Search } = Input;
    const onSearch = (value) => console.log(value);

    return(
        <div>
            <Header/>
            <img src={curedbanner} alt="cured disease banner"/>
            <div style={{margin: 'auto', width: '10%'}}>
            <Search
                
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
                />
            </div>
            <Row style={{marginBottom: '100px'}}>
                <Col span={6}></Col>
                        <Col span={12}>
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
                <Col span={6}></Col>
            </Row>
            <Footer/>
        </div>
    );
}
export default DiseasesWeCure;
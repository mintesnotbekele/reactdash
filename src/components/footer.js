import {Row, Col} from 'antd';
import logo from '../assets/logo.png';
import logotext from '../assets/text.png';


const Footer=()=>{
    return(
        <Row>
        <Col span={24}>
        <div style={{textAlign: "center"}}>Copyright © Curevive | Designed by Collabity - Powered by OwlWorkLabs</div>
        <div style={{margin: 'auto', width: "10%"}}>
        <img style={{}} alt="logo" src={logo}/>
        <img alt="logo text" src={logotext}/>
        </div>
        </Col>
    </Row>
    )
}
export default Footer;
import {Row, Col} from 'antd';
const Counter=()=>{
    return(
        <Row style={{background: '#ECDFD7', width: '100%', marginTop: '100px',marginBottom: '100px', paddingTop: '120px', paddingBottom: '120px'}}>
         <Col span={24}>
           <Row>
           <Col span={4}></Col>
           <Col span={4} style={{borderRightWidth: '2px', borderColor: '#CDA274'}}>
             <h1 style={{fontSize: '85px', color: '#CDA274'}}> 03</h1> 
             <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Years Of Experiance</p>
           </Col>
           <Col style={{borderRightWidth: '2px', borderColor: '#CDA274'}} span={4}>
             <h1 style={{fontSize: '85px', color: '#CDA274'}}>37</h1>
           <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Success Stories</p>
            </Col>
           <Col style={{borderRightWidth: '2px', borderColor: '#CDA274'}} span={4}>
             <h1 style={{fontSize: '85px', color: '#CDA274'}}>32</h1> 
           <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Active Clients</p>
           </Col>
           <Col span={4}><h1 style={{fontSize: '85px', color: '#CDA274'}}> 69</h1>
           <p style={{color: '#4D5053', fontSize: '22px', fontFamily: 'josh'}}>Happy Customers</p>
           </Col>
           </Row>
         </Col>
        </Row>)
}
export default Counter;
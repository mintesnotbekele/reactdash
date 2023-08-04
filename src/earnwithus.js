import Footer from "./components/footer";
import Header from "./components/header";
import { Row, Col } from "antd";
import { Accordion } from 'flowbite-react';
import { useState, useEffect } from "react";
import axios from "axios";

const EarnWithUs=()=>{
    const [faq, setFaq] = useState([]);
    useEffect(()=>{
        axios.get('https://curevive.prophecius.com/api/faq')
        .then((res)=>{
          setFaq(res.data);
        });
    })
   return(
    <div>
        <Header/>
         <Row>
            <Col span={2}>
                </Col>
                <Col span={5}>
            <h1 className="earnheader" style={{margin: '100px 0px'}}>
                            Join Curevive as 
                an Affiliate and 
                earn more!
            </h1>
            <h3 className="earntext">
            The term may sound familiar to some of you. In a variety of
different fields, the word is actually quite widely used. However,
the meaning of the field is different in each concerned
            </h3>
            </Col>
         </Row>
         <Row>
            <Col span={6}>
            </Col>
            <Col span={12}>
            <Accordion collapseAll>
              {faq.map((item) => 
                <Accordion.Panel>
                  <Accordion.Title>
                   {item.title}
                  </Accordion.Title>
                  <Accordion.Content>
                  {item.description}
                  </Accordion.Content>
                </Accordion.Panel>
                 )}
              </Accordion>
            </Col>
         </Row>
         <Footer/>
    </div>
   )
}
export default EarnWithUs;
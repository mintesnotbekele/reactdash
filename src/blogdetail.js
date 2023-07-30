import Header from "./components/header";
import blogbanner from './assets/blogdetailbanner.jpg';
import blogdetail from './assets/blogdetail.png';
import quotes from "./assets/blogquotes.png";
import { Col, Row, Input, Checkbox, Space } from "antd";
import Footer from "./components/footer";
import TextArea from "antd/es/input/TextArea";
import blogmeditate from './assets/blogmeditate.png';
import { Button } from "flowbite-react";
import {ArrowRightOutlined} from '@ant-design/icons';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Blogdetail=()=>{
    const {id} = useParams();
   
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
  
     useEffect(()=>{

        axios.get(`https://curevive.thotamali.com:8000/api/newsAndarticle/${id}`)
        .then((res)=>{
            setArticles(res.data);
        })
     },[]);
      return(
        <div>
            <Header/>
            <img src={blogbanner} alt="blog detail banner"/>
            <Row style={{marginTop: '200px'}}>
                <Col span={4}></Col>
                <Col span={10}>
                    <h1 className="firstheaders">{articles?.title}</h1>
                    <img style={{margin: 'auto'}} src={`https://curevive.thotamali.com:8000/${articles?.picture}`} alt="blog detail"/>
                    <div style={{margin: '20px'}}>
                    <p >26 December,2022  <span style={{float: 'right'}}>Interior / Design / Home / Decore</span></p></div>


                 <p className="firsttext" style={{textAlign: 'left', marginTop: '50px', marginBottom: '50px'}}>  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injecthumour, or randomised words
                     which don't look even slightly believable.
                     Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                      tend to repeat predefined chunks as necessary.</p>
                    <img src={quotes} alt="blog quotes"/>
                </Col>
                <Col span={6} style={{marginTop: '60px'}}>
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
                    style: { background: '#ECDFD7',borderRadius: '10px', height: '60px', border: 'none'}
                }}


                />

                <div style={{marginTop: '30px', marginLeft: '30px'}}>
                <h1 className="blogHeader">Latest News</h1>
                <h1 className="blogHeader">Prime Minister in favour of  naturopathy!</h1>
                <p style={{float: 'right'}}>06/02/2020</p>
                <br></br>
                <hr style={{height:'2px', background: '#CDA274'}}/>
                </div>
                <div style={{marginTop: '30px', marginLeft: '30px'}}>
                <h1 className="blogHeader">Latest News</h1>
                <h1 className="blogHeader">5 Asanas to build a strong body.</h1>
                <p style={{float: 'right'}}>06/02/2020</p>
                <br></br>
                <hr style={{height:'2px', background: '#CDA274'}}/>
                </div>
                <div style={{marginTop: '30px', marginLeft: '30px'}}>
                <h1 className="blogHeader">Latest News</h1>
                <h1 className="blogHeader">Best hydrotherapy practices.</h1>
                <p style={{float: 'right'}}>06/02/2020</p>
                <br></br>
                <hr style={{height:'2px', background: '#CDA274'}}/>
                </div>
               
                <div style={{margin: '30px', background: '#ECDFD7', borderRadius: '30px', padding: '30px'}}>
                        <h1 className="blogHeader">
                        Categories
                        </h1>
                        <p className="firsttext" style={{textAlign: 'left', color: '#4D5053', borderBottom: '1px solid', borderBottomColor: '#CDA274',  margin: '10px'}}>
                        Yoga

                        </p>
                        <p className="firsttext" style={{textAlign: 'left', color: '#4D5053', borderBottom: '1px solid', borderBottomColor: '#CDA274',  margin: '10px'}}>
                        Naturopathy

                        </p>
                        <p className="firsttext" style={{textAlign: 'left', color: '#4D5053', borderBottom: '1px solid', borderBottomColor: '#CDA274',  margin: '10px'}}>
                        Acupressure

                        </p>
                        <p className="firsttext" style={{textAlign: 'left', color: '#4D5053', borderBottom: '1px solid', borderBottomColor: '#CDA274',  margin: '10px'}}>
                        Hydrotheraphy

                        </p>
                        <p className="firsttext" style={{textAlign: 'left', color: '#4D5053', borderBottom: '1px solid', borderBottomColor: '#CDA274', margin: '10px'}}>
                        Aromatherapy
                        </p>

                    </div>
                    <div style={{margin: '30px', borderRadius: '30px', padding: '30px'}}>
                        <h1 className="blogHeader">
                            Tags
                            </h1>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <Button className='firsttext' style={{margin: '10px', background: '#292F36', color: '#F6F5EC', paddingLeft: '10px', paddingRight: '10px'}}> {articles?.tags} </Button>
                                 </div>
                            </div>
                </Col>
                <Col span={4}></Col>
            </Row>
            
            <Row style={{marginTop: '30px'}}>
                <Col span={4}></Col>
                <Col span={10}>
                    <h1 className="firstheaders">Design sprints are great</h1>
                   
                 <p className="firsttext" style={{textAlign: 'left'}}> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in
                 Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have 
                 suffered.Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have suffered.
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have suffered.
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have suffered.
                   </p>
                   <img style={{marginTop: '30px', borderRadius: '30px'}} src={blogmeditate} alt="blog detail"/>
                   <p className="firsttext" style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.
                   posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                   </p>
                </Col>
                <Col span={6}> 
              
                </Col>
                <Col span={4}></Col>
            </Row>
            <Row style={{marginTop: '150px', marginBottom: '150px'}}>
               
                <Col span={6}>
                </Col>
                
                    <Col span={8}>
                    <div style={{width: '100%', marginBottom: '100px'}}> 
                <h1 className="firstheaders" style={{margin: 'auto', textAlign: 'left', width: '100%'}}>
                Leave a Reply
                    </h1>
                </div>
                    <div style={{width: '100%', display: "flex", marginBottom: '30px'}}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Name'/>
                        
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Email'/>
                    
                        </div>
                        
                        <div style={{width: '100%', display: "flex"}}>
                        <Input style={{border: "none", borderBottom: '1px solid', marginRight: "5px"}} placeholder='Website'/>
                        <Input style={{border: "none", borderBottom: '1px solid', marginLeft: "5px"}} placeholder='Phone'/>
                    
                        </div>
                        <div style={{marginTop: "30px"}}>
                        <TextArea style={{ border: "none",borderBottom: '1px solid ', }} placeholder='Hello I would like have a consultation on...'/>          
                        </div>   
                        <div style={{marginTop: "50px"}}>
                        <p style={{display: 'block'}}> <Checkbox/>Save my name, email, and website in this browser for the next time I comment.</p>
                        <Button style={{background: '#292F36', marginTop: '30px', fontSize: '18x', color: 'white'}}>Send Now <ArrowRightOutlined style={{color: '#CDA274', marginLeft: "10px"}}/> </Button>
                    
                        </div>
                    </Col>
                
                <Col span={6}>
                </Col>
            </Row>
            <Footer/>
        </div>

      )
}
export default Blogdetail;
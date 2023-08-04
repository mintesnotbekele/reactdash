import Header from "./components/header";
import blogbanner from './assets/blogdetailbanner.jpg';
import blogdetail from './assets/blogdetail.png';
import quotes from "./assets/blogquotes.png";
import { Col, Row, Input, Checkbox, Space } from "antd";
import Footer from "./components/footer";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
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
    const [allArticle, setAllarticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sider, seSider] = useState([]);
     useEffect(()=>{

        axios.get(`https://curevive.prophecius.com/api/newsAndarticle/${id}`)
        .then((res)=>{
            setArticles(res.data);
        });
        axios.get('https://curevive.prophecius.com/api/newsAndarticle')
        .then((res)=>{
            let temp  = res.data;
            setAllarticle(res.data);
            temp.forEach((value, idx) => 
            {
             temp[idx].index=idx;
            })
            seSider(temp.filter(item=>{
                return(
                  item.index < 3
                    )}));
        })
     },[]);

     function handleSearch (e){
         console.log()
        seSider(allArticle.filter(item=>{
              return(
              item.title.toLowerCase().includes(e.target.value.toLowerCase()))
          }))
     }
      return(
        <div>
            <Header/>
            <img src={blogbanner} alt="blog detail banner"/>
            <Row style={{marginTop: '200px'}}>
                <Col span={4}></Col>
                <Col xs={24} xl={10}>
                    <h1 className="firstheaders">{articles?.title}</h1>
                    <img style={{margin: 'auto'}} src={`https://curevive.prophecius.com/${articles?.picture}`} alt="blog detail"/>
                    <div style={{margin: '20px'}}>
                    <p >{moment(articles.create_at).fromNow()}  <span style={{float: 'right'}}>Interior / Design / Home / Decore</span></p></div>
                        <p className="firsttext" style={{textAlign: 'left', marginTop: '50px', marginBottom: '50px'}}> 
                        {articles?.description}
                        </p>
                        <div style={{background: '#ECDFD7', borderRadius: '50px'}}>
                        <h1 className="italicHeader" style={{color: '#CDA274'}}> “</h1>
                            <p className="italictext" style={{color: '#CDA274', marginTop: '-100px', paddingBottom: '100px'}}> {articles?.quotes}</p>
                        </div>
                </Col>
                <Col xs={24} xl={6} span={6} style={{marginTop: '60px'}}>
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
                    style: { background: '#ECDFD7',borderRadius: '10px', height: '60px', border: 'none'}
                }}


                />
                {
                    sider.map((item) =>   
                <div style={{marginTop: '30px', marginLeft: '30px'}}>
                <h1 className="blogHeader">{item.title}</h1>
                <h1 className="blogHeader">{item.quotes}</h1>
                <p style={{float: 'right'}}>{moment(item.create_at).fromNow()}</p>
                <br></br>
                <hr style={{height:'2px', background: '#CDA274'}}/>
                </div>
                )}
               
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
                <Col xs={24} xl={10} span={10}>
                <div style={{padding: '20px'}}
                    dangerouslySetInnerHTML={{__html: articles.articlecontent}}
                    />
                </Col>
                <Col span={6}> 
              
                </Col>
                <Col span={4}></Col>
            </Row>
            <Row style={{marginTop: '150px', marginBottom: '150px'}}>
               
                <Col span={6}>
                </Col>
                
                    <Col xs={24} xl={8} style={{padding: '10px'}} span={8}>
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
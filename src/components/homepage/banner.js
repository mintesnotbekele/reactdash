import hands from "../../assets/cr.jpeg";
import { Button} from "antd";
import {ArrowRightOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
const Banner=()=>{
    return(
      //   <div className="bannerbackground" style={{alignItems: 'center',backgroundImage: `url(${hands})`, backgroundSize: '100% 100%', paddingBottom: '100px', marginBottom: '100px'}}>
      //     <div className="bannergap" ></div>
      //     <div style={{width: '100%',}}>
      //     <h1 className="naturopathy">
      //       Naturopathy
      //     </h1>
      //       <h3 style={{fontSize: '40px', color: '#FFFFFFB2', fontFamily: "lato"}}>The natures way of healing.</h3>
      //      </div>
      //      <Button style={{background: '#292F36',marginTop: '30px', fontSize: '18px', color: '#F6F5EC', border: 'none', paddingRight: "60px", paddingLeft: "60px" , paddingTop: '10px', paddingBottom: '40px', borderRadius: '50px'}}> <Link style={{color: '#F6F5EC',}} to="about"> About</Link> <span> <ArrowRightOutlined style={{color: '#CDA274', width: '50px',fontSize: '25px'}}/></span></Button>
      // </div>
      <header className="" style={{height: '800px'}}>
      <div className="page-header min-vh-50 border-radius-xl py-9" style={{backgroundImage: `url(${hands})`,height: '800px', marginTop: '-90px'}}>
          <span className="mask bg-gradient-dark opacity-7"></span>
          <div className="container h-100" style={{height: '800px'}}>
              <div className="row">
                  <div className="col-lg-5 mt-auto justify-content-bottom my-auto">
                      <h5 className="text-gradient text-warning fadeIn1 fadeInBottom text-warning mb-0 mt-8 font-weight-bolder"></h5>
                      <h1 className="text-white fadeIn2 fadeInBottom mb-4 display-4 font-weight-bolder" style={{textAlign: 'left'}} spellcheck="false">Naturopathy</h1>
                      <p style={{color: 'white' , textAlign: 'left'}}>Nurturing Wellness Naturally -  Embrace Your Inner Balance with Curevive's Holistic Naturopathy</p>
                      <a href="/about" className="btn btn-default" style={{background: '#292F36', float: 'left', marginTop: '20px'}}>ABOUT</a>
                  </div>
              </div>
          </div>
      </div>
  </header>
    )
}
export default Banner;
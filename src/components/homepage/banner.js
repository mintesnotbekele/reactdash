import hands from "../../assets/cr.jpeg";
import { Button} from "antd";
import {ArrowRightOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
const Banner=()=>{
    return(
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
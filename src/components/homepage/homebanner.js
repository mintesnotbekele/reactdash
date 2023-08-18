import hands from "../../assets/cr.jpeg";
import { Button} from "antd";
import {ArrowRightOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
import backVideo from "../../assets/backvideo.mp4";
import '../../css/blurback.css'
const HomeBanner=()=>{
    return(
        <div style={{height: '900px'}}>
      <header className="" style={{height: '500px'}}>
        <div>
        <video src={backVideo} style={{marginTop: '-280px'}} height="400" autoPlay muted loop/>
        {/* <span className="mask bg-gradient-dark opacity-7" style={{height: '900px'}}></span>    */}
        </div>
  </header>
      <div className="container h-100" style={{height: '800px', marginTop: '-300px'}}>
      <div className="row">
     
          <div className="col-lg-5 mt-auto justify-content-bottom mx-2 my-auto">
          <div class="container1 mt-10 px-5 pb-20" >
              <h5 className="text-gradient text-warning fadeIn1 fadeInBottom text-warning mb-0 mt-2 font-weight-bolder"></h5>
              <h1 className="fadeIn2 fadeInBottom mb-4 display-4 font-weight-bolder" style={{textAlign: 'left', color: 'black'}} spellcheck="false">Naturopathy</h1>
              <p style={{color: 'black' , textAlign: 'left'}}>Nurturing Wellness Naturally -  Embrace Your Inner Balance with Curevive's Holistic Naturopathy</p>
              <a href="/about" className="btn btn-default mb-10" style={{background: '#292F36', float: 'left', marginTop: '20px', color: 'white'}}>ABOUT</a>
          </div>
          </div>
      </div>
  </div>
  </div>
    )
}
export default HomeBanner;
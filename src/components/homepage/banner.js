import hands from "../../assets/homebanner.jpg";
import blurback from "../../assets/blurrybackground.png";
import { Button} from "antd";
import {ArrowRightOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
const Banner=()=>{
    return(
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
      
        <div style={{alignItems: 'center', height: "800px", backgroundImage: `url(${hands})`, backgroundSize: '100% 100%', marginBottom: '100px'}}>
          <div style={{marginTop: '50px',height: '550px'}}></div>
          <div style={{width: '100%',}}>
          <h1 style={{fontSize: '120px' , fontFamily: 'Playfair Display'}}>
          Naturopathy
          </h1>
            <h3 style={{fontSize: '40px', color: '#FFFFFFB2', fontFamily: "lato"}}>The natures way of healing.</h3>
           </div>
           <Button style={{background: '#292F36',marginTop: '30px', fontSize: '18px', color: '#F6F5EC', border: 'none', paddingRight: "60px", paddingLeft: "60px" , paddingTop: '10px', paddingBottom: '40px', borderRadius: '50px'}}> <Link style={{color: '#F6F5EC',}} to="about"> About</Link> <span> <ArrowRightOutlined style={{color: '#CDA274', width: '50px',fontSize: '25px'}}/></span></Button>
      </div>

      </div>
    )
}
export default Banner;
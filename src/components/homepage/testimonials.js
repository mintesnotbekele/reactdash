import { Splide, SplideSlide } from '@splidejs/react-splide';
import {Row, Col} from 'antd';
import avatar from "../../assets/avatar.png";

const Testimonials=()=>{

    const options = {
        type   : 'loop',
        focus  : 'center',
        perPage: 3,
        perMove: 1,
      };

      return(
        <Row style={{marginTop: '300px'}}>
         <Col span={4} ></Col>
                 <Col style={{background: '#ECDFD7', borderRadius: '20px'}} span={16}>
                <h1 style={{fontSize: '50px', color: '#292F36', fontFamily: 'DM Serif Display'}}>
                What the People Think About Us
                </h1>
                <Row>
                    <Col span={24}>
                <Splide options={options}>
                        <SplideSlide>
                        <div style={{background: '#F6F5EC', borderRadius: '20px', margin: '20px', padding: '30px'}}>

                        <img src={avatar}></img>
                        <p style={{fontSize: '22px',fontFamily: 'josh', textAlign: 'left'}}>1Lorem Ipsum is simply dummy 
                                text of the typesetting industry. 
                                Ipsum has been.</p>
                                        </div>
                        
                    </SplideSlide>
                    <SplideSlide>
                            <div style={{background: '#F6F5EC', borderRadius: '20px', margin: '20px', padding: '30px'}}>
                            <img src={avatar}></img>
                            <p style={{fontSize: '22px', textAlign: 'left', fontFamily: 'josh'}}>2Lorem Ipsum is simply dummy 
                            Lorem Ipsum is simply dummy 
                                text of the typesetting industry. 
                                Ipsum has been scrambled it 
                                to make a type book.</p>
                                            </div>
                    </SplideSlide>
                    <SplideSlide>
                            <div style={{background: '#F6F5EC', borderRadius: '20px', margin: '20px', padding: '30px'}}>

                            <img src={avatar}></img>
                            <p style={{fontSize: '22px', fontFamily: 'josh',textAlign: 'left'}}>3Lorem Ipsum is simply dummy 
                                    Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been scrambled.</p>
                                            </div>
                    </SplideSlide>
                    </Splide>
                </Col>         
            </Row>
        </Col>
     </Row>
      )
}
export default Testimonials;
import {Row, Col} from 'antd';
import CountUp from 'react-countup';

const Counter=()=>{
    return(
      <section className="py-5 bg-gradient-dark" style={{background: 'rgba(78, 52, 38, 0.6)'}}>
      <div className="container">
          <div className="row text-center">
              
              <div className="col-lg-3 col-md-6">
                  <div className="info">
                      <h3 className="mt-2 pricingstyle" style={{color: 'white'}}>
                        <CountUp 
                        enableScrollSpy={true}
                        end={parseInt('03',8)} /></h3>
                      <p className="firsttext" style={{color: 'white'}}>Years of Experience</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="info">
                      <h3 className="mt-2 pricingstyle" style={{color: 'white'}}>
                        <CountUp 
                        enableScrollSpy={true}
                        end={37} />
                        </h3>
                      <p className="firsttext" style={{color: 'white'}}>Success Stories</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="info">
                      <h3 className="mt-2 pricingstyle" style={{color: 'white'}}>
                        <CountUp
                        enableScrollSpy={true}
                        end={32} /></h3>
                      <p className="firsttext" style={{color: 'white'}}>Active Clients</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="info">
                      <h3 className="mt-2 pricingstyle" style={{color: 'white'}}>
                        <CountUp
                          enableScrollSpy={true}
                        end={69} /></h3>
                      <p className="firsttext" style={{color: 'white'}}>Happy Customers</p>
                  </div>
              </div>
          </div>
      </div>
  </section> 
      )
}
export default Counter;
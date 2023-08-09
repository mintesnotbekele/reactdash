import {Row, Col} from 'antd';
const Counter=()=>{
    return(
      <section className="py-5 bg-gradient-dark" style={{background: '#ECDFD7'}}>
      <div className="container">
          <div className="row text-center">
              <div className="col-lg-3">
                  <div className="info">
                      <h3 className="mt-2 pricin" style={{color: '#CDA274'}}>03</h3>
                      <p className="firsttext" style={{color: '#4D5053'}}>Years of Experience</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="info">
                      <h3 className="mt-2 pricingstyle" style={{color: '#CDA274'}}>37</h3>
                      <p className="firsttext" style={{color: '#4D5053'}}>Success Stories</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="info">
                      <h3 className="mt-2 pricingstyle" style={{color: '#CDA274'}}>32</h3>
                      <p className="firsttext" style={{color: '#4D5053'}}>Active Clients</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="info">
                      <h3 className="mt-2 pricingstyle" style={{color: '#CDA274'}}>69</h3>
                      <p className="firsttext" style={{color: '#4D5053'}}>Happy Customers</p>
                  </div>
              </div>
          </div>
      </div>
  </section> 
      )
}
export default Counter;
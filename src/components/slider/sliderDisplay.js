import { Height } from "@mui/icons-material";
import React, { useState } from "react";


function DisplaySlider(props) {


  return (
    <div style={{width: '100%'}}>
          <section className="py-4 mt-3 position-relative">
        <div className="container">
            <div className="row">
                <div className="col-6 pb-3">
                    <h3 style={{fontWeight: '700', fontSize: '41px'}}>Your Journey With us</h3>
                </div>
                <div className=".d-sm-none .d-md-block"> 
                <a style={{float: 'left'}} className=".d-sm-none .d-md-block carousel-control-prev position-relative d-inline-block btn py-2 px-2 w-10 bg-white border border-dark text-dark" href="#carousel-testimonials" role="button" data-bs-slide="prev"> 
                <i className="fas fa-chevron-left" aria-hidden="true"></i> 
                <span className="sr-only">Previous</span> </a> 
                <a style={{float: 'right'}} className="carousel-control-next position-relative d-inline-block btn py-2 px-2 w-10 bg-white border border-dark text-dark" href="#carousel-testimonials" role="button" data-bs-slide="next">
                   <i className="fas fa-chevron-right" aria-hidden="true"></i> <span className="sr-only">Next</span> 
                   </a>
                    </div>
            </div>
        </div>
        <div id="carousel-testimonials" className="carousel slide carousel-team mt-4">
            <div className="carousel-inner " >
                <div className="carousel-item w-75" >
                    <div className="container">
                        <div className="card shadow-lg">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className=""> <img className="w-100 border-radius-md" src="https://images.unsplash.com/photo-1506261423908-ea2559c1f24c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0ZXJmYWxsfGVufDB8MHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="First slide"/> </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    <div className="container">
                        <div className="card shadow-lg mb-5">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className=""> <img className="w-100 border-radius-md" src="https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" alt="Second slide"/> </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
export default DisplaySlider;
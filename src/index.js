import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/common.css';
import App from './App';
import About from './about';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Treatment from './treatments';
import Diseases from './diseases';
import EcommerceCapsule from './ecommercecapsule';
import EcommerceHerbal from './ecommerceherbal';
import DiseasesWeCure from './diseseswecure';
import TreatmentHome from './treatmentehome';
import Book from './book';
import Articles from './articles';
import Blogdetail from './blogdetail';
import Bronchitis from './Bronchitisdetail';
import Diabetes from './diabetesdetail';
import EcommerceHome from './ecommercehome';
import Login from './Auth/login';
import Register from './Auth/register';
import Slider from './components/slider/sliderDisplay';
import Forums from './forums';
import ForumDetail from './forumdetail';
import './App.css';
import EarnWithUs from './earnwithus';
import ForumsThreads from './threads';
import ForumsReplies from './replies';
import Affiliates from './affiliates'; 
import Webinars from './webinars';
import DoctorPartner from './doctorpartner';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div style={{background: '#F6F5EC'}}>
    <Routes>
                        <Route path="/" element={ <App />}>
                        </Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/treatment" element={<Treatment />}></Route>
                        <Route path="/cureddisease" element={<DiseasesWeCure/>}></Route>
                        <Route path="/diseases/:id" element={<Diseases/>}></Route>
                        <Route path="/ecommercecapsule" element={<EcommerceCapsule/>}></Route>
                        <Route path="/ecommerceherbal" element={<EcommerceHerbal/>}></Route>
                        <Route path="/ecommercehome" element={<EcommerceHome/>}></Route>    
                        <Route path="/treatmentHome" element={<TreatmentHome/>}></Route>
                        <Route path="/book" element={<Book/>}></Route>
                        <Route path="/blog" element={<Articles/>}></Route>
                        <Route path="/blogdetail/:id" element={<Blogdetail/>}></Route>
                        <Route path="/bronchitis" element={<Bronchitis/>}></Route>
                        <Route path="/ecommerce/:id" element={<Diabetes/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/register" element={<Register/>}></Route>
                        <Route path="/slide" element={<Slider/>}></Route>  
                        <Route path="/forums" element={<Forums/>}></Route>
                        <Route path="/earnwithus" element={<EarnWithUs/>}></Route>
                        <Route path="/webinars" element={<Webinars/>}></Route>
                        <Route path="/affiliates" element={<Affiliates/>}></Route>
                        <Route path="/doctorpartners" element={<DoctorPartner/>}></Route>
                        <Route path="/forums/:id" element={<ForumDetail/>}></Route>
                        <Route path="/threads/:id" element={<ForumsThreads/>}></Route>
                        <Route path="/replies/:id/:title"  element={<ForumsReplies/>}></Route>
                    </Routes>
                  </div>
        </BrowserRouter>
      </React.StrictMode>,
  document.getElementById('root')

);



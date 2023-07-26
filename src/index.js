import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/common.css';
import App from './App';
import About from './about';
import reportWebVitals from './reportWebVitals';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div style={{background: '#F6F5EC'}}>
    <Routes>
                        <Route path="/" element={ <App />}>
                        </Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/treatment" element={<Treatment />}></Route>
                        <Route path="/cureddisease" element={<DiseasesWeCure/>}></Route>
                        <Route path="/diseases" element={<Diseases/>}></Route>
                        <Route path="/ecommercecapsule" element={<EcommerceCapsule/>}></Route>
                        <Route path="/ecommerceherbal" element={<EcommerceHerbal/>}></Route>
                        <Route path="/ecommercehome" element={<EcommerceHome/>}></Route>
                       
                        <Route path="/treatmentHome" element={<TreatmentHome/>}></Route>
                        <Route path="/book" element={<Book/>}></Route>
                        <Route path="/blog" element={<Articles/>}></Route>
                        <Route path="/blogdetail" element={<Blogdetail/>}></Route>
                        <Route path="/bronchitis" element={<Bronchitis/>}></Route>
                        <Route path="/diabetes" element={<Diabetes/>}></Route>
                    </Routes>
                    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

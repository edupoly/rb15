import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Courses from './Courses';
import CourseDetails from './CourseDetails';
import Products from './Products';
import ProductDetails from './ProductDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='aboutus' element={<Aboutus />} />
        <Route path='contactus' element={<Contactus/>}/>
        <Route path='courses' element={<Courses/>} >
          <Route path='coursedetails/:coursename' element={<CourseDetails/>} />
        </Route>
        <Route path='products' element={<Products></Products>}>
          <Route path="productdetails" element={<ProductDetails></ProductDetails>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

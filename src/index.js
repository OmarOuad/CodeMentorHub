import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Discussions from "./Discussions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
    <Router>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/courses' element={<App/>}/>
            <Route path='/discussions' element={<Discussions/>}/>
       </Routes>
    </Router>
 

);

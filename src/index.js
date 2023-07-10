import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Discussions from "./Discussions";
import Ourteams from "./Ourteams"
import Test from "./Test"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
    <Router>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/CodeMentorHub' element={<Home/>}/>
            <Route path='/CodeMentorHub/home' element={<Home/>}/>
            <Route path='/CodeMentorHub/courses' element={<App/>}/>
            <Route path='/CodeMentorHub/discussions' element={<Discussions/>}/>
            <Route path='/CodeMentorHub/ourteams' element={<Ourteams/>}/>
            <Route path='/CodeMentorHub/tests' element={<Test/>}/>


       </Routes>
    </Router>
 

);

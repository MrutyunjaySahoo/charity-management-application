
import React from "react";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import DonateHero from "./Pages/DonateHero";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Components/User/Dashboard";
import Contact from "./Pages/Contact";
// import AboutPage from "./Pages/AboutPage"; // 
// import ContactPage from "./Pages/ContactPage"; 
// import LoginPage from "./Pages/LoginPage"; 

function App() {
  return (

    <div>
     
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/donate" element={<DonateHero />} /> 
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
         <Route path="/login" element={<Login/>} /> 
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
<Footer/>

    
    </div>
   
  );
}

export default App;

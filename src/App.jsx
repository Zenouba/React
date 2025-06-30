import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



// import Navbar from "./components/navbar";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Faqs from "./pages/faqs";
import Contact from "./pages/contacs";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Step from "./pages/step";
import Site from "./pages/site";


export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Faqs" element={<Faqs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/step" element={<Step />} />
        <Route path="/site" element={<Site/>} />
        </Routes>
    </Router>
  );
}



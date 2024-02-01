import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from "./components/Landing";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Meet from "./components/Meet";

export default function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Landing/></>}/>
        
        
      </Routes>
      </BrowserRouter>
    </>
  )
}


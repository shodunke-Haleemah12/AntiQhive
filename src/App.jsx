import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Works from "./components/Works";
import CustomCursor from "./components/CustomCursor";
import Training from './components/Training';
function App() {
 useEffect(() => {
  AOS.init({
    duration: 1000,
    offset: 120,
    once: false,   // 👈 allow replay
    mirror: true,  // 👈 animate when scrolling up
  });
}, []);
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <CustomCursor/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Works" element={<Works />}></Route>
          <Route path="/Aboutus" element={<Aboutus />}></Route>
          <Route path="/Training" element={<Training />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

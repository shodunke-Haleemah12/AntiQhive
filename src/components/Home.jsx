import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Work from "./Work";
import Who from "./Who";
import Create from "./Create";
import What from "./What";
import Footer from "./Footer";
import Ready from "./Ready";
import Testimonial from "./Testimonial";
import WorkProcess from "./WorkProcess";

const Home = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Work />
      <Who />
      <What />
      <Create />
      <WorkProcess />
      <Testimonial />
      <Ready />
      <Footer />
     
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "./Navbar";
import WorkUi from "./WorkUi";
import Grow from "./Grow";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Work from "./Work";

const Works = () => {
  return (
    <div>
      <Navbar />
      <WorkUi />
      <Work />
      <Grow />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Works;

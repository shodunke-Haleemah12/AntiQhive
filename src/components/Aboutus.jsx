import React from "react";
import Navbar from "./Navbar";
import Aboutgrid from "./Aboutgrid";
import Team from "./Team";
import Value from "./Value";
import Ready from "./Ready";
import Footer from "./Footer";
import Create from "./Create";
import WorkProcessPremiumFinal from "./WorkProcess";

const Aboutus = () => {
  return (
    <div>
      <div className="bg-black text-[#ffffff]">
        <Navbar />
        <Aboutgrid />
        <div className="flex flex-col gap-6 items-center justify-center pt-24 pb-38">
          <svg
            className="absolute top-290 left-0"
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="531"
            viewBox="0 0 53 531"
            fill="none"
          >
            <path
              d="M-405.272 186.353C-381.393 228.272 -402.245 282.23 -376.304 347.368C-368.96 365.811 -365.462 376.626 -355.166 393.597C-305.17 476.003 -232.405 521.937 -136.344 529.148C-69.7301 534.148 9.19092 533.543 38.2442 467.249C67.6032 400.257 51.9719 315.214 1.83911 241.2C-53.3557 159.713 -101.519 102.416 -190.756 45.3169C-238.513 14.7592 -333.943 -27.7495 -388.831 24.9451C-430.618 65.0625 -429.15 144.434 -405.272 186.353Z"
              fill="#F4C20D"
            />
          </svg>
          <div data-aos="fade-up" data-aos-duration="2000">
            <h1 className="text-8xl font-bold tracking-tight">Who we are</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className="text-2xl text-center text-[#ffffff]">
              AntiQhive is a digital creative branding agency that combines
              creativity, innovation, technology and <br /> industry knowledge
              to help businesses create a unique brand identity that stands out
              and <br /> captivates the right audience. We help to nurture every
              business imaginations and give life to <br /> ideas that can
              transform brands into works of art.
            </p>
          </div>
        </div>
        <Team />
        <Value />
        <Create />
        <WorkProcessPremiumFinal />
        <Ready />
        <Footer />
      </div>
    </div>
  );
};

export default Aboutus;

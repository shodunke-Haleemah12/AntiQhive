import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import bgImage from "../assets/fina.webp"; // replace with your image path
import { NavLink } from "react-router-dom";

const WorkTogether = () => {
  return (
    <div className="relative ">
      {/* Background Image with reduced brightness */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(50%)", // reduce image brightness
          zIndex: -1, // behind the content
        }}
      ></div>

      {/* Content */}
      <div className="flex justify-between py-24 px-20 relative z-10 ">
        <div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <h1 className="text-7xl text-white font-bold tracking-wider leading-24">
              Let’s Work Together! <br />
              Contact us
            </h1>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <NavLink
            to="/Contact"
            className="flex flex-col items-center gap-3 w-40 h-40 rounded-full justify-center bg-amber-300 hover:bg-amber-50"
            href=""
          >
            <FiArrowUpRight className="text-black text-7xl" />
            <p className="text-black text-base font-bold">Get In Touch</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;

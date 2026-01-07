import React from "react";
import fina from "../assets/finance77.jpeg";

const ServicesText = () => {
  return (
    <div className="relative">
      {/* Background Image with reduced brightness */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${fina})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(30%)", // Reduce brightness here
          zIndex: -1, // Send it behind content
        }}
      ></div>

      {/* Content */}
      <div className="flex flex-col gap-14 items-center justify-center pt-20 pb-20 text-white relative z-10">
        <div className="flex flex-col items-center gap-5">
          <div data-aos="fade-up" data-aos-duration="2000">
            <h1 className="text-8xl" style={{ fontFamily: "IBM Plex Sans" }}>
              Our Services
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div
              className="h-2 w-40 rounded-md animate-gradient"
              style={{
                background:
                  "linear-gradient(90deg, #f59e0b, #fbbf24, #fcd34d, #f59e0b)",
                backgroundSize: "300% 100%",
              }}
            ></div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <p className="text-2xl text-center ">
            Explore our creative services designed to transform your brand to{" "}
            <br />
            make a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesText;

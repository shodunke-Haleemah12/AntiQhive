import React from "react";
import Navbar from "./Navbar";

const Hello = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="flex flex-col items-center justify-center bg-black ">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-4xl text-[#f4c20d] pb-12 pt-10 font-bold gold-text">
            SAY HELLO
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-7xl  pb-10 font-bold text-[#ffffff]">
            Let’s talk about your project
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="relative w-96 h-3 overflow-hidden rounded">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #2e77dd, #004ea8, #f9e547, #a100ff, #5d0878, #fc7417, #fdd821)",
                backgroundSize: "200% auto",
                animation: "shimmer 10s linear infinite",
                boxShadow: "0 0 10px rgba(255,255,255,0.3)", // subtle glow
              }}
            ></div>

            <style jsx>{`
              @keyframes shimmer {
                0% {
                  background-position: 200% 0;
                }
                100% {
                  background-position: -200% 0;
                }
              }
            `}</style>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <h3 className="text-2xl text-center pb-16 pt-16 text-[#ffffff]">
            Get in touch to chat about how we can help you build a better B2B
            brand. Don’t be shy. We’re <br /> great listeners, and even better
            problem-solvers.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hello;

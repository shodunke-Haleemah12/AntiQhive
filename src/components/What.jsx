import React from "react";
import man from "../assets/man.jpg";
import { FaGem } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
const What = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-18 py-14 bg-black">
        <h1 className=" text-6xl  flex items-center font-light tracking-widest text-[#f4c20d]">
          WHAT{" "}
          <span className=" text-[#ffffff] text-6xl items-center tracking-widest font-bold">
            {" "}
            WE DO
          </span>
        </h1>
        <div className="flex items-center justify-center gap-16 overflow-hidden">
          <div className="max-w-xl">
            <div data-aos="fade-right" data-aos-duration="2000">
              <div className="flex flex-col gap-12 text-white">
                <h3 className="font-bold text-3xl">MAKING IT BRILLIANT</h3>

                <p className="text-2xl leading-10">
                  At [Antiqhive], we help businesses stand out, connect,
                  <br />
                  and grow through powerful digital experiences.
                  <br />
                  We combine creativity, strategy, and technology
                  <br />
                  to build brands and websites that not only look
                  <br />
                  amazing—but also deliver real results.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[40%] max-w-md shrink-0">
            <div data-aos="fade-left" data-aos-duration="2000">
              <img src={man} alt="" className="w-full block object-contain" />
            </div>
          </div>
        </div>
        <div className="flex gap-8 ">
          <div className=" max-w-sm">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="transform-gpu"
            >
              <div
                className="group relative bg-[#131313] pt-10 pb-10 px-12 text-center max-w-sm 
  overflow-hidden border border-[#1f1f1f]"
              >
                {/* SLIDING BACKGROUND */}
                <div
                  className="absolute inset-0 bg-[#f4c20d] 
    translate-x-[-101%] 
    group-hover:translate-x-0 
    transition-transform duration-500 ease-out"
                ></div>

                {/* CONTENT (STAYS ON TOP) */}
                <div className="relative z-10 transition-colors duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-12">
                    <FaGem className="text-[#f4c20d] w-12 h-12 transition-colors duration-300 group-hover:text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-2xl font-bold tracking-widest leading-10 transition-colors duration-300 group-hover:text-black">
                    BRANDING AND <br /> IDENTITY
                  </h3>

                  {/* Description */}
                  <p className="text-[#f4c20d] mt-4 leading-relaxed transition-colors duration-300 group-hover:text-black">
                    we craft a brand system that reflects who you are and
                    communicates your value at a glance. Our goal is simple:
                    make your brand unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div
              className="group relative bg-[#131313] pt-10 pb-10 px-12 text-center max-w-sm 
  overflow-hidden border border-[#1f1f1f]"
            >
              {/* SLIDING BACKGROUND */}
              <div
                className="absolute inset-0 bg-[#f4c20d] 
    translate-x-[-101%] 
    group-hover:translate-x-0 
    transition-transform duration-500 ease-out"
              ></div>

              {/* CONTENT */}
              <div className="relative z-10 transition-colors duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-12">
                  <MdOutlineBrandingWatermark className="text-[#f4c20d] w-12 h-12 transition-colors duration-300 group-hover:text-black" />
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-bold tracking-widest leading-10 transition-colors duration-300 group-hover:text-black">
                  INTERFACES AND <br /> INTERACTIVE
                </h3>

                {/* Description */}
                <p className="text-[#f4c20d] mt-4 leading-relaxed transition-colors duration-300 group-hover:text-black">
                  Our website is often the first impression people have of your
                  business. We design visually stunning, user-friendly websites
                  that are tailored to your audience.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <div
              className="group relative bg-[#131313] pt-10 pb-10 px-12 text-center max-w-sm 
  overflow-hidden border border-[#1f1f1f]"
            >
              {/* SLIDING BACKGROUND */}
              <div
                className="absolute inset-0 bg-[#f4c20d] 
    translate-x-[-101%] 
    group-hover:translate-x-0 
    transition-transform duration-500 ease-out"
              ></div>

              {/* CONTENT */}
              <div className="relative z-10 transition-colors duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-12">
                  <IoMdSettings className="text-[#f4c20d] w-12 h-12 transition-colors duration-300 group-hover:text-black" />
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-bold tracking-widest leading-10 transition-colors duration-300 group-hover:text-black">
                  DEVELOPMENT <br /> CMS
                </h3>

                {/* Description */}
                <p className="text-[#f4c20d] mt-4 leading-relaxed transition-colors duration-300 group-hover:text-black">
                  We turn beautiful concepts into fast, responsive, and
                  functional websites. Whether it’s a simple portfolio or a
                  complex business platform, we build it to perform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[220px] h-[60px] rounded-[50px] bg-[#131313] overflow-hidden">
          {/* Rolling border */}
          <div
            className="absolute top-1/2 left-1/2 aspect-square w-full "
            style={{
              background:
                "conic-gradient(transparent 270deg, #f4c20d, transparent)",
              transform: "translate(-50%, -50%) scale(1.4)",
              animation: "rotate-border 3s linear infinite",
            }}
          ></div>

          {/* Inner content area */}
          <NavLink to="/Contact">
            <button
              className="absolute inset-[1.5px] rounded-[50px] bg-[#131313] text-[#f4c20d] font-normal text-2xl flex items-center justify-center "
              style={{ fontFamily: "Nunito" }}
            >
              Get Started Today
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default What;

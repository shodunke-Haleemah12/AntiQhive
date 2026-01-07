import React from "react";
import { IoIosSend } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { TbMail } from "react-icons/tb";
import blockss from "../assets/blockss.jpg";
import { NavLink } from "react-router-dom";
const Grow = () => {
  return (
    <div>
      <div className="py-10 bg-black">
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${blockss})`,
          }}
        >
          {/* Overlay (control color here) */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex gap-26 pt-20 pb-20 justify-center text-white">
            <div data-aos="fade-right" data-aos-duration="2000">
              <div className="flex flex-col gap-8">
                <h1 className="text-4xl">
                  <span className="text-[#f4c20d]">Grow your business </span>
                  with our <br /> robust digital solutions.
                </h1>

                <p className="text-base">
                  We consistently exceed our clients' expectations by providing
                  high <br />
                  quality digital solutions. Get in touch with us get started!
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
              <div className="flex flex-col gap-8 items-center">
                <div className="flex gap-16">
                  <div className="flex gap-3 items-center">
                    <div className="w-9 h-9 bg-[#f4c20d] text-white flex items-center justify-center rounded-full hover:bg-white hover:text-[#f4c20d]">
                      <IoIosCall className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl">+234 8099844740</h2>
                      <h4 className="font-semibold">Talk to an Expert</h4>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="w-9 h-9 bg-[#f4c20d] text-white flex items-center justify-center rounded-full hover:bg-white hover:text-[#f4c20d]">
                      <TbMail className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl">info@antiqhive.com</h2>
                      <h4 className="font-semibold">EMAIL US</h4>
                    </div>
                  </div>
                </div>

                <NavLink to="/Contact">
                  <button className="flex items-center gap-3 text-white text-xl px-40 py-2 bg-[#f4c20d] cursor-pointer hover:bg-white hover:text-[#f4c20d]">
                    <IoIosSend className="text-2xl" />
                    Get Started
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;

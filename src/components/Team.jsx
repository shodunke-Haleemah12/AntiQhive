import React from "react";
import c from "../assets/Rectangle 12.png";
import co from "../assets/Rectangle 13.png";
import coo from "../assets/Rectangle 14.png";
const Team = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 pt-30 pb-12">
        <div data-aos="fade-right" data-aos-duration="2000">
          <div className="flex gap-2 items-center px-45">
            <span className="w-3 h-3 text-[rgba(244,194,13,0.6)] bg-[rgba(244,194,13,0.6)]"></span>
            <h3 className="text-6xl text-[#f4c20d] font-light">Our Team</h3>
          </div>
        </div>
        <div className="flex gap-8 justify-center pt-12 pb-12">
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex flex-col gap-8">
              <img className="w-82" src={c} alt="" />
              <div className="flex flex-col gap-6">
                <p className="text-xl text-[#f4c20d]">CEO</p>
                <h3 className="text-base">John Kabras</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex flex-col gap-8">
              <img src={co} alt="" />
              <div className="flex flex-col gap-6">
                <p className="text-[#f4c20d] text-xl">COO</p>
                <h3>Philips shene molis</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex flex-col gap-8">
              <img src={coo} alt="" />
              <div className="flex flex-col gap-6">
                <p className="text-[#f4c20d] text-xl">Tech Lead</p>
                <h3>Equarn Shamir Mohomad</h3>
              </div>
            </div>
          </div>
          {/* <div className='flex flex-col gap-8'>
                    <img src={coo} alt="" />
                    <div className='flex flex-col gap-6'>
                        <p>Tech Lead</p>
                        <h3>Equarn Shamir Mohomad</h3>
                    </div>
                </div> */}
          <svg
            className="dotted absolute top-470 left-0"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="531"
            viewBox="0 0 15 531"
            fill="none"
          >
            <path
              d="M-443.272 186.353C-419.393 228.272 -440.245 282.23 -414.304 347.368C-406.96 365.811 -403.462 376.626 -393.166 393.597C-343.17 476.003 -270.405 521.937 -174.344 529.148C-107.73 534.148 -28.8091 533.543 0.244232 467.249C29.6032 400.257 13.9719 315.214 -36.1609 241.2C-91.3557 159.713 -139.519 102.416 -228.756 45.3169C-276.513 14.7592 -371.943 -27.7495 -426.831 24.9451C-468.618 65.0625 -467.15 144.434 -443.272 186.353Z"
              fill="#F4C20D"
            />
          </svg>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default Team;

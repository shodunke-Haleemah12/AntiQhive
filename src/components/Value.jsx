import React from "react";
import pen from "../assets/pen-tool.svg";
import tool from "../assets/user.svg";
import people from "../assets/people.svg";
import { FiPenTool } from "react-icons/fi";
const Value = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 pt-10 pb-20 items-center">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-6xl">Our Values</h1>
        </div>
        <div className="flex gap-7 justify-center">
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex flex-col gap-8 items-center px-14 pt-6 pb-6 rounded-md shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl  group-hover:text-[#f4c20d] group">
              <div className="flex flex-col gap-4 items-center">
                {/* <FiPenTool className=" text-[#f4c20d] w-10 transform transition duration-500 hover:rotate-12 hover:scale-110  group-hover:text-black" /> */}
                <img
                  className="w-10 transform transition duration-500 hover:rotate-12 hover:scale-110 "
                  src={pen}
                  alt=""
                />
                <h3 className="text-xl  group-hover:text-[#f4c20d]">Creativity and Innovation</h3>
              </div>
              <p className="text-base text-center group-hover:text-[#f4c20d]">
                We foster a culture of creativity, where <br /> innovation
                flourishes. We believe in <br /> thinking outside the box,
                pushing <br /> boundaries and exploring new ideas to <br />{" "}
                deliver fresh, captivating solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex flex-col gap-8 items-center px-14 pt-6 pb-6 rounded-md shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl group">
              <div className="flex flex-col gap-4 items-center">
                <img
                  className="w-10 transform transition duration-500 hover:rotate-12 hover:scale-110"
                  src={tool}
                  alt=""
                />
                <h3 className="text-xl group-hover:text-[#f4c20d]">Excellence and Quality</h3>
              </div>
              <p className="text-base text-center group-hover:text-[#f4c20d]">
                We foster a culture of creativity, where <br /> innovation
                flourishes. We believe in <br /> thinking outside the box,
                pushing <br /> boundaries and exploring new ideas to <br />{" "}
                deliver fresh, captivating solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex flex-col gap-8 items-center px-14 pt-6 pb-6 rounded-md shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl group ">
              <div className="flex flex-col gap-4 items-center">
                <img
                  className="w-10 transform transition duration-500 hover:rotate-12 hover:scale-110"
                  src={people}
                  alt=""
                />
                <h3 className="text-xl group-hover:text-[#f4c20d]">Collaboration and Teamwork</h3>
              </div>
              <p className="text-base text-center group-hover:text-[#f4c20d]">
                We foster a culture of creativity, where <br /> innovation
                flourishes. We believe in <br /> thinking outside the box,
                pushing <br /> boundaries and exploring new ideas to <br />{" "}
                deliver fresh, captivating solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;

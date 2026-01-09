import React from "react";
import icon from "../assets/logos.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseStyle =
    "text-xl px-3 py-1.5 border-2 transition duration-300 font-normal rounded";
  const normalStyle = "text-[#ffffff] border-transparent";
  const hoverStyle =
    "hover:bg-black hover:text-[#f4c20d] hover:border-[#f4c20d] hover:rounded-lg";
  const activeStyle = "bg-black text-[#f4c20d] border-[#f4c20d] rounded-lg";

  return (
    <div className="bg-black flex items-center justify-between px-12 pt-3 pb-8">
      <NavLink to="/">
        <img className="w-16" src={icon} alt="" />
      </NavLink>
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle} ${
              !isActive && hoverStyle
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/Aboutus"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle} ${
              !isActive && hoverStyle
            }`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/Works"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle} ${
              !isActive && hoverStyle
            }`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/Services"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle} ${
              !isActive && hoverStyle
            }`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/Training"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle} ${
              !isActive && hoverStyle
            }`
          }
        >
          Training
        </NavLink>

        <NavLink to="/Contact">
          <div className="relative w-[146px] h-[60px] rounded-[50px] bg-[#131313] overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 aspect-square w-full"
              style={{
                background:
                  "conic-gradient(transparent 270deg, #f4c20d, transparent)",
                transform: "translate(-50%, -50%) scale(1.4)",
                animation: "rotate-border 3s linear infinite",
              }}
            ></div>

            <button
              className="absolute inset-[1.5px] rounded-[50px] bg-[#131313] text-[#f4c20d] font-normal text-2xl flex items-center justify-center cursor-pointer"
              style={{ fontFamily: "Nunito" }}
            >
              Contact
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

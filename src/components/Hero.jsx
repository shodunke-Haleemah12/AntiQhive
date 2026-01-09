import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ParticleBackground from "./Particles";

// Function to darken a hex color
const darkenColor = (hex, amount = 20) => {
  let c = hex.replace("#", "");
  if (c.length === 3)
    c = c
      .split("")
      .map((x) => x + x)
      .join("");
  let num = parseInt(c, 16);
  let r = (num >> 16) - amount;
  let g = ((num >> 8) & 0x00ff) - amount;
  let b = (num & 0x0000ff) - amount;
  r = Math.max(Math.min(255, r), 0);
  g = Math.max(Math.min(255, g), 0);
  b = Math.max(Math.min(255, b), 0);
  return `rgb(${r},${g},${b})`;
};

const Hero = () => {
  const [hoverLine, setHoverLine] = useState(null);

  return (
    <div className="relative">
 <div className="">
   {/* <ParticleBackground/> */}
 </div>
    <div className="pt-28 px-10 pb-12 bg-black">
 
      <div className="flex justify-between gap-10">
        {/* Left side: Hero Text + Buttons */}
        <div data-aos="fade-right" data-aos-duration="2000">
          <div className="flex flex-col gap-8">
            <h1
              className="text-7xl font-semibold italic"
              style={{ fontFamily: "Gambetta" }}
            >
              {/* Line 1 */}
              <span
                className="block transition-colors duration-200"
                onMouseEnter={() => setHoverLine(1)}
                onMouseLeave={() => setHoverLine(null)}
                style={{
                  color:
                    hoverLine === 1 ? darkenColor("#ffffff", 85) : "#ffffff",
                }}
              >
                We build{" "}
                <span
                  style={{
                    color:
                      hoverLine === 1 ? darkenColor("#f4c20d", 85) : "#f4c20d",
                    transition: "color 0.2s",
                  }}
                >
                  brands
                </span>
                ,{" "}
                <span
                  style={{
                    color:
                      hoverLine === 1 ? darkenColor("#3b82f6", 85) : "#3b82f6",
                    transition: "color 0.2s",
                  }}
                >
                  websites
                </span>
                ,&
              </span>

              {/* Line 2 */}
              <span
                className="block transition-colors duration-200"
                onMouseEnter={() => setHoverLine(2)}
                onMouseLeave={() => setHoverLine(null)}
                style={{
                  color:
                    hoverLine === 2 ? darkenColor("#ffffff", 85) : "#ffffff",
                }}
              >
                <span
                  style={{
                    color:
                      hoverLine === 2 ? darkenColor("#f4c20d", 85) : "#f4c20d",
                    transition: "color 0.2s",
                  }}
                >
                  apps
                </span>{" "}
                that move you
              </span>

              {/* Line 3 */}
              <span
                className="block transition-colors duration-200"
                onMouseEnter={() => setHoverLine(3)}
                onMouseLeave={() => setHoverLine(null)}
                style={{
                  color:
                    hoverLine === 3 ? darkenColor("#ffffff", 85) : "#ffffff",
                }}
              >
                closer to your vision.
              </span>
            </h1>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-6">
              <button className="text-white px-8 items-center border-2 border-[#f4c20d] bg-[#131313] py-2 flex gap-3 text-2xl rounded-3xl  hover:border-[#f4c20d] hover:border-dashed hover:bg-white-100 hover:text-white transition duration-300">
                <span className="w-3 h-3 bg-[#f4c20d] rounded-md hover:bg-black "></span>
                Spotlight
              </button>

              <button className="text-white text-xl rounded-3xl py-2 px-5 border-2 border-[#f4c20d] bg-[#131313]  hover:border-[#f4c20d] hover:border-dashed hover:bg-white-500 hover:text-white transition duration-300">
                Brand
              </button>

              <NavLink to="/Works">
                <button className="text-white text-xl rounded-3xl border-2 border-[#f4c20d] py-2 px-5 bg-[#131313]  hover:border-[#f4c20d] hover:border-dashed hover:bg-white-500 hover:text-white transition duration-300">
                  Work
                </button>
              </NavLink>

              <button className="text-white text-xl rounded-3xl py-2 px-5 bg-[#131313] border-2 border-[#f4c20d] hover:border-[#f4c20d] hover:border-dashed hover:bg-white-500 hover:text-white transition duration-300">
                Web
              </button>

              <button className="text-white text-xl rounded-3xl py-2 px-5 bg-[#131313] border-2 border-[#f4c20d] hover:border-[#f4c20d] hover:border-dashed hover:bg-white-500 hover:text-white transition duration-300">
                Develpment
              </button>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          {/* Right side: Subtext + Link */}
          <div className="flex flex-col gap-7 text-white">
            <h3 className="text-2xl">
              You're chasing big goals with a <br /> full plate. We're here to
              help.
            </h3>
            <NavLink
              to="/Contact"
              className="text-xl cursor-pointer text-[#f4c20d]"
            >
              Start a Project
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;

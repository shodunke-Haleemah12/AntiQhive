import React from "react";
import Work from "./Work";
import working from "../assets/workings.avif";
const WorkUi = () => {
  return (
    <div>
      <div
        className="relative pt-15 pb-30 bg-cover bg-center"
        style={{
          backgroundImage: `url(${working})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <div data-aos="fade-up" data-aos-duration="2000">
            <h1 className="text-8xl tracking-wider font-bold text-center pt-12 pb-6 text-white">
              Portfolio
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className="text-center text-base text-white">
              A showcase of our commitment to delivering top-tier, innovative
              digital solutions. We <br />
              believe in the power of technology and design to transform
              businesses, catapulting them <br />
              into the future. Our commitment to quality and excellence is
              unparalleled.
            </p>
          </div>
          {/* <Work /> */}
        </div>
      </div>
    </div>
  );
};

export default WorkUi;

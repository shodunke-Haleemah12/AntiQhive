import React from "react";
import grid from "../assets/Grid.png";
import grid1 from "../assets/Grid1.png";
import grid2 from "../assets/Grid2.png";
import grid3 from "../assets/Grid3.png";
import ParticleBackground from "./ParticleBackground";
const Work = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 px-10 py-10 bg-black">
        <ParticleBackground />
        <div className="flex gap-5">
          <img className="w-2/4  " src={grid} alt="" />
          <img className="w-2/4 " src={grid1} alt="" />
        </div>
        <div className="flex gap-5">
          <img className="w-2/4" src={grid3} alt="" />
          <img className="w-2/4" src={grid2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;

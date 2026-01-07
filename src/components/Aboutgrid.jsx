import React, { useEffect } from "react";
import r from "../assets/Rectangle 16.png";
import re from "../assets/Rectangle 17.png";
import rec from "../assets/Rectangle 18.png";
import rect from "../assets/Rectangle 19.png";
import recta from "../assets/Rectangle 18.png";
import rectan from "../assets/Rectangle 19.png";
const Aboutgrid = () => {
  const particles = Array.from({ length: 40 });
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      document.documentElement.style.setProperty("--px", `${x}px`);
      document.documentElement.style.setProperty("--py", `${y}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div>
      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none particles overflow-hidden">
        {particles.map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="relative overflow-hidden w-full">
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="flex flex-col gap-6 items-center justify-center pt-14 pb-16 z-10">
            <h1 className="text-8xl font-bold">About Us</h1>
            <p className="text-2xl text-center">
              Helping businesses create a unique brand identity that stands out{" "}
              <br /> and captivates the right audience
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-10 z-10">
          <div className="flex gap-12 items-end">
            <div data-aos="fade-up" data-aos-duration="2000">
              <img
                className="w-64 h-64 transition-transform duration-500 hover:-translate-y-3"
                src={r}
                alt=""
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img src={re} alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img className="w-64 h-64" src={r} alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img className="w-64 h-64" src={r} alt="" />
            </div>
          </div>
          <div className="flex gap-12">
            <div data-aos="fade-up" data-aos-duration="2000">
              <img src={recta} alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img src={rectan} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutgrid;

import React from "react";
import { Sparkles } from "lucide-react";

const Create = () => {
  const features = [
    {
      title: "Web Design",
      desc: "Distinctive identity & visual storytelling.",
    },
    {
      title: "Brand Design",
      desc: "Modern, responsive & user-centered layouts.",
    },
    { title: "UI / UX", desc: "Premium retail & product experience design." },
    {
      title: "Web Development",
      desc: "Human-centered digital product experiences.",
    },
    {
      title: "Mobile Development",
      desc: "Creative visuals for brands & campaigns.",
    },
    { title: "Packaging", desc: "Logos, kits & guidelines for consistency." },
  ];

  return (
    <div className="bg-black w-full py-28 px-10 flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-center text-5xl font-light text-[#f4c20d] mb-20 tracking-wide">
            Your Vision, Transformed Into Impact
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div key={index}>
              {/* AOS WRAPPER (safe) */}
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay={index * 120}
                className="h-full"
              >
                <div
                  className="
                    group 
                    p-10 
                    border border-white/10 
                    rounded-2xl 
                    backdrop-blur-md 
                    bg-white/5
                    transition-all 
                    duration-300
                    hover:border-[#f4c20d]
                    hover:bg-white/10
                    hover:shadow-[0_0_20px_rgba(244,194,13,0.2)]
                  "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-[#f4c20d] group-hover:scale-110 transition-transform" />
                    <h2 className="text-2xl font-medium text-white">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-[#a3a3a3] text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
            <button
              className="
                px-12 py-4 
                rounded-full 
                border-2 border-[#f4c20d] 
                text-[#f4c20d] 
                text-xl
                hover:bg-[#f4c20d]
                hover:text-black
                transition-all
              "
            >
              Start a New Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

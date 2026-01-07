import React from "react";
import { FiSearch, FiSettings, FiCode, FiCheckCircle } from "react-icons/fi";

const WorkProcessPremiumFinal = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery Call",
      description:
        "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
      icon: <FiSearch className="w-6 h-6 text-white" />,
      bgColor: "bg-gradient-to-r from-teal-400 to-cyan-500",
    },
    {
      id: 2,
      title: "Concept & Strategy",
      description:
        "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype.",
      icon: <FiSettings className="w-6 h-6 text-white" />,
      bgColor: "bg-gradient-to-r from-purple-400 to-indigo-500",
    },
    {
      id: 3,
      title: "Web Design",
      description:
        "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. Every visual element is carefully crafted to ensure clarity and consistency.",
      icon: <FiCode className="w-6 h-6 text-white" />,
      bgColor: "bg-gradient-to-r from-pink-400 to-rose-500",
    },
    {
      id: 4,
      title: "Development",
      description:
        "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration, Our team ensures your website is fully responsive,.",
      icon: <FiCheckCircle className="w-6 h-6 text-white" />,
      bgColor: "bg-gradient-to-r from-green-400 to-lime-500",
    },
  ];

  return (
    <section className="py-28 bg-[#131313] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <div data-aos="fade-up" data-aos-duration="2000">
          <h2 className="text-4xl text-[#f4c20d] pb-12 pt-10 font-bold gold-text">
            Our Work Process
          </h2>
          <div className="w-28 h-1 bg-[#f4c20d] mx-auto mb-8 rounded"></div>
          <p className="text-[#ffffff] mb-20">
            A step-by-step approach that delivers high-quality web design and
            development results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex justify-between items-start md:items-center">
          {/* Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 z-0 overflow-hidden">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="h-1 bg-[#f4c20d] animate-scale-x origin-left"
            ></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center md:w-1/4 z-10"
            >
              {/* AOS WRAPPER (SAFE) */}
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay={index * 150}
                className="flex flex-col items-center"
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full ${step.bgColor}
                    shadow-lg transition duration-500 hover:scale-110
                    hover:shadow-[0_0_20px_#f4c20d]`}
                >
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="absolute -bottom-6 text-[#f4c20d] font-bold text-lg">
                  {index + 1}
                </div>

                {/* Card */}
                <div
                  className="mt-10 p-6 bg-[#131313] border border-[#a3a3a3]
                    rounded-2xl shadow-lg transition duration-500
                    hover:-translate-y-4 hover:shadow-2xl text-left w-72"
                >
                  <h3 className="text-xl font-semibold text-[#f4c20d] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#ffffff]">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes scale-x {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          .animate-scale-x {
            animation: scale-x 2s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default WorkProcessPremiumFinal;

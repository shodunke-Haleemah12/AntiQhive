import React from "react";
import { FiSearch, FiSettings, FiCode, FiCheckCircle } from "react-icons/fi";

const WorkProcessCorporate = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      description:
        "We start by understanding your business, goals, and audience to create a tailored approach.",
      icon: <FiSearch className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Strategize",
      description:
        "We design a roadmap and strategy that ensures measurable results and efficiency.",
      icon: <FiSettings className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Develop",
      description:
        "Our team executes with precision, creating high-quality solutions for your business.",
      icon: <FiCode className="w-6 h-6 text-white" />,
      color: "bg-pink-500",
    },
    {
      id: 4,
      title: "Deliver & Support",
      description:
        "We deliver on time and provide ongoing support to ensure smooth operations.",
      icon: <FiCheckCircle className="w-6 h-6 text-white" />,
      color: "bg-green-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">How We Work</h2>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded"></div>
        <p className="text-gray-500 mb-16">
          Our proven process ensures efficiency, quality, and results you can
          trust.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl text-left"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${step.color} mb-6 shadow-md`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessCorporate;

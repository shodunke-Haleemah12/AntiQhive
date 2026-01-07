import React from "react";
import { FiSearch, FiSettings, FiCheckCircle, FiSmile } from "react-icons/fi";

const WorkProcessModern = () => {
  const steps = [
    {
      id: 1,
      title: "Research",
      description:
        "We analyze your needs, target audience, and goals to ensure a solid foundation.",
      icon: <FiSearch className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      title: "Planning",
      description:
        "We create a detailed roadmap with clear milestones and strategies.",
      icon: <FiSettings className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    },
    {
      id: 3,
      title: "Execution",
      description:
        "Our team executes the plan with creativity, precision, and best practices.",
      icon: <FiCheckCircle className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
    {
      id: 4,
      title: "Delivery & Support",
      description:
        "We deliver results on time and provide ongoing support for smooth operation.",
      icon: <FiSmile className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-r from-green-400 to-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Our Work Process
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded"></div>
        <p className="text-gray-500 mb-12">
          A step-by-step approach to ensure quality and efficiency in every
          project.
        </p>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Step number / icon */}
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full ${step.gradient} text-white text-xl font-bold flex-shrink-0`}
              >
                {index + 1}
              </div>

              {/* Step text */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessModern;

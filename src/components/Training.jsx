import React from "react"; 
import { FaCheckCircle, FaArrowRight, FaAward, FaUsers, FaProjectDiagram } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from "react-router-dom";

const Training = () => {
  const programs = [
    {
      title: "UI/UX Designing",
      desc: [
        "Learn user-centered design principles",
        "Wireframing and prototyping",
        "Design systems and style guides",
        "Tools: Figma, Adobe XD",
        "Create portfolio-ready UI projects",
      ],
    },
    {
      title: "Product & Brand Designing",
      desc: [
        "Brand identity and visual strategy",
        "Product visual design and mockups",
        "Packaging & digital asset creation",
        "Real-world project exercises",
        "Understanding target audience & market",
      ],
    },
    {
      title: "Web Designing",
      desc: [
        "Responsive layouts and grids",
        "Typography & color theory",
        "Modern web design tools",
        "Portfolio-ready project creation",
        "UX considerations for web interactions",
      ],
    },
    {
      title: "Software Development",
      desc: [
        "Front-end & back-end fundamentals",
        "Building functional web apps",
        "Version control and collaboration",
        "Project-based learning with mentorship",
        "Deploy projects and connect APIs",
      ],
    },
  ];

  const steps = [
    "Apply & Register",
    "Live Training",
    "Hands-on Projects",
    "Mentorship",
    "Certification",
  ];

  const impactStats = [
    {
      icon: <FaUsers />,
      number: "300+",
      label: "Students Trained",
    },
    {
      icon: <FaAward />,
      number: "11",
      label: "Industry Awards",
    },
    {
      icon: <FaProjectDiagram />,
      number: "120+",
      label: "Projects Completed",
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      <Navbar/>

      {/* HERO */}
      <section className="bg-black text-white py-28 px-6 text-center">
        <div data-aos="fade-up" data-aos-duration="1500" >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Tech Training at <span className="text-[#f4c20d]">Anti</span>qhive
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Learn in-demand design and development skills through hands-on training
          and real-world projects.
        </p>
        <NavLink to="/Contact">
          <button className="mt-10 bg-[#f4c20d] text-black px-12 py-4 rounded-full font-semibold 
          hover:bg-black hover:text-white transition">
            Enroll Now
          </button>
        </NavLink>
        </div>
      </section>

      {/* OUR TRAINING PROGRAMS */}
      <section className="max-w-7xl mx-auto py-28 px-6" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          Our Training Programs
        </h2>

        <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((program, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 200}
              className="group bg-black rounded-2xl p-14 min-h-[360px] shadow-lg border-2 border-transparent hover:border-[#f4c20d] hover:bg-[#f4c20d] hover:text-black transition duration-300"
            >
              <h3 className="text-3xl font-bold mb-6 leading-snug text-white group-hover:text-black">
                {program.title}
              </h3>

              <ul className="list-disc list-inside text-base text-white leading-relaxed space-y-2 group-hover:text-black">
                {program.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* REAL IMPACT STATS */}
      <section className="bg-gray-50 py-24 px-6">
        <h2
          className="text-3xl font-semibold text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Our Real Impact
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-3 text-center">
          {impactStats.map((stat, index) => {
            const isMiddle = index === 1;
            const aosEffect = index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left";

            return (
              <div
                key={index}
                data-aos={aosEffect}
                data-aos-duration="1500"
                data-aos-delay={index * 200}
                className={`group rounded-2xl p-10 shadow-lg transition 
                  ${isMiddle
                    ? "bg-[#f4c20d] text-black hover:bg-black hover:text-[#f4c20d]"
                    : "bg-black text-white hover:bg-[#f4c20d] hover:text-black"
                  }`}
              >
                <div className="mb-4 flex justify-center">
                  {React.cloneElement(stat.icon, {
                    className: `text-4xl transition-colors duration-500 ${
                      isMiddle
                        ? "text-black group-hover:text-[#f4c20d]"
                        : "text-[#f4c20d] group-hover:text-black"
                    }`,
                  })}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW THE TRAINING WORKS */}
      <section className="bg-gray-50 py-28 px-6" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="text-3xl font-semibold text-center mb-16">
          How the Training Works
        </h2>

        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max justify-center overflow-x-auto scrollbar-hide">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay={index * 150}
                  className="px-10 py-6 rounded-full bg-white shadow-md font-medium hover:bg-[#f4c20d] hover:text-black transition"
                >
                  {step}
                </div>

                {index !== steps.length - 1 && (
                  <FaArrowRight className="text-[#f4c20d] text-2xl" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="max-w-5xl mx-auto py-28 px-6" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Training Built for Real Results
        </h2>

        <ul className="grid gap-8 md:grid-cols-2">
          {[
            "Hands-on learning with real-world projects",
            "Mentorship and guidance at every stage",
            "Industry-relevant skills employers value",
            "Portfolio projects you can confidently present",
          ].map((item, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={i * 200}
              className="flex items-start gap-4 bg-black p-8 rounded-2xl hover:bg-[#f4c20d] hover:text-black transition text-white group"
            >
              <FaCheckCircle className="text-[#f4c20d] mt-1 text-lg group-hover:text-black" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 px-6 text-center" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Your Tech Journey?
        </h2>
        <NavLink to="/Contact">
          <button className="bg-[#f4c20d] text-black px-14 py-4 rounded-full font-semibold hover:bg-white transition">
            Apply Now
          </button>
        </NavLink>
      </section>

      <Footer/>
    </div>
  );
};

export default Training;

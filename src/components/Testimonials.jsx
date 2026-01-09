import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import person1 from "../assets/abdulwahab adi.jpg";
import person2 from "../assets/akim olu.jpg";
import person3 from "../assets/akin alabi.jpg";
import person4 from "../assets/andra.jpg";

const testimonials = [
  {
    text: "Thanks to the efforts of the team, our company's website is now cutting-edge and user-friendly. Their digital marketing expertise is top notch.",
    name: "Abdullahi Akin",
    company: "Louis Vuittony",
    image: person1,
  },
  {
    text: "Working with this team was an absolute pleasure. They delivered beyond expectations and ahead of schedule.",
    name: "Ronald Richards",
    company: "IBM",
    image: person2,
  },
  {
    text: "Professional, creative, and reliable. I highly recommend them for any digital project.",
    name: "Akinade Okiki",
    company: "EBay",
    image: person3,
  },
  {
    text: "Professional, creative, and reliable. I highly recommend them for any digital project.",
    name: "Bessie Cooper",
    company: "Pizza Hut",
    image: person4,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const next = () => {
    setAnimate(true); // trigger exit animation
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setAnimate(false); // trigger entry animation
    }, 500); // matches animation duration
  };

  const prev = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAnimate(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(next, 9000); // slower: 7s
    return () => clearInterval(interval);
  }, []);

  const { text, name, company, image } = testimonials[index];

  return (
    <section className="bg-black text-white py-28 relative overflow-hidden">
     <div className="max-w-4xl mx-auto px-6 text-center min-h-[320px] flex items-center justify-center">
  <div
    key={index}
    className={`w-full transition-all duration-500 ${
      animate ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
    }`}
  >

        {/* Quote */}
        <FaQuoteLeft className="text-5xl mx-auto mb-10 opacity-30" />

        {/* Text */}
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          {text}
        </p>

        {/* Person */}
        <div className="flex items-center justify-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold">{name}</h4>
            <span className="text-sm text-gray-400">{company}</span>
          </div>
        </div>
      </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-20 top-1/2 -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition"
      >
        <FaChevronLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-20 top-1/2 -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition"
      >
        <FaChevronRight size={22} />
      </button>
    </section>
  );
};

export default Testimonials;

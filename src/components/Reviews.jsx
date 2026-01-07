import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Thanks to the efforts of the team, our company's website is now cutting-edge and user-friendly. Their digital marketing expertise is without a doubt deserving of praise.",
    name: "Mike Johnson",
    company: "DEF Technologies",
    image: "/profile1.jpg",
  },
  {
    text: "Working with this team was an absolute pleasure. They delivered beyond expectations and ahead of schedule.",
    name: "Sarah Williams",
    company: "Creative Studio",
    image: "/profile2.jpg",
  },
  {
    text: "Professional, creative, and reliable. I highly recommend them for any digital project.",
    name: "Daniel Brown",
    company: "Tech Solutions",
    image: "/profile3.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { text, name, company, image } = testimonials[index];

  return (
    <div className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      {/* Quotes */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 text-[200px]">
        “”
      </div>

      {/* Testimonial Text */}
      <p className="max-w-3xl mx-auto text-lg leading-relaxed transition-all duration-700">
        {text}
      </p>

      {/* Profile */}
      <div className="mt-10 flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <h4 className="font-semibold">{name}</h4>
        <span className="text-sm text-gray-400">{company}</span>
      </div>
    </div>
  );
};

export default Testimonial;

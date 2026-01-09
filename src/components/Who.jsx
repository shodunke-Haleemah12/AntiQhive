import React, { useState } from "react";

const Who = () => {
  const [showLongVersion, setShowLongVersion] = useState(false);

  const handleToggle = () => {
    setShowLongVersion(!showLongVersion);
  };

  return (
    <div>
      <div className="bg-black px-12 pt-8 pb-16 flex flex-col gap-10">
        <div data-aos="fade-right" data-aos-duration="2000">
          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 rounded-full bg-[#f4c20d] animate-pulse shadow-[0_0_12px_rgba(244,194,13,0.7)]"></span>
            <h3 className="text-6xl text-[#f4c20d] font-light">Who We Are</h3>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000">
          <h1 className="text-6xl text-white font-normal leading-tight transition-all duration-500 hover:text-[#f4c20d]/90 hover:tracking-wide">
            Your vision isn't just uncommon, For it's <br />
            your competitive advantage. For Since <br />
            2022 we’ve helped 160+ organizations <br />
            rally around their own vision to unlock <br />
            growth and lead to their categories.
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="flex justify-end">
            <button
              onClick={handleToggle}
              className="group bg-black text-white py-3 px-6 rounded-3xl border-2 border-[#f4c20d] w-72 text-xl
  relative overflow-hidden transition-all duration-500 hover:bg-[#f4c20d] hover:text-black"
            >
              <span className="absolute inset-0 bg-[#f4c20d] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10">Read the long version</span>
            </button>
          </div>
        </div>

        {/* Long version content */}
        {showLongVersion && (
          <div className="bg-gray-900 text-white p-8 rounded-xl mt-6" data-aos="fade-up" data-aos-duration="2000">
            <h2 className="text-4xl font-semibold mb-4">The Full Story</h2>
            <p className="text-lg leading-relaxed mb-4">
              Since our founding in 2016, we’ve partnered with over 160+ organizations, helping them articulate and
              rally around their unique visions. Our approach combines strategic insight, creative design, and
              actionable plans that unlock growth and market leadership.  
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We believe that your vision is your competitive advantage. By focusing on what makes you different, we
              help you craft strategies that resonate with your audience, inspire your team, and drive measurable
              success.
            </p>
            <p className="text-lg leading-relaxed">
              Our methodology emphasizes collaboration, transparency, and innovation. Every project is tailored to the
              specific needs of our clients, ensuring that the solutions we deliver are both impactful and sustainable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Who;

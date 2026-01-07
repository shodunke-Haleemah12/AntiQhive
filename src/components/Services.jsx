import React from "react";
import Ourservices from "./Ourservices";
import Navbar from "./Navbar";
import ServicesText from "./ServicesText";
import ServiceCard from "./ServiceCard";
import { FaPenFancy, FaLaptopCode, FaBullhorn } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import WorkProcessPremiumFinal from "./WorkProcess";
import Ready from "./Ready";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import WorkTogether from "./WorkTogether";
const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesText />
     <div className="w-full flex flex-wrap justify-center gap-8 pt-10 pb-20 bg-black group-hover:text-red-600">
  <div data-aos="fade-up" data-aos-duration="2000">
    <ServiceCard
      number={1}
      icon={<FaLaptopCode size={30} color="#f4c20d" />}
      title="Web Designing"
      text="Crafting visually stunning and responsive websites that deliver seamless user experiences and strong online presence."
    />
  </div>
  <div data-aos="fade-up" data-aos-duration="2000">
    <ServiceCard
      number={2}
      icon={<FaPenFancy size={30} color="#f4c20d" />}
      title="UI UX Designing"
      text="Designing intuitive interfaces and user experiences that make navigation effortless and engaging for your audience."
    />
  </div>
  <div data-aos="fade-up" data-aos-duration="2000">
    <ServiceCard
      number={3}
      icon={<FaBullhorn size={30} color="#f4c20d" />}
      title="Mobile Development"
      text="Building high-performance mobile apps for iOS and Android that are fast, reliable, and user-friendly and creating visuals for brands and campaigns."
    />
  </div>
  <div data-aos="fade-up" data-aos-duration="2000">
    <ServiceCard
      number={4}
      icon={<GrCloudSoftware size={30} color="#f4c20d" />}
      title="Software Development"
      text="Developing custom software solutions tailored to your business needs for efficiency, scalability, and innovation."
    />
  </div>
  <div data-aos="fade-up" data-aos-duration="2000">
    <ServiceCard
      number={5}
      icon={<MdOutlineBrandingWatermark size={30} color="#f4c20d" />}
      title="Brand Design"
      text="Creating compelling brand identities that resonate with your audience and elevate your business recognition."
    />
  </div>
  <div data-aos="fade-up" data-aos-duration="2000">
    <ServiceCard
      number={6}
      icon={<LuPackage size={30} color="#f4c20d" />}
      title="Packaging"
      text="Designing attractive and functional packaging solutions that enhance product appeal and strengthen brand image."
    />
  </div>
</div>

      <WorkTogether />
      <WorkProcessPremiumFinal />
      <Testimonial />
      <Ready />
      <Footer />
    </div>
  );
};

export default Services;

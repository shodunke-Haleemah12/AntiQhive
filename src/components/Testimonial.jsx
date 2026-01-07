import React from "react";
import i from "../assets/i.png.png";
import im from "../assets/im.png";
import ima from "../assets/ima.png";
import imag from "../assets/imag.png";
import image from "../assets/image.png";
import images from "../assets/images.png";
const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-black py-12 px-12 gap-18">
        <div className="flex flex-col gap-8 items-center justify-center text-[#f4c20d]">
          <h1 className="text-8xl pt-28" style={{ fontFamily: "Satoshi" }}>
            What our <br />
            <h1 className="text-8xl italic" style={{ fontFamily: "Gambetta" }}>
              clients say
            </h1>{" "}
          </h1>
          <p
            className="text-base font-semibold text-center tracking-wider text-[#f4c20d]"
            style={{ fontFamily: "Chillax" }}
          >
            See what our clients have to say about working with us and the
            results <br />
            we helped them achieve
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-7 px-6 py-4 border-2 border-[#262626] rounded-3xl bg-[#131313] justify-center hover:border-2 hover:border-[#f4c20d]">
            <p
              className="text-base text-[#ffffff]"
              style={{ fontFamily: "Stringer-Trial" }}
            >
              AntiQhive is top-notch. They crafted a <br /> stunning website
              for my business, attentively <br /> addressing all my needs and
              providing <br /> exceptional customer service throughout the{" "}
              <br /> process. I highly recommend their services
            </p>
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-18 h-18" src={i} alt="" />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-2xl text-[#f4c20d]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Devon Lane
                </h1>
                <p
                  className="text-base text-[#745874]"
                  style={{ fontFamily: "Stringer-Trial" }}
                >
                  The Walt Disney Company
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 px-6 py-4 border-2 border-[#262626] rounded-3xl bg-[#131313] justify-center hover:border-2 hover:border-[#f4c20d]">
            <p
              className="text-base text-[#ffffff]"
              style={{ fontFamily: "Stringer-Trial" }}
            >
              AntiQhive's UI/UX team crafted an intuitive,
              <br /> visually stunning interface. User engagement <br />{" "}
              skyrocketed, and the seamless experience has <br /> received
              overwhelmingly positive feedback.{" "}
            </p>
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-18 h-18" src={im} alt="" />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-2xl text-[#f4c20d]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Ronald Richards
                </h1>
                <p
                  className="text-base text-[#745874]"
                  style={{ fontFamily: "Stringer-Trial" }}
                >
                  IBM
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 px-6 py-4 border-2 border-[#262626] rounded-3xl bg-[#131313] justify-center hover:border-2 hover:border-[#f4c20d]">
            <p
              className="text-base text-[#ffffff]"
              style={{ fontFamily: "Stringer-Trial" }}
            >
              AntiQhive built a high-performing, visually <br /> appealing
              website. The site’s speed, <br /> responsiveness, and
              functionality have driven <br /> increased traffic and conversions
              for our <br /> business.
            </p>
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-18 h-18" src={ima} alt="" />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-2xl text-[#f4c20d]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Annette Black
                </h1>
                <p
                  className="text-base text-[#745874]"
                  style={{ fontFamily: "Stringer-Trial" }}
                >
                  eBay
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 px-6 py-4 border-2 border-[#262626] rounded-3xl bg-[#131313] justify-center hover:border-2 hover:border-[#f4c20d]">
            <p
              className="text-base text-[#ffffff]"
              style={{ fontFamily: "Stringer-Trial" }}
            >
              AntiQhive’s software development team <br /> delivered a custom
              solution that is both robust <br /> and scalable. It has
              streamlined our operations <br /> and significantly improved our
              overall <br /> business efficiency.
            </p>
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-18 h-18" src={imag} alt="" />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-2xl text-[#f4c20d]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Leslie Alexander
                </h1>
                <p
                  className="text-base text-[#745874]"
                  style={{ fontFamily: "Stringer-Trial" }}
                >
                  Louis Vuittony
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 px-6 py-4 border-2 border-[#262626] rounded-3xl bg-[#131313] justify-center hover:border-2 hover:border-[#f4c20d]">
            <p
              className="text-base text-[#ffffff]"
              style={{ fontFamily: "Stringer-Trial" }}
            >
              AntiQhive expertly managed our branding, <br /> UI/UX, web,
              mobile, and software <br /> development needs. Their cohesive,
              high- <br />
              quality work has elevated our business and <br /> positioned us
              strongly in the market.
            </p>
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-18 h-18" src={image} alt="" />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-2xl text-[#f4c20d]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Bessie Cooper
                </h1>
                <p
                  className="text-base text-[#745874]"
                  style={{ fontFamily: "Stringer-Trial" }}
                >
                  Pizza Hut
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 px-6 py-4 border-2 border-[#262626] rounded-3xl bg-[#131313] justify-center hover:border-2 hover:border-[#f4c20d]">
            <p
              className="text-base text-[#ffffff]"
              style={{ fontFamily: "Stringer-Trial" }}
            >
              AntiQhive created a user-friendly, <br /> beautifully designed
              mobile app that has <br /> become integral to our business.
              Customers <br />
              love its functionality, and it has enhanced our <br /> overall
              service offering.
            </p>
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-18 h-18" src={images} alt="" />
              <div className="flex flex-col gap-2">
                <h1
                  className="text-2xl text-[#f4c20d]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Dianne Russell
                </h1>
                <p
                  className="text-base text-[#745874]"
                  style={{ fontFamily: "Stringer-Trial" }}
                >
                  eBay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

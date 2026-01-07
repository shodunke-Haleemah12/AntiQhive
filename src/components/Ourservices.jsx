import React from "react";
import fea from "../assets/feather_check-circle.png";
import purple from "../assets/purple.png";
import purple2 from "../assets/purple2.png";
import purple3 from "../assets/purple3.png";
import purple4 from "../assets/purple4.png";
import purple5 from "../assets/purple5.png";
const Ourservices = () => {
  return (
    <div>
      <div className="pl-35 pr-35 pb-10 ">
        <div className="flex gap-14 items-center justify-center pt-18 pb-18 bg-black shadow-xl">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <h1
                className="text-4xl font-bold "
                style={{ fontFamily: "IBM Plex Sans" }}
              >
                Brand Design
              </h1>
              <p className="text-lg leading-9 font-medium">
                Brand design is the process of creating a visual identity <br />{" "}
                that represents a brand. It involves crafting a distinctive{" "}
                <br /> and memorable visual language that communicates the{" "}
                <br /> essence and personality of a business or product.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">logo</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">color palette</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">typography</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">component</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">other visual elements</p>
              </div>
            </div>
          </div>
          <img src={purple} alt="" />
        </div>
      </div>

      <div className="pl-35 pr-35 pb-10">
        <div className="flex gap-14 items-center justify-center pt-18 pb-18 bg-black shadow-xl">
          <div className="flex flex-col gap-14 ">
            <div className="flex flex-col gap-5">
              <h1
                className="text-4xl font-bold "
                style={{ fontFamily: "IBM Plex Sans" }}
              >
                UI/UX
              </h1>
              <p className="text-lg leading-9 font-medium">
                This focuses on the design and functionality of digital <br />{" "}
                products such as websites, mobile apps and software. UI <br />{" "}
                design ensures that the product is visually appealing, user{" "}
                <br /> friendly. UX design considers how users interact with the{" "}
                <br /> product and aims to make their journey smooth and <br />{" "}
                enjoyable
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">user research</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">wire framing</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">prototyping</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">interaction design</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">mobile design</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">web design</p>
              </div>
            </div>
          </div>
          <img src={purple2} alt="" />
        </div>
      </div>

      <div className="pl-35 pr-35 pb-10">
        <div className="flex gap-14 items-center justify-center pt-18 pb-18 bg-black shadow-xl">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <h1
                className="text-4xl font-bold "
                style={{ fontFamily: "IBM Plex Sans" }}
              >
                Mobile Development
              </h1>
              <p className="text-lg leading-9 font-medium">
                Involves creating applications (apps) for smartphones and <br />{" "}
                tablets. It includes both iOS (Apple) and Android (Google){" "}
                <br /> platforms. Mobile development ensures that your app{" "}
                <br /> functions flawlessly on these devices, with a
                user-friendly <br /> interface.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">UI/UX</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">Mobile app design</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">
                  iOS and Android Development
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">Quality Assurance</p>
              </div>
            </div>
          </div>
          <img src={purple3} alt="" />
        </div>
      </div>

      <div className="pl-35 pr-35 pb-10">
        <div className="flex gap-14 items-center justify-center pt-18 pb-18 bg-black shadow-xl">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <h1
                className="text-4xl font-bold "
                style={{ fontFamily: "IBM Plex Sans" }}
              >
                Web Development
              </h1>
              <p className="text-lg leading-9 font-medium">
                Involves building websites from the ground up. It covers <br />{" "}
                both the front-end (what users see and interact with) and <br />{" "}
                the back-end (the technical and functional aspects). It's <br />{" "}
                not just about creating a website that looks great but also{" "}
                <br /> ensuring it's responsive, performs well, and offers a{" "}
                <br /> smooth experience.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">UI/UX</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">
                  Front and back end development
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">Back end</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">API Integration</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">Plug in development</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">
                  Security and Data Protectiont
                </p>
              </div>
            </div>
          </div>
          <img src={purple4} alt="" />
        </div>
      </div>

      <div className="pl-35 pr-35 pb-10">
        <div className="flex gap-14 items-center justify-center pt-18 pb-18 bg-black drop-shadow-sm">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <h1
                className="text-4xl font-bold "
                style={{ fontFamily: "IBM Plex Sans" }}
              >
                Software Development
              </h1>
              <p className="text-lg leading-9 font-medium">
                involves creating custom software applications and <br />{" "}
                systems which can range from desktop applications to <br />
                complex systems used in various industries. We help <br />{" "}
                develop software solutions tailored to your specific needs
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">user research</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">wire framing</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">prototyping</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">interaction design</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">mobile design</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-4 h-4" src={fea} alt="" />
                <p className="text-lg font-medium">web design</p>
              </div>
            </div>
          </div>
          <img src={purple5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ourservices;

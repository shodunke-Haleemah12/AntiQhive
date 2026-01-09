import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("wh14OpquFJpww3uDU"); // keep your public key here

const Details = () => {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Selected projects
  const [selected, setSelected] = useState([]);

  // Toggle project selection
  const toggleSelection = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Submit handler (EMAIL SEND)
  const handleSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !company ||
      selected.length === 0
    ) {
      alert("Please fill all required fields and select at least one project.");
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      email,
      company,
      message,
      projects: selected.join(", "),
    };

    // Send email using EmailJS
    emailjs.send("service_n9mp1md", "template_fd3wvxp", templateParams).then(
      (response) => {
        alert("Your application has been sent successfully 🚀");

        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setSelected([]);
      },
      (error) => {
        // Show detailed error in console for debugging
        console.error("EmailJS Error:", error);
        alert(
          `Something went wrong. Please try again.\nError: ${
            error.text || error.message
          }`
        );
      }
    );
  };

  return (
    <div className="flex gap-12 justify-center items-center bg-black pb-16 pt-16">
      {/* Form */}
      <div data-aos="fade-right" data-aos-duration="2000">
        <div className="flex flex-col gap-12">
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="First name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-82 text-xl bg-transparent text-white placeholder-white border-b-2 border-white py-3 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-82 text-xl bg-transparent text-white placeholder-white border-b-2 border-white py-3 focus:outline-none"
            />
          </div>

          <div className="flex gap-6">
            <input
              type="email"
              placeholder="Business e-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-82 text-xl bg-transparent text-white placeholder-white border-b-2 border-white py-3 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company*"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-82 text-xl bg-transparent text-white placeholder-white border-b-2 border-white py-3 focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-white w-full h-48 p-4 text-white bg-transparent resize-none focus:outline-none"
          />
        </div>
      </div>

      {/* Project Buttons */}
      <div data-aos="fade-left" data-aos-duration="2000">
        <div className="flex flex-col gap-10">
          <h3 className="text-3xl font-semibold text-[#ffffff]">
            I'm interested in...
          </h3>

          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              {["Branding", "Web Design", "Brand Design"].map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleSelection(item)}
                  className={`text-black text-lg font-semibold 
                    bg-[#f4c20d] 
                    px-6 py-3 
                    rounded-full 
                    shadow-md shadow-[rgba(244,194,13,0.4)]
                    border border-[#d6a60b]
                    transition-all duration-200
                    ${
                      selected.includes(item)
                        ? "bg-black text-white border border-[#f4c20d] shadow-[rgba(244,194,13,0.5)]"
                        : ""
                    }
                    hover:bg-black hover:text-white hover-border hover:border-dashed hover:border-[#f4c20d]`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              {["UI/UX", "Software Development", "Decks"].map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleSelection(item)}
                  className={`text-black text-lg font-semibold 
                    bg-[#f4c20d] 
                    px-6 py-3 
                    rounded-full 
                    shadow-md shadow-[rgba(244,194,13,0.4)]
                    border border-[#d6a60b]
                    transition-all duration-200
                    ${
                      selected.includes(item)
                        ? "bg-black text-white border border-[#f4c20d] shadow-[rgba(244,194,13,0.5)]"
                        : ""
                    }
                    hover:bg-black hover:text-white hover-border hover:border-dashed hover:border-[#f4c20d]`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              {["Web Development", "Other"].map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleSelection(item)}
                  className={`text-black text-lg font-semibold 
                    bg-[#f4c20d] 
                    px-7 py-3 
                    rounded-full 
                    shadow-md shadow-[rgba(244,194,13,0.4)]
                    border border-[#d6a60b]
                    transition-all duration-200
                    ${
                      selected.includes(item)
                        ? "bg-black text-white border border-[#f4c20d] shadow-[rgba(244,194,13,0.5)]"
                        : ""
                    }
                    hover:bg-black hover:text-white hover-border hover:border-dashed hover:border-[#f4c20d]`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-black border-2 border-[#f4c20d] px-10 py-4 text-2xl font-semibold text-white rounded-full shadow-md shadow-black/30 transition-all duration-200 hover:bg-[#f4c20d] hover:text-black hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(244,194,13,0.7)] cursor-pointer"
            >
              Let's do it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

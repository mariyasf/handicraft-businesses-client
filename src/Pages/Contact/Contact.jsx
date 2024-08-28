// ContactUs.js
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-40 px-5 lg:px-0 pb-10">
      <div className=" text-left mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact <span className="text-orange-500">US</span></h1>
        <p className="text-lg lg:text-xl font-bold text-yellow-300">
          We'd love to hear from you! Reach out to us with any questions or feedback.
        </p>
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row  w-full">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://banglacraft.org/wp-content/uploads/2023/01/October.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 p-8 bg-gray-100 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6" style={{ fontFamily: "Rancho, cursive" }}>
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold text-left"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="text-gray-700 w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary-color-1"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold text-left"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className=" text-gray-700 w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary-color-1"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold text-left"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full text-gray-700 px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary-color-1"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 mt-4 bg-orange-800 text-white font-semibold rounded-md shadow hover:bg-orange-500 transition-colors"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

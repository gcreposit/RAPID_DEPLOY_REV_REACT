import React, { useState } from "react";
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // For the icons

const MainContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-40"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?electric-vehicles,green-energy')",
        }}
      ></div>

      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl p-12 space-y-8 z-10">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-lg text-gray-600">We'd love to hear from you. Please drop your message and we will get back to you.</p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 transition duration-300 flex items-center justify-center space-x-3"
            >
              <FaPaperPlane />
              <span>Send Message</span>
            </button>
          </div>
        </form>

        {/* Footer Section */}
        <div className="mt-12 space-y-4">
          <p className="text-center text-sm text-gray-500">
            By contacting us, you agree to our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>

          {/* Contact Info Section */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <FaMapMarkerAlt />
              <span>Uttar Pradesh Renewable and EV Infrastructure Limited, Lucknow, UP</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaPhoneAlt />
              <span>(0522) 2345678</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaEnvelope />
              <span>contact@upev.gov.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContact;

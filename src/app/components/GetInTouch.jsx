'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaFileAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[rgb(19,19,24)] flex flex-col items-center justify-center p-8">
      <div className="text-center text-white mb-12">
        <h1 className="text-5xl font-bold text-blue-500">Contact Us</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Have a business inquiry or need IT support? Get in touch with us. Our team is ready to assist you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Contact Information */}
        <div className="bg-[rgb(30,30,40)] text-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center border border-gray-700 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
          <FaMapMarkerAlt className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">Office Address</h3>
          <p className="text-gray-300 mt-2">[Your U.S. Office Location]</p>
        </div>
        <div className="bg-[rgb(30,30,40)] text-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center border border-gray-700 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
          <FaPhoneAlt className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">Phone</h3>
          <p className="text-gray-300 mt-2">[Your Business Contact Number]</p>
        </div>
        <div className="bg-[rgb(30,30,40)] text-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center border border-gray-700 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
          <FaEnvelope className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold">Email</h3>
          <p className="text-gray-300 mt-2">[Your Business Email Address]</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-12 text-center text-white">
        <h2 className="text-3xl font-semibold">Follow Us</h2>
        <p className="text-gray-300 mt-2">Stay connected through our social media channels:</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-blue-400 text-5xl hover:text-white transition-all transform hover:scale-125"><FaLinkedin /></a>
          <a href="#" className="text-blue-400 text-5xl hover:text-white transition-all transform hover:scale-125"><FaTwitter /></a>
          <a href="#" className="text-blue-400 text-5xl hover:text-white transition-all transform hover:scale-125"><FaFacebook /></a>
        </div>
      </div>

      {/* Privacy Policy & Terms Section */}
      <div className="mt-20 px-6 text-center text-white max-w-1xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-blue-500 mb-6">Privacy Policy & Terms of Service</h2>

      {/* Description */}
      <p className="text-gray-300 text-justify text-lg leading-relaxed">
        At <span className="font-semibold text-white">Ecquint IT Solutions</span>, we prioritize data security and transparency.  
        Our privacy policy details how we handle user data, ensuring strict compliance with industry regulations.  
        We are dedicated to protecting your personal and business information while delivering reliable IT solutions.  
        For more information on data usage, service agreements, and user rights, refer to our policies below.
      </p>

      {/* Links Section */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <a
          href="#"
          className="flex items-center space-x-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          <FaFileAlt className="text-xl" />
          <span>Read Privacy Policy</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 text-lg font-medium bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          <FaFileAlt className="text-xl" />
          <span>View Terms & Conditions</span>
        </a>
      </div>
      </div>
    </div>
  );
}
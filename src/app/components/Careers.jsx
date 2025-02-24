"use client"
import { useState } from "react";

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-[rgb(19,19,24)] h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4069291/pexels-photo-4069291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-fixed"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center h-screen px-6 md:px-20 text-white overflow-y-auto space-y-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Career</h1>
          <p className="mt-4 text-lg">
            We are always looking for talented professionals to join our team. At Ecquint IT Solutions, we foster an environment of innovation, collaboration, and continuous learning. Our employees benefit from competitive salaries, a flexible work environment, and opportunities for career advancement.
          </p>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg">
            We are currently hiring for roles such as Software Engineer, Cloud Solutions Architect, Cybersecurity Analyst, and IT Support Specialist. If you are passionate about technology and want to be part of a dynamic team, we invite you to explore our career opportunities.
          </p>
        </div>

        {/* Apply Now Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Apply Now
        </button>
      </div>

      {/* Apply Now Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Apply for a Job</h2>

            {/* Application Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Upload Resume</label>
                <input type="file" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:border-none file:rounded-md hover:file:bg-blue-700 transition duration-300" accept=".pdf,.doc,.docx" required />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;
